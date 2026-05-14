import React from 'react';
import { Home, Search, Facebook, Instagram, Linkedin, Twitter, FileText, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export function TopBar() {
  return (
    <div className="w-full bg-[#005FA3] text-white">
      <div className="max-w-[1440px] mx-auto flex h-14 items-center justify-between px-6 lg:px-24 text-[13px] font-bold tracking-wider">
        {/* Left Side */}
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Home className="h-5 w-5 fill-white" />
            <span className="uppercase">Citicare Integrated Health</span>
          </Link>
          
          <div className="hidden md:flex items-center bg-[#004d80] rounded-full px-4 py-1.5 gap-2 border border-white/20">
            <input 
              type="text" 
              placeholder="SEARCH SITE..." 
              className="bg-transparent border-none focus:outline-none placeholder:text-white/60 text-white w-40"
            />
            <Search className="h-4 w-4 text-white/80" />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-4 mr-6 border-r border-white/20 pr-6 py-1">
            <a href="#" className="hover:text-blue-200 transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="hover:text-pink-200 transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="hover:text-blue-300 transition-colors"><Linkedin className="h-5 w-5" /></a>
            <a href="#" className="hover:text-sky-200 transition-colors"><Twitter className="h-5 w-5" /></a>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-2 hover:text-white/80 transition-colors uppercase">
              <FileText className="h-5 w-5" />
              <span>Download Our Brochure</span>
            </a>
            <div className="h-8 w-[1px] bg-white/20"></div>
            <a href="#" className="flex items-center gap-2 hover:text-white/80 transition-colors uppercase">
              <ShieldCheck className="h-5 w-5" />
              <span>Government License</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
