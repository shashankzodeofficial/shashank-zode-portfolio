"use client";

import * as React from "react";
import { Mail, Send } from "lucide-react";

import { Button } from "@/components/ui/button";

export function NewsletterPlaceholder() {
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <section className="border-border border-t py-16 sm:py-20">
      <div className="container-executive">
        <div className="border-border bg-surface flex flex-col items-center gap-5 rounded-3xl border px-8 py-14 text-center">
          <span className="bg-brand-muted text-brand flex size-12 items-center justify-center rounded-2xl">
            <Mail className="size-5" aria-hidden />
          </span>
          <div className="flex flex-col gap-2">
            <h2 className="text-title font-semibold tracking-[var(--text-title--letter-spacing)]">
              New articles, straight to your inbox
            </h2>
            <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
              The newsletter isn&apos;t live yet — leave your email and I&apos;ll
              let you know the moment it launches.
            </p>
          </div>

          {submitted ? (
            <p className="text-brand text-sm font-medium">
              Thanks — I&apos;ll be in touch when the newsletter launches.
            </p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="flex w-full max-w-sm flex-col gap-2 sm:flex-row"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="you@company.com"
                className="border-border bg-card focus-visible:outline-brand h-11 flex-1 rounded-full border px-4 text-sm focus-visible:outline-2 focus-visible:outline-offset-2"
              />
              <Button type="submit" variant="brand">
                Notify Me
                <Send data-icon="inline-end" aria-hidden />
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
