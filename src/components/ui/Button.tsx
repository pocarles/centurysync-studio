import { clsx } from "clsx";
import type { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "btn-shine inline-flex items-center justify-center font-semibold rounded-full transition-all duration-150",
        variant === "primary" &&
          "px-6 py-3 bg-charcoal text-white hover:-translate-y-px hover:shadow-lg",
        variant === "secondary" &&
          "px-6 py-3 bg-transparent text-charcoal border border-border hover:bg-cream-dark hover:border-text-muted",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
