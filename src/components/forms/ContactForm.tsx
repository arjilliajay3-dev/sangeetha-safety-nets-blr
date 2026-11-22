"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Phone, Mail, Send, CheckCircle2, AlertCircle, Loader2, MessageSquare } from "lucide-react";
import { trackFormSubmit } from "@/utils/analytics";
import { siteConfig } from "@/data/site";
import { claimsConfig } from "@/data/claims";

// Zod Validation Schema matching Indian format rules
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  phone: z
    .string()
    .transform((val) => val.replace(/[\s\-()]/g, "").replace(/^(\+91|91|0)/, ""))
    .pipe(
      z.string().regex(/^[6-9]\d{9}$/, {
        message: "Enter a valid 10-digit Indian mobile number (starts with 6-9).",
      })
    ),
  area: z.string().min(2, { message: "Please specify your Bengaluru neighborhood." }),
  society: z.string().optional(),
  service: z.string().min(1, { message: "Please select a service category." }),
  message: z.string().optional(),
  botfield: z.string().optional(), // Honeypot spam block field
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

const servicesList = [
  { value: "balcony-safety-nets", label: "Balcony Safety Nets" },
  { value: "children-safety-nets", label: "Children Safety Nets" },
  { value: "pet-safety-nets", label: "Pet Safety Nets" },
  { value: "pigeon-safety-nets", label: "Pigeon Safety Nets" },
  { value: "monkey-safety-nets", label: "Monkey Safety Nets" },
  { value: "cricket-nets", label: "Cricket Practice Nets" },
  { value: "sports-nets", label: "Sports Nets" },
  { value: "construction-safety-nets", label: "Construction Safety Nets" },
  { value: "duct-area-safety-nets", label: "Duct Area Safety Nets" },
  { value: "anti-bird-spikes", label: "Anti-Bird Spikes" },
  { value: "mosquito-nets", label: "Mosquito Nets for Windows & Balconies" },
  { value: "balcony-invisible-grills", label: "Balcony Invisible Grills" },
  { value: "children-invisible-grills", label: "Children Invisible Grills" },
  { value: "pet-invisible-grills", label: "Pet Invisible Grills" },
  { value: "window-invisible-grills", label: "Window Invisible Grills" },
  { value: "staircase-invisible-grills", label: "Staircase Invisible Grills" },
  { value: "ceiling-cloth-hangers", label: "Ceiling Cloth Hangers" },
  { value: "balcony-cloth-hangers", label: "Balcony Cloth Hangers" },
  { value: "wall-mounted-cloth-hangers", label: "Wall Mounted Cloth Hangers" },
];

