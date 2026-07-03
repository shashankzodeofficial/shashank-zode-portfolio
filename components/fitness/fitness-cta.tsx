import Link from "next/link";
import { Compass, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contactMailto } from "@/lib/site-config";

export function FitnessCta() {
  return (
    <section className="border-border border-t py-16 sm:py-20">
      <div className="container-executive">
        <div className="from-primary via-primary to-brand/90 flex flex-col items-center gap-6 rounded-3xl bg-gradient-to-br px-8 py-14 text-center sm:px-16">
          <h2 className="text-title text-primary-foreground font-semibold tracking-[var(--text-title--letter-spacing)] text-balance">
            The same discipline runs through everything I lead
          </h2>
          <p className="text-primary-foreground/75 max-w-xl text-sm leading-relaxed">
            If this resonates with how you think about leadership, consistency,
            and sustainable change, I&apos;d welcome the conversation.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              variant="brand"
              render={
                <a href={contactMailto}>
                  Get in Touch
                  <Mail data-icon="inline-end" aria-hidden />
                </a>
              }
            />
            <Button
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/10"
              render={
                <Link href="/thought-leadership/principles">
                  Explore Leadership Principles
                  <Compass data-icon="inline-end" aria-hidden />
                </Link>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
