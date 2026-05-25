import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Heart, Brain, Scissors, Baby, Activity, Stethoscope, 
  Sparkles, Apple, ShieldCheck, ArrowLeft, Star, Calendar, Clock, Award
} from 'lucide-react';
import { Button } from '../components/ui/button';

interface SpecialtyInfo {
  name: string;
  icon: any;
  leadDoc: string;
  specialistTitle: string;
  color: string;
  bgGrad: string;
  longDesc: string;
  conditions: string[];
  procedures: string[];
  features: string[];
  stats: { value: string; label: string }[];
}

const specialtyData: Record<string, SpecialtyInfo> = {
  cardiology: {
    name: "Cardiology",
    icon: Heart,
    leadDoc: "Dr. Paul Adebayo, FACC",
    specialistTitle: "Consultant Cardiologist",
    color: "text-red-600 bg-red-50",
    bgGrad: "from-red-500/10 to-transparent",
    longDesc: "Expert cardiac management providing preventative heart screening, cardiovascular disorder diagnostics, and therapeutic cardiology plans. Our heart checkups employ clinical telemetry for robust diagnostics.",
    conditions: ["Hypertension (High Blood Pressure)", "Coronary Artery Disease", "Heart Arrhythmia & Palpitations", "Congestive Heart Failure Balance", "Cardiovascular Risk Assessments"],
    procedures: ["Electrocardiogram (ECG) Analysis", "Echocardiography (Heart Scan)", "Holter Monitoring (24h telemetry)", "Pre-operative Cardiac Clearance", "Hypertension Management Protocols"],
    features: ["Digital telemetry capture synced with your EMR profile", "Urgent cardiac consultant priority reviews within 4 hours", "Tailored cardiovascular dietary and exercise prescription plans"],
    stats: [{ value: "15min", label: "ECG Turnaround" }, { value: "12,000+", label: "Screens Completed" }]
  },
  "mental-health": {
    name: "Mental Health",
    icon: Brain,
    leadDoc: "Dr. Elizabeth Nwosu, FWACP",
    specialistTitle: "Consultant Psychiatrist & Therapist",
    color: "text-indigo-600 bg-indigo-50",
    bgGrad: "from-indigo-500/10 to-transparent",
    longDesc: "Empathetic, holistic psychiatric treatment and cognitive therapy. We address anxiety, depression, clinical distress, and neuropsychiatric support with the utmost privacy and confidentiality.",
    conditions: ["Clinical Anxiety & Panic Attacks", "Major Depressive Disorders", "Post-Traumatic Stress (PTSD)", "Bipolar & Mood Instabilities", "Stress Burnout & Grief Counseling"],
    procedures: ["Diagnostic Psychiatric Evaluations", "Long-term Medication Management", "Cognitive Behavioral Therapy (CBT)", "Mindfulness-Based Stress Assessment", "Crisis Support & Supportive Counseling"],
    features: ["Fully confidential digital sessions with secure double-encryption", "Coordinated medication logs integrated directly with your profile", "24/7 post-assessment therapeutic hotline support access"],
    stats: [{ value: "100%", label: "Confidentiality" }, { value: "3,500+", label: "Sessions Held" }]
  },
  "general-surgery": {
    name: "General Surgery",
    icon: Scissors,
    leadDoc: "Prof. Joseph Okocha, FRCS",
    specialistTitle: "Senior Consultant Surgeon",
    color: "text-slate-700 bg-slate-100",
    bgGrad: "from-slate-500/10 to-transparent",
    longDesc: "Pre-surgical evaluations, post-surgical rehabilitation guidelines, and expert referrals. Our general surgery desk guides you cleanly through clinical workflows for major and minor surgical recovery.",
    conditions: ["Abdominal Hernias", "Gallstones & Appendicitis", "Soft Tissue Biopsies & Swellings", "Post-Surgical Wound Rehabilitation", "Chronic Wound Assessment"],
    procedures: ["Pre-operative Clinical Clearance", "Minor Excision Procedures", "Post-operative Dressing & Wound Review", "Surgical Advisory & Diagnostics Reviews", "Secondary Surgical Opinions"],
    features: ["Dedicated post-surgical recovery coordination nurses", "In-home wound redressing and telehealth suture inspections", "Streamlined admissions partnership with leading surgical clinics"],
    stats: [{ value: "0%", label: "Infection Metric" }, { value: "800+", label: "Wounds Cleared" }]
  },
  "ob-gyn": {
    name: "OB/GYN",
    icon: Baby,
    leadDoc: "Dr. Chioma Ajayi, FWACS",
    specialistTitle: "Consultant Obstetrician & Gynecologist",
    color: "text-pink-600 bg-pink-50",
    bgGrad: "from-pink-500/10 to-transparent",
    longDesc: "Dedicated women's health assessments. From family planning, reproductive endocrinology, and prenatal checkups to maternal guides, we maintain full-spectrum care throughout every stage of life.",
    conditions: ["Prenatal & High-Risk Pregnancy Management", "Polycystic Ovary Syndrome (PCOS)", "Hormonal Dysregulation & Menopause", "Pelvic Pain & Infection Management", "Infertility Diagnostics Guidance"],
    procedures: ["Prenatal Scan Interpretation", "Family Planning & Contraceptive Counselling", "Cervical Cancer Risk Screening Guidance", "Antenatal Health Coaching", "Gynecological Hormone Profiling"],
    features: ["At-home prenatal nursing helpers and postpartum doulas", "Comprehensive baby milestone tracker synced to parental portal", "Discreet virtual consulting with leading female clinicians"],
    stats: [{ value: "24/7", label: "Delivery Line" }, { value: "4,200+", label: "Mothers Guided" }]
  },
  orthopedics: {
    name: "Orthopedics",
    icon: Activity,
    leadDoc: "Dr. Ibrahim Musa, FMCOrtho",
    specialistTitle: "Consultant Orthopedic Surgeon",
    color: "text-emerald-600 bg-emerald-50",
    bgGrad: "from-emerald-500/10 to-transparent",
    longDesc: "Restoring physical capacity, athletic stability, and skeletal mobility. We offer professional diagnostics and physical treatment guides for bone fractures, degenerative joint pain, and nerve damage.",
    conditions: ["Knee, Hip & Joint Osteoarthritis", "Sports Tissue Injuries (Ligament/Tendon)", "Lower Back Pain & Sciatica Spine Care", "Fracture Recovery & Immobilization Guides", "Repetitive Strain & Carpal Tunnel Syndrome"],
    procedures: ["Mobility & Range of Motion Audits", "Joint Injection Guidance & Advisory", "Personalized Physiotherapy Protocols", "Post-Fracture Skeletal Rehabilitation", "Bone Density Scan Assessments"],
    features: ["Coordinated sports physical therapist home allocations", "Progressive kinetic rehabilitation tracking inside patient portal", "Joint preservation dietary and supplementation programs"],
    stats: [{ value: "95%", label: "Mobility Recovery" }, { value: "1,500+", label: "Athletes Treated" }]
  },
  urology: {
    name: "Urology",
    icon: Stethoscope,
    leadDoc: "Dr. Samuel Obi, FRCS (Urol)",
    specialistTitle: "Consultant Urologist",
    color: "text-blue-600 bg-blue-50",
    bgGrad: "from-blue-500/10 to-transparent",
    longDesc: "Discreet diagnostic support and clinical healthcare regarding male urinary, bladder, and prostate health conditions, as well as female urinary tract diagnostics.",
    conditions: ["Benign Prostatic Hyperplasia (BPH)", "Kidney & Bladder Calculi (Stones)", "Recurrent Urinary Tract Infections (UTIs)", "Prostate Cancer Preventive Screening", "Male Reproductive Health Assessments"],
    procedures: ["Urological Diagnostic Reviews", "Kidney Stone Prevention Dietary Management", "PSA (Prostate Specific Antigen) Lab Screening", "Incontinence Management Plans", "Post-procedural Catheter Care Support"],
    features: ["Discreet home assistance with certified urology helpers", "Rapid digital lab ordering for urinary cultures with same-day logs", "Confidential clinical guidance on reproductive healthcare"],
    stats: [{ value: "2 Hours", label: "Lab Turnaround" }, { value: "900+", label: "PSA Evaluated" }]
  },
  "general-practice": {
    name: "General Practice",
    icon: Stethoscope,
    leadDoc: "Dr. Toyin Lawal, MBBS, MPH",
    specialistTitle: "Director of General Medicine",
    color: "text-teal-600 bg-teal-50",
    bgGrad: "from-teal-500/10 to-transparent",
    longDesc: "Full-spectrum family medicine, preventative wellness checks, chronic illness monitoring, and general physical checkups. Our general practice team operates as your primary hub for sustained health.",
    conditions: ["Malaria, Typhoid & Common Tropical Fevers", "Seasonal Allergies, Asthma & Bronchitis", "General Physical Exhaustion & Fatigue", "Chronic Disease Monitoring (Diabetes, BPs)", "Routine Preventive Health Screens"],
    procedures: ["Full-Body Clinical Health Audits", "Custom Preventative Wellness Cockpits", "Routine Lab Blood Screen Panels", "Lifestyle & Dietary Habit Optimization", "General Immunization Schedules"],
    features: ["Direct 1-on-1 access to your dedicated Citicare GP via text", "Easy prescription refills automatically logged in local EMR", "Immediate specialty referrals without long hospital delays"],
    stats: [{ value: "15min", label: "Typical Wait" }, { value: "25,000+", label: "Patients Guided" }]
  },
  endocrinology: {
    name: "Endocrinology",
    icon: Activity,
    leadDoc: "Dr. Kemi Balogun, FACE",
    specialistTitle: "Consultant Endocrinologist",
    color: "text-amber-600 bg-amber-50",
    bgGrad: "from-amber-500/10 to-transparent",
    longDesc: "Advanced hormonal management, diabetes control protocols, thyroid management, obesity support, and endocrine metabolic balancing for sustained physiological wellness.",
    conditions: ["Type 1 & Type 2 Diabetes Mellitus", "Hypothyroidism & Hyperthyroidism", "Adrenal & Pituitary Dysfunction", "Polycystic Endocrine Profiles", "Metabolic Syndrome & Dyslipidemia"],
    procedures: ["Continuous Glucose Monitoring (CGM) Review", "Thyroid Nodule Palpation & Scans Guided", "Insulin Sensitivity Optimization Guide", "Comprehensive Hormone Screen Panels", "Weight Balance Pharmacotherapy Review"],
    features: ["At-home clinical diabetic coaching and nurse home checkups", "Automatic dynamic glucose log analytics synced with EMR database", "Individualized endocrinology nutrition and meal plan guides"],
    stats: [{ value: "8.5%", label: "Average HbA1c drop" }, { value: "1,800+", label: "Diabetics Balanced" }]
  },
  "plastic-surgery": {
    name: "Plastic Surgery",
    icon: Sparkles,
    leadDoc: "Dr. Babatunde Sanwo, MBA, FRCS (Plast)",
    specialistTitle: "Consultant Reconstructive & Plastic Surgeon",
    color: "text-purple-600 bg-purple-50",
    bgGrad: "from-purple-500/10 to-transparent",
    longDesc: "Expert clinical consults on aesthetic treatments, surgical reconstruction advice, scar minimization, post-burn soft-tissue rehabilitation, and advanced medical wellness procedures.",
    conditions: ["Severe Burn Scars & Contractures", "Cleft Lip & Palate Post-Repair Guides", "Post-Oncology Breast Reconstructive Advice", "Facial Trauma & Facial Soft Tissue Audits", "Aesthetic Enhancement Medical Consultation"],
    procedures: ["Surgical Suture Strategy & Scar Review", "Wound Healing Velocity Assessments", "Post-surgical Reconstructive Monitoring", "Advanced Tissue Expansion Consultation", "Aesthetic Balance Diagnostics Reviews"],
    features: ["Post-surgical soft tissue treatment specialists sent to you", "Private visual progress logging utilizing encrypted imaging", "Collaborative coordination with leading operative theater clinics"],
    stats: [{ value: "100%", label: "Surgical Integrity" }, { value: "620+", label: "Consults Handled" }]
  },
  nutritionist: {
    name: "Nutritionist & Dietetics",
    icon: Apple,
    leadDoc: "Sandra Adeyemi, RD, MSc",
    specialistTitle: "Senior Consultant Clinical Dietitian",
    color: "text-orange-600 bg-orange-50",
    bgGrad: "from-orange-500/10 to-transparent",
    longDesc: "Sustaining clinical and performance health through evidence-led nutrition. We focus on weight loss strategies, diabetic dietetics, specialized sports supplementation guidelines, and healthy eating therapy.",
    conditions: ["Clinical Obesity & Weight Anomalies", "Hypertensive & Cardiac Meal Constraints", "Gastrointestinal Dysfunctions (IBS, Acid)", "Severe Nutrient Deficiencies & Anemia", "Athletic High-Performance Nutrition Needs"],
    procedures: ["Body Composition Bio-Analysis (InBody)", "Metabolic Rate Assessments (BMR)", "Customized Clinical Meal Preparation Calendars", "Food Intolerance Diagnostics Reviews", "Daily Caloric & Macronutrient Budgets"],
    features: ["Weekly tailored shopping list logs and recipe cards", "Direct lifestyle chat follow-ups with your personal dietitian", "Coordination with medical doctors on physiological EMR blood metrics"],
    stats: [{ value: "12 lbs", label: "Average Healthy Drop" }, { value: "3,100+", label: "Meals Programmed" }]
  }
};

