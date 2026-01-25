import { NextResponse } from "next/server";
import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "@/lib/server/ddb";
import type { IntakeRecord, IntakeType } from "@/lib/models/intake";

export const runtime = "nodejs";

const allowedTypes = new Set<IntakeType>(["veteran-owned", "partner", "contact"]);

const normalizeText = (value: unknown) => (typeof value === "string" ? value.trim() : "");

const normalizeEmail = (value: unknown) => normalizeText(value).toLowerCase();

const isValidEmail = (value: string) => Boolean(value && /.+@.+\..+/.test(value));

const normalizeMetadata = (value: unknown) => {
  if (!value || typeof value !== "object") {
    return undefined;
  }

  const entries = Object.entries(value).reduce<Record<string, string>>((acc, [key, entryValue]) => {
    if (typeof entryValue === "string" && entryValue.trim()) {
      acc[key] = entryValue.trim();
    }
    return acc;
  }, {});

  return Object.keys(entries).length > 0 ? entries : undefined;
};

export async function POST(request: Request) {
  let payload: Record<string, unknown> | null = null;

  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    payload = null;
  }

  if (!payload) {
    return NextResponse.json({ ok: false, error: "Invalid payload." }, { status: 400 });
  }

  const type = normalizeText(payload.type) as IntakeType;
  const name = normalizeText(payload.name);
  const email = normalizeEmail(payload.email);
  const businessName = normalizeText(payload.businessName);
  const role = normalizeText(payload.role);
  const message = normalizeText(payload.message);
  const metadata = normalizeMetadata(payload.metadata);

  if (!allowedTypes.has(type)) {
    return NextResponse.json({ ok: false, error: "Invalid intake type." }, { status: 400 });
  }

  if (!name || !isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Name and valid email are required." }, { status: 400 });
  }

  const tableName = process.env.DDB_TABLE_INTAKE;

  if (!tableName) {
    return NextResponse.json({ ok: false, error: "Server misconfiguration." }, { status: 500 });
  }

  const record: IntakeRecord = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    type,
    status: "new",
    name,
    email,
    businessName: businessName || undefined,
    role: role || undefined,
    message: message || undefined,
    metadata,
  };

  try {
    await ddbDocClient.send(
      new PutCommand({
        TableName: tableName,
        Item: record,
      })
    );
  } catch (error) {
    console.error("Failed to store intake record", error);
    return NextResponse.json({ ok: false, error: "Unable to store intake." }, { status: 500 });
  }

  return NextResponse.json({ ok: true, id: record.id });
}
