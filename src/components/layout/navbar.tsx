"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { GitHubIcon } from "@/components/shared/icons";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/70 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between section-pad lg:h-[4.25rem]">
        <Link
          href="/"
          className="font-heading text-lg font-bold tracking-tight text-foreground transition-colors hover:text-primary"
        >
          TechSpace
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
          >
            <GitHubIcon className="size-4" />
            GitHub
          </a>
          <a
            href={siteConfig.links.join}
            className={cn(
              buttonVariants({ size: "sm" }),
              "bg-primary text-primary-foreground hover:bg-primary/90"
            )}
          >
            Join TechSpace
          </a>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "border-b border-border bg-background/95 backdrop-blur-xl lg:hidden",
          open ? "block" : "hidden"
        )}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-2 flex flex-col gap-2 border-t border-border pt-3">
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline" }), "w-full")}
            >
              <GitHubIcon className="size-4" />
              GitHub
            </a>
            <a
              href={siteConfig.links.join}
              onClick={() => setOpen(false)}
              className={cn(
                buttonVariants(),
                "w-full bg-primary text-primary-foreground hover:bg-primary/90"
              )}
            >
              Join TechSpace
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
