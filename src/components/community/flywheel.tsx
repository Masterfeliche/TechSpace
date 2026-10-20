import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { flywheel, manifesto } from "@/lib/community";

/** The builder loop: Learn → Build → Ship → Teach → Lift, closing back on itself. */
export function Flywheel() {
  return (
    <section id="loop" className="relative scroll-mt-20 py-24 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="The idea"
            title="Silicon Valley isn't a place. It's a loop."
            description={manifesto.preamble[0]}
          />
        </FadeIn>

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {flywheel.map((stage, index) => (
            <FadeIn key={stage.step} as="li" delay={0.05 * index}>
              <div className="relative h-full rounded-2xl border border-border bg-card p-6">
                <span className="font-mono text-xs text-cyan">
                  0{index + 1}
                </span>
                <h3 className="mt-3 font-heading text-2xl font-semibold text-foreground">
                  {stage.step}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {stage.body}
                </p>
                {index < flywheel.length - 1 ? (
                  <ArrowRight
                    aria-hidden="true"
                    className="absolute top-1/2 -right-3.5 z-10 hidden size-5 -translate-y-1/2 text-primary lg:block"
                  />
                ) : null}
              </div>
            </FadeIn>
          ))}
        </ol>

        <FadeIn delay={0.25}>
          <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">…and back to Learn.</span>
            Every turn makes the next builder faster. If an activity doesn&apos;t move
            someone along the loop, we stop doing it.
            <Link href="/manifesto" className="font-medium text-primary hover:text-primary/80">
              Read the manifesto →
            </Link>
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
