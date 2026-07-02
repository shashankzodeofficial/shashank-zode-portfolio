"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { BookOpen, CalendarClock, Download, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { contactMailto, resumeUrl, scheduleMailto, siteConfig } from "@/lib/site-config";

export function CtaSection() {
  return (
    <section id="contact" className="border-border border-t py-20 sm:py-28">
      <div className="container-executive">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="from-primary via-primary to-brand/90 relative flex flex-col items-center gap-8 overflow-hidden rounded-3xl bg-gradient-to-br px-8 py-16 text-center sm:px-16"
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-display text-primary-foreground leading-[var(--text-display--line-height)] font-semibold tracking-[var(--text-display--letter-spacing)] text-balance">
              Let&apos;s build smarter supply chains together.
            </h2>
            <p className="text-primary-foreground/75 mx-auto max-w-xl text-base leading-relaxed">
              Whether you&apos;re a recruiter, a consulting firm, a founder, or an
              enterprise leader — if you&apos;re solving hard operational or AI product
              problems, I&apos;d like to hear about it.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              size="lg"
              variant="brand"
              render={
                <a href={contactMailto}>
                  Contact Me
                  <Mail data-icon="inline-end" aria-hidden />
                </a>
              }
            />
            <Button
              size="lg"
              variant="secondary"
              render={
                <a href={scheduleMailto}>
                  Schedule a Conversation
                  <CalendarClock data-icon="inline-end" aria-hidden />
                </a>
              }
            />
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/25 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              render={
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                  Download Resume
                  <Download data-icon="inline-end" aria-hidden />
                </a>
              }
            />
            <Button
              size="lg"
              variant="ghost"
              className="text-primary-foreground hover:bg-primary-foreground/10"
              render={
                <Link href="/knowledge">
                  View Knowledge Hub
                  <BookOpen data-icon="inline-end" aria-hidden />
                </Link>
              }
            />
          </div>

          <p className="text-primary-foreground/60 text-xs">
            {siteConfig.email} · {siteConfig.location} · I respond within 48 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}
