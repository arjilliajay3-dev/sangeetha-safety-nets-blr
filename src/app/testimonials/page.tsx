import { Metadata } from "next";
import { generateBreadcrumbSchema } from "@/utils/schema";
import TestimonialsClient from "./TestimonialsClient";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Customer Reviews in Bengaluru | Sangeetha Safety Nets",
  description:
    "Customer feedback and reviews for safety net & invisible grill installations by Sangeetha in Bengaluru. 10-yr warranty. Call +91 99720 55520.",
  alternates: {
    canonical: "https://sangeethasafetynets.in/testimonials",
  },
  openGraph: {
    title: "Customer Reviews in Bengaluru | Sangeetha Safety Nets",
    description:
      "Customer feedback and reviews for safety net & invisible grill installations by Sangeetha in Bengaluru. 10-yr warranty. Call +91 99720 55520.",
    url: `${siteConfig.siteUrl}/testimonials`,
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: `${siteConfig.shortName} Testimonials & Reviews`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Customer Reviews & Testimonials | ${siteConfig.name}`,
    description:
      `Customer feedback and installation quality for ${siteConfig.shortName} across ${siteConfig.city}, Karnataka.`,
    images: ["/images/og-image.webp"],
  },
};

export default function TestimonialsPage() {
  const breadcrumbLinks = [
    { name: "Home", item: "/" },
    { name: "Testimonials", item: "/testimonials" },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema(breadcrumbLinks)) }}
      />
      <TestimonialsClient />
    </>
  );
}
