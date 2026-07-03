import { SectionHeader } from "@/components/common/section-header";
import { fitnessMilestones } from "@/content/fitness/milestones";

export function KeyMilestones() {
  return (
    <section id="milestones" className="border-border scroll-mt-24 border-t py-16 sm:py-20">
      <div className="container-executive flex flex-col gap-10">
        <SectionHeader eyebrow="Key Milestones" title="What the discipline actually produced" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {fitnessMilestones.map((milestone) => {
            const Icon = milestone.icon;
            return (
              <div
                key={milestone.label}
                className="border-border bg-card shadow-subtle flex flex-col gap-3 rounded-2xl border p-6"
              >
                <span className="bg-brand-muted text-brand flex size-10 items-center justify-center rounded-xl">
                  <Icon className="size-5" aria-hidden />
                </span>
                <span className="text-2xl font-semibold tracking-tight">{milestone.value}</span>
                <span className="text-sm font-medium">{milestone.label}</span>
                <span className="text-muted-foreground text-xs leading-relaxed">
                  {milestone.description}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
