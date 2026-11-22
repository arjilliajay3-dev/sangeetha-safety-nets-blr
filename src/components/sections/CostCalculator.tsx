"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  CheckCircle2,
  PhoneCall,
  MessageSquare,
  ShieldCheck,
  Zap,
  Sparkles,
  Award,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { claimsConfig } from "@/data/claims";
import {
  PRICING_CONFIRMED,
  serviceEstimates,
  pricingDisclaimer,
  type ServiceEstimate,
} from "@/data/pricing";

export default function CostCalculator() {
  const [selectedService, setSelectedService] = useState<ServiceEstimate>(serviceEstimates[0]);
  const [areaSqFt, setAreaSqFt] = useState<number>(120);

  const minRate = selectedService.estimateMinPerSqFt || 0;
  const maxRate = selectedService.estimateMaxPerSqFt || 0;
  const minCost = minRate * areaSqFt;
  const maxCost = maxRate * areaSqFt;

  const whatsappMessage = encodeURIComponent(
    `Hello ${siteConfig.shortName}, I am looking for a project estimate for ${selectedService.name} covering roughly ${areaSqFt} ${selectedService.unit}. Please arrange an on-site dimensioning visit in ${siteConfig.city}.`
  );

  return (
    <section className="bg-[#F8FAFC] py-20 scroll-mt-12" id="calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F6E9EE]/60 text-[#6D1A36] border border-[#F6E9EE] text-xs font-extrabold uppercase tracking-widest mb-4 shadow-xs">
            <Calculator className="w-4 h-4 text-[#6D1A36]" /> Transparent Estimation Tool
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
            Balcony &amp; Window Project Estimator
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            With {siteConfig.shortName}, all proposals are upfront and all-inclusive. Every job includes certified grade-checked materials, corrosion-proof anchoring, certified rigging, and post-installation tension testing backed by our{" "}
            <span className="font-bold text-[#6D1A36]">{claimsConfig.warrantyDisplay}</span> across all {siteConfig.city} neighborhoods.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Box */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 bg-white rounded-[20px] p-6 sm:p-8 border border-[#E5E7EB] shadow-[0_10px_35px_rgba(0,0,0,0.05)] space-y-6"
          >
            {/* Step 1: Select Service */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3">
                1. Select Installation System
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {serviceEstimates.map((srv) => {
                  const isSelected = selectedService.id === srv.id;
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setSelectedService(srv)}
                      className={`p-3.5 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? "bg-[#6D1A36] text-white border-[#6D1A36] shadow-sm"
                          : "bg-[#F8FAFC] text-slate-800 border-[#E5E7EB] hover:border-[#6D1A36]"
                      }`}
                    >
                      <span className="truncate pr-2">{srv.name}</span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-[#8A2F4D] shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Slider for Area / Quantity */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="installation-area-range" className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                  2. Estimated Balcony / Window Span
                </label>
                <span className="text-sm font-black text-[#6D1A36] bg-[#F6E9EE] px-3 py-1 rounded-lg border border-[#B9BEC7]">
                  {areaSqFt} {selectedService.unit}
                </span>
              </div>
              <input
                id="installation-area-range"
                aria-label="Approximate Area or Dimension in Square Feet"
                type="range"
                min="40"
                max="600"
                step="10"
                value={areaSqFt}
                onChange={(e) => setAreaSqFt(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#6D1A36]"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-semibold mt-1">
                <span>Utility Balcony (40 sq.ft)</span>
                <span>Standard Master Balcony (120 sq.ft)</span>
                <span>Duplex / Penthouse Perimeter (600 sq.ft)</span>
              </div>
            </div>

            {/* Included Guarantees */}
            <div className="pt-4 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-600">
              <div className="flex items-center gap-1.5 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-semibold text-emerald-800">{claimsConfig.warrantyDisplay}</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Sparkles className="w-4 h-4 text-[#8A2F4D] shrink-0" />
                <span className="font-semibold text-slate-700">No Hidden Costs</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Zap className="w-4 h-4 text-[#6D1A36] shrink-0" />
                <span>On-Site Measurement</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Award className="w-4 h-4 text-[#6D1A36] shrink-0" />
                <span>Certified Metallurgy</span>
              </div>
            </div>
          </motion.div>

          {/* Results Summary Box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 bg-[#6D1A36] text-white rounded-[20px] p-6 sm:p-8 border border-[#55142A] shadow-xl flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-[#8A2F4D] bg-white/10 px-3 py-1 rounded-full border border-white/15">
                  <Sparkles className="w-3.5 h-3.5" /> Calculated Scope
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-[#2F2F33] bg-[#B9BEC7] px-2.5 py-1 rounded-full border border-white/40">
                  {claimsConfig.warrantyDisplay}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-1">{selectedService.name}</h3>
              <p className="text-xs text-slate-300 mb-6">
                Dimension calculation: ~{areaSqFt} {selectedService.unit} in {siteConfig.city}.
              </p>

              {PRICING_CONFIRMED && minCost > 0 ? (
                <div className="bg-[#420D20] rounded-2xl p-5 border border-[#55142A] mb-6 text-center">
                  <span className="text-xs text-[#B9BEC7] font-bold uppercase tracking-wider block mb-1">
                    Indicative Price Range
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-[#8A2F4D] tracking-tight">
                    ₹{minCost.toLocaleString("en-IN")} - ₹{maxCost.toLocaleString("en-IN")}*
                  </div>
                  <span className="text-[10px] text-slate-400 block mt-2">
                    *{pricingDisclaimer}
                  </span>
                </div>
              ) : (
                <div className="bg-[#420D20] rounded-2xl p-6 border border-[#55142A] mb-6 text-left space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#8A2F4D] animate-pulse"></span>
                    <h4 className="text-sm font-bold text-white">Direct WhatsApp Estimation</h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Accurate pricing depends on linear perimeter, masonry substrate type, elevation height, and cable spacing. Our local team conducts an exact measurement and issues a binding quotation.
                  </p>
                  <div className="pt-2 border-t border-[#55142A]/60 flex flex-wrap gap-2 text-[11px] text-[#B9BEC7]">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8A2F4D]" /> Free Doorstep Measurement
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8A2F4D]" /> No Obligation Quote
                    </span>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-3">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-all text-xs sm:text-sm cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Get Instant Quote on WhatsApp</span>
              </a>

              <a
                href={siteConfig.phoneTel}
                className="w-full flex items-center justify-center gap-2 bg-[#420D20] hover:bg-[#55142A] text-white font-black py-3.5 px-4 rounded-xl shadow-md transition-all text-xs sm:text-sm cursor-pointer border border-[#8A2F4D]"
              >
                <PhoneCall className="w-4 h-4 text-white" />
                <span>Call {siteConfig.phoneDisplay} Directly</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
