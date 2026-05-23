import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Mail, Phone } from "lucide-react";

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
  },
  {
    question: "What areas do you serve?",
    answer: "We currently provide services across Lagos, Nigeria including Ikeja, Victoria Island, Ikoyi, Lekki, Surulere, and many other areas."
  },
  {
    question: "How quickly can I get an appointment?",
    answer: "Most appointments can be scheduled within 24-48 hours. For urgent cases, we offer priority booking with same-day availability."
  }
];

export default function FAQ() {
  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <div className="h-14 w-14 bg-[#1e3a8a] rounded-2xl flex items-center justify-center text-white mx-auto">
              <HelpCircle className="h-7 w-7" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1e3a8a]">Got Questions?</h1>
            <p className="text-base lg:text-lg text-slate-600 leading-relaxed">
              Find answers to common questions about our services and delivery.
            </p>
          </div>

          <div className="bg-white rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-slate-100 last:border-0">
                  <AccordionTrigger className="text-base lg:text-lg font-semibold hover:text-blue-600 hover:no-underline text-left py-5 text-[#1e3a8a]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-12 lg:mt-16 p-8 lg:p-10 bg-[#1e3a8a] rounded-2xl lg:rounded-3xl text-white text-center space-y-6">
            <h3 className="text-2xl font-bold">Still have questions?</h3>
            <p className="text-white/70 text-sm">Our team is available 24/7 to help you with your healthcare needs.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm">
              <div className="flex items-center justify-center gap-2">
                <Mail className="h-4 w-4 text-blue-300" />
                <span>enquiries@citicarehealth.com</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4 text-blue-300" />
                <span>+234 XXX XXX XXXX</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
