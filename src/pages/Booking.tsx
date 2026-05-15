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
      createdAt: serverTimestamp(),
    };

    const path = 'appointments';
    try {
      await addDoc(collection(db, path), data);
      setSubmitted(true);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, path);
    } finally {
      setLoading(false);
    }
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

          <Card className="rounded-[4rem] border-none shadow-2xl overflow-hidden bg-white">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-5">
                {/* Left Info Panel */}
                <div className="lg:col-span-2 bg-[#1e3a8a] p-12 text-white space-y-12">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-black uppercase tracking-tight">Booking Info</h3>
                    <p className="text-blue-100/60 font-medium leading-relaxed">
                      Please provide accurate details so we can match you with the right specialist.
                    </p>
                  </div>

                  <div className="space-y-8">
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

                  <div className="pt-12 border-t border-white/10">
                    <p className="text-sm font-bold text-blue-200/50 uppercase tracking-[0.2em]">Contact Support</p>
                    <p className="text-lg font-bold mt-2">+234 811 111 1111</p>
                  </div>
                </div>

                {/* Right Form Panel */}
                <div className="lg:col-span-3 p-12">
                  {submitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-20 space-y-6"
                    >
                      <div className="h-24 w-24 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle className="h-12 w-12" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-3xl font-black text-[#1e3a8a]">Request Received</h3>
                        <p className="text-[#334155] font-medium leading-relaxed">We've received your booking request. Our team will contact you shortly to confirm the details.</p>
                      </div>
                      <Button variant="outline" className="rounded-full h-14 px-8 border-blue-600 text-blue-600 mt-4" onClick={() => setSubmitted(false)}>Make Another Booking</Button>
                    </motion.div>
                  ) : (
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
                        {loading ? <Loader2 className="h-6 w-6 animate-spin" /> : "Confirm Request"}
                      </Button>
                    </form>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
