import { BookOpen, Boxes, Lightbulb, Users } from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { pillars } from "@/lib/site";

const icons = [BookOpen, Boxes, Users, Lightbulb];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="relative py-24 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="What We Do"
            title="How TechSpace builds engineers."
            description="We train builders through deliberate practice — learning deeply, shipping products, collaborating in public, and innovating with discipline."
          />
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {pillars.map((pillar, index) => {
            const Icon = icons[index];
            return (
              <FadeIn key={pillar.title} delay={0.05 * index} as="article">
                <div className="group h-full rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 sm:p-8">
                  <div className="flex size-11 items-center justify-center rounded-xl border border-border bg-surface text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-heading text-2xl font-semibold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {pillar.description}
                  </p>
                  <ul className="mt-5 grid grid-cols-2 gap-2">
                    {pillar.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-border/70 bg-surface/50 px-3 py-2 text-xs text-muted-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
