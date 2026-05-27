import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, Clock, Loader2, Award } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Booking() {
  const [loading, setLoading] = React.useState(false);
  const [searchParams] = useSearchParams();
  const initSpecialty = searchParams.get('specialty') || '';
  const initNursingService = searchParams.get('nursingService') || '';
  const [notesText, setNotesText] = React.useState('');

  useEffect(() => {
    if (initSpecialty) {
      setNotesText(`Consultation request for the ${initSpecialty} Department.`);
    } else if (initNursingService) {
      setNotesText(`Consultation request for ${initNursingService} Home Healthcare service.`);
    }
  }, [initSpecialty, initNursingService]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      date: formData.get('date') as string,
      time: formData.get('time') as string,
      service: formData.get('service') as string,
      notes: formData.get('notes') as string,
      type: 'booking',
    };

    const formspreeId = (import.meta as any).env.VITE_FORMSPREE_BOOKING_ID || "mkoeobyy";
    if (formspreeId) {
      fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          "submission_type": "Citicare Booking Appointment"
        })
      }).catch((err) => {
        console.warn("Formspree transmission warning: ", err);
      });
    }

    const path = 'appointments';
    addDoc(collection(db, path), {
      ...data,
      createdAt: serverTimestamp(),
    }).catch((error) => {
      console.warn("Firestore backup logging skipped or offline:", error);
    });

    // Holds loading spinner state inside button for 3 seconds of high-fidelity processing, then redirects back home
    setTimeout(() => {
      setLoading(false);
      window.location.href = '/';
    }, 3000);
  };

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-5 sm:px-6 space-y-10">
          <div className="text-center space-y-4">
            <span className="text-blue-600 font-semibold uppercase tracking-wider text-xs">Appointment Booking</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a8a] leading-tight">
              Schedule Your <span className="text-blue-600">Health Visit</span>
            </h1>
            <p className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Select your preferred time and service. Our team will verify the availability and send you a confirmation.
            </p>
          </div>

          <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-5">
              {/* Left Info Panel */}
              <div className="lg:col-span-2 bg-[#1e3a8a] p-8 lg:p-10 text-white space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Booking Info</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Provide accurate details so we can match you with the right specialist.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="h-11 w-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">Available Days</div>
                      <div className="font-semibold">Mon - Sun, 24/7</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="h-11 w-11 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-1">Response Time</div>
                      <div className="font-semibold">Within 2 Hours</div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2">Contact Support</p>
                  <p className="font-semibold">+234 811 986 8201</p>
                </div>
              </div>

              {/* Right Form Panel */}
              <div className="lg:col-span-3 p-8 lg:p-10">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {initSpecialty && (
                    <motion.div 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-blue-50 border border-blue-100 flex items-center gap-3.5 text-[#1e3a8a] text-xs font-bold"
                    >
                      <Award className="h-5 w-5 text-blue-600 animate-pulse" />
                      <div>
                        Selected: <span className="underline">{initSpecialty} Department</span> Specialist Consultation
                      </div>
                    </motion.div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Full Name</Label>
                      <Input 
                        name="name" 
                        id="name" 
                        placeholder="Enter your full name" 
                        className="rounded-xl h-12 bg-slate-50 border-slate-200 px-4"
                        required 
                        disabled={loading} 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Phone Number</Label>
                      <Input 
                        name="phone" 
                        id="phone" 
                        placeholder="+234..." 
                        className="rounded-xl h-12 bg-slate-50 border-slate-200 px-4"
                        required 
                        disabled={loading} 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Email Address</Label>
                    <Input 
                        name="email" 
                        id="email" 
                        type="email" 
                        placeholder="email@example.com" 
                        className="rounded-xl h-12 bg-slate-50 border-slate-200 px-4"
                        required 
                        disabled={loading} 
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                       <Label htmlFor="service" className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Select Service</Label>
                       <select 
                        name="service" 
                        id="service" 
                        defaultValue={initNursingService ? initNursingService : (initSpecialty ? "Specialist Consultation" : "Online Consultation")}
                        className="w-full rounded-xl h-12 bg-slate-50 border border-slate-200 px-4 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
                        required 
                        disabled={loading}
                      >
                        {initNursingService && (
                          <option value={initNursingService}>{initNursingService}</option>
                        )}
                        <option value="Online Consultation">Online Consultation</option>
                        <option value="Home Visit">Home Visit</option>
                        <option value="Specialist Consultation">Specialist Consultation</option>
                        <option value="Elderly Care">Elderly Care</option>
                        <option value="Nursing Care">Nursing Care</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Preferred Date</Label>
                      <Input 
                        name="date" 
                        id="date" 
                        type="date" 
                        className="rounded-xl h-12 bg-slate-50 border-slate-200 px-4"
                        required 
                        disabled={loading} 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="notes" className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Additional Notes</Label>
                    <textarea 
                      name="notes" 
                      id="notes" 
                      rows={3} 
                      value={notesText}
                      onChange={(e) => setNotesText(e.target.value)}
                      className="w-full rounded-xl p-4 bg-slate-50 border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600 outline-none resize-none"
                      placeholder="Any specific symptoms or requests?"
                      disabled={loading}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full rounded-xl h-12 font-semibold bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 shadow-lg flex items-center justify-center gap-2"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        <span>Booking appointment...</span>
                      </>
                    ) : (
                      "Confirm Request"
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
