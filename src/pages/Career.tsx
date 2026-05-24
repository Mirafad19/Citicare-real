import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Award, Zap, ShieldCheck, Loader2 } from 'lucide-react';
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

  const [loading, setLoading] = React.useState(false);

  const roles = [
    {
      title: "Registered Nurse (RN) - Home Healthcare",
      type: "Full-Time / Part-Time",
      location: "Lagos, Nigeria",
      desc: "Provide clinical nursing support, vitals monitoring, and specialized post-operative care at the patient's home.",
      reqs: ["Valid Nursing License (NMCN)", "2+ years clinical experience", "Strong communication skills"]
    },
    {
      title: "Geriatric Care Specialist / Caregiver",
      type: "Shift-Based / Live-In",
      location: "Lagos, Nigeria",
      desc: "Assist elderly clients with daily living operations, companion care, and overall wellbeing support.",
      reqs: ["Certified Caregiver or Practical Nurse", "Experience with dementia care", "First Aid & CPR Certified"]
    },
    {
      title: "Psychiatric Support Assistant",
      type: "Contract",
      location: "Lagos, Nigeria",
      desc: "Deliver behavioral support and mental wellness guidance under administrative direction.",
      reqs: ["Degree in Psychology or Psychiatric Nursing", "Emotional intelligence", "Crisis management skills"]
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

    const path = 'careers';
    addDoc(collection(db, path), {
      ...data,
      createdAt: serverTimestamp(),
    }).catch((error) => {
      console.warn("Firestore backup logging skipped or offline:", error);
    });

    // Hold loading spinner in button for 3 seconds, then refresh/redirect to home page
    setTimeout(() => {
      setLoading(false);
      window.location.href = '/';
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-[#1e3a8a] text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a] via-[#1e3a8a]/80 to-transparent" />
        
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20 relative z-10 text-center space-y-6">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full text-white/80 font-semibold text-xs uppercase tracking-wider"
          >
            <Briefcase className="h-4 w-4 text-emerald-400" /> Join Citicare Team
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold max-w-3xl mx-auto text-white"
          >
            A Career with <span className="text-emerald-400">Heart</span> & Excellence
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-base lg:text-lg text-white/70 max-w-2xl mx-auto"
          >
            Bring hospital-quality healthcare directly into homes. Make a measurable difference in patients&apos; lives every single day.
          </motion.p>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20">
          <div className="text-center mb-12 space-y-4">
            <span className="text-blue-600 font-semibold uppercase tracking-wider text-xs">Our Commitments</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a]">Why Build a Future Here?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Award className="h-8 w-8 text-blue-600" />,
                title: "Premium Compensation",
                desc: "Industry-leading pay structures, comprehensive insurance support, and structural incentives."
              },
              {
                icon: <Zap className="h-8 w-8 text-emerald-600" />,
                title: "Flexible Operations",
                desc: "Choose from full-time roles, hourly contracts, or convenient live-in schedules."
              },
              {
                icon: <ShieldCheck className="h-8 w-8 text-indigo-600" />,
                title: "Continuous Training",
                desc: "Access to advanced clinical guidance, certified training, and modern EMR technologies."
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-100 p-8 rounded-2xl lg:rounded-3xl space-y-4 hover:shadow-lg transition-all duration-300">
                <div className="h-14 w-14 bg-white rounded-xl flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1e3a8a]">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Jobs List */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-blue-600 font-semibold uppercase tracking-wider text-xs">Active Postings</span>
                <h2 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a]">Open Positions</h2>
              </div>

              <div className="space-y-4">
                {roles.map((role, idx) => (
                  <div key={idx} className="bg-white p-6 lg:p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-all space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <h3 className="text-xl font-bold text-[#1e3a8a]">{role.title}</h3>
                        <p className="text-emerald-600 font-semibold text-xs uppercase tracking-wider mt-1">
                          {role.type} | {role.location}
                        </p>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{role.desc}</p>
                    <div className="space-y-2 pt-3 border-t border-slate-100">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Requirements:</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-slate-600 text-sm">
                        {role.reqs.map((req, rIdx) => (
                          <li key={rIdx} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 bg-blue-600 rounded-full shrink-0" />
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
            <div className="lg:col-span-5">
              <div className="bg-white p-6 lg:p-8 rounded-2xl lg:rounded-3xl shadow-lg border border-slate-100 sticky top-32">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-[#1e3a8a]">Apply Now</h3>
                    <p className="text-slate-500 text-sm">Submit your interest and build your career with us.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Full Name *</label>
                      <input 
                        type="text" 
                        required
                        disabled={loading}
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        placeholder="Your full name" 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 h-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Email *</label>
                        <input 
                          type="email" 
                          required
                          disabled={loading}
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="Your email" 
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 h-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Phone *</label>
                        <input 
                          type="tel" 
                          required
                          disabled={loading}
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="Your phone" 
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 h-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Target Role *</label>
                      <select 
                        value={formData.role}
                        disabled={loading}
                        onChange={(e) => setFormData({...formData, role: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 h-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option>Registered Nurse (RN) - Home Healthcare</option>
                        <option>Geriatric Care Specialist / Caregiver</option>
                        <option>Psychiatric Support Assistant</option>
                        <option>Other Support Role</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Experience *</label>
                      <select 
                        value={formData.experience}
                        disabled={loading}
                        onChange={(e) => setFormData({...formData, experience: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 h-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                      >
                        <option>1-2 Years</option>
                        <option>3-5 Years</option>
                        <option>5+ Years</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Brief Background</label>
                      <textarea 
                        rows={3}
                        disabled={loading}
                        value={formData.summary}
                        onChange={(e) => setFormData({...formData, summary: e.target.value})}
                        placeholder="Share your credentials or passion for healthcare..." 
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={loading} 
                      className="w-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white rounded-xl h-12 font-semibold shadow-lg"
                    >
                      {loading ? (
                        <span className="flex items-center justify-center gap-2">
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Submitting...
                        </span>
                      ) : (
                        "Submit Application"
                      )}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

