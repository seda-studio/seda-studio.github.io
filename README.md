# SEDA Website

Placeholder website for `seda.art`.

SEDA means **Software for Evolving Digital Art**. This site presents the project as a public umbrella for research and software around preserving network-interactive and evolving digital art.

## Status

This repository contains a minimal Eleventy 3 static site. It builds to `dist/` and deploys to GitHub Pages from `seda-studio/seda-studio.github.io`.

## Quick Start

```bash
npm ci
npm run dev
npm run test
```

Production build:

```bash
SITE_URL=https://seda.art ELEVENTY_ENV=production npm run build
```

## Repository Map

- `src/` - Eleventy source, layouts, CSS, and assets.
- `scripts/` - build validation and smoke checks.
- `.github/workflows/` - pull-request CI and GitHub Pages deployment.
- `docs/` - development, testing, content, security, and operations SOPs.
- `dist/` - generated output, ignored by Git.

## Deployment Summary

- Pull requests to `main` run CI.
- Pushes to `main` build `dist/` and deploy to GitHub Pages.
- `seda.art` is the canonical production domain.
- `www.seda.art` redirects to the apex domain through GitHub Pages.

See `docs/operations/deployment-sop.md` before deploying.
