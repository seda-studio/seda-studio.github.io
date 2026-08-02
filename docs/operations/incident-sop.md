# Incident SOP

## Triage

1. Identify whether the incident is content, GitHub Actions, GitHub Pages, DNS, TLS, networking, or credentials.
2. Preserve relevant GitHub Actions logs, Pages status, DNS answers, and HTTP responses.
3. If public production is affected, consider immediate content rollback.

## Common Incidents

- Broken production content: revert the bad commit and let Pages redeploy.
- Failed Pages deployment: inspect GitHub Actions, fix `main`, and redeploy.
- DNS regression: restore the backed-up NSD zone, bump serial, validate, and reload.
- TLS issue: check GitHub Pages custom-domain status and HTTPS enforcement.
- Credential exposure: rotate the credential, remove the source, and inspect logs for use.

## Escalation

Escalate infrastructure incidents through the home infra SOPs. Do not improvise live host changes without a backup and verification path.

## Post-Incident

Document root cause, recovery action, affected release, and the regression check added.
