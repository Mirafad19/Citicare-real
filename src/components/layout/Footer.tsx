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
            <div className="space-y-3.5">
              {/* Phone option */}
              <a 
                href="tel:+2348119868201" 
                className="flex items-center gap-3 text-white hover:text-emerald-400 transition-colors group w-max"
              >
                <div className="h-10 w-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="text-lg font-bold">+234 811 986 8201</span>
              </a>

              {/* WhatsApp option */}
              <a 
                href="https://wa.me/2348119868201" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-white hover:text-[#25D366] transition-colors group w-max"
              >
                <div className="h-10 w-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center group-hover:bg-[#25D366]/20 transition-all">
                  <svg 
                    viewBox="0 0 24 24" 
                    className="h-5 w-5 text-[#25D366]" 
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.35-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.8 1.006 3.85 1.536 5.918 1.537h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <span className="text-base font-semibold">Chat on WhatsApp</span>
              </a>
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
                { name: "Patient Support Desk", href: "/faq" },
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
