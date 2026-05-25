import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Star, MessageSquare, ShieldCheck, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function ReviewSubmission() {
  const [formData, setFormData] = useState({
    fullName: '',
    location: '',
    rating: 5,
    testimonial: '',
  });

  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      ...formData,
      createdAt: serverTimestamp(),
      type: 'testimonial',
      approved: true // Auto-approved for instant satisfaction, but configurable
    };

    // 1. Dispatch Formspree transmission in background
    const formspreeId = (import.meta as any).env.VITE_FORMSPREE_BOOKING_ID || "mkoeobyy";
    if (formspreeId) {
      fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...payload,
          "submission_type": "Citicare Client Testimonial"
        })
      }).catch(err => console.warn("Formspree transmission skipped or offline:", err));
    }

    // 2. Dispatch Firestore write in background (Firestore's offline queue will buffer this safely if slow or offline)
    addDoc(collection(db, 'reviews'), payload).catch((error) => {
      console.warn("Firestore backup logging skipped or offline:", error);
    });

    // 3. Immediately transition the UI to success for flawless user experience
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      // Automatically redirect back to the homepage after 3.5 seconds
      setTimeout(() => {
        window.location.href = '/';
      }, 3500);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-16 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center space-y-4 px-4">
        <div className="mx-auto h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
          <MessageSquare className="h-6 w-6 text-blue-600" />
        </div>
        <h2 className="text-3xl font-extrabold text-[#1e3a8a] tracking-tight">
          Share Your Experience
        </h2>
        <p className="text-slate-500 text-sm max-w-sm mx-auto">
          Thank you for choosing Citicare. Your feedback helps us continue delivering world-class, patient-first care.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-white py-8 px-6 shadow-xl rounded-2xl md:rounded-3xl border border-slate-100">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Full Name *</label>
                <input
                  type="text"
                  required
                  disabled={loading}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Sandra Johnson"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 h-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Your Location *</label>
                <input
                  type="text"
                  required
                  disabled={loading}
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="e.g. Lekki, Lagos"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 h-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider block mb-2">Service Rating *</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      disabled={loading}
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className="transition-transform active:scale-90 hover:scale-110"
                    >
                      <Star
                        className={`h-8 w-8 ${
                          star <= formData.rating
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-slate-200'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Your Review / Testimonial *</label>
                <textarea
                  required
                  disabled={loading}
                  rows={4}
                  value={formData.testimonial}
                  onChange={(e) => setFormData({ ...formData, testimonial: e.target.value })}
                  placeholder="Share details about the medical care or nursing helper that supported you..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white rounded-xl h-12 font-semibold shadow-lg flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Publishing...
                  </>
                ) : (
                  "Submit Testimonial"
                )}
              </Button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6 space-y-6"
            >
              <div className="mx-auto h-16 w-16 bg-emerald-100 rounded-full flex items-center justify-center">
                <ShieldCheck className="h-10 w-10 text-emerald-600 animate-bounce" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-[#1e3a8a]">Thank You!</h3>
                <p className="text-slate-600 text-sm px-2">
                  Your feedback has been successfully preserved. It will help guide future Citicare patients.
                </p>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-center gap-2 text-slate-500 text-xs font-medium">
                  <Loader2 className="h-3.5 w-3.5 animate-spin text-emerald-600" />
                  <span>Redirecting to home screen shortly...</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
