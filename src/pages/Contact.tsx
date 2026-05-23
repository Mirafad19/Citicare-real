import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send, Instagram, Navigation2, Loader2, CheckCircle } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Contact() {
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [countdown, setCountdown] = React.useState(5);

  React.useEffect(() => {
    if (!submitted) return;
    setCountdown(5);
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          window.location.href = '/';
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
      service: formData.get('service') as string,
      message: formData.get('message') as string,
    };

    const formspreeId = (import.meta as any).env.VITE_FORMSPREE_CONTACT_ID || "mkoeobyy";
    if (formspreeId) {
      fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          "submission_type": "Citicare General Inquiry"
        })
      }).catch((err) => {
        console.warn("Formspree transmission warning: ", err);
      });
    }

    const path = 'inquiries';
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
    <div className="flex flex-col bg-slate-50 min-h-screen">
      <section className="py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Info Side */}
            <div className="space-y-10 lg:space-y-12">
              <div className="space-y-4">
                <span className="text-blue-600 font-semibold uppercase tracking-wider text-xs">Contact Us</span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e3a8a] leading-tight">
                  Request a <span className="text-blue-600">Consultation</span>
                </h1>
                <p className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl">
                  Professional medical assistance is just a message away. Get in touch with our team for expert guidance and personalized care plans.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  { icon: MapPin, label: "Main Office", value: "Lagos, Nigeria" },
                  { icon: Phone, label: "General Enquiries", value: "+234 811 111 1111" },
                  { icon: Mail, label: "Email Support", value: "enquiries@citicarehealthltd.com" }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-[#1e3a8a] group-hover:text-white transition-colors shrink-0">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">{item.label}</div>
                      <div className="text-lg font-bold text-[#1e3a8a]">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-200 space-y-4">
                <h4 className="text-xs font-semibold text-blue-600 uppercase tracking-wider">Follow Us</h4>
                <div className="flex gap-3">
                  {[Instagram, Navigation2].map((Icon, i) => (
                    <a 
                      key={i} 
                      href="#"
                      className="h-11 w-11 rounded-xl border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-[#1e3a8a] hover:text-white hover:border-transparent transition-all"
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl lg:rounded-3xl shadow-xl overflow-hidden"
            >
              {submitted ? (
                <div className="p-8 lg:p-12 text-center space-y-6">
                  <div className="mx-auto h-20 w-20 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-10 w-10 text-emerald-600" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-[#1e3a8a]">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Thank you for reaching out. A Citicare representative will contact you shortly.
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4 space-y-3">
                    <div className="flex items-center justify-center gap-2 text-slate-600 text-sm">
                      <Loader2 className="h-4 w-4 animate-spin text-emerald-600" />
                      <span>Redirecting in <strong className="text-emerald-600">{countdown}s</strong></span>
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <motion.div 
                        key={submitted ? "active" : "idle"}
                        initial={{ width: "100%" }}
                        animate={{ width: "0%" }}
                        transition={{ duration: 5, ease: "linear" }}
                        className="bg-emerald-500 h-full"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Button 
                      variant="outline" 
                      className="rounded-xl h-11 text-sm font-semibold" 
                      onClick={() => window.location.href = '/'}
                    >
                      Go Home Now
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="rounded-xl h-11 text-sm text-slate-500" 
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="bg-[#1e3a8a] px-8 py-6 text-white text-center">
                    <h3 className="text-xl font-bold">Send a Message</h3>
                    <p className="text-white/60 text-xs mt-1">Typical response time: 2-4 hours</p>
                  </div>
                  <form onSubmit={handleSubmit} className="p-6 lg:p-8 space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Full Name</Label>
                        <Input 
                          name="name" 
                          id="name" 
                          placeholder="John Doe" 
                          className="rounded-xl h-12 bg-slate-50 border-slate-200 px-4"
                          required 
                          disabled={loading} 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Email Address</Label>
                        <Input 
                          name="email" 
                          id="email" 
                          type="email" 
                          placeholder="john@email.com" 
                          className="rounded-xl h-12 bg-slate-50 border-slate-200 px-4"
                          required 
                          disabled={loading} 
                        />
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Phone Number</Label>
                        <Input 
                          name="phone" 
                          id="phone" 
                          placeholder="+234 XXX..." 
                          className="rounded-xl h-12 bg-slate-50 border-slate-200 px-4"
                          required 
                          disabled={loading} 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Service Needed</Label>
                        <select 
                          name="service" 
                          id="service" 
                          className="w-full rounded-xl h-12 bg-slate-50 border border-slate-200 px-4 text-sm focus:ring-2 focus:ring-blue-600 outline-none"
                          disabled={loading}
                        >
                          <option>Online Consultation</option>
                          <option>Home Care</option>
                          <option>Specialist Care</option>
                          <option>Preventive Health</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-xs font-semibold text-slate-600 uppercase tracking-wider">Your Message</Label>
                      <textarea 
                        name="message" 
                        id="message" 
                        rows={4} 
                        className="w-full rounded-xl p-4 bg-slate-50 border border-slate-200 text-sm focus:ring-2 focus:ring-blue-600 outline-none resize-none"
                        placeholder="Describe your healthcare needs or questions..."
                        required 
                        disabled={loading}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full rounded-xl h-12 font-semibold bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 shadow-lg"
                      disabled={loading}
                    >
                      {loading ? (
                        <Loader2 className="h-5 w-5 animate-spin" />
                      ) : (
                        <span className="flex items-center justify-center gap-2">
                          Send Inquiry 
                          <Send className="h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
