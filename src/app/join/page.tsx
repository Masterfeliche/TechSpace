import type { Metadata } from "next";
import { ApplyForm } from "@/components/community/apply-form";
import { Container } from "@/components/shared/container";
import { layers } from "@/lib/community";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Join",
  description: "Apply to TechSpace — learn, build products with a team, mentor, or partner with us.",
  openGraph: {
    title: `Join | ${siteConfig.name}`,
    description: "Apply to TechSpace at DIT.",
    url: `${siteConfig.url}/join`,
  },
};

export default function JoinPage() {
  return (
    <main id="main" className="pt-28 pb-24 sm:pt-32">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-cyan uppercase">Join TechSpace</p>
          <h1 className="mt-5 font-heading text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-balance">
            Come build with us.
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Anyone at DIT can start in the Learn layer. Product teams and mentoring are by
            application — we look at what you&apos;ve built and what you want to build, not
            your grades.
          </p>

          <ol className="mt-10 space-y-5">
            {layers.map((layer, index) => (
              <li key={layer.name} className="flex gap-4">
                <span className="font-mono text-sm text-primary">0{index + 1}</span>
                <div>
                  <p className="font-heading text-lg font-semibold text-foreground">
                    {layer.name} <span className="text-sm font-normal text-muted-foreground">· {layer.tag}</span>
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{layer.summary}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-10 text-sm text-muted-foreground">
            Just want to follow along first?{" "}
            <a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:text-primary/80"
            >
              Join the WhatsApp community →
            </a>
          </p>
        </div>

        <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
          <h2 className="font-heading text-2xl font-semibold text-foreground">Application</h2>
          <p className="mt-1 text-sm text-muted-foreground">Takes about five minutes.</p>
          <div className="mt-8">
            <ApplyForm />
          </div>
        </div>
      </Container>
    </main>
  );
}
