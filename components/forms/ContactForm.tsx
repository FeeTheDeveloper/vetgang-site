"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const inputStyles =
  "mt-2 w-full rounded-2xl border border-white/10 bg-ink-900/70 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
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
        <Button type="submit">Send inquiry</Button>
        {submitted ? (
          <p role="status" className="text-sm text-slate-200">
            Inquiry received. Our team reviews all submissions and will respond with next steps.
          </p>
        ) : null}
      </div>
    </form>
  );
}
