import { describe, expect, it } from "vitest"
import { canAddDevice } from "../examples/device-limit/deviceLimitPolicy"

describe("canAddDevice", () => {
  it("allows a device when subscription is active and capacity remains", () => {
    expect(
      canAddDevice({
        currentDevices: 1,
        maxDevices: 3,
        subscriptionActive: true,
      }),
    ).toEqual({ allowed: true, reason: null })
  })

  it("blocks inactive subscriptions", () => {
    expect(
      canAddDevice({
        currentDevices: 0,
        maxDevices: 3,
        subscriptionActive: false,
      }),
    ).toEqual({ allowed: false, reason: "subscription_inactive" })
  })

  it("blocks when the device limit is reached", () => {
    expect(
      canAddDevice({
        currentDevices: 3,
        maxDevices: 3,
        subscriptionActive: true,
      }),
    ).toEqual({ allowed: false, reason: "device_limit_reached" })
  })
})
