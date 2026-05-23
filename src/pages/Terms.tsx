import { FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <div className="min-h-screen bg-slate-50 py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-5 sm:px-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold text-sm mb-8 group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="bg-white p-6 lg:p-12 rounded-2xl lg:rounded-3xl shadow-xl">
          <div className="space-y-4 border-b border-slate-100 pb-8 mb-8">
            <div className="h-12 w-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
              <FileText className="h-6 w-6" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a]">Terms of Service</h1>
            <p className="text-slate-500 text-sm">Last Updated: May 19, 2026</p>
          </div>

          <div className="space-y-8 text-slate-600 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#1e3a8a]">1. Introduction</h2>
              <p>
                Welcome to Citicare Integrated Health Solutions Ltd. By accessing our digital solutions, using our EMR patient portal, or requesting private clinical nursing or specialist consultations, you agree to comply with these Terms of Service.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#1e3a8a]">2. Medical & Companion Services</h2>
              <p>
                Citicare operates a digital matching and service deployment platform connecting patients with verified, registered healthcare professionals. In case of life-threatening emergencies, patients must immediately contact public emergency lines or coordinate direct hospital transfer.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#1e3a8a]">3. Booking & Cancellation Policy</h2>
              <p>
                All clinical visits must be coordinated through our verified booking engine or support desk. Cancellations require at least 24 hours notice to avoid deployment fees.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#1e3a8a]">4. Clinical Record (EMR) Safety</h2>
              <p>
                Our EMR dashboard adheres to patient protection standards. Medical records are exclusively shared with registered providers assigned to your active care plan.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#1e3a8a]">5. Liability Limits</h2>
              <p>
                While Citicare verifies practitioner certifications, all clinical diagnoses and health protocols remain the professional responsibility of the certifying practitioner.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#1e3a8a]">6. Governing Legislation</h2>
              <p>
                These terms are governed by the health regulatory and business operational acts of Lagos State and the Federal Republic of Nigeria.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
