"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Shield, Eye, Settings, ArrowRight } from "lucide-react";

interface ServiceVertical {
  verticalId: number;
  verticalTitle: string;
  solutionCount: string;
  heroPhoto: string;
  categoryIcon: React.ReactNode;
  verticalOverview: string;
  targetSlug: string;
}

const serviceVerticals: ServiceVertical[] = [
  {
    verticalId: 1,
    verticalTitle: "Copolymer Safety Netting",
    solutionCount: "11 Specialized Options",
    heroPhoto: "/images/services/sangeetha-balcony-net-installation-bangalore.webp",
    categoryIcon: <Shield className="w-6 h-6 text-white" />,
    verticalOverview: "Reinforce balconies, stairwells, and open building shafts with certified UV-stabilized copolymer netting, anchored firmly into concrete lintels.",
    targetSlug: "safety-nets",
  },
  {
    verticalId: 2,
    verticalTitle: "Marine SS316 Invisible Grills",
    solutionCount: "5 Structural Designs",
    heroPhoto: "/images/services/sangeetha-ss316-balcony-invisible-grills.webp",
    categoryIcon: <Eye className="w-6 h-6 text-white" />,
    verticalOverview: "Enjoy 180-degree unobstructed skyline views while securing balconies and windows with high-tensile 316-grade marine stainless cable systems.",
    targetSlug: "invisible-grills",
  },
  {
    verticalId: 3,
    verticalTitle: "Overhead Cloth Drying Racks",
    solutionCount: "3 Space-Saving Models",
    heroPhoto: "/images/services/sangeetha-ceiling-cloth-drying-hangers.webp",
    categoryIcon: <Settings className="w-6 h-6 text-white" />,
    verticalOverview: "Recover 100% of usable balcony floor space with independent dual-pulley stainless steel ceiling hoists designed for effortless daily operation.",
    targetSlug: "cloth-hangers",
  },
];

export default function ServiceCategories() {
  return (
    <section id="services" className="bg-[#FFFFFF] py-24 scroll-mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#6D1A36] bg-[#F6E9EE] border border-[#B9BEC7] px-3.5 py-1.5 rounded-full inline-block self-center">
            Our Primary Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#6D1A36] tracking-tight leading-tight">
            High-Rise Safety Engineering &amp; Space Optimization
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Engineered specifically to endure Bengaluru&apos;s climate while safeguarding high-rise homes, duplex stairwells, and commercial building properties.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceVerticals.map((category, index) => (
            <motion.div
              key={category.verticalId}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-[20px] overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_45px_rgba(11,37,69,0.10)] border border-[#E2E8F0] hover:border-[#8A2F4D] transition-all duration-300 group flex flex-col h-full"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={category.heroPhoto}
                  alt={`Sangeetha Safety Nets - ${category.verticalTitle} in Bengaluru`}
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={75}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>

                {/* Floating Icon */}
                <div className="absolute top-4 right-4 bg-[#6D1A36] p-3.5 rounded-full shadow-md z-10 transition-transform duration-300 group-hover:rotate-12 border border-[#55142A]">
                  <div className="text-[#8A2F4D]">{category.categoryIcon}</div>
                </div>

                {/* Service count label */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <div className="bg-white/20 backdrop-blur-xs text-white text-xs font-extrabold px-3 py-1.5 rounded-full border border-white/30">
                    {category.solutionCount}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-[#6D1A36] mb-3 group-hover:text-[#8A2F4D] transition-colors">
                    {category.verticalTitle}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {category.verticalOverview}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                  <a
                    href={`#${category.targetSlug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#6D1A36] hover:text-[#8A2F4D] transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#8A2F4D]" />
                  </a>
                  <Link
                    href={`/services/${category.targetSlug}`}
                    className="text-xs font-bold text-slate-500 hover:text-[#8A2F4D] underline transition-colors"
                  >
                    Category Overview
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
