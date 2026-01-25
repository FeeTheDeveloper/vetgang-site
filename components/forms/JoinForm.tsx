"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const inputStyles =
  "mt-2 w-full rounded-2xl border border-white/10 bg-ink-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export default function JoinForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
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
        <Button type="submit">Submit application</Button>
        {submitted ? (
          <p role="status" className="text-sm text-slate-200">
            Application received. Our team will follow up after verification review.
          </p>
        ) : null}
      </div>
    </form>
  );
}
