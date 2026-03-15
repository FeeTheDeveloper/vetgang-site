"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();
  const base = orientation === "row" ? "flex items-center gap-6" : "flex flex-col items-start gap-4";

  return (
    <nav className={[base, className].filter(Boolean).join(" ")} aria-label="Primary">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={[
              "relative text-xs font-semibold uppercase tracking-[0.2em] transition",
              isActive ? "text-army-khaki" : "text-white/75 hover:text-army-khaki",
            ].join(" ")}
            onClick={onNavigate}
            aria-current={isActive ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
