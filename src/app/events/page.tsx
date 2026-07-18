import type { Metadata } from "next";
import { EventsPageHero } from "@/components/events/events-page-hero";
import { EventsRhythm } from "@/components/events/events-rhythm";
import { PastEvents } from "@/components/events/past-events";
import { UpcomingEvent } from "@/components/events/upcoming-event";
import { JoinCta } from "@/components/sections/join-cta";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Explore TechSpace's upcoming sessions, ongoing learning rhythm, and past community programs at DIT.",
  openGraph: {
    title: `Events | ${siteConfig.name}`,
    description:
      "Upcoming events and past programs from TechSpace — DIT's student engineering laboratory.",
    url: `${siteConfig.url}/events`,
  },
};

export default function EventsPage() {
  return (
    <main id="main">
      <EventsPageHero />
      <UpcomingEvent className="relative border-t border-border/60 py-16 sm:py-20" />
      <EventsRhythm className="relative py-16 sm:py-20" />
      <PastEvents />
      <JoinCta />
    </main>
  );
}
