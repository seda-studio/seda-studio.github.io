import { readdir, readFile } from "node:fs/promises";
import { extname, join } from "node:path";

async function listHtmlFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await listHtmlFiles(path));
    } else if (entry.isFile() && extname(entry.name) === ".html") {
      files.push(path);
    }
  }

  return files;
}

const errors = [];

for (const file of await listHtmlFiles("dist")) {
  const html = await readFile(file, "utf8");
  const anchors = html.matchAll(/<a\b[^>]*href=["']https?:\/\/[^"']+["'][^>]*>/g);

  for (const match of anchors) {
    const anchor = match[0];
    if (!/\starget=["']_blank["']/.test(anchor)) {
      errors.push(`${file}: external link missing target="_blank": ${anchor}`);
    }
    if (!/\srel=["'][^"']*\bnoopener\b[^"']*\bnoreferrer\b[^"']*["']/.test(anchor)) {
      errors.push(`${file}: external link missing rel="noopener noreferrer": ${anchor}`);
    }
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("External link targets valid.");
