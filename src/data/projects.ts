export interface ProjectRecord {
  id: string;
  slug: string;
  title: string;
  category: "safety-nets" | "invisible-grills" | "cloth-hangers";
  serviceSlug: string;
  serviceName: string;
  location: string;
  localitySlug: string;
  zone: "north" | "south" | "east" | "west" | "central";
  completionDate: string;
  description: string;
  challenge: string;
  solution: string;
  materialsUsed: string[];
  image: string;
  beforeImage: string;
  afterImage: string;
  specs: { label: string; value: string }[];
  permissionToPublish: boolean;
}

export const projectsConfig: ProjectRecord[] = [
  {
    id: "proj-1",
    slug: "balcony-safety-nets-whitefield",
    title: "High-Altitude Balcony Fall Protection in Whitefield",
    category: "safety-nets",
    serviceSlug: "balcony-safety-nets",
    serviceName: "Balcony Safety Nets",
    location: "Whitefield, Bengaluru",
    localitySlug: "whitefield",
    zone: "east",
    completionDate: "May 2026",
    description: "Complete perimeter containment netting installation for residential high-rise apartment balconies overlooking ITPL corridor.",
    challenge: "High elevation with open railing gaps requiring certified toddler fall protection and pigeon deterence.",
    solution: "Mounted tension-calibrated copolymer netting via grade 304 concrete expansion sleeves spaced at 6-inch intervals across the load-bearing periphery.",
    materialsUsed: [
      "Virgin UV-Stabilized HDPE Copolymer Knotted Webbing",
      "Marine Grade 304 Stainless Steel Expansion Anchors",
      "High-Tension Braided Perimeter Core Ropes",
      "Non-Corrosive Flush Anchoring Sleeves",
    ],
    image: "/images/materials/sangeetha-balcony-mesh-material.webp",
    beforeImage: "/images/gallery/sangeetha-before-balcony-installation.webp",
    afterImage: "/images/materials/sangeetha-balcony-mesh-material.webp",
    specs: [
      { label: "Mesh Gauge", value: "1.5mm Copolymer Knotted" },
      { label: "Anchor Interval", value: "15cm Precision Pitch" },
      { label: "Tensile Tolerance", value: "140kg+ per knot" },
      { label: "Warranty", value: "10-Year Material Warranty" },
    ],
    permissionToPublish: true,
  },
  {
    id: "proj-2",
    slug: "invisible-grills-koramangala",
    title: "Marine-Grade SS316 Invisible Grills in Koramangala",
    category: "invisible-grills",
    serviceSlug: "balcony-invisible-grills",
    serviceName: "Balcony Invisible Grills",
    location: "Koramangala, Bengaluru",
    localitySlug: "koramangala",
    zone: "south",
    completionDate: "June 2026",
    description: "Panoramic view invisible grill installation across expansive high-rise balconies in a luxury apartment complex.",
    challenge: "Resident required pet fall prevention without losing natural light, ventilation, or the 180-degree sunset view.",
    solution: "Installed 316-grade marine stainless steel cable strands at 50mm pitch inside heavy-duty anodized aluminium track channels.",
    materialsUsed: [
      "SS316 Marine Multi-Strand Stainless Steel Cable Core",
      "High-Elasticity Clear DuPont Nylon Extrusion Coating",
      "T6 Structural Powder-Coated Aluminium Track Channels",
      "Tamper-Proof Internal Stainless Lock-Bush Fasteners",
    ],
    image: "/images/services/sangeetha-luxury-balcony-invisible-grills.webp",
    beforeImage: "/images/gallery/sangeetha-before-balcony-installation.webp",
    afterImage: "/images/services/sangeetha-luxury-balcony-invisible-grills.webp",
    specs: [
      { label: "Cable Metallurgy", value: "SS316 Marine Stainless Steel" },
      { label: "Spacing Pitch", value: "50mm Child & Pet Safe Pitch" },
      { label: "Breaking Force", value: "400kg+ Tensile Breaking Load" },
      { label: "Warranty", value: "10-Year Anti-Rust & Tension Guarantee" },
    ],
    permissionToPublish: true,
  },
  {
    id: "proj-3",
    slug: "ceiling-hangers-indiranagar",
    title: "Space-Maximizing Pulley Cloth Drying System in Indiranagar",
    category: "cloth-hangers",
    serviceSlug: "ceiling-cloth-hangers",
    serviceName: "Ceiling Cloth Hangers",
    location: "Indiranagar, Bengaluru",
    localitySlug: "indiranagar",
    zone: "east",
    completionDate: "July 2026",
    description: "Installation of a 6-pipe independent dual-pulley drying hoist system inside an apartment utility balcony.",
    challenge: "Bulky portable metal clothes racks blocked the balcony corridor and washing machine access.",
    solution: "Mounted ceiling-suspended SS304 stainless steel tubes that hoist smoothly to the ceiling breeze, freeing 100% of the balcony walkway floor area.",
    materialsUsed: [
      "SS304 Rustproof Seamless Stainless Steel Drying Tubes",
      "Ultra-Smooth Low-Friction Nylon Pulley Wheels",
      "High-Tensile Braided Nylon Hoist Cords",
      "Wall-Mounted Heavy-Duty Locking Cleat Plate",
    ],
    image: "/images/materials/sangeetha-cloth-hanger-pulley-system.webp",
    beforeImage: "/images/gallery/sangeetha-before-balcony-installation.webp",
    afterImage: "/images/materials/sangeetha-cloth-hanger-pulley-system.webp",
    specs: [
      { label: "Rods Count", value: "6 Independent SS304 Tubes" },
      { label: "Drying Capacity", value: "36 Linear Feet Total" },
      { label: "Pulley Bearings", value: "Dual Sealed Nylon Bushings" },
      { label: "Warranty", value: "3-Year Mechanism Warranty" },
    ],
    permissionToPublish: true,
  },
];

