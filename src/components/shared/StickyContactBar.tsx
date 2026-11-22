"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageSquare } from "lucide-react";
import { siteConfig } from "@/data/site";
import { trackPhoneClick, trackWhatsAppClick } from "@/utils/analytics";

export default function StickyContactBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

  useEffect(() => {
    // Scroll threshold check (~150px)
    const handleScroll = () => {
      setIsVisible(window.scrollY > 150);
    };

    // Keyboard detection via focusin/focusout
    const handleFocusIn = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable)
      ) {
        setIsKeyboardOpen(true);
      }
    };

    const handleFocusOut = () => {
      setIsKeyboardOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("focusin", handleFocusIn);
    window.addEventListener("focusout", handleFocusOut);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("focusin", handleFocusIn);
      window.removeEventListener("focusout", handleFocusOut);
    };
  }, []);

  const whatsappMessage = encodeURIComponent(
    "Hi Sangeetha Safety Nets, I am looking for balcony safety nets / invisible grills installation in Bengaluru. Please share details and schedule a free visit."
  );
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappMessage}`;

  const shouldShow = isVisible && !isKeyboardOpen;

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.aside
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          aria-label="Mobile Quick Contact Actions"
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white/95 backdrop-blur-md border-t border-[#B9BEC7]/40 shadow-[0_-4px_20px_rgba(0,0,0,0.12)] px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] transition-transform"
        >
          <div className="grid grid-cols-2 gap-2.5 max-w-lg mx-auto">
            {/* Call Action Button */}
            <a
              href={siteConfig.phoneTel}
              data-track-cta="phone"
              data-source="sticky_bar"
              onClick={() => trackPhoneClick("sticky_bar")}
              aria-label={`Call Sangeetha Safety Nets at ${siteConfig.phoneDisplay}`}
              className="flex items-center justify-center gap-2 bg-[#6D1A36] hover:bg-[#55142A] active:bg-[#420D20] text-white font-bold text-sm h-12 rounded-xl shadow-md transition-all duration-200 select-none cursor-pointer border border-[#8A2F4D]"
            >
              <Phone className="w-4 h-4 shrink-0 text-white animate-pulse" />
              <span>Call Now</span>
            </a>

            {/* WhatsApp Action Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-track-cta="whatsapp"
              data-source="sticky_bar"
              onClick={() => trackWhatsAppClick("sticky_bar")}
              aria-label="Chat on WhatsApp with Sangeetha Safety Nets"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] active:bg-[#1DA850] text-white font-bold text-sm h-12 rounded-xl shadow-md transition-all duration-200 select-none cursor-pointer border border-emerald-600/30"
            >
              <MessageSquare className="w-4 h-4 shrink-0 text-white" />
              <span>WhatsApp</span>
            </a>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
