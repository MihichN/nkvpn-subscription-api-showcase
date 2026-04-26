# NKVPN Subscription API Showcase

Public-safe showcase of a VPN subscription API. The private version manages subscription links, device limits, traffic accounting, server groups, and background maintenance jobs.

## Highlights

- Subscription lifecycle and access decisions.
- Device limit and traffic limit policies.
- Background cleanup/repair jobs.
- VPN panel adapter boundary in the private implementation.
- MySQL-backed state and audit data.

## Tech Stack

- Node.js, TypeScript, Express.
- MySQL, cron jobs, HTTP clients.
- Adapter-based infrastructure integration.

## Included

- `docs/architecture.md` - service boundary and background jobs.
- `docs/openapi.yaml` - public-safe API contract.
- `docs/adr/` - architecture decision records.
- `docs/production.md` - reliability, security, observability, and data-integrity notes.
- `docs/roadmap.md` - scaling and delivery roadmap.
- `examples/device-limit/deviceLimitPolicy.ts` - safe device limit policy.
- `tests/` - unit tests for policy decisions.
- `.github/workflows/ci.yml` - CI pipeline for typecheck and tests.

## Engineering Quality

```bash
npm install
npm run typecheck
npm test
```

## Not Included

Real subscription link generation, VPN panel credentials, server configs, traffic logs, user data, and production maintenance scripts are excluded.
