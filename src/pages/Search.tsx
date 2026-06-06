import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { 
  Search as SearchIcon, 
  FileText, 
  User, 
  Layout, 
  HelpCircle, 
  Zap, 
  X, 
  Phone, 
  Activity, 
  Heart,
  Baby,
  Brain,
  Scissors,
  Stethoscope,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const mockData = [
  {
    title: "Cardiology Consultation",
    type: "Specialty",
    link: "/specialist-care",
    desc: "Comprehensive heart health monitoring, expert cardiac assessments, and circulatory system care.",
    keywords: ["cardiology", "heart", "blood pressure", "vessel", "valve", "cardiac", "chest", "pain", "pulse"]
  },
  {
    title: "Mental Health & Psychiatry",
    type: "Specialty",
    link: "/specialist-care",
    desc: "Holistic psychiatric evaluations, counseling, and mental welfare discussions tailored to your needs.",
    keywords: ["mental health", "brain", "psychiatry", "psychiatric", "anxiety", "therapy", "depression", "therapist", "counselor", "stress"]
  },
  {
    title: "General Surgery",
    type: "Specialty",
    link: "/specialist-care",
    desc: "Pre-operative consultations, general surgery assessments, and professional post-op care guidance.",
    keywords: ["surgery", "general surgery", "surgeon", "operation", "pre-op", "post-op", "surgical", "hospital"]
  },
  {
    title: "OB/GYN & Women's Health",
    type: "Specialty",
    link: "/specialist-care",
    desc: "Comprehensive prenatal care, gynecological evaluations, and women's reproductive health consultation.",
    keywords: ["obgyn", "ob-gyn", "obstetrics", "gynecology", "women", "maternal", "prenatal", "pregnancy", "birth", "reproductive"]
  },
  {
    title: "Orthopedic Care",
    type: "Specialty",
    link: "/specialist-care",
    desc: "Expert musculoskeletal consultations focusing on joint health, bone injuries, arthritis, and skeletal care.",
    keywords: ["orthopedics", "orthopedic", "joint", "bone", "muscle", "spine", "fracture", "musculoskeletal", "back", "pain", "sports"]
  },
  {
    title: "Urological Consultation",
    type: "Specialty",
    link: "/specialist-care",
    desc: "Specialized diagnostics and procedures for urinary tract issues and male reproductive wellness.",
    keywords: ["urology", "urologist", "urine", "kidney", "bladder", "prostate"]
  },
  {
    title: "Skilled Nursing Care at Home",
    type: "Home Healthcare",
    link: "/home-healthcare/skilled-nursing",
    desc: "Professional registered nurse visits for clinical procedures, injections, and overall physical assessment.",
    keywords: ["nursing", "nurse", "nursing care", "home nursing", "medical care", "injections", "clinical assessment"]
  },
  {
    title: "Post-Operative Home Recovery",
    type: "Home Healthcare",
    link: "/home-healthcare/post-op-recovery",
    desc: "Rehabilitation, surgical incision care, and assistance in regaining full function at home after surgery.",
    keywords: ["post-operative", "recovery", "post-op", "surgery recovery", "rehabilitation", "incision", "wound", "healing"]
  },
  {
    title: "Physiotherapy at Home",
    type: "Home Healthcare",
    link: "/home-healthcare/physiotherapy",
    desc: "Guided mobility training, exercises, and muscle strengthening routines provided by a dedicated specialist.",
    keywords: ["physical therapy", "physiotherapy", "therapist", "mobility", "exercise", "movement", "massage", "rehabilitation", "walking", "joints"]
  },
  {
    title: "Elderly Companion Care",
    type: "Home Healthcare",
    link: "/home-healthcare/elderly-companion",
    desc: "Help for elderly loved ones in their daily activities, nutrition support, and warm, compassionate companionship.",
    keywords: ["elderly", "companion", "senior", "geriatric", "companion care", "aged", "grand", "parent", "home help"]
  },
  {
    title: "Palliative & Compassionate Care",
    type: "Home Healthcare",
    link: "/home-healthcare/palliative-care",
    desc: "Symptom management and premium wellness support designed comfortingly for progressive or chronic conditions.",
    keywords: ["palliative", "chronic", "cancer", "comfort", "pain management", "end of life", "compassionate"]
  },
  {
    title: "Psychiatric Home Support",
    type: "Home Healthcare",
    link: "/home-healthcare/psychiatric-home-support",
    desc: "Specialized in-home therapeutic support for patients overcoming mental health and cognitive challenges.",
    keywords: ["psychiatric home support", "psychiatric home care", "mental wellness home"]
  },
  {
    title: "Medication Management",
    type: "Home Healthcare",
    link: "/home-healthcare/medication-management",
    desc: "Professional prescription sorting, dosage timing, and safety assessments for complex medicine regimens.",
    keywords: ["medication", "pills", "prescription", "drug", "sorting", "medicine", "pharmacy", "dose", "dosage"]
  },
  {
    title: "Wound Care Services",
    type: "Home Healthcare",
    link: "/home-healthcare/wound-care",
    desc: "Advanced sterile dressings, diabetic wound monitoring, and infection checks for rapid, safe healing.",
    keywords: ["wound care", "dressing", "bandage", "diabetes", "infection", "heal", "sterile", "sore"]
  },
  {
    title: "Lab Sample Collection at Home",
    type: "Home Healthcare",
    link: "/home-healthcare/lab-sample-collection",
    desc: "Convenient, sterile blood draw and diagnostics sampling done in your house and sent directly to the lab.",
    keywords: ["lab", "blood", "test", "sample", "diagnostic", "draw", "blood draw", "test sample", "screening"]
  },
  {
    title: "Book an Appointment",
    type: "Action",
    link: "/book",
    desc: "Schedule an online video consultation, specialist doctor meeting, or a home healthcare visit easily.",
    keywords: ["book", "booking", "appointment", "schedule", "slot", "visit", "consult", "reservation", "consultation"]
  },
  {
    title: "Contact Citicare",
    type: "Page",
    link: "/contact",
    desc: "Get in touch with Citicare's primary offices, telephone support, or electronic email correspondence.",
    keywords: ["contact", "phone", "email", "address", "support", "call", "message", "offices", "location", "talk to us", "helpline"]
  },
  {
    title: "Careers at Citicare",
    type: "Page",
    link: "/career",
    desc: "Explore vacancies, medical job openings, nursing roles, and application forms to join our outstanding team.",
    keywords: ["career", "careers", "job", "jobs", "vacancy", "hire", "hiring", "apply", "work", "resume", "join us", "position"]
  },
  {
    title: "About Our Platform",
    type: "Page",
    link: "/about",
    desc: "Learn about the core values, long-term health missions, and compassionate team making Citicare trusted worldwide.",
    keywords: ["about", "about us", "info", "company", "team", "history", "mission", "vision", "background", "platform"]
  },
  {
    title: "FAQ & Help Center",
    type: "Page",
    link: "/faq",
    desc: "Read through questions covering insurance, doctor bookings, pricing, and home healthcare responses.",
    keywords: ["faq", "faqs", "help", "questions", "question", "answers", "insurance", "payment", "how it works", "support"]
  },
  {
    title: "Core Values",
    type: "Page",
    link: "/values",
    desc: "Our pillars of operation: Accessibility, Integrity, Innovation, Premium Quality, and Deep Compassion.",
    keywords: ["values", "integrity", "focus", "standards", "core values", "principles", "ethics"]
  },
  {
    title: "Privacy Policy",
    type: "Page",
    link: "/privacy",
    desc: "Review how Citicare handles personal data, medical histories, and protects user confidentiality.",
    keywords: ["privacy", "policy", "data", "security", "standard", "confidentiality", "terms", "legal"]
  },
  {
    title: "Terms of Service",
    type: "Page",
    link: "/terms",
    desc: "The legally binding specifications, rules of conduct, and terms governing website and app usage.",
    keywords: ["terms", "service", "agreement", "legal", "conditions", "liability", "disclaimers"]
  },
  {
    title: "EMR Doctor & Patient Login",
    type: "Action",
    link: "/emr/login",
    desc: "Access the Electronic Medical Records portal for clinicians, nurse monitoring, and patient history views.",
    keywords: ["emr", "portal", "record", "chart", "login", "login emr", "medical records", "patient file", "doctor portal", "diagnosis", "clinician"]
  }
];

const suggestedKeywords = [
  "Cardiology", "Home Nursing", "Careers", "EMR", "FAQ", "Values", "OB/GYN", "Physical Therapy"
];

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [inputValue, setInputValue] = useState(query);
  const [results, setResults] = useState<typeof mockData>([]);

  // Update input when query parameter changes
  useEffect(() => {
    setInputValue(query);
  }, [query]);

  // Scoring and matching algorithm
  useEffect(() => {
    const queryCleaned = query.trim().toLowerCase();
    
    if (!queryCleaned) {
      // If no query is present, show no search results default or a state
      setResults([]);
      return;
    }

    const queryWords = queryCleaned.split(/\s+/).filter(w => w.length > 0);

    const scored = mockData.map(item => {
      let score = 0;
      const titleLower = item.title.toLowerCase();
      const descLower = item.desc.toLowerCase();
      const typeLower = item.type.toLowerCase();

      // 1. Direct match on full query
      if (titleLower === queryCleaned) {
        score += 600;
      } else if (titleLower.includes(queryCleaned)) {
        score += 200;
      }

      // 2. Keyword matching with high weight for exact word matches
      item.keywords.forEach(keyword => {
        const kw = keyword.toLowerCase();
        if (kw === queryCleaned) {
          score += 250;
        }
        
        queryWords.forEach(word => {
          if (kw === word) {
            score += 150; // Exact word match is highly weighted
          } else if (kw.includes(word)) {
            score += 40;
          }
        });
      });

      // 3. Match of words against title or description
      queryWords.forEach(word => {
        if (titleLower.includes(word)) {
          score += 60;
        }
        if (descLower.includes(word)) {
          score += 30;
        }
        if (typeLower.includes(word)) {
          score += 40;
        }
      });

      return { ...item, score };
    });

    // Only keep items with positive matching score, and sort descending
    const filteredResults = scored
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score);

    setResults(filteredResults);
  }, [query]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ q: inputValue });
  };

  const handleSuggestedClick = (kw: string) => {
    setInputValue(kw);
    setSearchParams({ q: kw });
  };

  const clearSearch = () => {
    setInputValue('');
    setSearchParams({});
  };

  const highlightText = (text: string, search: string) => {
    if (!search.trim()) return <span>{text}</span>;
    const words = search
      .split(/\s+/)
      .filter(w => w.length > 1)
      .map(w => w.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'));
      
    if (words.length === 0) return <span>{text}</span>;
    
    const pattern = `(${words.join('|')})`;
    const regex = new RegExp(pattern, 'gi');
    const parts = text.split(regex);
    
    return (
      <span>
        {parts.map((part, i) => 
          regex.test(part) ? (
            <mark key={i} className="bg-yellow-200 text-[#1e3a8a] px-1 py-0.5 rounded font-medium">{part}</mark>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  const getIcon = (type: string, title: string) => {
    const t = title.toLowerCase();
    if (t.includes('cardiology')) return <Heart className="h-5 w-5" />;
    if (t.includes('mental') || t.includes('psychiat')) return <Brain className="h-5 w-5" />;
    if (t.includes('surgery')) return <Scissors className="h-5 w-5" />;
    if (t.includes('ob/gyn') || t.includes('women')) return <Baby className="h-5 w-5" />;
    if (t.includes('urology')) return <Stethoscope className="h-5 w-5" />;
    if (t.includes('contact') || t.includes('phone')) return <Phone className="h-5 w-5" />;
    
    switch(type) {
      case 'Specialty': return <Activity className="h-5 w-5" />;
      case 'Home Healthcare': return <Layout className="h-5 w-5" />;
      case 'Page': return <User className="h-5 w-5" />;
      case 'Action': return <Zap className="h-5 w-5" />;
      default: return <HelpCircle className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20">
        
        {/* Title Context */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl lg:text-5xl font-bold text-[#1e3a8a] mb-4">Citicare Search Portal</h1>
          <p className="text-slate-500 text-sm lg:text-base">
            Search our comprehensive suite of medical specialties, home healthcare services, clinician directories, EMR, or help articles instantly.
          </p>
        </div>

        {/* Real-time Search Form */}
        <div className="max-w-xl mx-auto mb-10">
          <form onSubmit={handleSearchSubmit} className="relative flex items-center">
            <div className="absolute left-5 text-[#1e3a8a]">
              <SearchIcon className="h-5 w-5" />
            </div>
            <input 
              type="text"
              placeholder="Type keywords (e.g. Heart, Nursing, EMR, Jobs...)"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                // Real-time filtering as you type:
                setSearchParams({ q: e.target.value }, { replace: true });
              }}
              className="w-full pl-14 pr-12 py-4 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/30 text-slate-800 text-sm shadow-sm font-medium"
            />
            {inputValue && (
              <button 
                type="button"
                onClick={clearSearch} 
                className="absolute right-4 p-1 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors"
                title="Clear query"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </form>

          {/* Suggested Pills */}
          <div className="mt-4 flex flex-wrap gap-2 items-center justify-center">
            <span className="text-xs text-slate-400 font-semibold mr-1">Suggested:</span>
            {suggestedKeywords.map((kw) => (
              <button
                key={kw}
                type="button"
                onClick={() => handleSuggestedClick(kw)}
                className={`text-xs px-3 py-1.5 rounded-full font-medium transition-colors ${
                  query.toLowerCase() === kw.toLowerCase()
                  ? "bg-[#1e3a8a] text-white"
                  : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {kw}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="mb-6">
          {query ? (
            <p className="text-slate-500 font-medium">
              We found <span className="text-[#1e3a8a] font-bold">{results.length}</span> explicit {results.length === 1 ? 'match' : 'matches'} for: <span className="text-blue-600 font-bold bg-blue-100/65 px-2 py-1 rounded-lg">&quot;{query}&quot;</span>
            </p>
          ) : (
            <p className="text-slate-500 text-center font-medium mt-12">
              Please insert a search term above or click on the suggested tags to start a query.
            </p>
          )}
        </div>

        {/* Results Output */}
        <AnimatePresence mode="popLayout">
          {query && results.length > 0 && (
            <motion.div 
              layout
              className="grid gap-4 max-w-4xl mx-auto"
            >
              {results.map((result, i) => (
                <motion.div 
                  key={result.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: Math.min(i * 0.05, 0.3) }}
                  layoutId={result.title}
                >
                  <a 
                    href={result.link}
                    className="block bg-white p-5 lg:p-6 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-md transition-all relative overflow-hidden group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4">
                        <div className="h-10 w-10 lg:h-12 lg:w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                          {getIcon(result.type, result.title)}
                        </div>
                        <div>
                          <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#1e3a8a] bg-blue-50 px-2 py-0.5 rounded-full mb-1 sm:mb-2 border border-blue-100">
                            {result.type}
                          </span>
                          <h3 className="text-lg lg:text-xl font-bold text-[#1e3a8a] mb-1 group-hover:text-blue-600 transition-colors">
                            {highlightText(result.title, query)}
                          </h3>
                          <p className="text-slate-500 text-sm leading-relaxed">
                            {highlightText(result.desc, query)}
                          </p>
                        </div>
                      </div>
                      <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-blue-600 transition-colors group-hover:translate-x-1 shrink-0 mt-1" />
                    </div>
                  </a>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {query && results.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-100 max-w-2xl mx-auto shadow-sm">
            <div className="h-20 w-20 bg-blue-50 text-blue-300 rounded-full flex items-center justify-center mx-auto mb-6">
              <SearchIcon className="h-10 w-10" />
            </div>
            <h2 className="text-2xl font-bold text-[#1e3a8a] mb-2">No Clear Results Found</h2>
            <p className="text-slate-500 text-sm max-w-sm mx-auto mb-8 leading-relaxed">
              We couldn&apos;t match an exact word or service description for <strong className="text-red-500 font-bold">&quot;{query}&quot;</strong>. Let&apos;s browse general healthcare support packages.
            </p>
            <div className="flex gap-4 justify-center">
              <a href="/services" className="px-5 py-2.5 bg-[#1e3a8a] text-white rounded-xl text-xs font-semibold hover:bg-blue-800 transition-colors">
                View All Services
              </a>
              <button onClick={clearSearch} className="px-5 py-2.5 text-[#1e3a8a] bg-slate-150 rounded-xl text-xs font-semibold hover:bg-slate-200 transition-colors">
                Start Over
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
