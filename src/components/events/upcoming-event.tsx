import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig, upcomingEvent } from "@/lib/site";
import { cn } from "@/lib/utils";

type UpcomingEventProps = {
  showViewAll?: boolean;
  className?: string;
};

export function UpcomingEvent({
  showViewAll = false,
  className,
}: UpcomingEventProps) {
  return (
    <section className={className ?? "relative py-16 sm:py-20"}>
      <Container>
        <FadeIn>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-medium tracking-[0.18em] text-cyan uppercase">
                Next on the calendar
              </p>
              <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                Our nearest upcoming community event.
              </h2>
            </div>
            {showViewAll ? (
              <Link
                href="/events"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                View all events
                <ArrowRight className="size-4" />
              </Link>
            ) : null}
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          {upcomingEvent ? (
            <article className="mt-8 rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays className="size-4 text-cyan" aria-hidden="true" />
                  {upcomingEvent.dateLabel}
                </span>
                <span className="text-border">·</span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-4 text-cyan" aria-hidden="true" />
                  {upcomingEvent.location}
                </span>
              </div>
              <h3 className="mt-4 font-heading text-2xl font-semibold text-foreground">
                {upcomingEvent.title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                {upcomingEvent.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={upcomingEvent.href ?? siteConfig.links.join}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-11 bg-primary px-5 text-primary-foreground hover:bg-primary/90"
                  )}
                >
                  Attend event
                  <ArrowRight data-icon="inline-end" />
                </a>
                <a
                  href={siteConfig.links.join}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-11 px-5"
                  )}
                >
                  Join community
                </a>
              </div>
            </article>
          ) : (
            <div className="mt-8 rounded-2xl border border-border bg-card px-6 py-10 sm:px-8 sm:py-12">
              <p className="font-heading text-xl font-semibold text-foreground">
                No upcoming events published yet.
              </p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                Join the WhatsApp community to be the first to know about weekly
                sessions, build nights, hackathons, and tech talks at DIT.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "h-11 bg-primary px-5 text-primary-foreground hover:bg-primary/90"
                  )}
                >
                  Join Community
                  <ArrowRight data-icon="inline-end" />
                </a>
                <a
                  href={siteConfig.links.email}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-11 px-5"
                  )}
                >
                  Contact Us
                </a>
              </div>
            </div>
          )}
        </FadeIn>
      </Container>
    </section>
  );
}
