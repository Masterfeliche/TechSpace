import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

const BUTTON = {
  // YC-style orange; bold 17px labels so white-on-orange stays as legible as possible.
  primary: "bg-primary text-primary-foreground text-[17px] font-bold hover:bg-[#e65c00]",
  ghost: "border border-border-strong bg-card text-foreground font-semibold hover:border-foreground",
  ink: "bg-foreground text-white font-semibold hover:bg-[#262626]",
} as const;

/** Pill button rendered as a link (internal, external or mailto). */
export function ButtonLink({
  href,
  variant = "primary",
  size = "lg",
  className,
  children,
}: {
  href: string;
  variant?: keyof typeof BUTTON;
  size?: "md" | "lg";
  className?: string;
  children: ReactNode;
}) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full transition-colors",
    size === "lg" ? "h-12 px-6 text-base" : "h-[42px] px-5 text-[15px]",
    BUTTON[variant],
    className,
  );
  if (/^(https?:|mailto:)/.test(href)) {
    const external = href.startsWith("http");
    return (
      <a href={href} className={classes} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

const TAG_TONE = {
  neutral: "border-border-strong text-ink-muted",
  live: "border-success text-success",
  brand: "border-brand text-brand",
} as const;

export function Tag({ tone = "neutral", children }: { tone?: keyof typeof TAG_TONE; children: ReactNode }) {
  return (
    <span className={cn("inline-flex h-[26px] items-center rounded-full border bg-card px-2.5 text-[13px] font-medium", TAG_TONE[tone])}>
      {children}
    </span>
  );
}

/** Text link: ink with an orange underline on hover, like YC's body links. */
export const textLink =
  "font-semibold text-foreground underline decoration-border-strong underline-offset-[3px] transition-colors hover:text-primary hover:decoration-primary";

/** The TS mark: orange square, white letters. */
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5 text-foreground", className)}>
      <span className="flex size-[34px] items-center justify-center rounded-lg bg-primary text-sm font-bold tracking-tight text-white">
        TS
      </span>
      <span className="text-xl font-bold tracking-tight">TechSpace</span>
    </span>
  );
}
