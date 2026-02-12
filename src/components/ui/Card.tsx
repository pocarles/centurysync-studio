import type { ReactNode } from "react";
import { clsx } from "clsx";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "card-hover rounded-2xl border border-border-light bg-white p-6 md:p-8",
        className
      )}
    >
      {children}
    </div>
  );
}
