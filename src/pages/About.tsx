import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Target, Shield, Heart, Zap, Star, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#1e3a8a] py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10" />
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl space-y-6"
          >
            <div className="flex items-center gap-3 text-white/60 font-semibold uppercase tracking-wider text-xs">
              <ShieldCheck className="h-5 w-5" />
              <span>Established & Trusted</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Accessible, Efficient, <span className="text-blue-300">Compassionate</span> Care
            </h1>
            <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl">
              Citicare is a patient-centered digital healthcare platform committed to bridging the gap between individuals and quality healthcare services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <span className="text-blue-600 font-semibold uppercase tracking-wider text-xs">Our Identity</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a] leading-tight">
                  Improving lives through <span className="text-blue-600">quality care</span>
                </h2>
              </div>
              <div className="space-y-4 text-base lg:text-lg text-slate-600 leading-relaxed">
                <p>
                  <span className="text-blue-600 font-semibold">Citicare Integrated Health Solutions Ltd</span> is a patient centered digital healthcare platform committed to bridging the gap between individuals and quality healthcare services.
                </p>
                <p>
                  We connect patients with the right healthcare professionals while ensuring that care does not end after consultation. Our system provides continuous follow up, personalized health insights, and guidance tailored to each patient&apos;s unique needs.
                </p>
                <p>
                  We believe healthcare should be accessible, efficient, and individualized. That is why we combine technology with compassionate care to deliver a seamless healthcare experience.
                </p>
              </div>
              <Button 
                onClick={() => {
                  document.getElementById('mission-section')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white rounded-xl px-8 h-12 font-semibold text-sm"
              >
                Discover Our Mission
              </Button>
            </div>

            <div className="flex-1 relative w-full">
              <div className="rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 relative z-10">
                <img 
                  src="https://www.image2url.com/r2/default/images/1779305514894-9ec3c575-2b7a-4efc-a99a-cee8ca154dac.png" 
                  alt="Compassionate Medical Care" 
                  className="w-full h-[350px] lg:h-[500px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 lg:-right-6 bg-[#1e3a8a] text-white p-6 lg:p-8 rounded-2xl shadow-xl z-20 hidden sm:block">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold mb-1">Verified</div>
                  <div className="text-white/70 text-xs font-medium uppercase tracking-wider">Licensed Professionals</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Grid */}
      <section id="mission-section" className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20 grid md:grid-cols-2 gap-6 lg:gap-8">
          {[
            {
              title: "Our Mission",
              icon: <Target className="h-8 w-8 text-blue-600" />,
              text: "To bridge the gap between quality healthcare expertise and patient accessibility through informed, continuous, and technology-driven care.",
              color: "bg-blue-50"
            },
            {
              title: "Our Goal",
              icon: <Zap className="h-8 w-8 text-emerald-600" />,
              text: "Not just treating illnesses - we are improving lives through personalized insights, routine screenings, and compassionate medical guidance.",
              color: "bg-emerald-50"
            }
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className={cn(
                "p-8 lg:p-12 rounded-2xl lg:rounded-3xl transition-all duration-300 space-y-6 hover:shadow-xl",
                card.color
              )}
            >
              <div className="h-16 w-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                {card.icon}
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-[#1e3a8a]">{card.title}</h3>
              <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
                {card.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a]">What we stand for</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: "Compassion", desc: "We care for your family like they are our own.", icon: <Heart className="h-10 w-10" />, color: "bg-rose-50 text-rose-600" },
              { title: "Integrity", desc: "Honesty and transparency in every care plan.", icon: <Shield className="h-10 w-10" />, color: "bg-blue-50 text-blue-600" },
              { title: "Excellence", desc: "Striving for the highest quality of healthcare.", icon: <Star className="h-10 w-10" />, color: "bg-amber-50 text-amber-600" }
            ].map((val, i) => (
              <div 
                key={i} 
                className={cn(
                  "p-8 lg:p-10 rounded-2xl lg:rounded-3xl text-center space-y-5 transition-all duration-300 hover:shadow-xl",
                  val.color
                )}
              >
                <div className="h-20 w-20 mx-auto bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  {val.icon}
                </div>
                <h4 className="text-2xl font-bold">{val.title}</h4>
                <p className="text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
