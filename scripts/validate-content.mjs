import { readFile, readdir } from "node:fs/promises";
import { join } from "node:path";

const forbiddenTerms = [
  "node-01@seda.art",
  "node-02@seda.art",
  "ssh password",
  "wifi password",
  "CONNKT.ART",
  "volunteer node program",
  "Teia transfer"
];

async function listFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await listFiles(path));
    } else if (entry.isFile()) {
      files.push(path);
    }
  }

  return files;
}

const files = [
  ...await listFiles("src")
].filter((file) => !file.endsWith(".svg"));

const errors = [];

for (const file of files) {
  const content = await readFile(file, "utf8");
  for (const term of forbiddenTerms) {
    if (content.toLowerCase().includes(term.toLowerCase())) {
      errors.push(`${file}: contains non-public or unapproved term "${term}"`);
    }
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Public-content guard passed.");
