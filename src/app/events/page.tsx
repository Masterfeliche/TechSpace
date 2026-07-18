import type { Metadata } from "next";
import { EventsPageHero } from "@/components/events/events-page-hero";
import { EventsRhythm } from "@/components/events/events-rhythm";
import { PastEvents } from "@/components/events/past-events";
import { JoinCta } from "@/components/sections/join-cta";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Explore TechSpace's ongoing learning rhythm and past community programs — including fullstack bootcamps, AI series, hackathons, and tech talks at DIT.",
  openGraph: {
    title: `Events | ${siteConfig.name}`,
    description:
      "Ongoing sessions and past programs from TechSpace — DIT's student engineering laboratory.",
    url: `${siteConfig.url}/events`,
  },
};

export default function EventsPage() {
  return (
    <main id="main">
      <EventsPageHero />
      <EventsRhythm className="relative border-t border-border/60 py-24 sm:py-28" />
      <PastEvents />
      <JoinCta />
    </main>
  );
}
