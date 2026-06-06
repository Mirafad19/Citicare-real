import React, { useState } from 'react';
import { HelpCircle, Mail, Phone, ChevronDown, CheckCircle2, MessageSquare, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FAQItem {
  question: string;
  answer: string;
  category: 'booking' | 'clinical' | 'logistics';
}

const faqs: FAQItem[] = [
  {
    category: 'booking',
    question: "How do I book a consultation or home healthcare assessment?",
    answer: "Simply navigate to our online booking system and fill out your name, contact information, and desired service. Within a brief timeframe, our care coordinators will review your files and reach out to complete the coordination and confirm your clinical timing."
  },
  {
    category: 'logistics',
    question: "Do you offer home clinical visits and therapy?",
    answer: "Yes. Citicare provides fully compliant, certified home healthcare services including registered nurse visits, specialized physiotherapy sessions, palliative care, and post-operative monitoring directly inside patient residences."
  },
  {
    category: 'clinical',
    question: "Are your doctors, nurses, and physical therapists certified?",
    answer: "Absolutely. Every professional on our registry undergoes a rigorous validation process. We verify local medical licenses, perform background checks, evaluate clinical experience, and maintain active EMR monitoring to ensure standard-setting patient security."
  },
  {
    category: 'clinical',
    question: "Do you provide critical continuous follow-up care?",
    answer: "Yes, follow-up care is the foundation of the Citicare model. Post-consultation, our staff monitors your healing progression, schedules subsequent checks, and documents clinical metrics in your personal electronic medical record (EMR)."
  },
  {
    category: 'logistics',
    question: "What geographical areas does Citicare serve?",
    answer: "We offer comprehensive on-site home healthcare and physical consultations across major residential districts of Lagos, Nigeria (including Lekki, Ikeja, Ikoyi, Victoria Island, Surulere, and surrounding areas)."
  },
  {
    category: 'booking',
    question: "How quickly can a medical coordinator reach my home?",
    answer: "Normal care assessments are put in place within 24 to 48 hours. For urgent recovery or specialty post-op setups, we offer priority coordination to make assistance available on a shorter lead-time depending on specialist schedules."
  }
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'booking' | 'clinical' | 'logistics'>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col bg-[#f8fafc] min-h-screen">
      
      {/* Editorial Header */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-950 text-white py-16 lg:py-24 relative overflow-hidden flex items-center">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-5 pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20 relative z-10 w-full text-center">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-500/20 text-blue-300 uppercase tracking-widest">
              Support Center
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Citicare Portal Help & FAQ
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto leading-relaxed">
              Find answers to common questions about our physical specialist Consultations, home nursing, and clinic logistics.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20 py-12 lg:py-20 flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column Sticky Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="space-y-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#1e3a8a]">Filter Topics</h3>
              <div className="flex flex-wrap lg:flex-col gap-2">
                {[
                  { key: 'all', label: 'All Questions' },
                  { key: 'booking', label: 'Booking & Consultations' },
                  { key: 'clinical', label: 'Staff & Clinical Vetting' },
                  { key: 'logistics', label: 'Home Care Logistics' }
                ].map((cat) => (
                  <button
                    key={cat.key}
                    onClick={() => {
                      setActiveCategory(cat.key as any);
                      setOpenIndex(null);
                    }}
                    className={`px-4 py-3 rounded-xl text-xs font-bold text-left transition-all w-full leading-none flex items-center justify-between border ${
                      activeCategory === cat.key
                        ? 'bg-[#1e3a8a] text-white border-transparent shadow-md'
                        : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-100'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span className={`h-2 w-2 rounded-full ${activeCategory === cat.key ? 'bg-emerald-400' : 'bg-slate-300'}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Contact Resource Hub */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm space-y-4">
              <h4 className="text-xs font-extrabold text-slate-900 uppercase tracking-widest">Still need assistance?</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Our active clinical desks work round-the-clock to coordinate services. Don't hesitate to reach us directly.
              </p>
              
              <div className="space-y-2.5 pt-2">
                <a 
                  href="tel:+2348119868201" 
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-100 text-slate-800 transition-colors"
                >
                  <div className="h-8 w-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-black uppercase text-slate-400 leading-none mb-1">Call Representative</p>
                    <p className="text-xs font-bold font-mono tracking-wide">+234 811 986 8201</p>
                  </div>
                </a>

                <a 
                  href="mailto:enquiries@citicarehealth.com" 
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100/80 border border-slate-100 text-slate-800 transition-colors"
                >
                  <div className="h-8 w-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-black uppercase text-slate-400 leading-none mb-1">Send Enquiries</p>
                    <p className="text-xs font-bold">enquiries@citicarehealth.com</p>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column Interactive FAQ Roster */}
          <div className="lg:col-span-8 space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 px-1">
              Currently Showing {filteredFaqs.length} Help Resources
            </h3>

            <div className="space-y-4">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`bg-white rounded-2xl border transition-all duration-300 ${
                      isOpen 
                        ? 'border-blue-200 shadow-md ring-1 ring-blue-50' 
                        : 'border-slate-100 shadow-sm hover:border-slate-300'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-800 select-none cursor-pointer"
                    >
                      <span className="leading-snug text-slate-900">{faq.question}</span>
                      <div className={`h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-blue-50 text-blue-600' : ''
                      }`}>
                        <ChevronDown className="h-4 w-4" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold border-t border-slate-50">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
