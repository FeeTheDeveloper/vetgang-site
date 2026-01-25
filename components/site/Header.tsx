"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Nav from "@/components/site/Nav";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-ink-950/70 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link href="/" className="flex items-center gap-3 text-white" aria-label="VET GANG home">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5">
              <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" aria-hidden="true">
                <path
                  d="M12 3l7 4v7l-7 4-7-4V7l7-4z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path d="M12 7.5l4 2.3v4.4l-4 2.3-4-2.3V9.8l4-2.3z" fill="currentColor" />
              </svg>
            </span>
            <span className="text-sm font-semibold tracking-[0.3em] text-white sm:text-base">
              VET GANG
            </span>
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
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 p-2 text-white/90 transition hover:text-white lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
              {isOpen ? (
                <path
                  d="M6 6l12 12M18 6l-12 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {isOpen ? (
        <div className="border-t border-white/10 bg-ink-950/90 lg:hidden">
          <Container>
            <div className="flex flex-col gap-6 py-6">
              <Nav orientation="column" onNavigate={() => setIsOpen(false)} />
              <div className="flex flex-col gap-3">
                <Button as={Link} href="/join" aria-label="Join VET GANG mobile" className="w-full">
                  Join
                </Button>
                <Button
                  as={Link}
                  href="/partners"
                  variant="secondary"
                  aria-label="Partner with VET GANG mobile"
                  className="w-full"
                >
                  Partner
                </Button>
              </div>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
