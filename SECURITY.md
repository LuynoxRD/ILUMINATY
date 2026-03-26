# Security Policy

## Supported Maintenance Scope

This repository is maintained as a public portfolio and template codebase.

Current security maintenance expectations:

- dependency updates are reviewed periodically
- GitHub Dependabot can be used for alerts and security update pull requests
- production consumers remain responsible for validating their own deployment, infrastructure, secrets handling and backend integrations

## Reporting a Vulnerability

Do not open a public issue for an unpatched security vulnerability.

Use one of these channels instead:

- open a private security advisory in GitHub, if enabled
- contact the repository owner directly before public disclosure

When reporting, include:

- affected file or feature
- reproduction steps
- impact assessment
- proof of concept if available
- proposed mitigation if known

## Scope Notes

This frontend does not ship private credentials and should not be used as the trust boundary for third-party integrations.

In particular:

- form endpoints must be secured server-side
- all inbound payloads must be validated again in the backend
- dependency and supply-chain risk must be monitored over time

## Maintenance Workflow

Recommended minimum verification before merging dependency or security updates:

1. `npm outdated`
2. `npm audit`
3. `npm run lint`
4. `npx vue-tsc --noEmit`
5. `npm run build`
