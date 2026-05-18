import React from 'react';
import { motion } from 'motion/react';
import { FileDown, CheckCircle2, Award, Zap, Users, Globe, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export default function Brochure() {
  return (
    <div className="min-h-screen bg-white">
      {/* Cover Section */}
      <section className="relative min-h-screen flex items-center bg-[#1e3a8a] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-blue-500/10 rounded-full blur-[200px] -mr-64 -mt-64" />
        
        <div className="container mx-auto px-6 lg:px-24 grid lg:grid-cols-2 gap-24 items-center relative z-10">
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 inline-flex items-center gap-3 font-black uppercase tracking-[0.3em] text-xs"
            >
              <Award className="h-4 w-4 text-blue-400" />
              Official Corporate Profile 2026/27
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl lg:text-[10rem] font-black uppercase tracking-tighter leading-[0.75] mb-4"
            >
              Citicare <br /> <span className="text-blue-400">Health</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-blue-100/60 font-medium leading-relaxed max-w-xl"
            >
              Pioneering the future of integrated healthcare in Nigeria. Quality, Accessibility, and Excellence combined.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex gap-4 pt-8"
            >
              <Button size="lg" className="bg-white text-[#1e3a8a] hover:bg-blue-50 rounded-full px-12 h-20 text-xl font-black uppercase tracking-widest shadow-2xl transition-all hover:scale-105 active:scale-95">
                <FileDown className="h-6 w-6 mr-3" />
                Download PDF
              </Button>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="bg-white p-4 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transform rotate-3 hover:rotate-0 transition-transform duration-700">
               <img 
                 src="https://www.image2url.com/r2/default/images/1778793792491-b1b6686e-ac45-4d5b-b39c-d970f1d5d1da.png" 
                 alt="Digital Healthcare Consultation" 
                 className="w-full h-auto aspect-[3/4] object-contain p-12 bg-slate-50 rounded-[3rem]"
               />
               <div className="absolute -bottom-10 -left-10 bg-blue-500 p-8 rounded-[3rem] shadow-2xl border-4 border-white">
                  <div className="text-5xl font-black">100%</div>
                  <div className="font-bold uppercase text-xs tracking-widest text-blue-100">Quality Assured</div>
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-1 space-y-6">
              <h2 className="text-5xl font-black uppercase text-[#1e3a8a] leading-[0.9]">Transforming <br /> Patient <br /> Experience</h2>
              <div className="h-2 w-20 bg-blue-500 rounded-full" />
              <p className="text-slate-500 font-medium text-lg leading-relaxed">
                Our mission is to bridge the gap between traditional healthcare and modern digital convenience, ensuring every Nigerian has access to premium medical support regardless of their location.
              </p>
            </div>
            
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Zap,
                  title: "Speed of Access",
                  desc: "Connecting patients with doctors in under 2 hours, 24/7."
                },
                {
                  icon: Users,
                  title: "Expert Network",
                  desc: "Partnering with over 500+ clinics and specialty labs nationwide."
                },
                {
                  icon: Globe,
                  title: "Digital Ready",
                  desc: "Modern EMR systems that keep your health records secure and accessible."
                },
                {
                  icon: CheckCircle2,
                  title: "Accredited Care",
                  desc: "Fully licensed by state and federal healthcare regulatory bodies."
                }
              ].map((item, i) => (
                <div key={i} className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100">
                  <div className="h-14 w-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <item.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-black uppercase text-[#1e3a8a] mb-3">{item.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Visual Spread */}
      <section className="py-32">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="grid grid-cols-12 gap-8 h-[800px]">
             <div className="col-span-8 rounded-[4rem] overflow-hidden shadow-2xl relative group">
                <img 
                  src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200" 
                  alt="Clinic" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-12 flex flex-col justify-end">
                   <h3 className="text-white text-4xl font-black uppercase">Modern Facilities</h3>
                </div>
             </div>
             <div className="col-span-4 flex flex-col gap-8">
                <div className="flex-1 rounded-[4rem] overflow-hidden shadow-2xl bg-amber-400 flex items-center justify-center p-12 text-center text-white">
                  <div>
                    <h4 className="text-3xl font-black uppercase mb-4">Patient Satisfaction</h4>
                    <div className="text-7xl font-black">9.8/10</div>
                  </div>
                </div>
                <div className="flex-1 rounded-[4rem] overflow-hidden shadow-2xl">
                   <img 
                     src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600" 
                     alt="Surgery" 
                     className="w-full h-full object-cover"
                   />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Final Call */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="max-w-3xl mx-auto space-y-12">
            <h2 className="text-6xl font-black uppercase text-[#1e3a8a] leading-tight">Ready to Partner with Us?</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button nativeButton={false} render={<Link to="/book" />} size="lg" className="bg-blue-600 text-white rounded-full px-12 h-20 text-xl font-black uppercase tracking-widest shadow-2xl transition-transform hover:scale-105 active:scale-95">
                Book Service
                <ArrowRight className="h-6 w-6 ml-3" />
              </Button>
              <Button nativeButton={false} render={<Link to="/contact" />} size="lg" className="border-2 border-slate-200 text-slate-500 bg-transparent hover:bg-slate-50 rounded-full px-12 h-20 text-xl font-black uppercase tracking-widest">
                General Inquiry
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
