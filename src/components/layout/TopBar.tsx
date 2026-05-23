import React, { useState } from 'react';
import { Home, Search, Facebook, Instagram, Linkedin, Twitter, FileText, ShieldCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export function TopBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="w-full bg-[#1e3a8a] text-white">
      <div className="max-w-[1440px] mx-auto flex h-12 items-center justify-between px-5 sm:px-6 lg:px-20 text-xs font-semibold tracking-wide">
        {/* Left Side */}
        <div className="flex items-center gap-4 lg:gap-6">
          <Link to="/" className="flex items-center gap-2 hover:text-blue-200 transition-colors">
            <Home className="h-4 w-4" />
            <span className="hidden sm:inline uppercase text-[11px] tracking-wider">Citicare Health</span>
          </Link>
          
          <form onSubmit={handleSearch} className="hidden md:flex items-center bg-white/10 rounded-full px-3 py-1.5 gap-2 border border-white/10 transition-all focus-within:border-white/30 focus-within:bg-white/15">
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none focus:outline-none placeholder:text-white/50 text-white text-xs w-28 lg:w-36"
            />
            <button type="submit" className="hover:text-blue-200 transition-colors">
              <Search className="h-3.5 w-3.5 text-white/70" />
            </button>
          </form>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-3 mr-4 lg:mr-6 border-r border-white/20 pr-4 lg:pr-6">
            {[
              { Icon: Facebook, href: "#", hoverColor: "hover:text-blue-300" },
              { Icon: Instagram, href: "#", hoverColor: "hover:text-pink-300" },
              { Icon: Linkedin, href: "#", hoverColor: "hover:text-blue-300" },
              { Icon: Twitter, href: "#", hoverColor: "hover:text-sky-300" }
            ].map(({ Icon, href, hoverColor }, i) => (
              <a key={i} href={href} className={`${hoverColor} transition-colors`}>
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 text-white/80 text-[11px] uppercase tracking-wider">
              <FileText className="h-3.5 w-3.5 text-blue-300" />
              <span>Brochure</span>
            </div>
            <div className="h-4 w-px bg-white/20" />
            <div className="flex items-center gap-2 text-white/80 text-[11px] uppercase tracking-wider">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              <span>Licensed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
