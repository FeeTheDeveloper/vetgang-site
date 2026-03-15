import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

type CTASectionProps = {
  eyebrow: string;
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export default function CTASection({ eyebrow, title, description, primary, secondary }: CTASectionProps) {
  return (
    <section className="py-section pt-0">
      <Container>
        <div className="rounded-card border border-army-khaki/20 bg-gradient-to-r from-ink-900 to-ink-800 p-8 sm:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-army-khaki">{eyebrow}</p>
              <h2 className="brand-underline brand-underline-subtle pb-2 text-headline-xl font-semibold text-white">{title}</h2>
              <p className="max-w-2xl text-body-md text-white/80">{description}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button as={Link} href={primary.href}>{primary.label}</Button>
              {secondary ? (
                <Button as={Link} href={secondary.href} variant="secondary">
                  {secondary.label}
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
