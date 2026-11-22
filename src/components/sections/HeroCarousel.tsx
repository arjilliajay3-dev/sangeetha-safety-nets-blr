"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Shield, ChevronLeft, ChevronRight, Phone, MessageSquare, ArrowRight, CheckCircle2 } from "lucide-react";
import { trackPhoneClick, trackWhatsAppClick } from "@/utils/analytics";
import { siteConfig } from "@/data/site";
import { claimsConfig } from "@/data/claims";

interface ShowcaseSlide {
  id: number;
  headerLead: string;
  headerAccent: string;
  summaryText: string;
  visualPath: string;
  visualLabel: string;
  actionText: string;
  targetHref: string;
  assurancePill: string;
}

const heroShowcase: ShowcaseSlide[] = [
  {
    id: 1,
    headerLead: "Architectural Safety Netting & Invisible Grills for",
    headerAccent: "High-Rise Bengaluru Balconies",
    summaryText: "Pre-tensioned SS316 marine cables and heavy-gauge UV copolymer safety netting. Anchored with zero wall damage and backed by a comprehensive 10-year warranty.",
    visualPath: "/images/main-images/sangeetha-balcony-invisible-grills-bangalore.webp",
    visualLabel: "Sangeetha Safety Nets engineered SS316 marine-grade invisible balcony grills overlooking Bengaluru skyline",
    actionText: "Explore Invisible Grills",
    targetHref: "/services/balcony-invisible-grills",
    assurancePill: "Complimentary Site Visit • Dust-Free Diamond Drilling • 10-Year Warranty",
  },
  {
    id: 2,
    headerLead: "Certified Toddler & Pet Fall Containment With",
    headerAccent: "High-Tensile Copolymer Mesh",
    summaryText: "Tension-calibrated boundary netting rated for 140kg+ tensile impacts. Keeps high-rise apartment balconies well-ventilated, clear, and completely child-safe.",
    visualPath: "/images/services/sangeetha-balcony-net-installation-bangalore.webp",
    visualLabel: "Heavy-duty childproof balcony fall protection netting in Bengaluru apartment",
    actionText: "Explore Balcony Nets",
    targetHref: "/services/balcony-safety-nets",
    assurancePill: "Diamond Anchoring • 140kg+ Load Tested • 10-Year Warranty",
  },
  {
    id: 3,
    headerLead: "Humane Pest Bird Defense & Spotless Spaces With",
    headerAccent: "UV-Resistant Pigeon Barriers",
    summaryText: "Prevent pigeon roosting, corrosive guano, and AC line damage without harming birds. Translucent netting secured with corrosion-proof hardware.",
    visualPath: "/images/hero/sangeetha-pigeon-safety-nets-bangalore.webp",
    visualLabel: "Translucent anti-pigeon netting installed across residential utility balcony in Bengaluru",
    actionText: "View Pigeon Nets",
    targetHref: "/services/pigeon-safety-nets",
    assurancePill: "Humane Exclusion • 100% Odor Prevention • Plaster-Safe Rigging",
  },
  {
    id: 4,
    headerLead: "Unobstructed High-Rise Vistas Protected With",
    headerAccent: "Marine SS316 Invisible Grills",
    summaryText: "Replace heavy iron safety bars with ultra-thin 316-grade stainless steel cables that safeguard windows and balconies while retaining 180-degree panoramic sightlines.",
    visualPath: "/images/services/sangeetha-duct-pigeon-nets-bangalore.webp",
    visualLabel: "Architectural invisible grills installation in Bengaluru",
    actionText: "Explore Invisible Grills",
    targetHref: "/services/balcony-invisible-grills",
    assurancePill: "SS316 Marine Cable • 180° Panoramic View • Weather Resistant",
  },
  {
    id: 5,
    headerLead: "Free Up 100% Balcony Floor Area With",
    headerAccent: "Independent Pulley Ceiling Hangers",
    summaryText: "Six individual rustproof SS304 stainless steel rods that glide down effortlessly to chest level and retract to the ceiling, keeping your balcony open and usable.",
    visualPath: "/images/services/sangeetha-ceiling-cloth-drying-hangers.webp",
    visualLabel: "Ceiling-mounted stainless steel pulley cloth drying rack in Bengaluru home",
    actionText: "Explore Cloth Hangers",
    targetHref: "/services/ceiling-cloth-hangers",
    assurancePill: "SS304 Stainless Tubes • Smooth Pulley Lift • Zero Floor Obstruction",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroShowcase.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const slide = heroShowcase[current];

  const whatsappHeroUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    `Hi ${siteConfig.shortName}, I would like to book a free doorstep inspection and measurement for my balcony in ${siteConfig.city}.`
  )}`;

  return (
    <section
      className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center bg-slate-950 overflow-hidden"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Background Images with Scrim */}
      {heroShowcase.map((s, idx) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === current ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          <Image
            src={s.visualPath}
            alt={s.visualLabel}
            fill
            priority={idx === 0}
            className="object-cover object-center filter brightness-[0.88] contrast-[1.05] scale-105 transition-transform duration-[8000ms] ease-out"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#420D20]/90 via-[#420D20]/50 to-slate-950/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20 pointer-events-none" />
        </div>
      ))}

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Copy (Left Column) */}
          <div className="lg:col-span-8 flex flex-col gap-4 text-left">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B9BEC7] text-[#2F2F33] text-xs font-black uppercase tracking-wider self-start shadow-sm border border-white/40">
              <Shield className="w-3.5 h-3.5 text-[#6D1A36]" />
              <span>{slide.assurancePill}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] drop-shadow-md">
              {slide.headerLead}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E5E7EB] via-[#B9BEC7] to-[#F6E9EE] drop-shadow-sm">
                {slide.headerAccent}
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-slate-100 text-sm sm:text-base leading-relaxed max-w-2xl font-normal drop-shadow-sm">
              {slide.summaryText}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href={slide.targetHref}
                className="bg-[#6D1A36] hover:bg-[#55142A] text-white font-black px-6 py-3.5 rounded-xl text-sm transition-all shadow-lg flex items-center gap-2 group cursor-pointer border border-[#8A2F4D]"
              >
                <span>{slide.actionText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={whatsappHeroUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick("hero")}
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-black px-6 py-3.5 rounded-xl text-sm transition-all shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Quote</span>
              </a>

              <a
                href={siteConfig.phoneTel}
                onClick={() => trackPhoneClick("hero")}
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-5 py-3.5 rounded-xl text-sm backdrop-blur-xs transition-all flex items-center gap-2 border border-white/20"
              >
                <Phone className="w-4 h-4 text-[#B9BEC7]" />
                <span>{siteConfig.phoneDisplay}</span>
              </a>
            </div>

            {/* Quick Bullet Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 border-t border-white/15 max-w-2xl text-xs text-slate-200">
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#B9BEC7] shrink-0" />
                <span>Zero Plaster Cracking</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#B9BEC7] shrink-0" />
                <span>100% In-House Technicians</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#B9BEC7] shrink-0" />
                <span>Written Warranty Certificate</span>
              </div>
            </div>
          </div>

          {/* Carousel Slide Switcher Controls */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center gap-4">
            <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md p-2 rounded-2xl border border-white/10">
              <button
                type="button"
                onClick={() => setCurrent((prev) => (prev - 1 + heroShowcase.length) % heroShowcase.length)}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#6D1A36] text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-1.5 px-3">
                {heroShowcase.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrent(i)}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      i === current ? "w-8 bg-[#8A2F4D]" : "w-2.5 bg-white/30 hover:bg-white/60"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={() => setCurrent((prev) => (prev + 1) % heroShowcase.length)}
                className="w-10 h-10 rounded-xl bg-white/10 hover:bg-[#6D1A36] text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
