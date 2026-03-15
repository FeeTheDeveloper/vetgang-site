import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

const links = [
  { label: "About", href: "/about" },
  { label: "Network", href: "/network" },
  { label: "Join", href: "/join" },
  { label: "Partners", href: "/partners" },
  { label: "Press Kit", href: "/press/kit" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-950/85">
      <Container>
        <div className="flex flex-col gap-8 py-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <Link href="/" className="inline-flex items-center gap-3" aria-label="VET GANG home">
              <Image src="/logo_main.png" alt="Vet Gang logo" width={38} height={38} className="h-9 w-9 rounded-full border border-white/20" />
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-army-khaki">VET GANG</span>
            </Link>
            <p className="mt-4 text-sm text-white/70">
              Veteran-owned national movement and verified business network built for disciplined execution, trusted
              operators, and mission-aligned growth.
            </p>
            <p className="mt-4 text-[0.68rem] font-medium uppercase tracking-[0.2em] text-white/45">
              Discipline • Loyalty • Service • Execution
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-5 gap-y-3" aria-label="Footer">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65 transition hover:text-army-khaki">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
