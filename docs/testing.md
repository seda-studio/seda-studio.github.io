# Testing

## Local Gate

```bash
npm run test
```

This runs:

1. Eleventy build.
2. Build manifest generation.
3. Public-content guard.
4. Required-file checks.
5. Internal-link checks.
6. External-link target and `rel` checks.
7. HTML validation.

## Lighthouse

```bash
npm run build
npm run lighthouse
```

`lighthouserc.cjs` records the target thresholds. The locked project dependencies intentionally do not include `@lhci/cli` while its dependency tree has an active high-severity advisory; run Lighthouse with an approved external version when needed.

## Deployment Smoke Test

```bash
SMOKE_URL=https://seda.art/ npm run smoke
```

During DNS cutover, also check the temporary Pages hostname:

```bash
SMOKE_URL=https://seda-studio.github.io/ npm run smoke
```

## Regression Policy

When a bug reaches staging or production, add or update a check that would have caught it before fixing the bug.
