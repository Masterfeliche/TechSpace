import Image from "next/image";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { SectionHeading } from "@/components/shared/section-heading";
import { founders, leadershipTeam } from "@/lib/site";

export function Leadership() {
  return (
    <section id="leadership" className="relative py-24 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Leadership"
            title="The people stewarding the lab."
            description="Leadership exists to protect engineering culture, enable members, and keep TechSpace ambitious and disciplined."
          />
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mt-14 rounded-3xl border border-border bg-surface/50 p-6 sm:p-8">
            <h3 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
              Founders
            </h3>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {founders.map((founder, index) => (
                <article
                  key={founder.name}
                  className="overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35"
                >
                  <div className="relative aspect-[4/3] w-full">
                    <Image
                      src={founder.image}
                      alt={`${founder.name}, ${founder.title}`}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover object-top"
                      priority={index === 0}
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    <h4 className="font-heading text-xl font-semibold text-foreground">
                      {founder.name}
                    </h4>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {founder.title}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-6 rounded-3xl border border-border bg-surface/50 p-6 sm:p-8">
            <h3 className="font-heading text-xl font-semibold text-foreground sm:text-2xl">
              Leadership Team
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              The operational leadership responsible for programs, technical
              direction, and community execution.
            </p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {leadershipTeam.map((member) => (
                <article
                  key={member.title}
                  className="overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35"
                >
                  <div className="relative aspect-square w-full">
                    <Image
                      src={member.image}
                      alt={`${member.name}, ${member.title}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-medium tracking-[0.14em] text-cyan uppercase">
                      {member.title}
                    </p>
                    <h4 className="mt-2 font-heading text-lg font-semibold text-foreground">
                      {member.name}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {member.responsibility}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
