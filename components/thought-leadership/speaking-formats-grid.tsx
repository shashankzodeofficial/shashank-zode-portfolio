import { SectionHeader } from "@/components/common/section-header";
import { speakingFormats } from "@/content/thought-leadership/speaking-formats";

export function SpeakingFormatsGrid() {
  return (
    <section id="formats" className="border-border scroll-mt-24 border-t py-16 sm:py-20">
      <div className="container-executive flex flex-col gap-10">
        <SectionHeader eyebrow="Speaking Formats" title="Formats I work well in" />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {speakingFormats.map((format) => {
            const Icon = format.icon;
            return (
              <div
                key={format.title}
                className="border-border bg-card shadow-subtle flex flex-col gap-3 rounded-2xl border p-6"
              >
                <span className="bg-brand-muted text-brand flex size-10 items-center justify-center rounded-xl">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="text-sm font-semibold tracking-tight">{format.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {format.description}
                </p>
                <p className="text-muted-foreground mt-auto text-[0.7rem] font-medium tracking-wide uppercase">
                  Ideal for: {format.idealFor}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
