"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, User } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "The home nursing service was reliable. The nurse arrived on time and was very professional with the treatment.",
    by: "A. Adebayo, Lekki",
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
    by: "B. Ajayi, Lekki",
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
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  position, 
  testimonial, 
  handleMove, 
  cardSize 
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer p-8 transition-all duration-500 ease-in-out rounded-[2.5rem]",
        isCenter 
          ? "z-10 bg-blue-600 text-white shadow-2xl" 
          : "z-0 bg-white text-[#1e3a8a] shadow-lg opacity-40 hover:opacity-100"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        transform: `
          translate(-50%, -50%) 
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
      }}
    >
      <div className={cn(
        "mb-6 h-14 w-14 rounded-full flex items-center justify-center font-black text-2xl",
        isCenter ? "bg-white/20 text-white" : "bg-blue-100 text-blue-600"
      )}>
        <User className="h-8 w-8" />
      </div>
      <h3 className={cn(
        "text-lg sm:text-2xl font-bold leading-tight",
        isCenter ? "text-white" : "text-[#1e3a8a]"
      )}>
        "{testimonial.testimonial}"
      </h3>
      <p className={cn(
        "absolute bottom-10 left-10 right-10 mt-2 text-sm font-black uppercase tracking-widest",
        isCenter ? "text-white/80" : "text-blue-500"
      )}>
        — {testimonial.by}
      </p>
    </div>
  );
};

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365);
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
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 400 : 300);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-slate-50/50"
      style={{ height: 650 }}
    >
      {testimonialsList.map((testimonial, index) => {
        const position = testimonialsList.length % 2
          ? index - (testimonialsList.length + 1) / 2
          : index - testimonialsList.length / 2;
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        );
      })}
      <div className="absolute bottom-12 left-1/2 flex -translate-x-1/2 gap-4 z-30">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-16 w-16 items-center justify-center rounded-3xl transition-all shadow-xl",
            "bg-white text-blue-600 hover:bg-blue-600 hover:text-white border border-slate-100",
          )}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-16 w-16 items-center justify-center rounded-3xl transition-all shadow-xl",
            "bg-white text-blue-600 hover:bg-blue-600 hover:text-white border border-slate-100",
          )}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>
    </div>
  );
};
