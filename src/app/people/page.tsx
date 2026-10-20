import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FounderCard } from "@/components/people/founder-card";
import { ButtonLink } from "@/components/shared/ui";
import { council, founders, foundingStory, mentors } from "@/lib/community";
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
            <h2 id="leadership" className="h-section">Leadership council</h2>
            <p className="mt-3 max-w-[560px] text-lg text-muted-foreground">
              Roles, not titles. Seats rotate every semester so TechSpace outlives any one generation.
            </p>
          </div>
          <ButtonLink href="/apply" variant="ghost">
            Apply for a seat
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {council
            .filter((role) => role.title !== "Founder")
            .map((role) => (
              <article key={role.title} className="rounded-2xl border border-border bg-card p-6">
                <p className="eyebrow text-[12px] text-brand">{role.title}</p>
                <p className="mt-2 text-lg font-semibold">{role.holder ?? "Seat open"}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{role.responsibility}</p>
              </article>
            ))}
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
