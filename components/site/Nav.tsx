import Link from "next/link";

export const navItems = [
  { label: "About", href: "/about" },
  { label: "Network", href: "/network" },
  { label: "Join", href: "/join" },
  { label: "Partners", href: "/partners" },
  { label: "Press Kit", href: "/press/kit" },
  { label: "Contact", href: "/contact" },
];

type NavProps = {
  className?: string;
  orientation?: "row" | "column";
  onNavigate?: () => void;
};

export default function Nav({ className, orientation = "row", onNavigate }: NavProps) {
  const base = orientation === "row" ? "flex items-center gap-6" : "flex flex-col items-start gap-4";

  return (
    <nav className={[base, className].filter(Boolean).join(" ")} aria-label="Primary">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75 transition hover:text-army-khaki"
          onClick={onNavigate}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
