"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const inputStyles =
  "mt-2 w-full rounded-2xl border border-white/10 bg-ink-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const successMessage = "Submission received. The Vet Gang team will contact you soon.";

export default function PartnerForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("loading");
    setErrorMessage(null);

    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const company = String(formData.get("company") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const message = String(formData.get("message") ?? "");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          company,
          phone,
          message,
          formType: "partner",
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "Unable to send inquiry.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Unable to send inquiry.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-label="Vet Gang partnership inquiry">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="partner-name" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
            Name
          </label>
          <input id="partner-name" name="name" type="text" required className={inputStyles} placeholder="Full name" />
        </div>
        <div>
          <label htmlFor="partner-email" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
            Email
          </label>
          <input
            id="partner-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={inputStyles}
            placeholder="you@organization.com"
          />
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="partner-company" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
            Company
          </label>
          <input
            id="partner-company"
            name="company"
            type="text"
            required
            className={inputStyles}
            placeholder="Organization"
          />
        </div>
        <div>
          <label htmlFor="partner-phone" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
            Phone (optional)
          </label>
          <input
            id="partner-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputStyles}
            placeholder="(555) 123-4567"
          />
        </div>
      </div>
      <div>
        <label htmlFor="partner-message" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
          Message
        </label>
        <textarea
          id="partner-message"
          name="message"
          rows={4}
          required
          className={inputStyles}
          placeholder="Tell us about your partnership goals and timeline."
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Send partnership inquiry"}
        </Button>
        {status === "success" ? (
          <p role="status" className="text-sm text-slate-200">
            {successMessage}
          </p>
        ) : null}
        {status === "error" && errorMessage ? (
          <p role="status" className="text-sm text-red-200">
            {errorMessage}
          </p>
        ) : null}
      </div>
    </form>
  );
}
