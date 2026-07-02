import Link from "next/link";
import { GitBranch, Lock, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { ProjectLinks } from "@/types/content";

interface ProjectActionLinksProps {
  slug: string;
  links: ProjectLinks;
}

/**
 * Architecture and Documentation always resolve to real content — the
 * project's own case-study sections — unless an explicit external URL is
 * supplied. Only Live Demo and GitHub can be genuinely unavailable, in
 * which case they render an honest disabled state rather than a dead link.
 */
export function ProjectActionLinks({ slug, links }: ProjectActionLinksProps) {
  const caseStudyHref = `/projects/${slug}`;
  const architectureHref = links.architecture ?? `${caseStudyHref}#architecture`;
  const documentationHref = links.documentation ?? `${caseStudyHref}#resources`;

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {links.liveDemo ? (
        <Button
          variant="brand"
          size="sm"
          render={
            <a href={links.liveDemo} target="_blank" rel="noopener noreferrer">
              Live Demo
              <Play data-icon="inline-end" aria-hidden />
            </a>
          }
        />
      ) : (
        <button
          type="button"
          disabled
          className="border-border bg-surface text-muted-foreground inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border px-4 text-[0.8rem] font-medium disabled:cursor-not-allowed disabled:opacity-70"
        >
          <Lock className="size-3.5" aria-hidden />
          Live Demo — Coming Soon
        </button>
      )}

      {links.github ? (
        <Button
          variant="outline"
          size="sm"
          render={
            <a href={links.github} target="_blank" rel="noopener noreferrer">
              GitHub Repository
              <GitBranch data-icon="inline-end" aria-hidden />
            </a>
          }
        />
      ) : (
        <button
          type="button"
          disabled
          className="border-border bg-surface text-muted-foreground inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border px-4 text-[0.8rem] font-medium disabled:cursor-not-allowed disabled:opacity-70"
        >
          <Lock className="size-3.5" aria-hidden />
          GitHub — Available on Request
        </button>
      )}

      <Button
        variant="outline"
        size="sm"
        render={<Link href={caseStudyHref}>Case Study</Link>}
      />

      <Button
        variant="ghost"
        size="sm"
        render={<Link href={architectureHref}>Architecture</Link>}
      />

      <Button
        variant="ghost"
        size="sm"
        render={<Link href={documentationHref}>Documentation</Link>}
      />
    </div>
  );
}
