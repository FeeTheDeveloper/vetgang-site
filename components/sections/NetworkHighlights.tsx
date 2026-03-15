import Container from "@/components/ui/Container";

const items = [
  {
    title: "Verification as baseline",
    description: "Every member and partner is reviewed, so trust is established before opportunities are routed.",
  },
  {
    title: "Centralized access",
    description: "One disciplined channel for partnerships, procurement, and mission-aligned business growth.",
  },
  {
    title: "Trusted operator density",
    description: "A vetted network of veteran-owned leaders built to collaborate quickly and execute reliably.",
  },
  {
    title: "Force multiplier outcomes",
    description: "Network alignment increases velocity, credibility, and scale for serious organizations.",
  },
];

export default function NetworkHighlights() {
  return (
    <section className="py-section pt-0" aria-label="Network highlights">
      <Container>
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-army-khaki">Network Credibility</p>
          <h2 className="brand-underline brand-underline-subtle pb-2 text-headline-xl font-semibold text-white">Engineered for trust. Structured for growth.</h2>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {items.map((item) => (
            <article key={item.title} className="rounded-card border border-white/10 bg-ink-900/65 p-6 shadow-card">
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-body-sm text-white/75">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
