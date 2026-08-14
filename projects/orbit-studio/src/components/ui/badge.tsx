import type { HTMLAttributes } from "react";

function cx(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

type BadgeVariant = "default" | "primary" | "secondary" | "outline";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const baseStyles =
  "inline-flex items-center whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-medium";

const variantStyles: Record<BadgeVariant, string> = {
  default: "border border-border bg-surface text-foreground",
  primary: "border border-primary/30 bg-primary/15 text-primary",
  secondary: "border border-secondary/30 bg-secondary/15 text-secondary",
  outline: "border border-border text-muted",
};

export function Badge({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cx(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
}
