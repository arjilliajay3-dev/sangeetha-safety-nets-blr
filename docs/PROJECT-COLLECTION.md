# Sangeetha Safety Nets — Field Project Collection & Publishing Protocol

This operating procedure outlines how field technicians, site supervisors, and the digital operations team collect, verify, and publish real installation project profiles on `https://sangeethasafetynets.in/projects`.

---

## 1. Customer Consent & Privacy Protocol

Under our strict privacy guidelines, **zero customer photos or residential views may be published without verified homeowner consent**.

1. **Explicit Verbal & Digital Consent:**
   - At the conclusion of installation, technician asks customer: *"May we take 2–3 photos of the completed net/grill for our work portfolio? No personal belongings, family members, or flat numbers will be visible."*
   - Checkbox on the physical or digital job sheet: `[x] Permission to publish installation photo on website`.
2. **Privacy Redaction:**
   - **Never photograph:** Family members, children, pets (unless specifically requested by proud pet owner), flat doors with nameplates, personal documents, or interior rooms.
   - **Focus strictly on:** The architectural balcony edge, railing junction, tension anchoring track, and outdoor vista through the netting or invisible grill strands.

---

## 2. Standardized Field Photo Checklist

For each site, the supervisor should capture four standard angles:
1. **Angle 1 (Before Installation):** Showing the open balcony, bird droppings, or hazard view before work begins.
2. **Angle 2 (Full Balcony Wide Angle):** Showing the complete tensioned netting or invisible grill installed from one side wall to the opposite wall.
3. **Angle 3 (Hardware / Tension Anchor Detail):** Close-up showing diamond-anchored stainless steel fasteners, cable crimps, or track casing.
4. **Angle 4 (Transparency / Outdoor Vista):** Looking through the netting/grills toward the outside sky, demonstrating minimal visual obstruction.

### Technical Photo Specs:
- **Format:** Native high-resolution JPG or HEIC (converted to WebP upon ingest).
- **Lighting:** Daytime natural light (morning or late afternoon golden hour preferred; avoid backlighting into direct noon sun).
- **Orientation:** Landscape (16:9 or 4:3) preferred for case cards; portrait acceptable for vertical staircases.

---

## 3. Data Entry Schema for `src/data/projects.ts`

When a project is approved for publishing, enter it into `src/data/projects.ts`:

```typescript
{
  id: "proj-bangalore-[locality]-[service]",
  slug: "[service-slug]-[locality-slug]",
  title: "[Engaging, descriptive headline e.g., 'SS316 Invisible Grills at Prestige Shantiniketan, Whitefield']",
  category: "safety-nets" | "invisible-grills" | "cloth-hangers",
  serviceSlug: "[service-slug]",
  serviceName: "[Formal Service Name]",
  location: "[Locality, Bengaluru]",
  localitySlug: "[locality-slug]",
  zone: "north" | "south" | "east" | "west" | "central",
  completionDate: "[Month Year]",
  description: "[2-3 sentence overview of the installation scope]",
  challenge: "[Specific elevation, high-wind, pigeon nuisance, or child safety constraint]",
  solution: "[Material gauge, anchor pitch, and rigging method applied]",
  materialsUsed: [
    "Garware UV-Stabilized Knotted Webbing (or SS316 Marine Cable)",
    "Grade 304/316 Stainless Fasteners",
    "Anodized Structural Track Channels"
  ],
  image: "/images/projects/[slug]-main.webp",
  beforeImage: "/images/projects/[slug]-before.webp",
  afterImage: "/images/projects/[slug]-after.webp",
  specs: [
    { label: "Mesh / Wire Gauge", value: "e.g. 1.5mm / 2.5mm" },
    { label: "Anchor Pitch", value: "e.g. 50mm / 15cm" },
    { label: "Tensile Strength", value: "e.g. 140kg / 400kg" },
    { label: "Warranty", value: "10-Year Comprehensive" }
  ],
  permissionToPublish: true // MUST BE TRUE TO RENDER
}
```

---

## 4. Current Target Complexes for Field Photo Ingest

Priority societies for the upcoming month:
1. **Whitefield:** Prestige Shantiniketan, Brigade Metropolis, Godrej United.
2. **Marathahalli:** Purva Riviera, Rohan Viti, Bren Avalon.
3. **Bellandur & Sarjapur:** Assetz 63 East, Sobha Royal Pavilion, DNR Atmosphere.
4. **Electronic City:** Ajmera Infinity, GM Infinite Global City.
5. **North Corridor:** Bhartiya City Nikoo Homes, L&T Raintree Boulevard.

