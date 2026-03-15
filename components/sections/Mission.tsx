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
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-army-khaki">Who We Are</p>
            <h2 className="text-headline-xl font-semibold text-white">A serious ecosystem, not a social club.</h2>
            <p className="text-body-md text-white/80">
              Vet Gang was built to unify veteran operators, owners, and partners into a trusted economic network. We
              elevate those who execute, protect network integrity through verification, and create mission-aligned
              pathways for national growth.
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
