# Sangeetha Safety Nets — Business Information & Asset Audit

This document tracks business profile data, operational parameters, and digital marketing assets for **Sangeetha Enterprises** (**Sangeetha Safety Nets and Invisible Grills**), distinguishing verified items from pending client deliverables.

---

## 1. Verified & Active Business Parameters

| Parameter | Confirmed Value | Integration Status |
| :--- | :--- | :--- |
| **Legal Business Entity** | Sangeetha Enterprises | Active in Privacy, Terms, and Footer |
| **Commercial Brand Name** | Sangeetha Safety Nets and Invisible Grills | Uniform across all title tags, headings & schema |
| **Short Brand / Monogram** | Sangeetha Safety Nets / "S" Monogram | Implemented in SVG logos and favicon suite |
| **Head Office Address** | Marathahalli, Bengaluru, Karnataka, PIN 560037 | Configured in `src/data/site.ts` & LocalBusiness schema |
| **Primary Telephone** | +91 99720 55520 (`9972055520`) | Dialers (`tel:+919972055520`) across header, footer & sticky bar |
| **Primary WhatsApp** | +91 99720 55520 (`https://wa.me/919972055520`) | Direct WhatsApp CTAs with prefilled inquiry parameters |
| **Official Email** | `info.sangeethasafetynets@gmail.com` | Configured across contact forms and API lead dispatchers |
| **Apex Canonical Domain** | `https://sangeethasafetynets.in` | Canonical tags, sitemap, robots.txt, and metadata |
| **Service Portfolio** | 19 Full Services (11 Nets, 5 Grills, 3 Hangers) | Fully mapped in `servicesData.ts` and dynamic routes |
| **Locality Coverage** | 111 Localities across 5 Bengaluru Zones | Fully mapped in `areasData.ts` and dynamic routes |
| **Price Brackets** | ₹16–₹28/sq.ft (Nets), ₹130–₹165/sq.ft (Grills), ₹1,400–₹2,400 (Hangers) | Confirmed in `pricing.ts` and interactive Cost Calculator |
| **Warranty Guarantee** | 10-Year Comprehensive Replacement Warranty | Standardized in `claims.ts`, hero badges, and service cards |
| **Special Promotion** | Flat 20% OFF on Installation for New Bookings | Standardized in `offers.ts`, form banners, and CTA tags |
| **Google Search Console** | HTML file (`googlec70527b3b1b52511.html`) + Meta verification tag | Uploaded in `public/` and injected in `<head>` |

---

## 2. Pending Client Assets (Optional / Future Enhancements)

The platform is 100% production-ready and fully operational. The following non-blocking assets can be provided by the client as available:

### 2.1 Google Business Profile (GBP / GMB) Short Link
- **Current Fallback:** Standard map link to Marathahalli, Bengaluru hub.
- **Client Action Required:** Once Google Business Profile verification postcard/video is completed for Marathahalli, provide the direct GBP review link (`https://g.page/r/.../review`).
- **Impact:** Will allow rendering verified 3rd-party Google Reviews widget and injecting compliant aggregateRating schema.

### 2.2 GSTIN & Registration Certificates
- **Current State:** Mentioned as registered MSME enterprise in Terms & Privacy.
- **Client Action Required:** Provide GSTIN number if client wishes to display tax invoice registration in footer or invoices.
- **Impact:** Strengthens enterprise B2B inquiries for commercial construction and school sports net contracts.

### 2.3 Real Installation Jobsite Photography
- **Current State:** Architectural and realistic installation mockups/SVGs with neutral descriptive alt text. `hasRealPhotos: false` toggle safely renders comparison cards in `BeforeAfter.tsx`.
- **Client Action Required:** High-resolution smartphone photos of actual technician installations at specific Bengaluru societies (Sobha, Prestige, Brigade).
- **Impact:** Flip `hasRealPhotos: true` in `src/data/beforeAfter.ts` and populate `src/data/projects.ts` with authentic client photos.

### 2.4 Physical Office Exterior & Reception Photo
- **Current State:** Clean vector badge and location map.
- **Client Action Required:** Photo of the Marathahalli office signboard / dispatch warehouse.
- **Impact:** Useful for Google Maps optimization and About page media.

