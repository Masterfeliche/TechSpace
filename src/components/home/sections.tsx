import Image from "next/image";
import Link from "next/link";
import { ButtonLink, Tag, textLink } from "@/components/shared/ui";
import {
  council,
  demoDayPhoto,
  essays,
  layers,
  mentors,
  metrics,
  products,
  rhythm,
  voices,
} from "@/lib/community";
import { roadmap, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const wrap = "mx-auto w-full max-w-[1200px] section-pad";

export function Hero() {
  return (
    <section className={cn(wrap, "pt-20 pb-16 sm:pt-28 sm:pb-[72px]")}>
      <p className="eyebrow mb-6">The builder community of the Dar es Salaam Institute of Technology</p>
      <h1 className="max-w-[1000px] text-[clamp(44px,7vw,88px)] font-semibold leading-none tracking-[-0.04em] text-balance">
        TechSpace turns DIT students into builders who ship
        <sup className="align-super text-[0.35em] text-primary">1</sup>.
      </h1>
      <div className="mt-10 flex flex-wrap items-center gap-3">
        <ButtonLink href="/apply">Apply to the Build cohort →</ButtonLink>
        <ButtonLink href="/manifesto" variant="ghost">Read the manifesto</ButtonLink>
      </div>
      <p className="mt-9 font-mono text-[13px] text-muted-foreground">
        ¹ Shipped means live, with real users. Not slides, not a repo nobody ran.
      </p>
    </section>
  );
}

/** "Then / now" proof cards: the flagship product, then a call for the rest. */
export function Proof() {
  const flagship = products.find((p) => p.flagship);
  const recruiting = products.filter((p) => p.status === "Recruiting" || p.status === "Idea");
  return (
    <section className={cn(wrap, "pb-24")}>
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {flagship ? (
          <article className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 lg:col-span-2">
            <div className="grid grid-cols-2 gap-2.5">
              <div>
                <p className="eyebrow mb-2 text-[11px]">Before</p>
                <div className="flex h-40 flex-col justify-end rounded-xl bg-surface p-4">
                  <p className="font-mono text-[13px] text-muted-foreground">TEACHING TIMETABLE.pdf</p>
                  <p className="mt-1 text-2xl font-semibold tracking-tight">160 pages</p>
                  <p className="text-sm text-muted-foreground">Find your class page, then read the grid.</p>
                </div>
              </div>
              <div>
                <p className="eyebrow mb-2 text-[11px] text-brand">Now</p>
                <div className="flex h-40 flex-col justify-end rounded-xl bg-brand-tint p-4">
                  <p className="font-mono text-[13px] text-brand">kairos.deploy.tz</p>
                  <p className="mt-1 text-2xl font-semibold tracking-tight">One tap</p>
                  <p className="text-sm text-ink-muted">What&apos;s on now, what&apos;s next, what moved.</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xl font-semibold tracking-tight">{flagship.name}</p>
              <p className="mt-1 text-muted-foreground">{flagship.problem}</p>
            </div>
            <div className="mt-auto flex flex-wrap items-center gap-2">
              <Tag tone="live">Live</Tag>
              {flagship.url ? (
                <a href={flagship.url} target="_blank" rel="noopener noreferrer" className={cn(textLink, "ml-1 text-[15px]")}>
                  Open {flagship.name} →
                </a>
              ) : null}
            </div>
          </article>
        ) : null}
        <article className="flex flex-col gap-4 rounded-2xl border border-border bg-surface p-6">
          <p className="eyebrow">Building next</p>
          <p className="text-xl font-semibold tracking-tight">
            {recruiting.length} {recruiting.length === 1 ? "product needs" : "products need"} builders
          </p>
          <ul className="space-y-1.5 text-ink-muted">
            {recruiting.map((p) => (
              <li key={p.name}>
                <span className="font-medium text-foreground">{p.name}</span> · {p.status}
              </li>
            ))}
          </ul>
          <Link href="/products" className={cn(textLink, "mt-auto")}>
            See all products →
          </Link>
        </article>
      </div>
    </section>
  );
}

/** "What we measure" — hidden until every metric has a real value. */
export function Numbers() {
  if (metrics.some((m) => !m.value)) return null;
  return (
    <section className="bg-foreground py-[88px] text-white">
      <div className={wrap}>
        <p className="eyebrow mb-8 text-[#a8a29e]">What we measure. Updated every semester.</p>
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label}>
              <p className="text-[56px] font-semibold tracking-[-0.03em]">{m.value}</p>
              <p className="mt-1.5 text-[#d6d3d1]">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Programs() {
  return (
    <section id="programs" className={cn(wrap, "scroll-mt-24 pt-24 pb-24")}>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="h-section max-w-[640px]">
          Open at the bottom.
          <br />
          Earned at the top.
        </h2>
        <p className="max-w-[440px] text-lg leading-relaxed text-muted-foreground">
          Anyone at DIT can start learning. You move up by shipping, not by year of study or title.
        </p>
      </div>
      <div className="mt-14 grid border-t border-foreground md:grid-cols-3">
        {layers.map((layer, i) => (
          <div key={layer.name} className={cn("py-8 md:px-8", i === 0 ? "md:pl-0" : "md:border-l md:border-border")}>
            <p className={cn("font-mono text-sm", i === 2 ? "text-brand" : "text-muted-foreground")}>
              0{i + 1} · {layer.tag}
            </p>
            <h3 className="mt-3 text-[32px] font-semibold tracking-[-0.02em]">{layer.name}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{layer.summary}</p>
            <Link href={i === 1 ? "/apply" : i === 2 ? "/products" : "#roadmap"} className={cn(textLink, "mt-5 inline-block")}>
              {i === 0 ? "The roadmap →" : i === 1 ? "Apply to Build →" : "What's launched →"}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

/** "In builders' words" — real quotes only; hidden while empty. */
export function Voices() {
  if (voices.length === 0) return null;
  return (
    <section className="bg-surface py-24">
      <div className={wrap}>
        <h2 className="h-section">In builders&apos; words</h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {voices.map((v) => (
            <figure key={v.name} className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-7">
              <blockquote className="text-xl leading-normal tracking-[-0.01em]">“{v.quote}”</blockquote>
              <figcaption className="mt-auto">
                <strong className="block font-semibold">{v.name}</strong>
                <span className="text-sm text-muted-foreground">{v.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DemoDay() {
  return (
    <section id="rhythm" className={cn(wrap, "scroll-mt-24 border-t border-border pt-24 pb-24")}>
      <div className="grid items-start gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow mb-4">Every Friday</p>
          <h2 className="h-section">Demo Day is the heartbeat.</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Every team shows something working. Five minutes, no slides required. A community that demos every week stays alive.
          </p>
          {demoDayPhoto ? (
            <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-2xl border border-border">
              <Image src={demoDayPhoto.src} alt={demoDayPhoto.alt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          ) : null}
        </div>
        <div>
          <p className="eyebrow mb-4">The rhythm</p>
          <ul>
            {rhythm.flatMap((block) =>
              block.items.map((item) => (
                <li key={item.title} className="flex justify-between gap-4 border-t border-border py-4 last:border-b">
                  <span className="text-[17px] font-medium">{item.title}</span>
                  <span className="shrink-0 font-mono text-sm text-muted-foreground">{block.cadence}</span>
                </li>
              )),
            )}
          </ul>
          <Link href="/events" className={cn(textLink, "mt-5 inline-block")}>
            All events →
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Mentors and alumni when confirmed; until then, the open leadership seats. */
export function People() {
  return (
    <section id="people" className="scroll-mt-24 border-t border-border py-24">
      <div className={wrap}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="h-section max-w-[680px]">
            {mentors.length > 0 ? "Every mentor shipped something first." : "Roles, not titles. Rotated, not owned."}
          </h2>
          <ButtonLink href="/apply" variant="ghost">
            {mentors.length > 0 ? "Become a mentor" : "Apply for a seat"}
          </ButtonLink>
        </div>
        {mentors.length > 0 ? (
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {mentors.map((m) => (
              <div key={m.name}>
                {m.image ? (
                  <div className="relative aspect-square overflow-hidden rounded-xl bg-surface">
                    <Image src={m.image} alt={m.name} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-cover" />
                  </div>
                ) : null}
                <p className="mt-3 font-semibold">{m.name}</p>
                <p className="text-sm text-muted-foreground">{m.role} · built {m.built}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {council.map((role) => (
              <article key={role.title} className="rounded-2xl border border-border bg-card p-6">
                <p className="eyebrow text-[12px] text-brand">{role.title}</p>
                <p className="mt-2 text-lg font-semibold">{role.holder ?? "Seat open"}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{role.responsibility}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function Library() {
  return (
    <section id="roadmap" className="scroll-mt-24 bg-surface py-24">
      <div className={cn(wrap, "grid gap-14 lg:grid-cols-2")}>
        <div>
          <p className="eyebrow mb-4">Library</p>
          <h2 className="text-4xl font-semibold tracking-[-0.025em]">Essays from the community</h2>
          <ul className="mt-6">
            {essays.map((essay) => (
              <li key={essay.title}>
                <Link href={essay.href} className="flex justify-between gap-4 border-t border-border-strong py-4 text-[17px] font-medium hover:text-primary">
                  <span>{essay.title}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Learn</p>
          <h2 className="text-4xl font-semibold tracking-[-0.025em]">The roadmap</h2>
          <ol className="mt-6">
            {roadmap.map((step, i) => (
              <li key={step.title} className="flex gap-4 border-t border-border-strong py-4 last:border-b">
                <span className={cn("font-mono", i === roadmap.length - 1 ? "text-brand" : "text-muted-foreground")}>0{i + 1}</span>
                <span>
                  <span className="block font-medium">{step.title}</span>
                  <span className="text-sm text-muted-foreground">{step.description}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export function ClosingCta() {
  return (
    <section className={cn(wrap, "py-32 text-center")}>
      <h2 className="mx-auto max-w-[860px] text-[clamp(40px,6vw,72px)] font-semibold leading-[1.02] tracking-[-0.04em] text-balance">
        It&apos;s never too early to start building.
      </h2>
      <p className="mx-auto mt-6 max-w-[560px] text-lg leading-relaxed text-muted-foreground">
        First year, final year, never written code: start in Learn. Already shipped something? Apply to Build.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/apply">Apply to TechSpace →</ButtonLink>
        <ButtonLink href={siteConfig.links.whatsapp} variant="ghost">
          Join the WhatsApp community
        </ButtonLink>
      </div>
    </section>
  );
}
