# Production Concerns

## Reliability

- Idempotency keys for device registration and subscription mutations.
- Retries with backoff for VPN panel adapter calls.
- Background jobs must be safe to re-run.
- Provider sync state should be persisted with timestamps and error codes.

## Security

- Internal API keys stored outside Git.
- VPN panel cookies and credentials never exposed to frontend clients.
- Audit logs for administrative subscription changes.
- IP allowlists or mTLS for internal maintenance endpoints where applicable.

## Observability

- Metrics for subscription creation, failed provisioning, traffic sync lag, cleanup counts, and provider latency.
- Alerts for repeated provider failures and stuck background jobs.

## Data Integrity

- Use database transactions around subscription state changes.
- Prefer append-only audit events for sensitive lifecycle changes.
- Keep repair scripts explicit and reviewable.
