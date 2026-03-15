import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

const steps = [
  {
    title: "Apply with intent",
    description: "Share your mission, role, and the outcomes you're built to deliver.",
  },
  {
    title: "Verify credentials",
    description: "We confirm veteran status and experience to protect network integrity.",
  },
  {
    title: "Enter the ecosystem",
    description: "Gain access to trusted members, vetted partners, and high-signal opportunities.",
  },
];

export default function Verification() {
  return (
    <section aria-label="Verification" className="py-section">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Verification</p>
            <h2 className="brand-underline brand-underline-subtle pb-2 text-headline-xl font-semibold text-white">Trust is earned, not assumed.</h2>
            <p className="max-w-2xl text-body-md text-slate-200">
              Every member and partner passes a clear verification pipeline. We keep the standard high so collaboration
              stays decisive, respectful, and mission-aligned.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button as={Link} href="/join" aria-label="Apply to VET GANG">
                Apply
              </Button>
              <Button as={Link} href="/contact" variant="secondary" aria-label="Contact VET GANG">
                Contact
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex gap-4 rounded-card border border-white/10 bg-ink-900/70 p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/5 text-sm font-semibold text-white">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-body-sm text-slate-200">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
