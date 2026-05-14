import React from 'react';
import { motion } from 'motion/react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle2, Heart, Activity, UserCheck, ShieldCheck, Phone, Zap, ArrowRight, ChevronRight } from 'lucide-react';

const mainServices = [
  {
    title: "Online Consultations",
    image: "https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=800",
    desc: "Access qualified doctors from the comfort of your home. Get accurate diagnoses, prescriptions, and professional medical advice.",
    features: ["Virtual Diagnosis", "Digital Prescriptions", "Expert Advice", "24/7 Availability"]
  },
  {
    title: "Home Healthcare",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800",
    desc: "We bring care to your doorstep. Our services include medical consultations, psychiatric services, and specialized nursing care.",
    features: ["Nursing Care", "Psychiatric Support", "In-home Tests", "Vitals Monitoring"]
  },
  {
    title: "Specialist Care",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800",
    desc: "Direct access to specialty medical fields including Cardiology, Surgery, OB/GYN, Urology, and Mental Health practitioners.",
    features: ["General Surgery", "Cardiology", "OB/GYN", "Mental Health"]
  }
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header */}
      <section className="bg-blue-600 py-24 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10" />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24 relative z-10 text-white">
          <div className="max-w-3xl space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <span className="text-white/60 font-black uppercase tracking-[0.4em] text-sm block">Our Core Expertise</span>
              <h1 className="text-5xl md:text-8xl font-black leading-[0.95] tracking-tight">
                Quality Care <br/><span className="text-blue-300">Centered</span> On You.
              </h1>
            </motion.div>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-medium">
              We provide comprehensive homecare solutions tailored to the unique clinical and lifestyle needs of every client.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-24 bg-white relative z-20 -mt-16 md:-mt-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mainServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-[#F1F5F9] rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col group border border-transparent hover:border-[#005FA3]/10"
              >
                <div className="h-64 overflow-hidden relative">
                   <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#005FA3]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-12 flex flex-col items-center text-center flex-grow space-y-6">
                  <h3 className="text-2xl font-black text-[#1e3a8a] uppercase leading-tight">{service.title}</h3>
                  <p className="text-[#5c5c5c] font-medium leading-relaxed">
                    {service.desc}
                  </p>
                  <div className="w-full pt-4 space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-[#1e3a8a] font-bold text-sm bg-white/50 p-3 rounded-2xl">
                        <CheckCircle2 className="h-4 w-4 text-[#005FA3]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="mt-8 bg-[#005FA3] hover:bg-[#004d80] text-white rounded-full px-10 h-14 font-black uppercase tracking-widest text-xs transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-500/10">
                    Get Started
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preventive & Support Section */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-6xl font-black text-[#1e3a8a]">Preventive & Follow-Up Care</h2>
            <p className="text-xl text-[#5c5c5c] font-medium max-w-2xl mx-auto">Staying ahead of illness with continuous support and proactive monitoring.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-[#F1F5F9] p-12 rounded-[3.5rem] space-y-6 group hover:bg-[#005FA3] hover:text-white transition-all duration-500">
              <div className="h-20 w-20 bg-white rounded-2xl flex items-center justify-center text-[#005FA3] group-hover:scale-110 transition-transform">
                <Activity className="h-10 w-10" />
              </div>
              <h3 className="text-3xl font-black">Preventive Health Services</h3>
              <p className="font-medium opacity-80 leading-relaxed">
                Routine screenings, wellness checks, and health risk assessments to identify potential issues before they become serious concerns.
              </p>
              <ul className="space-y-3 font-bold">
                 <li>• Wellness Checks</li>
                 <li>• Risk Assessments</li>
                 <li>• Proactive Screening</li>
              </ul>
            </div>
            <div className="bg-[#F1F5F9] p-12 rounded-[3.5rem] space-y-6 group hover:bg-[#005FA3] hover:text-white transition-all duration-500">
              <div className="h-20 w-20 bg-white rounded-2xl flex items-center justify-center text-[#005FA3] group-hover:scale-110 transition-transform">
                <Heart className="h-10 w-10" />
              </div>
              <h3 className="text-3xl font-black">Health Education & Follow-Up</h3>
              <p className="font-medium opacity-80 leading-relaxed">
                Personalized health plans, continuous monitoring, and patient-specific medical guidance to ensure lasting health improvements.
              </p>
              <ul className="space-y-3 font-bold">
                 <li>• Personalized Plans</li>
                 <li>• Continuous Monitoring</li>
                 <li>• Ongoing Guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="flex-1 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Heart className="h-8 w-8" />, label: "Compassionate", color: "bg-pink-100 text-pink-600" },
                  { icon: <Activity className="h-8 w-8" />, label: "Clinically Proven", color: "bg-blue-100 text-blue-600" },
                  { icon: <UserCheck className="h-8 w-8" />, label: "Expert Staff", color: "bg-green-100 text-green-600" },
                  { icon: <ShieldCheck className="h-8 w-8" />, label: "Certified", color: "bg-purple-100 text-purple-600" }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-10 rounded-[3rem] shadow-sm hover:shadow-xl transition-all duration-300 text-center space-y-4 border border-slate-100">
                    <div className={`h-16 w-16 mx-auto rounded-2xl flex items-center justify-center ${item.color}`}>
                      {item.icon}
                    </div>
                    <div className="font-black text-[#1e3a8a] uppercase tracking-widest text-xs">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 space-y-8 order-1 lg:order-2">
               <div className="space-y-4">
                 <span className="text-[#005FA3] font-black uppercase tracking-[0.4em] text-sm block">Why Citicare</span>
                 <h2 className="text-4xl lg:text-7xl font-black text-[#1e3a8a] leading-[0.95] tracking-tight">
                    Personalized <span className="text-[#005FA3]">healthcare</span> solutions.
                 </h2>
               </div>
               <p className="text-xl text-[#5c5c5c] leading-relaxed">
                 We connect patients with the right healthcare professionals while ensuring that care does not end after consultation.
               </p>
               <ul className="space-y-4">
                  {[
                    "Access to qualified healthcare professionals",
                    "Seamless online, inpatient, and home care",
                    "Continuous follow-up and health guidance",
                    "Fast, reliable, and patient-centered"
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-4 text-[#1e3a8a] font-bold text-lg">
                      <Zap className="h-5 w-5 text-[#005FA3]" />
                      <span>{text}</span>
                    </li>
                  ))}
               </ul>
               <div className="pt-6">
                 <Button className="bg-[#005FA3] hover:bg-[#004d80] text-white rounded-full px-12 h-16 font-black flex items-center gap-3">
                    Book Assessment <ChevronRight className="h-5 w-5" />
                 </Button>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#005FA3] relative overflow-hidden text-center">
         <div className="max-w-4xl mx-auto px-6 relative z-10 text-white space-y-10">
           <h2 className="text-4xl lg:text-7xl font-black leading-tight">
              Let's build a customized care plan for you.
           </h2>
           <p className="text-xl opacity-80 font-medium">
             Schedule a free home assessment with our care coordinators today.
           </p>
           <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="lg" className="bg-white text-[#005FA3] hover:bg-slate-100 rounded-full px-12 h-20 text-xl font-black uppercase tracking-widest shadow-2xl transition-all hover:-translate-y-2">
                Contact Us Now
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white/20 text-white hover:bg-white/10 rounded-full px-12 h-20 text-xl font-black uppercase tracking-widest transition-all hover:-translate-y-2">
                Call Direct
              </Button>
           </div>
         </div>
      </section>
    </div>
  );
}
