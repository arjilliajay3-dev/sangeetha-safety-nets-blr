"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Home,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  AlertTriangle,
  Lightbulb,
  Award,
} from "lucide-react";
import ContactForm from "@/components/sections/ContactForm";

interface InstallationReport {
  recordNumber: number;
  projectHeading: string;
  projectLocale: string;
  solutionGroup: string;
  projectPhoto: string;
  obstacleOverview: string;
  engineeredRemedy: string;
  verifiedDeliverable: string;
  clientTestimonial?: string;
  authorSignature?: string;
}

const verifiedCaseFiles: InstallationReport[] = [
  {
    recordNumber: 1,
    projectHeading: "High-Altitude Balcony Fall Containment at Prestige Lakeside",
    projectLocale: "Varthur, Whitefield, Bengaluru",
    solutionGroup: "Balcony Safety Nets",
    projectPhoto: "/images/hero/sangeetha-balcony-safety-netting-bangalore.webp",
    obstacleOverview:
      "A 19th-floor apartment had open decorative railings with wide horizontal spacings, posing severe fall hazards for twin toddlers and a family pet.",
    engineeredRemedy:
      "Our technicians anchored high-strength virgin copolymer netting using certified concrete expansion anchors secured at 6-inch centers directly into the load-bearing lintel.",
    verifiedDeliverable:
      "Finished within 3 hours leaving no facade debris. The netting easily resists heavy monsoon wind shear while providing complete toddler fall containment.",
    clientTestimonial:
      "We can finally let our toddlers step onto our high-rise balcony with total reassurance. The work was swift, clean, and rock-solid.",
    authorSignature: "Raghavan & Ananya K., Varthur",
  },
  {
    recordNumber: 2,
    projectHeading: "Unobstructed Skyline Invisible Grills at Koramangala Residences",
    projectLocale: "Koramangala 4th Block, Bengaluru",
    solutionGroup: "Balcony Invisible Grills",
    projectPhoto: "/images/services/sangeetha-luxury-balcony-invisible-grills.webp",
    obstacleOverview:
      "A penthouse homeowner needed child-safe perimeter protection without destroying the 180-degree panoramic skyline views or violating society aesthetic guidelines.",
    engineeredRemedy:
      "Tensioned architectural grade 316 stainless cable strands spaced at 50mm centers within structural powder-coated aluminium tracks.",
    verifiedDeliverable:
      "Each individual line holds over 400kg tensile load force while leaving panoramic sunset views entirely open and unaffected by oxidation.",
    clientTestimonial:
      "The invisible grill cables look remarkably subtle. Our evening sunset panorama remains intact and our grandchildren are completely secure.",
    authorSignature: "Dr. Vikram Sethi, Koramangala",
  },
  {
    recordNumber: 3,
    projectHeading: "Comprehensive Shaft Bird Exclusion Across Gated Community",
    projectLocale: "Indiranagar, Bengaluru",
    solutionGroup: "Duct Area Safety Nets",
    projectPhoto: "/images/main-images/sangeetha-duct-shaft-safety-mesh.webp",
    obstacleOverview:
      "A high-density residential community faced chronic pigeon roosting across 8 vertical plumbing shafts, creating health risks and persistent odor in utility ducts.",
    engineeredRemedy:
      "Rigged heavy-gauge translucent HDPE bird-deterrent mesh from the top parapet level down to the base plinth using rope-access safety rigs.",
    verifiedDeliverable:
      "Permanently stopped bird entry across all 8 building shafts without hindering plumbing pipe inspections or airflow.",
    clientTestimonial:
      "Sangeetha completed this challenging high-altitude project without a single disruption to apartment residents. Outstanding technical execution.",
    authorSignature: "Resident Association Executive, Indiranagar",
  },
  {
    recordNumber: 4,
    projectHeading: "Floor Space Optimization With Overhead Stainless Pulley Hoist",
    projectLocale: "Electronic City Phase 1, Bengaluru",
    solutionGroup: "Ceiling Cloth Hangers",
    projectPhoto: "/images/services/sangeetha-ceiling-cloth-drying-hangers.webp",
    obstacleOverview:
      "A compact utility balcony was obstructed by bulky ground drying racks that prevented passage to the laundry washer and blocked natural light.",
    engineeredRemedy:
      "Installed an independent 6-tube dual-pulley ceiling cloth drying hoist built with 100% rustproof SS304 stainless steel tubing rated for 30kg load capacity.",
    verifiedDeliverable:
      "Recovered 100% of usable floor space. Smooth nylon bearings allow each rod to be lowered to chest level and hoisted to ceiling height with minimal effort.",
    clientTestimonial:
      "Our balcony walkway is completely open now. Heavy blankets dry twice as fast near the ceiling vents.",
    authorSignature: "Manjunath & Rekha S., Electronic City",
  },
  {
    recordNumber: 5,
    projectHeading: "Commercial Facade Pigeon Defense at HSR Technology Park",
    projectLocale: "HSR Layout Sector 2, Bengaluru",
    solutionGroup: "Anti-Bird Spikes",
    projectPhoto: "/images/hero/sangeetha-polycarbonate-bird-spikes.webp",
    obstacleOverview:
      "Pigeons regularly congregated on external window ledges and HVAC conduits, causing unsightly facade staining and hygiene compliance issues.",
    engineeredRemedy:
      "Mounted weather-resistant UV-stabilized polycarbonate base strips with SS304 blunt-tip anti-bird spikes along 600 linear feet of external architectural ledges.",
    verifiedDeliverable:
      "Eliminated bird roosting immediately upon completion without injuring birds or impeding building maintenance operations.",
    clientTestimonial:
      "The stainless bird spikes definitively resolved our multi-year sanitation challenge in a single morning.",
    authorSignature: "Facility Operations Manager, HSR Layout",
  },
];

