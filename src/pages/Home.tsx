import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Zap, ArrowRight, ShieldCheck, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { StaggerTestimonials } from '@/components/StaggerTestimonials';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000",
    subtitle: "Healthcare Reimagined",
    title: "Addressing your healthcare needs, Every Time",
    description: "A trusted digital healthcare platform delivering personalized medical services, expert consultations, and continuous follow up care tailored to meet your needs.",
  },
  {
    image: "https://www.image2url.com/r2/default/images/1779564983342-5f3d74fa-3758-44a4-af10-62c18c131dcd.png",
    subtitle: "Qualified Professionals",
    title: "Access to world class medical experts",
    description: "We connect you with licensed and verified healthcare professionals who are committed to your total wellbeing and long term health guidance.",
  },
  {
    image: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&q=80&w=2000",
    subtitle: "Continuous Care",
    title: "Healthcare that never ends at the door",
    description: "Our platform ensures continuous monitoring, personalized insights, and comprehensive health guidance even after your consultation.",
  },
];

interface AnimatedCounterProps {
  value: string;
}

function AnimatedCounter({ value }: AnimatedCounterProps) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1]) : 0;
  const suffix = match ? match[2] : "";

  const [count, setCount] = React.useState(0);
  const ref = React.useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!isInView || target === 0) return;
    let startTimestamp: number | null = null;
    const duration = 1500;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeProgress = progress * (2 - progress);
      setCount(Math.floor(easeProgress * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isInView, target]);

  if (target === 0) {
    return <span ref={ref}>{value}</span>;
  }

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [imagesLoaded, setImagesLoaded] = React.useState(false);
  const [toastMessage, setToastMessage] = React.useState<string | null>(null);

  React.useEffect(() => {
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
      {/* Hero Section */}
      <section className="relative w-full min-h-[600px] lg:min-h-[700px] bg-slate-50 overflow-hidden">
        <div className="max-w-[1440px] mx-auto min-h-[600px] lg:min-h-[700px] flex flex-col lg:flex-row relative">
          
          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2 min-h-[380px] lg:min-h-full flex items-center z-30 px-5 sm:px-6 lg:px-20 py-16 lg:py-24 bg-transparent animate-fade-in">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-xl"
              >
                <div className="space-y-6">
                  <span className="font-medium text-lg lg:text-xl text-blue-600 block">
                    {slides[currentSlide].subtitle}
                  </span>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#1e3a8a] leading-[1.1] tracking-tight text-balance">
                    {slides[currentSlide].title}
                  </h1>
                  <p className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-md">
                    {slides[currentSlide].description}
                  </p>
                  <div className="pt-4 relative z-30">
                    <Link 
                      to="/services" 
                      className="inline-flex items-center gap-4 bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white pl-2 pr-6 py-2 rounded-full font-semibold text-sm transition-all shadow-lg shadow-blue-900/20 group"
                    >
                      <div className="h-10 w-10 flex items-center justify-center bg-white/15 rounded-full group-hover:bg-white/25 transition-colors">
                        <Zap className="h-5 w-5" />
                      </div>
                      View All Services
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Side: Image Slider */}
          <div className="relative lg:absolute lg:right-0 lg:top-0 w-full lg:w-1/2 h-[350px] sm:h-[480px] lg:h-full z-10 mt-6 lg:mt-0 px-5 sm:px-6 lg:px-0">
            {/* Diagonal overlay for desktop */}
            <div className="absolute inset-0 z-20 hidden lg:block">
              <div className="h-full w-full bg-slate-50 [clip-path:polygon(0_0,20%_0,0_100%,0_100%)]" />
            </div>

            <div className="h-full w-full relative overflow-hidden bg-slate-100 rounded-2xl lg:rounded-none shadow-lg lg:shadow-none">
              {!imagesLoaded && (
                <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center">
                  <div className="w-10 h-10 border-3 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
                </div>
              )}
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: imagesLoaded ? 1 : 0.5, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <img 
                    src={slides[currentSlide].image} 
                    alt="Healthcare Professional" 
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent lg:hidden" />
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Dots UI */}
            <div className="absolute bottom-8 right-12 lg:right-8 z-30 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-500",
                    currentSlide === index 
                      ? "bg-white w-8" 
                      : "bg-white/40 w-2 hover:bg-white/60"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Performance Stats Section */}
      <section className="bg-white border-y border-slate-100 py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20">
          <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16 space-y-4">
            <span className="text-blue-600 font-semibold uppercase tracking-wider text-xs">Our Standard of Excellence</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a] leading-tight">
              Improving lives through quality care
            </h2>
            <p className="text-slate-600 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
              Delivering clinical excellence, professional medical insights, and specialized home healthcare services designed around your needs.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {[
              { value: "98%", label: "Client Satisfaction" },
              { value: "25+", label: "Licensed Providers" },
              { value: "10+", label: "Medical Specialties" },
              { value: "5+", label: "Clinic Partners" },
              { value: "200+", label: "In-Home Recoveries" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={cn(
                  "text-center",
                  idx === 4 && "col-span-2 lg:col-span-1"
                )}
              >
                <span className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e3a8a] block mb-2">
                  <AnimatedCounter value={stat.value} />
                </span>
                <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20">
          <div className="text-center mb-12 lg:mb-16 space-y-4">
            <span className="text-blue-600 font-semibold uppercase tracking-wider text-xs">Professional Care</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a] leading-tight">
              Our Healthcare Service Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: "Online Medical Consultations",
                image: "https://www.image2url.com/r2/default/images/1779889907424-b02c4a99-b324-4cef-8cac-7eedd561a33a.jpg",
                desc: "Access qualified doctors from the comfort of your home. Get accurate diagnoses, prescriptions, and professional advice.",
                buttonText: "Book Now",
                color: "bg-blue-50 hover:bg-blue-100",
                buttonColor: "bg-blue-600 hover:bg-blue-700",
                link: "/book"
              },
              {
                title: "Home Healthcare Services",
                image: "https://www.image2url.com/r2/default/images/1778861274282-fc3009b9-31a4-401b-b0a6-38c7a85c2cbb.png",
                desc: "We bring professional care to your doorstep, including medical consultations, psychiatric services, and nursing care.",
                buttonText: "Learn More",
                color: "bg-emerald-50 hover:bg-emerald-100",
                buttonColor: "bg-emerald-600 hover:bg-emerald-700",
                link: "/home-healthcare"
              },
              {
                title: "Specialist Consultation",
                image: "https://www.image2url.com/r2/default/images/1779564983342-5f3d74fa-3758-44a4-af10-62c18c131dcd.png",
                desc: "Direct access to experts in Cardiology, OB/GYN, Surgery, Orthopedics, Mental Health, and more specialty areas.",
                buttonText: "View Specialties",
                color: "bg-amber-50 hover:bg-amber-100",
                buttonColor: "bg-amber-600 hover:bg-amber-700",
                link: "/specialist-care"
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "flex flex-col rounded-2xl lg:rounded-3xl overflow-hidden transition-all duration-300 group",
                  service.color
                )}
              >
                <div className="h-56 lg:h-64 overflow-hidden relative">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>
                <div className="p-6 lg:p-8 flex flex-col flex-grow">
                  <h3 className="text-xl lg:text-2xl font-bold text-[#1e3a8a] mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                    {service.desc}
                  </p>
                  <Button 
                    nativeButton={false} 
                    render={<Link to={service.link} />} 
                    className={cn(
                      "w-full text-white rounded-xl h-12 font-semibold text-sm transition-colors",
                      service.buttonColor
                    )}
                  >
                    {service.buttonText}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Homecare Intro */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <span className="text-blue-600 font-semibold uppercase tracking-wider text-xs">A New Era of Healthcare</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a] leading-tight">
                  Bridging the gap between individuals and quality care
                </h2>
              </div>
              <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
                Citicare is a patient centered digital healthcare platform committed to connecting you with the right professionals. We ensure that care does not end after consultation through continuous follow up and personalized insights.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  "Register & Connect",
                  "Professional Matching",
                  "Continuous Follow Up",
                  "Personalized Guidance"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-blue-600 rounded-full" />
                    <span className="font-medium text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <Button 
                nativeButton={false} 
                render={<Link to="/about" />} 
                size="lg" 
                className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white rounded-xl px-8 h-14 text-sm font-semibold"
              >
                Learn About Citicare
              </Button>
            </div>
            <div className="flex-1 w-full">
              <div className="relative">
                <div className="rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50">
                  <img 
                    src="https://www.image2url.com/r2/default/images/1778861274282-fc3009b9-31a4-401b-b0a6-38c7a85c2cbb.png" 
                    alt="Elderly Care" 
                    className="w-full h-[300px] lg:h-[500px] object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-4 lg:-right-6 bg-[#1e3a8a] text-white p-6 lg:p-8 rounded-2xl shadow-xl hidden sm:block">
                  <div className="text-3xl lg:text-4xl font-bold mb-1">10+</div>
                  <div className="text-white/70 text-xs font-medium uppercase tracking-wider">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Section */}
      <section className="py-16 lg:py-24 bg-[#1e3a8a] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -mr-48 -mt-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-[100px] -ml-48 -mb-48" />
        
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 order-2 lg:order-1">
              <div className="relative">
                <div className="relative z-10 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://www.image2url.com/r2/default/images/1779564983342-5f3d74fa-3758-44a4-af10-62c18c131dcd.png" 
                    alt="Digital Healthcare Consultation" 
                    className="w-full h-[300px] lg:h-[450px] object-cover"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex-1 space-y-6 lg:space-y-8 text-white order-1 lg:order-2">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                  Ready to take control of your health today?
                </h2>
                <div className="h-1 w-20 bg-white/30 rounded-full" />
              </div>
              <p className="text-base lg:text-lg text-white/80 leading-relaxed">
                Book a consultation with our licensed and verified healthcare professionals. Join thousands of patients who trust Citicare for their medical needs and ongoing wellness guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button 
                  nativeButton={false} 
                  render={<Link to="/book" />} 
                  size="lg" 
                  className="bg-white text-[#1e3a8a] hover:bg-white/90 rounded-xl px-8 h-14 font-semibold shadow-lg"
                >
                  Book Appointment
                </Button>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center border-2 border-white/30 text-white hover:bg-white/10 rounded-xl px-8 h-14 font-semibold transition-colors"
                >
                  General Inquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20">
          <div className="text-center mb-12 lg:mb-16 space-y-4">
            <span className="text-blue-600 font-semibold uppercase tracking-wider text-xs">Kind Feedback</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a] leading-tight">
              Happy words from our patients
            </h2>
          </div>
          
          <StaggerTestimonials />
        </div>
      </section>

      {/* Locations */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <span className="text-blue-600 font-semibold uppercase tracking-wider text-xs">Our Reach</span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1e3a8a] leading-tight">
                  Where we provide our services
                </h2>
              </div>
              <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
                A patient-centered digital healthcare platform committed to bridging the gap between individuals and quality healthcare services across Lagos.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Ikeja Area", "Victoria Island", "Lagos Main", "Ikoyi Area", 
                  "Surulere Area", "Festac Area", "Magodo Area", "Ajah Area", 
                  "Lagos Island", "Alimosho", "Gbagada", "Yaba", "And many more..."
                ].map((area, i) => {
                  const isManyMore = area === "And many more...";
                  return (
                    <div 
                      key={i} 
                      className={cn(
                        "flex items-center gap-3 font-medium text-sm",
                        isManyMore ? "text-emerald-600" : "text-slate-700"
                      )}
                    >
                      <div className={cn(
                        "h-2 w-2 rounded-full",
                        isManyMore ? "bg-emerald-500" : "bg-blue-500"
                      )} />
                      <span className={isManyMore ? "italic" : ""}>{area}</span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="relative w-full">
              <div className="rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 h-[300px] sm:h-[400px] lg:h-[500px]">
                <img 
                  src="https://www.image2url.com/r2/default/images/1778863421981-11b203cd-3516-4af1-b896-2e0174ce5418.png" 
                  alt="Citicare Medical Center" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-6 lg:mt-0 lg:absolute lg:-bottom-6 lg:left-6 lg:right-6 bg-white p-6 lg:p-8 rounded-2xl shadow-xl">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <div className="font-bold text-[#1e3a8a] text-lg">General Inquiries</div>
                    <div className="text-blue-600 text-sm">enquiries@citicarehealth.com</div>
                  </div>
                  <div className="h-12 w-12 bg-[#1e3a8a] rounded-xl flex items-center justify-center text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20 relative z-10">
          <div className="w-full bg-gradient-to-br from-[#1e3a8a] to-[#0f172a] rounded-3xl p-10 md:p-16 lg:p-20 shadow-2xl shadow-blue-950/15 border border-white/10 text-center relative overflow-hidden">
            {/* Ambient background decoration */}
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none select-none animate-pulse" />
            <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none select-none" />
            
            <div className="max-w-2xl mx-auto space-y-6 md:space-y-8 relative z-10 text-white">
              <span className="inline-flex items-center gap-1.5 bg-white/10 px-4 py-1.5 rounded-full text-emerald-400 font-bold text-[10px] uppercase tracking-widest select-none">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Get Started Today
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
                Ready to experience quality healthcare?
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-white/80 max-w-lg mx-auto leading-relaxed font-medium">
                Connect with our certified medical professionals and take control of your health.
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4">
                <Link 
                  to="/book" 
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-[#1e3a8a] hover:bg-slate-50 rounded-xl px-10 h-14 text-base font-semibold shadow-lg transition-all"
                >
                  Book Now
                </Link>
                <Link 
                  to="/contact" 
                  className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-white/30 text-white hover:bg-white/10 rounded-xl px-10 h-14 text-base font-semibold transition-colors"
                >
                  Contact Us Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Toast */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 max-w-sm bg-slate-900 text-white p-5 rounded-2xl shadow-2xl border border-slate-800 flex items-start gap-4"
          >
            <div className="h-10 w-10 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center shrink-0">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-xs uppercase tracking-wider text-blue-400">System Alert</p>
              <p className="text-sm text-slate-300">{toastMessage}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
