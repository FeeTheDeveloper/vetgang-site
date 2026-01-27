import type { Metadata } from "next";
import Header from "@/components/site/Header";
import Container from "@/components/ui/Container";
import DownloadCard from "@/components/press/DownloadCard";
import { ogImageForTitle, siteName } from "@/lib/seo";

const description = "Download Vet Gang logos, brand language, and approved messaging for media use.";

export const metadata: Metadata = {
  title: "Press Kit",
  description,
  openGraph: {
    title: `Press Kit | ${siteName}`,
    description,
    images: [{ url: ogImageForTitle("Press Kit") }],
  },
  twitter: {
    title: `Press Kit | ${siteName}`,
    description,
    images: [ogImageForTitle("Press Kit")],
  },
};

const downloads = [
  {
    title: "Symbol Logo",
    description: "Monochrome symbol for digital and print placements.",
    href: "/press/vetgang-symbol.svg",
  },
  {
    title: "Wordmark Logo",
    description: "Primary wordmark for headlines, lockups, and endorsements.",
    href: "/press/vetgang-wordmark.svg",
  },
  {
    title: "Brand Lockup",
    description: "Combined symbol + wordmark lockup for press coverage.",
    href: "/press/vetgang-lockup.svg",
  },
];

const brandLanguage = [
  {
    title: "One-liner",
    copy: "Vet Gang is a veteran-owned national movement and verified business network built for disciplined execution.",
  },
  {
    title: "Short paragraph",
    copy: "Vet Gang unites verified veteran-owned businesses and mission-aligned partners into a trusted national network. We serve as a force multiplier—accelerating collaboration, credibility, and opportunity through rigorous verification and centralized coordination.",
  },
  {
    title: "Extended paragraph",
    copy: "Vet Gang is a veteran-owned national movement delivering a verified business network for partners who demand trusted execution. We credential veteran leadership, align mission-ready operators, and build a centralized ecosystem that scales opportunity nationwide. The result is a disciplined force multiplier that strengthens procurement, partnerships, and veteran-led economic impact.",
  },
];

const values = ["Discipline", "Loyalty", "Service", "Execution"];

export default function PressKitPage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col pt-24 lg:pt-28">
        <section className="py-section">
          <Container>
            <div className="max-w-2xl space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Press Kit</p>
              <h1 className="text-display-lg font-semibold text-white sm:text-display-xl">Press Kit</h1>
              <p className="text-headline-md font-medium text-white/90">
                Download approved Vet Gang assets and official brand language.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-section pt-0">
          <Container>
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Downloads</p>
              <h2 className="text-headline-xl font-semibold text-white">Logo assets</h2>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {downloads.map((item) => (
                <DownloadCard key={item.title} {...item} />
              ))}
            </div>
          </Container>
        </section>

        <section className="py-section pt-0">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div className="space-y-5">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Brand language</p>
                <h2 className="text-headline-xl font-semibold text-white">Approved copy blocks</h2>
                <p className="text-body-md text-slate-200">
                  Use the following descriptions to keep coverage accurate, disciplined, and aligned with Vet Gang’s
                  positioning.
                </p>
              </div>
              <div className="grid gap-6">
                {brandLanguage.map((block) => (
                  <div key={block.title} className="rounded-card border border-white/10 bg-ink-900/70 p-6">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">{block.title}</h3>
                    <p className="mt-3 text-body-sm text-slate-200">{block.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className="py-section pt-0">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div className="space-y-5">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Mission</p>
                <h2 className="text-headline-xl font-semibold text-white">Mission &amp; values</h2>
                <p className="text-body-md text-slate-200">
                  Vet Gang’s mission is to strengthen veteran-led economic power through verification, centralized
                  access, and national-scale execution.
                </p>
              </div>
              <div className="rounded-card border border-white/10 bg-ink-900/70 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">Values</p>
                <ul className="mt-4 space-y-2 text-body-sm text-white">
                  {values.map((value) => (
                    <li key={value} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
