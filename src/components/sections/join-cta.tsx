import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function JoinCta() {
  return (
    <section id="join" className="relative py-24 sm:py-28">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 text-center sm:px-12 sm:py-16">
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse 55% 60% at 50% 0%, rgb(37 99 235 / 14%), transparent 65%)",
              }}
            />
            <div className="relative z-10 mx-auto max-w-2xl">
              <p className="text-xs font-medium tracking-[0.18em] text-cyan uppercase">
                Join TechSpace
              </p>
              <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                Ready to Build the Future?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Become a member of TechSpace and train as a software engineer
                through practical learning, collaboration, and real products —
                then grow into the future of technology at DIT.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link
                  href={siteConfig.links.email}
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-11 px-6 bg-primary text-primary-foreground hover:bg-primary/90"
                  )}
                >
                  Become a Member
                  <ArrowRight data-icon="inline-end" />
                </Link>
                <a
                  href={siteConfig.links.email}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-11 px-6"
                  )}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
