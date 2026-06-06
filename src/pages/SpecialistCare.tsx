import React from 'react';
import { motion } from 'motion/react';
import { Stethoscope, Heart, Brain, Scissors, Baby, Activity, ShieldCheck, Star, Apple, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';

const specialties = [
  {
    slug: "cardiology",
    icon: Heart,
    name: "Cardiology",
    desc: "Comprehensive heart health monitoring and expert cardiac assessments from top-tier specialists.",
    color: "bg-red-50 text-red-600"
  },
  {
    slug: "mental-health",
    icon: Brain,
    name: "Mental Health",
    desc: "Holistic psychiatric evaluations and psychotherapy sessions delivered with empathy and expertise.",
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    slug: "general-surgery",
    icon: Scissors,
    name: "General Surgery",
    desc: "Pre operative consultations and surgical management from board certified surgical experts.",
    color: "bg-slate-100 text-slate-600"
  },
  {
    slug: "ob-gyn",
    icon: Baby,
    name: "OB/GYN",
    desc: "Dedicated women's health services including prenatal care, gynecology, and reproductive health.",
    color: "bg-pink-50 text-pink-600"
  },
  {
    slug: "orthopedics",
    icon: Activity,
    name: "Orthopedics",
    desc: "Expert diagnosis and treatment of musculo skeletal issues, joint pain, and sports injuries.",
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    slug: "urology",
    icon: Stethoscope,
    name: "Urology",
    desc: "Specialized care for urinary tract conditions and male reproductive health systems.",
    color: "bg-blue-50 text-blue-600"
  },
  {
    slug: "general-practice",
    icon: Stethoscope,
    name: "General Practice",
    desc: "Primary medical evaluations, disease prevention, physical exams, and holistic family health consultations.",
    color: "bg-teal-50 text-teal-600"
  },
  {
    slug: "endocrinology",
    icon: Activity,
    name: "Endocrinology",
    desc: "Specialized care for hormone balance, diabetes mellitus, thyroid wellness, and metabolic disorders.",
    color: "bg-amber-50 text-amber-600"
  },
  {
    slug: "plastic-surgery",
    icon: ShieldCheck,
    name: "Plastic Surgery",
    desc: "Reconstructive consultations and advanced aesthetic medical assessments with board-certified surgeons.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    slug: "nutritionist",
    icon: Apple,
    name: "Nutritionist",
    desc: "Empathetic, scientifically backed dietary planning, weight management, and custom metabolic nutrition reviews.",
    color: "bg-orange-50 text-orange-600"
  }
];

export default function SpecialistCare() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] -mr-48 -mt-48 -z-10" />
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-blue-600 font-semibold text-xs uppercase tracking-wider border border-blue-100"
            >
              <Star className="h-4 w-4" />
              World-Class Expertise
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e3a8a] leading-tight"
            >
              Specialist <span className="text-blue-600">Consultation</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto"
            >
              Direct access to a network of board certified specialists across multiple medical fields. No long wait times - just expert care when you need it most.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <a 
                href="/book" 
                className="bg-[#1e3a8a] text-white rounded-xl px-8 h-14 font-semibold shadow-lg inline-flex items-center justify-center transition-colors hover:bg-opacity-90 text-sm"
              >
                Book a Specialist
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grid of Specialties */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-slate-50 p-6 lg:p-8 rounded-2xl lg:rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 hover:border-blue-100"
              >
                <div className={`h-16 w-16 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#1e3a8a] mb-3">{item.name}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{item.desc}</p>
                <a 
                  href={`/specialist-care/${item.slug}`} 
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all"
                >
                  View Details & Book
                  <Activity className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Stats */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20">
          <div className="bg-[#1e3a8a] rounded-2xl lg:rounded-3xl p-8 lg:p-16 text-white relative overflow-hidden">
            <img 
              src="https://www.image2url.com/r2/default/images/1778863421981-11b203cd-3516-4af1-b896-2e0174ce5418.png" 
              alt="Medical facility" 
              className="absolute inset-0 w-full h-full object-cover opacity-10"
            />
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">Patient-First Specialty Care</h2>
                <p className="text-white/60 text-sm lg:text-base leading-relaxed">
                  We believe that specialty medical consultations shouldn&apos;t be a source of stress. Our platform streamlines the entire process, connecting you with the right doctor at the right time.
                </p>
                <div className="space-y-3">
                  {[
                    "Verified Board Certified Practitioners",
                    "Integrated Patient Records (EMR)",
                    "Digital Prescriptions & Referrals",
                    "Follow up Telehealth Sessions"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 font-medium text-sm">
                      <ShieldCheck className="h-5 w-5 text-blue-400 shrink-0" />
                      {text}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "25+", label: "Specialists" },
                  { value: "10", label: "Departments" },
                  { value: "99%", label: "Success Rate" },
                  { value: "24/7", label: "Support" }
                ].map((stat, i) => (
                  <div key={i} className="bg-white/10 p-6 lg:p-8 rounded-2xl text-center">
                    <div className="text-4xl lg:text-5xl font-bold mb-1">{stat.value}</div>
                    <div className="text-white/60 font-semibold text-xs uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 text-center bg-slate-50">
        <div className="max-w-2xl mx-auto px-5 sm:px-6 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1e3a8a]">Need an Urgent Appointment?</h2>
          <p className="text-slate-600">Contact our specialized coordination desk for priority booking for acute cases.</p>
          <a 
            href="/contact" 
            className="border-2 border-[#1e3a8a] text-[#1e3a8a] bg-transparent hover:bg-[#1e3a8a] hover:text-white rounded-xl px-8 h-12 font-semibold inline-flex items-center justify-center text-sm transition-colors"
          >
            Enquire Now
          </a>
        </div>
      </section>
    </div>
  );
}
