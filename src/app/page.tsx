import HeroCarousel from "@/components/sections/HeroCarousel";
import MarqueeTicker from "@/components/sections/MarqueeTicker";
import Stats from "@/components/sections/Stats";
import FeaturedServices from "@/components/sections/FeaturedServices";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CostCalculator from "@/components/sections/CostCalculator";
import ServiceAreas from "@/components/sections/ServiceAreas";
import BeforeAfter from "@/components/sections/BeforeAfter";
import CustomerReviews from "@/components/sections/CustomerReviews";
import Materials from "@/components/sections/Materials";
import ServiceCategories from "@/components/sections/ServiceCategories";
import InstallationProcess from "@/components/sections/InstallationProcess";
import FAQAccordion from "@/components/sections/FAQAccordion";
import Team from "@/components/sections/Team";
import ContactForm from "@/components/forms/ContactForm";
import { siteConfig } from "@/data/site";

export default function Home() {
  const searchActionSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.name,
    "alternateName": siteConfig.shortName,
    "url": siteConfig.siteUrl,
    "description": `Engineered balcony safety nets, marine-grade SS316 invisible grills, and cloth drying hangers across ${siteConfig.city}, Karnataka.`,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteConfig.siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      {/* SearchAction Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(searchActionSchema) }}
      />

      {/* Varied, Flow-Optimized Homepage Structure */}
      <HeroCarousel />
      <MarqueeTicker />
      <Stats />
      <FeaturedServices />
      <WhyChooseUs />
      <CostCalculator />
      <ServiceAreas />
      <BeforeAfter />
      {/* CustomerReviews is hidden until authentic Google Business Profile reviews are provided */}
      <CustomerReviews />
      <Materials />
      <ServiceCategories />
      <InstallationProcess />
      <FAQAccordion />
      <Team />
      <ContactForm />
    </>
  );
}
