import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, User, Bot, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Chatbot() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([
    { id: 1, type: 'bot', text: "Welcome to Citicare! I'm your health assistant." },
    { id: 2, type: 'bot', text: "To help us understand your needs, please fill out our initial consultation form:" }
  ]);

  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfP8XG_YOUR_FORM_ID/viewform";

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-20 right-0 w-[400px] bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] border border-slate-100 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#005FA3] p-6 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <Bot className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-black tracking-tight uppercase">Citicare Assist</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold opacity-60">Status: Online</div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-[400px] overflow-y-auto p-6 space-y-6 bg-slate-50 font-sans">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, x: msg.type === 'bot' ? -10 : 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`flex ${msg.type === 'bot' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[85%] p-4 rounded-2xl flex flex-col gap-2 ${
                    msg.type === 'bot' 
                      ? 'bg-white text-[#1e3a8a] shadow-sm border border-slate-100' 
                      : 'bg-[#005FA3] text-white'
                  }`}>
                    <p className="font-medium text-sm leading-relaxed">{msg.text}</p>
                    {msg.id === 2 && (
                      <a 
                        href={formUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-[#F1F5F9] text-[#005FA3] p-3 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-white transition-all border border-slate-100 shadow-sm"
                      >
                        Consultation Form <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
              
              <div className="pt-4 text-center">
                <div className="bg-blue-50 text-[#005FA3] p-5 rounded-[2rem] border border-blue-100/50">
                  <p className="text-[9px] uppercase font-black tracking-widest mb-2 opacity-60 text-[#005FA3]">Next Step</p>
                  <p className="font-bold text-xs leading-relaxed">After submission, a Citicare expert will connect with you via HubSpot CRM for follow-up.</p>
                </div>
              </div>
            </div>

            {/* Input Placeholder */}
            <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 bg-slate-50 rounded-full px-5 py-3 text-sm font-medium outline-none border border-transparent focus:border-[#005FA3]/20 transition-all"
                disabled
              />
              <Button size="icon" className="rounded-full bg-[#005FA3] hover:bg-[#004d80] text-white flex-shrink-0" disabled>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-16 w-16 bg-[#005FA3] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all group relative border-2 border-white/20"
      >
        <MessageSquare className={`h-7 w-7 transition-all ${isOpen ? 'rotate-90 opacity-0' : 'opacity-100'}`} />
        <X className={`h-7 w-7 absolute transition-all ${isOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 border-2 border-white rounded-full flex items-center justify-center"
        >
          <span className="text-[8px] font-black">1</span>
        </motion.div>
      </button>
    </div>
  );
}
