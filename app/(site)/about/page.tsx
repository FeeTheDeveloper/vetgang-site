import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import { ogImageForTitle, siteName } from "@/lib/seo";

const description = "Learn about Vet Gang’s mission to amplify veteran-owned businesses nationwide.";

export const metadata: Metadata = {
  title: "About",
  description,
  openGraph: {
    title: `About ${siteName}`,
    description,
    images: [{ url: ogImageForTitle("About") }],
  },
  twitter: {
    title: `About ${siteName}`,
    description,
    images: [ogImageForTitle("About")],
  },
};

export default function AboutPage() {
  return (
    <main className="flex-1 py-24">
      <Container>
        <h1 className="text-3xl font-semibold">About VET GANG</h1>
        <p className="mt-4 max-w-2xl text-sm text-slate-200">
          A veteran-owned collective built to amplify trusted operators and elite partners.
        </p>
      </Container>
    </main>
  );
}
