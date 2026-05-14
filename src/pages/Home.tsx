import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle2, ChevronRight, Check, Zap, ArrowRight, Star, ShieldCheck, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

import { StaggerTestimonials } from '@/components/StaggerTestimonials';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000",
    subtitle: "Healthcare Reimagined",
    title: "Addressing your healthcare needs, Every Time",
    description: "A trusted digital healthcare platform delivering personalized medical services, expert consultations, and continuous follow-up care tailored to meet your needs.",
  },
  {
    image: "https://images.unsplash.com/photo-1576091160550-217359f4ecf8?auto=format&fit=crop&q=80&w=2000",
    subtitle: "Qualified Professionals",
    title: "Access to world-class medical experts",
    description: "We connect you with licensed and verified healthcare professionals who are committed to your total wellbeing and long-term health guidance.",
  },
  {
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000",
    subtitle: "Continuous Care",
    title: "Healthcare that never ends at the door",
    description: "Our platform ensures continuous monitoring, personalized insights, and comprehensive health guidance even after your consultation.",
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [imagesLoaded, setImagesLoaded] = React.useState(false);

  React.useEffect(() => {
    // Pre-load all images
    const loadImages = async () => {
      const promises = slides.map((slide) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = slide.image;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(promises);
        setImagesLoaded(true);
      } catch (error) {
        console.error("Error loading images:", error);
        // Still start the slider even if some fail
        setImagesLoaded(true);
      }
    };

    loadImages();

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Slanted Slider */}
      <section className="relative w-full h-[calc(100vh-140px)] min-h-[600px] bg-[#F1F5F9] overflow-hidden border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto h-full flex flex-col md:flex-row relative">
          
          {/* Left Side: Content */}
          <div className="w-full md:w-[45%] h-full flex items-center z-20 px-6 lg:px-20 py-12 md:py-0 bg-[#F1F5F9]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-xl"
              >
                <div className="space-y-6">
                  <span className="font-serif italic text-2xl lg:text-3xl text-primary block">
                    {slides[currentSlide].subtitle}
                  </span>
                  <h1 className="text-5xl lg:text-[80px] font-sans font-black text-[#1e3a8a] leading-[0.95] tracking-tight">
                    {slides[currentSlide].title}
                  </h1>
                  <p className="text-lg text-[#5c5c5c] font-medium leading-relaxed max-w-md pt-4">
                    {slides[currentSlide].description}
                  </p>
                  <div className="pt-8">
                    <Link 
                      to="/services" 
                      className="inline-flex items-center gap-6 bg-[#2563EB] hover:bg-[#1d4ed8] text-white pl-2 pr-10 py-2 rounded-full font-sans font-bold text-lg tracking-wide transition-all shadow-xl shadow-blue-500/20 group"
                    >
                      <div className="h-12 w-12 flex items-center justify-center bg-white/20 rounded-full group-hover:bg-white/30 transition-all">
                        <Zap className="h-6 w-6 fill-current" />
                      </div>
                      View All Services
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Image Slider */}
          <div className="absolute right-0 top-0 w-full md:w-[60%] h-full z-10">
            {/* The Slant Overlay */}
            <div className="absolute inset-0 z-20 hidden md:block">
              <div className="h-full w-full bg-[#F1F5F9] [clip-path:polygon(0_0,25%_0,0_100%,0_100%)]" />
              {/* Removed the harsh blue block that was here */}
            </div>

            <div className="h-full w-full relative overflow-hidden bg-[#F1F5F9]">
              {/* Image Loading Placeholder */}
              {!imagesLoaded && (
                <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                </div>
              )}
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: imagesLoaded ? 1 : 0.5, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <img 
                    src={slides[currentSlide].image} 
                    alt="Healthcare Professional" 
                    className={cn(
                      "h-full w-full object-cover transition-all duration-700",
                      imagesLoaded ? "blur-0" : "blur-lg scale-110"
                    )}
                    loading="eager"
                  />
                  {/* Subtle gradient for mobile readability */}
                  <div className="absolute inset-0 bg-[#F1F5F9]/30 md:hidden" />
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Dots UI */}
            <div className="absolute bottom-10 right-10 z-30 flex gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={cn(
                    "w-12 h-1.5 rounded-full transition-all duration-500",
                    currentSlide === index ? "bg-[#3B82F6] w-20" : "bg-white/40 hover:bg-white"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* Service Cards (Image 1) */}
      <section className="py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Online Medical Consultations",
                image: "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&q=80&w=800",
                desc: "Access qualified doctors from the comfort of your home. Get accurate diagnoses, prescriptions, and professional advice.",
                buttonText: "BOOK NOW",
                color: "bg-blue-50 border-blue-100",
                buttonColor: "bg-blue-600 hover:bg-blue-700"
              },
              {
                title: "Home Healthcare Services",
                image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=800",
                desc: "We bring professional care to your doorstep, including medical consultations, psychiatric services, and nursing care.",
                buttonText: "LEARN MORE",
                color: "bg-emerald-50 border-emerald-100",
                buttonColor: "bg-emerald-600 hover:bg-emerald-700"
              },
              {
                title: "Specialist Consultation",
                image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=800",
                desc: "Direct access to experts in Cardiology, OB/GYN, Surgery, Orthopedics, Mental Health, and more specialty areas.",
                buttonText: "VIEW SPECIALTIES",
                color: "bg-indigo-50 border-indigo-100",
                buttonColor: "bg-indigo-600 hover:bg-indigo-700"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn("flex flex-col rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border-2", service.color)}
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:opacity-0" />
                </div>
                <div className="p-10 flex flex-col items-center text-center flex-grow space-y-6">
                  <h3 className="text-3xl font-black text-[#1e3a8a] tracking-tight uppercase leading-tight">{service.title}</h3>
                  <p className="text-[#5c5c5c] mb-4 leading-relaxed font-bold opacity-80">
                    {service.desc}
                  </p>
                  <Link to="/services" className="w-full mt-auto">
                    <Button className={cn("w-full text-white rounded-full h-14 font-black uppercase tracking-widest text-xs shadow-lg transition-transform active:scale-95", service.buttonColor)}>
                      {service.buttonText}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Homecare Intro (Image 2/3) */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="flex-1 space-y-8">
                  <div className="space-y-4">
                    <span className="text-[#005FA3] font-black tracking-widest text-sm uppercase block">A New Era of Healthcare</span>
                    <h2 className="text-4xl lg:text-6xl font-black text-[#1e3a8a] leading-tight text-left">
                      Bridging the gap between individuals and quality care.
                    </h2>
                  </div>
              <p className="text-xl text-[#5c5c5c] leading-relaxed">
                Citicare is a patient-centered digital healthcare platform committed to connecting you with the right professionals. We ensure that care does not end after consultation through continuous follow-up and personalized insights.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-4">
                <div className="flex items-center gap-3">
                  <div className="h-4 w-4 bg-[#005FA3] rounded-full" />
                  <span className="font-bold text-[#1e3a8a]">Register & Connect</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-4 w-4 bg-[#005FA3] rounded-full" />
                  <span className="font-bold text-[#1e3a8a]">Professional Matching</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-4 w-4 bg-[#005FA3] rounded-full" />
                  <span className="font-bold text-[#1e3a8a]">Continuous Follow-up</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-4 w-4 bg-[#005FA3] rounded-full" />
                  <span className="font-bold text-[#1e3a8a]">Personalized Guidance</span>
                </div>
              </div>
                  <Button asChild size="lg" className="bg-[#005FA3] hover:bg-[#004d80] text-white rounded-full px-12 h-16 text-lg font-bold">
                    <Link to="/about">Learn About Citicare</Link>
                  </Button>
            </div>
            <div className="flex-1">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#005FA3]/10 rounded-full -z-10 blur-3xl" />
                <div className="rounded-[4rem] overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=1400" 
                    alt="Elderly Care" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 bg-[#005FA3] text-white p-12 rounded-[3rem] shadow-2xl hidden md:block">
                  <div className="text-5xl font-black mb-2">10+</div>
                  <div className="font-bold uppercase tracking-widest text-sm opacity-80">Years of Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Section (Image 4) with Bright Blue */}
      <section className="py-24 bg-blue-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -ml-48 -mb-48" />
        
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-64 h-64 bg-white/20 rounded-full blur-[100px]" />
                <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&q=80&w=1200" 
                    alt="Digital Healthcare Consultation" 
                    className="w-full h-[550px] object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex-1 space-y-10 text-white order-1 lg:order-2">
              <div className="space-y-6">
                <h2 className="text-5xl lg:text-8xl font-black leading-[0.9] tracking-tighter">
                  Ready to take control of your health today?
                </h2>
                <div className="h-2 w-32 bg-white rounded-full" />
              </div>
              <p className="text-xl lg:text-2xl text-blue-50 leading-relaxed font-bold opacity-90">
                Book a consultation with our licensed and verified healthcare professionals. Join thousands of patients who trust Citicare for their medical needs and ongoing wellness guidance.
              </p>
              <div className="flex flex-wrap gap-6 pt-4">
                <Button size="lg" className="bg-white text-blue-500 hover:bg-white/90 rounded-full px-12 h-20 text-xl font-black uppercase tracking-widest shadow-2xl transition-all hover:scale-105 active:scale-95 border-none">
                  Book Appointment
                </Button>
                <Link to="/contact" className="inline-flex items-center justify-center border-2 border-white/40 text-white hover:bg-white/10 rounded-full px-12 h-20 text-xl font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95">
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24">
          <div className="text-center mb-20 space-y-4">
            <span className="text-[#005FA3] font-black uppercase tracking-[0.4em] text-sm block">Kind Feedback</span>
            <h2 className="text-5xl lg:text-7xl font-black text-[#1e3a8a] leading-tight">
              Happy words from our patients
            </h2>
          </div>
          
          <StaggerTestimonials />
        </div>
      </section>

      {/* Locations (Image 7) with fixed image and cleaner layout */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
               <div className="space-y-4">
                 <span className="text-blue-500 font-black uppercase tracking-[0.4em] text-sm block">Our Reach</span>
                 <h2 className="text-5xl lg:text-[100px] font-black text-[#1e3a8a] leading-[0.9] tracking-tighter uppercase">
                    Where we <span className="text-blue-500 italic">provide</span> our services.
                 </h2>
               </div>
               <p className="text-xl text-[#5c5c5c] leading-relaxed font-bold opacity-80 max-w-xl">
                 A patient-centered digital healthcare platform committed to bridging the gap between individuals and quality healthcare services across Lagos.
               </p>
               <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                 {[
                   "Ikeja Area", "Victoria Island", "Lekki Area", "Ikoyi Area", 
                   "Surulere Area", "Festac Area", "Magodo Area", "Ajah Area", 
                   "Lagos Island", "Alimosho", "Gbagada", "Yaba"
                 ].map((area, i) => (
                   <div key={i} className="flex items-center gap-4 text-[#1e3a8a] font-black text-lg group">
                     <div className="h-3 w-3 bg-blue-500 rounded-full group-hover:scale-[2] transition-transform shadow-lg shadow-blue-500/40" />
                     <span className="group-hover:translate-x-2 transition-transform">{area}</span>
                   </div>
                 ))}
               </div>
            </div>
            <div className="relative">
               <div className="rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] h-[700px] bg-slate-200">
                 <img 
                   src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1400" 
                   alt="Citicare Medical Center" 
                   className="w-full h-full object-cover"
                 />
                 <div className="absolute inset-0 bg-blue-600/5 mix-blend-multiply" />
               </div>
               <div className="absolute -bottom-10 -left-10 -right-10 bg-white p-12 rounded-[4rem] shadow-2xl border border-slate-100 z-20">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-2 text-center md:text-left">
                      <div className="font-black text-[#1e3a8a] text-2xl uppercase tracking-tight">General Inquiries</div>
                      <div className="font-bold text-blue-500 text-lg">enquiries@citicarehealthltd.com</div>
                    </div>
                    <div className="h-16 w-16 bg-blue-500 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-500/20">
                      <Phone className="h-8 w-8" />
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA with Brighter Blue */}
      <section className="py-32 bg-blue-500 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-4xl mx-auto px-6 space-y-10 relative z-10">
          <h2 className="text-5xl lg:text-8xl font-black text-white leading-tight tracking-tighter uppercase">
            Ready to experience <br />quality healthcare?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Button size="lg" className="bg-white text-blue-500 hover:bg-white/90 rounded-full px-16 h-24 text-2xl font-black uppercase tracking-widest shadow-2xl transition-all hover:-translate-y-2 border-none">
               Book Now
            </Button>
            <Link to="/contact" className="inline-flex items-center justify-center border-2 border-white/40 text-white hover:bg-white/10 rounded-full px-16 h-24 text-2xl font-black uppercase tracking-widest shadow-2xl transition-all hover:-translate-y-2">
               Contact Agent
            </Link>
          </div>
          <div className="pt-16 flex items-center justify-center gap-6 text-white/40 font-black uppercase tracking-[0.5em] text-[10px]">
             <div className="h-[2px] w-20 bg-white/20" />
             CITICARE HEALTH SOLUTIONS
             <div className="h-[2px] w-20 bg-white/20" />
          </div>
        </div>
      </section>

    </div>
  );
}
