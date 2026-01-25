import Header from "@/components/site/Header";
import Hero from "@/components/sections/Hero";
import WhatIsVetGang from "@/components/sections/WhatIsVetGang";
import Verification from "@/components/sections/Verification";
import JsonLd from "@/components/seo/JsonLd";
import { getOrganizationSchema, getWebSiteSchema } from "@/components/seo/schema";

export default function HomePage() {
  return (
    <>
      <JsonLd data={getOrganizationSchema()} />
      <JsonLd data={getWebSiteSchema()} />
      <Header />
      <main className="flex flex-1 flex-col pt-24 lg:pt-28">
        <Hero />
        <WhatIsVetGang />
        <Verification />
      </main>
    </>
  );
}
