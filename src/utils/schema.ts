import {
  SITE_URL,
  BRAND_NAME,
  FULL_LEGAL_NAME,
  FORMAL_BRAND_NAME,
  DISPLAY_PHONE,
  PRIMARY_PHONE,
  PRIMARY_EMAIL,
  CITY_NAME,
  REGION_NAME,
  WHATSAPP_LINK,
} from "@/utils/siteConfig";
import { PRICING_CONFIRMED } from "@/data/pricing";

export interface SchemaBreadcrumb {
  name: string;
  item: string;
}

export const CITIES_BANGALORE = [
  "Whitefield",
  "Koramangala",
  "Indiranagar",
  "HSR Layout",
  "Electronic City",
  "Marathahalli",
  "Jayanagar",
  "Yelahanka",
  "JP Nagar",
  "Bannerghatta Road",
  "Sarjapur Road",
  "BTM Layout",
  "Hebbal",
  "Rajajinagar",
];

export const ALL_19_SERVICES = [
  "Balcony Safety Nets",
  "Children Safety Nets",
  "Pet Safety Nets",
  "Pigeon Safety Nets",
  "Monkey Safety Nets",
  "Cricket Practice Nets",
  "Sports Netting",
  "Construction Safety Nets",
  "Duct Area Safety Nets",
  "Anti-Bird Spikes",
  "Mosquito Nets for Windows & Balconies",
  "Balcony Invisible Grills",
  "Children Invisible Grills",
  "Pet Invisible Grills",
  "Window Invisible Grills",
  "Staircase & Duplex Invisible Grills",
  "Ceiling Cloth Drying Hangers",
  "Balcony Cloth Drying Hangers",
  "Wall Mounted Cloth Hangers",
];

export const ALL_18_SERVICES = ALL_19_SERVICES; // Backwards compatibility

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": BRAND_NAME,
    "legalName": FULL_LEGAL_NAME,
    "url": SITE_URL,
    "logo": `${SITE_URL}/images/logo/sangeetha-safetynets-logo.webp`,
    "image": `${SITE_URL}/images/og-image.webp`,
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": DISPLAY_PHONE,
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Kannada", "Hindi", "Telugu", "Tamil"],
      },
    ],
  };
}

export function generateLocalBusinessSchema(areaName?: string) {
  const citiesServed = areaName
    ? [areaName]
    : CITIES_BANGALORE;

  return {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": `${SITE_URL}/#localbusiness${areaName ? `-${areaName.toLowerCase().replace(/\s+/g, "-")}` : ""}`,
    "name": areaName ? `${BRAND_NAME} - ${areaName}` : FORMAL_BRAND_NAME,
    "legalName": FULL_LEGAL_NAME,
    "url": areaName
      ? `${SITE_URL}/areas/${areaName.toLowerCase().replace(/\s+/g, "-")}`
      : SITE_URL,
    "telephone": DISPLAY_PHONE,
    "email": PRIMARY_EMAIL,
    "image": `${SITE_URL}/images/og-image.webp`,
    "logo": `${SITE_URL}/images/logo/sangeetha-safetynets-logo.webp`,
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": areaName ? `${areaName}, Bengaluru, Karnataka` : "Bengaluru, Karnataka",
      "addressLocality": areaName || "Bengaluru",
      "addressRegion": "Karnataka",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 12.9716,
      "longitude": 77.5946,
    },
    "areaServed": citiesServed.map((city) => ({
      "@type": "City",
      "name": `${city}, Bengaluru, Karnataka`,
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Safety Nets, Invisible Grills & Cloth Hangers Installation Services",
      "itemListElement": ALL_19_SERVICES.map((srv, idx) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": srv,
          "provider": {
            "@type": "LocalBusiness",
            "name": BRAND_NAME,
          },
        },
        "position": idx + 1,
      })),
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      "opens": "08:00",
      "closes": "20:00",
    },
    "sameAs": [
      `https://wa.me/91${PRIMARY_PHONE}`,
    ],
  };
}

