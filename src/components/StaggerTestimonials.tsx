"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, User, FormInput } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { motion } from 'motion/react';

const testimonials = [
  {
    tempId: 0,
    testimonial: "The home nursing service was reliable. The nurse arrived on time and was very professional with the treatment.",
    by: "A. Adebayo, Lagos",
  },
  {
    tempId: 1,
    testimonial: "The online consultation saved me a lot of time. The doctor was attentive and the prescription process was smooth.",
    by: "T. Okon, Ikeja",
  },
  {
    tempId: 2,
    testimonial: "Skilled care provided for my father's post-surgery recovery. We appreciated the consistent follow-ups.",
    by: "O. Lawal, Surulere",
  },
  {
    tempId: 3,
    testimonial: "The digital platform is straightforward. Scheduling a specialist appointment was much easier than expected.",
    by: "E. Nwosu, Victoria Island",
  },
  {
    tempId: 4,
    testimonial: "Efficient service and clear communication throughout the process. It's a practical solution for busy people.",
    by: "B. Ajayi, Lagos",
  },
  {
    tempId: 5,
    testimonial: "The medical staff was knowledgeable and the home visit was conducted with thorough care and attention.",
    by: "M. Ibrahim, Ikoyi",
  },
  {
    tempId: 6,
    testimonial: "Helpful guidance when we had questions about our infant's health. The response time was prompt.",
    by: "S. Olumide, Ajah",
  },
  {
    tempId: 7,
    testimonial: "A professional healthcare experience with clear billing. I would recommend their services for home care.",
    by: "N. Obi, Gbagada",
  }
];

interface TestimonialCardProps {
  position: number;
  testimonial: typeof testimonials[0];
  handleMove: (steps: number) => void;
  cardSize: number;
  isMobile: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize,
  isMobile
}) => {
  const isCenter = position === 0;

  // On mobile, only show center card and immediate neighbors
  if (isMobile && Math.abs(position) > 1) {
    return null;
  }

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer p-6 lg:p-8 transition-all duration-500 ease-out rounded-2xl lg:rounded-3xl",
        isCenter 
          ? "z-10 bg-[#1e3a8a] text-white shadow-2xl shadow-blue-900/30" 
          : "z-0 bg-white text-slate-800 shadow-lg opacity-50 hover:opacity-80 border border-slate-100"
      )}
      style={{
        width: cardSize,
        minHeight: isMobile ? cardSize * 0.9 : cardSize,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / (isMobile ? 2.5 : 1.5)) * position}px)
          translateY(${isCenter ? -40 : position % 2 ? 10 : -10}px)
          rotate(${isCenter ? 0 : position % 2 ? 2 : -2}deg)
          scale(${isCenter ? 1 : 0.9})
        `,
      }}
    >
      <div className={cn(
        "mb-4 lg:mb-6 h-12 w-12 lg:h-14 lg:w-14 rounded-full flex items-center justify-center",
        isCenter ? "bg-white/15" : "bg-slate-100"
      )}>
        <User className={cn(
          "h-6 w-6 lg:h-7 lg:w-7",
          isCenter ? "text-white" : "text-slate-500"
        )} />
      </div>
      <blockquote className={cn(
        "text-base lg:text-lg font-medium leading-relaxed mb-6 line-clamp-4 lg:line-clamp-none",
        isCenter ? "text-white" : "text-slate-700"
      )}>
        "{testimonial.testimonial}"
      </blockquote>
      <cite className={cn(
        "not-italic text-sm font-semibold",
        isCenter ? "text-white/70" : "text-slate-500"
      )}>
        {testimonial.by}
      </cite>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(340);
  const [isMobile, setIsMobile] = useState(false);
  const [testimonialsList, setTestimonialsList] = useState(testimonials);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'reviews'));
        const dynamicReviews: typeof testimonials = [];
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          if (data.testimonial) {
            dynamicReviews.push({
              tempId: Math.random(),
              testimonial: data.testimonial,
              by: `${data.fullName}, ${data.location || 'Client'}`
            });
          }
        });
        if (dynamicReviews.length > 0) {
          // Merge dynamic firestore reviews with pre-coded list seamlessly
          setTestimonialsList((prev) => {
            const merged = [...prev];
            dynamicReviews.forEach(item => {
              if (!merged.some(m => m.testimonial === item.testimonial)) {
                merged.push(item);
              }
            });
            return merged;
          });
        }
      } catch (err) {
        console.warn("Firestore feedback fallback logger:", err);
      }
    };
    fetchReviews();
  }, []);

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      if (width < 480) {
        setCardSize(280);
      } else if (width < 640) {
        setCardSize(300);
      } else if (width < 1024) {
        setCardSize(340);
      } else {
        setCardSize(380);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative w-full overflow-hidden"
        style={{ height: isMobile ? 480 : 560 }}
      >
        {testimonialsList.map((testimonial, index) => {
          const position = testimonialsList.length % 2
            ? index - (testimonialsList.length + 1) / 2
            : index - testimonialsList.length / 2;
          return (
            <TestimonialCard
              key={testimonial.tempId || index}
              testimonial={testimonial}
              handleMove={handleMove}
              position={position}
              cardSize={cardSize}
              isMobile={isMobile}
            />
          );
        })}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3 z-30">
          <button
            onClick={() => handleMove(-1)}
            className="flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-xl transition-all shadow-lg bg-white text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white border border-slate-200"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => handleMove(1)}
            className="flex h-12 w-12 lg:h-14 lg:w-14 items-center justify-center rounded-xl transition-all shadow-lg bg-white text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white border border-slate-200"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      {/* Client Feedback shareable block */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-center z-40 relative group"
      >
        <Link 
          to="/review" 
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-blue-100 bg-blue-50/50 hover:bg-white text-xs font-bold text-[#1e3a8a] hover:text-[#1e3a8a]/80 shadow-sm transition-all"
        >
          <FormInput className="h-4 w-4 text-blue-600 group-hover:rotate-12 transition-transform" />
          Previous Patient? Submit Your Testimonial / Review Here
        </Link>
      </motion.div>
    </div>
  );
};
