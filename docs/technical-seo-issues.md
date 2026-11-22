# Sangeetha Safety Nets — Technical SEO Priority Action Matrix

This document catalogs technical SEO items, architectural considerations, and ongoing guardrails for `https://sangeethasafetynets.in`.

---

## Priority Classifications
- **P0 (Critical / Blocker):** Must be resolved immediately to prevent de-indexation, redirect loops, or crawl failure.
- **P1 (High Priority):** Directly influences keyword ranking velocity, click-through rates, and rich result eligibility.
- **P2 (Medium / Enhancement):** Continuous performance, accessibility, and user experience enhancements.

---

## 1. P0 Items: Crawl, Indexation & Infrastructure

| Issue / Requirement | Description & Risk | Resolution / Architectural Rule | Status |
| :--- | :--- | :--- | :--- |
| **Apex vs WWW Canonicalization** | Dual indexation or infinite redirect loops if both Next.js app and Vercel edge try to redirect. | Enforced single apex `https://sangeethasafetynets.in`. Removed app-level redirects in `next.config.ts`; managed cleanly at Vercel Edge. | ✅ Resolved |
| **Robots.txt & Sitemap Integrity** | Blocked pages or dead URLs in sitemap degrade crawl budget. | Robots.txt serves at `/robots.txt` disallowing `/_next/` and `/api/`. Sitemap generates dynamically without broken links. | ✅ Resolved |
| **404 Handling & Soft-404s** | Soft 404s waste crawl budget and rank poorly. | Implemented custom branded 404 error page returning proper HTTP 404 status header with navigation back to key services. | ✅ Resolved |
| **Google Search Console Ownership** | Lack of ownership blocks sitemap submission and index inspection. | Uploaded `googlec70527b3b1b52511.html` and injected verification meta tag in `<head>` via `src/app/layout.tsx`. | ✅ Resolved |

---

## 2. P1 Items: Semantic SEO, Metadata & Structured Data

| Issue / Requirement | Description & Risk | Resolution / Architectural Rule | Status |
| :--- | :--- | :--- | :--- |
| **Title Tag Optimization** | Snippets exceeding 60 characters get truncated in SERPs. | Standardized formula: `[Service] in [Locality] | Sangeetha Safety Nets`. Guaranteed <60 chars across all routes. | ✅ Resolved |
| **Meta Description Quality** | Missing value proposition lowers CTR. Snippets >160 chars truncate. | Included 10-Yr Warranty, Flat 20% OFF, and contact number `9972055520`. All descriptions verified <160 chars. | ✅ Resolved |
| **Schema Compliance (Zero Fake Reviews)** | Algorithmic manual action / penalty for self-authored aggregateRating. | All `aggregateRating` and synthetic review schemas completely removed until 3rd-party verified GMB reviews are available. | ✅ Resolved |
| **Dynamic FAQPage Schema** | Enhanced visibility through SERP rich snippets. | Real, contextual FAQ schemas attached to service and area pages. Zero placeholder text. | ✅ Resolved |
| **Internal Linking Depth** | Orphaned locality pages fail to index. | High-traffic services link to top 4 flagship areas; area pages interlink with nearby corridor hubs and top services. | ✅ Resolved |

---

## 3. P2 Items: Core Web Vitals, CRO & Accessibility

| Issue / Requirement | Description & Risk | Resolution / Architectural Rule | Status |
| :--- | :--- | :--- | :--- |
| **Mobile Layout Shift (CLS)** | Fixed bottom bars can push content or overlap interactive buttons. | Sticky Contact Bar uses mobile-only media query (`md:hidden`), `fixed bottom-0 z-40`, and layout padding `pb-20 md:pb-0`. | ✅ Resolved |
| **Touch Target Sizing** | Mobile users mis-clicking buttons on 375px/390px viewports. | All interactive call and WhatsApp buttons have minimum dimensions of 48px × 48px meeting WCAG AA requirements. | ✅ Resolved |
| **Form Spam & Rate Limiting** | Bot submissions degrade email delivery and inflate lead volume. | Hidden honeypot fields (`botfield`, `website_url`) + in-memory IP rate limiter (5 submissions / 10 min window). | ✅ Resolved |
| **Dynamic Form Hydration** | Heavy forms can degrade Initial Server Render speed. | Forms isolated with client-side boundary and optimized state hooks; minimal external script overhead. | ✅ Resolved |