export default function CaseStudiesClient() {
  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center text-sm font-medium text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#6D1A36] flex items-center gap-1">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <span className="mx-2">/</span>
          <span className="text-[#6D1A36] font-bold">Case Studies &amp; Installations</span>
        </nav>

        {/* Section Header */}
        <div className="text-left max-w-3xl mb-16">
          <span className="text-xs font-black uppercase tracking-widest text-[#6D1A36] bg-[#F6E9EE] border border-[#B9BEC7]/40 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Real Bengaluru Project Case Files
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Proven Engineering in High-Rise Environments
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Review detailed case files of how Sangeetha delivers clean diamond drilling, tension-calibrated SS316 grills, and fall-arrest netting across high-density apartment communities.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-16 mb-20">
          {verifiedCaseFiles.map((study, index) => (
            <motion.div
              key={study.recordNumber}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow grid grid-cols-1 lg:grid-cols-12"
            >
              {/* Image Side */}
              <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full bg-slate-100">
                <Image
                  src={study.projectPhoto}
                  alt={study.projectHeading}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  quality={80}
                />
                <div className="absolute top-4 left-4 bg-[#6D1A36] text-white text-xs font-black px-3 py-1.5 rounded-full shadow-md">
                  {study.solutionGroup}
                </div>
              </div>

              {/* Text Side */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-2">
                    <MapPin className="w-4 h-4 text-[#8A2F4D]" />
                    <span>{study.projectLocale}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 leading-snug">
                    {study.projectHeading}
                  </h2>

                  <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                        <AlertTriangle className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-slate-800 font-bold block">Structural Challenge:</strong>
                        <span>{study.obstacleOverview}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Lightbulb className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-slate-800 font-bold block">Engineered Solution:</strong>
                        <span>{study.engineeredRemedy}</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-slate-800 font-bold block">Verified Outcome:</strong>
                        <span>{study.verifiedDeliverable}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {study.clientTestimonial && (
                  <div className="mt-6 pt-6 border-t border-slate-100 bg-[#F8FAFC] -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 p-6 sm:p-8">
                    <p className="text-xs sm:text-sm italic text-slate-700 mb-2 font-medium">
                      &ldquo;{study.clientTestimonial}&rdquo;
                    </p>
                    <span className="text-xs font-bold text-[#6D1A36] block">
                      — {study.authorSignature}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <ContactForm />
      </div>
    </div>
  );
}
