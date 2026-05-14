import React from 'react';
import { motion } from 'motion/react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users, Target, Shield, Heart, Quote, Phone, Zap, ChevronRight, Star, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-blue-500 py-24 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10" />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl space-y-8"
          >
            <div className="flex items-center gap-4 text-white/60 font-black uppercase tracking-[0.4em] text-sm mb-4">
              <ShieldCheck className="h-6 w-6" />
              <span>Established & Trusted</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black leading-[0.95] tracking-tighter uppercase">
              Accessible, Efficient, <br/><span className="text-blue-200 italic">Compassionate</span> Care.
            </h1>
            <p className="text-xl md:text-2xl text-blue-50 leading-relaxed font-bold max-w-2xl opacity-90">
              Citicare is a patient-centered digital healthcare platform committed to bridging the gap between individuals and quality healthcare services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section with fixed blue */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 space-y-10">
              <div className="space-y-4">
                <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-sm block">Our Identity</span>
                <h2 className="text-44xl md:text-7xl font-black text-[#1e3a8a] leading-[0.9] tracking-tighter uppercase">Improving lives through <span className="text-blue-500 italic">quality care.</span></h2>
              </div>
              <div className="space-y-6 text-xl text-[#5c5c5c] font-bold leading-relaxed">
                <p>
                  <span className="text-blue-500 font-black uppercase tracking-tight">Citicare Integrated Health Solutions Ltd</span> is a patient-centered digital healthcare platform committed to bridging the gap between individuals and quality healthcare services.
                </p>
                <p>
                  We connect patients with the right healthcare professionals while ensuring that care does not end after consultation. Our system provides continuous follow-up, personalized health insights, and guidance tailored to each patient’s unique needs.
                </p>
                <p>
                  We believe healthcare should be accessible, efficient, and individualized. That is why we combine technology with compassionate care to deliver a seamless healthcare experience.
                </p>
              </div>
              <div className="pt-6">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-12 h-16 font-black uppercase tracking-widest text-xs shadow-xl">
                  Discover Our Mission
                </Button>
              </div>
            </div>

            <div className="flex-1 relative">
               <div className="rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] relative z-10">
                 <img 
                   src="https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=1400" 
                   alt="Modern Digital Consultation" 
                   className="w-full h-[600px] object-cover"
                 />
                 <div className="absolute inset-0 bg-blue-600/5 mix-blend-multiply" />
               </div>
               <div className="absolute -bottom-10 -right-10 bg-blue-500 text-white p-12 rounded-[3.5rem] shadow-2xl z-20 hidden md:block border-none">
                  <div className="text-center">
                    <div className="text-4xl font-black mb-1 uppercase tracking-tighter">Verified</div>
                    <div className="font-bold uppercase tracking-widest text-[10px] opacity-80">Licensed Professionals</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Grid with permanent colorful backgrounds */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24 grid md:grid-cols-2 gap-12">
          {[
            {
              title: "Our Mission",
              icon: <Target className="h-10 w-10 text-blue-600" />,
              text: "To bridge the gap between quality healthcare expertise and patient accessibility through informed, continuous, and technology-driven care.",
              color: "bg-blue-100/50"
            },
            {
              title: "Our Goal",
              icon: <Zap className="h-10 w-10 text-emerald-600" />,
              text: "Not just treating illnesses—we are improving lives through personalized insights, routine screenings, and compassionate medical guidance.",
              color: "bg-emerald-100/50"
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={cn("p-16 rounded-[4rem] transition-all duration-500 space-y-8 shadow-sm hover:shadow-2xl", card.color)}
            >
              <div className="h-20 w-20 bg-white rounded-3xl flex items-center justify-center shadow-lg">
                {card.icon}
              </div>
              <h3 className="text-4xl font-black text-[#1e3a8a] tracking-tight uppercase">{card.title}</h3>
              <p className="text-xl text-[#334155] leading-relaxed font-bold opacity-80">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values with permanent colors */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24">
           <div className="text-center mb-20">
             <h2 className="text-5xl lg:text-9xl font-black text-[#1e3a8a] tracking-tighter uppercase whitespace-pre-line">What we stand for.</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {[
               { title: "Compassion", desc: "We care for your family like they are our own.", icon: <Heart className="h-12 w-12" />, color: "bg-rose-100 text-rose-600" },
               { title: "Integrity", desc: "Honesty and transparency in every care plan.", icon: <Shield className="h-12 w-12" />, color: "bg-blue-100 text-blue-600" },
               { title: "Excellence", desc: "Striving for the highest quality of healthcare.", icon: <Star className="h-12 w-12" />, color: "bg-amber-100 text-amber-600" }
             ].map((val, i) => (
               <div key={i} className={cn("p-12 rounded-[4rem] text-center space-y-6 transition-all duration-500 shadow-sm hover:shadow-xl", val.color)}>
                  <div className="h-24 w-24 mx-auto bg-white rounded-3xl flex items-center justify-center shadow-lg">
                    {val.icon}
                  </div>
                  <h4 className="text-3xl font-black uppercase tracking-tight leading-none">{val.title}</h4>
                  <p className="font-bold opacity-80 leading-relaxed text-[#1e3a8a]">{val.desc}</p>
               </div>
             ))}
           </div>
        </div>
      </section>
    </div>
  );
}
