import type { Metadata, Viewport } from "next";
import Script from "next/script";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import FloatingCTA from "@/components/shared/FloatingCTA";
import SideFloatingContact from "@/components/shared/SideFloatingContact";
import StickyContactBar from "@/components/shared/StickyContactBar";
import CookieConsent from "@/components/ui/CookieConsent";
import "./globals.css";

// System font stack fallbacks to allow zero-network sandbox compilation
const inter = { variable: "font-sans" };
const geistSans = { variable: "font-sans" };
const geistMono = { variable: "font-mono" };

import { siteConfig } from "@/data/site";
import { generateLocalBusinessSchema } from "@/utils/schema";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#6D1A36",
};

export const metadata: Metadata = {
  title: {
    default: "Safety Nets & Invisible Grills in Bengaluru | Sangeetha Safety Nets",
    template: "%s | Sangeetha Safety Nets",
  },
  description:
    "Protect your home with certified safety nets, SS316 marine invisible grills & cloth hangers in Bengaluru by Sangeetha. UV-mesh, 10-yr warranty & free inspection: +91 99720 55520.",
  keywords: [
    "Safety Nets in Bengaluru",
    "Invisible Grills in Bengaluru",
    "Balcony Safety Nets Bengaluru",
    "Pigeon Safety Nets Bengaluru",
    "Window Invisible Grills Bengaluru",
    "Ceiling Cloth Hangers Bengaluru",
    "Anti Bird Spikes Bengaluru",
    "Sangeetha Safety Nets",
    "Sangeetha Safety Nets Bengaluru",
    "Safety Nets Whitefield",
    "Safety Nets Koramangala",
    "Safety Nets Indiranagar",
    "Safety Nets HSR Layout",
    "Safety Nets Electronic City",
    "Invisible Grills Whitefield",
    "Invisible Grills Koramangala",
  ],
  metadataBase: new URL(siteConfig.siteUrl),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || "gbeqREWX5mErl8WrC3m2SZNQOaaKXyqTcZHSmU3Ea9I",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Safety Nets & Invisible Grills in Bengaluru | Sangeetha Safety Nets",
    description:
      "Protect your home with certified safety nets, SS316 marine invisible grills & cloth hangers in Bengaluru by Sangeetha. UV-mesh, 10-yr warranty & free inspection: +91 99720 55520.",
    url: siteConfig.siteUrl,
    siteName: siteConfig.shortName,
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Safety Nets & Invisible Grills in Bengaluru - Sangeetha Safety Nets",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Safety Nets & Invisible Grills in Bengaluru | Sangeetha Safety Nets",
    description:
      "Protect your home with certified safety nets, SS316 marine invisible grills & cloth hangers in Bengaluru by Sangeetha. UV-mesh, 10-yr warranty & free inspection: +91 99720 55520.",
    images: ["/images/og-image.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = generateLocalBusinessSchema();
  const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;
  const adsId = process.env.NEXT_PUBLIC_ADS_ID;

  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        <meta name="google-site-verification" content="gbeqREWX5mErl8WrC3m2SZNQOaaKXyqTcZHSmU3Ea9I" />
        <link rel="icon" type="image/svg+xml" href="/icon.svg" />
        <link rel="apple-touch-icon" href="/icon.svg" />
      </head>
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-white text-slate-900 flex flex-col min-h-screen selection:bg-[#8A2F4D] selection:text-white`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KCKR8K87"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Google Tag Manager (GTM-KCKR8K87) */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtm.js?id=GTM-KCKR8K87"
        />
        <Script
          id="google-tag-manager-gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            `,
          }}
        />

        {/* LocalBusiness JSON-LD Schema */}
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        {/* Dynamic GA4 tracking script (loads only if NEXT_PUBLIC_GA4_ID is provided) */}
        {ga4Id && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
            />
            <Script
              id="google-analytics-ga4"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${ga4Id}', { page_path: window.location.pathname });
                  ${adsId ? `gtag('config', '${adsId}');` : ""}
                `,
              }}
            />
          </>
        )}

        {/* Standalone Google Ads configuration (if adsId provided without ga4Id) */}
        {!ga4Id && adsId && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${adsId}`}
            />
            <Script
              id="google-ads-gtag"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${adsId}');
                `,
              }}
            />
          </>
        )}

        <Navbar />
        <main className="flex-grow pt-[96px] sm:pt-[102px] lg:pt-[108px] pb-20 md:pb-0">{children}</main>
        <Footer />
        <FloatingCTA />
        <SideFloatingContact />
        <StickyContactBar />
        <CookieConsent />
      </body>
    </html>
  );
}
