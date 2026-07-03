import { ArrowRight } from "lucide-react";

import { SectionHeader } from "@/components/common/section-header";
import { fitnessLeadershipLessons } from "@/content/fitness/leadership-lessons";

export function LeadershipLessons() {
  return (
    <section id="lessons" className="border-border scroll-mt-24 border-t py-16 sm:py-20">
      <div className="container-executive flex flex-col gap-10">
        <SectionHeader
          eyebrow="Leadership Lessons from Fitness"
          title="The same discipline, applied at work"
          description="Five parallels between what it took to transform my health and what it takes to lead an organization through change."
        />
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {fitnessLeadershipLessons.map((lesson) => {
            const Icon = lesson.icon;
            return (
              <div
                key={lesson.fitnessPrinciple}
                className="border-border bg-card shadow-subtle flex flex-col gap-4 rounded-2xl border p-6"
              >
                <span className="bg-brand-muted text-brand flex size-10 items-center justify-center rounded-xl">
                  <Icon className="size-5" aria-hidden />
                </span>
                <div className="flex flex-wrap items-center gap-2 text-sm font-semibold tracking-tight">
                  <span>{lesson.fitnessPrinciple}</span>
                  <ArrowRight className="text-brand size-3.5 shrink-0" aria-hidden />
                  <span className="text-brand">{lesson.leadershipParallel}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {lesson.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
