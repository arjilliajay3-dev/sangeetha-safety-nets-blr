import { Metadata } from "next";
import Link from "next/link";
import { Home } from "lucide-react";
import GalleryFilterClient from "./GalleryFilterClient";
import { generateBreadcrumbSchema } from "@/utils/schema";

export const metadata: Metadata = {
  title: "Photo Gallery in Bengaluru | Sangeetha Safety Nets",
  description:
    "Installation photo gallery of safety nets, SS316 invisible grills & cloth hangers across Bengaluru. 10-yr warranty. Call +91 99720 55520.",
  alternates: {
    canonical: "https://sangeethasafetynets.in/gallery",
  },
  openGraph: {
    title: "Photo Gallery in Bengaluru | Sangeetha Safety Nets",
    description:
      "Installation photo gallery of safety nets, SS316 invisible grills & cloth hangers across Bengaluru. 10-yr warranty. Call +91 99720 55520.",
    url: "https://sangeethasafetynets.in/gallery",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Sangeetha Safety Nets Installation Photo Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Photo Gallery | Sangeetha Safety Nets - Safety Nets & Invisible Grills Bangalore, Karnataka",
    description:
      "Browse photos of safety nets, invisible grills, anti-bird spikes, and ceiling cloth hangers installed by Sangeetha Safety Nets across Bangalore serving Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Marathahalli, and Sarjapur Road.",
    images: ["/images/og-image.webp"],
  },
};

export default function GalleryPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Gallery", item: "/gallery" },
  ];

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Photo Gallery | Sangeetha Safety Nets",
    "url": "https://sangeethasafetynets.in/gallery",
    "description": "Photo archives of completed netting and invisible grill setups by Sangeetha Safety Nets in Bangalore across Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Marathahalli, and Sarjapur Road.",
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      {/* Inject Structured Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#8A2F4D] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-slate-600 font-bold">Gallery</span>
        </nav>

        {/* Title Header */}
        <div className="text-left max-w-3xl mb-12 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#8A2F4D] bg-[#F6E9EE] px-3.5 py-1.5 rounded-full inline-block self-start">
            Visual Proof
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Installation Gallery & Close-Ups
          </h1>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
            Browse through real photographs of Sangeetha Safety Nets installations. Filters include Safety Netting types, Invisible Grills, Hangers, raw materials, and team operations.
          </p>
        </div>

        {/* Dynamic client filter page */}
        <GalleryFilterClient />
      </div>
    </div>
  );
}
