import { Check } from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { layers } from "@/lib/community";
import { cn } from "@/lib/utils";

/** Open at the bottom, selective as you rise: Learn → Build → Launch. */
export function Layers() {
  return (
    <section id="how-it-works" className="relative scroll-mt-20 border-t border-border/60 py-24 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="How it works"
            title="Three layers. Open at the bottom, earned at the top."
            description="Anyone at DIT can start learning. You move up by shipping — not by year of study or title."
          />
        </FadeIn>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {layers.map((layer, index) => (
            <FadeIn key={layer.name} delay={0.06 * index} as="article">
              <div
                className={cn(
                  "flex h-full flex-col rounded-2xl border bg-card p-7",
                  index === 2 ? "border-primary/40" : "border-border",
                )}
              >
                <p className="text-xs font-medium tracking-[0.16em] text-cyan uppercase">
                  Layer {index + 1} · {layer.tag}
                </p>
                <h3 className="mt-3 font-heading text-3xl font-bold text-foreground">
                  {layer.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {layer.summary}
                </p>
                <ul className="mt-5 space-y-2">
                  {layer.you.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-auto border-t border-border pt-5 text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Output: </span>
                  {layer.output}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
