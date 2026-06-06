import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ChevronRight, Phone, Calendar, Heart, ShieldCheck } from 'lucide-react';
import { Button } from '../components/ui/button';

interface ServiceDetail {
  slug: string;
  title: string;
  image: string;
  introduction: string;
  interventions: string[];
  patientProfile: string;
}

const serviceDetails: Record<string, ServiceDetail> = {
  "skilled-nursing": {
    slug: "skilled-nursing",
    title: "Skilled Nursing Care",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200",
    introduction: "Professional clinical nursing support provided under standardized medical physician directives. Our registered nurses are licensed and fully vetted to coordinate complex clinical treatments, care for chronic illnesses, and oversee general healthcare status inside private residences.",
    interventions: [
      "Standard vital signs diagnostic monitoring & EMR cataloging",
      "Sterile wound dressings, surgical incision care, and stitch removal",
      "In-home IV infusion therapies and specialized physician-guided injections",
      "Comprehensive catheter care, enterostomy, and tracheostomy maintenance"
    ],
    patientProfile: "Created for individuals recovering from multi-stage hospital operations, living with chronic respiratory or endocrine syndromes, or requiring active clinical supervision."
  },
  "post-op-recovery": {
    slug: "post-op-recovery",
    title: "Post-Operative Recovery",
    image: "https://images.unsplash.com/photo-1542884748-2b87b36c6b90?auto=format&fit=crop&q=80&w=1200",
    introduction: "Dedicated post-surgical home assistance to ensure a safe, clean, and complete transition from hospital discharge to metabolic stability. We coordinate directly with your surgery team to implement standardized recovery checkpoints.",
    interventions: [
      "Continuous surgical incision and healing tracker audits",
      "Controlled physical mobility guidance to prevent deep vein thrombosis",
      "Clinical pain management monitoring and pharmacy compliance audits",
      "Assistance with sterile suture checks and physical rehabilitation integration"
    ],
    patientProfile: "Best suited for individuals returning home following orthopedic procedures, general surgery, OB/GYN surgery, or cardiovascular intervention."
  },
  "elderly-companion": {
    slug: "elderly-companion",
    title: "Elderly Companion Care",
    image: "https://images.unsplash.com/photo-1581579438747-1dc8d1e0ca96?auto=format&fit=crop&q=80&w=1200",
    introduction: "Compassionate, structured and professional companion support for seniors. We assist with daily operations, nutrition tracking, and warm mental engagement to ensure older adults remain safe and independent in their comfortable surroundings.",
    interventions: [
      "Assistance with activities of daily living (ADLs) and personal mobility",
      "Nutritious preparation of clinical dietary plans and meal prep audits",
      "Cognitive engagement, active conversation, reading, and mental wellness exercise",
      "Accompaniment to medical follow-up visits, routine walks, and pharmacy collections"
    ],
    patientProfile: "Created for senior citizens wishing to remain independent but requiring helper support to maintain high standards of safety and daily nutrition."
  },
  "physiotherapy": {
    slug: "physiotherapy",
    title: "Physiotherapy",
    image: "https://images.unsplash.com/photo-1576091159399-a37f8842a96a?auto=format&fit=crop&q=80&w=1200",
    introduction: "Professional physical rehabilitation administered by specialized orthopedic physical therapists at home. We evaluate joint integrity, general balance, and muscle strength to apply tailored recovery pathways, returning patients to daily function.",
    interventions: [
      "Targeted joint range of motion restoration and flexibility auditing",
      "Neuromuscular re-education, movement safety, and gait training",
      "Skeletal re-strengthening and post-fracture physical therapy",
      "Specialized recovery programs for joint replacement and stroke recovery"
    ],
    patientProfile: "For physical stroke survivors, orthopedic joint replacement patients, athletes recovering from bone or ligament traumas, or seniors facing balance difficulties."
  },
  "psychiatric-home-support": {
    slug: "psychiatric-home-support",
    title: "Psychiatric Home Support",
    image: "https://images.unsplash.com/photo-1527137341206-1a2ab818e301?auto=format&fit=crop&q=80&w=1200",
    introduction: "Specialized mental health assistance conducted in home settings. Our mental health professionals and nurses provide therapeutic guidance, behavioral safety support, and medication checks to help patients regain emotional wellness.",
    interventions: [
      "Psychiatric treatment compliance tracking and prescription audit",
      "Cognitive exercises and localized behavioral guidance",
      "Crisis risk reviews, family counseling, and de-escalation layouts",
      "Styling of sensory and behavioral relaxation spaces within the home"
    ],
    patientProfile: "Designed for individuals living with progressive dementia, severe depression, persistent anxiety states, or transitioning home after specialized clinical care."
  },
  "medication-management": {
    slug: "medication-management",
    title: "Medication Management",
    image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=1200",
    introduction: "Expert pharmaceutical curation and safety protocols to ensure patients adhere strictly to their physician-approved medication schedules, avoiding errors and drug-to-drug interactions.",
    interventions: [
      "Comprehensive digital mapping of all active prescriptions and supplements",
      "Controlled pill scheduling and automated daily dosage tracking",
      "Monitoring for adverse pharmaceutical side-effects or allergic responses",
      "Vital sign reviews before and after critical dosing adjustments"
    ],
    patientProfile: "Vital for chronic disease patients managing extensive daily pill lists, elderly individuals with cognitive slip concerns, or post-operative patients on transient medications."
  },
  "wound-care": {
    slug: "wound-care",
    title: "Wound Care Services",
    image: "https://images.unsplash.com/photo-1584515901407-d8f4bc47f2e6?auto=format&fit=crop&q=80&w=1200",
    introduction: "Highly sterile, wound-certified clinical care designed to support skin healing, combat dangerous bacterial infections, and promote physical tissue recovery after injury or operation.",
    interventions: [
      "Surgical site dressing changes using advanced clinical dressings",
      "Specialized care for diabetic ulcers and chronic pressure lesions",
      "Debridement consultation and routine bacterial monitoring",
      "Infection-control checks and digital visual healing metrics logging"
    ],
    patientProfile: "Critical for postoperative patients with healing incisions, high-risk diabetic patients with lower extremity lesions, or disabled individuals with pressure sores."
  },
  "lab-sample-collection": {
    slug: "lab-sample-collection",
    title: "Lab Sample Collection",
    image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1200",
    introduction: "Convenient, sterile phlebotomy and diagnostic collection conducted cleanly inside your home. We preserve cold-chain security to deliver samples straight to accredited diagnostics labs.",
    interventions: [
      "Aseptic phlebotomy (blood draws) and diagnostic swab gatherings",
      "Secure preservation of specimens following precise medical collection standards",
      "Rapid transportation to top-tier verified lab structures",
      "Slick, direct digital delivery of lab results into EMR files"
    ],
    patientProfile: "Created for chronic patients requiring repetitive blood monitoring, senior citizens with limited transport, or patients seeking outpatient convenience."
  },
  "palliative-care": {
    slug: "palliative-care",
    title: "Palliative Care",
    image: "https://images.unsplash.com/photo-1505587042766-73d2a0fae44a?auto=format&fit=crop&q=80&w=1200",
    introduction: "Symptom mitigation and expert pain relief focused on maximizing comfort, physical dignity, and peace of mind. We walk alongside primary clinical teams to optimize comfort.",
    interventions: [
      "Systematic administration of physician-ordered paint-management schemes",
      "Therapies focused strictly on physical comfort for severe illnesses",
      "Emotional counseling, family respite, and compassionate homepresence",
      "Symptom tracking, oxygen coordination, and comfort equipment setup"
    ],
    patientProfile: "Designed to provide maximum comfort to patient profiles managing progressive oncology issues, advanced organ failure, or final stage neurological declines."
  }
};

