import { mkdir, writeFile } from "node:fs/promises";
import { execFileSync } from "node:child_process";

function readGit(args) {
  try {
    return execFileSync("git", args, { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
  } catch {
    return "";
  }
}

const manifest = {
  project: "seda-website",
  generatedAt: new Date().toISOString(),
  commit: readGit(["rev-parse", "HEAD"]),
  branch: readGit(["rev-parse", "--abbrev-ref", "HEAD"]),
  tag: readGit(["describe", "--tags", "--exact-match"]),
  node: process.version,
  siteUrl: process.env.SITE_URL || "https://seda.art",
  environment: process.env.ELEVENTY_ENV || process.env.NODE_ENV || "development"
};

await mkdir("dist", { recursive: true });
await writeFile("dist/build-manifest.json", `${JSON.stringify(manifest, null, 2)}\n`);
