"use client";

import Link from "next/link";
import {
  Home,
  Star,
  MessageSquare,
  CheckCircle2,
  Phone,
  Sparkles,
  HeartHandshake,
  ShieldCheck,
  Award,
  ExternalLink,
} from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import { siteConfig } from "@/data/site";
import { claimsConfig } from "@/data/claims";

export default function TestimonialsClient() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb navigation */}
        <nav
          className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-[#6D1A36] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-[#6D1A36] font-bold">Customer Experiences</span>
        </nav>

        {/* Page Hero Heading */}
        <div className="text-left max-w-3xl mb-12 flex flex-col gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6D1A36] bg-[#F6E9EE] px-3.5 py-1.5 rounded-full inline-block self-start border border-[#B9BEC7]/40">
            Installation Reviews
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Verified Homeowner Feedback &amp; Project Outcomes
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            At {siteConfig.legalEntity}, honest craftsmanship and uncompromised structural safety remain our founding tenets. Authentic project experiences from high-rise apartments, gated villas, and commercial properties across {siteConfig.city}.
          </p>
        </div>

        {/* Authentic Reviews Verification Notice */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm mb-16 text-center max-w-3xl mx-auto">
          <div className="w-16 h-16 bg-[#F6E9EE] text-[#6D1A36] rounded-full flex items-center justify-center mx-auto mb-6">
            <HeartHandshake className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            Direct Homeowner Feedback
          </h2>
          <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-xl mx-auto">
            Third-party verified customer reviews from Google Business Profile will appear here following account verification. We exclusively display authentic, confirmed feedback.
          </p>

          {siteConfig.gbpLink ? (
            <a
              href={siteConfig.gbpLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#6D1A36] hover:bg-[#55142A] text-white font-bold px-6 py-3.5 rounded-full text-xs sm:text-sm transition-all shadow-md"
            >
              <span>View Reviews on Google</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-5 py-2.5 rounded-full text-xs font-semibold border border-slate-200">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Google Business Profile Integration Pending Verification</span>
            </div>
          )}

          {/* Qualitative Trust Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-slate-100 text-left">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <ShieldCheck className="w-5 h-5 text-[#6D1A36] mb-2" />
              <h3 className="text-xs font-bold text-slate-900">{claimsConfig.warrantyDisplay}</h3>
              <p className="text-[11px] text-slate-500 mt-1">Official physical warranty certificate handed over on completion.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <Sparkles className="w-5 h-5 text-[#8A2F4D] mb-2" />
              <h3 className="text-xs font-bold text-slate-900">Zero Hidden Extras</h3>
              <p className="text-[11px] text-slate-500 mt-1">Itemized line pricing with structural fasteners and cleanup included.</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <Award className="w-5 h-5 text-emerald-600 mb-2" />
              <h3 className="text-xs font-bold text-slate-900">Complimentary Site Audit</h3>
              <p className="text-[11px] text-slate-500 mt-1">Digital optical measurements with tangible material samples.</p>
            </div>
          </div>
        </div>

        {/* Trust Bottom Banner */}
        <div className="bg-[#6D1A36] text-white rounded-3xl p-8 sm:p-10 mb-16 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#B9BEC7] text-[#2F2F33] px-3 py-1 rounded-full text-xs font-black uppercase mb-3">
              <HeartHandshake className="w-3.5 h-3.5 text-[#6D1A36]" />
              <span>Bengaluru Quality Record</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Schedule Your Free Balcony Assessment
            </h2>
            <p className="text-slate-200 text-xs sm:text-sm mt-2 max-w-xl">
              Our safety technicians visit your property with optical measurement tools and cable swatches. Transparent quotation with zero obligation.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={siteConfig.phoneTel}
              className="bg-white hover:bg-[#F6E9EE] text-[#2F2F33] font-black px-6 py-3.5 rounded-full text-xs sm:text-sm transition-all shadow-md flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#6D1A36]" />
              <span>Call {siteConfig.phoneDisplay}</span>
            </a>
          </div>
        </div>

        {/* Lead Form */}
        <ContactForm />
      </div>
    </div>
  );
}
