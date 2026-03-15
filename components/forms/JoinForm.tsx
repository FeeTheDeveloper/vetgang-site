"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const inputStyles =
  "mt-2 w-full rounded-2xl border border-white/10 bg-ink-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const successMessage = "Submission received. The Vet Gang team will contact you soon.";

export default function JoinForm() {
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
    const company = String(formData.get("business") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const role = String(formData.get("role") ?? "");
    const message = String(formData.get("description") ?? "");

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
          message: `Role: ${role}\n\n${message}`,
          formType: "join",
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error || "Unable to submit application.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Unable to submit application.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-label="Join Vet Gang application">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="join-name" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
            Name
          </label>
          <input
            id="join-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            className={inputStyles}
            placeholder="Full name"
          />
        </div>
        <div>
          <label htmlFor="join-email" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
            Email
          </label>
          <input
            id="join-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={inputStyles}
            placeholder="you@company.com"
          />
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="join-business" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
            Business Name
          </label>
          <input
            id="join-business"
            name="business"
            type="text"
            required
            className={inputStyles}
            placeholder="Company or organization"
          />
        </div>
        <div>
          <label htmlFor="join-phone" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
            Phone (optional)
          </label>
          <input
            id="join-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputStyles}
            placeholder="(555) 123-4567"
          />
        </div>
      </div>
      <div>
        <label htmlFor="join-role" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
          Role
        </label>
        <select id="join-role" name="role" required className={inputStyles} defaultValue="">
          <option value="" disabled>
            Select a role
          </option>
          <option value="veteran-owned">Veteran-Owned</option>
          <option value="partner">Partner</option>
        </select>
      </div>
      <div>
        <label htmlFor="join-description" className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">
          Short description
        </label>
        <textarea
          id="join-description"
          name="description"
          rows={4}
          required
          className={inputStyles}
          placeholder="Share your mission, focus, and what you want to build inside the network."
        />
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Submitting..." : "Submit application"}
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
