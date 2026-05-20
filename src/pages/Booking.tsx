import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, Clock, CheckCircle, Loader2, User, Phone, Mail } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '@/lib/firestore-utils';

export default function Booking() {
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [countdown, setCountdown] = React.useState(5);

  React.useEffect(() => {
    if (!submitted) return;
    setCountdown(5); // reset countdown
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          window.location.href = '/'; // hard-refresh and redirect to Home
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [submitted]);

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

    // 1. Submit to Formspree if configured (non-blocking so the spinner doesn't hang)
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

    // 2. Submit to Firestore database backup (non-blocking so off-line or pending sync does not hang the UI)
    const path = 'appointments';
    addDoc(collection(db, path), {
      ...data,
      createdAt: serverTimestamp(),
    }).catch((error) => {
      console.warn("Firestore backup logging skipped or offline:", error);
    });

    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="flex flex-col bg-[#F8FAFC] min-h-screen">
      <section className="py-24 container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-6">
            <span className="text-[#005FA3] font-black uppercase tracking-[0.4em] text-xs block">Appointment Booking</span>
            <h1 className="text-5xl md:text-7xl font-black text-[#1e3a8a] leading-tight tracking-tighter">
              Schedule Your <br/><span className="text-blue-600">Health Visit.</span>
            </h1>
            <p className="text-xl text-[#334155] leading-relaxed font-medium max-w-2xl mx-auto">
              Select your preferred time and service. Our team will verify the availability and send you a confirmation.
            </p>
          </div>

          <div className="rounded-none lg:rounded-[4rem] border border-slate-100 shadow-2xl overflow-hidden bg-white min-h-[550px] flex items-center justify-center p-6 md:p-12">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-2xl mx-auto text-center space-y-8 py-12"
              >
                <div className="relative mx-auto h-32 w-32 flex items-center justify-center bg-emerald-50 rounded-full border-4 border-emerald-500/10">
                  <div className="h-24 w-24 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <CheckCircle className="h-12 w-12 stroke-[3]" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-[#1e3a8a]">
                    Booking Sent <span className="text-emerald-600">Successfully!</span>
                  </h3>
                  <p className="text-[#334155] font-semibold text-base md:text-lg leading-relaxed max-w-xl mx-auto">
                    We have received your requested consultation details. A professional Citicare representative will call or email you shortly to confirm details and dates.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 max-w-md mx-auto space-y-4 shadow-sm">
                  <div className="flex items-center justify-center gap-3 text-slate-600 font-bold text-sm">
                    <Loader2 className="h-5 w-5 animate-spin text-emerald-500" />
                    <span>Redirecting in <strong className="text-emerald-600 text-lg font-black">{countdown}s</strong>...</span>
                  </div>
                  <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
                    <motion.div 
                      key={submitted ? "active-bar" : "idle-bar"}
                      initial={{ width: "100%" }}
                      animate={{ width: "0%" }}
                      transition={{ duration: 5, ease: "linear" }}
                      className="bg-emerald-500 h-full"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-2">
                  <Button 
                    variant="outline" 
                    className="rounded-full h-12 px-8 border-slate-200 text-slate-700 hover:bg-slate-50 font-bold uppercase tracking-wider text-xs cursor-pointer" 
                    onClick={() => {
                      window.location.href = '/';
                    }}
                  >
                    Go Back Now
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="rounded-full h-12 px-6 text-slate-400 hover:text-slate-600 font-bold uppercase tracking-wider text-xs cursor-pointer" 
                    onClick={() => setSubmitted(false)}
                  >
                    Book Another Appointment
                  </Button>
                </div>
              </motion.div>
            ) : (
              <div className="p-0 h-full w-full">
                <div className="grid lg:grid-cols-5 h-full overflow-hidden">
                  {/* Left Info Panel */}
                  <div className="lg:col-span-2 bg-[#1e3a8a] p-6 md:p-12 text-white space-y-12 flex flex-col justify-between rounded-none lg:rounded-[3rem]">
                    <div>
                      <div className="space-y-4">
                        <h3 className="text-3xl font-black uppercase tracking-tight">Booking Info</h3>
                        <p className="text-blue-100/60 font-medium leading-relaxed">
                          Please provide accurate details so we can match you with the right specialist.
                        </p>
                      </div>

                      <div className="space-y-8 mt-12">
                        <div className="flex gap-4">
                          <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                            <Calendar className="h-6 w-6" />
                          </div>
                          <div>
                            <div className="font-bold text-sm text-blue-200 uppercase tracking-widest">Available Days</div>
                            <div className="text-lg font-bold">Mon - Sun, 24/7</div>
                          </div>
                        </div>
                        <div className="flex gap-4">
                          <div className="h-12 w-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                            <Clock className="h-6 w-6" />
                          </div>
                          <div>
                            <div className="font-bold text-sm text-blue-200 uppercase tracking-widest">Response Time</div>
                            <div className="text-lg font-bold">Within 2 Hours</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-12 border-t border-white/10 mt-12">
                      <p className="text-sm font-bold text-blue-200/50 uppercase tracking-[0.2em]">Contact Support</p>
                      <p className="text-lg font-bold mt-2">+234 811 111 1111</p>
                    </div>
                  </div>

                  {/* Right Form Panel */}
                  <div className="lg:col-span-3 p-6 md:p-12 bg-white">
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-[#1e3a8a]">Full Name</Label>
                            <Input name="name" id="name" placeholder="Enter your full name" className="rounded-2xl h-14 bg-slate-50 border-slate-200 px-6 font-medium" required disabled={loading} />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-[10px] font-black uppercase tracking-widest text-[#1e3a8a]">Phone Number</Label>
                            <Input name="phone" id="phone" placeholder="+234..." className="rounded-2xl h-14 bg-slate-50 border-slate-200 px-6 font-medium" required disabled={loading} />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-[#1e3a8a]">Email Address</Label>
                          <Input name="email" id="email" type="email" placeholder="email@example.com" className="rounded-2xl h-14 bg-slate-50 border-slate-200 px-6 font-medium" required disabled={loading} />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="service" className="text-[10px] font-black uppercase tracking-widest text-[#1e3a8a]">Select Service</Label>
                            <select name="service" id="service" className="w-full rounded-2xl h-14 bg-slate-50 border border-slate-200 px-6 font-medium text-sm focus:ring-2 focus:ring-blue-600 outline-none" required disabled={loading}>
                              <option value="Online Consultation">Online Consultation</option>
                              <option value="Home Visit">Home Visit</option>
                              <option value="Specialist Consultation">Specialist Consultation</option>
                              <option value="Elderly Care">Elderly Care</option>
                              <option value="Nursing Care">Nursing Care</option>
                            </select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="date" className="text-[10px] font-black uppercase tracking-widest text-[#1e3a8a]">Preferred Date</Label>
                            <Input name="date" id="date" type="date" className="rounded-2xl h-14 bg-slate-50 border-slate-200 px-6 font-medium" required disabled={loading} />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="notes" className="text-[10px] font-black uppercase tracking-widest text-[#1e3a8a]">Additional Notes</Label>
                          <textarea name="notes" id="notes" rows={4} className="w-full rounded-2xl p-6 bg-slate-50 border border-slate-200 font-medium text-sm focus:ring-2 focus:ring-blue-600 outline-none resize-none" placeholder="Any specific symptoms or requests?" disabled={loading}></textarea>
                        </div>
                      </div>

                      <Button type="submit" className="w-full rounded-full h-16 text-lg font-black uppercase tracking-widest bg-blue-600 hover:bg-blue-700 shadow-2xl shadow-blue-600/20" disabled={loading}>
                        {loading ? <Loader2 className="h-6 w-6 animate-spin mx-auto" /> : "Confirm Request"}
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
