# ADR 0001: Policy Layer Before Provider Adapters

## Status

Accepted

## Context

Subscription APIs often mix business rules with provider calls. That makes device limits, traffic limits, expiration checks, and provider synchronization hard to test and risky to change.

## Decision

Evaluate subscription policies before calling VPN panel adapters.

## Consequences

- Access decisions are deterministic and unit-testable.
- Provider calls are avoided for requests that fail local policy.
- Background repair jobs can reuse the same policy layer.
- Adapter code remains focused on infrastructure integration rather than business rules.
