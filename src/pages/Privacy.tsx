import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Lock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-slate-50 py-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-bold mb-10 group">
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="bg-white p-6 md:p-20 rounded-none space-y-12 shadow-none border-none">
          <div className="space-y-4 border-b border-slate-100 pb-8 text-center md:text-left">
            <div className="h-16 w-16 bg-blue-100 text-blue-600 rounded-none flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Lock className="h-8 w-8" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#1e3a8a] uppercase leading-none">Privacy Policy</h1>
            <p className="text-slate-500 font-bold text-sm uppercase tracking-widest">Last Updated: May 19, 2026</p>
          </div>

          <div className="space-y-8 text-slate-700 font-medium leading-relaxed text-lg">
            <section className="space-y-4">
              <h2 className="text-2xl font-black text-[#1e3a8a] uppercase">1. Information Collection</h2>
              <p>
                We collect personal registration details (name, email address, clinical telephone contact) and clinical records (medical history requests, specific homecare nursing needs, physical addresses for in-home care, and vital signs) necessary to structure your medical care plan.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-[#1e3a8a] uppercase">2. Use of Medical Records (EMR)</h2>
              <p>
                Your clinical records are stored securely within our certified Electronic Medical Records (EMR) system. This information is accessed solely by registered doctors, nurses, or certified specialists assigned directly to your active care parameters and is never made public or distributed.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-[#1e3a8a] uppercase">3. Data Security Measures</h2>
              <p>
                We use secure encrypted databases, two-factor authentication for healthcare practitioners, and structural protocol limitations to defend your protected health parameters from unauthorized access.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-[#1e3a8a] uppercase">4. Cookies and Web Analytics</h2>
              <p>
                We employ subtle site cookies to keep you safely validated inside your active EMR sessions and to understand how our public directories are utilized. No sensitive diagnostic or vital parameters are passed to generic marketing or tracking scripts.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-black text-[#1e3a8a] uppercase">5. Patient Legal Rights</h2>
              <p>
                Under modern health data compliance standards, patients have full systemic rights to demand complete copies of their EMR files, correct administrative mistakes, or request structural file deletion/archiving.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
