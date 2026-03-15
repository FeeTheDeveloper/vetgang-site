import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ogImageForTitle, siteName } from "@/lib/seo";

const description = "The Vet Gang network is a verified veteran-owned collaboration engine and opportunity channel for serious operators.";

export const metadata: Metadata = {
  title: "Network",
  description,
  openGraph: { title: `Network | ${siteName}`, description, images: [{ url: ogImageForTitle("Network") }] },
  twitter: { title: `Network | ${siteName}`, description, images: [ogImageForTitle("Network")] },
};

const cards = [
  "Verified veteran-owned business ecosystem",
  "Collaboration engine for trusted operators",
  "Opportunity channel for procurement and growth",
  "Credibility multiplier through disciplined alignment",
  "Partnership system with national reach",
  "Centralized coordination with execution standards",
];

export default function NetworkPage() {
  return (
    <>
      <section className="py-section">
        <Container>
          <div className="max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-army-khaki">Network</p>
            <h1 className="text-display-lg font-semibold text-white sm:text-display-xl">
              A verified national network built for collaboration and execution.
            </h1>
            <p className="text-body-lg text-white/85">
              Vet Gang connects veteran-owned businesses, mission-aligned partners, and trusted operators in one
              disciplined channel for growth. The network is built to reduce noise and increase qualified access.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <div key={card} className="rounded-card border border-white/10 bg-ink-900/65 p-5 text-sm text-white/85">
                {card}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-section pt-0">
        <Container>
          <div className="rounded-card border border-white/10 bg-ink-900/70 p-8 sm:p-10">
            <h2 className="text-headline-xl font-semibold text-white">Selective by design. Scalable by execution.</h2>
            <p className="mt-4 max-w-3xl text-body-md text-white/75">
              Vet Gang uses verification and standards to protect network integrity. That discipline helps serious
              organizations move faster with higher trust and clearer outcomes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button as={Link} href="/join">Join the Network</Button>
              <Button as={Link} href="/partners" variant="secondary">Explore Partnerships</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
