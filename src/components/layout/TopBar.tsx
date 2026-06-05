import React, { useState, useEffect } from 'react';
import { Home, Search, Facebook, Instagram, Linkedin, Twitter, ShieldCheck } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export function TopBar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('q');
    if (location.pathname === '/search' && query) {
      setSearchQuery(query);
    } else {
      setSearchQuery('');
    }
  }, [location]);

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
          
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-2 bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider select-none">
              <ShieldCheck className="h-4 w-4 shrink-0 text-[#25D366]" />
              <span>Licensed & Verified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
