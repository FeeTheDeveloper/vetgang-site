import type { ComponentPropsWithoutRef, ElementType } from "react";

const styles = {
  base: "inline-flex items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.16em] transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
  primary:
    "border-army-burgundy bg-army-burgundy text-army-khaki shadow-lg shadow-black/40 hover:border-[#9a2337] hover:bg-[#9a2337] focus-visible:outline-army-khaki",
  secondary:
    "border-army-khaki/60 bg-army-khaki/10 text-army-khaki hover:border-army-khaki hover:bg-army-khaki/20 focus-visible:outline-army-khaki",
  ghost:
    "border-white/20 bg-transparent text-white/90 hover:border-army-khaki/60 hover:text-army-khaki focus-visible:outline-army-khaki",
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
  const classes = [styles.base, variantStyle, className].filter(Boolean).join(" ");
  return <Component className={classes} {...props} />;
}
