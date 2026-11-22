import { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/utils/schema";
import CaseStudiesClient from "./CaseStudiesClient";

export const metadata: Metadata = {
  title: "Case Studies in Bengaluru | Sangeetha Safety Nets",
  description:
    "Real-world installation case studies for safety nets & SS316 invisible grills in Bengaluru apartments. 10-yr warranty. Call +91 99720 55520.",
  alternates: {
    canonical: "https://sangeethasafetynets.in/case-studies",
  },
  openGraph: {
    title: "Case Studies in Bengaluru | Sangeetha Safety Nets",
    description:
      "Real-world installation case studies for safety nets & SS316 invisible grills in Bengaluru apartments. 10-yr warranty. Call +91 99720 55520.",
    url: "https://sangeethasafetynets.in/case-studies",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Sangeetha Safety Nets Case Studies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Sangeetha Safety Nets - Safety Nets & Invisible Grills Bangalore, Karnataka",
    description:
      "Explore case studies & real installation projects by Sangeetha Safety Nets across Bangalore serving Whitefield, Koramangala, Indiranagar, HSR Layout, Electronic City, Marathahalli, and Sarjapur Road.",
    images: ["/images/og-image.webp"],
  },
};

export default function CaseStudiesPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Case Studies", item: "/case-studies" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <CaseStudiesClient />
    </>
  );
}
