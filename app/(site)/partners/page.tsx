import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ogImageForTitle, siteName } from "@/lib/seo";

const description = "Partner with Vet Gang for trusted access to verified veteran-owned businesses and disciplined execution teams.";

export const metadata: Metadata = {
  title: "Partners",
  description,
  openGraph: { title: `Partners | ${siteName}`, description, images: [{ url: ogImageForTitle("Partners") }] },
  twitter: { title: `Partners | ${siteName}`, description, images: [ogImageForTitle("Partners")] },
};

const partnerValue = [
  "Verified veteran-owned network access",
  "Centralized introductions and relationship orchestration",
  "Disciplined operators prepared for enterprise delivery",
  "Mission-aligned growth strategies and long-term trust",
];

export default function PartnersPage() {
  return (
    <>
      <section className="py-section">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-army-khaki">Partners</p>
              <h1 className="text-display-lg font-semibold text-white sm:text-display-xl">
                Strategic partnership access to trusted veteran operators.
              </h1>
              <p className="text-body-lg text-white/85">
                Vet Gang supports enterprises, institutions, and agencies that need credible veteran-led teams and
                disciplined delivery pathways.
              </p>
            </div>
            <div className="grid gap-4">
              {partnerValue.map((value) => (
                <div key={value} className="rounded-card border border-white/10 bg-ink-900/70 p-5 text-sm text-white/85">
                  {value}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-section pt-0">
        <Container>
          <div className="rounded-card border border-army-khaki/20 bg-gradient-to-r from-ink-900 to-ink-800 p-8 sm:p-12">
            <h2 className="text-headline-xl font-semibold text-white">Start a strategic partnership conversation.</h2>
            <p className="mt-4 max-w-3xl text-body-md text-white/75">
              We align the right veteran-owned operators, capabilities, and relationship pathways around your
              objective—with higher trust and less wasted motion.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button as={Link} href="/contact">Contact Vet Gang</Button>
              <Button as={Link} href="/network" variant="secondary">Review Network</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
