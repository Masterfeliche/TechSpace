import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { GitHubIcon } from "@/components/shared/icons";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { products, type ProductStatus } from "@/lib/community";
import { cn } from "@/lib/utils";

const STATUS_STYLE: Record<ProductStatus, string> = {
  Live: "border-success/40 text-success",
  Building: "border-primary/40 text-primary",
  Recruiting: "border-cyan/40 text-cyan",
  Idea: "border-border text-muted-foreground",
};

export function ProductsGrid({
  preview = false,
  className,
}: {
  /** On the home page: a heading plus a link to /products. */
  preview?: boolean;
  className?: string;
}) {
  return (
    <section id="products" className={cn("relative scroll-mt-20 border-t border-border/60 py-24 sm:py-28", className)}>
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Products"
            title="We measure ourselves by what's live."
            description="Every product has a team, a public repo, a live URL and one metric it owns. Products that need builders are marked Recruiting."
          />
        </FadeIn>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {products.map((product, index) => (
            <FadeIn key={product.name} delay={0.05 * index} as="article" className={cn(product.flagship && "lg:col-span-2")}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-2xl border bg-card p-7 sm:p-8",
                  product.flagship ? "border-primary/40" : "border-border",
                )}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {product.flagship ? (
                      <p className="mb-2 text-xs font-medium tracking-[0.16em] text-cyan uppercase">
                        Flagship
                      </p>
                    ) : null}
                    <h3 className="font-heading text-2xl font-semibold text-foreground">
                      {product.name}
                    </h3>
                  </div>
                  <Badge variant="outline" className={cn("shrink-0 rounded-lg", STATUS_STYLE[product.status])}>
                    {product.status}
                  </Badge>
                </div>

                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {product.problem}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {product.stack.map((tech) => (
                    <span key={tech} className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                  {product.metric ? (
                    <span className="rounded-md border border-primary/30 px-2.5 py-1 text-xs text-primary">
                      Metric: {product.metric}
                    </span>
                  ) : null}
                </div>

                <div className="mt-auto flex flex-wrap gap-2 pt-7">
                  {product.url ? (
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(buttonVariants({ size: "sm" }), "bg-primary text-primary-foreground hover:bg-primary/90")}
                    >
                      <ExternalLink />
                      Open {product.name}
                    </a>
                  ) : null}
                  {product.repo ? (
                    <a
                      href={product.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                    >
                      <GitHubIcon className="size-4" />
                      Code
                    </a>
                  ) : null}
                  {product.status === "Recruiting" || product.status === "Idea" ? (
                    <Link href="/join" className={cn(buttonVariants({ variant: "outline", size: "sm" }))}>
                      {product.status === "Recruiting" ? "Join this team" : "Pitch to build it"}
                    </Link>
                  ) : null}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {preview ? (
          <FadeIn delay={0.2}>
            <Link href="/products" className="mt-8 inline-flex text-sm font-medium text-primary hover:text-primary/80">
              See all products and how a product moves from idea to launch →
            </Link>
          </FadeIn>
        ) : null}
      </Container>
    </section>
  );
}
