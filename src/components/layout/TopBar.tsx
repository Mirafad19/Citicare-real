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
    <div className="w-full bg-[#005FA3] text-white">
      <div className="max-w-[1440px] mx-auto flex h-14 items-center justify-between px-6 lg:px-24 text-[13px] font-bold tracking-wider">
        {/* Left Side */}
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Home className="h-5 w-5 fill-white" />
            <span className="uppercase">Citicare Integrated Health</span>
          </Link>
          
          <form onSubmit={handleSearch} className="hidden md:flex items-center bg-[#004d80] rounded-full px-4 py-1.5 gap-2 border border-white/20 transition-all focus-within:border-white/50 focus-within:bg-[#003d66]">
            <input 
              type="text" 
              placeholder="SEARCH SITE..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none focus:outline-none placeholder:text-white/60 text-white w-40"
            />
            <button type="submit">
              <Search className="h-4 w-4 text-white/80 hover:text-white transition-colors" />
            </button>
          </form>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-1">
          <div className="flex items-center gap-4 mr-6 border-r border-white/20 pr-6 py-1">
            <a href="#" className="hover:text-blue-200 transition-colors"><Facebook className="h-5 w-5" /></a>
            <a href="#" className="hover:text-pink-200 transition-colors"><Instagram className="h-5 w-5" /></a>
            <a href="#" className="hover:text-blue-300 transition-colors"><Linkedin className="h-5 w-5" /></a>
            <a href="#" className="hover:text-sky-200 transition-colors"><Twitter className="h-5 w-5" /></a>
          </div>
          
          <div className="hidden lg:flex items-center gap-6">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full uppercase border border-white/10 select-none">
              <FileText className="h-4 w-4 text-blue-300" />
              <span>Company Brochure</span>
            </div>
            <div className="h-6 w-[1px] bg-white/20"></div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-1.5 rounded-full uppercase border border-white/10 select-none">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>Government License</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
