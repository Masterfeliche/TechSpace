import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { mission, values, vision } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="About TechSpace"
            title="An engineering laboratory at DIT."
            description="TechSpace is the official student technology community of the Dar es Salaam Institute of Technology. We exist to produce exceptional software engineers through practical learning, collaboration, and real-world projects — with Software Engineering as the foundation of everything."
          />
        </FadeIn>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <FadeIn delay={0.05}>
            <article className="h-full rounded-2xl border border-border bg-card p-7 sm:p-8">
              <p className="text-xs font-medium tracking-[0.18em] text-cyan uppercase">
                Vision
              </p>
              <p className="mt-4 font-heading text-xl font-semibold leading-relaxed text-foreground sm:text-2xl">
                {vision}
              </p>
            </article>
          </FadeIn>
          <FadeIn delay={0.1}>
            <article className="h-full rounded-2xl border border-border bg-card p-7 sm:p-8">
              <p className="text-xs font-medium tracking-[0.18em] text-cyan uppercase">
                Mission
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {mission}
              </p>
            </article>
          </FadeIn>
        </div>

        <div className="mt-20 border-t border-border pt-16 sm:mt-24 sm:pt-20">
          <FadeIn>
            <div className="max-w-2xl">
              <p className="text-xs font-medium tracking-[0.18em] text-cyan uppercase">
                Core Values
              </p>
              <h3 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
                Principles that shape how we learn and build.
              </h3>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Seven standards we hold ourselves to — as engineers, teammates,
                and a community at DIT.
              </p>
            </div>
          </FadeIn>

          <ul className="mt-12 grid gap-x-12 gap-y-0 sm:grid-cols-2">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={0.04 * index} as="li">
                <div className="border-t border-border py-8">
                  <div className="flex items-baseline gap-4">
                    <span className="font-heading text-sm font-semibold tabular-nums text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h4 className="font-heading text-xl font-semibold text-foreground">
                      {value.title}
                    </h4>
                  </div>
                  <p className="mt-3 max-w-md pl-10 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
