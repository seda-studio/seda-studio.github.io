# Contributing

## Working Model

Use short-lived branches and merge through `main`. Production deploys automatically through GitHub Pages after CI passes.

## Definition of Done

- `npm run test` passes from a clean checkout.
- Public copy follows `docs/content-policy.md`.
- No secrets, infrastructure credentials, node-operation material, or post-doc drafts are copied into this repository.
- New pages include title, description, canonical URL behavior, keyboard access, responsive layout, and sensible 404 behavior.
- Documentation is updated when commands, workflows, or deployment behavior changes.

## Content Review

Avoid language that implies institutional approval, funding, production readiness, Teia endorsement, public node enrollment, or mature CONNKT services unless those claims are separately approved and public.

## Dependency Policy

Keep the runtime static. New dependencies must be build-time only unless there is a clear reason to ship client JavaScript.

## Accessibility

Use semantic HTML first. Maintain visible focus states, adequate contrast, reduced-motion behavior, and useful link text.
