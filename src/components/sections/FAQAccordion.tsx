"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, Phone, MessageSquare, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";
import { claimsConfig } from "@/data/claims";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do Bengaluru gated societies and apartment RWAs approve your safety nets and invisible grills?",
      answer:
        "Yes, 100%. Traditional heavy iron bars are prohibited by most Bengaluru Apartment Owners Associations (AOA/RWA) because they alter building aesthetics and obstruct fire rescue ladders. Sangeetha's SS316 invisible grills and transparent virgin copolymer safety nets maintain complete external architectural uniformity while providing structural fall prevention. We provide documentation and specifications directly to your association management if required.",
    },
    {
      question: "How long does the installation take, and will drilling damage our balcony walls or tiles?",
      answer:
        "A standard apartment balcony installation takes approximately 2 to 3 hours from start to finish. We exclusively utilize diamond-core rotary drilling paired with active industrial HEPA dust extractors. This prevents vibration micro-cracking in concrete lintels, prevents tile chipping, and collects 99% of masonry powder before it touches your floor.",
    },
    {
      question: "What wind speeds and impact loads can your high-rise balcony nets and invisible grills endure?",
      answer:
        "High-altitude balconies in Bengaluru face heavy monsoonal turbulence and wind shear. Sangeetha's virgin knotted copolymer mesh is certified to resist point loads in excess of 140kg, while our marine SS316 multi-strand wire cables resist dynamic tensile loads up to 400kg. The aerodynamic profile allows wind to pass freely without vibration noise, fluttering, or anchor loosening.",
    },
    {
      question: "Are your safety nets resistant to pet claws and chewing?",
      answer:
        "Yes. For cat and dog owners, we install specialized high-density knotted virgin copolymer netting or stainless invisible grills spaced at 2-inch intervals. Unlike lightweight nylon thread, our heavy-gauge mono-filament cords resist gnawing, biting, and aggressive claw scratching, preventing both falls and escapes.",
    },
    {
      question: "How should we clean and maintain our safety nets and invisible grills?",
      answer:
        "Maintenance is effortless. For SS316 invisible grills, wipe the transparent DuPont nylon jacket with a damp microfiber cloth once every few months to remove traffic dust. For balcony safety nets, a light spray of plain water during regular balcony washing keeps the mesh clear. Never use harsh acid-based floor cleaners directly on the cables or polymer mesh.",
    },
    {
      question: "How is pricing calculated, and are there any hidden charges for anchors or brackets?",
      answer:
        "We follow an honest, transparent square-foot quotation policy. During our complimentary doorstep visit, our technician takes laser measurements in your presence and provides an itemized quote. That figure covers certified materials, SS304/SS316 anchors, aluminium tracks, high-altitude rigging, cleanup, and warranty. There are zero surprise surcharges.",
    },
    {
      question: "What happens in an emergency if someone needs quick exit through the balcony?",
      answer:
        "Life safety is paramount. While our invisible grills prevent accidental falls, every installation is designed with safe emergency access. We can provide designated release wire-cutters that sever individual cables in seconds during fire evacuation, maintaining a rapid escape corridor without compromising child fall safety.",
    },
    {
      question: "How does your 10-year warranty work if we need retensioning or modifications later?",
      answer:
        `Every completed project includes an official ${claimsConfig.warrantyDisplay} certificate. If you ever repaint your balcony, remodel tiles, or require tension adjustments, simply call our direct service line at ${siteConfig.phoneDisplay}. Our in-house Bengaluru technicians are dispatched promptly under your warranty coverage.`,
    },
  ];

  return (
    <section className="py-24 bg-white scroll-mt-12" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 bg-[#F6E9EE] text-[#6D1A36] border border-[#B9BEC7]/40 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider self-center shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#8A2F4D]" />
            <span>Process &amp; Technical Clarifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2F2F33] tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#5A5A62] max-w-2xl mx-auto leading-relaxed">
            Straightforward answers regarding society permissions, installation duration, high-rise wind performance, pet resistance, and warranty support.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA] overflow-hidden transition-all duration-200 hover:border-[#8A2F4D]"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-bold text-[#2F2F33] hover:text-[#6D1A36] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "bg-[#6D1A36] text-white rotate-180" : "bg-slate-200 text-[#2F2F33]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#5A5A62] leading-relaxed border-t border-[#E5E7EB]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Support Footer */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#F6E9EE] border border-[#B9BEC7]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-[#6D1A36]">Have a specific architectural requirement?</h4>
            <p className="text-xs text-[#5A5A62] mt-0.5">Our senior technical advisor answers technical inquiries daily.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.phoneTel}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#6D1A36] hover:bg-[#55142A] text-white text-xs font-bold transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{siteConfig.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(`Hi ${siteConfig.shortName}, I have a question about balcony safety installation in ${siteConfig.city}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#20BD5A] text-white text-xs font-bold transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
