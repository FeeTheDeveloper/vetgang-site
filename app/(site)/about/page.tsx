import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { ogImageForTitle, siteName } from "@/lib/seo";

const description = "Vet Gang is a veteran-owned national business network engineered for trust, execution, and mission-aligned growth.";

export const metadata: Metadata = {
  title: "About",
  description,
  openGraph: { title: `About | ${siteName}`, description, images: [{ url: ogImageForTitle("About") }] },
  twitter: { title: `About | ${siteName}`, description, images: [ogImageForTitle("About")] },
};

const pillars = [
  "Verified veteran-owned credibility",
  "Disciplined standards and accountability",
  "National network coordination",
  "Mission-aligned business growth",
];

export default function AboutPage() {
  return (
    <section className="py-section">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-army-khaki">About Vet Gang</p>
            <h1 className="text-display-lg font-semibold text-white sm:text-display-xl">
              Veteran-led infrastructure for high-trust growth.
            </h1>
            <p className="text-body-lg text-white/85">
              Vet Gang is a veteran-owned national movement and business network built for organizations that value
              trust, speed, and disciplined execution. We centralize access between verified operators and partners who
              need reliable performance.
            </p>
            <p className="text-body-md text-white/75">
              This is not a passive directory. It is an active ecosystem for collaboration, procurement readiness,
              strategic introductions, and mission-aligned growth.
            </p>
          </div>
          <div className="rounded-card border border-white/10 bg-ink-900/70 p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-army-khaki">Core pillars</p>
            <ul className="mt-6 space-y-4">
              {pillars.map((pillar) => (
                <li key={pillar} className="rounded-2xl border border-white/10 bg-ink-800/70 px-4 py-3 text-sm text-white/85">
                  {pillar}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
