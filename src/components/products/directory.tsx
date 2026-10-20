"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Tag, ButtonLink } from "@/components/shared/ui";
import { products, type ProductStatus } from "@/lib/community";
import { cn } from "@/lib/utils";

const STATUSES: ProductStatus[] = ["Live", "Building", "Recruiting", "Idea"];
const TONE: Record<ProductStatus, "live" | "brand" | "neutral"> = {
  Live: "live",
  Building: "neutral",
  Recruiting: "brand",
  Idea: "neutral",
};

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/** Searchable, filterable directory of TechSpace products (YC-directory style). */
export function ProductDirectory() {
  const [query, setQuery] = useState("");
  const [statuses, setStatuses] = useState<Set<ProductStatus>>(new Set(STATUSES));

  const counts = useMemo(
    () => Object.fromEntries(STATUSES.map((s) => [s, products.filter((p) => p.status === s).length])) as Record<ProductStatus, number>,
    [],
  );

  const shown = products.filter((p) => {
    const q = query.trim().toLowerCase();
    const matches = !q || [p.name, p.problem, ...p.stack].some((v) => v.toLowerCase().includes(q));
    return matches && statuses.has(p.status);
  });

  function toggle(status: ProductStatus) {
    setStatuses((prev) => {
      const next = new Set(prev);
      if (next.has(status)) next.delete(status);
      else next.add(status);
      return next;
    });
  }

  return (
    <div className="flex flex-wrap items-start gap-12">
      <aside aria-label="Filters" className="w-full max-w-[260px] flex-[1_1_220px]">
        <label htmlFor="product-search" className="sr-only">
          Search products
        </label>
        <input
          id="product-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products"
          className="h-11 w-full rounded-[10px] border border-border-strong bg-card px-3.5 text-[15px] outline-none focus:border-brand focus:ring-2 focus:ring-brand/25"
        />
        <fieldset className="mt-7">
          <legend className="eyebrow mb-2">Status</legend>
          {STATUSES.map((status) => (
            <label key={status} className="flex min-h-9 cursor-pointer items-center gap-2.5 text-[15px]">
              <input
                type="checkbox"
                checked={statuses.has(status)}
                onChange={() => toggle(status)}
                className="size-4 accent-[var(--primary)]"
              />
              {status}
              <span className="ml-auto font-mono text-[13px] text-muted-foreground">{counts[status]}</span>
            </label>
          ))}
        </fieldset>
      </aside>

      <div className="min-w-0 flex-[999_1_560px]">
        <p className="mb-2 font-mono text-[13px] text-muted-foreground" aria-live="polite">
          Showing {shown.length} of {products.length} products
        </p>
        {shown.length === 0 ? (
          <p className="border-t border-border py-10 text-muted-foreground">No products match. Try another search or status.</p>
        ) : (
          <ul>
            {shown.map((p) => (
              <li
                key={p.name}
                className="grid grid-cols-[56px_minmax(0,1fr)] items-start gap-5 border-t border-border py-6 last:border-b sm:grid-cols-[64px_minmax(0,1fr)_auto] sm:items-center"
              >
                <span
                  className={cn(
                    "flex size-14 items-center justify-center rounded-[14px] text-lg font-bold sm:size-16",
                    p.flagship ? "bg-primary text-white" : "border border-border bg-surface text-ink-muted",
                  )}
                  aria-hidden="true"
                >
                  {initials(p.name)}
                </span>
                <div>
                  <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <strong className="text-xl font-semibold">{p.name}</strong>
                    {p.url ? (
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                        {p.url.replace(/^https?:\/\//, "")}
                      </a>
                    ) : null}
                  </p>
                  <p className="mt-1 text-ink-muted">{p.problem}</p>
                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {p.stack.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                    {p.repo ? (
                      <a href={p.repo} target="_blank" rel="noopener noreferrer" className="ml-1 self-center text-sm font-semibold underline decoration-border-strong underline-offset-2 hover:text-primary">
                        Code
                      </a>
                    ) : null}
                  </div>
                </div>
                <div className="col-start-2 sm:col-start-auto">
                  <Tag tone={TONE[p.status]}>{p.status}</Tag>
                </div>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-12 flex flex-wrap items-center justify-between gap-5 rounded-2xl bg-surface p-8">
          <div>
            <p className="text-[22px] font-semibold tracking-tight">Have a problem worth solving?</p>
            <p className="mt-1.5 text-muted-foreground">Pitch it at the next hackathon or open house. The best ideas become product teams.</p>
          </div>
          <ButtonLink href="/apply">Pitch a product →</ButtonLink>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          How a product moves: Idea → Recruiting → Building → Live → Launch.{" "}
          <Link href="/manifesto" className="font-semibold underline underline-offset-2 hover:text-primary">
            Why we work this way
          </Link>
        </p>
      </div>
    </div>
  );
}
