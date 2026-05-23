import { Briefcase, Gavel, Heart } from 'lucide-react';
import { motion } from 'motion/react';

const values = [
  {
    title: "Professionalism",
    description: "We uphold the highest standards in healthcare delivery by working with qualified professionals and maintaining excellence in every interaction. Our processes are structured, efficient, and guided by best practices to ensure optimal patient outcomes.",
    icon: <Briefcase className="h-10 w-10" />,
    color: "bg-primary"
  },
  {
    title: "Integrity",
    description: "Trust is the foundation of our services. We operate with transparency, honesty, and accountability in all our dealings—ensuring that patients and partners can rely on us for ethical and dependable healthcare solutions.",
    icon: <Gavel className="h-10 w-10" />,
    color: "bg-primary"
  },
  {
    title: "Care",
    description: "At the heart of Citicare is a deep commitment to compassion. We treat every patient with empathy, respect, and attention to detail, ensuring that their physical, emotional, and informational needs are fully addressed.",
    icon: <Heart className="h-10 w-10" />,
    color: "bg-primary"
  }
];

export default function Values() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="bg-[#005FA3] py-24 md:py-36 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10" />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl space-y-8"
          >
            <span className="text-white/60 font-black uppercase tracking-[0.4em] text-sm block">Our Foundation</span>
            <h1 className="text-5xl md:text-8xl font-black leading-[0.95] tracking-tight">
              Guided by <br/><span className="text-blue-300">Integrity</span> & Care.
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-medium max-w-2xl">
              Professional standards that drive every interaction and medical service we deliver at Citicare.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-white relative z-20 -mt-20">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Professionalism",
                icon: <Briefcase className="h-10 w-10" />,
                desc: "We uphold the highest standards in healthcare delivery by working with qualified professionals and maintaining excellence in every interaction."
              },
              {
                title: "Integrity",
                icon: <Gavel className="h-10 w-10" />,
                desc: "Trust is the foundation of our services. We operate with transparency, honesty, and accountability in all our dealings."
              },
              {
                title: "Care",
                icon: <Heart className="h-10 w-10" />,
                desc: "At the heart of Citicare is a deep commitment to compassion. We treat every patient with empathy, respect, and attention to detail."
              }
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#F1F5F9] p-12 rounded-[4rem] text-center space-y-8 hover:bg-[#005FA3] hover:text-white transition-all duration-500 group shadow-xl"
              >
                <div className="h-24 w-24 mx-auto bg-white rounded-3xl flex items-center justify-center text-[#005FA3] group-hover:scale-110 transition-transform shadow-lg">
                  {v.icon}
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tight">{v.title}</h3>
                <p className="font-medium opacity-80 text-lg leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-32 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <div className="h-[2px] w-24 bg-[#005FA3]/20 mx-auto" />
          <h2 className="text-4xl lg:text-6xl font-black text-[#1e3a8a] leading-[1.1] tracking-tight">
            "Our values are the <span className="text-[#005FA3]">heartbeat</span> of our medical service delivery."
          </h2>
          <div className="text-[#005FA3] font-black uppercase tracking-[0.4em] text-sm">Citicare Governance</div>
        </div>
      </section>
    </div>
  );
}
