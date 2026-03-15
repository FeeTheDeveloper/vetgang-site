import Container from "@/components/ui/Container";

const items = [
  {
    title: "Verification as a standard",
    description: "Every member and partner is reviewed so trust is earned before access is granted.",
  },
  {
    title: "Opportunity channel",
    description: "Centralized routing for partnerships, procurement, and collaboration across regions.",
  },
  {
    title: "Credibility multiplier",
    description: "Veteran-owned businesses gain network-level legitimacy through disciplined alignment.",
  },
  {
    title: "Execution network",
    description: "Operators, service providers, and partners aligned to move quickly without friction.",
  },
];

export default function NetworkHighlights() {
  return (
    <section className="py-section pt-0" aria-label="Network highlights">
      <Container>
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-army-khaki">Network Value</p>
          <h2 className="text-headline-xl font-semibold text-white">Why Vet Gang matters at national scale.</h2>
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
