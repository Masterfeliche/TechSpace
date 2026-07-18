import { ExternalLink } from "lucide-react";
import { Container } from "@/components/shared/container";
import { FadeIn } from "@/components/shared/fade-in";
import { GitHubIcon } from "@/components/shared/icons";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { projects } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Featured Projects"
            title="Software that solves real campus problems."
            description="Members ship products end-to-end — from architecture and implementation to deployment and iteration."
          />
        </FadeIn>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.title} delay={0.05 * index} as="article">
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:border-primary/35 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-heading text-2xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <Badge
                    variant="outline"
                    className={cn(
                      "shrink-0 rounded-lg",
                      project.status === "Live" &&
                        "border-success/40 text-success",
                      project.status === "In Progress" &&
                        "border-primary/40 text-primary",
                      project.status === "Prototype" &&
                        "border-cyan/40 text-cyan"
                    )}
                  >
                    {project.status}
                  </Badge>
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-2 pt-7">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
                  >
                    <GitHubIcon className="size-4" />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className={cn(
                      buttonVariants({ size: "sm" }),
                      "bg-primary text-primary-foreground hover:bg-primary/90"
                    )}
                  >
                    <ExternalLink />
                    Live Demo
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
