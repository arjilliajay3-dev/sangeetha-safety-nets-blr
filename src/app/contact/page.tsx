import { Metadata } from "next";
import Link from "next/link";
import { Home, MapPin, Phone, Mail, Clock } from "lucide-react";
import { generateBreadcrumbSchema } from "@/utils/schema";
import MapFrame from "@/components/ui/map-frame";
import ContactForm from "@/components/forms/ContactForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us in Bengaluru | Sangeetha Safety Nets",
  description:
    "Contact Sangeetha Safety Nets in Bengaluru for free doorstep measurement, UV-mesh & SS316 invisible grills quote. Call/WhatsApp +91 99720 55520.",
  alternates: {
    canonical: "https://sangeethasafetynets.in/contact",
  },
  openGraph: {
    title: "Contact Us in Bengaluru | Sangeetha Safety Nets",
    description:
      "Contact Sangeetha Safety Nets in Bengaluru for free doorstep measurement, UV-mesh & SS316 invisible grills quote. Call/WhatsApp +91 99720 55520.",
    url: `${siteConfig.siteUrl}/contact`,
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: `Contact ${siteConfig.shortName}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Contact Us | ${siteConfig.name}`,
    description:
      `Schedule a doorstep balcony evaluation with ${siteConfig.shortName} across all 5 Bengaluru zones. Call ${siteConfig.phoneDisplay}.`,
    images: ["/images/og-image.webp"],
  },
};

export default function ContactPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Contact Us", item: "/contact" },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
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
          <span className="text-[#6D1A36] font-bold">Contact Our Office</span>
        </nav>

        {/* Hero Title */}
        <div className="text-left max-w-3xl mb-16 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6D1A36] bg-[#F6E9EE] px-3.5 py-1.5 rounded-full inline-block self-start border border-[#B9BEC7]/40">
            Direct Technical Inquiries
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Consult Our In-House Rigging Specialists
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Need advice on wire tensile tolerances, copolymer netting gauge, or ceiling cloth drying mechanisms? Request an on-site visit or talk directly with our service desk.
          </p>
        </div>

        {/* NAP Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-start">
          {/* Business Details (Left) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs flex flex-col gap-6 text-left">
            <h2 className="text-lg font-bold text-slate-800 border-b border-slate-100 pb-3">
              Direct Contact Channels
            </h2>

            <div className="flex flex-col gap-5">
              {/* Address */}
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-[#8A2F4D] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-slate-500">Service Territory</span>
                  <span className="text-sm font-bold text-slate-700 mt-1">
                    {siteConfig.address} (Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Marathahalli, Jayanagar &amp; All 5 Zones)
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-[#8A2F4D] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase font-bold text-slate-500">Phone &amp; WhatsApp Helpline</span>
                  <a href={siteConfig.phoneTel} className="text-sm font-bold text-slate-700 hover:text-[#6D1A36] transition-colors flex items-center gap-2">
                    <span>{siteConfig.phoneDisplay}</span>
                    <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-bold">Direct Line</span>
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-[#8A2F4D] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] uppercase font-bold text-slate-500">Official Electronic Mail</span>
                  <a href={`mailto:${siteConfig.email}`} className="text-sm font-bold text-slate-700 hover:text-[#6D1A36] transition-colors">
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              {/* Hours */}
              {siteConfig.operatingHours && (
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-[#8A2F4D] shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] uppercase font-bold text-slate-500">Business Hours</span>
                    <span className="text-xs font-bold text-slate-700">
                      {siteConfig.operatingHours}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Map Frame (Right) */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider text-left">Service Coverage Map</h3>
            <MapFrame areaName="Bangalore, Karnataka" className="h-[360px]" />
          </div>
        </div>

        {/* Lead Inquiry Form */}
        <ContactForm />
      </div>
    </div>
  );
}
