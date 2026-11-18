import type { HTMLAttributes } from "react";

type Variant = "default" | "light";

type InfoBoxProps = HTMLAttributes<HTMLDivElement> & {
  variant?: Variant;
};

const variants: Record<Variant, string> = {
  default: "bg-surface",
  light: "bg-surface/50", // version plus claire, comme le sommaire de la maquette
};

export function InfoBox({
  variant = "default",
  className = "",
  ...props
}: InfoBoxProps) {
  return (
    <div
      className={`rounded-[20px] p-6 ${variants[variant]} ${className}`}
      {...props}
    />
  );
}