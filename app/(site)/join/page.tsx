import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import VerificationSteps from "@/components/sections/VerificationSteps";
import JoinForm from "@/components/forms/JoinForm";
import { ogImageForTitle, siteName } from "@/lib/seo";

const description = "Apply to join Vet Gang's selective veteran-owned network and mission-aligned business ecosystem.";

export const metadata: Metadata = {
  title: "Join",
  description,
  openGraph: { title: `Join | ${siteName}`, description, images: [{ url: ogImageForTitle("Join") }] },
  twitter: { title: `Join | ${siteName}`, description, images: [ogImageForTitle("Join")] },
};

export default function JoinPage() {
  return (
    <>
      <section className="py-section">
        <Container>
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-army-khaki">Join Vet Gang</p>
            <h1 className="text-display-lg font-semibold text-white sm:text-display-xl">Selective membership for serious veteran operators.</h1>
            <p className="text-body-lg text-white/85">
              Membership is mission-aligned and verification-driven. We prioritize veteran-owned businesses and leaders
              committed to credibility, disciplined execution, and national collaboration.
            </p>
          </div>
        </Container>
      </section>

      <VerificationSteps />

      <section id="application" className="py-section pt-0">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-army-khaki">Application</p>
              <h2 className="text-headline-xl font-semibold text-white">Submit your profile with intent.</h2>
              <p className="text-body-md text-white/75">
                Share your leadership role, business details, and how your organization aligns with Vet Gang standards.
                Every application is reviewed before network access is granted.
              </p>
            </div>
            <div className="rounded-card border border-white/10 bg-ink-900/60 p-6 shadow-card sm:p-8">
              <JoinForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
