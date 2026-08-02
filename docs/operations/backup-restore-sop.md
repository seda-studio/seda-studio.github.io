# Backup and Restore SOP

## Before DNS Changes

Back up live config files before editing:

- Authoritative NSD zone for `seda.art`.
- Current DNS answers for apex, `www`, `mail`, MX, SPF, DMARC, and DKIM records.

Store backups under the infra repository's dated pre-change backup convention.

## Website Releases

GitHub Pages keeps deployment history in the repository's Actions and Pages views. The Git repository remains the authoritative source for regenerating content.

## Restore Test

At least once after initial launch, test restoring a previous GitHub Pages deployment or reverting a harmless commit in a controlled window.

## Off-Host Backups

Ensure the GitHub repository and the infra repository are included in regular source-control backup coverage.
