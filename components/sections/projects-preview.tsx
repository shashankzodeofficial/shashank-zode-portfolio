"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { ProjectCard } from "@/components/cards/project-card";
import { SectionHeader } from "@/components/common/section-header";
import { featuredProjects } from "@/lib/content";

export function ProjectsPreview() {
  return (
    <section id="projects" className="border-border border-t py-20 sm:py-28">
      <div className="container-executive flex flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Projects"
            title="AI platforms built to run real operations"
            description="Five platforms architected end-to-end — from problem definition to the dashboards leadership uses daily."
          />
          <Link
            href="/projects"
            className="text-brand group inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold"
          >
            View all projects
            <ArrowRight
              className="ease-out-quart size-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: 0.5,
                delay: (i % 3) * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-full"
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
