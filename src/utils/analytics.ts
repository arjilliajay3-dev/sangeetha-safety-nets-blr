// Analytics telemetry tracking helper functions (GTM, GA4, Google Ads, Clarity compatible)

interface DataLayerObject {
  event: string;
  [key: string]: unknown;
}

// Safe check to verify dataLayer is present on window
function pushToDataLayer(obj: DataLayerObject) {
  if (typeof window !== "undefined") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;
    win.dataLayer = win.dataLayer || [];
    win.dataLayer.push(obj);

    // Direct Google Ads / GA4 gtag.js custom event support (safe no-op if gtag absent)
    if (typeof win.gtag === "function") {
      win.gtag("event", obj.event, {
        ...obj,
      });
    }

    // Microsoft Clarity custom event support
    if (typeof win.clarity === "function") {
      win.clarity("event", obj.event, {
        category: obj.category || "interactivity",
        ...obj,
      });
    }
  }
}

export function trackPhoneClick(location: string) {
  pushToDataLayer({
    event: "phone_click",
    label: location,
    phone: "9972055520",
    category: "CTA Clicks",
    action: "Call Action Initiated",
  });
  if (typeof window !== "undefined") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;
    if (typeof win.gtag === "function") {
      win.gtag("event", "phone_click", {
        label: location,
        phone: "9972055520",
      });
      win.gtag("event", "contact", {
        method: "phone",
        event_label: location,
      });
    }
  }
}

export function trackWhatsAppClick(location: string) {
  pushToDataLayer({
    event: "whatsapp_click",
    label: location,
    category: "CTA Clicks",
    action: "WhatsApp Chat Initiated",
  });
  if (typeof window !== "undefined") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;
    if (typeof win.gtag === "function") {
      win.gtag("event", "whatsapp_click", {
        label: location,
      });
      win.gtag("event", "contact", {
        method: "whatsapp",
        event_label: location,
      });
    }
  }
}

export function trackFormSubmit(service: string, locality: string) {
  pushToDataLayer({
    event: "form_submit",
    service,
    locality,
    category: "Form Actions",
    action: "Lead Form Submission",
  });
  if (typeof window !== "undefined") {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const win = window as any;
    if (typeof win.gtag === "function") {
      win.gtag("event", "form_submit", {
        service,
        locality,
      });
      win.gtag("event", "generate_lead", {
        currency: "INR",
        value: 500,
        service,
        locality,
      });
      if (process.env.NEXT_PUBLIC_ADS_ID) {
        win.gtag("event", "conversion", {
          send_to: process.env.NEXT_PUBLIC_ADS_ID,
          value: 500,
          currency: "INR",
        });
      }
    }
  }
}

export function trackQuoteRequest(service: string, source: string) {
  pushToDataLayer({
    event: "quote_request",
    category: "Form Actions",
    action: "Quote Requested",
    label: `Service: ${service} | Source: ${source}`,
  });
}

export function trackScrollDepth(depthPercentage: number) {
  pushToDataLayer({
    event: "scroll_depth",
    category: "User Behavior",
    action: "Page Scroll Depth",
    label: `${depthPercentage}% Scroll`,
  });
}
