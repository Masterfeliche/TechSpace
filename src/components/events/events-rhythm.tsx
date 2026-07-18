import { CalendarDays, Code2, Mic2, MonitorPlay } from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { events } from "@/lib/site";

const icons = [Code2, MonitorPlay, CalendarDays, Mic2];

type EventsRhythmProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
};

export function EventsRhythm({
  eyebrow = "Ongoing Rhythm",
  title = "A consistent cadence of learning and building.",
  description = "From weekly sessions and virtual coding to monthly hackathons and tech talks — the calendar is designed for momentum.",
  className,
}: EventsRhythmProps) {
  return (
    <section className={className ?? "relative py-24 sm:py-28"}>
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow={eyebrow}
            title={title}
            description={description}
          />
        </FadeIn>

        <div className="relative mt-14">
          <div className="absolute top-0 bottom-0 left-5 w-px bg-border sm:left-1/2" />
          <ul className="space-y-8">
            {events.map((event, index) => {
              const Icon = icons[index];
              const isLeft = index % 2 === 0;
              return (
                <li key={event.title} className="relative">
                  <FadeIn delay={0.05 * index}>
                    <div
                      className={`grid items-center gap-6 sm:grid-cols-2 ${
                        isLeft ? "" : "sm:[&>*:first-child]:order-2"
                      }`}
                    >
                      <div
                        className={`rounded-2xl border border-border bg-card p-6 sm:p-7 ${
                          isLeft ? "sm:mr-8" : "sm:ml-8"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className="flex size-10 items-center justify-center rounded-xl border border-border bg-surface text-cyan">
                            <Icon className="size-5" aria-hidden="true" />
                          </div>
                          <p className="text-xs font-medium tracking-[0.14em] text-muted-foreground uppercase">
                            {event.cadence}
                          </p>
                        </div>
                        <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">
                          {event.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {event.description}
                        </p>
                      </div>
                      <div className="hidden sm:block" />
                    </div>
                    <span className="absolute top-8 left-[1.05rem] size-2.5 rounded-full bg-primary ring-4 ring-background sm:left-1/2 sm:-translate-x-1/2" />
                  </FadeIn>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
