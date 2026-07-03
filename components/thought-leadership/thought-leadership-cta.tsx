import Link from "next/link";
import { CalendarClock, Mail, Mic } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contactMailto, scheduleMailto } from "@/lib/site-config";

export function ThoughtLeadershipCta() {
  return (
    <section className="border-border border-t py-16 sm:py-20">
      <div className="container-executive">
        <div className="from-primary via-primary to-brand/90 flex flex-col items-center gap-6 rounded-3xl bg-gradient-to-br px-8 py-14 text-center sm:px-16">
          <h2 className="text-title text-primary-foreground font-semibold tracking-[var(--text-title--letter-spacing)] text-balance">
            Let&apos;s bring this thinking to your stage, board, or team
          </h2>
          <p className="text-primary-foreground/75 max-w-2xl text-sm leading-relaxed">
            For conference organizers, executive search firms, consulting
            organizations, business schools, and industry associations —
            open to conversations on speaking engagements, advisory
            opportunities, executive consulting, and AI transformation
            initiatives.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              variant="brand"
              render={
                <a href={contactMailto}>
                  Book a Conversation
                  <Mail data-icon="inline-end" aria-hidden />
                </a>
              }
            />
            <Button
              variant="secondary"
              render={
                <a href={scheduleMailto}>
                  Schedule a Speaking Discussion
                  <CalendarClock data-icon="inline-end" aria-hidden />
                </a>
              }
            />
            <Button
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/10"
              render={
                <Link href="/thought-leadership/speaking">
                  View Speaking Topics
                  <Mic data-icon="inline-end" aria-hidden />
                </Link>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
