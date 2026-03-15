import Container from "@/components/ui/Container";

const values = [
  "Disciplined leadership and operational standards",
  "Verified veteran-owned business credibility",
  "Centralized access to aligned opportunities",
  "Mission-first execution with measurable outcomes",
];

export default function Mission() {
  return (
    <section className="py-section" aria-label="Mission">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-army-khaki">Mission</p>
            <h2 className="text-headline-xl font-semibold text-white">A verified ecosystem built for national impact.</h2>
            <p className="text-body-md text-white/80">
              Vet Gang is structured as a force multiplier for veteran-led growth. We verify the network, align the
              right operators, and create trusted pathways for procurement, collaboration, and long-term execution.
            </p>
          </div>
          <div className="grid gap-4">
            {values.map((value) => (
              <div key={value} className="rounded-card border border-white/10 bg-ink-900/70 p-5">
                <p className="text-sm font-medium text-white/90">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
