# Production SOP

## Dependencies

- Public DNS for `seda.art` points to GitHub Pages A/AAAA records.
- Public DNS for `www.seda.art` is a CNAME to `seda-studio.github.io`.
- GitHub Pages is enabled with GitHub Actions as the source.
- The custom domain is configured as `seda.art`.
- Enforce HTTPS is enabled after GitHub finishes certificate issuance.

## Release

1. Merge or push the reviewed change to `main`.
2. Watch the GitHub Pages deployment workflow.
3. Verify apex, `www` redirect, build manifest, and smoke test.

## Cache

GitHub Pages may cache static responses briefly. If content appears stale, verify the deployed workflow run and `build-manifest.json`.

## Health Checks

Use:

```bash
SMOKE_URL=https://seda.art/ npm run smoke
```

After DNS changes, query authoritative nameservers and public resolvers for the expected web and mail records.
