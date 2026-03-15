"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Nav from "@/components/site/Nav";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-ink-950/85 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link href="/" className="group flex items-center gap-3 text-white" aria-label="VET GANG home">
            <Image src="/logo_main.png" alt="Vet Gang logo" width={44} height={44} className="h-11 w-11 rounded-full border border-white/20" priority />
            <div className="leading-tight">
              <span className="brand-underline brand-underline-subtle brand-underline-hover brand-underline-faint block pb-2 text-sm font-semibold tracking-[0.32em] text-army-khaki sm:text-base">
                VET GANG
              </span>
              <span className="hidden text-[0.62rem] font-medium uppercase tracking-[0.26em] text-white/65 sm:block">Verified veteran-owned network</span>
            </div>
          </Link>

          <div className="hidden items-center gap-8 lg:flex">
            <Nav />
            <div className="flex items-center gap-3">
              <Button as={Link} href="/join" aria-label="Join VET GANG">
                Join
              </Button>
              <Button as={Link} href="/partners" variant="secondary" aria-label="Partner with VET GANG">
                Partner
              </Button>
            </div>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-2 text-white/90 transition hover:border-army-khaki/50 hover:text-army-khaki lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              {isOpen ? (
                <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {isOpen ? (
        <div className="border-t border-white/10 bg-ink-900/95 lg:hidden">
          <Container>
            <div className="flex flex-col gap-6 py-6">
              <Nav orientation="column" onNavigate={() => setIsOpen(false)} />
              <div className="grid gap-3">
                <Button as={Link} href="/join" aria-label="Join VET GANG mobile" className="w-full" onClick={() => setIsOpen(false)}>
                  Join Vet Gang
                </Button>
                <Button
                  as={Link}
                  href="/partners"
                  variant="secondary"
                  aria-label="Partner with VET GANG mobile"
                  className="w-full"
                  onClick={() => setIsOpen(false)}
                >
                  Become a Partner
                </Button>
              </div>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
