import { ArrowLeft } from 'lucide-react';

export default function Terms() {
  return (
    <div className="min-h-screen bg-white py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-10">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 text-[#1e3a8a] hover:text-blue-700 font-semibold text-sm transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </a>
        </div>

        {/* Professional Document Layout */}
        <div className="space-y-8">
          <div className="border-b border-slate-200 pb-8">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-[#1e3a8a] tracking-tight">
              Terms of Service
            </h1>
            <p className="text-slate-500 text-sm mt-3 font-medium">
              Effective Date: May 19, 2026 | Last Updated: June 5, 2026
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
            <p>
              The Citicare Integrated Health Solutions Ltd website, at www.citicarehealth.com ("Website"), is owned and operated by Citicare Integrated Health Solutions Ltd ("Citicare", "we", "us", or "our"). Citicare wants you to be familiar with how we deliver services and govern use of our digital healthcare systems, scheduling mechanisms, and client portals.
            </p>
            <p>
              Welcome to Citicare. By accessing our website, using our digital health portal, scheduling home healthcare consultations, or requesting private clinical nursing or specialist consultations, you agree to comply with and be bound by these Terms of Service. If you do not accept these terms, please do not use our services.
            </p>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#1e3a8a]">1. Medical & Companion Services</h2>
              <p>
                Citicare operates a digital matching, service deployment, and quality management platform connecting patients with verified, registered healthcare professionals, clinical nurses, companion specialists, and physical therapy practitioners. 
              </p>
              <p>
                <strong>Emergency Notice:</strong> Citicare's home care, nursing, companion, and outpatient coordination solutions are intended for non-emergency healthcare support and clinical assistance only. In case of cardiac arrest, severe trauma, acute respiratory distress, or any other life-threatening medical emergency, patients and caregivers must immediately call local public emergency emergency lines or arrange direct hospital transfer. Do not rely on Citicare for active critical or emergency support.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#1e3a8a]">2. Booking & Cancellation Policy</h2>
              <p>
                All clinical deployments, on-site nursing shifts, physical therapy visits, and specialist consultations must be officially scheduled and approved through our verified online booking engine, the patient portal, or our central coordinator desk.
              </p>
              <p>
                Appointments cancelled with less than 24 hours warning are subject to a cancellation or practitioner deployment travel penalty fee. Rescheduled visits are subject to matching based on active practitioner schedules. Agreed service charges must be fully cleared through our safe payment processing systems prior to care commencement or session completion.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#1e3a8a]">3. Clinical Record (EMR) Safety</h2>
              <p>
                Our proprietary Electronic Medical Records (EMR) dashboard operates in conformity with standard medical privacy acts. Patient clinical history logs, prescription maps, treatment updates, and laboratory metrics are stored on secure database systems. 
              </p>
              <p>
                Citicare will share clinical EMR documents exclusively with certified practitioners and private duty nurses who are actively assigned to your care team. No administrative or clinical records will be distributed to outside advertising or marketing networks.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#1e3a8a]">4. Limitation of Clinical Liability</h2>
              <p>
                Citicare enforces strict background screenings, certification audits, and state registration reviews for every nurse, general practitioner, therapist, and specialist on our network. However, all active diagnostic decisions, prescription items, home therapy interventions, and critical healthcare suggestions remain the direct professional, legal, and clinical responsibility of the individual licensed practitioner assigned. 
              </p>
              <p>
                Citicare Integrated Health Solutions Ltd denies any direct or indirect liability for specific clinical outcomes, professional omissions, or treatment results outside of established administrative, booking, and organizational standards.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#1e3a8a]">5. Governing Legislation</h2>
              <p>
                These terms, conditions, privacy guidelines, user actions, and contract agreements are governed by and constructed in accordance with the corporate operational acts, data protection regulations, and health safety statutes of Lagos State and the Federal Republic of Nigeria.
              </p>
              <p>
                Any legal actions, regulatory appeals, or court contentions arising from your use of Citicare services must be formally presented in relevant courts of appropriate jurisdiction.
              </p>
            </div>
          </div>

          <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <span>© 2026 Citicare Integrated Health Solutions Ltd. All rights reserved.</span>
            <div className="flex gap-4">
              <a href="/privacy" className="hover:text-[#1e3a8a] underline transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
