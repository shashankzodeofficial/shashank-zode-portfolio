"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import { conferencePhotos } from "@/lib/media";
import { easeOutExpo } from "@/lib/motion";

const photo = conferencePhotos[0];

/** Full-bleed editorial photo moment — a change of pace from card-bounded sections. */
export function ExecutivePresenceBanner() {
  return (
    <section className="relative isolate h-[26rem] w-full overflow-hidden sm:h-[32rem]">
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="from-primary/90 via-primary/40 absolute inset-0 bg-gradient-to-t to-transparent" />

      <div className="container-executive relative flex h-full flex-col justify-end pb-12 sm:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="flex max-w-2xl flex-col gap-4 text-white"
        >
          <Quote className="size-7 text-white/70" aria-hidden strokeWidth={1.5} />
          <p className="text-title leading-[var(--text-title--line-height)] font-semibold tracking-[var(--text-title--letter-spacing)] text-balance">
            Executive presence isn&rsquo;t a stage — it&rsquo;s showing up prepared, in the
            room, for the conversations that actually move the industry forward.
          </p>
          <p className="text-xs font-medium text-white/70">{photo.caption}</p>
        </motion.div>
      </div>
    </section>
  );
}
