const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function generateOgImage() {
  const svg = `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#55142A" />
        <stop offset="50%" stop-color="#6D1A36" />
        <stop offset="100%" stop-color="#360817" />
      </linearGradient>
      <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#8A2F4D" />
        <stop offset="60%" stop-color="#6D1A36" />
        <stop offset="100%" stop-color="#420D20" />
      </linearGradient>
      <linearGradient id="silverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="50%" stop-color="#E5E7EB" />
        <stop offset="100%" stop-color="#B9BEC7" />
      </linearGradient>
      <linearGradient id="goldAccent" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FDE047" />
        <stop offset="100%" stop-color="#EAB308" />
      </linearGradient>
      <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#FFFFFF" stroke-width="0.75" stroke-opacity="0.07" />
      </pattern>
    </defs>

    <!-- Background Base -->
    <rect width="1200" height="630" fill="url(#bgGrad)" />
    <!-- Grid Overlay -->
    <rect width="1200" height="630" fill="url(#gridPattern)" />

    <!-- Subtle Lighting Spheres -->
    <circle cx="150" cy="120" r="280" fill="#8A2F4D" opacity="0.35" filter="blur(60px)" />
    <circle cx="1080" cy="520" r="260" fill="#420D20" opacity="0.5" filter="blur(60px)" />

    <!-- Outer Decorative Border -->
    <rect x="28" y="28" width="1144" height="574" rx="24" fill="none" stroke="url(#silverGrad)" stroke-width="2" stroke-opacity="0.3" />

    <!-- Brand Header Pill -->
    <g transform="translate(80, 75)">
      <rect width="420" height="42" rx="21" fill="#FFFFFF" fill-opacity="0.12" stroke="url(#silverGrad)" stroke-width="1.5" stroke-opacity="0.5" />
      <circle cx="24" cy="21" r="7" fill="#25D366" />
      <text x="42" y="27" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="800" fill="#FFFFFF" letter-spacing="1.5">
        BENGALURU SAFETY ENGINEERING
      </text>
    </g>

    <!-- Main Content Group -->
    <g transform="translate(80, 160)">
      <!-- Logo Monogram 'S' Shield -->
      <g transform="translate(0, 0)">
        <rect width="130" height="130" rx="36" fill="url(#shieldGrad)" stroke="url(#silverGrad)" stroke-width="4" stroke-opacity="0.9" />
        <!-- Stylized 'S' -->
        <path
          d="M 88 38
             C 82 32, 66 31, 55 34
             C 42 37, 36 48, 38 58
             C 40 68, 54 71, 72 75
             C 90 79, 97 86, 94 97
             C 91 107, 76 111, 60 109
             C 46 107, 38 101, 34 94"
          fill="none"
          stroke="#FFFFFF"
          stroke-width="12"
          stroke-linecap="round"
        />
        <circle cx="88" cy="38" r="6" fill="url(#silverGrad)" />
        <circle cx="34" cy="94" r="6" fill="url(#silverGrad)" />
      </g>

      <!-- Main Title -->
      <text x="165" y="55" font-family="system-ui, -apple-system, sans-serif" font-size="52" font-weight="900" fill="#FFFFFF" letter-spacing="-1">
        Sangeetha Safety Nets
      </text>
      <text x="165" y="112" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="700" fill="url(#silverGrad)" letter-spacing="-0.5">
        and Invisible Grills
      </text>
    </g>

    <!-- Subtitle / Value Proposition -->
    <g transform="translate(80, 335)">
      <text font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="600" fill="#F6E9EE" letter-spacing="-0.2">
        Premium Balcony Fall Protection &amp; Bird Exclusion in Bengaluru
      </text>
      <text y="42" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="400" fill="#B9BEC7">
        SS316 Marine Hardware • Dustless Diamond Drilling • 10-Year Material Warranty
      </text>
    </g>

    <!-- Bottom Feature Cards & Contact Block -->
    <g transform="translate(80, 440)">
      <!-- Feature 1: Warranty Badge -->
      <rect x="0" y="0" width="280" height="90" rx="18" fill="#FFFFFF" fill-opacity="0.08" stroke="#FFFFFF" stroke-opacity="0.15" stroke-width="1.5" />
      <text x="24" y="38" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#B9BEC7" letter-spacing="1">
        MATERIAL ASSURANCE
      </text>
      <text x="24" y="68" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="900" fill="#FFFFFF">
        10-Year Warranty
      </text>

      <!-- Feature 2: High Rise Rigging -->
      <rect x="305" y="0" width="280" height="90" rx="18" fill="#FFFFFF" fill-opacity="0.08" stroke="#FFFFFF" stroke-opacity="0.15" stroke-width="1.5" />
      <text x="329" y="38" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700" fill="#B9BEC7" letter-spacing="1">
        FAST DOORSTEP SERVICE
      </text>
      <text x="329" y="68" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="900" fill="#FFFFFF">
        All 5 City Zones
      </text>

      <!-- Contact Pill Button -->
      <g transform="translate(615, 0)">
        <rect width="425" height="90" rx="18" fill="#25D366" />
        <circle cx="48" cy="45" r="24" fill="#FFFFFF" fill-opacity="0.25" />
        <!-- Phone Icon Simple -->
        <path d="M 40 37 C 40 35, 42 33, 44 33 L 47 33 C 48 33, 50 35, 50 36 L 52 41 C 52 42, 51 44, 50 45 L 48 47 C 50 51, 53 54, 57 56 L 59 54 C 60 53, 62 52, 63 53 L 68 54 C 70 55, 71 56, 71 58 L 71 61 C 71 63, 69 65, 67 65 C 52 65, 40 53, 40 37 Z" fill="#FFFFFF" />
        <text x="90" y="40" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="#0A3618" letter-spacing="1">
          CALL OR WHATSAPP NOW
        </text>
        <text x="90" y="68" font-family="system-ui, -apple-system, sans-serif" font-size="26" font-weight="900" fill="#FFFFFF" letter-spacing="0.5">
          +91 99720 55520
        </text>
      </g>
    </g>

    <!-- Footer URL -->
    <text x="1120" y="590" text-anchor="end" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="700" fill="#B9BEC7" opacity="0.8">
      sangeethasafetynets.in
    </text>
  </svg>
  `;

  const outputPath = path.resolve(__dirname, '../public/images/og-image.webp');
  await sharp(Buffer.from(svg))
    .webp({ quality: 90 })
    .toFile(outputPath);

  console.log(`Generated high-resolution OG image (1200x630): ${outputPath}`);
}

generateOgImage().catch(console.error);

