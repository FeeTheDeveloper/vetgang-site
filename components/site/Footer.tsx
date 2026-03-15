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
    <footer className="border-t border-white/10 bg-ink-950/80">
      <Container>
        <div className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-army-khaki">VET GANG</p>
            <p className="mt-3 max-w-xl text-sm text-white/70">
              Veteran-owned national movement and verified business network built for disciplined execution, trusted
              alignment, and mission-scale growth.
            </p>
          </div>
          <nav className="flex flex-wrap gap-4" aria-label="Footer">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65 hover:text-army-khaki">
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
