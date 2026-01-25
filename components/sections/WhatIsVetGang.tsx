import Container from "@/components/ui/Container";

const cards = [
  {
    title: "Network",
    description: "A private, veteran-vetted network of founders, operators, and mission-ready leaders.",
  },
  {
    title: "Resources",
    description: "Operational playbooks, trusted partners, and hard-won intel shared to move fast.",
  },
  {
    title: "Exposure",
    description: "High-integrity introductions that align opportunity with execution discipline.",
  },
];

export default function WhatIsVetGang() {
  return (
    <section aria-label="What is VET GANG" className="py-section">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="max-w-md space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">What is VET GANG</p>
            <h2 className="text-headline-xl font-semibold text-white">
              Not a directory — a force multiplier.
            </h2>
            <p className="text-body-md text-slate-200">
              Built to connect proven veterans with high-trust opportunities, VET GANG delivers decisive collaboration,
              shared resources, and a verified environment that protects the mission.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {cards.map((card) => (
              <div
                key={card.title}
                className="rounded-card border border-white/10 bg-ink-900/70 p-6 shadow-card"
              >
                <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-body-sm text-slate-200">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