export default function SpecialtyDetail() {
  const { specialtySlug } = useParams<{ specialtySlug: string }>();
  const slug = (specialtySlug || '').toLowerCase();
  const info = specialtyData[slug];

  if (!info) {
    return (
      <div className="min-h-screen flex items-center justify-center p-5 bg-slate-50">
        <div className="text-center max-w-md space-y-4">
          <div className="h-14 w-14 bg-red-100 rounded-full flex items-center justify-center mx-auto text-red-600">
            <Stethoscope className="h-7 w-7" />
          </div>
          <h2 className="text-2xl font-bold text-slate-800">Specialty Path Not Found</h2>
          <p className="text-slate-500 text-sm">We could not locate this health expertise. Please return to the Specialist section to explore other departments.</p>
          <Button nativeButton={false} render={<Link to="/specialist-care" />} className="bg-[#1e3a8a] text-white rounded-xl">
            Return to Specialist Care
          </Button>
        </div>
      </div>
    );
  }

  const Icon = info.icon;

  return (
    <div className="min-h-screen bg-slate-50/50">
      {/* department header */}
      <section className="relative py-16 lg:py-24 overflow-hidden bg-white border-b border-slate-100">
        <div className={`absolute inset-0 bg-gradient-to-r ${info.bgGrad} -z-10`} />
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20">
          <Link 
            to="/specialist-care" 
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-blue-600 font-semibold mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Specialists
          </Link>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* title / lead info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 bg-blue-50 px-3.5 py-1.5 rounded-full text-blue-600 font-semibold text-xs uppercase tracking-wider">
                <Icon className="h-4 w-4" />
                Specialist Department
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1e3a8a] leading-tight">
                {info.name} <span className="text-blue-600">Department</span>
              </h1>
              <p className="text-base lg:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {info.longDesc}
              </p>

              {/* doctor card in header */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex items-center gap-4 max-w-md">
                <div className={`h-12 w-12 rounded-xl ${info.color} flex items-center justify-center font-bold text-lg`}>
                  {info.leadDoc.split(' ').pop()?.charAt(0) || <Award className="h-5 w-5" />}
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">Clinical Lead</div>
                  <div className="font-bold text-[#1e3a8a] text-base">{info.leadDoc}</div>
                  <div className="text-xs font-semibold text-blue-600">{info.specialistTitle}</div>
                </div>
              </div>
            </div>

            {/* quick numbers column */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              {info.stats.map((stat, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                  <div className="text-3xl lg:text-4xl font-extrabold text-[#1e3a8a] mb-2">{stat.value}</div>
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
              <div className="col-span-2 bg-gradient-to-br from-[#1e3a8a] to-blue-700 text-white p-6 rounded-2xl shadow-md flex items-center justify-between">
                <div className="space-y-1">
                  <div className="text-xs text-blue-200 font-semibold uppercase tracking-wider">Ready to connect?</div>
                  <div className="font-bold text-lg">Instant Care Allocation</div>
                </div>
                <Button 
                  nativeButton={false}
                  render={<Link to={`/book?specialty=${info.name}`} />}
                  className="bg-white text-[#1e3a8a] hover:bg-white/90 rounded-xl px-5 h-11 text-xs uppercase tracking-wider font-bold"
                >
                  Book Slot
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* service deep details blocks */}
      <section className="py-16">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-20 grid lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* conditions and procedures */}
          <div className="lg:col-span-7 space-y-10">
            {/* treatable conditions */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6">
              <h3 className="text-2xl font-bold text-[#1e3a8a]">Common Conditions Managed</h3>
              <p className="text-slate-500 text-sm">We deliver diagnostics, management, and continuous therapies for several high-frequency health states:</p>
              <div className="grid sm:grid-cols-2 gap-3.5">
                {info.conditions.map((cond, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <span className="h-5 w-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✓</span>
                    <span className="text-slate-700 text-sm font-medium">{cond}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* common clinical procedures */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6">
              <h3 className="text-2xl font-bold text-[#1e3a8a]">Diagnostic Procedures & Therapies</h3>
              <p className="text-slate-500 text-sm">Our expert doctors perform and leverage continuous treatment diagnostics to preserve client health levels:</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {info.procedures.map((proc, index) => (
                  <div key={index} className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex gap-3.5 items-start">
                    <div className="h-2 w-2 rounded-full bg-blue-600 shrink-0 mt-2" />
                    <span className="text-slate-800 text-sm font-semibold">{proc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* right support feature card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm space-y-6 sticky top-32">
              <h3 className="text-xl font-bold text-[#1e3a8a]">The Citicare Advantage</h3>
              <p className="text-slate-500 text-sm">Each department is directly synchronized with modern cloud metrics for continuous, zero-hassle operations:</p>
              <div className="space-y-4">
                {info.features.map((feat, index) => (
                  <div key={index} className="flex gap-3.5 items-start bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                    <ShieldCheck className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-slate-600 text-xs leading-relaxed">{feat}</p>
                  </div>
                ))}
              </div>

              {/* side check indicators */}
              <div className="pt-6 border-t border-slate-100 space-y-3.5">
                <div className="flex items-center gap-3 text-xs text-slate-500 font-semibold">
                  <Calendar className="h-4 w-4 text-blue-600" />
                  <span>Comprehensive Telehealth & In-Home Followups</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-500 font-semibold">
                  <Clock className="h-4 w-4 text-blue-600" />
                  <span>Immediate Medical Coordination Assistant support</span>
                </div>
              </div>

              {/* large CTA Booking trigger */}
              <Button 
                nativeButton={false}
                render={<Link to={`/book?specialty=${info.name}`} />}
                size="lg"
                className="w-full bg-[#1e3a8a] text-white rounded-xl shadow-lg mt-4 h-12 font-bold uppercase tracking-wider text-xs"
              >
                Schedule Consultation
              </Button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
