"use client";

import { motion } from "framer-motion";
import { Drill, Wind, ShieldCheck, Clock, CheckCircle2, Sparkles } from "lucide-react";
import { claimsConfig } from "@/data/claims";

export default function WhyChooseUs() {
  const frameworkCards = [
    {
      icon: Drill,
      tag: "Crack-Free Installation",
      title: "Diamond-Core Fastening",
      desc: "Standard hammer drilling causes internal micro-fractures in high-rise concrete parapets and lintels. Sangeetha technicians exclusively employ calibrated diamond-core rotary equipment with integrated dust extraction. Anchors seat flush with zero chipping, zero cracks, and zero mess on your balcony floor.",
      points: [
        "Zero structural micro-cracks in balcony masonry",
        "HEPA-filtered extraction captures 99% of concrete dust",
        "SS304/SS316 high-expansion anchor sleeves",
      ],
    },
    {
      icon: Wind,
      tag: "High-Rise Durability",
      title: "High-Elevation Wind Resistance",
      desc: "Balconies above the 10th floor in Bengaluru experience extreme aerodynamic shear and monsoon squalls. Our virgin high-density copolymer mesh and knotted diamond matrix are certified to withstand 140kg+ impact loads without fluttering, sagging, or degrading under high-altitude ultraviolet rays.",
      points: [
        "Tested 140kg+ concentrated point load resistance",
        "Aerodynamic low-drag mesh prevents wind resonance",
        "UV-fortified virgin polymer prevents brittleness",
      ],
    },
    {
      icon: ShieldCheck,
      tag: "Zero-Rust Metallurgy",
      title: "SS316 Marine Hardware",
      desc: "We refuse to cut corners with cheap grade 201 or 304 steels that rust after a single rainy season. Every invisible grill cable installed by Sangeetha utilizes molybdenum-alloyed SS316 marine-grade multi-strand stainless wire, sealed within an anti-crack transparent DuPont nylon jacket.",
      points: [
        "Molybdenum-enriched SS316 marine grade composition",
        "Transparent DuPont anti-friction polymer jacket",
        "T6 structural anodized aluminium mounting tracks",
      ],
    },
    {
      icon: Clock,
      tag: "Prompt Turnkey Service",
      title: "Tidy Same-Day Completion",
      desc: "Your safety barrier is completed in a single 2-to-3 hour appointment. Our full-time, in-house rigging crew arrives with laser calibrators and physical samples, completes the entire fitting neatly, cleans every trace of debris, and hands over your stamped 10-year warranty document.",
      points: [
        "Average 2-3 hour clean, dustless installation",
        "No day laborers or outsourced contractors",
        `Signed physical ${claimsConfig.warrantyDisplay} certificate`,
      ],
    },
  ];

  return (
    <section className="py-24 bg-[#FAFAFA] scroll-mt-12" id="advantage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 bg-[#F6E9EE] text-[#6D1A36] border border-[#B9BEC7]/40 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider self-center shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#8A2F4D]" />
            <span>The Sangeetha Engineering Standard</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2F2F33] tracking-tight leading-tight">
            Engineered Safety Built on Four Architectural Pillars
          </h2>
          <p className="text-sm sm:text-base text-[#5A5A62] leading-relaxed font-normal">
            Balcony fall protection and bird containment demand rigorous engineering, not makeshift handiwork. Here is how Sangeetha safeguards your family with certified materials and zero wall damage.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {frameworkCards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E5E7EB] hover:border-[#8A2F4D] shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#6D1A36] group-hover:bg-[#8A2F4D] flex items-center justify-center text-white transition-colors shadow-sm">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-black text-[#6D1A36] bg-[#F6E9EE] px-3 py-1 rounded-full uppercase tracking-wider border border-[#B9BEC7]/30">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#2F2F33] mb-3 group-hover:text-[#6D1A36] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A5A62] leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 space-y-2.5">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-[#2F2F33] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#6D1A36] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
