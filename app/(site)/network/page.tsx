import Link from "next/link";
import Header from "@/components/site/Header";
import NetworkMap from "@/components/sections/NetworkMap";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const compositionCards = [
  {
    title: "Veteran-Owned Businesses",
    description: "Verified founders and operators delivering disciplined execution across industries.",
  },
  {
    title: "Service Providers",
    description: "Operational support across logistics, legal, finance, and mission-critical services.",
  },
  {
    title: "Strategic Partners",
    description: "Enterprise, government, and institutional allies aligned to scale veteran-led impact.",
  },
  {
    title: "Capital & Resources",
    description: "Access to funding, procurement pathways, and infrastructure that accelerates growth.",
  },
];

const multiplierItems = [
  {
    title: "Collective Leverage",
    description: "Unified representation strengthens negotiating power and national credibility.",
  },
  {
    title: "Shared Trust",
    description: "Verification and accountability reinforce confidence between members and partners.",
  },
  {
    title: "Accelerated Opportunity",
    description: "Connections move faster when the network is centralized and mission-aligned.",
  },
  {
    title: "Reduced Friction",
    description: "Streamlined access removes barriers and speeds collaboration across regions.",
  },
];

export default function NetworkPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col pt-24 lg:pt-28">
        <section className="py-section">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="space-y-6">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Network Overview</p>
                <h1 className="text-display-lg font-semibold text-white sm:text-display-xl">The Vet Gang Network</h1>
                <p className="text-headline-md font-medium text-white/90">
                  A national force multiplier for veteran-owned businesses.
                </p>
                <p className="text-body-md text-slate-200">
                  Vet Gang centralizes reach, validation, and collaboration so members can move faster without exposing
                  sensitive business information. The network is mapped by verified signals, not public listings.
                </p>
              </div>
              <NetworkMap />
            </div>
          </Container>
        </section>

        <section className="py-section pt-0">
          <Container>
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Network composition</p>
                <h2 className="text-headline-xl font-semibold text-white">Interconnected by design.</h2>
              </div>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {compositionCards.map((card) => (
                <div key={card.title} className="rounded-card border border-white/10 bg-ink-900/70 p-6 shadow-card">
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  <p className="mt-3 text-body-sm text-slate-200">{card.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-section pt-0">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
              <div className="space-y-5">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Force multiplier</p>
                <h2 className="text-headline-xl font-semibold text-white">Why Centralization Matters</h2>
                <p className="text-body-md text-slate-200">
                  Centralized coordination creates a disciplined network that scales trust, execution, and opportunity.
                  Members retain exclusivity while benefiting from national visibility and operational alignment.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {multiplierItems.map((item) => (
                  <div key={item.title} className="rounded-card border border-white/10 bg-ink-900/60 p-5">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">{item.title}</h3>
                    <p className="mt-2 text-body-sm text-slate-200">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-section pt-0">
          <Container>
            <div className="rounded-card border border-white/10 bg-ink-900/70 p-8 shadow-card sm:p-12">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Network CTA</p>
                  <h2 className="text-headline-xl font-semibold text-white">Activate the Network</h2>
                  <p className="text-body-md text-slate-200">
                    Join a vetted force multiplier built to expand reach, trust, and execution nationwide.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button as={Link} href="/join" aria-label="Join Vet Gang">
                    Join Vet Gang
                  </Button>
                  <Button as={Link} href="/partners" variant="secondary" aria-label="Partner with Vet Gang">
                    Partner with Vet Gang
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
