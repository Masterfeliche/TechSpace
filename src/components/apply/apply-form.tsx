"use client";

import { useState } from "react";
import { applicationTracks } from "@/lib/community";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const input =
  "mt-2 block w-full rounded-[10px] border border-border-strong bg-card px-3.5 py-3 text-base font-normal text-foreground outline-none transition placeholder:text-muted-foreground/80 focus:border-brand focus:ring-2 focus:ring-brand/25";
const label = "block text-[15px] font-semibold text-foreground";

/**
 * The application form. The site is static, so submitting opens the applicant's email
 * app with the answers filled in, addressed to the TechSpace inbox. Swap `buildMailto`
 * for a POST to a form service or API when one exists.
 */
export function ApplyForm() {
  const [sent, setSent] = useState(false);
  const [track, setTrack] = useState<string>("build");
  const recipient = siteConfig.links.email.replace(/^mailto:/, "");

  function buildMailto(data: FormData): string {
    const chosen = applicationTracks.find((t) => t.value === data.get("track"))?.label ?? "";
    const lines = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Programme & year: ${data.get("programme")}`,
      `Track: ${chosen}`,
      "",
      "The most impressive thing I've built:",
      String(data.get("built") || "-"),
      "",
      "A problem I'd build a product for, and who has it:",
      String(data.get("problem") || "-"),
      "",
      `Hours per week: ${data.get("hours")}`,
      "",
      "I have read the TechSpace manifesto and agree to its member commitments.",
    ];
    const subject = `TechSpace application: ${data.get("name")}`;
    return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  }

  return (
    <form
      className="flex flex-col gap-6 rounded-[20px] border border-border bg-card p-6 sm:p-9"
      onSubmit={(event) => {
        event.preventDefault();
        window.location.href = buildMailto(new FormData(event.currentTarget));
        setSent(true);
      }}
    >
      <p className="text-[22px] font-semibold tracking-tight">Your application</p>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className={label}>
          Full name
          <input name="name" required autoComplete="name" className={input} />
        </label>
        <label className={label}>
          Email
          <input name="email" type="email" required autoComplete="email" className={input} />
        </label>
      </div>

      <label className={label}>
        Programme and year
        <input name="programme" required placeholder="e.g. BEng Computer Engineering, Year 2" className={input} />
      </label>

      <fieldset>
        <legend className={label}>I want to</legend>
        <div className="mt-2.5 grid gap-2.5 sm:grid-cols-2">
          {applicationTracks.map((t) => {
            const [name, desc] = t.label.split(" — ");
            return (
              <label
                key={t.value}
                className={cn(
                  "flex cursor-pointer items-start gap-2.5 rounded-xl border p-3.5 text-[15px] transition-colors",
                  track === t.value ? "border-[1.5px] border-foreground" : "border-border-strong hover:border-foreground",
                )}
              >
                <input
                  type="radio"
                  name="track"
                  value={t.value}
                  checked={track === t.value}
                  onChange={() => setTrack(t.value)}
                  className="mt-1 accent-[var(--primary)]"
                />
                <span>
                  <strong className="block">{name}</strong>
                  <span className="text-muted-foreground">{desc}</span>
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <label className={label}>
        Tell us about the most impressive thing you&apos;ve built.
        <span className="mt-1 block text-sm font-normal text-muted-foreground">
          Links to code or a demo help. Small is fine; we care that it works. &quot;Nothing yet&quot; is a fine answer for Learn.
        </span>
        <textarea name="built" rows={4} className={input} />
      </label>

      <label className={label}>
        What problem would you build a product for, and who has it?
        <textarea name="problem" rows={3} className={input} />
      </label>

      <label className={label}>
        Hours per week you can commit
        <select name="hours" required defaultValue="3-5" className={input}>
          <option value="1-2">1–2 hours</option>
          <option value="3-5">3–5 hours</option>
          <option value="6-10">6–10 hours</option>
          <option value="10+">More than 10 hours</option>
        </select>
      </label>

      <label className="flex items-start gap-2.5 text-[15px]">
        <input type="checkbox" required className="mt-1 size-4 accent-[var(--primary)]" />
        <span>
          I&apos;ve read the{" "}
          <a href="/manifesto" className="font-semibold underline underline-offset-2 hover:text-primary">
            manifesto
          </a>{" "}
          and agree to the member commitments.
        </span>
      </label>

      <div>
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-[17px] font-bold text-primary-foreground transition-colors hover:bg-[#e65c00]"
        >
          Send application →
        </button>
        <p className="mt-3 text-sm text-muted-foreground" aria-live="polite">
          {sent
            ? `Your email app should have opened with your answers. Press send there, or email them to ${recipient}.`
            : `Submitting opens your email app with your answers addressed to ${recipient}.`}
        </p>
      </div>
    </form>
  );
}
