import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/forms/ContactForm";
import JsonLd from "@/components/seo/JsonLd";
import { getOrganizationSchema, getWebSiteSchema } from "@/components/seo/schema";
import { ogImageForTitle, siteName } from "@/lib/seo";

const description = "Connect with Vet Gang for partnership, media, and network support inquiries.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  openGraph: { title: `Contact | ${siteName}`, description, images: [{ url: ogImageForTitle("Contact") }] },
  twitter: { title: `Contact | ${siteName}`, description, images: [ogImageForTitle("Contact")] },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={getOrganizationSchema()} />
      <JsonLd data={getWebSiteSchema()} />
      <section className="py-section">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-army-khaki">Contact</p>
              <h1 className="text-display-lg font-semibold text-white sm:text-display-xl">Direct line to the Vet Gang team.</h1>
              <p className="text-body-md text-white/80">
                Send partnership inquiries, media requests, or operational questions. We route each message to the
                correct leadership channel and respond with clear next steps.
              </p>
            </div>
            <div className="rounded-card border border-white/10 bg-ink-900/60 p-6 shadow-card sm:p-8">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
