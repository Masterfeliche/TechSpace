import Image from "next/image";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { pastEvents } from "@/lib/site";

export function PastEvents() {
  return (
    <section id="past-events" className="relative py-24 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Past Events"
            title="Programs the community has already shipped."
            description="Bootcamps, semester series, hackathons, and talks — proof of consistent practice beyond a typical campus club calendar."
          />
        </FadeIn>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {pastEvents.map((event, index) => (
            <FadeIn key={event.title} delay={0.05 * index} as="article">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={event.image.src}
                    alt={event.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge
                      variant="outline"
                      className="rounded-lg border-cyan/40 text-cyan"
                    >
                      {event.category}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="rounded-lg border-border text-muted-foreground"
                    >
                      {event.period}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="rounded-lg border-success/40 text-success"
                    >
                      {event.status}
                    </Badge>
                  </div>

                  <h3 className="mt-4 font-heading text-xl font-semibold text-foreground sm:text-2xl">
                    {event.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {event.summary}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {event.highlights.map((item) => (
                      <li
                        key={item}
                        className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
