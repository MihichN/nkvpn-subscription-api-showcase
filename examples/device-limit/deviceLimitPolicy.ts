export type DevicePolicyInput = {
  currentDevices: number
  maxDevices: number
  subscriptionActive: boolean
}

export function canAddDevice(input: DevicePolicyInput) {
  if (!input.subscriptionActive) {
    return { allowed: false, reason: "subscription_inactive" as const }
  }

  if (input.currentDevices >= input.maxDevices) {
    return { allowed: false, reason: "device_limit_reached" as const }
  }

  return { allowed: true, reason: null }
}