export function generateServiceProductSchema(serviceName: string, serviceSlug: string) {
  const baseSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${serviceName} Installation in ${CITY_NAME}`,
    "description": `Certified ${serviceName.toLowerCase()} and professional installation by ${BRAND_NAME} across ${CITY_NAME}, ${REGION_NAME}.`,
    "brand": {
      "@type": "Brand",
      "name": BRAND_NAME,
    },
  };

  if (PRICING_CONFIRMED) {
    baseSchema.offers = {
      "@type": "AggregateOffer",
      "priceCurrency": "INR",
      "lowPrice": "15",
      "highPrice": "180",
      "offerCount": "100+",
      "availability": "https://schema.org/InStock",
      "url": `${SITE_URL}/services/${serviceSlug}`,
    };
  } else {
    baseSchema.offers = {
      "@type": "Offer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": `${SITE_URL}/services/${serviceSlug}`,
    };
  }

  return baseSchema;
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    "name": BRAND_NAME,
    "url": SITE_URL,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function generateBreadcrumbSchema(items: SchemaBreadcrumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((crumb, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": crumb.name,
      "item": crumb.item.startsWith("http")
        ? crumb.item
        : `${SITE_URL}${crumb.item.startsWith("/") ? "" : "/"}${crumb.item}`,
    })),
  };
}

export function generateServiceSchema(serviceName: string, categoryName?: string, description?: string) {
  const serviceSlug = serviceName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services#service-${serviceSlug}`,
    "serviceType": categoryName || serviceName,
    "name": serviceName,
    "description": description || `${serviceName} professional installation in Bengaluru by ${BRAND_NAME}.`,
    "provider": {
      "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
      "@id": `${SITE_URL}/#localbusiness`,
      "name": FORMAL_BRAND_NAME,
      "legalName": FULL_LEGAL_NAME,
      "telephone": DISPLAY_PHONE,
      "email": PRIMARY_EMAIL,
      "url": SITE_URL,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bengaluru, Karnataka",
        "addressLocality": "Bengaluru",
        "addressRegion": "Karnataka",
        "addressCountry": "IN",
      },
    },
    "areaServed": {
      "@type": "City",
      "name": "Bengaluru, Karnataka",
    },
  };
}

export function generateServiceAreaSchema(serviceName: string, areaName: string) {
  const serviceSlug = serviceName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const areaSlug = areaName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${serviceSlug}/${areaSlug}#service`,
    "serviceType": serviceName,
    "name": `${serviceName} in ${areaName}, Bengaluru`,
    "provider": {
      "@type": ["HomeAndConstructionBusiness", "LocalBusiness"],
      "@id": `${SITE_URL}/#localbusiness-${areaSlug}`,
      "name": BRAND_NAME,
      "telephone": DISPLAY_PHONE,
      "email": PRIMARY_EMAIL,
      "url": SITE_URL,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": `${areaName}, Bengaluru, Karnataka`,
        "addressLocality": areaName,
        "addressRegion": "Karnataka",
        "addressCountry": "IN",
      },
    },
    "areaServed": {
      "@type": "City",
      "name": `${areaName}, Bengaluru, Karnataka`,
    },
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };
}

export const generateFAQPageSchema = generateFAQSchema;

export function generateArticleSchema(
  articleOrTitle:
    | string
    | {
        title: string;
        description: string;
        slug?: string;
        datePublished: string;
        authorName?: string;
        image?: string;
      },
  description?: string,
  image?: string,
  datePublished?: string
) {
  if (typeof articleOrTitle === "object") {
    const article = articleOrTitle;
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.title,
      "description": article.description,
      "mainEntityOfPage": article.slug ? `${SITE_URL}/blog/${article.slug}` : SITE_URL,
      "datePublished": article.datePublished,
      "dateModified": article.datePublished,
      "author": {
        "@type": "Organization",
        "name": article.authorName || BRAND_NAME,
      },
      "publisher": {
        "@type": "Organization",
        "name": BRAND_NAME,
        "logo": {
          "@type": "ImageObject",
          "url": `${SITE_URL}/images/logo/sangeetha-safety-nets-logo-light.svg`,
        },
      },
      "image": article.image || `${SITE_URL}/images/og-image.webp`,
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": articleOrTitle,
    "description": description || "",
    "mainEntityOfPage": SITE_URL,
    "datePublished": datePublished || new Date().toISOString(),
    "dateModified": datePublished || new Date().toISOString(),
    "author": {
      "@type": "Organization",
      "name": BRAND_NAME,
    },
    "publisher": {
      "@type": "Organization",
      "name": BRAND_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": `${SITE_URL}/images/logo/sangeetha-safety-nets-logo-light.svg`,
      },
    },
    "image": image || `${SITE_URL}/images/og-image.webp`,
  };
}
