"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  Home,
  MapPin,
  ArrowRight,
  Clock,
  CheckCircle2,
  Search,
  Building2,
  Sparkles,
  Phone,
  ShieldCheck,
  Compass,
} from "lucide-react";
import { BANGALORE_ZONES, areasList, areasData } from "@/utils/areasData";
import MapFrame from "@/components/ui/map-frame";
import { siteConfig } from "@/data/site";
import { claimsConfig } from "@/data/claims";

const coverageZones = [
  { id: "all", label: "Entire Bengaluru (All 110+ Suburbs)" },
  { id: "north", label: "North Bengaluru Suburbs" },
  { id: "south", label: "South Bengaluru Suburbs" },
  { id: "east", label: "East Bengaluru Suburbs" },
  { id: "west", label: "West Bengaluru Suburbs" },
  { id: "central", label: "Central Bengaluru Core" },
];

export default function AreasClient() {
  const [districtFilter, setDistrictFilter] = useState("all");
  const [localityQuery, setLocalityQuery] = useState("");

  const searchResults = useMemo(() => {
    if (!localityQuery.trim()) return null;
    return areasList.filter((area) => {
      const q = localityQuery.toLowerCase();
      return (
        area.name.toLowerCase().includes(q) ||
        area.tagline.toLowerCase().includes(q) ||
        area.localities.some((loc) => loc.toLowerCase().includes(q))
      );
    });
  }, [localityQuery]);

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-10 md:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-[#6D1A36] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <span>/</span>
          <span className="text-[#6D1A36] font-bold">Bengaluru Zonal Coverage</span>
        </nav>

        {/* Hero Banner */}
        <div className="bg-[#420D20] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-[#55142A]/40 mb-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-[#8A2F4D]/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#B9BEC7] text-[#2F2F33] font-black text-xs uppercase tracking-wider mb-4 shadow-md">
              <Compass className="w-3.5 h-3.5 text-[#6D1A36]" />
              <span>Full City Footprint</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-white mb-4">
              Service Localities Across <span className="text-[#B9BEC7]">Bengaluru</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
              {siteConfig.shortName} operates strategically positioned field units spanning all five municipal quadrants of Bengaluru. Each mobile team carries digital optical measuring tools, material swatches, and certified rigging hardware directly to your doorstep.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 border-t border-white/10 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8A2F4D]" />
                <span className="font-semibold">Complimentary On-Site Audit</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#8A2F4D]" />
                <span className="font-semibold">Prompt Doorstep Dispatch</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#8A2F4D]" />
                <span className="font-semibold">{claimsConfig.warrantyDisplay}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Zone Filter Bar */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm mb-10">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={localityQuery}
                onChange={(e) => setLocalityQuery(e.target.value)}
                placeholder="Type your locality name (e.g. Bellandur, Marathahalli, Thanisandra, Bannerghatta)..."
                className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-900 focus:outline-hidden focus:border-[#6D1A36] focus:ring-2 focus:ring-[#6D1A36]/20 transition-all placeholder:text-slate-400 font-medium"
              />
            </div>

            {/* Quick Stats Pill */}
            <div className="flex items-center gap-2 text-xs font-bold text-[#6D1A36] bg-[#F6E9EE] px-4 py-3.5 rounded-2xl shrink-0 justify-center border border-[#B9BEC7]/40">
              <Building2 className="w-4 h-4 text-[#8A2F4D]" />
              <span>110+ Active Neighborhoods</span>
            </div>
          </div>

          {/* Zone Selector Tabs */}
          {!localityQuery && (
            <div className="flex items-center gap-2 overflow-x-auto pt-6 mt-6 border-t border-slate-100 scrollbar-none">
              {coverageZones.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setDistrictFilter(tab.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                    districtFilter === tab.id
                      ? "bg-[#6D1A36] text-white shadow-md shadow-[#6D1A36]/20"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* SEARCH RESULTS VIEW */}
        {searchResults && (
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-extrabold text-slate-900">
                Discovered Localities ({searchResults.length})
              </h2>
              <button
                onClick={() => setLocalityQuery("")}
                className="text-xs text-[#8A2F4D] font-bold hover:underline cursor-pointer"
              >
                Clear Filter
              </button>
            </div>

            {searchResults.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-slate-200">
                <p className="text-slate-500 text-sm mb-4">
                  No explicit listing for &quot;{localityQuery}&quot;. Our technicians cover all postal pin codes across Greater Bengaluru.
                </p>
                <a
                  href={siteConfig.phoneTel}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#6D1A36] hover:bg-[#55142A] text-white font-black rounded-full text-xs shadow-md transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Reach Our Field Support Helpline: {siteConfig.phoneDisplay}</span>
                </a>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((localityItem) => (
                  <Link
                    key={localityItem.slug}
                    href={`/areas/${localityItem.slug}`}
                    className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#8A2F4D] shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#6D1A36] bg-[#F6E9EE] px-2.5 py-1 rounded-md">
                          {localityItem.zone ? `${localityItem.zone.toUpperCase()} BENGALURU` : "BENGALURU REGION"}
                        </span>
                        <MapPin className="w-4 h-4 text-[#8A2F4D] group-hover:scale-110 transition-transform" />
                      </div>
                      <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-[#6D1A36] transition-colors mb-2">
                        {localityItem.name}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">
                        {localityItem.tagline}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#6D1A36]">
                      <span>Locality Netting &amp; Grills</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}

        {/* DEFAULT ZONE GROUPED VIEW */}
        {!localityQuery && (
          <div className="space-y-12 mb-14">
            {BANGALORE_ZONES.filter((z) => districtFilter === "all" || districtFilter === z.id).map((zone) => {
              const zoneAreas = areasList.filter((a) => a.zone === zone.id);

              return (
                <section
                  key={zone.id}
                  id={zone.id}
                  className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm scroll-mt-24"
                >
                  {/* Zone Header */}
                  <div className="border-b border-slate-100 pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div className="max-w-2xl">
                      <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#6D1A36] bg-[#F6E9EE] px-3 py-1 rounded-full border border-[#B9BEC7]/40 mb-2">
                        <MapPin className="w-3.5 h-3.5 text-[#8A2F4D]" />
                        <span>Regional Rigging Crew</span>
                      </div>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                        {zone.name}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                        {zone.description}
                      </p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-xs font-bold text-slate-400 block">Covered Suburbs</span>
                      <span className="text-2xl font-black text-[#6D1A36]">
                        {zoneAreas.length} Areas
                      </span>
                    </div>
                  </div>

                  {/* Key Featured Localities in Zone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                    {zone.keyAreas.map((keyArea) => {
                      const areaDetail = areasData[keyArea.slug];
                      return (
                        <Link
                          key={keyArea.slug}
                          href={`/areas/${keyArea.slug}`}
                          className="bg-slate-50 hover:bg-[#F6E9EE] rounded-2xl p-5 border border-slate-200/80 hover:border-[#6D1A36]/40 transition-all group flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[10px] font-extrabold uppercase text-[#8A2F4D] tracking-wider">
                                Direct Dispatch Point
                              </span>
                              <Sparkles className="w-3.5 h-3.5 text-[#8A2F4D]" />
                            </div>
                            <h3 className="text-base font-extrabold text-slate-900 group-hover:text-[#6D1A36] transition-colors mb-1.5">
                              {keyArea.name}
                            </h3>
                            <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                              {areaDetail?.tagline || `Certified balcony netting & grills in ${keyArea.name}`}
                            </p>
                          </div>

                          <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-bold text-[#6D1A36]">
                            <span>View Local Options</span>
                            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Full List of Neighborhoods in This Zone */}
                  {zoneAreas.length > zone.keyAreas.length && (
                    <div className="bg-slate-50/60 rounded-2xl p-5 border border-slate-100">
                      <span className="text-xs font-bold text-slate-700 block mb-3">
                        Additional Neighborhoods in this Quadrant:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {zoneAreas
                          .filter((a) => !zone.keyAreas.some((k) => k.slug === a.slug))
                          .map((extraArea) => (
                            <Link
                              key={extraArea.slug}
                              href={`/areas/${extraArea.slug}`}
                              className="px-3 py-1.5 bg-slate-50 hover:bg-[#F6E9EE]/40 text-slate-700 hover:text-[#6D1A36] border border-slate-200 hover:border-[#6D1A36]/40 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5"
                            >
                              <MapPin className="w-3 h-3 text-[#8A2F4D]" />
                              <span>{extraArea.name}</span>
                            </Link>
                          ))}
                      </div>
                    </div>
                  )}
                </section>
              );
            })}
          </div>
        )}

        {/* Map & Office Address Section */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#6D1A36] bg-[#F6E9EE] px-3.5 py-1.5 rounded-full self-start border border-[#B9BEC7]/40">
                Citywide Dispatch
              </span>
              <h3 className="text-2xl font-extrabold text-slate-900 leading-tight">
                Doorstep Coverage Across Every Bengaluru Pin Code
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Our rigging crews provide free on-site consultations with physical material displays, ultrasonic distance measurement, and substrate soundness audits. Homeowners receive an upfront, binding quotation without surprise surcharges.
              </p>
              <div className="pt-2 flex flex-col gap-2 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#8A2F4D]" />
                  <span>Main Operation: {siteConfig.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#6D1A36]" />
                  <span>Direct Booking: {siteConfig.phoneDisplay}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <MapFrame areaName="Bangalore, Karnataka" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
