# Roadmap

## Near Term

- Add integration tests with mocked provider adapters.
- Add OpenAPI examples for all error responses.
- Add idempotency middleware for mutating endpoints.

## Scaling

- Move provider sync and cleanup work to a queue.
- Partition traffic usage tables by time if usage volume grows.
- Add read replicas for dashboard-heavy traffic.

## Leadership Notes

- Treat provider adapters as replaceable infrastructure.
- Keep subscription policy changes behind reviewable feature flags.
- Maintain an incident playbook for provider outages.
