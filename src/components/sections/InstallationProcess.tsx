"use client";

import { motion } from "framer-motion";
import { Ruler, FileSpreadsheet, Drill, ShieldCheck, Sparkles } from "lucide-react";
import { claimsConfig } from "@/data/claims";

interface Step {
  id: number;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
}

const steps: Step[] = [
  {
    id: 1,
    icon: <Ruler className="w-6 h-6 text-[#FFFFFF]" />,
    title: "1. Laser Measurement",
    subtitle: "Precision Beam & Substrate Inspection",
    description: "Our in-house riggers visit your property with digital optical distance meters, surveying concrete slab depth, parapet angles, and presenting tactile cable & netting samples.",
  },
  {
    id: 2,
    icon: <FileSpreadsheet className="w-6 h-6 text-[#FFFFFF]" />,
    title: "2. Itemized Quote",
    subtitle: "Transparent Line-Item Proposal",
    description: "You receive a clear written breakdown detailing genuine SS316 wire or virgin polymer mesh, mounting tracks, high-elevation rigging, and cleanup. Zero hidden fees.",
  },
  {
    id: 3,
    icon: <Drill className="w-6 h-6 text-[#FFFFFF]" />,
    title: "3. Dustless Rigging",
    subtitle: "Vibration-Controlled Diamond Drilling",
    description: "Equipped with rotary diamond-tipped core bits and HEPA vacuum capture, our crew mounts anchor fasteners flush into masonry without cracking plaster or scattering concrete dust.",
  },
  {
    id: 4,
    icon: <ShieldCheck className="w-6 h-6 text-[#FFFFFF]" />,
    title: "4. Load & Tension Check",
    subtitle: "Mechanical Verification & Warranty Handover",
    description: `Each perimeter cable and mesh anchor is subjected to pull-gauge tension testing to guarantee load stability, followed by issuing your official ${claimsConfig.warrantyDisplay} card.`,
  },
];

export default function InstallationProcess() {
  return (
    <section className="bg-white py-24 scroll-mt-12" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 flex flex-col gap-3">
          <span className="text-xs font-black uppercase tracking-widest text-[#6D1A36] bg-[#F6E9EE] border border-[#B9BEC7]/40 px-4 py-1.5 rounded-full inline-block self-center shadow-xs">
            <Sparkles className="w-3.5 h-3.5 inline mr-1 text-[#8A2F4D]" />
            Signature 4-Stage Protocol
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2F2F33] tracking-tight leading-tight">
            Our 4-Stage Precision Installation Workflow
          </h2>
          <p className="text-[#5A5A62] text-sm leading-relaxed">
            From calibrated laser measuring to dustless diamond drilling and mechanical load verification, here is how Sangeetha delivers flawless structural safety for Bengaluru residences.
          </p>
        </div>

        {/* Steps Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[32px] left-[12%] right-[12%] h-0.5 bg-[#B9BEC7]/40 -z-0 rounded-full"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-center text-center group relative z-10"
            >
              {/* Step Circle */}
              <div className="w-16 h-16 rounded-2xl bg-[#6D1A36] group-hover:bg-[#8A2F4D] text-white flex items-center justify-center shadow-lg transition-colors duration-300 mb-6 shrink-0 relative border border-[#B9BEC7]/40">
                {step.icon}
                {/* Step micro-badge */}
                <div className="absolute -top-1.5 -right-1.5 bg-[#B9BEC7] text-[#2F2F33] text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-xs">
                  {step.id}
                </div>
              </div>

              {/* Title, Subtitle & Description */}
              <h3 className="text-base font-bold text-[#2F2F33] mb-1 group-hover:text-[#6D1A36] transition-colors">
                {step.title}
              </h3>
              <span className="text-[11px] font-bold text-[#8A2F4D] uppercase tracking-wide block mb-2">
                {step.subtitle}
              </span>
              <p className="text-[#5A5A62] text-xs sm:text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
