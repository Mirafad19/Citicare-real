import { Briefcase, Gavel, Heart } from 'lucide-react';
import { motion } from 'motion/react';

export default function Values() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-[#1e3a8a] py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10" />
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl space-y-6"
          >
            <span className="text-white/60 font-semibold uppercase tracking-wider text-xs">Our Foundation</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Guided by <span className="text-blue-300">Integrity</span> & Care
            </h1>
            <p className="text-base lg:text-lg text-white/80 leading-relaxed max-w-2xl">
              Professional standards that drive every interaction and medical service we deliver at Citicare.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 lg:py-24 bg-white relative z-20 -mt-8 lg:-mt-12">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Professionalism",
                icon: <Briefcase className="h-8 w-8" />,
                desc: "We uphold the highest standards in healthcare delivery by working with qualified professionals and maintaining excellence in every interaction."
              },
              {
                title: "Integrity",
                icon: <Gavel className="h-8 w-8" />,
                desc: "Trust is the foundation of our services. We operate with transparency, honesty, and accountability in all our dealings."
              },
              {
                title: "Care",
                icon: <Heart className="h-8 w-8" />,
                desc: "At the heart of Citicare is a deep commitment to compassion. We treat every patient with empathy, respect, and attention to detail."
              }
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 p-8 lg:p-10 rounded-2xl lg:rounded-3xl text-center space-y-5 hover:bg-[#1e3a8a] hover:text-white transition-all duration-300 group border border-slate-100 hover:border-transparent"
              >
                <div className="h-16 w-16 mx-auto bg-white rounded-2xl flex items-center justify-center text-[#1e3a8a] group-hover:text-blue-600 shadow-sm">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-bold">{v.title}</h3>
                <p className="text-sm leading-relaxed opacity-80">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 lg:py-28 bg-slate-50">
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center space-y-8">
          <div className="h-px w-16 bg-blue-600/30 mx-auto" />
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a] leading-tight">
            &quot;Our values are the <span className="text-blue-600">heartbeat</span> of our medical service delivery.&quot;
          </h2>
          <div className="text-blue-600 font-semibold uppercase tracking-wider text-sm">Citicare Governance</div>
        </div>
      </section>
    </div>
  );
}
