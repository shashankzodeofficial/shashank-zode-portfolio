import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Tag } from "@/components/common/tag";
import { cn } from "@/lib/utils";
import type { FeaturedProject } from "@/types";

const covers = [
  "from-brand/25 via-brand/10 to-transparent",
  "from-gold/25 via-gold/10 to-transparent",
  "from-brand/20 via-gold/10 to-transparent",
  "from-gold/20 via-brand/10 to-transparent",
  "from-brand/25 via-gold/15 to-transparent",
];

export function ProjectCard({
  project,
  index,
}: {
  project: FeaturedProject;
  index: number;
}) {
  const Icon = project.icon;
  const cover = covers[index % covers.length];

  return (
    <div className="group border-border bg-card shadow-subtle hover:shadow-elevated ease-out-quart flex h-full flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1">
      <div
        className={cn(
          "relative flex h-36 items-center justify-center bg-gradient-to-br",
          cover,
        )}
      >
        <Icon
          className="text-foreground/70 ease-out-quart size-12 transition-transform duration-300 group-hover:scale-110"
          aria-hidden
          strokeWidth={1.25}
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-col gap-1.5">
          <h3 className="text-base font-semibold tracking-tight">{project.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.summary}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.badges.map((badge) => (
            <Tag key={badge}>{badge}</Tag>
          ))}
        </div>

        <p className="text-foreground text-xs leading-relaxed font-medium">
          {project.value}
        </p>

        <Link
          href={`/projects/${project.slug}`}
          className="text-brand group/link mt-auto inline-flex w-fit items-center gap-1.5 text-sm font-semibold"
        >
          View Case Study
          <ArrowUpRight
            className="ease-out-quart size-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
            aria-hidden
          />
        </Link>
      </div>
    </div>
  );
}
