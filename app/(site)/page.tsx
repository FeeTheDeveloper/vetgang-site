import Hero from "@/components/sections/Hero";
import Mission from "@/components/sections/Mission";
import NetworkHighlights from "@/components/sections/NetworkHighlights";
import CTASection from "@/components/sections/CTASection";
import JsonLd from "@/components/seo/JsonLd";
import { getOrganizationSchema, getWebSiteSchema } from "@/components/seo/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd data={getOrganizationSchema()} />
      <JsonLd data={getWebSiteSchema()} />
      <Hero />
      <Mission />
      <NetworkHighlights />
      <CTASection
        eyebrow="Membership"
        title="Join a verified network that executes."
        description="Membership is built for veteran-owned businesses and operators committed to disciplined standards, trusted collaboration, and mission-aligned growth."
        primary={{ label: "Join Vet Gang", href: "/join" }}
        secondary={{ label: "Learn About Vet Gang", href: "/about" }}
      />
      <CTASection
        eyebrow="Partnerships"
        title="Build with trusted veteran operators at scale."
        description="Vet Gang gives organizations centralized access to verified businesses and proven leadership teams ready for serious execution."
        primary={{ label: "Partner with Vet Gang", href: "/partners" }}
        secondary={{ label: "Contact Team", href: "/contact" }}
      />
    </>
  );
}
