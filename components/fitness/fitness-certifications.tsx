"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Award, CheckCircle2, Download, Sparkles, X, ZoomIn } from "lucide-react";

import { SectionHeader } from "@/components/common/section-header";
import { fitnessCertifications } from "@/content/fitness/certifications";

export function FitnessCertifications() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (openIndex === null) return;
    closeButtonRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIndex]);

  const active = openIndex !== null ? fitnessCertifications[openIndex] : null;

  return (
    <section id="certifications" className="border-border scroll-mt-24 border-t py-16 sm:py-20">
      <div className="container-executive flex flex-col gap-10">
        <SectionHeader
          eyebrow="Professional Certifications"
          title="Formal credentials behind the transformation"
          description="CPD-accredited certifications earned from turning a personal transformation into structured, teachable knowledge."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {fitnessCertifications.map((cert, i) => (
            <div
              key={cert.title}
              className="border-border bg-card shadow-panel flex flex-col gap-5 rounded-2xl border p-6 sm:p-8"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-haspopup="dialog"
                className="border-border group focus-visible:outline-brand relative aspect-[4/3] overflow-hidden rounded-xl border focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <Image
                  src={cert.image.src}
                  alt={cert.image.alt}
                  fill
                  sizes="(min-width: 1024px) 32rem, 90vw"
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                />
                <div className="bg-primary/0 group-hover:bg-primary/30 absolute inset-0 flex items-center justify-center transition-colors">
                  <span className="bg-card text-foreground border-border flex scale-90 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium opacity-0 shadow-lg transition-all duration-200 group-hover:scale-100 group-hover:opacity-100">
                    <ZoomIn className="size-3.5" aria-hidden />
                    View Certificate
                  </span>
                </div>
              </button>

              <div className="flex items-start justify-between gap-3">
                <span className="bg-brand-muted text-brand flex size-10 shrink-0 items-center justify-center rounded-xl">
                  <Award className="size-5" aria-hidden />
                </span>
                <a
                  href={cert.image.src}
                  download
                  className="border-border bg-surface text-muted-foreground hover:bg-muted hover:text-foreground inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors"
                >
                  <Download className="size-3.5" aria-hidden />
                  Download
                </a>
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold tracking-tight">{cert.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {cert.issuer} · {cert.credentialId} · {cert.credits}
                </p>
                <p className="text-muted-foreground text-xs">{cert.year}</p>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-xs font-semibold tracking-wide uppercase">
                  What It Covers
                </span>
                <ul className="flex flex-col gap-1.5">
                  {cert.whatItCovers.map((item) => (
                    <li key={item} className="text-muted-foreground flex gap-2 text-sm">
                      <CheckCircle2 className="text-brand mt-0.5 size-4 shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-gold/25 bg-gold/8 flex flex-col gap-1.5 rounded-xl border p-4">
                <p className="text-foreground flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase">
                  <Sparkles className="size-3.5" aria-hidden />
                  Leadership Connection
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert.leadershipConnection}
                </p>
              </div>
            </div>
          ))}
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
              <div className="border-border relative aspect-[4/3] w-full overflow-hidden rounded-2xl border">
                <Image
                  src={active.image.src}
                  alt={active.image.alt}
                  fill
                  sizes="(min-width: 640px) 42rem, 100vw"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-1 px-2 pb-2 text-center">
                <h3 className="text-lg font-semibold tracking-tight">{active.title}</h3>
                <p className="text-muted-foreground text-sm">{active.image.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
