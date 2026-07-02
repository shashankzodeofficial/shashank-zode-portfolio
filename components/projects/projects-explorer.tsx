"use client";

import * as React from "react";
import { RotateCcw, Search } from "lucide-react";

import { ProjectCard } from "@/components/projects/project-card";
import { Button } from "@/components/ui/button";
import {
  caseStudies,
  projectCategories,
  projectDomains,
  projectTechnologies,
} from "@/content/projects";
import { cn } from "@/lib/utils";

/**
 * Imports its data directly rather than receiving it via props — the
 * CaseStudy objects contain function-valued icon fields that can't cross
 * the Server-to-Client boundary. See CaseStudyHero for the same pattern.
 */
export function ProjectsExplorer() {
  const studies = caseStudies;
  const categories = projectCategories;
  const technologies = projectTechnologies;
  const domains = projectDomains;
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState<string | null>(null);
  const [technology, setTechnology] = React.useState("");
  const [domain, setDomain] = React.useState("");

  const hasActiveFilters = Boolean(query || category || technology || domain);

  const filtered = studies.filter((study) => {
    const matchesQuery =
      query.trim().length === 0 ||
      [study.title, study.tagline, ...study.techStack]
        .join(" ")
        .toLowerCase()
        .includes(query.trim().toLowerCase());
    const matchesCategory = !category || study.category === category;
    const matchesTechnology = !technology || study.techStack.includes(technology);
    const matchesDomain = !domain || study.businessDomain === domain;
    return matchesQuery && matchesCategory && matchesTechnology && matchesDomain;
  });

  const resetFilters = () => {
    setQuery("");
    setCategory(null);
    setTechnology("");
    setDomain("");
  };

  return (
    <section
      id="all-projects"
      className="border-border scroll-mt-24 border-t py-16 sm:py-20"
    >
      <div className="container-executive flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="relative">
            <Search
              className="text-muted-foreground pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2"
              aria-hidden
            />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects by name, summary, or technology…"
              aria-label="Search projects"
              className="border-border bg-card focus-visible:outline-brand w-full rounded-full border py-3 pr-4 pl-11 text-sm focus-visible:outline-2 focus-visible:outline-offset-2"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
              Category
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(category === cat ? null : cat)}
                aria-pressed={category === cat}
                className={cn(
                  "rounded-full border px-3 py-1 text-xs font-medium transition-colors",
                  category === cat
                    ? "border-brand bg-brand text-brand-foreground"
                    : "border-border bg-card text-muted-foreground hover:text-foreground",
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <label className="flex items-center gap-2 text-xs">
              <span className="text-muted-foreground font-semibold tracking-wide uppercase">
                Technology
              </span>
              <select
                value={technology}
                onChange={(e) => setTechnology(e.target.value)}
                className="border-border bg-card focus-visible:outline-brand rounded-full border px-3 py-1.5 text-xs focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <option value="">All</option>
                {technologies.map((tech) => (
                  <option key={tech} value={tech}>
                    {tech}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex items-center gap-2 text-xs">
              <span className="text-muted-foreground font-semibold tracking-wide uppercase">
                Business Domain
              </span>
              <select
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="border-border bg-card focus-visible:outline-brand rounded-full border px-3 py-1.5 text-xs focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <option value="">All</option>
                {domains.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </label>

            {hasActiveFilters ? (
              <Button variant="ghost" size="sm" onClick={resetFilters}>
                Reset filters
                <RotateCcw data-icon="inline-end" aria-hidden className="size-3.5" />
              </Button>
            ) : null}
          </div>
        </div>

        <p className="text-muted-foreground text-sm" role="status">
          {filtered.length} {filtered.length === 1 ? "project" : "projects"}
        </p>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((study, i) => (
              <ProjectCard key={study.slug} study={study} index={i} />
            ))}
          </div>
        ) : (
          <div className="border-border bg-surface flex flex-col items-center gap-3 rounded-2xl border border-dashed py-16 text-center">
            <p className="text-sm font-medium">No projects match those filters.</p>
            <Button variant="outline" size="sm" onClick={resetFilters}>
              Reset filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
