"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ShieldAlert, CheckCircle2, XCircle, ShieldCheck, Award } from "lucide-react";
import { beforeAfterConfig } from "@/data/beforeAfter";
import { claimsConfig } from "@/data/claims";

export default function BeforeAfter() {
  return (
    <section className="bg-[#F8FAFC] py-24 scroll-mt-12" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6D1A36] bg-[#F6E9EE] border border-[#B9BEC7]/40 px-3.5 py-1.5 rounded-full inline-block self-center">
            Quality &amp; Safety Comparison
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#6D1A36] tracking-tight leading-tight">
            What a Professional Installation Delivers
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed">
            See how precision rigging, UV-copolymer netting, and marine-grade SS316 invisible grills eliminate fall risks and bird nuisances without compromising light or airflow.
          </p>
        </div>

        {beforeAfterConfig.hasRealPhotos && beforeAfterConfig.beforeImage && beforeAfterConfig.afterImage ? (
          /* Real Photo Slider Mode */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-md border border-slate-100 flex flex-col"
            >
              <div className="relative h-72 sm:h-96 w-full">
                <Image
                  src={beforeAfterConfig.beforeImage}
                  alt="Unprotected high-rise balcony with dangerous open railing gaps in Bangalore"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover filter grayscale opacity-90"
                />
                <div className="absolute top-4 left-4 bg-red-600/90 text-white text-xs font-bold uppercase px-3 py-1.5 rounded-md shadow-md flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>UNPROTECTED HAZARD</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-base font-bold text-slate-800 mb-2">Before Installation</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  Open railing gaps pose constant fall risks for toddlers and pets, while pigeon roosting creates foul droppings and bacterial hazards.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-100 flex flex-col"
            >
              <div className="relative h-72 sm:h-96 w-full">
                <Image
                  src={beforeAfterConfig.afterImage}
                  alt="Protected high-rise balcony with Sangeetha Safety Nets safety netting and invisible grills"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#8A2F4D] text-white text-xs font-black uppercase px-3 py-1.5 rounded-md shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 fill-[#6D1A36]" />
                  <span>SANGEETHA CERTIFIED INSTALLATION</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-base font-bold text-slate-800 mb-2">After Precision Rigging &amp; Tensioning</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                  Seamless, high-tensile safety barriers secured with stainless steel anchors. Full peace of mind with 100% natural breeze and panoramic view.
                </p>
              </div>
            </motion.div>
          </div>
        ) : (
          /* Clean Professional Comparison Cards (No Stock Photo Confusion) */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1: Unprotected / Generic Balconies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl p-8 border border-rose-200/80 shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-bold uppercase tracking-wider mb-5">
                  <XCircle className="w-4 h-4 text-rose-600" />
                  <span>Unprotected / Generic Balconies</span>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-4">Common Balcony Hazards</h3>
                <ul className="space-y-3.5 text-sm text-slate-600">
                  <li className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span><strong>Accidental Fall Risk:</strong> Wide railing gaps leave toddlers, children, and pets vulnerable to falls from high-rise floors.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span><strong>Pigeon Droppings &amp; Diseases:</strong> Roosting pigeons soil balconies, AC outdoor units, and spread fungal pathogens.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span><strong>Substandard Nylon Nets:</strong> Cheap mono-filament nylon degrades and tears within 6–12 months under Bengaluru UV sunlight.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                    <span><strong>Obstructive Iron Grills:</strong> Bulky iron bars block natural daylight, alter facade aesthetics, and risk fire rescue blockages.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100 text-xs font-medium text-slate-500">
                Lacks structural certification &bull; Frequent repair costs &bull; Association complaints
              </div>
            </motion.div>

            {/* Card 2: Sangeetha Precision Installation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="bg-[#6D1A36] text-white rounded-3xl p-8 border border-[#55142A] shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Sangeetha Precision Installation</span>
                </div>
                <h3 className="text-xl font-extrabold text-white mb-4">Certified Protection &amp; Clarity</h3>
                <ul className="space-y-3.5 text-sm text-slate-200">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>SS316 Marine Invisible Grills:</strong> High-tensile stainless steel cables resisting 400kg dynamic impact loads.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Virgin UV-Stabilized Copolymer:</strong> Heavy-gauge netting guaranteed against sun brittleness, rot, and weathering.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Dustless Diamond-Core Rigging:</strong> Zero concrete chipping or micro-fracturing on balcony lintels and tiles.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>{claimsConfig.warrantyDisplay}:</strong> Written replacement guarantee with free prompt tensioning support.</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-amber-200">
                <span className="flex items-center gap-1.5 font-bold">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% RWA &amp; Fire Rescue Approved
                </span>
                <span className="flex items-center gap-1 font-bold">
                  <Award className="w-4 h-4 text-amber-300" /> Free Inspection
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
