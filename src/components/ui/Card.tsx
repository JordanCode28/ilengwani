import type { HTMLAttributes } from "react";

export function Card({
  className = "",
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-card bg-white p-5 shadow-card ${className}`}
      {...props}
    />
  );
}