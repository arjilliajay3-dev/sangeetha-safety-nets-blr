# Sangeetha Safety Nets - Analytics, Tracking & SEO Verification Guide

This document outlines the tracking, analytics, conversion measurement, and search engine verification architecture for **Sangeetha Safety Nets and Invisible Grills** (`sangeethasafetynets.in`).

---

## 1. Environment Variables Configuration

All tracking tokens, analytics IDs, and verification meta codes are isolated in environment variables. Zero tracking code runs without explicit environment variables configured.

Create or update `.env.local` (or production environment variables on Vercel/hosting):

```bash
# Primary Domain Apex Canonical
NEXT_PUBLIC_SITE_URL=https://sangeethasafetynets.in

# Google Search Console Verification Meta Tag (e.g., google-site-verification content)
NEXT_PUBLIC_GSC_VERIFICATION=your-gsc-verification-code

# Google Analytics 4 Measurement ID (e.g., G-XXXXXXXXXX)
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX

# Google Ads Conversion Tracking ID (e.g., AW-XXXXXXXXXX)
NEXT_PUBLIC_ADS_ID=AW-XXXXXXXXXX
```

> **Safe No-Op Guarantee**:
> If any of these environment variables are omitted or blank, the Next.js runtime automatically suppresses the corresponding tracking scripts or meta tags, ensuring zero broken console errors and zero unwanted analytics requests.

---

## 2. Google Search Console (GSC) Verification

### Method A: Domain-Level DNS TXT Record (Recommended)
1. In Google Search Console, select **Add Property** -> **Domain**.
2. Enter `sangeethasafetynets.in` (without `https://` or `www`).
3. Copy the generated `TXT` verification token (e.g., `google-site-verification=abc123...`).
4. Log in to your DNS provider (Cloudflare, GoDaddy, Namecheap, etc.).
5. Add a TXT record:
   - **Type**: `TXT`
   - **Host/Name**: `@`
   - **Value**: `google-site-verification=abc123...`
   - **TTL**: Auto / 300 seconds
6. Return to Google Search Console and click **Verify**.

### Method B: HTML Meta Tag (Fallback)
1. If DNS access is restricted, select **URL prefix**: `https://sangeethasafetynets.in`.
2. Select **HTML tag** under Other verification methods.
3. Copy the string inside the `content="..."` attribute.
4. Set the value in your environment variables:
   ```bash
   NEXT_PUBLIC_GSC_VERIFICATION=abc123yourVerificationCode
   ```
5. Deploy or rebuild the application. The tag will be injected into `<head>` automatically.
6. Click **Verify** in Google Search Console.

---

## 3. Google Analytics 4 (GA4) Setup & Verification

### Stream Creation
1. Open [Google Analytics](https://analytics.google.com).
2. Create or navigate to the property **Sangeetha Safety Nets**.
3. Under **Admin > Data Streams**, click **Add stream > Web**.
4. Configure stream details:
   - **Website URL**: `https://sangeethasafetynets.in`
   - **Stream name**: `Sangeetha Web Production`
5. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`).
6. Set `NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX` in your production environment variables.

### Testing with GA4 DebugView
1. Install the **Google Analytics Debugger** Chrome extension (or use Google Tag Assistant at `tagassistant.google.com`).
2. Turn on the debugger and navigate to `https://sangeethasafetynets.in`.
3. In GA4, go to **Admin > DebugView**.
4. Verify that real-time events appear:
   - `page_view`
   - `scroll`
   - `session_start`

---

## 4. Google Ads Conversion Tracking

The website fires custom conversion events directly to Google Tag (`gtag.js`) and pushes events to `window.dataLayer`.

### Centralized Events Specification (`src/utils/analytics.ts`)

| Event Name | Trigger | Payload Parameters | Google Ads Conversion Action |
|:---|:---|:---|:---|
| `phone_click` | Customer taps any phone CTA / `tel:` link | `{ label: string, phone: "9972055520" }` | Primary Lead (Phone Call) |
| `whatsapp_click` | Customer taps any WhatsApp button / chat link | `{ label: string }` | Primary Lead (WhatsApp Chat) |
| `form_submit` | Customer successfully submits contact / lead form | `{ service: string, locality: string, value: 500, currency: "INR" }` | Primary Lead (Quote Request) |

### Linking Conversion Actions in Google Ads
1. Open [Google Ads](https://ads.google.com) > **Goals > Conversions > Summary**.
2. Click **New conversion action > Website**.
3. Enter `sangeethasafetynets.in` and scan.
4. Add conversion actions manually:
   - **Action 1: Phone Click**
     - Category: *Contact* or *Phone call lead*
     - Conversion name: `Phone Click - 9972055520`
     - Value: Use different values or fixed value (e.g., ₹500)
     - Count: One
   - **Action 2: WhatsApp Click**
     - Category: *Contact*
     - Conversion name: `WhatsApp Chat Lead`
     - Value: Fixed value (e.g., ₹500)
     - Count: One
   - **Action 3: Form Submit**
     - Category: *Submit lead form*
     - Conversion name: `Website Form Submit`
     - Value: Fixed value (e.g., ₹500)
     - Count: One
5. If using direct conversion IDs from Google Ads, set `NEXT_PUBLIC_ADS_ID=AW-XXXXXXXXXX` in your environment.

---

## 5. UTM Tracking & Attribution

All forms on the website (`ContactForm` and `QuickLeadForm`) automatically inspect `window.location.search` on mount and forward tracking parameters to the backend lead dispatch:

- `utm_source`: Identifies campaign source (e.g., `google`, `facebook`, `instagram`, `bing`)
- `utm_medium`: Identifies marketing medium (e.g., `cpc`, `organic`, `referral`, `social`)
- `utm_campaign`: Campaign identifier (e.g., `blr_whitefield_invisible_grills`)
- `gclid`: Google Click Identifier for Google Ads auto-tagging attribution

### Standard Campaign URL Builders
```text
https://sangeethasafetynets.in/services/balcony-safety-nets/whitefield?utm_source=google&utm_medium=cpc&utm_campaign=safety_nets_east_blr&utm_content=balcony_net
```

### Auto-Tagging in Google Ads
Ensure **Auto-tagging** is enabled in Google Ads (**Admin > Account settings > Auto-tagging: Yes**). This appends the `gclid` parameter to every campaign destination URL. When the user submits the form, the `gclid` is safely captured and attached to the email lead notification dispatched to `info.sangeethasafetynets@gmail.com`.

---

## 6. Technical SEO & Canonical Enforcement

- **Apex Primary**: `https://sangeethasafetynets.in`
- **WWW 301 Redirect**: Any incoming requests to `www.sangeethasafetynets.in` are permanently 301 redirected to the apex domain in `next.config.ts`.
- **Trailing Slash**: `trailingSlash: false` is configured across all routes.
- **Self-Referencing Canonicals**: All static and dynamic pages (`/`, `/services/*`, `/areas/*`, `/services/*/*`, `/areas/*/*`) output explicit, absolute self-referencing canonical URLs.
- **Indexable Headings**: Exactly one `<h1>` per page with logical `<h2>` and `<h3>` nesting.
- **Structured Data**: JSON-LD output for `LocalBusiness`, `Organization`, `Service`, `BreadcrumbList`, `WebSite`, and `FAQPage` with zero fabricated or self-authored review/rating schemas.

