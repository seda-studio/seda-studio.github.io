# Rollback SOP

## Content Rollback

Revert the bad commit on `main` and push the revert. GitHub Actions will publish a new Pages deployment from the reverted source.

```bash
git revert <bad-commit>
git push origin main
```

Verify:

```bash
SMOKE_URL=https://seda.art/ npm run smoke
```

## Workflow Rollback

If the Pages workflow itself is broken, use GitHub Actions deployment history to restore the last good Pages deployment while fixing `main`.

## DNS Rollback

Restore the backed-up NSD zone records for `seda.art` and `www.seda.art`, increment the SOA serial, validate with `nsd-checkzone`, reload NSD, and confirm the old origin responds before disabling Pages.

## TLS Fallback

If GitHub Pages certificate issuance or HTTPS enforcement stalls, keep DNS pointed at the last working endpoint until GitHub Pages reports the custom domain as healthy.
