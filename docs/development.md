# Development

## Prerequisites

- Node.js 20 or newer.
- npm.
- Access to `seda-studio/seda-studio.github.io` for CI and deployment work.

## Local Setup

```bash
npm ci
npm run dev
```

Eleventy serves the source locally and rebuilds on changes.

## Commands

- `npm run dev` - local Eleventy server.
- `npm run build` - generate `dist/` and `build-manifest.json`.
- `npm run validate` - content guard, required files, internal links, and HTML validation.
- `npm run test` - clean local build plus validation.
- `npm run lighthouse` - Lighthouse CI against `dist/`.

## Authoring

Keep v1 small. The homepage is `src/index.njk`; shared HTML is in `src/_layouts/base.njk`; styling is in `src/css/style.css`.

Do not copy internal research notes, infrastructure files, node setup notes, credentials, or post-doc drafts into this repository.

## Debugging

If a build fails, remove `dist/` and rerun `npm run build`. If validation fails, fix the generated source issue rather than editing `dist/`.

GitHub Pages builds use `SITE_URL=https://seda.art` and `ELEVENTY_ENV=production`. Use those values locally when checking canonical URLs, `robots.txt`, or `sitemap.xml`.
