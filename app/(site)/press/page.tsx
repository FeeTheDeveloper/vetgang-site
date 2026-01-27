import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/site/Header";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ogImageForTitle, siteName } from "@/lib/seo";

const description = "Official press resources, facts, and media guidance for Vet Gang.";

export const metadata: Metadata = {
  title: "Press",
  description,
  openGraph: {
    title: `Press | ${siteName}`,
    description,
    images: [{ url: ogImageForTitle("Press") }],
  },
  twitter: {
    title: `Press | ${siteName}`,
    description,
    images: [ogImageForTitle("Press")],
  },
};

const quickFacts = [
  {
    title: "What it is",
    description: "A veteran-owned national movement and verified business network built for scale.",
  },
  {
    title: "Who it serves",
    description: "Veteran founders, mission-driven partners, and institutions seeking trusted operators.",
  },
  {
    title: "What verification means",
    description: "Credentialed ownership, accountable leadership, and disciplined execution standards.",
  },
  {
    title: "Partnership focus",
    description: "Enterprise, government, and nonprofit collaborations that expand veteran economic impact.",
  },
];

export default function PressPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col pt-24 lg:pt-28">
        <section className="py-section">
          <Container>
            <div className="max-w-2xl space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Press & Media</p>
              <h1 className="text-display-lg font-semibold text-white sm:text-display-xl">Press &amp; Media</h1>
              <p className="text-headline-md font-medium text-white/90">
                Official information and media resources for Vet Gang.
              </p>
              <p className="text-body-md text-slate-200">
                Vet Gang provides a centralized source of truth for media partners, ensuring consistent messaging and
                accurate context about the network.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-section pt-0">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div className="space-y-5">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Boilerplate</p>
                <h2 className="text-headline-xl font-semibold text-white">About Vet Gang</h2>
              </div>
              <p className="text-body-md text-slate-200">
                Vet Gang is a veteran-owned national movement and verified business network built to act as a force
                multiplier. We connect disciplined operators with trusted partners, accelerating opportunity through
                verification, collaboration, and mission-aligned execution.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-section pt-0">
          <Container>
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Quick facts</p>
              <h2 className="text-headline-xl font-semibold text-white">The essentials at a glance.</h2>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {quickFacts.map((fact) => (
                <div key={fact.title} className="rounded-card border border-white/10 bg-ink-900/70 p-6 shadow-card">
                  <h3 className="text-lg font-semibold text-white">{fact.title}</h3>
                  <p className="mt-3 text-body-sm text-slate-200">{fact.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-section pt-0">
          <Container>
            <div className="rounded-card border border-white/10 bg-ink-900/70 p-8 shadow-card sm:p-12">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Media inquiries</p>
                  <h2 className="text-headline-xl font-semibold text-white">Request media coordination.</h2>
                  <p className="text-body-md text-slate-200">
                    Reach out for interviews, statements, or partnership commentary from the Vet Gang team.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button as={Link} href="/contact" aria-label="Contact Vet Gang media">
                    Contact Vet Gang
                  </Button>
                  <Button as={Link} href="/press/kit" variant="secondary" aria-label="View the press kit">
                    View Press Kit
                  </Button>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
