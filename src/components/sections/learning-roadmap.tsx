import { ArrowDown } from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { roadmap } from "@/lib/site";

export function LearningRoadmap() {
  return (
    <section id="learning" className="relative py-24 sm:py-28">
      <Container className="relative">
        <FadeIn>
          <SectionHeading
            eyebrow="Layer 1 · The Learn roadmap"
            title="A deliberate path from foundations to AI."
            description="Software engineers first, then specialists. Every stage ends with something you built and showed at demo day."
          />
        </FadeIn>

        <ol className="relative mt-14 space-y-0">
          {roadmap.map((step, index) => (
            <li key={step.title} className="relative">
              <FadeIn delay={0.04 * index}>
                <div className="grid gap-4 rounded-2xl border border-border bg-card p-6 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-6 sm:p-7">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-heading text-sm font-semibold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </FadeIn>

              {index < roadmap.length - 1 ? (
                <div className="flex justify-center py-3 text-muted-foreground/70">
                  <ArrowDown className="size-4" aria-hidden="true" />
                  <span className="sr-only">Next</span>
                </div>
              ) : null}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
