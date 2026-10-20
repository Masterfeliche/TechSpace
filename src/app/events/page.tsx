import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink, Tag } from "@/components/shared/ui";
import { rhythm } from "@/lib/community";
import { pastEvents, siteConfig, upcomingEvent } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events",
  description: "Demo Day every Friday, build nights, hackathons and open houses at TechSpace, DIT's builder community.",
  openGraph: {
    title: `Events | ${siteConfig.name}`,
    description: "Upcoming events and past programs from TechSpace at DIT.",
    url: `${siteConfig.url}/events`,
  },
};

export default function EventsPage() {
  return (
    <main id="main" className="pb-24">
      <section className="mx-auto max-w-[1200px] section-pad pt-20 pb-12">
        <p className="eyebrow mb-5">Events</p>
        <h1 className="max-w-[860px] text-[clamp(40px,5.5vw,68px)] font-semibold leading-[1.02] tracking-[-0.035em]">
          A community that demos every week stays alive.
        </h1>
      </section>

      <section className="mx-auto max-w-[1200px] section-pad pb-16">
        <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-border bg-card p-7 sm:p-8">
          {upcomingEvent ? (
            <>
              <div>
                <p className="eyebrow mb-2 text-brand">Next up</p>
                <p className="text-2xl font-semibold tracking-tight">{upcomingEvent.title}</p>
                <p className="mt-1 text-muted-foreground">
                  {upcomingEvent.dateLabel} · {upcomingEvent.location}
                </p>
                <p className="mt-3 max-w-[640px] text-ink-muted">{upcomingEvent.description}</p>
              </div>
              {upcomingEvent.href ? <ButtonLink href={upcomingEvent.href}>Save your seat →</ButtonLink> : null}
            </>
          ) : (
            <>
              <div>
                <p className="eyebrow mb-2">Next up</p>
                <p className="text-2xl font-semibold tracking-tight">Demo Day, every Friday</p>
                <p className="mt-1 text-muted-foreground">The next special event will be announced in the WhatsApp community first.</p>
              </div>
              <ButtonLink href={siteConfig.links.whatsapp} variant="ghost">
                Get announcements
              </ButtonLink>
            </>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] section-pad pb-20">
        <h2 className="h-section">The rhythm</h2>
        <div className="mt-10 space-y-10">
          {rhythm.map((block) => (
            <div key={block.cadence} className="grid gap-5 lg:grid-cols-[180px_1fr]">
              <p className="text-lg font-semibold text-brand">{block.cadence}</p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {block.items.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-border bg-card p-5">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {pastEvents.length > 0 ? (
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-[1200px] section-pad">
            <h2 className="h-section">Past programs</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {pastEvents.map((event) => (
                <article key={event.title} className="overflow-hidden rounded-2xl border border-border bg-card">
                  <div className="relative aspect-[16/9]">
                    <Image src={event.image.src} alt={event.image.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <Tag tone="brand">{event.category}</Tag>
                      <Tag>{event.period}</Tag>
                    </div>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight">{event.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{event.summary}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
