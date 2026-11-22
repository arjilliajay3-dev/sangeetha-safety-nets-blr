"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Quote, HeartHandshake } from "lucide-react";
import { claimsConfig } from "@/data/claims";
import { siteConfig } from "@/data/site";

export default function CustomerReviews() {
  // CRITICAL: Hide component if client reviews and GBP link are not yet confirmed
  if (claimsConfig.stats.reviewCount === null && !siteConfig.gbpLink) {
    return null;
  }

  return (
    <section className="py-24 bg-[#420D20] text-white scroll-mt-12" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 bg-[#8A2F4D]/20 border border-[#8A2F4D]/40 text-[#B9BEC7] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider self-center">
            <HeartHandshake className="w-3.5 h-3.5 text-[#8A2F4D]" />
            <span>Community Verified Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
            Neighbour Recommendations from Real {siteConfig.city} Homes
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Read verified feedback from apartment communities across {siteConfig.city}.
          </p>
        </div>
      </div>
    </section>
  );
}
