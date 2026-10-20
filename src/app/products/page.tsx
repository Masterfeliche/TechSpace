import type { Metadata } from "next";
import { ProductsGrid } from "@/components/community/products-grid";
import { JoinCta } from "@/components/sections/join-cta";
import { Container } from "@/components/shared/container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description: "Products built by TechSpace teams at DIT — live, in progress and looking for builders.",
  openGraph: {
    title: `Products | ${siteConfig.name}`,
    description: "Products built by TechSpace teams at DIT.",
    url: `${siteConfig.url}/products`,
  },
};

const STAGES = [
  { name: "Idea", body: "Someone pitches a real problem at a hackathon or open house." },
  { name: "Recruiting", body: "The council approves it; a lead forms a team of 4–6 with a mentor." },
  { name: "Building", body: "The team demos every Friday and ships to a first group of real users." },
  { name: "Live", body: "It has a URL, a public repo, users and a metric the team reports on." },
  { name: "Launch", body: "With traction it moves to the Launch layer: pilots, partners, funding." },
];

export default function ProductsPage() {
  return (
    <main id="main" className="pt-16">
      <ProductsGrid className="border-t-0" />
      <section aria-labelledby="lifecycle" className="border-t border-border/60 py-20">
        <Container>
          <h2 id="lifecycle" className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
            How a product moves from idea to launch
          </h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {STAGES.map((stage, index) => (
              <li key={stage.name} className="rounded-2xl border border-border bg-card p-5">
                <span className="font-mono text-xs text-cyan">0{index + 1}</span>
                <h3 className="mt-2 font-heading text-lg font-semibold text-foreground">{stage.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{stage.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-muted-foreground">
            We cap active products so each one gets finished. A product that goes quiet for a
            semester is paused and its post-mortem is shared.
          </p>
        </Container>
      </section>
      <JoinCta />
    </main>
  );
}