export default function HomeHealthcareDetail() {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  
  const detail = serviceSlug ? serviceDetails[serviceSlug] : null;

  if (!detail) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold text-[#1e3a8a] mb-2">Service Not Found</h2>
        <p className="text-slate-500 mb-6">The requested home healthcare service could not be located.</p>
        <Link to="/home-healthcare" className="text-emerald-600 hover:text-emerald-700 font-bold flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to Home Healthcare
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* Premium Hero Banner */}
      <section className="relative bg-[#1e293b] text-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={detail.image} 
            alt={detail.title} 
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent" />
        </div>

        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20 relative z-10">
          <Link 
            to="/home-healthcare" 
            className="inline-flex items-center gap-2 text-white/75 hover:text-white font-medium text-xs mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Home Healthcare Services
          </Link>

          <div className="max-w-2xl space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#1e3a8a] text-blue-200 uppercase tracking-widest">
              Clinical Domiciliary Care
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold tracking-tight text-white mb-2 leading-tight">
              {detail.title}
            </h1>
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed tracking-wide">
              {detail.introduction}
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative Block */}
      <section className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Detailed Specifications Left */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-10 rounded-2xl border border-slate-100 shadow-sm space-y-10">
            
            {/* Guarantee Badge */}
            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100 flex gap-4 items-start">
              <div className="h-10 w-10 shrink-0 rounded-xl bg-emerald-600 text-white flex items-center justify-center">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="space-y-1 text-xs">
                <h4 className="font-extrabold text-slate-800 text-sm">Professional Quality Standard</h4>
                <p className="text-slate-600 leading-relaxed font-medium">
                  We deploy only registered and vetted clinical specialists and caregivers, carrying active state registrations, strict background clearances, and premium professional training audits.
                </p>
              </div>
            </div>

            {/* Structured Medical Clinical Interventions */}
            <div className="space-y-5">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">Primary Care Interventions</h3>
              <div className="grid gap-3">
                {detail.interventions.map((intervention, index) => (
                  <div key={index} className="flex gap-3 items-start bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                    <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">{intervention}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Patient Profile */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="text-xl font-bold text-slate-900">Suitable Patient Profiles</h3>
              <p className="text-slate-600 text-sm leading-relaxed p-5 bg-slate-50 rounded-xl border border-slate-100 font-medium">
                {detail.patientProfile}
              </p>
            </div>

          </div>

          {/* Booking & FAQ Card Right Sticky */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#1e3a8a] text-white p-6 rounded-2xl shadow-xl space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#60a5fa] block">Book Service</span>
                <h4 className="text-xl font-bold text-white">Coordinate Your Care</h4>
                <p className="text-xs text-white/75 leading-relaxed font-medium">
                  Schedule an in-home assessment with our specialized care coordinators to outline your dynamic treatment map.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <Button
                  nativeButton={false}
                  render={<Link to={`/book?nursingService=${encodeURIComponent(detail.title)}`} />}
                  className="w-full bg-[#10b981] hover:bg-emerald-500 text-white rounded-xl h-12 font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-colors"
                >
                  <Calendar className="h-4 w-4" /> Schedule Outpatient Service
                </Button>
                <a 
                  href="tel:+2348119868201"
                  className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl h-12 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="h-4 w-4" /> Call Care Coordinator
                </a>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
              <h4 className="font-bold text-slate-800 text-sm uppercase tracking-wider">Clinical Enquiries</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">
                Need details regarding specific insurance coverage, payment cycles, or therapist rosters? Our clinical coordinators are here to assist.
              </p>
              <div className="flex flex-col gap-2 pt-2">
                <Link
                  to="/contact"
                  className="w-full text-center bg-slate-50 hover:bg-slate-100 text-slate-700 py-2.5 rounded-xl text-xs font-bold border border-slate-100 transition-colors block"
                >
                  Contact Help Desk
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
