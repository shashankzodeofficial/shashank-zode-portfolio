"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

import { getCaseStudyBySlug } from "@/content/projects";

const covers = [
  "from-brand/25 via-brand/10 to-transparent",
  "from-gold/25 via-gold/10 to-transparent",
  "from-brand/20 via-gold/10 to-transparent",
];

/** Takes a slug and resolves gallery data internally — see CaseStudyHero for why. */
export function GalleryLightbox({ slug }: { slug: string }) {
  const items = getCaseStudyBySlug(slug)?.gallery ?? [];
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

  const active = openIndex !== null ? items[openIndex] : null;

  return (
    <>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setOpenIndex(i)}
            aria-haspopup="dialog"
            className={`group border-border bg-gradient-to-br ${
              covers[i % covers.length]
            } shadow-subtle hover:shadow-panel focus-visible:outline-brand relative flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-2xl border p-6 text-center transition-shadow focus-visible:outline-2 focus-visible:outline-offset-2`}
          >
            <item.icon
              className="text-foreground/70 ease-out-quart size-10 transition-transform duration-300 group-hover:scale-110"
              aria-hidden
              strokeWidth={1.25}
            />
            <span className="text-sm font-semibold tracking-tight">{item.title}</span>
            <span className="bg-card text-muted-foreground border-border absolute top-3 right-3 inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[0.65rem] font-medium capitalize">
              <ZoomIn className="size-3" aria-hidden />
              {item.kind}
            </span>
          </button>
        ))}
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
              className={`border-border relative flex aspect-[16/10] w-full max-w-2xl flex-col items-center justify-center gap-4 rounded-3xl border bg-gradient-to-br p-10 text-center ${
                covers[(openIndex ?? 0) % covers.length]
              }`}
            >
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setOpenIndex(null)}
                aria-label="Close"
                className="border-border bg-card text-foreground hover:bg-muted focus-visible:outline-brand absolute top-4 right-4 flex size-9 items-center justify-center rounded-full border focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <X className="size-4" aria-hidden />
              </button>
              <active.icon
                className="text-foreground/70 size-16"
                aria-hidden
                strokeWidth={1.1}
              />
              <div className="flex flex-col gap-1">
                <h3 className="text-lg font-semibold tracking-tight">{active.title}</h3>
                <p className="text-muted-foreground text-sm">{active.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
