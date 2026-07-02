import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Tag } from "@/components/common/tag";
import { caseStudies } from "@/content/projects";

export function FeaturedAIProjects() {
  const featured = caseStudies.slice(0, 3);

  return (
    <section className="border-border border-t py-16 sm:py-20">
      <div className="container-executive flex flex-col gap-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="flex flex-col gap-2">
            <span className="text-brand text-label font-semibold tracking-[var(--text-label--letter-spacing)] uppercase">
              AI Projects Portfolio
            </span>
            <h2 className="text-title font-semibold tracking-[var(--text-title--letter-spacing)]">
              Live AI platforms, not slideware
            </h2>
          </div>
          <Link
            href="/ai-labs/projects"
            className="text-brand group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold"
          >
            View all AI projects
            <ArrowRight className="ease-out-quart size-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {featured.map((study) => {
            const Icon = study.icon;
            return (
              <div
                key={study.slug}
                className="group border-border bg-card shadow-subtle hover:shadow-panel flex flex-col gap-4 rounded-2xl border p-6 transition-shadow"
              >
                <span className="bg-brand-muted text-brand flex size-10 items-center justify-center rounded-xl">
                  <Icon className="size-5" aria-hidden />
                </span>
                <Badge variant="outline" className="w-fit">
                  {study.category}
                </Badge>
                <h3 className="text-sm font-semibold tracking-tight">{study.title}</h3>
                <p className="text-muted-foreground line-clamp-2 text-xs leading-relaxed">
                  {study.tagline}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {study.aiTechnologies.slice(0, 2).map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
                <div className="mt-auto flex items-center gap-3 pt-1">
                  {study.links.liveDemo ? (
                    <a
                      href={study.links.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand inline-flex items-center gap-1.5 text-xs font-semibold"
                    >
                      <Play className="size-3.5" aria-hidden />
                      Live Demo
                    </a>
                  ) : null}
                  <Link
                    href={`/projects/${study.slug}`}
                    className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-xs font-semibold"
                  >
                    Case Study
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
