"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ShieldCheck, CheckCircle2, ArrowRight, Loader2, Phone, MessageSquare } from "lucide-react";
import { trackFormSubmit } from "@/utils/analytics";

const leadSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  phone: z
    .string()
    .transform((val) => val.replace(/[\s\-()]/g, "").replace(/^(\+91|91|0)/, ""))
    .pipe(z.string().regex(/^[6-9]\d{9}$/, "Enter valid 10-digit mobile number")),
  locality: z.string().min(2, "Enter your neighborhood / locality"),
  society: z.string().optional(),
  botfield: z.string().optional(),
});

type LeadInputs = z.infer<typeof leadSchema>;

interface QuickLeadFormProps {
  serviceName: string;
  serviceSlug: string;
  cityName: string;
  citySlug?: string;
}

export default function QuickLeadForm({
  serviceName,
  serviceSlug,
  cityName,
}: QuickLeadFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [utmData, setUtmData] = useState({
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    gclid: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      setUtmData({
        utm_source: params.get("utm_source") || "",
        utm_medium: params.get("utm_medium") || "",
        utm_campaign: params.get("utm_campaign") || "",
        gclid: params.get("gclid") || "",
      });
    }
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadInputs>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      phone: "",
      locality: "",
      society: "",
      botfield: "",
    },
  });

  const onSubmit = async (data: LeadInputs) => {
    if (data.botfield) {
      setStatus("success");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          location: `${data.locality}, ${cityName}`,
          societyName: data.society || "",
          service: serviceSlug,
          message: `Inquiry for ${serviceName} in ${data.locality}${data.society ? ` (${data.society})` : ""}, ${cityName}.`,
          ...utmData,
        }),
      });

      if (response.ok) {
        trackFormSubmit(serviceSlug, `${cityName} - ${data.locality}`);
        setStatus("success");
        reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/40 text-slate-800">
      {/* Form Header */}
      <div className="border-b border-slate-100 pb-4 mb-5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#6D1A36] text-white text-[11px] font-black rounded-full mb-2 uppercase tracking-wide">
          <span>🔥 Flat 20% OFF • 10-Year Warranty</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
          Get Instant Quote in {cityName}
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Share your details below. Our local {cityName} team will contact you within 15 minutes.
        </p>
      </div>

      {status === "success" ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-lg font-bold text-slate-900">Thank You! Request Received</h4>
          <p className="text-xs text-slate-600 max-w-xs mx-auto">
            Our safety specialist is reviewing your request for <strong>{serviceName}</strong> and will call you shortly on your provided mobile number.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/919972055520?text=Hi%20Sangeetha%20Safety%20Nets%2C%20I%20just%20submitted%20a%20quote%20request%20for%20${encodeURIComponent(
                serviceName
              )}%20in%20${encodeURIComponent(cityName)}.`}
              target="_blank"
              rel="noopener noreferrer"
              data-track-cta="whatsapp"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-xs font-bold rounded-xl shadow-md hover:bg-[#20BD5A] transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>
            <a
              href="tel:+919972055520"
              data-track-cta="phone"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#6D1A36] text-white text-xs font-bold rounded-xl shadow-md hover:bg-[#55142A] transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call +91 99720 55520</span>
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
          {/* Honeypot field for bot protection */}
          <input type="text" {...register("botfield")} className="hidden" tabIndex={-1} autoComplete="off" />

          {/* Name Field */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
            <input
              type="text"
              placeholder="e.g. Ramesh Kumar"
              {...register("name")}
              className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 border ${
                errors.name ? "border-rose-400 bg-rose-50/20" : "border-slate-200"
              } rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#6D1A36] focus:bg-white transition-all`}
            />
            {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name.message}</p>}
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">WhatsApp / Phone Number *</label>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400">
                +91
              </span>
              <input
                type="tel"
                placeholder="98765 43210"
                maxLength={15}
                {...register("phone")}
                className={`w-full pl-12 pr-3.5 py-2.5 text-sm bg-slate-50 border ${
                  errors.phone ? "border-rose-400 bg-rose-50/20" : "border-slate-200"
                } rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#6D1A36] focus:bg-white transition-all`}
              />
            </div>
            {errors.phone && <p className="text-[11px] text-rose-500 mt-1">{errors.phone.message}</p>}
          </div>

          {/* Locality & Society Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Neighborhood / Area *
              </label>
              <input
                type="text"
                placeholder={`e.g. Whitefield`}
                {...register("locality")}
                className={`w-full px-3.5 py-2.5 text-sm bg-slate-50 border ${
                  errors.locality ? "border-rose-400 bg-rose-50/20" : "border-slate-200"
                } rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#6D1A36] focus:bg-white transition-all`}
              />
              {errors.locality && <p className="text-[11px] text-rose-500 mt-1">{errors.locality.message}</p>}
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Apartment / Society (Optional)
              </label>
              <input
                type="text"
                placeholder={`e.g. Prestige Shantiniketan`}
                {...register("society")}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#6D1A36] focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Error notice */}
          {status === "error" && (
            <p className="text-xs text-rose-600 bg-rose-50 p-2.5 rounded-lg border border-rose-100">
              There was an issue sending your inquiry. Please call us directly at <strong>+91 99720 55520</strong>.
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "loading"}
            data-track-cta="form_submit"
            className="w-full py-3 px-4 bg-[#6D1A36] hover:bg-[#55142A] text-white font-bold text-sm rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all transform active:scale-[0.98] cursor-pointer disabled:opacity-75"
          >
            {status === "loading" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Securing your booking...</span>
              </>
            ) : (
              <>
                <span>Book Free Inspection Now</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          {/* Privacy Guarantee Note */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>100% Privacy Protected. Zero spam guarantee.</span>
          </div>
        </form>
      )}
    </div>
  );
}