export default function ContactForm() {
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
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      phone: "",
      area: "",
      society: "",
      service: "",
      message: "",
      botfield: "",
    },
  });

  const onSubmit = async (data: ContactFormInputs) => {
    // Honeypot spam check - silently reject bots without hitting server
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
          location: data.area,
          societyName: data.society || "",
          service: data.service,
          message: data.message,
          ...utmData,
        }),
      });

      if (response.ok) {
        trackFormSubmit(data.service, data.area);
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
    <section className="bg-[#6D1A36] text-white py-24 scroll-mt-12" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-black uppercase tracking-widest text-white bg-[#55142A] px-3.5 py-1.5 rounded-full inline-block self-start shadow-md border border-white/20">
                🔥 Flat 20% OFF • {claimsConfig.warrantyDisplay} Included
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Request a Free On-Site Measurement &amp; Quotation
              </h2>
              <p className="text-slate-200 text-sm leading-relaxed">
                Fill out the form to schedule a site measurement visit. Our technician will visit your location in {siteConfig.city} with authentic material samples and provide an exact, itemized estimate.
              </p>
            </div>

            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-4 bg-white/10 backdrop-blur-xs p-5 rounded-2xl border border-white/20 hover:border-white/40 hover:shadow-md transition-all">
                <div className="p-3 bg-white text-[#6D1A36] rounded-xl shrink-0 font-black">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs uppercase font-extrabold text-amber-300 block tracking-wider">
                    Direct Phone / Call Booking
                  </span>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <a
                      href={siteConfig.phoneTel}
                      data-track-cta="phone"
                      className="text-sm sm:text-base font-bold text-white hover:text-amber-200 transition-colors"
                    >
                      {siteConfig.phoneDisplay}
                    </a>
                  </div>
                </div>
              </div>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-xs p-5 rounded-2xl border border-white/20 hover:border-white/40 hover:shadow-md transition-all group"
              >
                <div className="p-3 bg-white text-[#6D1A36] rounded-xl shrink-0 group-hover:bg-amber-100 transition-colors duration-300 font-black">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-extrabold text-amber-300 block tracking-wider">
                    Email Inquiry
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white group-hover:text-amber-200 transition-colors truncate block max-w-[240px] sm:max-w-none">
                    {siteConfig.email}
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7 bg-white text-slate-900 rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-100">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 flex flex-col items-center justify-center gap-4"
              >
                <div className="p-4 bg-emerald-50 rounded-full text-emerald-600">
                  <CheckCircle2 className="w-16 h-16" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800">Booking Request Received!</h3>
                <p className="text-slate-600 text-sm max-w-md leading-relaxed">
                  Thank you for reaching out to Sangeetha Safety Nets. Our Bengaluru team will contact you within 15 minutes to schedule your free doorstep laser measurement.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-3 mt-4">
                  <a
                    href="https://wa.me/919972055520?text=Hi%20Sangeetha%20Safety%20Nets%2C%20I%20just%20submitted%20a%20quote%20request%20on%20your%20website."
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track-cta="whatsapp"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366] text-white text-xs font-bold rounded-xl shadow-md hover:bg-[#20BD5A] transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Connect on WhatsApp Instantly</span>
                  </a>
                  <button
                    onClick={() => setStatus("idle")}
                    className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold px-6 py-3 rounded-xl cursor-pointer transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
                {status === "error" && (
                  <div className="p-4 bg-red-50 border border-red-100 text-red-700 rounded-xl text-xs flex items-center gap-3" role="alert">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>Something went wrong. Please call us directly at +91 99720 55520 or try submitting again.</span>
                  </div>
                )}

                {/* Honeypot Spam Shield Input - Hidden from human eyes */}
                <input
                  type="text"
                  autoComplete="off"
                  {...register("botfield")}
                  className="hidden"
                  tabIndex={-1}
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-slate-700 tracking-wide">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="e.g. Anand Kumar"
                      aria-required="true"
                      aria-invalid={errors.name ? "true" : "false"}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      {...register("name")}
                      className={`w-full bg-slate-50 border px-4 py-3 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#6D1A36]/30 transition-all ${
                        errors.name ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-[#6D1A36]"
                      }`}
                    />
                    {errors.name && (
                      <span id="name-error" className="text-[10px] text-red-500 font-semibold" role="alert">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-slate-700 tracking-wide">
                      Mobile Number (WhatsApp Preferred) *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="e.g. 98765 43210"
                      aria-required="true"
                      aria-invalid={errors.phone ? "true" : "false"}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                      {...register("phone")}
                      className={`w-full bg-slate-50 border px-4 py-3 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#6D1A36]/30 transition-all ${
                        errors.phone ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-[#6D1A36]"
                      }`}
                    />
                    {errors.phone && (
                      <span id="phone-error" className="text-[10px] text-red-500 font-semibold" role="alert">
                        {errors.phone.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Area in Bangalore */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="area" className="text-xs font-bold text-slate-700 tracking-wide">
                      Your City or Locality in Bengaluru *
                    </label>
                    <input
                      type="text"
                      id="area"
                      placeholder="e.g. Whitefield, Koramangala, Marathahalli..."
                      aria-required="true"
                      aria-invalid={errors.area ? "true" : "false"}
                      aria-describedby={errors.area ? "area-error" : undefined}
                      {...register("area")}
                      className={`w-full bg-slate-50 border px-4 py-3 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#6D1A36]/30 transition-all ${
                        errors.area ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-[#6D1A36]"
                      }`}
                    />
                    {errors.area && (
                      <span id="area-error" className="text-[10px] text-red-500 font-semibold" role="alert">
                        {errors.area.message}
                      </span>
                    )}
                  </div>

                  {/* Apartment / Society */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="society" className="text-xs font-bold text-slate-700 tracking-wide">
                      Apartment / Society (Optional)
                    </label>
                    <input
                      type="text"
                      id="society"
                      placeholder="e.g. Sobha Dream Acres, Brigade Metropolis..."
                      {...register("society")}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-[#6D1A36] px-4 py-3 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#6D1A36]/30 transition-all"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" className="text-xs font-bold text-slate-700 tracking-wide">
                    Select Safety Service *
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      aria-required="true"
                      aria-invalid={errors.service ? "true" : "false"}
                      aria-describedby={errors.service ? "service-error" : undefined}
                      {...register("service")}
                      className={`w-full bg-slate-50 border px-4 py-3 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#6D1A36]/30 transition-all appearance-none cursor-pointer ${
                        errors.service ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-[#6D1A36]"
                      }`}
                    >
                      <option value="">-- Choose Installation --</option>
                      {servicesList.map((item) => (
                        <option key={item.value} value={item.value}>
                          {item.label}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                  {errors.service && (
                    <span id="service-error" className="text-[10px] text-red-500 font-semibold" role="alert">
                      {errors.service.message}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-slate-700 tracking-wide">
                    Additional Message or Specific Dimensions (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Describe your requirement (e.g. balcony size, floor number, open windows count, etc.)"
                    {...register("message")}
                    className="w-full bg-slate-50 border border-slate-200 focus:border-[#6D1A36] px-4 py-3 rounded-xl text-sm focus:outline-hidden focus:ring-2 focus:ring-[#6D1A36]/30 transition-all resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  data-track-cta="form_submit"
                  className="w-full bg-[#6D1A36] hover:bg-[#55142A] text-white font-bold py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-sm focus:outline-hidden focus:ring-2 focus:ring-[#6D1A36] focus:ring-offset-2"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Securing your booking...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Request Free Site Visit &amp; Quote</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
