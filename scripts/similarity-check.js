const fs = require('fs');
const path = require('path');

const targetRoot = path.resolve(__dirname, '..');
const sourceRoot = path.resolve(__dirname, '../../koteshwari-safety-nets');

function stripCode(content) {
  // Remove code structures to extract pure visible text
  return content
    .replace(/\/\*[\s\S]*?\*\//g, ' ')
    .replace(/\/\/.*/g, ' ')
    .replace(/['"]use client['"];?/gi, ' ')
    .replace(/import\s+.*?from\s+['"].*?['"];?/gs, ' ')
    .replace(/interface\s+\w+[\s\S]*?\}/gs, ' ')
    .replace(/type\s+\w+\s*=[\s\S]*?;/gs, ' ')
    .replace(/const\s+\[[\w,\s]+\]\s*=\s*useState\(.*?\);/gs, ' ')
    .replace(/const\s+\w+\s*=\s*useMemo\([\s\S]*?\]\);/gs, ' ')
    .replace(/const\s+breadcrumbLinks\s*=[\s\S]*?\];/gs, ' ')
    .replace(/export\s+const\s+metadata[\s\S]*?;\n/gs, ' ')
    .replace(/const\s+\w+Schema\s*=[\s\S]*?;\n/gs, ' ')
    .replace(/export\s+default\s+function.*?\{/gs, ' ')
    .replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ')
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\{`[\s\S]*?`\}/g, ' ')
    .replace(/className=["'][^"']*["']/g, ' ')
    .replace(/href=["'][^"']*["']/g, ' ')
    .replace(/aria-[a-z]+=["'][^"']*["']/g, ' ')
    .replace(/['"]\/images\/[^'"]+['"]/g, ' ')
    .replace(/[\r\n\t]+/g, ' ')
    .replace(/[^\w\s]/g, ' ')
    .toLowerCase()
    .replace(/\s+/g, ' ')
    .trim();
}

function getShingles(text, size = 5) {
  const words = text.split(' ').filter(w => w.length > 1);
  const shingles = new Set();
  for (let i = 0; i <= words.length - size; i++) {
    shingles.add(words.slice(i, i + size).join(' '));
  }
  return shingles;
}

function calculateOverlap(sourceText, targetText) {
  const sourceShingles = getShingles(sourceText);
  const targetShingles = getShingles(targetText);

  if (targetShingles.size === 0) return { overlap: 0, matches: [] };

  const matches = [...targetShingles].filter(s => sourceShingles.has(s));
  return {
    overlap: (matches.length / targetShingles.size) * 100,
    matches: matches.slice(0, 4)
  };
}

const keyFilesToCheck = [
  'src/app/page.tsx',
  'src/components/sections/HeroCarousel.tsx',
  'src/components/sections/WhyChooseUs.tsx',
  'src/components/sections/InstallationProcess.tsx',
  'src/components/sections/FAQAccordion.tsx',
  'src/components/sections/CostCalculator.tsx',
  'src/components/sections/FeaturedServices.tsx',
  'src/components/sections/ServiceCategories.tsx',
  'src/components/sections/Stats.tsx',
  'src/app/about/page.tsx',
  'src/app/pricing/page.tsx',
  'src/app/testimonials/TestimonialsClient.tsx',
  'src/app/case-studies/CaseStudiesClient.tsx',
  'src/app/areas/AreasClient.tsx',
  'src/app/contact/page.tsx',
];

console.log('═══════════════════════════════════════════════════════════');
console.log('RUNNING 5-WORD SHINGLE SIMILARITY AUDIT AGAINST KOTESHWARI');
console.log('═══════════════════════════════════════════════════════════\n');

let flaggedCount = 0;
const results = [];

for (const relPath of keyFilesToCheck) {
  const targetFile = path.join(targetRoot, relPath);
  const sourceFile = path.join(sourceRoot, relPath);

  if (!fs.existsSync(targetFile)) {
    console.log(`[SKIP] Target file does not exist: ${relPath}`);
    continue;
  }
  if (!fs.existsSync(sourceFile)) {
    console.log(`[PASS] Source counterpart does not exist (unique new file): ${relPath}`);
    results.push({ file: relPath, score: 0, status: 'PASS (NEW)' });
    continue;
  }

  const targetContent = stripCode(fs.readFileSync(targetFile, 'utf8'));
  const sourceContent = stripCode(fs.readFileSync(sourceFile, 'utf8'));

  const { overlap: score, matches } = calculateOverlap(sourceContent, targetContent);
  const status = score > 10 ? 'FLAGGED (>10%)' : 'PASS (<=10%)';

  if (score > 10) flaggedCount++;

  results.push({
    file: relPath,
    score: score.toFixed(1) + '%',
    status,
  });

  console.log(`${status.padEnd(16)} | Overlap: ${score.toFixed(1).padStart(5)}% | ${relPath}`);
  if (score > 10 && matches.length > 0) {
    console.log(`                 | Sample matches: ${matches.slice(0, 3).join(' ... ')}`);
  }
}

console.log('\n═══════════════════════════════════════════════════════════');
console.log(`Total Files Checked: ${results.length}`);
console.log(`Flagged (>10% duplicate wording): ${flaggedCount}`);
console.log('═══════════════════════════════════════════════════════════');

if (flaggedCount > 0) {
  process.exit(1);
} else {
  console.log('ALL CHECKED PAGES PASS SIMILARITY THRESHOLD (<10%).');
  process.exit(0);
}
