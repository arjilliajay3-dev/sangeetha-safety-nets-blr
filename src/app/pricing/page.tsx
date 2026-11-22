import { Metadata } from "next";
import Link from "next/link";
import {
  Home,
  Ruler,
  Layers,
  FileCheck,
  Maximize,
  Award,
  Building,
  ShieldCheck,
  Phone,
  MessageSquare,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { generateBreadcrumbSchema } from "@/utils/schema";
import ContactForm from "@/components/forms/ContactForm";
import ServicePromoTicker from "@/components/sections/ServicePromoTicker";
import { siteConfig } from "@/data/site";
import { claimsConfig } from "@/data/claims";
import { PRICING_CONFIRMED, pricingDisclaimer } from "@/data/pricing";

export const metadata: Metadata = {
  title: "Pricing & Cost Estimation in Bengaluru | Sangeetha",
  description:
    "Transparent sq.ft pricing for safety nets, SS316 invisible grills & cloth hangers in Bengaluru. 10-yr warranty & free measurement. Call +91 99720 55520.",
  alternates: {
    canonical: "https://sangeethasafetynets.in/pricing",
  },
  openGraph: {
    title: "Pricing & Cost Estimation in Bengaluru | Sangeetha",
    description:
      "Transparent sq.ft pricing for safety nets, SS316 invisible grills & cloth hangers in Bengaluru. 10-yr warranty & free measurement. Call +91 99720 55520.",
    url: `${siteConfig.siteUrl}/pricing`,
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: `${siteConfig.shortName} Pricing`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Pricing Guide & Estimation | ${siteConfig.name}`,
    description:
      `Transparent per-square-foot estimation for safety nets, invisible grills & cloth hangers across ${siteConfig.city}.`,
    images: ["/images/og-image.webp"],
  },
};

export default function PricingPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Pricing", item: "/pricing" },
  ];

  const howWePriceSteps = [
    {
      step: "01",
      icon: <Ruler className="w-7 h-7 text-[#8A2F4D]" />,
      title: "On-Site Optical Dimensioning",
      description:
        `Our rigging technicians measure your balcony or window boundary with digital laser tools across all ${siteConfig.city} localities.`,
    },
    {
      step: "02",
      icon: <Layers className="w-7 h-7 text-[#8A2F4D]" />,
      title: "Tactile Material Review",
      description:
        "Examine tangible samples of copolymer netting, marine SS316 wire assemblies, and aluminium guide channels on site.",
    },
    {
      step: "03",
      icon: <FileCheck className="w-7 h-7 text-[#8A2F4D]" />,
      title: "Fixed Itemized Estimation",
      description:
        "Receive a transparent, binding proposal with certified hardware, tension testing, and warranty coverage clearly itemized.",
    },
  ];

  const priceFactors = [
    {
      icon: <Maximize className="w-6 h-6 text-[#8A2F4D]" />,
      title: "Perimeter Footprint & Square Area",
      description:
        "Net dimensions of the balcony boundary, window sills, internal stair voids, or vertical service shafts needing enclosure.",
    },
    {
      icon: <Award className="w-6 h-6 text-[#8A2F4D]" />,
      title: "Polymer Spec & Wire Alloy",
      description:
        "Specification choice between knotted UV-treated copolymer HDPE mesh or tensioned SS316 marine stainless wire with nylon sheath.",
    },
    {
      icon: <Building className="w-6 h-6 text-[#8A2F4D]" />,
      title: "Building Height & Concrete Substrate",
      description:
        "Floor level, external rope-access rigging prerequisites, and concrete anchor tensile strength requirements.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#8A2F4D]" />,
      title: "Wire Spacing & Ledge Protection",
      description:
        "Selection of 2-inch toddler-grade pitch or 3-inch standard pitch, along with optional polycarbonate bird deterrent strips.",
    },
  ];

  const pricingRanges = [
    {
      title: "Balcony & Window Safety Nets",
      category: "Knotted Virgin Copolymer",
      priceDisplay: PRICING_CONFIRMED ? "Starting from ₹15 - ₹28 / sq.ft" : "Binding Quote Upon Inspection",
      features: [
        "100% UV-Stabilized Polymer Mesh",
        "SS304 Concrete Expansion Anchors",
        "High-Tensile Knotted Impact Strength",
        `${claimsConfig.warrantyDisplay} Certificate Handover`,
        "Free Optical Site Measurement",
        "Zero Booking Fee or Hidden Surcharges",
      ],
      popular: true,
    },
    {
      title: "Marine SS316 Invisible Grills",
      category: "Architectural Stainless Wire",
      priceDisplay: PRICING_CONFIRMED ? "Starting from ₹120 - ₹180 / sq.ft" : "Binding Quote Upon Inspection",
      features: [
        "Multi-Strand Grade 316 Marine Cable",
        "DuPont Clear Protective Nylon Jacketing",
        "T6 Rigid Anodized Aluminium Mounting Channels",
        `${claimsConfig.warrantyDisplay} on Tension & Corrosion`,
        "100% Unobstructed Panoramic Skyline Views",
        "Complimentary On-Site Inspection & Demo",
      ],
      popular: true,
    },
    {
      title: "Overhead Cloth Drying Hangers",
      category: "Dual-Pulley Hoist Assembly",
      priceDisplay: PRICING_CONFIRMED ? "₹1,800 - ₹3,500 / set" : "Binding Quote Upon Inspection",
      features: [
        "6 Independent Seamless SS304 Stainless Rods",
        "Smooth Dual-Pulley Friction-Free Hardware",
        "Reclaims Full Balcony Walkway Utility",
        "Heavy Duty Anti-Rust Structural Mechanism",
        "Prompt Turnkey Installation Included",
      ],
      popular: false,
    },
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#6D1A36] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-[#6D1A36] font-bold">Pricing &amp; Estimates</span>
        </nav>

        {/* Hero Banner */}
        <div className="text-left max-w-3xl mb-14 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6D1A36] bg-[#F6E9EE] px-3.5 py-1.5 rounded-full inline-block self-start border border-[#B9BEC7]/40">
            Clear Line-Item Proposals
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Transparent Safety Installation Estimates
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            At {siteConfig.shortName}, we eliminate ambiguous quotes and unexpected add-ons. Our proposals clearly state cable alloy specifications, anchoring counts, labor, and warranty coverage across all {siteConfig.city} neighborhoods.
          </p>
        </div>

        {/* 3 Steps to Quotation */}
        <div className="mb-20">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#8A2F4D]" />
            <span>How We Provide Guaranteed Quotations</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howWePriceSteps.map((s, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xs relative overflow-hidden flex flex-col justify-between"
              >
                <div className="text-5xl font-black text-slate-100 absolute top-4 right-6 pointer-events-none">
                  {s.step}
                </div>
                <div className="relative z-10 mb-6">
                  <div className="p-3 bg-[#F6E9EE] rounded-2xl w-fit mb-4 border border-[#B9BEC7]/30">
                    {s.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{s.description}</p>
                </div>
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-[#6D1A36]">
                  <CheckCircle2 className="w-4 h-4 text-[#8A2F4D]" />
                  <span>No Booking Fees</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicative System Ranges */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              Standard System Specifications
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              All quotes are determined during complimentary optical site measurements based on exact dimensions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingRanges.map((range, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-3xl p-8 border shadow-sm flex flex-col justify-between ${
                  range.popular ? "border-[#6D1A36] ring-2 ring-[#6D1A36]/10 relative" : "border-slate-200"
                }`}
              >
                {range.popular && (
                  <span className="absolute -top-3 left-8 bg-[#6D1A36] text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-xs">
                    Popular Architectural Choice
                  </span>
                )}

                <div>
                  <span className="text-xs font-bold uppercase text-[#8A2F4D] tracking-wider block mb-1">
                    {range.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{range.title}</h3>

                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 mb-6">
                    <span className="text-xs text-slate-500 font-medium block mb-1">Estimated Cost</span>
                    <span className="text-lg font-extrabold text-[#6D1A36]">{range.priceDisplay}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {range.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-[#8A2F4D] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}?text=Hello%20${encodeURIComponent(siteConfig.shortName)},%20I%20would%20like%20a%20detailed%20estimate%20for%20${encodeURIComponent(range.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#25D366] hover:bg-emerald-600 text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Proposal</span>
                  </a>
                  <a
                    href={siteConfig.phoneTel}
                    className="w-full bg-[#6D1A36] hover:bg-[#55142A] text-white font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-xs"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call {siteConfig.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cost Variables Breakdown */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xs mb-20">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
            Variables That Influence Your Project Scope
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm mb-8 leading-relaxed max-w-3xl">
            Because every residential balcony structure has unique masonry anchors, beam thickness, and wind load demands, final costs vary according to four key parameters:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {priceFactors.map((factor, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="p-3 bg-[#F6E9EE] rounded-2xl text-[#6D1A36] shrink-0 border border-[#B9BEC7]/30">
                  {factor.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{factor.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{factor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <ContactForm />
      </div>
    </div>
  );
}
