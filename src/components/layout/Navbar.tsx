import React from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, ChevronRight, ChevronDown, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { TopBar } from './TopBar';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Our Services', href: '/services' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Career', href: '/career' },
  { name: 'Contact', href: '/contact' },
];

const nursingServices = [
  "On-Site Nursing",
  "Baby Nursing",
  "Specialty Care",
  "24-Hour Care",
  "Cosmetic Surgery Care",
  "Hospice Care",
  "Home Care",
  "Hotel Care",
  "Travel Nurses",
  "Post Op Care",
  "Senior Care",
  "Health Seminars"
];

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isMobileNursingOpen, setIsMobileNursingOpen] = React.useState(false);

  return (
    <div className="w-full flex flex-col">
      <TopBar />
      <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-100">
        <div className="max-w-[1440px] mx-auto flex h-20 lg:h-24 items-center justify-between px-5 sm:px-6 lg:px-20">
          {/* Logo Area */}
          <a href="/" className="flex items-center gap-3 shrink-0">
            <div className="h-14 lg:h-18 w-auto flex items-center justify-start overflow-hidden">
              <img 
                src="https://www.image2url.com/r2/default/images/1778793792491-b1b6686e-ac45-4d5b-b39c-d970f1d5d1da.png" 
                alt="Citicare Logo" 
                className="h-full w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Home link */}
            <a
              href="/"
              className={cn(
                "px-4 py-2 text-sm font-semibold transition-colors rounded-full",
                location.pathname === "/" 
                  ? "text-white bg-[#1e3a8a]" 
                  : "text-slate-600 hover:text-[#1e3a8a] hover:bg-slate-50"
              )}
            >
              Home
            </a>

            {/* Nursing Services Dropdown */}
            <div className="relative group py-2">
              <button 
                className={cn(
                  "flex items-center gap-1.5 px-4 py-2 text-sm font-semibold transition-colors rounded-full text-slate-600 hover:text-[#1e3a8a] hover:bg-slate-50 select-none cursor-pointer"
                )}
              >
                Nursing Services
                <ChevronDown className="h-4 w-4 text-slate-400 group-hover:text-[#1e3a8a] transition-colors shrink-0" />
              </button>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 hidden group-hover:block w-72 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden z-50">
                <div className="flex flex-col">
                  {nursingServices.map((service) => (
                    <a
                      key={service}
                      href={`/book?nursingService=${encodeURIComponent(service)}`}
                      className="px-5 py-3 text-sm text-slate-800 hover:text-white hover:bg-[#1e3a8a] transition-colors border-b border-slate-100 last:border-b-0 text-left font-medium"
                    >
                      {service}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Other links */}
            {navLinks.slice(1).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-semibold transition-colors rounded-full",
                  location.pathname === link.href 
                    ? "text-white bg-[#1e3a8a]" 
                    : "text-slate-600 hover:text-[#1e3a8a] hover:bg-slate-50"
                )}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="/book" 
              className="hidden md:flex items-center gap-3 bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white pl-2 pr-6 py-2 rounded-full font-semibold text-sm transition-all shadow-lg shadow-blue-900/10 group"
            >
              <div className="h-9 w-9 flex items-center justify-center bg-white/15 rounded-full group-hover:bg-white/25 transition-colors">
                <ChevronRight className="h-5 w-5" />
              </div>
              Book Now
            </a>

            {/* Mobile Menu Trigger */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger render={
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="lg:hidden rounded-full h-11 w-11 hover:bg-slate-100 text-slate-700" 
                />
              }>
                <Menu className="h-6 w-6" />
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:max-w-sm border-l border-slate-100 bg-white p-0">
                <div className="flex flex-col h-full">
                  <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                    <img 
                      src="https://www.image2url.com/r2/default/images/1778793792491-b1b6686e-ac45-4d5b-b39c-d970f1d5d1da.png" 
                      alt="Citicare Logo" 
                      className="h-10 w-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <nav className="flex-grow flex flex-col p-6 gap-1 overflow-y-auto">
                    {/* Mobile Home */}
                    <a
                      href="/"
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center justify-between py-4 px-4 text-lg font-semibold transition-all rounded-2xl",
                        location.pathname === "/" 
                          ? "text-white bg-[#1e3a8a]" 
                          : "text-slate-700 hover:bg-slate-50"
                      )}
                    >
                      Home
                      <ChevronRight className={cn(
                        "h-5 w-5",
                        location.pathname === "/" ? "text-white/60" : "text-slate-300"
                      )} />
                    </a>

                    {/* Mobile Nursing Services Dropdown (Accordion) */}
                    <div className="flex flex-col">
                      <button
                        onClick={() => setIsMobileNursingOpen(!isMobileNursingOpen)}
                        className="flex items-center justify-between py-4 px-4 text-lg font-semibold transition-all rounded-2xl text-slate-700 hover:bg-slate-50 select-none cursor-pointer text-left w-full"
                      >
                        <span>Nursing Services</span>
                        <ChevronDown className={cn(
                          "h-5 w-5 transition-transform duration-200",
                          isMobileNursingOpen ? "rotate-180" : ""
                        )} />
                      </button>
                      
                      {isMobileNursingOpen && (
                        <div className="pl-6 pr-4 py-2 flex flex-col gap-2.5 border-l-2 border-[#1e3a8a]/20 ml-4">
                          {nursingServices.map((service) => (
                            <a
                              key={service}
                              href={`/book?nursingService=${encodeURIComponent(service)}`}
                              onClick={() => {
                                setIsMobileNursingOpen(false);
                                setIsOpen(false);
                              }}
                              className="py-2.5 text-base font-medium text-slate-600 hover:text-[#1e3a8a] transition-colors"
                            >
                              {service || ''}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Rest of links */}
                    {navLinks.slice(1).map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "flex items-center justify-between py-4 px-4 text-lg font-semibold transition-all rounded-2xl",
                          location.pathname === link.href 
                            ? "text-white bg-[#1e3a8a]" 
                            : "text-slate-700 hover:bg-slate-50"
                        )}
                      >
                        {link.name}
                        <ChevronRight className={cn(
                          "h-5 w-5",
                          location.pathname === link.href ? "text-white/60" : "text-slate-300"
                        )} />
                      </a>
                    ))}
                  </nav>
                  <div className="p-6 border-t border-slate-100">
                    <a 
                      href="/book" 
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center gap-3 bg-[#1e3a8a] text-white py-4 rounded-2xl font-semibold text-base shadow-lg"
                    >
                      Book Consultation
                    </a>
                    <a 
                      href="/contact" 
                      onClick={() => setIsOpen(false)}
                      className="mt-3 flex items-center justify-center gap-3 bg-slate-100 text-slate-700 py-4 rounded-2xl font-semibold text-base"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </div>
  );
}
