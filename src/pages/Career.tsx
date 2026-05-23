import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Heart, Star, ShieldCheck, Zap, ArrowRight, Upload, Phone, Mail, Award, CheckCircle2, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Career() {
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    phone: '',
    role: 'Registered Nurse (RN) - Home Healthcare',
    experience: '3-5 Years',
    summary: '',
  });

  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (!isSubmitted) return;
    const timer = setTimeout(() => {
      window.location.reload(); // Refresh the page automatically after 10 seconds
    }, 10000);

    return () => clearTimeout(timer);
  }, [isSubmitted]);

  const roles = [
    {
      title: "Registered Nurse (RN) - Home Healthcare",
      type: "Full-Time / Part-Time",
      location: "Lagos, Nigeria",
      desc: "Provide clinical nursing support, vitals monitoring, and specialized post-operative care at the patient's home.",
      reqs: ["Valid Nursing License (NMCN)", "2+ years of clinical/homecare experience", "Strong communication and empathy"]
    },
    {
      title: "Geriatric Care Specialist / Caregiver",
      type: "Shift-Based / Live-In",
      location: "Lagos, Nigeria",
      desc: "Assist elderly clients with daily living operations, companion care, physical assistance, and overall wellbeing support.",
      reqs: ["Certified Caregiver or Practical Nurse", "Experience supporting seniors with dementia or reduced mobility", "First Aid & CPR Certified"]
    },
    {
      title: "Psychiatric Support Assistant",
      type: "Contract",
      location: "Lagos, Nigeria",
      desc: "Deliver behavioral encouragement and support mental wellness under administrative guidance for homebound therapy patients.",
      reqs: ["Degree in Psychology or Psychiatric Nursing", "Patience and emotional intelligence", "Crisis management understanding"]
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert("Please fill in all required fields.");
      return;
    }
    setLoading(true);

    const data = {
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      role: formData.role,
      experience: formData.experience,
      summary: formData.summary,
      type: 'career',
    };

    // 1. Submit to Formspree if configured (non-blocking so the spinner doesn't hang)
    const formspreeId = (import.meta as any).env.VITE_FORMSPREE_CAREER_ID || "mkoeobyy";
    if (formspreeId) {
      fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          "submission_type": "Citicare Job Application"
        })
      }).catch((err) => {
        console.warn("Formspree transmission warning: ", err);
      });
    }

    // 2. Submit to Firestore database backup (non-blocking so off-line or pending sync does not hang the UI)
    const path = 'careers';
    addDoc(collection(db, path), {
      ...data,
      createdAt: serverTimestamp(),
    }).catch((error) => {
      console.warn("Firestore backup logging skipped or offline:", error);
    });

    setIsSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-[#1e3a8a] text-white py-24 lg:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a] via-[#1e3a8a]/80 to-transparent" />
        
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24 relative z-10 text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md px-6 py-3 rounded-full border border-blue-400/30 text-blue-300 font-black uppercase tracking-[0.2em] text-xs"
          >
            <Briefcase className="h-4 w-4 text-emerald-400" /> Join Citicare Team
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] max-w-4xl mx-auto"
          >
            A Career with <span className="text-emerald-400">Heart</span> & Excellence
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl lg:text-2xl text-blue-100/80 max-w-2xl mx-auto font-medium"
          >
            Bring hospital-quality healthcare and companion care directly into homes. Make a measurable difference in patients' lives every single day.
          </motion.p>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24">
          <div className="text-center mb-16 space-y-4">
            <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-xs block">Our Commitments</span>
            <h2 className="text-4xl lg:text-6xl font-black text-[#1e3a8a] uppercase leading-[0.95]">Why Build a Future Here?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-10 w-10 text-blue-600" />,
                title: "Premium Compensation",
                desc: "We respect our caregiver expertise with industry-leading pay structures, comprehensive insurance support, and structural incentives."
              },
              {
                icon: <Zap className="h-10 w-10 text-emerald-600" />,
                title: "Flexible Operations",
                desc: "Choose from full-time clinical roles, hourly home nurse contracts, or convenient live-in specialty schedules that fit your lifestyle."
              },
              {
                icon: <ShieldCheck className="h-10 w-10 text-indigo-600" />,
                title: "Continuous Training",
                desc: "Enhance your skills with direct access to advanced clinical guidance, certified nurse training, and integrated EMR medical technologies."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-[#F8FAFC] border-none lg:border border-slate-100 p-10 rounded-none lg:rounded-[3rem] space-y-6 hover:shadow-xl transition-all duration-300">
                <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center shadow-md">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-[#1e3a8a] uppercase">{item.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Jobs List */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-2">
                <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-xs block">Active Postings</span>
                <h2 className="text-4xl lg:text-5xl font-black text-[#1e3a8a] uppercase">Open Positions</h2>
              </div>

              <div className="space-y-6">
                {roles.map((role, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-none lg:rounded-[2.5rem] border-none lg:border border-slate-100 shadow-none lg:shadow-sm hover:shadow-md transition-all space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-black text-[#1e3a8a]">{role.title}</h3>
                        <p className="text-emerald-600 font-bold text-sm tracking-wide uppercase mt-1">
                          {role.type} • {role.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-600 font-medium leading-relaxed">{role.desc}</p>
                    <div className="space-y-2 pt-2 border-t border-slate-100">
                      <p className="text-xs font-black uppercase tracking-widest text-[#1e3a8a]">Requirements:</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-500 text-sm font-bold">
                        {role.reqs.map((req, rIdx) => (
                          <li key={rIdx} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 bg-[#2563EB] rounded-full shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Form */}
            <div className="lg:col-span-12 xl:col-span-5">
              <div className="bg-white p-6 md:p-10 rounded-none lg:rounded-[3.5rem] shadow-none lg:shadow-xl border-none lg:border border-slate-100 sticky top-36 min-h-[500px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div 
                      key="form-wrapper"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-8 w-full"
                    >
                      <div className="space-y-2">
                        <h3 className="text-3xl font-black text-[#1e3a8a] uppercase">Apply Now</h3>
                        <p className="text-slate-500 font-medium text-sm">Submit your interest and build your career with us.</p>
                      </div>
                      <form 
                        onSubmit={handleSubmit} 
                        className="space-y-6"
                      >
                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-wider text-slate-500">Full Name *</label>
                          <input 
                            type="text" 
                            required
                            value={formData.fullName}
                            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                            placeholder="your full name" 
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 h-14 font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-wider text-slate-500">Email Address *</label>
                            <input 
                              type="email" 
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({...formData, email: e.target.value})}
                              placeholder="your email" 
                              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 h-14 font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-xs font-black uppercase tracking-wider text-slate-500">Phone Number *</label>
                            <input 
                              type="tel" 
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({...formData, phone: e.target.value})}
                              placeholder="your phone number" 
                              className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 h-14 font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all"
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-wider text-slate-500">Target Role *</label>
                          <select 
                            value={formData.role}
                            onChange={(e) => setFormData({...formData, role: e.target.value})}
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 h-14 font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all"
                          >
                            <option>Registered Nurse (RN) - Home Healthcare</option>
                            <option>Geriatric Care Specialist / Caregiver</option>
                            <option>Psychiatric Support Assistant</option>
                            <option>Other Support Role</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-wider text-slate-500">Clinical Experience *</label>
                          <select 
                            value={formData.experience}
                            onChange={(e) => setFormData({...formData, experience: e.target.value})}
                            className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 h-14 font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all"
                          >
                            <option>1-2 Years</option>
                            <option>3-5 Years</option>
                            <option>5+ Years</option>
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label className="text-xs font-black uppercase tracking-wider text-slate-500">Brief Care Background Statement</label>
                          <textarea 
                            rows={4}
                            value={formData.summary}
                            onChange={(e) => setFormData({...formData, summary: e.target.value})}
                            placeholder="Summarize your credentials or share your passion for healthcare..." 
                            className="w-full bg-slate-50 border border-slate-200 rounded-3xl p-6 font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#2563EB] transition-all resize-none"
                          />
                        </div>

                        <Button type="submit" disabled={loading} className="w-full bg-[#2563EB] hover:bg-blue-700 text-white rounded-full h-16 font-black uppercase tracking-widest text-xs shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer">
                          {loading ? (
                            <>
                              <Loader2 className="h-5 w-5 animate-spin" />
                              <span>Submitting Profile...</span>
                            </>
                          ) : (
                            <span>Submit Application</span>
                          )}
                        </Button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="success-wrapper"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-12 space-y-8 w-full max-w-sm mx-auto"
                    >
                      <div className="relative mx-auto h-32 w-32 flex items-center justify-center bg-emerald-50 rounded-full border-4 border-emerald-500/10">
                        <div className="h-24 w-24 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20">
                          <CheckCircle2 className="h-12 w-12 stroke-[3]" />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-2xl font-black text-[#1e3a8a] uppercase">Application Received <span className="text-emerald-600">Successfully!</span></h4>
                        <p className="text-slate-600 font-semibold text-sm leading-relaxed max-w-sm mx-auto">
                          Thank you, <span className="font-bold text-[#1e3a8a]">{formData.fullName}</span>. 
                          Our Clinical Operations team has received your profile for the <strong>{formData.role}</strong> position. We will reach back within 2-3 operational days.
                        </p>
                      </div>

                      <div className="flex items-center justify-center gap-3 text-slate-400 font-medium text-sm pt-4">
                        <Loader2 className="h-4 w-4 animate-spin text-slate-400" />
                        <span>Refreshing...</span>
                      </div>

                      <div className="flex flex-col gap-3 pt-2">
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
                          onClick={() => setIsSubmitted(false)}
                        >
                          Post another profile
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
