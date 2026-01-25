import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const partnerCards = [
  {
    title: "Corporations & Brands",
    description: "Build verified supplier pipelines and veteran-led initiatives with national reach.",
  },
  {
    title: "Government & Public Sector",
    description: "Engage a vetted ecosystem aligned with procurement, compliance, and mission delivery.",
  },
  {
    title: "Nonprofits & Institutions",
    description: "Collaborate on programs that expand opportunity and measurable community impact.",
  },
  {
    title: "Investors & Sponsors",
    description: "Connect with disciplined operators and credible deal flow across the network.",
  },
];

const valuePillars = [
  {
    title: "Verified Access",
    description: "Engage only credentialed veteran-owned businesses with validated leadership and ownership.",
  },
  {
    title: "National Reach",
    description: "Activate across markets with a centralized, multi-sector network built for scale.",
  },
  {
    title: "Mission Alignment",
    description: "Partner with organizations that share a commitment to service, integrity, and performance.",
  },
  {
    title: "Economic Impact",
    description: "Drive procurement and growth that strengthens veteran entrepreneurship nationwide.",
  },
];

const partnershipSteps = [
  {
    title: "Inquiry",
    description: "Submit your objectives and desired outcomes for review.",
  },
  {
    title: "Alignment review",
    description: "We evaluate fit, capacity, and strategic alignment with the network.",
  },
  {
    title: "Engagement model",
    description: "Define the scope, stakeholders, and partnership structure.",
  },
  {
    title: "Activation",
    description: "Launch the initiative with vetted partners and ongoing oversight.",
  },
];

export default function PartnersPage() {
  return (
    <main className="flex-1">
      <section className="py-section">
        <Container>
          <div className="max-w-2xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Partnerships</p>
            <h1 className="text-display-lg font-semibold text-white sm:text-display-xl">Partner with Vet Gang</h1>
            <p className="text-headline-md font-medium text-white/90">
              Access a verified national network of veteran-owned businesses.
            </p>
            <p className="text-body-md text-slate-200">
              Vet Gang is a centralized ecosystem built for credibility, trust, and execution. We are not a directory;
              we are a disciplined network of verified operators ready for enterprise collaboration.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-section pt-0">
        <Container>
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Who partners with Vet Gang</p>
              <h2 className="text-headline-xl font-semibold text-white">Built for institutional collaboration.</h2>
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {partnerCards.map((card) => (
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
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Partnership value pillars</p>
              <h2 className="text-headline-xl font-semibold text-white">Enterprise-grade outcomes.</h2>
              <p className="text-body-md text-slate-200">
                Vet Gang partnerships are designed for high-trust collaboration, measurable impact, and disciplined
                execution across regions and sectors.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {valuePillars.map((pillar) => (
                <div key={pillar.title} className="rounded-card border border-white/10 bg-ink-900/60 p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">{pillar.title}</h3>
                  <p className="mt-2 text-body-sm text-slate-200">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-section pt-0">
        <Container>
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">How partnerships work</p>
            <h2 className="text-headline-xl font-semibold text-white">Structured, transparent engagement.</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {partnershipSteps.map((step, index) => (
              <div key={step.title} className="rounded-card border border-white/10 bg-ink-900/70 p-6 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">Step {index + 1}</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-body-sm text-slate-200">{step.description}</p>
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
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Partner CTA</p>
                <h2 className="text-headline-xl font-semibold text-white">Let’s Build Together</h2>
                <p className="text-body-md text-slate-200">
                  Align your organization with a verified veteran-owned business network built for scale and impact.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button as={Link} href="/contact" aria-label="Contact Vet Gang">
                  Contact Vet Gang
                </Button>
                <Button as={Link} href="/about" variant="secondary" aria-label="Learn about the network">
                  Learn About the Network
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
