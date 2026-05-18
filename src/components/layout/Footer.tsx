import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin, ShieldCheck, ArrowRight, ChevronRight, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-[#2E5AAB] text-white overflow-hidden">
      {/* Top Bar: Logo & Socials */}
      <div className="bg-[#2B529E] border-b border-white/5">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <Link to="/" className="relative flex items-center shrink-0 group">
             <div className="bg-white h-32 md:h-44 px-12 md:px-24 flex items-center justify-center [clip-path:polygon(0_0,100%_0,90%_100%,0%_100%)]">
                <img 
                  src="https://www.image2url.com/r2/default/images/1778793792491-b1b6686e-ac45-4d5b-b39c-d970f1d5d1da.png" 
                  alt="Citicare Logo" 
                  className="h-20 md:h-28 w-auto object-contain transition-transform group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
             </div>
          </Link>
          <div className="flex gap-4 pr-6 lg:pr-24">
             {[Instagram, Instagram, Twitter, Linkedin].map((Icon, i) => (
               <a 
                 key={i} 
                 href="#" 
                 className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all text-white/50 hover:text-white group"
               >
                  <Icon className="h-5 w-5 md:h-6 md:w-6 transition-transform group-hover:scale-110" />
               </a>
             ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-24 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          
          {/* About Us */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black uppercase tracking-tight">About Us</h3>
            <p className="text-slate-300 text-lg leading-relaxed font-medium">
              Citicare provides comprehensive medical and healthcare services, ensuring maximum comfort and convenience for our clients. We deliver quality care wherever you are.
            </p>
            <div className="flex items-center gap-4 text-blue-300">
              <Phone className="h-8 w-8" />
              <span className="text-2xl font-black">+234 811 111 1111</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black uppercase tracking-tight">Services</h3>
            <ul className="space-y-4">
              {[
                { name: 'Online Consultation', href: '/services' },
                { name: 'Mother & Baby Care', href: '/services' },
                { name: 'Elderly Care', href: '/services' },
                { name: 'Skilled Nursing', href: '/services' },
                { name: 'Psychiatric Care', href: '/services' },
                { name: 'Specialist Consultations', href: '/services' },
              ].map((link, i) => (
                <li key={i}>
                  <Link 
                    to={link.href} 
                    className="group flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors font-bold text-lg"
                  >
                    <ArrowRight className="h-5 w-5 text-blue-500 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Expertise */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black uppercase tracking-tight">Our Expertise</h3>
            <ul className="space-y-4">
              {[
                "Critical Nursing Support",
                "Geriatric Care Specialists",
                "Advanced Telemedicine",
                "Corporate Health Plans",
                "Health Tech Integration"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 font-bold group">
                  <ChevronRight className="h-4 w-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="pt-6">
              <Button nativeButton={false} render={<Link to="/brochure" />} variant="outline" className="border-white/20 text-white hover:bg-white hover:text-blue-600 rounded-full font-black uppercase tracking-widest text-xs h-12 w-full">
                Corporate Brochure
              </Button>
            </div>
          </div>

          {/* Contact & Global */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black uppercase tracking-tight">Global Support</h3>
            <div className="space-y-6">
               <div className="flex gap-4">
                  <MapPin className="h-6 w-6 text-emerald-400 shrink-0" />
                  <p className="text-slate-300 font-bold leading-relaxed">
                    Lagos State, Nigeria.<br />
                    Serving VI, Lekki, and Ikeja.
                  </p>
               </div>
               <div className="flex gap-4">
                  <Mail className="h-6 w-6 text-emerald-400 shrink-0" />
                  <p className="text-slate-300 font-bold">enquiries@citicarehealthltd.com</p>
               </div>
               <div className="bg-white/5 p-6 rounded-3xl border border-white/10 space-y-3">
                  <p className="text-xs font-black uppercase tracking-widest text-emerald-400">Newsletter</p>
                  <div className="flex gap-2">
                    <input type="text" placeholder="Email Address" className="bg-transparent border-b border-white/20 pb-2 text-sm focus:outline-none w-full" />
                    <ArrowRight className="h-5 w-5 text-white/50" />
                  </div>
               </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer Area */}
      <div className="bg-[#244A8F] py-8 border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-blue-100/50 font-black uppercase tracking-widest text-xs">
            © 2026 Citicare. All rights reserved.
          </p>
          <div className="flex gap-10">
            <Link to="/privacy" className="text-slate-500 hover:text-white transition-colors text-xs font-black uppercase tracking-widest">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-500 hover:text-white transition-colors text-xs font-black uppercase tracking-widest">Terms of Service</Link>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="h-14 w-14 bg-white text-blue-600 rounded-2xl flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-xl shadow-blue-500/20"
          >
            <ChevronRight className="h-8 w-8 -rotate-90" />
          </button>
        </div>
      </div>
    </footer>
  );
}
