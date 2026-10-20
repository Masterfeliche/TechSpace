"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ButtonLink, Logo } from "@/components/shared/ui";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex min-h-[72px] max-w-[1200px] items-center gap-6 section-pad">
        <Link href="/" aria-label="TechSpace home">
          <Logo />
        </Link>

        <div className="hidden flex-1 items-center gap-0.5 md:flex">
          {siteConfig.nav.map((item) => {
            const active = !item.href.includes("#") && pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-[15px] font-medium text-foreground transition-colors hover:bg-surface",
                  active && "bg-surface",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <ButtonLink href="/apply" size="md" className="ml-auto hidden md:inline-flex">
          Apply
        </ButtonLink>

        <button
          type="button"
          className="ml-auto inline-flex size-11 items-center justify-center rounded-lg text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-[1200px] flex-col section-pad py-3">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-surface">
                {item.label}
              </Link>
            ))}
            <ButtonLink href="/apply" className="mt-3 mb-2 w-full">
              Apply to TechSpace
            </ButtonLink>
          </div>
        </div>
      ) : null}
    </header>
  );
}
