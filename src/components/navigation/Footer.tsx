import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import Logo from "../ui/Logo";
import { siteConfig } from "@/data/site";
import { claimsConfig } from "@/data/claims";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#420D20] text-slate-300 pt-16 pb-8 border-t border-[#55142A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="flex flex-col gap-5">
            <Logo variant="light" />
            <p className="text-[#D1D5DB] text-sm leading-relaxed mt-2">
              {siteConfig.city}&apos;s trusted local family enterprise providing certified balcony safety netting, SS316 marine-grade invisible wire grills, and stainless ceiling drying systems. Backed by {claimsConfig.warrantyDisplay}, dedicated neighborhood technicians, and prompt after-sales care.
            </p>
            {siteConfig.operatingHours && (
              <div className="flex flex-col gap-3 mt-1 text-sm text-[#D1D5DB]">
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-[#8A2F4D] shrink-0" />
                  <span>{siteConfig.operatingHours}</span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-extrabold text-base mb-6 tracking-wide relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-[#8A2F4D]">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Pricing Approach", href: "/pricing" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Testimonials", href: "/testimonials" },
                { label: "Completed Projects", href: "/projects" },
                { label: "Photo Gallery", href: "/gallery" },
                { label: "Coverage Areas", href: "/areas" },
                { label: "Latest Blog", href: "/blog" },
                { label: "Contact Us", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#D1D5DB] hover:text-[#8A2F4D] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#8A2F4D] transition-colors" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick View */}
          <div>
            <h3 className="text-white font-extrabold text-base mb-6 tracking-wide relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-[#8A2F4D]">
              Our Services
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "Balcony Safety Nets", href: "/services/balcony-safety-nets" },
                { label: "Children Safety Nets", href: "/services/children-safety-nets" },
                { label: "Pet Safety Nets", href: "/services/pet-safety-nets" },
                { label: "Pigeon Safety Nets", href: "/services/pigeon-safety-nets" },
                { label: "Mosquito Nets for Windows", href: "/services/mosquito-nets" },
                { label: "Balcony Invisible Grills", href: "/services/balcony-invisible-grills" },
                { label: "Window Invisible Grills", href: "/services/window-invisible-grills" },
                { label: "Staircase Invisible Grills", href: "/services/staircase-invisible-grills" },
                { label: "Ceiling Cloth Hangers", href: "/services/ceiling-cloth-hangers" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#D1D5DB] hover:text-[#8A2F4D] transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#8A2F4D] transition-colors" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-white font-extrabold text-base mb-6 tracking-wide relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-0.5 after:bg-[#8A2F4D]">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm text-[#D1D5DB]">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#8A2F4D] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-white block">Office Location</span>
                  <span className="block text-sm text-[#D1D5DB] mt-1">
                    {siteConfig.address}
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#8A2F4D] shrink-0 mt-1" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-white block">Phone</span>
                  <a
                    href={siteConfig.phoneTel}
                    className="hover:text-[#8A2F4D] transition-colors text-white font-semibold flex items-center gap-1.5 min-h-[44px] py-1"
                    aria-label={`Call ${siteConfig.phoneDisplay}`}
                  >
                    <span>{siteConfig.phoneDisplay}</span>
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#8A2F4D] shrink-0 mt-1" />
                <div>
                  <span className="font-bold text-white block">Email</span>
                  <a href={`mailto:${siteConfig.email}`} className="hover:text-[#8A2F4D] transition-colors">
                    {siteConfig.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bangalore Localities Local SEO Footer Links */}
        <div className="py-6 border-t border-[#55142A] flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-white font-bold shrink-0">
            <MapPin className="w-4 h-4 text-[#8A2F4D]" />
            <span>Service Areas Across Bangalore:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-4 gap-y-2 text-[#D1D5DB]">
            {[
              { name: "Whitefield", slug: "whitefield" },
              { name: "Koramangala", slug: "koramangala" },
              { name: "Indiranagar", slug: "indiranagar" },
              { name: "HSR Layout", slug: "hsr-layout" },
              { name: "Electronic City", slug: "electronic-city" },
              { name: "Marathahalli", slug: "marathahalli" },
              { name: "Bellandur", slug: "bellandur" },
              { name: "Sarjapur Road", slug: "sarjapur-road" },
              { name: "Jayanagar", slug: "jayanagar" },
              { name: "JP Nagar", slug: "jp-nagar" },
              { name: "Bannerghatta Road", slug: "bannerghatta-road" },
              { name: "Hebbal", slug: "hebbal" },
              { name: "Yelahanka", slug: "yelahanka" },
              { name: "Thanisandra", slug: "thanisandra" },
              { name: "Hennur Road", slug: "hennur-road" },
              { name: "Kanakapura Road", slug: "kanakapura-road" },
              { name: "RR Nagar", slug: "rajarajeshwari-nagar" },
              { name: "RT Nagar", slug: "rt-nagar" },
            ].map((city) => (
              <Link
                key={city.slug}
                href={`/areas/${city.slug}`}
                className="hover:text-[#8A2F4D] transition-colors"
              >
                {city.name}
              </Link>
            ))}
            <Link
              href="/areas"
              className="text-[#8A2F4D] font-bold hover:underline flex items-center gap-1"
            >
              <span>+ 92 More Areas</span>
            </Link>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 border-t border-[#55142A] flex flex-col sm:flex-row items-center justify-between text-xs text-[#D1D5DB] gap-4">
          <p>© {currentYear} Sangeetha Enterprises. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#8A2F4D] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-[#8A2F4D] transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
