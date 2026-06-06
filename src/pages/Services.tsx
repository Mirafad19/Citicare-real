import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Heart, Activity, UserCheck, ShieldCheck, Zap, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const mainServices = [
  {
    title: "Online Consultations",
    image: "https://www.image2url.com/r2/default/images/1778798331921-6358ebab-1a6e-4082-a655-cf373bfac93a.png",
    desc: "Access qualified doctors from the comfort of your home. Get accurate diagnoses, prescriptions, and professional medical advice.",
    features: ["Virtual Diagnosis", "Digital Prescriptions", "Expert Advice", "24/7 Availability"],
    link: "/book"
  },
  {
    title: "Home Healthcare",
    image: "https://www.image2url.com/r2/default/images/1778861274282-fc3009b9-31a4-401b-b0a6-38c7a85c2cbb.png",
    desc: "We bring care to your doorstep. Our services include medical consultations, psychiatric services, Physiotherapy, and specialized nursing care.",
    features: ["Nursing & Physiotherapy", "Psychiatric Support", "In-home Tests", "Vitals Monitoring"],
    link: "/home-healthcare"
  },
  {
    title: "Specialist Care",
    image: "https://www.image2url.com/r2/default/images/1778863421981-11b203cd-3516-4af1-b896-2e0174ce5418.png",
    desc: "Direct access to specialty medical fields including Cardiology, Surgery, OB/GYN, Urology, and Mental Health practitioners.",
    features: ["General Surgery", "Cardiology", "OB/GYN", "Mental Health"],
    link: "/specialist-care"
  }
];

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header */}
      <section className="bg-[#1e3a8a] py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10" />
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20 relative z-10 text-white">
          <div className="max-w-3xl space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <span className="text-white/60 font-semibold uppercase tracking-wider text-xs">Our Core Expertise</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Quality Care <span className="text-blue-300">Centered</span> On You
              </h1>
            </motion.div>
            <p className="text-lg lg:text-xl text-white/80 leading-relaxed">
              We provide comprehensive homecare solutions tailored to the unique clinical and lifestyle needs of every client.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-16 lg:py-24 bg-white relative z-20 -mt-8 lg:-mt-12">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {mainServices.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-slate-50 rounded-2xl lg:rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                <div className="h-56 lg:h-64 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 lg:p-8 flex flex-col flex-grow">
                  <h3 className="text-xl lg:text-2xl font-bold text-[#1e3a8a] mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-slate-700 bg-white p-2.5 rounded-xl">
                        <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <a 
                    href={service.link} 
                    className="mt-auto bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white rounded-xl h-12 font-semibold text-sm w-full flex items-center justify-center shadow-sm transition-colors"
                  >
                    Learn More
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Preventive & Support Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a]">Preventive & Follow Up Care</h2>
            <p className="text-base lg:text-lg text-slate-600 max-w-2xl mx-auto">
              Staying ahead of illness with continuous support and proactive monitoring.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                icon: <Activity className="h-8 w-8" />,
                title: "Preventive Health Services",
                desc: "Routine screenings, wellness checks, and health risk assessments to identify potential issues before they become serious concerns.",
                items: ["Wellness Checks", "Risk Assessments", "Proactive Screening"]
              },
              {
                icon: <Heart className="h-8 w-8" />,
                title: "Health Education & Follow Up",
                desc: "Personalized health plans, continuous monitoring, and patient specific medical guidance to ensure lasting health improvements.",
                items: ["Personalized Plans", "Continuous Monitoring", "Ongoing Guidance"]
              }
            ].map((item, i) => (
              <div 
                key={i} 
                className="bg-white p-8 lg:p-10 rounded-2xl lg:rounded-3xl space-y-6 group hover:bg-[#1e3a8a] hover:text-white transition-all duration-300 border border-slate-100 shadow-sm"
              >
                <div className="h-16 w-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-white/15 group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1e3a8a] group-hover:text-white transition-colors">{item.title}</h3>
                <p className="leading-relaxed text-slate-600 group-hover:text-slate-200 transition-colors text-sm">
                  {item.desc}
                </p>
                <ul className="space-y-2 text-slate-600 group-hover:text-slate-200 transition-colors">
                  {item.items.map((listItem, idx) => (
                    <li key={idx} className="flex items-center gap-2 font-medium text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-500 group-hover:bg-white transition-colors opacity-70" />
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            <div className="flex-1 order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                {[
                  { icon: <Heart className="h-7 w-7" />, label: "Compassionate", color: "bg-pink-50 text-pink-600" },
                  { icon: <Activity className="h-7 w-7" />, label: "Clinically Proven", color: "bg-blue-50 text-blue-600" },
                  { icon: <UserCheck className="h-7 w-7" />, label: "Expert Staff", color: "bg-green-50 text-green-600" },
                  { icon: <ShieldCheck className="h-7 w-7" />, label: "Certified", color: "bg-purple-50 text-purple-600" }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className="bg-slate-50 p-6 lg:p-8 rounded-2xl lg:rounded-3xl hover:shadow-lg transition-all duration-300 text-center space-y-4"
                  >
                    <div className={cn("h-14 w-14 mx-auto rounded-xl flex items-center justify-center", item.color)}>
                      {item.icon}
                    </div>
                    <div className="font-semibold text-slate-700 text-sm">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 space-y-6 lg:space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <span className="text-blue-600 font-semibold uppercase tracking-wider text-xs">Why Citicare</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a] leading-tight">
                  Personalized <span className="text-blue-600">healthcare</span> solutions
                </h2>
              </div>
              <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
                We connect patients with the right healthcare professionals while ensuring that care does not end after consultation.
              </p>
              <ul className="space-y-3">
                {[
                  "Access to qualified healthcare professionals",
                  "Seamless online, inpatient, and home care",
                  "Continuous follow-up and health guidance",
                  "Fast, reliable, and patient-centered"
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <Zap className="h-5 w-5 text-blue-600 shrink-0" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="/book" 
                className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white rounded-xl px-8 h-12 font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors w-max"
              >
                Book Assessment <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20 relative z-10">
          <div className="w-full bg-gradient-to-br from-[#1e3a8a] to-[#0f172a] rounded-3xl p-10 md:p-16 lg:p-20 shadow-2xl shadow-blue-950/15 border border-white/10 text-center relative overflow-hidden">
            {/* Ambient background decoration */}
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none select-none animate-pulse" />
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none select-none" />
            
            <div className="max-w-2xl mx-auto space-y-6 md:space-y-8 relative z-10 text-white">
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-4 py-1.5 rounded-full text-emerald-400 font-bold text-[10px] uppercase tracking-widest select-none">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Customized Care Plans
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white m-0">
                Let&apos;s build a customized care plan for you
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-lg mx-auto leading-relaxed font-medium">
                Schedule a free home assessment with our experienced care coordinators today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
                <a 
                  href="/contact" 
                  className="w-full sm:w-auto bg-white text-[#1e3a8a] hover:bg-slate-50 rounded-xl px-10 h-14 font-bold shadow-lg transition-all flex items-center justify-center text-sm"
                >
                  Contact Us Now
                </a>
                <a 
                  href="tel:+2348119868201"
                  className="w-full sm:w-auto flex items-center justify-center border-2 border-white/30 text-white hover:bg-white/10 rounded-xl px-10 h-14 font-bold transition-all"
                >
                  Call Direct
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
