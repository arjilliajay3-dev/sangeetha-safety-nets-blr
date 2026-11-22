export interface ServiceEstimate {
  id: string;
  name: string;
  category: "safety-nets" | "invisible-grills" | "cloth-hangers";
  estimateMinPerSqFt?: number;
  estimateMaxPerSqFt?: number;
  unit: string;
}

// CRITICAL: Must remain false until client confirms specific rate brackets
export const PRICING_CONFIRMED = false;

export const pricingDisclaimer =
  "Approximate estimate. Final quote provided after a free doorstep site visit and laser measurement. Prices vary with balcony perimeter, elevation, hardware grade, and masonry access.";

export const serviceEstimates: ServiceEstimate[] = [
  { id: "balcony-safety-nets", name: "Balcony Safety Nets", category: "safety-nets", unit: "sq. ft." },
  { id: "pigeon-safety-nets", name: "Pigeon & Bird Safety Nets", category: "safety-nets", unit: "sq. ft." },
  { id: "children-safety-nets", name: "Children Safety Nets", category: "safety-nets", unit: "sq. ft." },
  { id: "pet-safety-nets", name: "Pet & Cat Safety Nets", category: "safety-nets", unit: "sq. ft." },
  { id: "balcony-invisible-grills", name: "Balcony Invisible Grills (SS316)", category: "invisible-grills", unit: "sq. ft." },
  { id: "window-invisible-grills", name: "Window Invisible Grills (SS316)", category: "invisible-grills", unit: "sq. ft." },
  { id: "ceiling-cloth-hangers", name: "Ceiling Cloth Drying Hangers", category: "cloth-hangers", unit: "unit" },
];

