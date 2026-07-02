import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Tag } from "@/components/common/tag";
import { cn } from "@/lib/utils";
import type { CaseStudy } from "@/types/project";

const covers = [
  "from-brand/25 via-brand/10 to-transparent",
  "from-gold/25 via-gold/10 to-transparent",
  "from-brand/20 via-gold/10 to-transparent",
  "from-gold/20 via-brand/10 to-transparent",
  "from-brand/25 via-gold/15 to-transparent",
];

export function ProjectCard({ study, index = 0 }: { study: CaseStudy; index?: number }) {
  const Icon = study.icon;
  const cover = covers[index % covers.length];

  return (
    <Link
      href={`/projects/${study.slug}`}
      className="group border-border bg-card shadow-subtle hover:shadow-elevated focus-visible:outline-brand ease-out-quart flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      <div
        className={cn(
          "relative flex h-32 items-center justify-center bg-gradient-to-br",
          cover,
        )}
      >
        <Icon
          className="text-foreground/70 ease-out-quart size-11 transition-transform duration-300 group-hover:scale-110"
          aria-hidden
          strokeWidth={1.25}
        />
        <Badge variant="outline" className="bg-card absolute top-3 left-3">
          {study.status}
        </Badge>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center justify-between gap-2">
          <span className="text-brand text-xs font-semibold tracking-wide uppercase">
            {study.category}
          </span>
          <span className="text-muted-foreground inline-flex shrink-0 items-center gap-1 text-xs">
            <Clock className="size-3.5" aria-hidden />
            {study.readingTime}
          </span>
        </div>

        <h3 className="text-base font-semibold tracking-tight">{study.title}</h3>
        <p className="text-muted-foreground line-clamp-2 text-sm leading-relaxed">
          {study.tagline}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {study.techStack.slice(0, 3).map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-2 pt-2">
          <span className="text-muted-foreground text-xs">{study.businessDomain}</span>
          <span className="text-brand group/link inline-flex shrink-0 items-center gap-1 text-sm font-semibold">
            View Case Study
            <ArrowUpRight
              className="ease-out-quart size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
