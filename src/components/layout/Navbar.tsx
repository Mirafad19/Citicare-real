import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Phone, Mail, MapPin, ChevronRight, ArrowRight, Instagram, Twitter, Linkedin, Facebook, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Services', href: '/services' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Certification', href: '/certification' },
  { name: 'Career', href: '/career' },
  { name: 'Contact', href: '/contact' },
];

import { TopBar } from './TopBar';

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="w-full flex flex-col">
      <TopBar />
      <header className="sticky top-0 z-50 w-full bg-[#F1F5F9] shadow-sm px-6 lg:px-24">
        <div className="max-w-[1440px] mx-auto flex h-28 items-center justify-between">
          {/* Logo Area */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
             <div className="h-20 md:h-24 w-auto flex items-center justify-start overflow-hidden">
                <img 
                  src="https://www.image2url.com/r2/default/images/1778793792491-b1b6686e-ac45-4d5b-b39c-d970f1d5d1da.png" 
                  alt="Citicare Logo" 
                  className="h-full w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
             </div>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "text-[15px] font-sans font-bold transition-all hover:text-primary relative group",
                  location.pathname === link.href ? "text-primary" : "text-[#1e3a8a]"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>


          <div className="flex items-center gap-10">
            <div className="hidden lg:block h-10 w-[2px] bg-slate-200"></div>
            
            <Link 
              to="/contact" 
              className="hidden md:flex items-center gap-6 bg-[#2563EB] hover:bg-[#1d4ed8] text-white pl-2 pr-10 py-2 rounded-full font-sans font-bold text-lg tracking-wide transition-all shadow-xl shadow-blue-500/20 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <div className="h-12 w-12 flex items-center justify-center bg-white/20 rounded-full group-hover:bg-white/40 transition-all">
                <ChevronRight className="h-7 w-7" />
              </div>
              Enquiry
            </Link>


            {/* Mobile Menu Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger render={<Button variant="ghost" size="icon" className="lg:hidden rounded-full hover:bg-slate-100 text-[#1A1A1A]" />}>
              <Menu className="h-7 w-7" />
            </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-md border-l border-border bg-white p-0">
                <div className="flex flex-col h-full">
                  <div className="p-8 bg-white">
                  <img 
                    src="https://www.image2url.com/r2/default/images/1778793792491-b1b6686e-ac45-4d5b-b39c-d970f1d5d1da.png" 
                    alt="Citicare Logo" 
                    className="h-10 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                  </div>
                  <nav className="flex-grow flex flex-col p-8 gap-4 overflow-y-auto">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center justify-between py-4 text-2xl font-serif transition-all",
                          location.pathname === link.href ? "text-primary pl-4 border-l-4 border-primary" : "text-[#5C5C5C]"
                        )}
                      >
                        {link.name}
                        <ChevronRight className="h-6 w-6 opacity-40" />
                      </Link>
                    ))}
                    <Link 
                      to="/contact" 
                      onClick={() => setIsOpen(false)}
                      className="mt-8 flex items-center justify-center gap-4 bg-[#3B82F6] text-white py-5 rounded-3xl font-sans font-bold text-lg shadow-2xl shadow-blue-500/20"
                    >
                      Process Enquiry
                    </Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
}
