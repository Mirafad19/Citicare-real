import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin, ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
<footer className="bg-[#0F172A] pt-28 pb-12 text-[#94A3B8] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
        <ShieldCheck className="absolute -bottom-20 -left-20 w-[60rem] h-[60rem]" />
      </div>

      <div className="container mx-auto px-6 lg:px-24 relative z-10">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-8">
            <Link to="/" className="block">
              <div className="bg-white p-6 rounded-2xl inline-block shadow-lg border border-white/10">
                <img 
                  src="https://www.image2url.com/r2/default/images/1778793792491-b1b6686e-ac45-4d5b-b39c-d970f1d5d1da.png" 
                  alt="Citicare Logo" 
                  className="h-16 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
            </Link>
            <div className="space-y-4">
              <h3 className="text-white text-xl font-bold font-sans">Citicare Integrated Health Solutions Ltd</h3>
              <p className="text-sm leading-relaxed font-medium">
                Citicare is a patient-centered digital healthcare platform committed to bridging the gap between individuals and quality healthcare services.
              </p>
              <p className="text-[10px] italic text-blue-400/80 leading-relaxed uppercase tracking-wider">Serving healthcare needs with integrity, professionalism, and care.</p>
              <Link to="/about" className="text-primary hover:underline text-sm font-bold flex items-center gap-2">
                Learn more... <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Important Links */}
          <div className="space-y-8 lg:pl-10">
            <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-white/50">Important Links</h3>
            <ul className="space-y-5 text-sm font-semibold">
              <li><Link to="/services" className="hover:text-primary transition-all">Online Consultations</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-all">Home Healthcare</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-all">Specialist Care</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-all">Our Mission</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-all">Support/FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-all">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="space-y-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-white/50">Contact Us</h3>
            <div className="space-y-8 text-sm font-semibold">
              <div className="space-y-3">
                <span className="text-primary text-[10px] uppercase tracking-[0.2em] font-black">Location</span>
                <p className="leading-relaxed text-white">Lagos State, Nigeria.<br />Serving all major residential areas.</p>
              </div>
              
              <div className="space-y-3">
                <span className="text-secondary text-[10px] uppercase tracking-[0.2em] font-black">Enquiries</span>
                <p className="text-white hover:text-primary transition-colors cursor-pointer">enquiries@citicarehealthltd.com</p>
                <p className="text-white hover:text-primary transition-colors cursor-pointer">+234 XXX XXX XXXX</p>
              </div>
            </div>
          </div>

          {/* Social / Connect */}
          <div className="space-y-8">
            <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-white/50">Connect!</h3>
            <p className="text-sm font-medium leading-relaxed">Join our community and get updates on the latest healthcare insights and wellness tips.</p>
            <div className="flex gap-4">
               {[Facebook, Linkedin, Instagram].map((Icon, i) => (
                 <a key={i} href="#" className="h-14 w-14 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-[#005FA3] hover:text-white transition-all duration-300 border border-white/5">
                    <Icon className="h-6 w-6" />
                 </a>
               ))}
            </div>
          </div>
        </div>

        <div className="mt-28 border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.3em] font-black">
          <p>© 2024 Citicare Integrated Health Solutions Ltd. All rights reserved.</p>
          <div className="flex gap-10">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
