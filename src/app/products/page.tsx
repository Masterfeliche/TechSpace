import type { Metadata } from "next";
import { ProductDirectory } from "@/components/products/directory";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Products",
  description: "Products built by TechSpace teams at DIT: live, in progress and looking for builders.",
  openGraph: {
    title: `Products | ${siteConfig.name}`,
    description: "Products built by TechSpace teams at DIT.",
    url: `${siteConfig.url}/products`,
  },
};

export default function ProductsPage() {
  return (
    <main id="main" className="mx-auto w-full max-w-[1200px] section-pad pt-16 pb-24 sm:pt-[72px]">
      <h1 className="text-[clamp(40px,5vw,64px)] font-semibold leading-[1.02] tracking-[-0.035em]">
        Products built at TechSpace
      </h1>
      <p className="mt-4 max-w-[640px] text-lg text-muted-foreground">
        Every product has a team, a public repo, a live URL and one metric it owns. Recruiting teams are looking for builders now.
      </p>
      <div className="mt-10">
        <ProductDirectory />
      </div>
    </main>
  );
}
