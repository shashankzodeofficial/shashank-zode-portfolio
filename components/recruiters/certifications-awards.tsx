"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Award, BadgeCheck, Clock, Download, X, ZoomIn } from "lucide-react";

import { SectionHeader } from "@/components/common/section-header";
import { Tag } from "@/components/common/tag";
import { professionalCertifications } from "@/content/recruiters/certifications";
import { awards } from "@/lib/about-content";
import { cn } from "@/lib/utils";

export function CertificationsAwards() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);

  const withImages = professionalCertifications.filter((cert) => cert.image);

  React.useEffect(() => {
    if (openIndex === null) return;
    closeButtonRef.current?.focus();
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIndex]);

  const active = openIndex !== null ? withImages[openIndex] : null;

  return (
    <section id="certifications" className="border-border scroll-mt-24 border-t py-16 sm:py-20">
      <div className="container-executive flex flex-col gap-12">
        <SectionHeader
          eyebrow="Professional Certifications"
          title="Verified credentials behind the expertise"
          description="Every certificate below is real and viewable — click to open a full preview."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {professionalCertifications.map((cert) => {
            const verified = cert.status === "verified";
            return (
              <div
                key={cert.slug}
                className={cn(
                  "flex flex-col gap-4 rounded-2xl border p-6",
                  verified
                    ? "border-border bg-card shadow-subtle"
                    : "border-border/70 bg-surface border-dashed",
                )}
              >
                {cert.image ? (
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(withImages.findIndex((c) => c.slug === cert.slug))
                    }
                    aria-haspopup="dialog"
                    className="border-border group focus-visible:outline-brand relative aspect-[4/3] overflow-hidden rounded-xl border focus-visible:outline-2 focus-visible:outline-offset-2"
                  >
                    <Image
                      src={cert.image.src}
                      alt={cert.image.alt}
                      fill
                      sizes="(min-width: 1024px) 22rem, 90vw"
                      className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                    />
                    <div className="bg-primary/0 group-hover:bg-primary/30 absolute inset-0 flex items-center justify-center transition-colors">
                      <span className="bg-card text-foreground border-border flex scale-90 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium opacity-0 shadow-lg transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
                        <ZoomIn className="size-3.5" aria-hidden />
                        View Certificate
                      </span>
                    </div>
                  </button>
                ) : null}

                <div className="flex items-center justify-between gap-3">
                  <div
                    className={cn(
                      "flex size-10 items-center justify-center rounded-xl",
                      verified ? "bg-brand-muted text-brand" : "bg-muted text-muted-foreground",
                    )}
                  >
                    {verified ? (
                      <BadgeCheck className="size-5" aria-hidden />
                    ) : (
                      <Clock className="size-5" aria-hidden />
                    )}
                  </div>
                  {cert.image ? (
                    <a
                      href={cert.image.src}
                      download
                      className="border-border bg-surface text-muted-foreground hover:bg-muted hover:text-foreground inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors"
                    >
                      <Download className="size-3.5" aria-hidden />
                      Download
                    </a>
                  ) : (
                    <span className="bg-muted text-muted-foreground rounded-full px-2.5 py-0.5 text-xs font-medium">
                      Coming Soon
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-semibold tracking-tight">{cert.title}</h3>
                  <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                  <p className="text-muted-foreground text-xs">
                    {cert.year}
                    {cert.credentialId ? ` · ${cert.credentialId}` : ""}
                  </p>
                </div>

                {cert.methodologies ? (
                  <div className="flex flex-wrap gap-1.5">
                    {cert.methodologies.map((method) => (
                      <Tag key={method}>{method}</Tag>
                    ))}
                  </div>
                ) : null}

                <p className="text-muted-foreground text-sm leading-relaxed">{cert.narrative}</p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-title font-semibold tracking-[var(--text-title--letter-spacing)]">
            Awards &amp; Recognition
          </h3>
          <ol className="flex flex-col gap-4">
            {awards.map((award) => {
              const verified = award.status === "verified";
              return (
                <li
                  key={award.title}
                  className={cn(
                    "flex flex-col gap-3 rounded-2xl border p-5 sm:flex-row sm:items-start sm:gap-5",
                    verified
                      ? "border-border bg-card shadow-subtle"
                      : "border-border/70 bg-surface border-dashed",
                  )}
                >
                  <div
                    className={cn(
                      "flex size-10 shrink-0 items-center justify-center rounded-xl",
                      verified
                        ? "bg-gold/15 text-gold-foreground dark:text-gold"
                        : "bg-muted text-muted-foreground",
                    )}
                  >
                    {verified ? (
                      <Award className="size-5" aria-hidden />
                    ) : (
                      <Clock className="size-5" aria-hidden />
                    )}
                  </div>
                  <div className="flex flex-1 flex-col gap-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <h4 className="text-base font-semibold tracking-tight">{award.title}</h4>
                      <span className="border-border bg-surface text-muted-foreground rounded-full border px-2.5 py-0.5 text-xs">
                        {award.issuer} · {award.period}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      <AnimatePresence>
        {active ? (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-primary/70 fixed inset-0 z-100 flex items-center justify-center p-6 backdrop-blur-sm"
            onClick={() => setOpenIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="border-border bg-card relative flex w-full max-w-2xl flex-col gap-4 rounded-3xl border p-4 sm:p-6"
            >
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setOpenIndex(null)}
                aria-label="Close"
                className="border-border bg-card text-foreground hover:bg-muted focus-visible:outline-brand absolute top-4 right-4 z-10 flex size-9 items-center justify-center rounded-full border focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <X className="size-4" aria-hidden />
              </button>
              {active.image ? (
                <div className="border-border relative aspect-[4/3] w-full overflow-hidden rounded-2xl border">
                  <Image
                    src={active.image.src}
                    alt={active.image.alt}
                    fill
                    sizes="(min-width: 640px) 42rem, 100vw"
                    className="object-contain"
                  />
                </div>
              ) : null}
              <div className="flex flex-col gap-1 px-2 pb-2 text-center">
                <h3 className="text-lg font-semibold tracking-tight">{active.title}</h3>
                <p className="text-muted-foreground text-sm">{active.image?.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
