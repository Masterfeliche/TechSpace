import Link from "next/link";
import { Mail } from "lucide-react";
import { Container } from "@/components/shared/container";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/shared/icons";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-heading text-xl font-bold tracking-tight">
              <span className="text-primary">TechSpace</span>
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
              A student-led engineering laboratory at the Dar es Salaam Institute
              of Technology. We build software engineers first — then AI
              innovators.
            </p>
            <a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              Join the WhatsApp community →
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Quick Links</p>
            <ul className="mt-4 space-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Resources</p>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <GitHubIcon className="size-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <LinkedInIcon className="size-4" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <InstagramIcon className="size-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.links.email}
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail className="size-4" />
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Dar es Salaam Institute of Technology · Tanzania</p>
        </div>
      </Container>
    </footer>
  );
}
