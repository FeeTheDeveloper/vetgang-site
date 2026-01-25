import Container from "@/components/ui/Container";

const steps = [
  {
    title: "Apply",
    description: "Submit your profile and business details for an initial eligibility screen.",
  },
  {
    title: "Verification review",
    description: "We validate veteran ownership, leadership roles, and operating history.",
  },
  {
    title: "Approval",
    description: "Qualified applicants receive a confirmation and onboarding brief.",
  },
  {
    title: "Network access",
    description: "Enter the vetted ecosystem with trusted introductions and resources.",
  },
];

export default function VerificationSteps() {
  return (
    <section aria-label="Verification steps" className="py-section">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="max-w-md space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Verification</p>
            <h2 className="text-headline-xl font-semibold text-white">
              A disciplined pipeline built for trust.
            </h2>
            <p className="text-body-md text-slate-200">
              Every applicant follows the same transparent process. We protect the standard so the network stays
              mission-aligned and execution-ready.
            </p>
          </div>
          <div className="grid gap-4">
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
