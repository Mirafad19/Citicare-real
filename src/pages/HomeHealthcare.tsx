import React from 'react';
import { motion } from 'motion/react';
import { Home, Heart, Activity, UserCheck, Shield, ChevronRight, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export default function HomeHealthcare() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative min-h-[450px] lg:min-h-[500px] flex items-center py-16 lg:py-0 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.image2url.com/r2/default/images/1778861274282-fc3009b9-31a4-401b-b0a6-38c7a85c2cbb.png" 
            alt="Home Healthcare" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/90 via-[#1e3a8a]/70 to-transparent" />
        </div>
        
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-xl text-white"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 px-4 py-2 rounded-full text-emerald-400 font-semibold text-xs uppercase tracking-wider mb-4 border border-emerald-500/30">
              <Home className="h-4 w-4" />
              Compassionate Care at Home
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white">
              Home <span className="text-emerald-400">Healthcare</span> Services
            </h1>
            <p className="text-base lg:text-lg text-white/80 leading-relaxed mb-6">
              Professional medical care delivered in the comfort and safety of your own home. Our dedicated team ensures you receive the highest quality treatment without leaving your doorstep.
            </p>
            <Button 
              nativeButton={false} 
              render={<Link to="/book" />} 
              size="lg" 
              className="bg-white text-[#1e3a8a] hover:bg-white/90 rounded-xl px-8 h-14 font-semibold"
            >
              Request Home Care
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a]">Why Choose Home Care?</h2>
                <div className="h-1 w-16 bg-emerald-500 rounded-full" />
              </div>
              
              <div className="space-y-4">
                {[
                  {
                    icon: Heart,
                    title: "Personalized Support",
                    desc: "Tailored care plans designed specifically for your unique medical and lifestyle needs."
                  },
                  {
                    icon: Activity,
                    title: "Advanced Monitoring",
                    desc: "Continuous health tracking using state-of-the-art portable medical technology."
                  },
                  {
                    icon: UserCheck,
                    title: "Expert Nursing",
                    desc: "Highly skilled registered nurses specializing in post-operative and chronic care."
                  },
                  {
                    icon: Shield,
                    title: "Safe Environment",
                    desc: "Reducing hospital exposure risks while recovering in a familiar, comfortable setting."
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 p-5 rounded-2xl bg-white shadow-sm border border-slate-100 group hover:border-emerald-200 transition-colors"
                  >
                    <div className="h-12 w-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 transition-colors">
                      <item.icon className="h-6 w-6 text-emerald-600 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1e3a8a] mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="https://www.image2url.com/r2/default/images/1779888683542-a33ea00e-33af-40dd-9968-8347e35b6f28.png" 
                  alt="Quality care" 
                  className="w-full object-cover h-[300px] lg:h-[500px]"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-4 lg:-right-6 bg-white p-6 rounded-2xl shadow-xl border border-emerald-100 hidden sm:block">
                <div className="text-3xl font-bold text-emerald-600 mb-1">24/7</div>
                <div className="text-[#1e3a8a] font-semibold text-xs uppercase tracking-wider mb-3">Response Guarantee</div>
                <div className="flex items-center gap-2 text-emerald-600 text-sm font-semibold">
                  <Phone className="h-4 w-4" />
                  +234 811 986 8201
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 lg:py-24 bg-[#1e3a8a] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] -mr-48 -mt-48" />
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20 relative z-10">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Our Specialty Home Services</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-sm lg:text-base">
              Comprehensive medical solutions ranging from daily nursing to specialized psychiatric support.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Skilled Nursing Care",
              "Post-Operative Recovery",
              "Elderly Companion Care",
              "Physiotherapy (Physical Therapy)",
              "Psychiatric Home Support",
              "Medication Management",
              "Wound Care Services",
              "Lab Sample Collection",
              "Palliative Care"
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-white/5 border border-white/10 p-5 lg:p-6 rounded-xl flex items-center justify-between"
              >
                <span className="font-semibold text-sm lg:text-base">{service}</span>
                <ChevronRight className="h-5 w-5 text-emerald-400" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20">
          <div className="bg-[#1e3a8a] rounded-2xl lg:rounded-3xl p-8 lg:p-16 text-center text-white relative overflow-hidden">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 relative z-10">Experience the Citicare Standard</h2>
            <p className="text-base lg:text-lg text-white/70 max-w-2xl mx-auto mb-8 relative z-10">
              Ready to bring hospital-quality care to your home? Let&apos;s discuss your requirements today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Button 
                nativeButton={false} 
                render={<Link to="/book" />} 
                size="lg" 
                className="bg-white text-[#1e3a8a] rounded-xl px-8 h-14 font-semibold"
              >
                Book Initial Visit
              </Button>
              <Button 
                nativeButton={false} 
                render={<Link to="/contact" />} 
                size="lg" 
                className="bg-transparent border-2 border-white/30 text-white rounded-xl px-8 h-14 font-semibold hover:bg-white/10"
              >
                Contact Consultant
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
