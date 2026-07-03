import { CheckCircle2 } from "lucide-react";

import { SectionHeader } from "@/components/common/section-header";
import { skillGroups } from "@/content/recruiters/skills";

export function SkillsMatrix() {
  return (
    <section id="skills" className="border-border scroll-mt-24 border-t py-16 sm:py-20">
      <div className="container-executive flex flex-col gap-10">
        <SectionHeader eyebrow="Skills Matrix" title="Core competencies at a glance" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group) => {
            const Icon = group.icon;
            return (
              <div
                key={group.category}
                className="border-border bg-card shadow-subtle flex flex-col gap-4 rounded-2xl border p-6"
              >
                <span className="bg-brand-muted text-brand flex size-10 items-center justify-center rounded-xl">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="text-sm font-semibold tracking-tight">{group.category}</h3>
                <ul className="flex flex-col gap-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="text-muted-foreground flex gap-2 text-sm">
                      <CheckCircle2 className="text-brand mt-0.5 size-3.5 shrink-0" aria-hidden />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
