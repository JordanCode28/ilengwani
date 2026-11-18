import type { HTMLAttributes } from "react";

type TagProps = HTMLAttributes<HTMLSpanElement>;

export function Tag({
  className = "",
  ...props
}: TagProps) {
  return (
    <span
      className={`inline-block rounded-xl bg-surface px-4 py-2 font-bold ${className}`}
      {...props}
    />
  );
}