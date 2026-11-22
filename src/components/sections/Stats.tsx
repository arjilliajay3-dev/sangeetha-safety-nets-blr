"use client";

import { motion } from "framer-motion";
import { Shield, Award, Compass, Wrench } from "lucide-react";
import { claimsConfig } from "@/data/claims";

export default function Stats() {
  const hasStats =
    claimsConfig.stats.installationsCompleted !== null &&
    claimsConfig.stats.averageRating !== null;

  const pillars = hasStats
    ? [
        {
          icon: Shield,
          value: `${claimsConfig.stats.installationsCompleted}+`,
          label: "Homes Secured in Bengaluru",
          desc: "Balconies, high-rise utility windows, and ducts protected reliably",
        },
        {
          icon: Award,
          value: `${claimsConfig.stats.averageRating} ★`,
          label: "Customer Rating",
          desc: "Independent verified homeowner reviews across all Bengaluru zones",
        },
        {
          icon: Award,
          value: claimsConfig.warrantyDisplay,
          label: "Material Assurance",
          desc: claimsConfig.warrantyTerms.badge,
        },
        {
          icon: Compass,
          value: "All 5 Zones",
          label: "Full Bengaluru Reach",
          desc: "Rapid doorstep mobile inspection crews covering 110+ neighborhoods",
        },
      ]
    : [
        {
          icon: Compass,
          value: "Laser Audit",
          label: "Millimeter Site Inspection",
          desc: "Complimentary digital dimensioning and substrate check across all Bengaluru zones",
        },
        {
          icon: Shield,
          value: "Grade 316",
          label: "Marine Structural Rigging",
          desc: "Weather-tested stainless cable assemblies & 100% virgin copolymer netting",
        },
        {
          icon: Wrench,
          value: "In-House Riggers",
          label: "High-Altitude Certified",
          desc: "Full harness PPE compliance and dustless rotary diamond drilling protocols",
        },
        {
          icon: Award,
          value: claimsConfig.warrantyDisplay,
          label: "Structural Protection",
          desc: claimsConfig.warrantyTerms.badge,
        },
      ];

  return (
    <section className="py-16 bg-[#420D20] text-white border-b border-[#55142A]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="flex flex-col items-center text-center p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#8A2F4D]/60 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-[#8A2F4D]/20 flex items-center justify-center text-[#8A2F4D] mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-2xl sm:text-3xl font-black text-[#8A2F4D] tracking-tight">
                  {item.value}
                </span>
                <span className="text-sm font-bold text-white mt-1">{item.label}</span>
                <p className="text-[11px] text-slate-300 mt-1 leading-snug">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
