import { CalendarClock, MapPin, Mic } from "lucide-react";

import { SectionHeader } from "@/components/common/section-header";
import { futureEvents } from "@/content/thought-leadership/future-events";

export function FutureEventsSection() {
  return (
    <section id="future-events" className="border-border scroll-mt-24 border-t py-16 sm:py-20">
      <div className="container-executive flex flex-col gap-10">
        <SectionHeader
          eyebrow="Future Events"
          title="Open to future engagements"
          description="No events are booked yet beyond past conference participation shown above — these represent the kinds of engagements being pursued."
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {futureEvents.map((event, i) => (
            <div
              key={`${event.topic}-${i}`}
              className="border-border/70 bg-surface flex flex-col gap-3 rounded-2xl border border-dashed p-6"
            >
              <span className="bg-muted text-muted-foreground flex size-10 items-center justify-center rounded-xl">
                <CalendarClock className="size-5" aria-hidden />
              </span>
              <span className="border-border bg-card text-muted-foreground w-fit rounded-full border px-2.5 py-0.5 text-[0.65rem] font-medium">
                {event.eventPlaceholder}
              </span>
              <h3 className="text-sm font-semibold tracking-tight">{event.topic}</h3>
              <div className="text-muted-foreground flex flex-col gap-1 text-xs">
                <span className="flex items-center gap-1.5">
                  <Mic className="size-3.5" aria-hidden />
                  {event.format}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="size-3.5" aria-hidden />
                  {event.locationPlaceholder}
                </span>
                <span className="flex items-center gap-1.5">
                  <CalendarClock className="size-3.5" aria-hidden />
                  {event.datePlaceholder}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
