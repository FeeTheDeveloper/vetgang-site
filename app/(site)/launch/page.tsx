import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { ogImageForTitle, siteName } from "@/lib/seo";

const description = "Internal launch announcement copy for Vet Gang.";

export const metadata: Metadata = {
  title: "Launch Announcement",
  description,
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  openGraph: {
    title: `Launch Announcement | ${siteName}`,
    description,
    images: [{ url: ogImageForTitle("Launch Announcement") }],
  },
  twitter: {
    title: `Launch Announcement | ${siteName}`,
    description,
    images: [ogImageForTitle("Launch Announcement")],
  },
};

export default function LaunchPage() {
  return (
    <>
      <main className="flex flex-1 flex-col">
        <section className="py-section">
          <Container>
            <div className="max-w-3xl space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Launch brief</p>
              <h1 className="text-display-lg font-semibold text-white sm:text-display-xl">Official launch statement</h1>
              <p className="text-body-md text-slate-200">
                Today, Vet Gang opens its national platform to verified veteran founders, operators, and mission-aligned
                partners. Built by veterans and designed for disciplined execution, Vet Gang is a unified ecosystem that
                accelerates opportunity through credentialed trust, shared operating standards, and a commitment to
                outcomes. Our network exists to connect high-integrity businesses with the capital, partnerships, and
                operational muscle they need to scale responsibly. This launch marks the beginning of a long-term
                initiative to strengthen veteran-led economic impact, deepen collaboration across sectors, and ensure
                that verified leadership sets the pace for the future of work.
              </p>
              <div className="space-y-3 rounded-card border border-white/10 bg-ink-900/70 p-6 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Short announcement</p>
                <p className="text-body-md text-slate-200">
                  Vet Gang is live. We are now accepting applications from veteran founders, operators, and partners who
                  are ready to build alongside a verified national network focused on execution, accountability, and
                  shared mission outcomes.
                </p>
              </div>
              <div className="space-y-3 rounded-card border border-white/10 bg-ink-900/70 p-6 shadow-card">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">One-liner</p>
                <p className="text-headline-md font-semibold text-white">
                  Vet Gang launches to unite verified veteran leaders and mission-aligned partners in one execution-first
                  network.
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
