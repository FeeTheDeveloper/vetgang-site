import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const trustItems = ["Verified Veteran-Owned", "National Operator Network", "Centralized Opportunity Access"];

export default function Hero() {
  return (
    <section aria-label="VET GANG hero" className="py-section-lg">
      <Container>
        <div className="relative overflow-hidden rounded-card border border-white/10 bg-gradient-to-br from-ink-900 via-ink-900 to-black p-8 shadow-card sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(128,0,32,0.3),transparent_55%)]" />
          <div className="pointer-events-none absolute -left-24 top-1/3 h-56 w-56 rounded-full bg-army-olive/20 blur-3xl" />
          <div className="relative max-w-3xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.42em] text-army-khaki">Veteran-Owned National Movement</p>
            <h1 className="text-display-xl font-semibold tracking-tight text-white sm:text-display-2xl">
              The flagship network for disciplined veteran-led execution.
            </h1>
            <p className="max-w-2xl text-body-lg text-white/85">
              Vet Gang connects verified veteran-owned businesses, trusted operators, and mission-aligned partners in one
              elite ecosystem designed to reduce friction and accelerate outcomes.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button as={Link} href="/join">Apply for Membership</Button>
              <Button as={Link} href="/partners" variant="secondary">Partner with Vet Gang</Button>
              <Button as={Link} href="/network" variant="ghost">Explore the Network</Button>
            </div>
            <ul className="grid gap-3 pt-4 sm:grid-cols-3">
              {trustItems.map((item) => (
                <li key={item} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/80">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
