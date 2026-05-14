"use client"

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

const SQRT_5000 = Math.sqrt(5000);

const testimonials = [
  {
    tempId: 0,
    testimonial: "The way Citicare take care of my mama, I no fit even explain. Dem be like family for real.",
    by: "Abigail, Lagos Island",
  },
  {
    tempId: 1,
    testimonial: "I was skeptical about online consultation, but Citicare changed my mind. Professional and very fast!",
    by: "Dr. Olamide, Ikeja",
  },
  {
    tempId: 2,
    testimonial: "Citicare nurse dem too kind. Dem handle my treatment with so much love. God bless una!",
    by: "Mama Tobi, Surulere",
  },
  {
    tempId: 3,
    testimonial: "The follow-up care is what makes Citicare different. They didn't just give drugs and go; they monitored my progress daily.",
    by: "Emmanuel, Victoria Island",
  },
  {
    tempId: 4,
    testimonial: "Citicare na standard! No more long hospital queues for me. The home service is a game-changer.",
    by: "Bisi, Lekki Phase 1",
  },
  {
    tempId: 5,
    testimonial: "Highest quality medical care I've experienced in Lagos. Integrity and excellence at its peak.",
    by: "Chief Adelaja, Ikoyi",
  },
  {
    tempId: 6,
    testimonial: "My pikin don well finish! Thank you Citicare for the quick response. E too set!",
    by: "Sikiru, Ajah",
  },
  {
    tempId: 7,
    testimonial: "Transparent billing and compassionate care. I recommend them to everyone who values their health.",
    by: "Nneka, Gbagada",
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
        "mb-6 h-14 w-14 rounded-2xl flex items-center justify-center font-black text-2xl",
        isCenter ? "bg-white/20 text-white" : "bg-blue-50 text-blue-600"
      )}>
        <Heart className="h-8 w-8 fill-current" />
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
