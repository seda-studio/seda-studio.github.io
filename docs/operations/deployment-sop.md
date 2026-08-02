# Deployment SOP

## Preflight

1. Confirm the pull request is green in GitHub CI.
2. Confirm `SITE_URL=https://seda.art ELEVENTY_ENV=production npm run test` passes locally if making manual changes.
3. Confirm no secrets or internal documents were added.
4. Confirm GitHub Pages is configured to deploy from GitHub Actions.

## Production

Production deploys automatically when `main` is updated:

```bash
git push origin main
```

After deploy:

1. Open the GitHub Actions deployment for `Deploy GitHub Pages`.
2. Visit `https://seda.art`.
3. Confirm `https://www.seda.art` redirects to `https://seda.art`.
4. Confirm `https://seda.art/build-manifest.json` matches the intended commit.
5. Run `SMOKE_URL=https://seda.art/ npm run smoke`.

## DNS Changes

For domain changes, update the authoritative NSD zone in the infra repository and preserve all mail records. Validate the zone before reloading NSD, then verify apex A/AAAA records, the `www` CNAME, MX, SPF, DMARC, DKIM, and `mail.seda.art`.

## Release Record

Record commit SHA, deployment time, verifier, DNS serial if changed, and any follow-up notes.
