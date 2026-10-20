"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { applicationTracks } from "@/lib/community";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const field =
  "mt-2 w-full rounded-lg border border-input bg-surface px-3.5 py-2.5 text-sm text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-primary focus:ring-2 focus:ring-primary/30";

/**
 * The application form. The site is static, so submitting opens the applicant's email
 * app with the answers filled in, addressed to the TechSpace inbox. Swap `buildMailto`
 * for a POST to a form service or API when one exists.
 */
export function ApplyForm() {
  const [sent, setSent] = useState(false);
  const recipient = siteConfig.links.email.replace(/^mailto:/, "");

  function buildMailto(data: FormData): string {
    const track = applicationTracks.find((t) => t.value === data.get("track"))?.label ?? "";
    const lines = [
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Programme & year: ${data.get("programme")}`,
      `Track: ${track}`,
      "",
      "What have you built (links welcome)?",
      String(data.get("built") || "—"),
      "",
      "What problem would you like to build a product for?",
      String(data.get("problem") || "—"),
      "",
      `Hours per week: ${data.get("hours")}`,
      "",
      "I have read the TechSpace manifesto and agree to its commitments.",
    ];
    const subject = `TechSpace application — ${data.get("name")}`;
    return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  }

  return (
    <form
      className="space-y-6"
      onSubmit={(event) => {
        event.preventDefault();
        window.location.href = buildMailto(new FormData(event.currentTarget));
        setSent(true);
      }}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="block text-sm font-medium text-foreground">
          Full name
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block text-sm font-medium text-foreground">
          Email
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
      </div>

      <label className="block text-sm font-medium text-foreground">
        Programme and year
        <input name="programme" required placeholder="e.g. BEng Computer Engineering, Year 2" className={field} />
      </label>

      <fieldset>
        <legend className="text-sm font-medium text-foreground">Where do you want to start?</legend>
        <div className="mt-3 grid gap-2">
          {applicationTracks.map((track, index) => (
            <label
              key={track.value}
              className="flex cursor-pointer items-center gap-3 rounded-lg border border-border bg-surface px-3.5 py-3 text-sm text-foreground transition has-[:checked]:border-primary has-[:checked]:bg-primary/10"
            >
              <input
                type="radio"
                name="track"
                value={track.value}
                required
                defaultChecked={index === 0}
                className="size-4 accent-[var(--primary)]"
              />
              {track.label}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block text-sm font-medium text-foreground">
        What have you built so far?
        <span className="block text-xs font-normal text-muted-foreground">
          Links to code or demos are great. &quot;Nothing yet&quot; is a fine answer for Learn.
        </span>
        <textarea name="built" rows={3} className={field} />
      </label>

      <label className="block text-sm font-medium text-foreground">
        What problem would you like to build a product for?
        <textarea name="problem" rows={3} className={field} />
      </label>

      <label className="block text-sm font-medium text-foreground">
        Hours you can give each week
        <select name="hours" required className={field} defaultValue="3-5">
          <option value="1-2">1–2 hours</option>
          <option value="3-5">3–5 hours</option>
          <option value="6-10">6–10 hours</option>
          <option value="10+">More than 10 hours</option>
        </select>
      </label>

      <label className="flex items-start gap-3 text-sm text-foreground">
        <input type="checkbox" name="manifesto" required className="mt-0.5 size-4 accent-[var(--primary)]" />
        <span>
          I&apos;ve read the{" "}
          <a href="/manifesto" className="font-medium text-primary hover:text-primary/80">
            manifesto
          </a>{" "}
          and agree to its member commitments.
        </span>
      </label>

      <button
        type="submit"
        className={cn(buttonVariants({ size: "lg" }), "h-11 w-full px-6 bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto")}
      >
        <Send />
        Send application
      </button>

      <p className="text-xs text-muted-foreground" aria-live="polite">
        {sent
          ? `Your email app should have opened with your answers. Press send there — or email them to ${recipient}.`
          : `Submitting opens your email app with your answers addressed to ${recipient}.`}
      </p>
    </form>
  );
}
