export enum ValidationStatuses {
  IDLE = "IDLE",
  VALID = "VALID",
  INVALID = "INVALID",
}

export type ValidationStatus = keyof typeof ValidationStatuses;
