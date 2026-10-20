import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { buttonVariants } from "@/components/ui/button";
import { flywheel, manifesto } from "@/lib/community";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Manifesto",
  description: manifesto.lede,
  openGraph: {
    title: `${manifesto.title} | ${siteConfig.name}`,
    description: manifesto.lede,
    url: `${siteConfig.url}/manifesto`,
  },
};

export default function ManifestoPage() {
  return (
    <main id="main" className="pt-28 pb-24 sm:pt-32">
      <Container className="max-w-3xl">
        <FadeIn>
          <p className="text-xs font-medium tracking-[0.18em] text-cyan uppercase">
            {manifesto.title}
          </p>
          <h1 className="mt-5 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            {manifesto.lede}
          </h1>
          {manifesto.preamble.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </FadeIn>

        <section aria-labelledby="believe" className="mt-16">
          <h2 id="believe" className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
            What we believe
          </h2>
          <ol className="mt-8 space-y-8">
            {manifesto.principles.map((principle, index) => (
              <FadeIn key={principle.title} as="li" delay={0.03 * index}>
                <div className="grid gap-2 sm:grid-cols-[3rem_1fr]">
                  <span className="font-mono text-sm text-primary">0{index + 1}</span>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground">
                      {principle.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{principle.body}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </ol>
        </section>

        <section aria-labelledby="loop" className="mt-16 rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2 id="loop" className="font-heading text-2xl font-bold text-foreground">
            The builder loop
          </h2>
          <p className="mt-4 font-heading text-lg font-semibold text-primary">
            {flywheel.map((s) => s.step).join(" → ")} → back to Learn
          </p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Every activity at TechSpace should move someone one step along this loop. If it
            doesn&apos;t, we stop doing it.
          </p>
        </section>

        <section aria-labelledby="commit" className="mt-16">
          <h2 id="commit" className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
            What every member commits to
          </h2>
          <ul className="mt-6 space-y-3">
            {manifesto.commitments.map((commitment) => (
              <li key={commitment} className="flex gap-3 leading-relaxed text-foreground">
                <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-cyan" />
                {commitment}
              </li>
            ))}
          </ul>
        </section>

        <FadeIn>
          <div className="mt-16 border-t border-border pt-10">
            <p className="font-heading text-2xl font-semibold leading-snug text-foreground text-balance">
              {manifesto.closing}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/join"
                className={cn(buttonVariants({ size: "lg" }), "h-11 px-6 bg-primary text-primary-foreground hover:bg-primary/90")}
              >
                Apply to join
                <ArrowRight data-icon="inline-end" />
              </Link>
              <Link href="/#how-it-works" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "h-11 px-6")}>
                How TechSpace works
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </main>
  );
}
