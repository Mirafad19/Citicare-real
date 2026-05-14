import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How do I book a consultation?",
    answer: "Simply sign up through our platform and select your preferred service from the 'Services' menu. Alternatively, you can use the 'Book Now' button on our contact page."
  },
  {
    question: "Do you offer home visits?",
    answer: "Yes, we provide home healthcare services tailored to your needs, including medical consultations, physiotherapy, and nursing care."
  },
  {
    question: "Are your doctors certified?",
    answer: "Yes, all our healthcare professionals are licensed, verified, and go through a rigorous vetting process to ensure quality care."
  },
  {
    question: "Do you provide follow-up care?",
    answer: "Absolutely. Follow-up care is a core part of our service. We believe in continuous monitoring to ensure optimal health outcomes."
  }
];

export default function FAQ() {
  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      <section className="py-24 container mx-auto px-4 max-w-4xl">
         <div className="text-center space-y-6 mb-20">
            <div className="h-16 w-16 bg-primary rounded-full flex items-center justify-center text-white mx-auto shadow-xl">
               <HelpCircle className="h-8 w-8" />
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">Got Questions?</h1>
            <p className="text-xl text-muted-foreground leading-relaxed font-medium">
               Find answers to common questions about our services and delivery.
            </p>
         </div>

         <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-2xl shadow-blue-900/5">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-b-blue-50 py-4">
                  <AccordionTrigger className="text-xl font-bold hover:text-primary hover:no-underline text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-muted-foreground leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
         </div>

         <div className="mt-24 p-12 bg-primary rounded-[3rem] text-white text-center space-y-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 h-40 w-40 bg-white/5 rounded-full -mr-20 -mt-20"></div>
            <h3 className="text-3xl font-black uppercase tracking-tight">Still have questions?</h3>
            <p className="text-blue-100/70 text-lg">Our team is available 24/7 to help you with your healthcare needs.</p>
            <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2 font-bold text-xl">
                   <div className="h-1.5 w-1.5 rounded-full bg-blue-300"></div>
                   enquiries@citicarehealthltd.com
                </div>
                <div className="flex items-center gap-2 font-bold text-xl">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-300"></div>
                  +234 XXX XXX XXXX
                </div>
            </div>
         </div>
      </section>
    </div>
  );
}
