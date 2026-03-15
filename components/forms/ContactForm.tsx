"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const inputStyles =
  "mt-2 w-full rounded-2xl border border-white/10 bg-ink-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const successMessage = "Submission received. The Vet Gang team will contact you soon.";

export default function ContactForm() {
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
    const company = String(formData.get("organization") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const topic = String(formData.get("topic") ?? "");
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
          message: topic ? `[${topic}] ${message}` : message,
          formType: "contact",
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
    <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact Vet Gang">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={inputStyles}
            placeholder="Full name"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
            Email
          </label>
          <input
            id="contact-email"
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
          <label
            htmlFor="contact-organization"
            className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300"
          >
            Organization
          </label>
          <input
            id="contact-organization"
            name="organization"
            type="text"
            required
            className={inputStyles}
            placeholder="Company, agency, or institution"
          />
        </div>
        <div>
          <label htmlFor="contact-phone" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
            Phone (optional)
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputStyles}
            placeholder="(555) 123-4567"
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-topic" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
          Inquiry type
        </label>
        <select id="contact-topic" name="topic" required className={inputStyles} defaultValue="">
          <option value="" disabled>
            Select a topic
          </option>
          <option value="partnership">Partnership inquiry</option>
          <option value="media">Media request</option>
          <option value="onboarding">Member onboarding</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          className={inputStyles}
          placeholder="Share the partnership goals, timeline, or request details."
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Send inquiry"}
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
