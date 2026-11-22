const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Complete mapping of old image paths to new Sangeetha-branded WebP paths
const imageMap = {
  // Main & Services
  "/images/main-images/balcony-safetynets.webp": "/images/services/sangeetha-balcony-safety-nets-bangalore.webp",
  "/images/services/balcony-work-real.jpg": "/images/services/sangeetha-balcony-net-installation-bangalore.webp",
  "/images/materials/Balconynetwork.jpeg": "/images/materials/sangeetha-balcony-mesh-material.webp",
  "/images/hero/balconysafetynet.jpg": "/images/hero/sangeetha-balcony-safety-netting-bangalore.webp",
  "/images/gallery/before_balcony.webp": "/images/gallery/sangeetha-before-balcony-installation.webp",
  "/images/gallery/before_window.webp": "/images/gallery/sangeetha-before-window-installation.webp",
  "/images/services/child.webp": "/images/services/sangeetha-children-safety-nets-bangalore.webp",
  "/images/services/pet-safetynets-real.jpeg": "/images/services/sangeetha-pet-safety-nets-bangalore.webp",
  "/images/hero/pet.jpg": "/images/hero/sangeetha-cat-dog-balcony-protection.webp",
  "/images/services/service_pet_net.webp": "/images/services/sangeetha-pet-net-protection-bangalore.webp",
  "/images/hero/pigeonnet.jpg": "/images/hero/sangeetha-pigeon-safety-nets-bangalore.webp",
  "/images/services/monkey-safety-nets-real.jpg": "/images/services/sangeetha-monkey-safety-nets-bangalore.webp",
  "/images/main-images/monkey-safety.webp": "/images/main-images/sangeetha-monkey-proof-netting.webp",
  "/images/hero/monkeysafetynet.webp": "/images/hero/sangeetha-monkey-barrier-net-bangalore.webp",
  "/images/services/cricket-practice-net.jpg": "/images/services/sangeetha-cricket-practice-net-bangalore.webp",
  "/images/materials/BoxCricketnet.jpeg": "/images/materials/sangeetha-box-cricket-netting-bangalore.webp",
  "/images/materials/FactoryNets.jpeg": "/images/materials/sangeetha-industrial-factory-safety-nets.webp",
  "/images/main-images/Sports-Nets-3.jpg": "/images/main-images/sangeetha-sports-ground-netting-bangalore.webp",
  "/images/main-images/duct-area-real.webp": "/images/main-images/sangeetha-building-duct-area-safety-nets.webp",
  "/images/main-images/building-duct-pigeon-netting.jpg": "/images/main-images/sangeetha-building-duct-pigeon-netting.webp",
  "/images/services/duct-area-2.jpg": "/images/services/sangeetha-duct-area-pigeon-netting.webp",
  "/images/main-images/Duct-Area-3.jpg": "/images/main-images/sangeetha-duct-shaft-safety-mesh.webp",
  "/images/services/duct-area-real.webp": "/images/services/sangeetha-duct-area-netting-bangalore.webp",
  "/images/services/building-duct-pigeon-netting.jpg": "/images/services/sangeetha-duct-pigeon-nets-bangalore.webp",
  "/images/services/bird-spikes-real.jpg": "/images/services/sangeetha-anti-bird-spikes-bangalore.webp",
  "/images/hero/service-spikes.jpg": "/images/hero/sangeetha-polycarbonate-bird-spikes.webp",
  "/images/services/mosquito-net.jpg": "/images/services/sangeetha-window-mosquito-mesh-bangalore.webp",
  "/images/main-images/mosquito-net.jpg": "/images/services/sangeetha-window-mosquito-mesh-bangalore.webp",
  
  // Invisible Grills
  "/images/main-images/Balcony-Grills.jpg": "/images/main-images/sangeetha-balcony-invisible-grills-bangalore.webp",
  "/images/services/balcony-invisible-grills-real.jpg": "/images/services/sangeetha-ss316-balcony-invisible-grills.webp",
  "/images/services/shyambalconygrills.jpg": "/images/services/sangeetha-luxury-balcony-invisible-grills.webp",
  "/images/services/window-grills-real.webp": "/images/services/sangeetha-window-invisible-grills-bangalore.webp",
  "/images/hero/windowgrill.webp": "/images/hero/sangeetha-window-safety-grills-bangalore.webp",
  "/images/services/service_window_grill.webp": "/images/services/sangeetha-window-grill-view-bangalore.webp",
  "/images/services/shyamchildreninvisiblegrills.jpg": "/images/services/sangeetha-children-invisible-grills.webp",
  "/images/services/shyampetinvisiblegrills.jpg": "/images/services/sangeetha-pet-invisible-grills.webp",
  "/images/services/Shayamstaircase-grills.jpg": "/images/services/sangeetha-staircase-invisible-grills.webp",
  
  // Cloth Hangers
  "/images/services/ceiling-cloth-hangers-1.jpg": "/images/services/sangeetha-ceiling-cloth-drying-hangers.webp",
  "/images/services/ceiling-cloth-hangers-2.jpg": "/images/services/sangeetha-pulley-cloth-drying-hangers.webp",
  "/images/services/cloth-hangers-real.jpg": "/images/services/sangeetha-balcony-cloth-hangers-bangalore.webp",
  "/images/main-images/clothhanger-work.jpg": "/images/main-images/sangeetha-cloth-hanger-installation.webp",
  "/images/main-images/clothhangerwork2.jpg": "/images/main-images/sangeetha-pulley-hanger-mechanism.webp",
  "/images/main-images/cloth-Hangers3.jpg": "/images/main-images/sangeetha-stainless-steel-cloth-hangers.webp",
  "/images/materials/clothhangerwork.jpeg": "/images/materials/sangeetha-cloth-hanger-pulley-system.webp",
  
  // Materials & Hero
  "/images/hero/constructionnet.webp": "/images/hero/sangeetha-construction-debris-safety-nets.webp",
  "/images/materials/materias5.jpeg": "/images/materials/sangeetha-hdpe-nylon-net-twine.webp",
  "/images/materials/Materials6.jpeg": "/images/materials/sangeetha-ss316-stainless-steel-wire.webp",
  "/images/materials/Materials7.jpeg": "/images/materials/sangeetha-anchoring-fasteners-hardware.webp",
  "/images/main-images/Sangeetha/sangeetha-safety-nets-logo.webp": "/images/sangeetha-safety-nets-badge.webp",
  "/images/hero/safetynets.webp": "/images/hero/sangeetha-safety-nets-overview.webp",
  "/images/hero/safetynets2.jpg": "/images/hero/sangeetha-residential-safety-netting.webp",
  "/images/hero/sports-safety.webp": "/images/hero/sangeetha-sports-netting-bangalore.webp",
  "/images/hero/cloth-hanger1.jpg": "/images/hero/sangeetha-cloth-drying-hanger-system.webp",
  "/images/hero/cloth-hanger2.webp": "/images/hero/sangeetha-pulley-drying-rods.webp",
  "/images/hero/childrensafetynet.webp": "/images/hero/sangeetha-child-protection-nets.webp",
  "/images/hero/childrensafetygrill.jpg": "/images/hero/sangeetha-child-safety-grill-bangalore.webp",
  "/images/hero/balconygrill.jpg": "/images/hero/sangeetha-balcony-invisible-wire-grill.webp",
  "/images/hero/cricket.jpeg": "/images/hero/sangeetha-cricket-net-enclosure.webp",
  "/images/hero/cricketpracticenet.jpg": "/images/hero/sangeetha-cricket-pitch-netting.webp",
  "/images/hero/customgrill.jpg": "/images/hero/sangeetha-custom-balcony-wire-grill.webp",
  "/images/hero/ductarea.webp": "/images/hero/sangeetha-duct-area-bird-netting.webp",
};

