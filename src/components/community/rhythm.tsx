import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { rhythm } from "@/lib/community";

/** The weekly / quarterly / yearly rituals that keep the community alive. */
export function Rhythm() {
  return (
    <section id="rhythm" className="relative scroll-mt-20 border-t border-border/60 py-24 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Our rhythm"
            title="A community that demos every week stays alive."
            description="Small, predictable rituals beat big, rare events. Demo Day is the heartbeat."
          />
        </FadeIn>

        <div className="mt-14 space-y-10">
          {rhythm.map((block, blockIndex) => (
            <FadeIn key={block.cadence} delay={0.05 * blockIndex}>
              <div className="grid gap-5 lg:grid-cols-[10rem_1fr]">
                <p className="font-heading text-lg font-semibold text-primary">
                  {block.cadence}
                </p>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {block.items.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-border bg-card p-5">
                      <h3 className="font-heading text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
