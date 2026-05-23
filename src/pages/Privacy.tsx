import { Lock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Privacy() {
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
              <Lock className="h-6 w-6" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-[#1e3a8a]">Privacy Policy</h1>
            <p className="text-slate-500 text-sm">Last Updated: May 19, 2026</p>
          </div>

          <div className="space-y-8 text-slate-600 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#1e3a8a]">1. Information Collection</h2>
              <p>
                We collect personal registration details (name, email, phone) and clinical records (medical history, homecare needs, addresses) necessary to structure your medical care plan.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#1e3a8a]">2. Use of Medical Records (EMR)</h2>
              <p>
                Your clinical records are stored securely within our certified Electronic Medical Records system. This information is accessed solely by registered specialists assigned to your care and is never distributed.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#1e3a8a]">3. Data Security Measures</h2>
              <p>
                We use secure encrypted databases, two-factor authentication for practitioners, and protocol limitations to defend your health data from unauthorized access.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#1e3a8a]">4. Cookies and Analytics</h2>
              <p>
                We employ cookies to maintain active sessions and understand site usage. No sensitive diagnostic data is passed to marketing or tracking scripts.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-[#1e3a8a]">5. Patient Legal Rights</h2>
              <p>
                Under health data compliance standards, patients have rights to request complete copies of their EMR files, correct administrative errors, or request file deletion.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
