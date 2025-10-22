import fs from "fs";
import path from "path";
import crypto from "crypto";

const buildDir = "./build";

// Function to generate hash based on file content
function generateHash(filePath) {
  const content = fs.readFileSync(filePath);
  return crypto.createHash("md5").update(content).digest("hex").slice(0, 10);
}

// Get target files
const jsFile = path.join(buildDir, "index.js");
const cssFile = path.join(buildDir, "index.css");

if (fs.existsSync(jsFile)) {
  const hash = generateHash(jsFile);
  const newJs = `index.${hash}.js`;
  fs.renameSync(jsFile, path.join(buildDir, newJs));
  console.log(`✅ JS renamed to ${newJs}`);

  // Update your PHP enqueue file reference (see Step 3)
  fs.writeFileSync("./build/js-hash.txt", newJs);
}

if (fs.existsSync(cssFile)) {
  const hash = generateHash(cssFile);
  const newCss = `index.${hash}.css`;
  fs.renameSync(cssFile, path.join(buildDir, newCss));
  console.log(`✅ CSS renamed to ${newCss}`);

  // Update your PHP enqueue file reference (see Step 3)
  fs.writeFileSync("./build/css-hash.txt", newCss);
}
