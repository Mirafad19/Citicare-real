import React from 'react';
import { motion } from 'motion/react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, Instagram, Navigation2, Loader2, CheckCircle } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { handleFirestoreError, OperationType } from '@/lib/firestore-utils';

export default function Contact() {
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
      service: formData.get('service') as string,
      message: formData.get('message') as string,
    };

    // 1. Submit to Formspree if configured
    const formspreeId = (import.meta as any).env.VITE_FORMSPREE_CONTACT_ID || "mkoeobyy";
    if (formspreeId) {
      try {
        await fetch(`https://formspree.io/f/${formspreeId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            ...data,
            "submission_type": "Citicare General Inquiry"
          })
        });
      } catch (err) {
        console.warn("Formspree transmission warning: ", err);
      }
    }

    // 2. Submit to Firestore database backup
    const path = 'inquiries';
    try {
      await addDoc(collection(db, path), {
        ...data,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      console.warn("Firestore backup logging skipped or offline:", error);
    }

    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="flex flex-col bg-background min-h-screen overflow-x-hidden">
      <section className="py-12 md:py-24 container mx-auto px-4 sm:px-6 lg:px-12 w-full max-w-7xl">
         <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start w-full mx-auto">
            {/* Info Side */}
            <div className="space-y-12 md:space-y-16 w-full">
              <div className="space-y-6">
                <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary block">Contact Us</span>
                <h1 className="text-4xl sm:text-6xl md:text-[80px] font-black text-[#1e3a8a] leading-[0.95] tracking-tighter">
                  Request a <br/><span className="text-[#005FA3]">Consultation.</span>
                </h1>
                <p className="text-lg md:text-xl text-[#5C5C5C] leading-relaxed font-medium max-w-xl">
                   Professional medical assistance is just a message away. Get in touch with our team for expert guidance and personalized care plans.
                </p>
              </div>

              <div className="grid gap-8 md:gap-12">
                 <div className="flex items-start gap-4 md:gap-8 group">
                    <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                       <MapPin className="h-6 w-6 md:h-7 md:w-7" />
                    </div>
                    <div className="space-y-1 min-w-0">
                       <div className="font-bold uppercase tracking-[0.2em] text-[10px] text-muted-foreground">Main Office</div>
                       <div className="text-xl md:text-2xl font-black text-[#1e3a8a] truncate">Lagos, Nigeria</div>
                    </div>
                 </div>

                 <div className="flex items-start gap-4 md:gap-8 group">
                    <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                       <Phone className="h-6 w-6 md:h-7 md:w-7" />
                    </div>
                    <div className="space-y-1 min-w-0">
                       <div className="font-bold uppercase tracking-[0.2em] text-[10px] text-muted-foreground">General Enquiries</div>
                       <div className="text-xl md:text-2xl font-black text-[#1e3a8a] truncate">+234 XXX XXX XXXX</div>
                    </div>
                 </div>

                 <div className="flex items-start gap-4 md:gap-8 group">
                    <div className="h-12 w-12 md:h-14 md:w-14 rounded-2xl bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                       <Mail className="h-6 w-6 md:h-7 md:w-7" />
                    </div>
                    <div className="space-y-1 min-w-0">
                       <div className="font-bold uppercase tracking-[0.2em] text-[10px] text-muted-foreground">Email Support</div>
                       <div className="text-base sm:text-xl md:text-2xl font-black text-[#1e3a8a] break-all">enquiries@citicarehealthltd.com</div>
                    </div>
                 </div>
              </div>

              <div className="pt-8 md:pt-12 border-t border-border space-y-6">
                 <h4 className="font-bold uppercase text-[10px] tracking-[0.3em] text-primary">Direct Communication</h4>
                 <div className="flex gap-4">
                    {[Instagram, Navigation2].map((Icon, i) => (
                      <div key={i} className="h-12 w-12 md:h-14 md:w-14 rounded-full border border-border flex items-center justify-center text-[#5C5C5C] hover:bg-primary hover:text-white transition-all cursor-pointer shrink-0">
                        <Icon className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                    ))}
                 </div>
              </div>
            </div>

            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-full overflow-hidden rounded-2xl lg:rounded-[4rem] border border-slate-100 shadow-xl bg-white"
            >
              <div className="bg-[#005FA3] px-6 py-10 md:p-12 text-white text-center">
                 <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight">Send a Message</h3>
                 <p className="text-white/70 text-xs mt-3 uppercase tracking-widest font-bold">Typical response time: 2-4 hours</p>
              </div>
              <div className="p-6 md:p-12 space-y-6 md:space-y-8">
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 space-y-6"
                  >
                    <div className="relative mx-auto h-24 w-24 flex items-center justify-center bg-emerald-50 rounded-full border-4 border-emerald-500/10">
                      <div className="h-16 w-16 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20">
                        <CheckCircle className="h-8 w-8 stroke-[3]" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-2xl font-black uppercase tracking-tight text-emerald-600">Message Sent Successfully</h3>
                      <p className="text-[#5C5C5C] font-semibold text-sm md:text-base leading-relaxed max-w-md mx-auto">
                        Thank you for reaching out. Your request has been securely transmitted. A Citicare representative will contact you shortly.
                      </p>
                    </div>
                    <Button variant="outline" className="rounded-full h-12 md:h-14 px-8 border-emerald-500 text-emerald-600 hover:bg-emerald-50 font-bold uppercase tracking-wider mt-4" onClick={() => setSubmitted(false)}>Send another message</Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-bold uppercase tracking-[0.2em] text-[10px] text-primary">Full Name</Label>
                        <Input name="name" id="name" placeholder="John Doe" className="rounded-2xl h-12 md:h-14 bg-muted border-none px-6 font-medium focus-visible:ring-primary shadow-inner w-full" required disabled={loading} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-bold uppercase tracking-[0.2em] text-[10px] text-primary">Email Address</Label>
                        <Input name="email" id="email" type="email" placeholder="john@citicare.com" className="rounded-2xl h-12 md:h-14 bg-muted border-none px-6 font-medium focus-visible:ring-primary shadow-inner w-full" required disabled={loading} />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="font-bold uppercase tracking-[0.2em] text-[10px] text-primary">Phone Number</Label>
                        <Input name="phone" id="phone" placeholder="+234 XXX..." className="rounded-2xl h-12 md:h-14 bg-muted border-none px-6 font-medium focus-visible:ring-primary shadow-inner w-full" required disabled={loading} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service" className="font-bold uppercase tracking-[0.2em] text-[10px] text-primary">Service Needed</Label>
                        <select name="service" id="service" className="w-full rounded-2xl h-12 md:h-14 bg-muted border-none px-6 font-medium text-sm focus:ring-2 focus:ring-primary outline-none shadow-inner" disabled={loading}>
                          <option>Online Consultation</option>
                          <option>Home Care</option>
                          <option>Specialist Care</option>
                          <option>Preventive Health</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message" className="font-bold uppercase tracking-[0.2em] text-[10px] text-primary">Your Message</Label>
                        <textarea name="message" id="message" rows={4} className="w-full rounded-2xl p-4 md:p-6 bg-muted border-none font-medium text-sm focus:ring-2 focus:ring-primary outline-none shadow-inner resize-none w-full" placeholder="Describe your healthcare needs or questions..." required disabled={loading}></textarea>
                    </div>

                    <Button type="submit" className="w-full rounded-full h-14 md:h-16 text-base md:text-lg font-bold uppercase tracking-wider group shadow-2xl shadow-primary/20 transition-all active:scale-95" disabled={loading}>
                       {loading ? (
                         <Loader2 className="h-6 w-6 animate-spin mx-auto" />
                       ) : (
                         <span className="flex items-center justify-center gap-2">
                           Send Inquiry 
                           <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                         </span>
                       )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
         </div>
      </section>
    </div>
  );
}
