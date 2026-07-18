import Image from "next/image";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { eventsPageHeroImage } from "@/lib/site";

export function EventsPageHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 15% 20%, rgb(37 99 235 / 10%), transparent 70%)",
        }}
      />

      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <FadeIn>
            <p className="text-xs font-medium tracking-[0.18em] text-cyan uppercase">
              Events
            </p>
            <h1 className="mt-4 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1] text-balance">
              Where TechSpace learns, builds, and ships together.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Explore our ongoing rhythm of sessions and the programs we have
              already run — from fullstack bootcamps to semester-long AI series.
            </p>
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-card lg:mx-0 lg:max-w-none">
              <Image
                src={eventsPageHeroImage.src}
                alt={eventsPageHeroImage.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
