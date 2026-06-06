import { ArrowLeft } from 'lucide-react';

export default function Privacy() {
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
              Privacy Policy
            </h1>
            <p className="text-slate-500 text-sm mt-3 font-medium">
              Effective Date: May 19, 2026 | Last Updated: June 5, 2026
            </p>
          </div>

          <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
            <p>
              The Citicare Integrated Health Solutions Ltd website, at www.citicarehealth.com ("Website"), is owned and operated by Citicare Integrated Health Solutions Ltd ("Citicare", "we", "us", or "our"). Citicare wants you to be familiar with how we collect, use, and disclose information offline and through our websites, mobile applications, or patient portals.
            </p>
            <p>
              By accessing, browsing, or using our websites or portal services, you agree to the terms of this Privacy Policy, including the collection, use, and disclosure of information as described in this document. Citicare does not knowingly sell personal information of any kind.
            </p>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#1e3a8a]">Security & Links</h2>
              <p>
                At Citicare, we care about your security and monitor access to our patient clinical databases and systems. We adopt industry-standard encryption protocols, secure logins, and role-based clearance rules for all clinical practitioners to shield medical records. However, you should understand that no company, including Citicare, can fully eliminate security risks online.
              </p>
              <p>
                Our services or website pages may contain links to physical clinical facilities, testing laboratories, or resources that are not operated by Citicare. You may be asked by these third parties to provide personal, billing, or diagnostic information. We are not responsible for the privacy practices of those independent operators, and we recommend that you inspect their direct privacy statements.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#1e3a8a]">1. Information We Collect</h2>
              <p>
                We collect administrative and registration information necessary to establish secure patient accounts, answer questions, plan homecare visits, and coordinate treatments. This includes your name, primary email address, telephone contacts, billing address, and home delivery location details.
              </p>
              <p>
                We also collect necessary electronic medical parameters to coordinate clinical and nursing services safely. This includes historic medical charts, prescription lists, primary diagnoses, doctor notes, therapist visit notes, and companion care logs.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#1e3a8a]">2. Use of Medical Records (EMR)</h2>
              <p>
                We process your clinical data, physiological indicators, and medical histories securely within our Electronic Medical Records (EMR) portal. This sensitive clinical documentation is accessed only by the specific board-certified specialists, general practitioners, or clinical duty staff assigned to coordinate your active care plans.
              </p>
              <p>
                Citicare will never lease, sell, distribute, or exchange patient diagnostics, prescription details, or EMR data to pharmaceutical retailers, tracking systems, or external marketing networks.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#1e3a8a]">3. Cookies & Web Analytics</h2>
              <p>
                We utilize minimal functional web cookies to support secure portal sessions, remember login preferences, and analyze basic traffic volumes to optimize our server performance.
              </p>
              <p>
                No clinical details, medication regimes, diagnostic outcomes, or personal medical parameters are shared with external advertising cookies, pixel trackers, or social media tracking systems.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[#1e3a8a]">4. Patient Privacy Rights</h2>
              <p>
                Under established health and clinical data privacy acts, registered patients hold fundamental rights in relation to their stored medical information:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li><strong>Right to Review and Export:</strong> You can download or print complete clinical EMR history documents directly from your user portal.</li>
                <li><strong>Right to Amend:</strong> You can request corrections to administrative details, wrong locations, or contact errors.</li>
                <li><strong>Right to Deletion:</strong> You have the absolute right to request decommissioning of your account and erasure of records in accordance with standard medical data retention policies.</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <span>© 2026 Citicare Integrated Health Solutions Ltd. All rights reserved.</span>
            <div className="flex gap-4">
              <a href="/terms" className="hover:text-[#1e3a8a] underline transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
