import { CalendarClock, Mail, MapPin, Sparkles } from "lucide-react";

import { LinkedinIcon } from "@/components/common/icons";
import { SectionHeader } from "@/components/common/section-header";
import { Button } from "@/components/ui/button";
import { contactMailto, scheduleMailto, siteConfig } from "@/lib/site-config";

const channels = [
  {
    icon: <Mail className="size-5" aria-hidden />,
    label: "Email",
    value: siteConfig.email,
    href: contactMailto,
  },
  {
    icon: <LinkedinIcon className="size-5" />,
    label: "LinkedIn",
    value: "linkedin.com/in/shashankzode04",
    href: siteConfig.linkedin,
  },
  {
    icon: <MapPin className="size-5" aria-hidden />,
    label: "Location",
    value: siteConfig.location,
    href: undefined,
  },
];

export function ProfessionalContact() {
  return (
    <section id="contact" className="border-border scroll-mt-24 border-t py-16 sm:py-20">
      <div className="container-executive flex flex-col gap-10">
        <SectionHeader eyebrow="Professional Contact" title="Let's talk" />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_20rem]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {channels.map((channel) => {
              const content = (
                <>
                  <span className="bg-brand-muted text-brand flex size-10 items-center justify-center rounded-xl">
                    {channel.icon}
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-muted-foreground text-xs font-medium">
                      {channel.label}
                    </span>
                    <span className="text-sm font-semibold tracking-tight">
                      {channel.value}
                    </span>
                  </div>
                </>
              );
              return channel.href ? (
                <a
                  key={channel.label}
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="border-border bg-card shadow-subtle hover:shadow-panel flex flex-col gap-3 rounded-2xl border p-5 transition-shadow"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={channel.label}
                  className="border-border bg-card shadow-subtle flex flex-col gap-3 rounded-2xl border p-5"
                >
                  {content}
                </div>
              );
            })}
          </div>

          <div className="border-brand/25 bg-brand-muted/30 flex flex-col gap-4 rounded-2xl border p-6">
            <span className="text-brand inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="size-3.5" aria-hidden />
              Availability
            </span>
            <p className="text-foreground text-sm leading-relaxed">
              Open to executive conversations, advisory engagements, and the
              right leadership opportunity. Response within 48 hours.
            </p>
            <Button
              variant="brand"
              size="sm"
              render={
                <a href={scheduleMailto}>
                  Schedule a Conversation
                  <CalendarClock data-icon="inline-end" aria-hidden />
                </a>
              }
            />
            <p className="text-muted-foreground text-xs leading-relaxed">
              Direct calendar booking is coming soon — for now, this opens a
              pre-filled email to find a time that works.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
