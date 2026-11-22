"use client";

import Link from "next/link";
import { ShieldAlert, ArrowLeft, Layers, MessageSquare, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex items-center justify-center p-6 text-center select-none py-20">
      <div className="max-w-lg w-full bg-white rounded-3xl p-8 sm:p-12 border border-[#B9BEC7]/40 shadow-xl flex flex-col items-center gap-6">
        <div className="p-4 bg-[#F6E9EE] text-[#6D1A36] rounded-2xl shadow-xs border border-[#B9BEC7]/40">
          <ShieldAlert className="w-12 h-12" />
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-5xl font-black text-[#6D1A36] tracking-tight leading-none">404</span>
          <h1 className="text-xl font-extrabold text-slate-800">Page Not Found</h1>
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-sm mt-1">
            The safety netting or invisible grill route you are looking for has been moved or doesn&apos;t exist. Let&apos;s guide you back to secure ground.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex flex-col gap-3 pt-2">
          <Link
            href="/"
            className="w-full flex items-center justify-center gap-2 bg-[#6D1A36] hover:bg-[#55142A] text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-md text-xs sm:text-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/services"
              className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 px-3 rounded-xl transition-all text-xs border border-slate-200"
            >
              <Layers className="w-3.5 h-3.5 text-[#6D1A36]" />
              <span>All 19 Services</span>
            </Link>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 px-3 rounded-xl transition-all text-xs shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          <a
            href={siteConfig.phoneTel}
            className="text-xs text-slate-500 hover:text-[#6D1A36] font-semibold mt-2 flex items-center justify-center gap-1.5 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#8A2F4D]" />
            <span>Need immediate help? Call {siteConfig.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
