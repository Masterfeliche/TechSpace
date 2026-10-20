import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/shared/ui";
import { essays, flywheel, manifesto } from "@/lib/community";
import { siteConfig } from "@/lib/site";

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
  const more = essays.filter((e) => e.href !== "/manifesto");
  return (
    <main id="main" className="pt-24 pb-28">
      <article className="mx-auto max-w-[680px] section-pad">
        <p className="eyebrow">
          <Link href="/manifesto" className="hover:text-primary">Library</Link> / Essay
        </p>
        <h1 className="mt-5 text-[clamp(40px,5vw,60px)] font-semibold leading-[1.04] tracking-[-0.035em]">
          {manifesto.title}
        </h1>
        <p className="mt-5 mb-12 font-mono text-[13px] text-muted-foreground">TechSpace · Dar es Salaam Institute of Technology</p>

        <p className="mb-6 text-2xl leading-snug font-medium tracking-[-0.01em]">{manifesto.lede}</p>
        {manifesto.preamble.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="mb-6 text-[19px] leading-[1.75] text-[#292524]">
            {paragraph}
          </p>
        ))}

        <figure className="my-12 rounded-2xl bg-foreground p-7 text-white">
          <p className="eyebrow text-[#a8a29e]">The builder loop</p>
          <p className="mt-3.5 text-[26px] leading-snug font-semibold tracking-[-0.02em]">
            {flywheel.map((s) => s.step).join(" → ")} <span className="text-primary">→ Learn</span>
          </p>
          <figcaption className="mt-2.5 text-[#d6d3d1]">If an activity doesn&apos;t move someone along the loop, we stop doing it.</figcaption>
        </figure>

        <h2 className="mt-16 mb-2 text-3xl font-semibold tracking-[-0.02em]">What we believe</h2>
        <ol>
          {manifesto.principles.map((principle, i) => (
            <li key={principle.title} className="grid grid-cols-[48px_minmax(0,1fr)] gap-2 border-t border-border py-7 last:border-b">
              <span className="font-mono text-brand">0{i + 1}</span>
              <div>
                <h3 className="text-[21px] font-semibold">{principle.title}</h3>
                <p className="mt-2 text-lg leading-[1.7] text-ink-muted">{principle.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="mt-16 mb-5 text-3xl font-semibold tracking-[-0.02em]">What every member commits to</h2>
        <ul className="list-disc space-y-2 pl-5 text-lg leading-[1.7] text-[#292524] marker:text-primary">
          {manifesto.commitments.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>

        <p className="mt-14 text-2xl leading-snug font-semibold tracking-[-0.01em]">{manifesto.closing}</p>
        <div className="mt-6">
          <ButtonLink href="/apply">Apply to TechSpace →</ButtonLink>
        </div>

        {more.length > 0 ? (
          <nav aria-label="More essays" className="mt-20 border-t border-foreground pt-7">
            <p className="eyebrow mb-3">More from the library</p>
            {more.map((e) => (
              <p key={e.title} className="mb-2.5">
                <Link href={e.href} className="text-lg font-medium underline decoration-border-strong underline-offset-4 hover:text-primary">
                  {e.title} →
                </Link>
              </p>
            ))}
          </nav>
        ) : null}
      </article>
    </main>
  );
}
