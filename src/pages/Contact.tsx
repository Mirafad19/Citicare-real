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
      createdAt: serverTimestamp(),
    };

    const path = 'inquiries';
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
    <div className="flex flex-col bg-background min-h-screen">
      <section className="py-24 container mx-auto px-6 lg:px-12">
         <div className="grid lg:grid-cols-2 gap-24 items-start max-w-7xl mx-auto">
            {/* Info Side */}
            <div className="space-y-16">
              <div className="space-y-8">
                <span className="text-[11px] font-bold uppercase tracking-[0.4em] text-primary block">Contact Us</span>
                <h1 className="text-6xl md:text-[100px] font-black text-[#1e3a8a] leading-[0.9] tracking-tighter">Request a <br/><span className="text-[#005FA3]">Consultation.</span></h1>
                <p className="text-xl text-[#5C5C5C] leading-relaxed font-medium max-w-xl">
                   Professional medical assistance is just a message away. Get in touch with our team for expert guidance and personalized care plans.
                </p>
              </div>

              <div className="grid gap-12">
                 <div className="flex items-start gap-8 group">
                    <div className="h-14 w-14 rounded-2xl bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                       <MapPin className="h-7 w-7" />
                    </div>
                    <div className="space-y-1">
                       <div className="font-bold uppercase tracking-[0.2em] text-[10px] text-muted-foreground">Main Office</div>
                       <div className="text-2xl font-black text-[#1e3a8a]">Lagos, Nigeria</div>
                    </div>
                 </div>

                 <div className="flex items-start gap-8 group">
                    <div className="h-14 w-14 rounded-2xl bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                       <Phone className="h-7 w-7" />
                    </div>
                    <div className="space-y-1">
                       <div className="font-bold uppercase tracking-[0.2em] text-[10px] text-muted-foreground">General Enquiries</div>
                       <div className="text-2xl font-black text-[#1e3a8a]">+234 XXX XXX XXXX</div>
                    </div>
                 </div>

                 <div className="flex items-start gap-8 group">
                    <div className="h-14 w-14 rounded-2xl bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                       <Mail className="h-7 w-7" />
                    </div>
                    <div className="space-y-1">
                       <div className="font-bold uppercase tracking-[0.2em] text-[10px] text-muted-foreground">Email Support</div>
                       <div className="text-2xl font-black text-[#1e3a8a]">enquiries@citicarehealthltd.com</div>
                    </div>
                 </div>
              </div>

              <div className="pt-12 border-t border-border space-y-6">
                 <h4 className="font-bold uppercase text-[10px] tracking-[0.3em] text-primary">Direct Communication</h4>
                 <div className="flex gap-4">
                    {[Instagram, Navigation2].map((Icon, i) => (
                      <div key={i} className="h-14 w-14 rounded-full border border-border flex items-center justify-center text-[#5C5C5C] hover:bg-primary hover:text-white transition-all cursor-pointer">
                        <Icon className="h-6 w-6" />
                      </div>
                    ))}
                 </div>
              </div>
            </div>

            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10"></div>
              <Card className="rounded-[4rem] border border-border shadow-2xl overflow-hidden bg-white">
                <div className="bg-[#005FA3] p-12 text-white text-center">
                   <h3 className="text-4xl font-black uppercase tracking-tight">Send a Message</h3>
                   <p className="text-white/60 text-xs mt-3 uppercase tracking-widest font-bold">Typical response time: 2-4 hours</p>
                </div>
                <CardContent className="p-12 space-y-8">
                  {submitted ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12 space-y-6"
                    >
                      <div className="h-24 w-24 bg-accent text-primary rounded-full flex items-center justify-center mx-auto shadow-inner">
                        <CheckCircle className="h-12 w-12" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-3xl font-serif">Message Sent</h3>
                        <p className="text-[#5C5C5C] font-medium leading-relaxed">Thank you for reaching out. A Citicare representative will contact you shortly.</p>
                      </div>
                      <Button variant="outline" className="rounded-full h-14 px-8 border-primary text-primary mt-4" onClick={() => setSubmitted(false)}>Send another message</Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <Label htmlFor="name" className="font-bold uppercase tracking-[0.2em] text-[10px] text-primary">Full Name</Label>
                          <Input name="name" id="name" placeholder="John Doe" className="rounded-2xl h-14 bg-muted border-none px-6 font-medium focus-visible:ring-primary shadow-inner" required disabled={loading} />
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="email" className="font-bold uppercase tracking-[0.2em] text-[10px] text-primary">Email Address</Label>
                          <Input name="email" id="email" type="email" placeholder="john@citicare.com" className="rounded-2xl h-14 bg-muted border-none px-6 font-medium focus-visible:ring-primary shadow-inner" required disabled={loading} />
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <Label htmlFor="phone" className="font-bold uppercase tracking-[0.2em] text-[10px] text-primary">Phone Number</Label>
                          <Input name="phone" id="phone" placeholder="+234 XXX..." className="rounded-2xl h-14 bg-muted border-none px-6 font-medium focus-visible:ring-primary shadow-inner" required disabled={loading} />
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="service" className="font-bold uppercase tracking-[0.2em] text-[10px] text-primary">Service Needed</Label>
                          <select name="service" id="service" className="w-full rounded-2xl h-14 bg-muted border-none px-6 font-medium text-sm focus:ring-2 focus:ring-primary outline-none shadow-inner" disabled={loading}>
                            <option>Online Consultation</option>
                            <option>Home Care</option>
                            <option>Specialist Care</option>
                            <option>Preventive Health</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-3">
                          <Label htmlFor="message" className="font-bold uppercase tracking-[0.2em] text-[10px] text-primary">Your Message</Label>
                          <textarea name="message" id="message" rows={5} className="w-full rounded-2xl p-6 bg-muted border-none font-medium text-sm focus:ring-2 focus:ring-primary outline-none shadow-inner resize-none" placeholder="Describe your healthcare needs or questions..." required disabled={loading}></textarea>
                      </div>

                      <Button type="submit" className="w-full rounded-full h-16 text-lg font-medium group shadow-2xl shadow-primary/20 transition-all active:scale-95" disabled={loading}>
                         {loading ? (
                           <Loader2 className="h-6 w-6 animate-spin" />
                         ) : (
                           <>Send Inquiry <Send className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></>
                         )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
         </div>
      </section>
    </div>
  );
}
