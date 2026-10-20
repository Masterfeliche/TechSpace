import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { council } from "@/lib/community";

/** Leadership as roles with clear responsibilities — names appear once confirmed. */
export function Council() {
  return (
    <section id="leadership" className="relative scroll-mt-20 border-t border-border/60 py-24 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Leadership"
            title="Roles, not titles. Rotated, not owned."
            description="Leadership exists to protect the culture and unblock builders. Seats rotate so TechSpace outlives any one generation of students."
          />
        </FadeIn>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {council.map((role, index) => (
            <FadeIn key={role.title} delay={0.04 * index} as="article">
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <p className="text-xs font-medium tracking-[0.14em] text-cyan uppercase">
                  {role.title}
                </p>
                <p className="mt-2 font-heading text-lg font-semibold text-foreground">
                  {role.holder ?? "Seat open"}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {role.responsibility}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
