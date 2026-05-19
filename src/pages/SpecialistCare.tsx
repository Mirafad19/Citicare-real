import React from 'react';
import { motion } from 'motion/react';
import { Stethoscope, Heart, Brain, Scissors, Baby, Activity, ShieldCheck, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const specialties = [
  {
    icon: Heart,
    name: "Cardiology",
    desc: "Comprehensive heart health monitoring and expert cardiac assessments from top-tier specialists.",
    color: "bg-red-50 text-red-600 border-red-100"
  },
  {
    icon: Brain,
    name: "Mental Health",
    desc: "Holistic psychiatric evaluations and psychotherapy sessions delivered with empathy and expertise.",
    color: "bg-indigo-50 text-indigo-600 border-indigo-100"
  },
  {
    icon: Scissors,
    name: "General Surgery",
    desc: "Pre operative consultations and surgical management from board certified surgical experts.",
    color: "bg-slate-50 text-slate-600 border-slate-100"
  },
  {
    icon: Baby,
    name: "OB/GYN",
    desc: "Dedicated women's health services including prenatal care, gynecology, and reproductive health.",
    color: "bg-pink-50 text-pink-600 border-pink-100"
  },
  {
    icon: Activity,
    name: "Orthopedics",
    desc: "Expert diagnosis and treatment of musculo skeletal issues, joint pain, and sports injuries.",
    color: "bg-emerald-50 text-emerald-600 border-emerald-100"
  },
  {
    icon: Stethoscope,
    name: "Urology",
    desc: "Specialized care for urinary tract conditions and male reproductive health systems.",
    color: "bg-blue-50 text-blue-600 border-blue-100"
  }
];

export default function SpecialistCare() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px] -mr-64 -mt-64 -z-10" />
        <div className="container mx-auto px-6 lg:px-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full text-blue-600 font-bold text-sm tracking-widest uppercase border border-blue-100"
            >
              <Star className="h-4 w-4 fill-blue-600" />
              World-Class Expertise
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl lg:text-8xl font-black uppercase tracking-tight text-[#1e3a8a] leading-[0.85]"
            >
              Specialist <br /> <span className="text-blue-500">Consultation</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto"
            >
              Direct access to a network of board certified specialists across multiple medical fields. No long wait times—just expert care when you need it most.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="pt-4"
            >
              <Button nativeButton={false} render={<Link to="/book" />} size="lg" className="bg-[#1e3a8a] text-white rounded-full px-16 h-20 text-xl font-black uppercase tracking-widest shadow-2xl transition-transform hover:scale-105 active:scale-95">
                Book a Specialist
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Grid of Specialties */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {specialties.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-white p-6 md:p-10 rounded-none lg:rounded-[3rem] shadow-none lg:shadow-xl shadow-slate-200/50 border-none lg:border border-slate-100 hover:border-blue-200 transition-all hover:-translate-y-2"
              >
                <div className={`h-20 w-20 rounded-[2rem] ${item.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <item.icon className="h-10 w-10" />
                </div>
                <h3 className="text-3xl font-black uppercase text-[#1e3a8a] mb-4">{item.name}</h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-8">{item.desc}</p>
                <Link to="/book" className="inline-flex items-center gap-2 text-blue-600 font-black uppercase tracking-widest text-sm hover:gap-4 transition-all">
                  Book Slot
                  <Activity className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Stats */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="bg-[#1e3a8a] rounded-none lg:rounded-[4rem] px-6 py-12 lg:p-24 text-white relative overflow-hidden">
            <img 
              src="https://www.image2url.com/r2/default/images/1778863421981-11b203cd-3516-4af1-b896-2e0174ce5418.png" 
              alt="Medical facility" 
              className="absolute inset-0 w-full h-full object-cover opacity-10 "
            />
            <div className="relative z-10 grid lg:grid-cols-2 gap-24 items-center">
              <div className="space-y-8">
                <h2 className="text-5xl font-black uppercase leading-tight">Patient-First <br/> Specialty Care</h2>
                <p className="text-blue-100/60 text-lg font-medium leading-relaxed">
                  We believe that specialty medical consultations shouldn't be a source of stress. Our platform streamlines the entire process, connecting you with the right doctor at the right time.
                </p>
                <div className="space-y-4">
                  {[
                    "Verified Board Certified Practitioners",
                    "Integrated Patient Records (EMR)",
                    "Digital Prescriptions & Referrals",
                    "Follow up Telehealth Sessions"
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3 font-bold">
                      <ShieldCheck className="h-6 w-6 text-blue-400" />
                      {text}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 text-center">
                <div className="bg-white/10 backdrop-blur-md p-6 md:p-10 rounded-none lg:rounded-[3rem] border-none lg:border border-white/10">
                  <div className="text-6xl font-black mb-2">50+</div>
                  <div className="text-blue-200 font-black uppercase tracking-widest text-xs">Specialists</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 md:p-10 rounded-none lg:rounded-[3rem] border-none lg:border border-white/10">
                  <div className="text-6xl font-black mb-2">15</div>
                  <div className="text-blue-200 font-black uppercase tracking-widest text-xs">Departments</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 md:p-10 rounded-none lg:rounded-[3rem] border-none lg:border border-white/10">
                  <div className="text-6xl font-black mb-2">99%</div>
                  <div className="text-blue-200 font-black uppercase tracking-widest text-xs">Success Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-6 md:p-10 rounded-none lg:rounded-[3rem] border-none lg:border border-white/10">
                  <div className="text-6xl font-black mb-2"><Activity className="h-12 w-12 mx-auto" /></div>
                  <div className="text-blue-200 font-black uppercase tracking-widest text-xs">Modern Tech</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl font-black uppercase text-[#1e3a8a]">Need an URGENT Appointment?</h2>
            <p className="text-slate-500 font-medium">Contact our specialized coordination desk for priority booking for acute cases.</p>
            <div className="flex justify-center gap-6">
              <Button nativeButton={false} render={<Link to="/contact" />} size="lg" className="border-2 border-[#1e3a8a] text-[#1e3a8a] bg-transparent hover:bg-slate-50 rounded-full px-12 h-16 text-lg font-black uppercase tracking-widest">
                Enquire Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
