import React from 'react';
import { motion } from 'motion/react';
import { Home, Heart, Activity, UserCheck, Shield, ChevronRight, Phone } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

export default function HomeHealthcare() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative min-h-[500px] md:h-[60vh] flex items-center py-20 md:py-0 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://www.image2url.com/r2/default/images/1778861274282-fc3009b9-31a4-401b-b0a6-38c7a85c2cbb.png" 
            alt="Home Healthcare" 
            className="w-full h-full object-cover grayscale-[20%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/90 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 lg:px-24 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl text-white"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-md px-4 py-2 rounded-full text-emerald-400 font-bold text-sm tracking-widest uppercase mb-6 border border-emerald-500/30">
              <Home className="h-4 w-4" />
              Compassionate Care at Home
            </div>
            <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tight mb-6 leading-[0.9]">
              Home <span className="text-emerald-400">Healthcare</span> Services
            </h1>
            <p className="text-xl text-blue-100/80 font-medium leading-relaxed mb-8">
              Professional medical care delivered in the comfort and safety of your own home. Our dedicated team of nurses and specialists ensure you receive the highest quality treatment without leaving your doorstep.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button nativeButton={false} render={<Link to="/book" />} size="lg" className="bg-white text-[#1e3a8a] hover:bg-emerald-50 rounded-full px-12 h-16 text-lg font-black uppercase tracking-widest transition-colors duration-200">
                Request Home Care
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-black uppercase text-[#1e3a8a]">Why Choose Home Care?</h2>
                <div className="h-2 w-24 bg-emerald-500 rounded-full" />
              </div>
              
              <div className="grid gap-6">
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
                    className="flex gap-6 p-6 rounded-3xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 group hover:border-emerald-200 transition-colors"
                  >
                    <div className="h-14 w-14 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                      <item.icon className="h-7 w-7 text-emerald-600 group-hover:text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-[#1e3a8a] mb-2">{item.title}</h3>
                      <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-emerald-500/10 rounded-[4rem] blur-3xl -z-10" />
              <div className="bg-white p-0 lg:p-4 rounded-none lg:rounded-[4rem] shadow-none lg:shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1000" 
                  alt="Quality care" 
                  className="rounded-none lg:rounded-[3rem] w-full object-cover h-[350px] lg:h-[600px]"
                />
              </div>
              
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-2xl border border-emerald-100 max-w-xs transition-transform hover:-translate-y-2">
                <div className="text-4xl font-black text-emerald-600 mb-2">24/7</div>
                <div className="text-[#1e3a8a] font-black uppercase tracking-widest text-sm mb-4">Response Guarantee</div>
                <div className="flex items-center gap-2 text-emerald-600 font-bold">
                  <Phone className="h-4 w-4" />
                  +234 811 111 1111
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List Overlay */}
      <section className="py-24 bg-[#1e3a8a] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] -mr-64 -mt-64" />
        <div className="container mx-auto px-6 lg:px-24 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tight">Our Specialty Home Services</h2>
            <p className="text-blue-100/60 max-w-2xl mx-auto font-medium">Comprehensive medical solutions ranging from daily nursing to specialized psychiatric support.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Skilled Nursing Care",
              "Post-Operative Recovery",
              "Elderly Companion Care",
              "Physical Therapy",
              "Psychiatric Home Support",
              "Medication Management",
              "Wound Care Services",
              "Lab Sample Collection",
              "Palliative Care"
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm flex items-center justify-between"
              >
                <span className="text-lg font-bold">{service}</span>
                <ChevronRight className="h-5 w-5 text-emerald-400" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-24">
          <div className="bg-[#2E5AAB] rounded-none lg:rounded-[4rem] p-6 lg:p-24 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/hexellence.png')] opacity-10" />
            <h2 className="text-4xl lg:text-6xl font-black uppercase mb-8 relative z-10">Experience the Citicare Standard</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12 relative z-10">
              Ready to bring hospital-quality care to your home? Let's discuss your requirements today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <Button nativeButton={false} render={<Link to="/book" />} size="lg" className="bg-white text-[#1e3a8a] hover:bg-slate-50 rounded-full px-12 h-20 text-xl font-black uppercase tracking-widest transition-colors duration-200">
                Book Initial Visit
              </Button>
              <Button nativeButton={false} render={<Link to="/contact" />} size="lg" className="bg-transparent border-2 border-white/40 text-white rounded-full px-12 h-20 text-xl font-black uppercase tracking-widest hover:bg-white transition-colors hover:text-[#1e3a8a]">
                Contact Consultant
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