async function processImages() {
  console.log("Starting image conversion & optimization...");
  const projectRoot = path.resolve(__dirname, '..');
  for (const [oldPath, newPath] of Object.entries(imageMap)) {
    const srcFile = path.join(projectRoot, 'public', oldPath);
    const destFile = path.join(projectRoot, 'public', newPath);

    if (fs.existsSync(srcFile)) {
      const destDir = path.dirname(destFile);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }

      try {
        await sharp(srcFile)
          .resize({ width: 1400, withoutEnlargement: true })
          .webp({ quality: 80 })
          .toFile(destFile);
        console.log(`Converted: ${oldPath} -> ${newPath}`);
      } catch (err) {
        console.error(`Error processing ${srcFile}:`, err.message);
      }
    } else {
      console.warn(`Source not found: ${srcFile}`);
    }
  }

  // Update code references in src/
  console.log("Updating code references in src/...");
  function walkDir(dir) {
    let files = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
      file = path.join(dir, file);
      const stat = fs.statSync(file);
      if (stat && stat.isDirectory()) {
        files = files.concat(walkDir(file));
      } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.css') || file.endsWith('.json')) {
        files.push(file);
      }
    });
    return files;
  }

  const allSourceFiles = walkDir(path.join(projectRoot, 'src'));
  let totalReplacements = 0;

  for (const file of allSourceFiles) {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;

    for (const [oldPath, newPath] of Object.entries(imageMap)) {
      if (content.includes(oldPath)) {
        content = content.replaceAll(oldPath, newPath);
        changed = true;
        totalReplacements++;
      }
    }

    if (changed) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated references in: ${file}`);
    }
  }

  console.log(`Finished updating references. Total replacements: ${totalReplacements}`);
}

processImages();
