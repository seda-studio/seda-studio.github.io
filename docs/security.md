# Security

## Secrets

Do not commit:

- SSH private keys.
- GitHub personal access tokens or deployment credentials.
- TLS private keys or certificates.
- Node setup notes containing operational credentials.
- `.env` files other than `.env.example`.

## Deployment Access

GitHub Pages deploys through GitHub Actions OIDC with `pages: write` and `id-token: write` permissions. Do not add long-lived deploy keys or tokens for the website unless a future workflow explicitly requires them.

## Content Safety

`npm run validate` checks for known non-public terms in source content. This is a guardrail, not a replacement for review.

## Dependency Updates

Review `npm audit` output before releases. Do not add client-side dependencies unless they are necessary for the placeholder site.

## Incident Response

If a secret is committed, consider it exposed. Remove it from the repo, rotate the credential, inspect GitHub Actions logs, and document the incident in the operations log.
