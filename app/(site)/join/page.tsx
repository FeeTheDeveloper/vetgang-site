import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import VerificationSteps from "@/components/sections/VerificationSteps";
import JoinForm from "@/components/forms/JoinForm";
import { ogImageForTitle, siteName } from "@/lib/seo";

const description = "Apply to join Vet Gang’s verified veteran-owned business network and partner ecosystem.";

export const metadata: Metadata = {
  title: "Join",
  description,
  openGraph: {
    title: `Join ${siteName}`,
    description,
    images: [{ url: ogImageForTitle("Join") }],
  },
  twitter: {
    title: `Join ${siteName}`,
    description,
    images: [ogImageForTitle("Join")],
  },
};

const pathOptions = [
  {
    title: "Veteran-Owned Business",
    description: "For veteran-led companies with verified ownership and active leadership.",
    cta: "Apply as Veteran-Owned",
  },
  {
    title: "Partner / Supporter",
    description: "Aligned organizations, capital partners, and allies supporting veteran commerce.",
    cta: "Apply as Partner",
  },
];

const trustItems = [
  {
    title: "Verified Members Only",
    description: "Every entry point is screened and validated.",
  },
  {
    title: "National Network",
    description: "Coast-to-coast relationships built on trust.",
  },
  {
    title: "Mission-Driven Commerce",
    description: "Business aligned with service and integrity.",
  },
];

export default function JoinPage() {
  return (
    <main className="flex-1">
      <section className="py-section">
        <Container>
          <div className="max-w-2xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Join Vet Gang</p>
            <h1 className="text-display-lg font-semibold text-white sm:text-display-xl">Join Vet Gang</h1>
            <p className="text-headline-md font-medium text-white/90">
              A verified network for veteran-owned businesses.
            </p>
            <p className="text-body-md text-slate-200">
              Access is earned. We vet every member to protect the mission, elevate credibility, and build a disciplined
              network of operators who move with intention.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-section pt-0">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {pathOptions.map((option) => (
              <div key={option.title} className="rounded-card border border-white/10 bg-ink-900/70 p-6 shadow-card">
                <h2 className="text-lg font-semibold text-white">{option.title}</h2>
                <p className="mt-3 text-body-sm text-slate-200">{option.description}</p>
                <Button className="mt-6" as={Link} href="#application" aria-label={option.cta}>
                  {option.cta}
                </Button>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <p className="text-sm text-slate-200">Institutional partner or government buyer?</p>
            <Button as={Link} href="/contact" variant="secondary" aria-label="Contact VET GANG">
              Contact the team
            </Button>
          </div>
        </Container>
      </section>

      <VerificationSteps />

      <section id="application" className="py-section">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Application</p>
              <h2 className="text-headline-xl font-semibold text-white">Submit with clarity and intent.</h2>
              <p className="text-body-md text-slate-200">
                Tell us who you are, what you lead, and how you want to contribute to the network. Every application is
                reviewed by our verification team.
              </p>
            </div>
            <div className="rounded-card border border-white/10 bg-ink-900/60 p-6 shadow-card sm:p-8">
              <JoinForm />
            </div>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {trustItems.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-card border border-white/10 bg-ink-900/60 p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                    <path
                      d="M12 3l7 4v5c0 4.1-2.9 7.8-7 9-4.1-1.2-7-4.9-7-9V7l7-4z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path d="M9.5 12.5l2 2 3.5-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                </span>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">{item.title}</h3>
                  <p className="mt-2 text-body-sm text-slate-200">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
