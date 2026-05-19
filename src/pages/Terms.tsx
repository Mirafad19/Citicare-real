import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="min-h-screen bg-slate-50 py-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-bold mb-10 group">
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="bg-white p-12 md:p-20 rounded-[3.5rem] shadow-xl border border-slate-100 space-y-12">
          <div className="space-y-4 border-b border-slate-100 pb-8 text-center md:text-left">
            <div className="h-16 w-16 bg-blue-100 text-blue-600 rounded-3xl flex items-center justify-center mb-4 mx-auto md:mx-0">
              <FileText className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#1e3a8a] uppercase leading-none">Terms of Service</h1>
            <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">Last Updated: May 19, 2026</p>
          </div>

          <div className="space-y-8 text-slate-700 font-medium leading-relaxed text-lg">
            <section className="space-y-4">
              <h2 className="text-2xl font-black text-[#1e3a8a] uppercase">1. Introduction</h2>
              <p>
                Welcome to Citicare Integrated Health Solutions Ltd (“Citicare”, “we”, “our”, or “us”). By accessing our digital solutions, using our EMR patient portal, or requesting private clinical nursing or specialist consultations directly at your home, you agree to comply with and be bound by these Terms of Service.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-[#1e3a8a] uppercase">2. Medical & Companion Services</h2>
              <p>
                Citicare operates a digital matching and service deployment platform connecting patients with verified, registered healthcare professionals. Our in-home nurses and specialists offer general and acute support under active medical parameters. In case of extreme life-threatening emergencies, patients must immediately contact public emergency lines or coordinate direct hospital transfer.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-[#1e3a8a] uppercase">3. Booking, Rescheduling, & Cancellation Policy</h2>
              <p>
                All requested clinical visits must be fully coordinated through our verified online booking engine or secure support desk. If you need to cancel or shift an in-home assessment, you must inform us at least 24 hours prior to the scheduled professional visit to avoid structural deployment fees.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-[#1e3a8a] uppercase">4. Clinical Record (EMR) Safety</h2>
              <p>
                Our EMR medical dashboard adheres strictly to active patient protection acts. Medical history, clinical logs, and continuous vitals parameters are exclusively shared with registered providers assigned directly to your active care plan.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-[#1e3a8a] uppercase">5. Liability Limits</h2>
              <p>
                While Citicare verifies the regulatory compliance and certifications of practitioners, all clinical diagnoses, prescriptions, and health protocols remain the professional responsibility of the certifying practitioner.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-[#1e3a8a] uppercase">6. Governing Legislation</h2>
              <p>
                These terms are governed by and constructed pursuant to the valid health regulatory and business operational acts of Lagos State and the Federal Republic of Nigeria.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
