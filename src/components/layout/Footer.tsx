import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, Instagram, Facebook, Linkedin, ShieldCheck, ArrowRight, ChevronRight, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white overflow-hidden">
      {/* Top Bar: Logo & Socials */}
      <div className="">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24 h-40 flex flex-col md:flex-row items-center justify-between gap-8 py-8 md:py-0">
          <Link to="/" className="flex items-center gap-3 shrink-0">
             <div className="h-24 w-auto flex items-center justify-start overflow-hidden">
                <img 
                  src="https://www.image2url.com/r2/default/images/1778793792491-b1b6686e-ac45-4d5b-b39c-d970f1d5d1da.png" 
                  alt="Citicare Logo" 
                  className="h-full w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
             </div>
          </Link>
          <div className="flex gap-4">
             {[Instagram, Twitter, Facebook, Linkedin].map((Icon, i) => (
               <a 
                 key={i} 
                 href="#" 
                 className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all text-white/70 hover:text-white"
               >
                  <Icon className="h-5 w-5" />
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
            <p className="text-slate-400 text-lg leading-relaxed font-medium">
              Citicare Integrated Health Solutions (HCC) provides comprehensive and professional medical and health care services, ensuring maximum comfort and privacy for our customers, whether they are in companies, hotels, homes or anywhere else inside or outside the country.
            </p>
            <div className="flex items-center gap-4 text-blue-400">
              <Phone className="h-8 w-8" />
              <span className="text-2xl font-black">+234 XXX XXX XXXX</span>
            </div>
            <div className="pt-4">
               <img 
                 src="https://www.image2url.com/r2/default/images/1778747658631-1c6d2430-b64c-467f-84ca-29aef402e5ea.png" 
                 alt="ISO Certified" 
                 className="h-14 w-auto object-contain brightness-0 invert opacity-50"
               />
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
                { name: 'General Enquiries', href: '/contact' },
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

          {/* Gallery */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black uppercase tracking-tight">Gallery</h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                "https://images.unsplash.com/photo-1559839734-2b71f1e3b778?auto=format&fit=crop&q=80&w=300",
                "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?auto=format&fit=crop&q=80&w=300",
                "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=300",
                "https://images.unsplash.com/photo-1516733725897-1aa73b87c8e8?auto=format&fit=crop&q=80&w=300",
                "https://images.unsplash.com/photo-1532708059644-5530bd51c778?auto=format&fit=crop&q=80&w=300",
                "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=300"
              ].map((img, i) => (
                <div key={i} className="aspect-square rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                  <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Location Map */}
          <div className="space-y-8">
            <h3 className="text-2xl font-black uppercase tracking-tight">Location Map</h3>
            <div className="rounded-3xl overflow-hidden shadow-2xl relative group h-48 border border-white/10">
               <img 
                 src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=600" 
                 alt="Location Map Placeholder" 
                 className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
               />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold text-sm shadow-xl">Open In Maps</div>
               </div>
            </div>
            <div className="flex gap-4">
               <MapPin className="h-10 w-10 text-blue-500 shrink-0 mt-1" />
               <p className="text-slate-400 font-bold leading-relaxed">
                 Lagos State, Nigeria.<br />
                 Serving all major residential areas including VI, Lekki, and Ikeja.
               </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer Area */}
      <div className="bg-[#0b111f] py-8 border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 font-black uppercase tracking-widest text-xs">
            © 2024 Citicare Integrated Health Solutions Ltd. All rights reserved.
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
