import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "outline";

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: Variant;
};

const variants: Record<Variant, string> = {
  primary: "bg-primary text-white hover:opacity-90",
  secondary: "bg-secondary text-white hover:opacity-90",
  outline: "border border-primary text-primary hover:bg-surface",
};

export function ButtonLink({
  variant = "primary",
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={`inline-flex items-center justify-center rounded-full px-6 py-2.5 font-medium transition ${variants[variant]} ${className}`}
      {...props}
    />
  );
}