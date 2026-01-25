import type { ComponentPropsWithoutRef, ElementType } from "react";

const styles = {
  base: "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
  primary: "bg-white text-ink-950 shadow-lg shadow-white/10 hover:bg-slate-100 focus-visible:outline-white",
  secondary:
    "border border-white/20 bg-white/5 text-white/95 shadow-lg shadow-black/40 hover:border-white/40 hover:bg-white/10 focus-visible:outline-white",
  ghost: "border border-white/20 text-white/90 hover:border-white/40 hover:text-white focus-visible:outline-white",
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
  const variantStyle =
    variant === "primary" ? styles.primary : variant === "secondary" ? styles.secondary : styles.ghost;
  const classes = [styles.base, variantStyle, className].filter(Boolean).join(" ");
  return <Component className={classes} {...props} />;
}
