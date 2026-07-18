import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { teamModel } from "@/lib/site";
import { cn } from "@/lib/utils";

export function HowWeBuild() {
  return (
    <section id="how-we-build" className="relative py-24 sm:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <FadeIn className="lg:col-span-7">
            <p className="text-xs font-medium tracking-[0.18em] text-cyan uppercase">
              How We Build
            </p>
            <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
              {teamModel.title}
            </h2>
          </FadeIn>

          <FadeIn delay={0.08} className="lg:col-span-5">
            <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg lg:ml-auto lg:text-right">
              {teamModel.description}
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.12}>
          <div className="mt-14 overflow-hidden rounded-2xl border border-border bg-card">
            <div className="flex flex-col gap-2 border-b border-border px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
                Product Team Unit
              </p>
              <p className="text-xs text-muted-foreground">
                One team · One project · Full delivery
              </p>
            </div>

            <ul className="grid sm:grid-cols-2 lg:grid-cols-4">
              {teamModel.roles.map((role, index) => (
                <li
                  key={role.title}
                  className={cn(
                    "px-6 py-8 sm:px-8 sm:py-10",
                    index < teamModel.roles.length - 1 &&
                      "border-b border-border",
                    "sm:border-b-0",
                    index < 2 && "sm:border-b sm:border-border",
                    "lg:border-b-0",
                    index % 2 === 0 && "sm:border-r sm:border-border",
                    index < teamModel.roles.length - 1 &&
                      "lg:border-r lg:border-border"
                  )}
                >
                  <span className="font-heading text-xs font-semibold tracking-wider text-primary tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-heading text-xl font-semibold tracking-tight text-foreground">
                    {role.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {role.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>

        <FadeIn delay={0.18}>
          <div className="mt-10 grid gap-6 border-t border-border pt-10 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-12">
            <p className="text-xs font-medium tracking-[0.18em] text-cyan uppercase sm:pt-1.5">
              Composition
            </p>
            <blockquote className="max-w-3xl font-heading text-xl font-semibold leading-snug tracking-tight text-foreground text-balance sm:text-2xl">
              {teamModel.rule}
            </blockquote>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
