import Header from "@/components/site/Header";
import Hero from "@/components/sections/Hero";
import WhatIsVetGang from "@/components/sections/WhatIsVetGang";
import Verification from "@/components/sections/Verification";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex flex-1 flex-col pt-24 lg:pt-28">
        <Hero />
        <WhatIsVetGang />
        <Verification />
      </main>
    </>
  );
}
