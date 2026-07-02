import { ProjectCard } from "@/components/projects/project-card";
import type { CaseStudy } from "@/types/project";

export function RelatedProjects({ studies }: { studies: CaseStudy[] }) {
  if (studies.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {studies.map((study, i) => (
        <ProjectCard key={study.slug} study={study} index={i} />
      ))}
    </div>
  );
}
