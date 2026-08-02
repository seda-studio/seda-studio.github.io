import { access } from "node:fs/promises";

const requiredFiles = [
  "dist/index.html",
  "dist/404.html",
  "dist/robots.txt",
  "dist/sitemap.xml",
  "dist/css/style.css",
  "dist/assets/favicon.svg",
  "dist/build-manifest.json"
];

const missing = [];

for (const file of requiredFiles) {
  try {
    await access(file);
  } catch {
    missing.push(file);
  }
}

if (missing.length) {
  console.error(`Missing required build files:\n${missing.map((file) => `- ${file}`).join("\n")}`);
  process.exit(1);
}

console.log(`Required build files present (${requiredFiles.length}).`);
