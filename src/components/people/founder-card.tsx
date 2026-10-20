import Image from "next/image";
import { founders } from "@/lib/community";
import { cn } from "@/lib/utils";

type Founder = (typeof founders)[number];

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/** A founder: real photo when set, otherwise an orange initials tile (never stock photos). */
export function FounderCard({ founder, compact = false }: { founder: Founder; compact?: boolean }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card">
      <div className={cn("relative w-full", compact ? "aspect-[16/9]" : "aspect-[4/3]")}>
        {founder.image ? (
          <Image src={founder.image} alt={founder.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-primary" aria-hidden="true">
            <span className="text-[clamp(56px,9vw,104px)] font-bold tracking-[-0.04em] text-white">{initials(founder.name)}</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="eyebrow text-[12px] text-brand">{founder.title}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight">{founder.name}</h3>
        <p className="mt-1 font-medium text-ink-muted">{founder.focus}</p>
        {!compact ? <p className="mt-4 leading-relaxed text-muted-foreground">{founder.bio}</p> : null}
        {founder.links.length > 0 ? (
          <div className="mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-5">
            {founder.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="text-[15px] font-semibold underline decoration-border-strong underline-offset-[3px] hover:text-primary hover:decoration-primary"
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
