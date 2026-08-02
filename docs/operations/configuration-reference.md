# Configuration Reference

## URLs

- Production: `https://seda.art`
- Redirect: `https://www.seda.art` to `https://seda.art`
- Temporary Pages hostname: `https://seda-studio.github.io`

## Local Environment

- `SITE_URL` - canonical base URL.
- `ELEVENTY_ENV` - `production` or development default.

## GitHub Pages

- Repository: `seda-studio/seda-studio.github.io`.
- Source: GitHub Actions.
- Artifact directory: `dist/`.
- Production build env: `SITE_URL=https://seda.art`, `ELEVENTY_ENV=production`.

## DNS

- Authoritative zone: `/Users/dan/data/home/infra/email-setup/hetzner-nsd/zones/seda.art.zone`.
- Apex A records point to GitHub Pages.
- Apex AAAA records point to GitHub Pages.
- `www` is a CNAME to `seda-studio.github.io`.
- Mail records stay on the existing `mail.seda.art` path.

## Smoke Test Environment

- `SMOKE_URL` - URL to fetch.
- `SMOKE_EXPECT` - expected body text, defaults to `Software for Evolving Digital Art`.

## Authoritative Repositories

- Website source: `git@github.com:seda-studio/seda-studio.github.io.git`.
- Hosting infrastructure: `/Users/dan/data/home/infra`.
- Do not treat live host edits as authoritative until reconciled into Git.
