import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { partners } from "@/lib/site";

export function Partners() {
  return (
    <section id="partners" className="relative py-14 sm:py-16">
      <Container>
        <FadeIn>
          <div className="border-y border-border py-10 sm:py-12">
            <p className="text-center text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
              Rooted at DIT · Built for engineers
            </p>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-5 sm:gap-x-12">
              {partners.map((partner) => (
                <li key={partner.name} className="text-center">
                  <p className="font-heading text-sm font-semibold tracking-tight text-foreground sm:text-base">
                    {partner.name}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {partner.role}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
