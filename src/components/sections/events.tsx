import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { UpcomingEvent } from "@/components/events/upcoming-event";
import { EventsRhythm } from "@/components/events/events-rhythm";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Events() {
  return (
    <section id="events" className="relative">
      <UpcomingEvent
        showViewAll
        className="relative border-t border-border/60 py-16 sm:py-20"
      />

      <EventsRhythm
        eyebrow="Events"
        title="A consistent rhythm of learning and building."
        description="From weekly sessions and virtual coding to monthly hackathons and tech talks — the calendar is designed for momentum."
        className="relative py-16 pb-10 sm:py-20 sm:pb-12"
      />

      <Container className="pb-24 sm:pb-28">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-card px-6 py-6 sm:flex-row sm:items-center sm:px-8">
            <div>
              <p className="font-heading text-lg font-semibold text-foreground">
                See past programs and the full events archive
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Bootcamps, semester series, hackathons, and more.
              </p>
            </div>
            <Link
              href="/events"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-11 shrink-0 bg-primary px-5 text-primary-foreground hover:bg-primary/90"
              )}
            >
              View all events
              <ArrowRight data-icon="inline-end" />
            </Link>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
