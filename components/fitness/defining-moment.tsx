import { ShieldAlert } from "lucide-react";

import { Callout } from "@/components/common/callout";
import { SectionHeader } from "@/components/common/section-header";

export function DefiningMoment() {
  return (
    <section id="story" className="border-border scroll-mt-24 border-t py-16 sm:py-20">
      <div className="container-executive flex flex-col gap-10">
        <SectionHeader
          eyebrow="The Defining Moment"
          title="A decline letter changed how I think about discipline"
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 flex flex-col gap-4">
            <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
              At 125kg, I applied for a term life insurance policy — a routine
              financial decision, nothing more. The application came back declined
              on medical grounds. Not a warning, not a suggestion. A clinical,
              unambiguous data point from a party with no emotional stake in the
              outcome: my weight was a measurable risk.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
              That kind of feedback is hard to rationalize away. There was no
              vague sense that I &ldquo;should probably eat better&rdquo; — there
              was a number, a decision, and a consequence. It became the trigger
              for a 10-month transformation that took me from 125kg to 85kg, and
              for a training discipline that has held for four-plus years since.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed sm:text-base">
              What makes this relevant beyond the personal is the pattern it set:
              a clear, external signal of risk, a decision to respond with a
              structured plan rather than a reaction, and the discipline to sustain
              that plan well past the point where the crisis had passed. That is
              the same pattern I now apply to every high-stakes operational
              decision I lead.
            </p>
          </div>

          <Callout variant="idea" title="Why this matters beyond fitness" className="h-fit">
            The transformation itself isn&apos;t the lesson. The lesson is that
            structured, sustained discipline reliably closes the gap between
            where you are and where you need to be — whether the target is a
            weight on a scale or a KPI on a dashboard.
          </Callout>
        </div>

        <div className="border-border bg-surface flex items-center gap-3 rounded-2xl border px-5 py-4 text-sm">
          <ShieldAlert className="text-brand size-4 shrink-0" aria-hidden />
          Every figure on this page reflects a real, personal transformation —
          nothing here is generalized or exaggerated for effect.
        </div>
      </div>
    </section>
  );
}
