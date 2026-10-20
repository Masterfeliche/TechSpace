import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FounderCard } from "@/components/people/founder-card";
import { ButtonLink } from "@/components/shared/ui";
import {
  council,
  councilRules,
  decisionRights,
  founders,
  foundingStory,
  leadershipStages,
  mentors,
} from "@/lib/community";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "People",
  description: `The founders, leadership and mentors of TechSpace, DIT's builder community. ${foundingStory}`,
  openGraph: {
    title: `People | ${siteConfig.name}`,
    description: "Founders, leadership and mentors of TechSpace at DIT.",
    url: `${siteConfig.url}/people`,
  },
};

const wrap = "mx-auto w-full max-w-[1200px] section-pad";

export default function PeoplePage() {
  return (
    <main id="main">
      <section className={`${wrap} pt-20 pb-12`}>
        <p className="eyebrow mb-5">People</p>
        <h1 className="max-w-[860px] text-[clamp(40px,5.5vw,68px)] font-semibold leading-[1.02] tracking-[-0.035em]">
          Builders first. Then leaders.
        </h1>
        <p className="mt-5 max-w-[640px] text-lg leading-relaxed text-muted-foreground">
          The people who started TechSpace, the members who run it, and the mentors who give their time.
        </p>
      </section>

      <section aria-labelledby="founders" className={`${wrap} pb-20`}>
        <h2 id="founders" className="eyebrow mb-6">Founders</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {founders.map((founder) => (
            <FounderCard key={founder.name} founder={founder} />
          ))}
        </div>
      </section>

      <section aria-label="Why we started TechSpace" className="bg-foreground py-20 text-white">
        <div className={wrap}>
          <p className="eyebrow mb-5 text-[#a8a29e]">Why we started TechSpace</p>
          <blockquote className="max-w-[900px] text-[clamp(28px,3.4vw,42px)] leading-[1.2] font-semibold tracking-[-0.025em]">
            “{foundingStory}”
          </blockquote>
          <p className="mt-6 text-[#d6d3d1]">
            {founders.map((f) => f.name).join(" and ")}, founders ·{" "}
            <Link href="/manifesto" className="font-semibold text-white underline decoration-[#57534e] underline-offset-4 hover:text-primary hover:decoration-primary">
              Read the manifesto →
            </Link>
          </p>
        </div>
      </section>

      <section aria-labelledby="leadership" className={`${wrap} py-20`}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-4">Executive Council</p>
            <h2 id="leadership" className="h-section">Five seats. One semester each.</h2>
            <p className="mt-3 max-w-[600px] text-lg text-muted-foreground">
              Roles, not titles. Every seat owns something specific and is measured by results, and seats rotate so
              TechSpace outlives any one generation.
            </p>
          </div>
          <ButtonLink href="/apply" variant="ghost">
            Apply for a seat
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {council.map((seat) => (
            <article key={seat.title} className="flex flex-col rounded-2xl border border-border bg-card p-6">
              <p className="eyebrow text-[12px] text-brand">{seat.title}</p>
              <p className="mt-2 text-lg font-semibold">{seat.holder ?? "Seat open"}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{seat.owns}</p>
              <p className="mt-auto border-t border-border pt-3 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Measured by: </span>
                {seat.measure}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="how-leadership-works" className="bg-surface py-20">
        <div className={wrap}>
          <h2 id="how-leadership-works" className="h-section">How leadership works</h2>
          <div className="mt-10 grid gap-12 lg:grid-cols-3">
            <div>
              <h3 className="eyebrow mb-4">The rules</h3>
              <ol className="space-y-4">
                {councilRules.map((rule, i) => (
                  <li key={rule} className="grid grid-cols-[32px_minmax(0,1fr)] gap-2 leading-relaxed">
                    <span className="font-mono text-brand">0{i + 1}</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h3 className="eyebrow mb-4">Who decides what</h3>
              <dl>
                {decisionRights.map((d) => (
                  <div key={d.who} className="border-t border-border-strong py-3 last:border-b">
                    <dt className="font-semibold">{d.who}</dt>
                    <dd className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{d.what}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div>
              <h3 className="eyebrow mb-4">How it grows</h3>
              <ol>
                {leadershipStages.map((s) => (
                  <li key={s.stage} className="border-t border-border-strong py-3 last:border-b">
                    <p className="font-semibold">{s.stage}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{s.shape}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                From year two, the founders step back to an advisory role and the Council runs TechSpace day to day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {mentors.length > 0 ? (
        <section aria-labelledby="mentors" className="border-t border-border py-20">
          <div className={wrap}>
            <h2 id="mentors" className="h-section">Every mentor shipped something first.</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {mentors.map((m) => (
                <div key={m.name}>
                  {m.image ? (
                    <div className="relative aspect-square overflow-hidden rounded-xl bg-surface">
                      <Image src={m.image} alt={m.name} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover" />
                    </div>
                  ) : null}
                  <p className="mt-3 font-semibold">{m.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {m.role} · built {m.built}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className={`${wrap} border-t border-border py-24 text-center`}>
        <h2 className="mx-auto max-w-[760px] text-[clamp(32px,4.5vw,56px)] font-semibold leading-[1.05] tracking-[-0.035em]">
          Want a seat at the table?
        </h2>
        <p className="mx-auto mt-4 max-w-[520px] text-lg text-muted-foreground">
          Leaders and mentors come from builders who shipped. Start building, then lead.
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/apply">Apply to TechSpace →</ButtonLink>
        </div>
      </section>
    </main>
  );
}
