import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin, Twitter, ArrowRight, ChevronUp } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1e3a8a] text-white overflow-hidden">
      {/* Top Bar: Logo & Socials */}
      <div className="border-b border-white/10">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 px-5 sm:px-6 lg:px-20 py-8">
          <Link to="/" className="flex items-center shrink-0 group">
            <div className="bg-white rounded-2xl px-6 py-3 flex items-center justify-center">
              <img 
                src="https://www.image2url.com/r2/default/images/1778793792491-b1b6686e-ac45-4d5b-b39c-d970f1d5d1da.png" 
                alt="Citicare Logo" 
                className="h-10 lg:h-12 w-auto object-contain transition-transform group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </Link>
          <div className="flex gap-3">
            {[
              { Icon: Facebook, href: "#" },
              { Icon: Instagram, href: "#" },
              { Icon: Twitter, href: "#" },
              { Icon: Linkedin, href: "#" }
            ].map(({ Icon, href }, i) => (
              <a 
                key={i} 
                href={href} 
                className="h-11 w-11 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#1e3a8a] transition-all"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* About Us */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/60">About Us</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Citicare provides comprehensive medical and healthcare services, ensuring maximum comfort and convenience for our clients. We deliver quality care wherever you are.
            </p>
            <div className="flex items-center gap-3 text-white">
              <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center">
                <Phone className="h-5 w-5" />
              </div>
              <span className="text-lg font-bold">+234 811 111 1111</span>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/60">Services</h3>
            <ul className="space-y-3">
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
                    className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm"
                  >
                    <ArrowRight className="h-4 w-4 text-blue-400 group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Expertise */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/60">Our Expertise</h3>
            <ul className="space-y-3">
              {[
                { name: "Critical Nursing Support", href: "/specialist-care" },
                { name: "Geriatric Care Specialists", href: "/home-healthcare" },
                { name: "Advanced Telemedicine", href: "/services" },
                { name: "Corporate Health Plans", href: "/about" },
                { name: "Health Tech Integration", href: "/about" }
              ].map((item, i) => (
                <li key={i}>
                  <Link 
                    to={item.href} 
                    className="flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm group"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 group-hover:scale-150 transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Global */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/60">Contact</h3>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <MapPin className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-white/80 text-sm">Lagos, Nigeria</p>
              </div>
              <div className="flex gap-3 items-start">
                <Mail className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <p className="text-white/80 text-sm break-all">enquiries@citicarehealth.com</p>
              </div>
            </div>
            
            <div className="bg-white/5 p-5 rounded-2xl border border-white/10 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">Newsletter</p>
              <div className="flex gap-2 items-center">
                <input 
                  type="email" 
                  placeholder="Enter email" 
                  className="bg-transparent border-b border-white/20 pb-2 text-sm focus:outline-none focus:border-white/50 w-full placeholder:text-white/40 transition-colors" 
                />
                <button className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer Area */}
      <div className="bg-[#162d6b] py-6 border-t border-white/10">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-xs">
            2026 Citicare. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-white/60 hover:text-white transition-colors text-xs">Privacy Policy</Link>
            <Link to="/terms" className="text-white/60 hover:text-white transition-colors text-xs">Terms of Service</Link>
          </div>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="h-11 w-11 bg-white text-[#1e3a8a] rounded-xl flex items-center justify-center hover:bg-blue-50 transition-colors shadow-lg"
            aria-label="Back to top"
          >
            <ChevronUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
