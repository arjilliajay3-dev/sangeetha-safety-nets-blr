import { Metadata } from "next";
import Link from "next/link";
import { Home, ShieldCheck, HeartHandshake, Sparkles, CheckCircle2, Building2, Users2, Award } from "lucide-react";
import { generateBreadcrumbSchema, generateOrganizationSchema } from "@/utils/schema";
import ContactForm from "@/components/forms/ContactForm";
import { siteConfig } from "@/data/site";
import { claimsConfig } from "@/data/claims";

export const metadata: Metadata = {
  title: "About Us in Bengaluru | Sangeetha Safety Nets",
  description:
    "About Sangeetha Safety Nets in Bengaluru. Professional balcony nets, SS316 invisible grills & cloth hangers with 10-yr warranty. Call +91 99720 55520.",
  alternates: {
    canonical: "https://sangeethasafetynets.in/about",
  },
  openGraph: {
    title: "About Us in Bengaluru | Sangeetha Safety Nets",
    description:
      "About Sangeetha Safety Nets in Bengaluru. Professional balcony nets, SS316 invisible grills & cloth hangers with 10-yr warranty. Call +91 99720 55520.",
    url: `${siteConfig.siteUrl}/about`,
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: `About ${siteConfig.shortName} - Bengaluru Safety Engineering`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `About Our Team | ${siteConfig.name}`,
    description:
      `Learn about ${siteConfig.legalEntity}, Bengaluru's specialist in structural balcony safety nets, marine-grade SS316 invisible grills, and dustless installation engineering.`,
    images: ["/images/og-image.webp"],
  },
};

export default function AboutPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "About Us", item: "/about" },
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-12">
      {/* Structured JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateOrganizationSchema()) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#6D1A36] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-[#6D1A36] font-bold">About Our Company</span>
        </nav>

        {/* Hero Section */}
        <div className="text-left max-w-3xl mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6D1A36] bg-[#F6E9EE] px-3.5 py-1.5 rounded-full inline-block self-start border border-[#B9BEC7]/40">
            Dedicated Bengaluru Engineering
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Precision Fall Prevention &amp; Structural Balcony Safety
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Operating under {siteConfig.legalEntity}, {siteConfig.shortName} provides engineered safety solutions for high-rise apartment balconies, windows, and commercial voids across Bengaluru. We prioritize structural integrity, clean diamond drilling, and fully transparent, line-item quotations.
          </p>
        </div>

        {/* Story & Philosophy Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          <div className="lg:col-span-8 flex flex-col gap-8 text-left">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs flex flex-col gap-5">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-[#8A2F4D] shrink-0" />
                <span>Our Engineering Standards &amp; Operational Discipline</span>
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                As residential high-rise towers multiplied across Bengaluru—from the tech centers of Whitefield and Bellandur to the expanding enclaves of Yelahanka and Electronic City—homeowners encountered persistent problems: cumbersome steel barricades that ruined ventilation and light, or informal installers utilizing substandard plastic twine that rapidly deteriorated in coastal humidity and intense UV exposure.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                {siteConfig.shortName} was established to deliver an accountable, technical standard for architectural safety. By utilizing virgin copolymer netting, marine-specification SS316 multi-strand wire, and vibration-damped diamond core drilling, we protect families without damaging concrete building envelopes. Every installation is handled solely by full-time technicians with calibrated equipment.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col gap-3">
                <div className="p-3 bg-[#F6E9EE] rounded-xl text-[#6D1A36] self-start border border-[#B9BEC7]/30">
                  <Users2 className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">100% In-House Riggers</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Our vetted, salaried safety specialists perform each task. We never outsource work to unvetted day-laborers.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col gap-3">
                <div className="p-3 bg-[#F6E9EE] rounded-xl text-[#6D1A36] self-start border border-[#B9BEC7]/30">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">Marine SS316 Wire</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  We deploy molybdenum-alloyed SS316 stainless cables that resist weather corrosion and withstand 400kg+ tensile breaking force.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col gap-3">
                <div className="p-3 bg-[#F6E9EE] rounded-xl text-[#6D1A36] self-start border border-[#B9BEC7]/30">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-slate-900">{claimsConfig.warrantyDisplay}</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  Every homeowner receives an official signed warranty document guaranteeing cable tension and hardware performance.
                </p>
              </div>
            </div>
          </div>

          {/* Operational Metrics (Right) */}
          <div className="lg:col-span-4 bg-[#6D1A36] text-white rounded-3xl p-6 sm:p-8 border border-[#55142A] flex flex-col gap-6 shadow-xl">
            <h3 className="text-base font-bold text-white border-b border-white/10 pb-3 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-[#B9BEC7]" />
              <span>Operational Commitments</span>
            </h3>

            <div className="flex flex-col gap-5 text-left">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-slate-300">Entity Governance</span>
                <span className="text-xs font-bold text-[#2F2F33] uppercase bg-[#B9BEC7] px-3 py-1.5 rounded-md self-start">
                  {siteConfig.legalEntity}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-slate-300">Geographic Footprint</span>
                <span className="text-xs font-bold text-[#2F2F33] uppercase bg-[#B9BEC7] px-3 py-1.5 rounded-md self-start">
                  All 5 Bengaluru Zones (110+ Localities)
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-slate-300">Hardware Standard</span>
                <span className="text-xs font-bold text-[#2F2F33] uppercase bg-[#B9BEC7] px-3 py-1.5 rounded-md self-start">
                  SS316 Stainless &amp; Virgin HDPE
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] uppercase font-bold text-slate-300">Price Transparency</span>
                <span className="text-xs font-bold text-[#2F2F33] uppercase bg-[#B9BEC7] px-3 py-1.5 rounded-md self-start">
                  Itemized Line Pricing &bull; Zero Hidden Fees
                </span>
              </div>
            </div>

            <p className="text-slate-200 text-[11px] leading-relaxed pt-2 border-t border-white/10">
              Direct communication, professional technicians, and uncompromising safety engineering define every Sangeetha installation.
            </p>
          </div>
        </div>

        {/* Lead Inquiry Form */}
        <ContactForm />
      </div>
    </div>
  );
}
