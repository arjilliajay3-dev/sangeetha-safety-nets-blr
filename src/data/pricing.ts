export interface ServiceEstimate {
  id: string;
  name: string;
  category: "safety-nets" | "invisible-grills" | "cloth-hangers";
  estimateMinPerSqFt: number;
  estimateMaxPerSqFt: number;
  unit: string;
}

// Confirmed realistic competitive Bangalore market rate brackets
export const PRICING_CONFIRMED = true;

export const pricingDisclaimer =
  "Approximate estimate. Exact quote provided after a free doorstep laser measurement in Bengaluru. Prices vary with balcony perimeter, elevation, hardware grade, and masonry access.";

export const serviceEstimates: ServiceEstimate[] = [
  {
    id: "balcony-safety-nets",
    name: "Balcony Safety Nets",
    category: "safety-nets",
    estimateMinPerSqFt: 18,
    estimateMaxPerSqFt: 28,
    unit: "sq.ft",
  },
  {
    id: "pigeon-safety-nets",
    name: "Pigeon & Anti-Bird Nets",
    category: "safety-nets",
    estimateMinPerSqFt: 16,
    estimateMaxPerSqFt: 24,
    unit: "sq.ft",
  },
  {
    id: "children-safety-nets",
    name: "Child Fall-Safety Nets",
    category: "safety-nets",
    estimateMinPerSqFt: 20,
    estimateMaxPerSqFt: 30,
    unit: "sq.ft",
  },
  {
    id: "pet-safety-nets",
    name: "Pet Defense Nets",
    category: "safety-nets",
    estimateMinPerSqFt: 22,
    estimateMaxPerSqFt: 32,
    unit: "sq.ft",
  },
  {
    id: "balcony-invisible-grills",
    name: "SS316 Marine Invisible Grills (Balcony)",
    category: "invisible-grills",
    estimateMinPerSqFt: 130,
    estimateMaxPerSqFt: 160,
    unit: "sq.ft",
  },
  {
    id: "window-invisible-grills",
    name: "SS316 Marine Invisible Grills (Window)",
    category: "invisible-grills",
    estimateMinPerSqFt: 135,
    estimateMaxPerSqFt: 165,
    unit: "sq.ft",
  },
  {
    id: "ceiling-cloth-hangers",
    name: "Ceiling Cloth Drying Hangers",
    category: "cloth-hangers",
    estimateMinPerSqFt: 1400,
    estimateMaxPerSqFt: 2400,
    unit: "unit",
  },
];
