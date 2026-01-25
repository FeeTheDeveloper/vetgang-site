import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/forms/ContactForm";
import JsonLd from "@/components/seo/JsonLd";
import { getOrganizationSchema, getWebSiteSchema } from "@/components/seo/schema";
import { ogImageForTitle, siteName } from "@/lib/seo";

const description = "Connect with Vet Gang for partnerships, media, or onboarding support.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  openGraph: {
    title: `Contact ${siteName}`,
    description,
    images: [{ url: ogImageForTitle("Contact") }],
  },
  twitter: {
    title: `Contact ${siteName}`,
    description,
    images: [ogImageForTitle("Contact")],
  },
};

const contactFocus = [
  {
    title: "Partnerships",
    description: "Enterprise partners, procurement teams, and corporate initiatives.",
  },
  {
    title: "Media & Press",
    description: "Editorial inquiries, interviews, and brand story requests.",
  },
  {
    title: "Onboarding Support",
    description: "Verification status checks and member onboarding guidance.",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={getOrganizationSchema()} />
      <JsonLd data={getWebSiteSchema()} />
      <main className="flex-1">
      <section className="py-section">
        <Container>
          <div className="max-w-2xl space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Contact</p>
            <h1 className="text-display-lg font-semibold text-white sm:text-display-xl">Connect with Vet Gang</h1>
            <p className="text-headline-md font-medium text-white/90">
              Direct access for partnerships, media, and onboarding support.
            </p>
            <p className="text-body-md text-slate-200">
              Our team reviews all inquiries and routes them to the right leadership point of contact. Expect a
              professional response once your request is reviewed.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-section pt-0">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {contactFocus.map((item) => (
              <div key={item.title} className="rounded-card border border-white/10 bg-ink-900/70 p-6 shadow-card">
                <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                <p className="mt-3 text-body-sm text-slate-200">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-section pt-0">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">Inquiry Form</p>
              <h2 className="text-headline-xl font-semibold text-white">Tell us what you need.</h2>
              <p className="text-body-md text-slate-200">
                Share your partnership goals, media requests, or onboarding questions. We will confirm the next steps
                after internal review.
              </p>
            </div>
            <div className="rounded-card border border-white/10 bg-ink-900/60 p-6 shadow-card sm:p-8">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
      </main>
    </>
  );
}
