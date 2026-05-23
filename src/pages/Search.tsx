import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search as SearchIcon, FileText, User, Layout, HelpCircle, Zap } from 'lucide-react';
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
    <div className="min-h-screen bg-slate-50 py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20">
        <div className="mb-10">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a] mb-2">Search Results</h1>
          <p className="text-slate-500">
            Showing results for: <span className="text-blue-600 font-semibold">&quot;{query}&quot;</span>
          </p>
        </div>

        {results.length > 0 ? (
          <div className="grid gap-4">
            {results.map((result, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link 
                  to={result.link}
                  className="block bg-white p-6 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        {getIcon(result.type)}
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">{result.type}</span>
                    </div>
                    <SearchIcon className="h-4 w-4 text-slate-300" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1e3a8a] mb-1">{result.title}</h3>
                  <p className="text-slate-500 text-sm">{result.desc}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl lg:rounded-3xl border border-slate-100">
            <div className="h-20 w-20 bg-blue-50 text-blue-300 rounded-full flex items-center justify-center mx-auto mb-6">
              <SearchIcon className="h-10 w-10" />
            </div>
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-3">No Results Found</h2>
            <p className="text-slate-500 max-w-sm mx-auto mb-8">
              We couldn&apos;t find anything matching your search. Please try different keywords.
            </p>
            <Link to="/services" className="text-blue-600 font-semibold hover:underline">
              View All Services
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
