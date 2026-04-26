# Architecture

```text
HTTP API -> Subscription Service -> Repository -> MySQL
              |        |
              v        v
       Policy Layer  VPN Panel Adapter
              |
              v
        Background Jobs
```

## Notes

- Policies are separated from provider adapters.
- Background jobs reuse the same domain services as HTTP endpoints.
- Provider-specific details are hidden behind adapter interfaces.
- Access decisions are deterministic and testable.

## Sequence: Device Registration

```mermaid
sequenceDiagram
  participant Client
  participant API
  participant Policy
  participant Repository
  participant Adapter

  Client->>API: POST /devices
  API->>Repository: Load subscription state
  Repository-->>API: Subscription + current devices
  API->>Policy: Evaluate device limit
  Policy-->>API: Allow or reject
  API->>Adapter: Provision device
  Adapter-->>API: Provider result
  API->>Repository: Persist device state
  API-->>Client: 201 Created
```
