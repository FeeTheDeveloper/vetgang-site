import { NextResponse } from "next/server";
import { ScanCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { ddbDocClient } from "@/lib/server/ddb";
import type { IntakeRecord, IntakeStatus } from "@/lib/models/intake";

export const runtime = "nodejs";

const allowedStatuses = new Set<IntakeStatus>(["new", "reviewing", "approved", "rejected"]);

const normalizeText = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export async function GET() {
  const tableName = process.env.DDB_TABLE_INTAKE;

  if (!tableName) {
    return NextResponse.json({ ok: false, error: "Server misconfiguration." }, { status: 500 });
  }

  try {
    // TODO: Replace Scan with a query on a status/createdAt index once available.
    const result = await ddbDocClient.send(
      new ScanCommand({
        TableName: tableName,
        Limit: 50,
      })
    );

    const items = (result.Items ?? []) as IntakeRecord[];

    items.sort((a, b) => (b.createdAt ?? "").localeCompare(a.createdAt ?? ""));

    return NextResponse.json({ ok: true, items });
  } catch (error) {
    console.error("Failed to fetch intake records", error);
    return NextResponse.json({ ok: false, error: "Unable to fetch intake." }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  const tableName = process.env.DDB_TABLE_INTAKE;

  if (!tableName) {
    return NextResponse.json({ ok: false, error: "Server misconfiguration." }, { status: 500 });
  }

  let payload: Record<string, unknown> | null = null;

  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    payload = null;
  }

  if (!payload) {
    return NextResponse.json({ ok: false, error: "Invalid payload." }, { status: 400 });
  }

  const id = normalizeText(payload.id);
  const status = normalizeText(payload.status) as IntakeStatus;

  if (!id || !allowedStatuses.has(status)) {
    return NextResponse.json({ ok: false, error: "Invalid status update." }, { status: 400 });
  }

  try {
    await ddbDocClient.send(
      new UpdateCommand({
        TableName: tableName,
        Key: { id },
        UpdateExpression: "SET #status = :status",
        ExpressionAttributeNames: {
          "#status": "status",
        },
        ExpressionAttributeValues: {
          ":status": status,
        },
      })
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to update intake status", error);
    return NextResponse.json({ ok: false, error: "Unable to update intake." }, { status: 500 });
  }
}
