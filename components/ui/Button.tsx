import type { ComponentPropsWithoutRef, ElementType } from "react";

const styles = {
  base: "inline-flex items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.16em] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
  primary:
    "border-army-burgundy bg-army-burgundy text-army-khaki shadow-lg shadow-black/50 hover:-translate-y-0.5 hover:border-[#9a2337] hover:bg-[#9a2337]",
  secondary:
    "border-army-khaki/65 bg-army-khaki/10 text-army-khaki hover:-translate-y-0.5 hover:border-army-khaki hover:bg-army-khaki/20",
  ghost:
    "border-white/15 bg-white/[0.02] text-white/90 hover:-translate-y-0.5 hover:border-army-khaki/60 hover:text-army-khaki",
};

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps<T extends ElementType> = {
  as?: T;
  variant?: ButtonVariant;
} & ComponentPropsWithoutRef<T>;

export default function Button<T extends ElementType = "button">({
  as,
  className,
  variant = "primary",
  ...props
}: ButtonProps<T>) {
  const Component = as ?? "button";
  const variantStyle = styles[variant];
  const classes = [styles.base, variantStyle, "focus-visible:outline-army-khaki", className].filter(Boolean).join(" ");

  return <Component className={classes} {...props} />;
}
