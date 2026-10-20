import Link from "next/link";
import { siteConfig } from "@/lib/site";

const COLUMNS = [
  {
    title: "Programs",
    links: [
      { label: "Learn", href: "/#programs" },
      { label: "Build", href: "/#programs" },
      { label: "Launch", href: "/#programs" },
      { label: "Apply", href: "/apply" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Products", href: "/products" },
      { label: "Events", href: "/events" },
      { label: "People", href: "/#people" },
      { label: "Library", href: "/manifesto" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "GitHub", href: siteConfig.links.github },
      { label: "LinkedIn", href: siteConfig.links.linkedin },
      { label: "Instagram", href: siteConfig.links.instagram },
      { label: "WhatsApp", href: siteConfig.links.whatsapp },
      { label: "Email", href: siteConfig.links.email },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-[1200px] gap-10 section-pad pt-16 pb-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <p className="text-xl font-bold tracking-tight">TechSpace</p>
          <p className="mt-2 text-[22px] font-semibold tracking-tight">Build things people use.</p>
          <p className="mt-3 text-muted-foreground">Dar es Salaam Institute of Technology · Tanzania</p>
        </div>
        {COLUMNS.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <p className="eyebrow mb-3.5">{column.title}</p>
            <ul className="space-y-2">
              {column.links.map((link) => {
                const external = /^(https?:|mailto:)/.test(link.href);
                return (
                  <li key={link.label}>
                    {external ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link href={link.href} className="text-foreground hover:text-primary">
                        {link.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        ))}
      </div>
      <div className="mx-auto max-w-[1200px] section-pad pb-8">
        <p className="border-t border-border pt-5 font-mono text-[13px] text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name} · Made by DIT students
        </p>
      </div>
    </footer>
  );
}
