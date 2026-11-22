# Sangeetha Safety Nets — Comprehensive SEO & Schema Checklist

This quality checklist verifies technical SEO implementation across all routes of `https://sangeethasafetynets.in`.

---

## 1. Domain, Host & Crawlability Verification

- [x] **Apex Canonical Enforcement:** Single primary host `https://sangeethasafetynets.in`. No internal links or canonical tags pointing to `www` or `http`.
- [x] **Redirect Loop Prevention:** No circular 308 redirects between edge routing and Next.js application layer.
- [x] **Robots.txt (`/robots.txt`):**
  - Allows search engine crawlers (`User-agent: *`, `Allow: /`).
  - Disallows internal build endpoints (`Disallow: /api/`, `Disallow: /_next/`).
  - References canonical sitemap: `Sitemap: https://sangeethasafetynets.in/sitemap.xml`.
- [x] **XML Sitemap (`/sitemap.xml`):**
  - Dynamically generated with valid ISO timestamps (`lastmod`).
  - Contains all static pages (Home, About, Contact, Projects, Blog, Privacy, Terms, FAQ).
  - Contains all 19 service routes (`/services/[service]`).
  - Contains all 111 locality routes (`/areas/[area]`).
  - Zero 404, 301, or broken redirect targets.
- [x] **Google Search Console Verification:**
  - Active HTML verification file: `/googlec70527b3b1b52511.html`.
  - Verification `<meta name="google-site-verification" content="gbeqREWX5mErl8WrC3m2SZNQOaaKXyqTcZHSmU3Ea9I" />` injected into `<head>`.

---

## 2. On-Page Metadata & Semantic Markup

- [x] **Title Tags (< 60 Characters):**
  - Homepage: `Sangeetha Safety Nets | Balcony Nets & Grills Bengaluru` (56 chars).
  - Services: `[Service Name] in Bengaluru | Sangeetha Safety Nets` (≤ 58 chars).
  - Localities: `Safety Nets in [Locality], Bengaluru | Sangeetha` (≤ 55 chars).
  - Zero keyword stuffing or duplicate title templates.
- [x] **Meta Descriptions (< 160 Characters):**
  - Unique value proposition on every route (10-Yr Warranty, Flat 20% OFF, UV copolymer, SS316 marine steel).
  - Clear call-to-action featuring phone number `+91 99720 55520`.
  - All descriptions verified under 160 characters.
- [x] **Heading Structure (H1 -> H2 -> H3):**
  - Exactly one descriptive `H1` tag per page.
  - Logical `H2` subheadings for Features, Process, Pricing, Specifications, and FAQs.
  - Zero skipped heading levels.
- [x] **Image Alt Attributes:**
  - 100% of image elements have descriptive, neutral alt attributes describing material, location, or installation process.
  - Zero misleading accreditation claims or keyword spam in alt text.
- [x] **Social Meta Tags (OpenGraph & Twitter):**
  - `og:title`, `og:description`, `og:url`, `og:type="website"`.
  - Valid `og:image` path (`https://sangeethasafetynets.in/images/og-image.webp` - 1200x630px).
  - `twitter:card="summary_large_image"`.

---

## 3. Structured Data (JSON-LD) Validation

- [x] **LocalBusiness / HomeAndConstructionBusiness Schema:**
  - Legal Name: `Sangeetha Enterprises`.
  - Commercial Name: `Sangeetha Safety Nets and Invisible Grills`.
  - Address: Marathahalli, Bengaluru, Karnataka (560037).
  - Telephone: `+919972055520`.
  - Opening Hours: Monday–Sunday, 08:00 – 20:00.
  - **Zero Self-Authored Reviews or Fake AggregateRating:** Verified 100% clean of fake reviews to prevent Google algorithmic penalties.
- [x] **Service Schema:**
  - Injected across all 19 service landing pages.
  - Connects service type to Sangeetha Safety Nets provider profile.
- [x] **BreadcrumbList Schema:**
  - Multi-tiered hierarchical breadcrumbs matching visible UI navigation paths.
- [x] **FAQPage Schema:**
  - Attached to service pages and area hubs with authentic, non-placeholder Q&A pairs.

---

## 4. Conversion & Telemetry Checks

- [x] **Phone Call Click-to-Call:** All telephone links correctly formatted with `tel:+919972055520` and tracked via `data-track-cta="phone"`.
- [x] **WhatsApp Chat Direct Links:** Formatted with `https://wa.me/919972055520?text=...` and tracked via `data-track-cta="whatsapp"`.
- [x] **Form Conversion Handling:** `QuickLeadForm` and `ContactForm` push `form_submit` events to `window.dataLayer` on HTTP 200 response.

