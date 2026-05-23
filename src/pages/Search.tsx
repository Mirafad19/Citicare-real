import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search as SearchIcon, FileText, User, Layout, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

const mockData = [
  { title: "Home Healthcare", type: "Service", link: "/home-healthcare", desc: "Professional care at home" },
  { title: "Specialist Care", type: "Service", link: "/specialist-care", desc: "Expert medical consultations" },
  { title: "Online Consultation", type: "Service", link: "/book", desc: "Virtual doctor visits" },
  { title: "About Citicare", type: "Page", link: "/about", desc: "Our history and mission" },
  { title: "Book Appointment", type: "Action", link: "/book", desc: "Schedule a medical session" },
  { title: "Contact Us", type: "Page", link: "/contact", desc: "Get in touch with our team" },
  { title: "Frequently Asked Questions", type: "Help", link: "/faq", desc: "Common queries and answers" },
  { title: "Our Values", type: "Page", link: "/values", desc: "Innovation, Quality, Compassion" }
];

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState(mockData);

  useEffect(() => {
    if (query) {
      const filtered = mockData.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) || 
        item.desc.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    }
  }, [query]);

  const getIcon = (type: string) => {
    switch(type) {
      case 'Service': return <Layout className="h-5 w-5" />;
      case 'Page': return <User className="h-5 w-5" />;
      case 'Action': return <Zap className="h-5 w-5" />;
      case 'File': return <FileText className="h-5 w-5" />;
      default: return <HelpCircle className="h-5 w-5" />;
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="mb-12">
          <h1 className="text-4xl font-black uppercase text-[#1e3a8a] mb-2">Search Results</h1>
          <p className="text-slate-500 font-medium">Showing results for: <span className="text-blue-600 font-bold">"{query}"</span></p>
        </div>

        {results.length > 0 ? (
          <div className="grid gap-6">
            {results.map((result, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link 
                  to={result.link}
                  className="block bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:border-blue-300 hover:shadow-xl transition-all"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        {getIcon(result.type)}
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest text-slate-400">{result.type}</span>
                    </div>
                    <SearchIcon className="h-4 w-4 text-slate-300" />
                  </div>
                  <h3 className="text-2xl font-black text-[#1e3a8a] mb-2">{result.title}</h3>
                  <p className="text-slate-500 font-medium">{result.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-[4rem] border border-slate-100">
             <div className="h-24 w-24 bg-blue-50 text-blue-300 rounded-full flex items-center justify-center mx-auto mb-8">
               <SearchIcon className="h-12 w-12" />
             </div>
             <h2 className="text-3xl font-black text-[#1e3a8a] mb-4 uppercase">No Results Found</h2>
             <p className="text-slate-500 font-medium max-w-sm mx-auto mb-12">We couldn't find anything matching your search. Please try different keywords or browse our services.</p>
             <Link to="/services" className="text-blue-600 font-black uppercase tracking-widest text-sm hover:underline">View All Services</Link>
          </div>
        )}
      </div>
    </div>
  );
}

const Zap = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
  </svg>
);
