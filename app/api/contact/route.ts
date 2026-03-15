import { NextResponse } from "next/server";

export const runtime = "nodejs";

const normalizeText = (value: unknown) => (typeof value === "string" ? value.trim() : "");
const normalizeEmail = (value: unknown) => normalizeText(value).toLowerCase();
const isValidEmail = (value: string) => Boolean(value && /.+@.+\..+/.test(value));

const subjectByFormType: Record<string, string> = {
  contact: "New Vet Gang Contact Submission",
  join: "New Vet Gang Join Request",
  partner: "New Vet Gang Partnership Inquiry",
};

export async function POST(request: Request) {
  let payload: Record<string, unknown> | null = null;

  try {
    payload = (await request.json()) as Record<string, unknown>;
  } catch {
    payload = null;
  }

  if (!payload) {
    return NextResponse.json({ success: false, error: "Invalid payload." }, { status: 400 });
  }

  const name = normalizeText(payload.name);
  const email = normalizeEmail(payload.email);
  const company = normalizeText(payload.company);
  const phone = normalizeText(payload.phone);
  const message = normalizeText(payload.message);
  const formType = normalizeText(payload.formType).toLowerCase();

  if (!name || !isValidEmail(email) || !message) {
    return NextResponse.json(
      { success: false, error: "Name, valid email, and message are required." },
      { status: 400 }
    );
  }

  if (!subjectByFormType[formType]) {
    return NextResponse.json({ success: false, error: "Invalid form type." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ success: false, error: "Server misconfiguration." }, { status: 500 });
  }

  try {
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Vet Gang <noreply@vetgang.com>",
        to: ["info@vetgang.com"],
        subject: subjectByFormType[formType],
        reply_to: email,
        text: [
          `Form Type: ${formType}`,
          `Name: ${name}`,
          `Email: ${email}`,
          `Company: ${company || "N/A"}`,
          `Phone: ${phone || "N/A"}`,
          "",
          "Message:",
          message,
        ].join("\n"),
      }),
    });

    if (!resendResponse.ok) {
      console.error("Resend API error", await resendResponse.text());
      return NextResponse.json({ success: false, error: "Unable to send submission." }, { status: 502 });
    }
  } catch (error) {
    console.error("Failed to send form submission email", error);
    return NextResponse.json({ success: false, error: "Unable to send submission." }, { status: 500 });
  }

  return NextResponse.json({
    success: true,
    message: "Submission received. The Vet Gang team will contact you soon.",
  });
}
