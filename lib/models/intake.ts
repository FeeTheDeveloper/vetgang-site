export type IntakeType = "veteran-owned" | "partner" | "contact";

export type IntakeStatus = "new" | "reviewing" | "approved" | "rejected";

export interface IntakeRecord {
  id: string;
  createdAt: string;
  type: IntakeType;
  status: IntakeStatus;
  name: string;
  email: string;
  businessName?: string;
  role?: string;
  message?: string;
  metadata?: Record<string, string>;
}

// TODO: Add a GSI to support querying by status and createdAt (e.g., status as partition key, createdAt as sort key).
