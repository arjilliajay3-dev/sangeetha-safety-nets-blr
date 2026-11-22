import { Metadata } from "next";
import AreasClient from "./AreasClient";

export const metadata: Metadata = {
  title: "110+ Service Areas in Bengaluru | Sangeetha Safety Nets",
  description:
    "Explore 111 Bengaluru localities served by Sangeetha Safety Nets. UV-mesh, SS316 grills, 10-yr warranty & free measurement. Call +91 99720 55520.",
  alternates: {
    canonical: "https://sangeethasafetynets.in/areas",
  },
  openGraph: {
    title: "110+ Service Areas in Bengaluru | Sangeetha Safety Nets",
    description:
      "Explore 111 Bengaluru localities served by Sangeetha Safety Nets. UV-mesh, SS316 grills, 10-yr warranty & free measurement. Call +91 99720 55520.",
    url: "https://sangeethasafetynets.in/areas",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Sangeetha Safety Nets Bangalore Service Areas",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Areas Across Bangalore | Sangeetha Safety Nets",
    description:
      "Explore 110+ Bangalore neighborhoods served by Sangeetha Safety Nets with same-day doorstep site inspection.",
    images: ["/images/og-image.webp"],
  },
};

export default function AreasPage() {
  return <AreasClient />;
}
