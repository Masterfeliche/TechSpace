import type { Metadata } from "next";
import Link from "next/link";
import { ApplyForm } from "@/components/apply/apply-form";
import { announcement, applicationTimeline } from "@/lib/community";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Apply",
  description: "Apply to TechSpace: join a product team, mentor, or partner with DIT's builder community.",
  openGraph: {
    title: `Apply | ${siteConfig.name}`,
    description: "Apply to TechSpace at DIT.",
    url: `${siteConfig.url}/apply`,
  },
};

const FAQ = [
  {
    q: "Do I need to know how to code?",
    a: "Not for the Learn layer: it's open to every DIT student, no application needed. The Build cohort expects you to have built something small, even a class project you finished on your own.",
  },
  {
    q: "Who owns what we build?",
    a: "Teams own their work, and code is public by default unless there's a real reason not to. That's one of the member commitments in the manifesto.",
  },
  {
    q: "What happens on a product team?",
    a: "You join a team of 4–6 with a mentor, ship to real users, and show something working at Demo Day every Friday.",
  },
  {
    q: "I'm not accepted this time. What now?",
    a: "Keep building in the Learn layer and reapply next cohort. Show us what you shipped since.",
  },
];

export default function ApplyPage() {
  return (
    <main id="main" className="pb-0">
      <section className="mx-auto max-w-[1200px] section-pad pt-20 pb-14">
        {announcement ? <p className="eyebrow mb-5">{announcement.label} · Build cohort</p> : null}
        <h1 className="max-w-[900px] text-[clamp(44px,6vw,76px)] font-semibold leading-none tracking-[-0.04em]">Apply to TechSpace</h1>
        <p className="mt-5 max-w-[620px] text-xl leading-relaxed text-muted-foreground">
          We look at what you&apos;ve built and what you want to build, not your grades. It takes about ten minutes.
        </p>
      </section>

      <section className="mx-auto flex max-w-[1200px] flex-wrap items-start gap-14 section-pad pb-24">
        <div className="w-full max-w-[420px] flex-[1_1_320px]">
          <p className="eyebrow mb-5">Timeline</p>
          <ol className="pl-1.5">
            {applicationTimeline.map((step, i) => (
              <li
                key={step.step}
                className={cn(
                  "relative border-l-2 pb-7 pl-7",
                  i === applicationTimeline.length - 1 ? "border-transparent pb-0" : "border-border",
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute top-1 -left-[7px] size-3 rounded-full border-2",
                    i === 0 ? "border-primary bg-primary" : "border-foreground bg-background",
                  )}
                />
                <p className="font-semibold">{step.step}</p>
                <p className="mt-0.5 font-mono text-[13px] text-muted-foreground">{step.date ?? "To be announced"}</p>
              </li>
            ))}
          </ol>

          <div className="mt-12 rounded-2xl bg-surface p-7">
            <p className="eyebrow mb-3.5">What we look for</p>
            <ul className="list-disc space-y-1.5 pl-5 leading-relaxed text-[#292524] marker:text-primary">
              <li>You&apos;ve built something, anything, or you&apos;re hungry to.</li>
              <li>You can give a steady few hours every week.</li>
              <li>You want to ship to real users, not just learn.</li>
              <li>You&apos;ll teach what you learn to the next builder.</li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              Never written code? Start in the open{" "}
              <Link href="/#programs" className="font-semibold underline underline-offset-2 hover:text-primary">
                Learn layer
              </Link>
              . No application needed.
            </p>
          </div>
        </div>

        <div className="min-w-0 flex-[999_1_520px]">
          <ApplyForm />
        </div>
      </section>

      <section className="bg-surface py-[88px]">
        <div className="mx-auto max-w-[860px] section-pad">
          <h2 className="mb-6 text-4xl font-semibold tracking-[-0.025em]">Frequently asked</h2>
          {FAQ.map((item, i) => (
            <details key={item.q} open={i === 0} className="group border-t border-border-strong py-5 last:border-b">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {item.q}
                <span aria-hidden="true" className="text-2xl font-normal text-muted-foreground transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-2.5 leading-[1.7] text-ink-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
