import { NextResponse } from "next/server";
import * as z from "zod";

// Shared contact validation schema
const serverContactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().transform((val) => {
    // Strip whitespace, hyphens, and leading +91 / 91 / 0
    return val.replace(/[\s\-()]/g, "").replace(/^(\+91|91|0)/, "");
  }).pipe(z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid 10-digit Indian mobile number")),
  location: z.string().min(2).max(150),
  societyName: z.string().max(150).optional(),
  apartmentName: z.string().max(150).optional(),
  service: z.string().min(2).max(100),
  message: z.string().max(1000).optional(),
  // Honeypot fields to trap bots silently
  botfield: z.string().max(100).optional(),
  website_url: z.string().max(100).optional(),
  // Marketing & attribution tracking
  utm_source: z.string().max(100).optional(),
  utm_medium: z.string().max(100).optional(),
  utm_campaign: z.string().max(100).optional(),
  gclid: z.string().max(150).optional(),
});

// In-memory sliding window rate limiter: max 5 requests per IP per 10 minutes
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;

// Clean up expired IP entries periodically
function cleanRateLimitMap(now: number) {
  if (rateLimitMap.size > 1000) {
    for (const [ip, timestamps] of rateLimitMap.entries()) {
      const active = timestamps.filter((time) => now - time < RATE_LIMIT_WINDOW);
      if (active.length === 0) {
        rateLimitMap.delete(ip);
      } else {
        rateLimitMap.set(ip, active);
      }
    }
  }
}

// Input sanitization to prevent XSS injection
function sanitizeString(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

export async function POST(request: Request) {
  try {
    // Client IP lookup for rate limiting
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip = forwardedFor ? forwardedFor.split(",")[0].trim() : "unknown-ip";

    const now = Date.now();
    cleanRateLimitMap(now);

    const timestamps = rateLimitMap.get(ip) || [];
    const recentRequests = timestamps.filter((time) => now - time < RATE_LIMIT_WINDOW);

    if (recentRequests.length >= MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a few minutes before submitting another quote request or call us directly at +91 99720 55520." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Check honeypot fields first - silently discard bot payloads without notifying bot
    if (body.botfield || body.website_url) {
      return NextResponse.json({
        success: true,
        message: "Quote request received.",
      });
    }

    // Server-side Zod validation
    const result = serverContactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data.", details: result.error.flatten() },
        { status: 400 }
      );
    }

    // Register submission timestamp against IP
    recentRequests.push(now);
    rateLimitMap.set(ip, recentRequests);

    const data = result.data;
    const name = sanitizeString(data.name);
    const phone = sanitizeString(data.phone);
    const location = sanitizeString(data.location);
    const society = data.societyName || data.apartmentName ? sanitizeString(data.societyName || data.apartmentName || "") : "";
    const service = sanitizeString(data.service);
    const message = data.message ? sanitizeString(data.message) : "";
    const utm_source = data.utm_source ? sanitizeString(data.utm_source) : "";
    const utm_medium = data.utm_medium ? sanitizeString(data.utm_medium) : "";
    const utm_campaign = data.utm_campaign ? sanitizeString(data.utm_campaign) : "";
    const gclid = data.gclid ? sanitizeString(data.gclid) : "";

    const leadPayload = {
      to: "info.sangeethasafetynets@gmail.com",
      subject: `New Lead: ${name} (${service}) - ${location}${society ? ` [${society}]` : ""}`,
      lead: {
        name,
        phone,
        location,
        society,
        service,
        message,
        utm_source,
        utm_medium,
        utm_campaign,
        gclid,
        submittedAt: new Date().toISOString(),
      },
    };

    console.log("Lead dispatched to info.sangeethasafetynets@gmail.com:", leadPayload);

    // If RESEND_API_KEY is configured in production, send automated notification email
    if (process.env.RESEND_API_KEY) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Sangeetha Safety Nets <onboarding@resend.dev>",
            to: ["info.sangeethasafetynets@gmail.com"],
            subject: leadPayload.subject,
            html: `
              <h2>New Safety Net / Invisible Grill Inquiry</h2>
              <p><strong>Customer Name:</strong> ${name}</p>
              <p><strong>Phone:</strong> <a href="tel:+91${phone}">+91 ${phone}</a></p>
              <p><strong>Location / Area:</strong> ${location}</p>
              ${society ? `<p><strong>Society / Apartment:</strong> ${society}</p>` : ""}
              <p><strong>Requested Service:</strong> ${service}</p>
              <p><strong>Notes:</strong> ${message || "Standard measurement inquiry"}</p>
              ${utm_source ? `<p><strong>Attribution:</strong> ${utm_source} / ${utm_medium} / ${utm_campaign} (GCLID: ${gclid || "None"})</p>` : ""}
              <p><strong>Received At:</strong> ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
            `,
          }),
        });
      } catch (err) {
        console.warn("Email dispatcher notice:", err);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Quote request successfully processed. Our team will contact you shortly.",
    });
  } catch (error) {
    console.error("Server-side contact form API error:", error);
    return NextResponse.json(
      { error: "Internal server error occurred." },
      { status: 500 }
    );
  }
}
