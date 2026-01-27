import Link from "next/link";

export const navItems = [
  { label: "About", href: "/about" },
  { label: "Network", href: "/network" },
  { label: "Partners", href: "/partners" },
  { label: "Press", href: "/press" },
  { label: "Join", href: "/join" },
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
          className="text-sm font-medium text-white/80 transition hover:text-white"
          onClick={onNavigate}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
