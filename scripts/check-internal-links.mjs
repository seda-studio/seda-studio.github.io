import { readdir, readFile, stat } from "node:fs/promises";
import { dirname, extname, join, normalize } from "node:path";

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

async function exists(path) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
}

function internalHrefTargets(html) {
  const matches = html.matchAll(/\shref=["']([^"']+)["']/g);
  return [...matches]
    .map((match) => match[1])
    .filter((href) => href.startsWith("/") && !href.startsWith("//"))
    .map((href) => href.split("#")[0].split("?")[0])
    .filter(Boolean);
}

const errors = [];
const htmlFiles = await listHtmlFiles("dist");

for (const htmlFile of htmlFiles) {
  const html = await readFile(htmlFile, "utf8");
  for (const href of internalHrefTargets(html)) {
    const target = href.endsWith("/")
      ? join("dist", href, "index.html")
      : join("dist", href);
    const normalized = normalize(target);

    if (!await exists(normalized)) {
      const fallback = join("dist", href, "index.html");
      if (!await exists(fallback)) {
        errors.push(`${htmlFile}: broken internal link ${href}`);
      }
    }
  }

  const canonicalBase = dirname(htmlFile).replace(/^dist/, "") || "/";
  if (!html.includes('rel="canonical"')) {
    errors.push(`${htmlFile}: missing canonical link (${canonicalBase})`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(`Internal links valid across ${htmlFiles.length} HTML files.`);
