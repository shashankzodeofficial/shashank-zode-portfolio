# Shashank Zode — Executive Portfolio

Production-grade personal site for Shashank Zode: supply chain transformation
leader, AI product builder, and digital operations strategist. Built from
scratch as a scalable platform for a growing executive brand — not a static
portfolio template.

## Stack

- **Next.js 15** (App Router, React Server Components, TypeScript strict)
- **Tailwind CSS v4** (CSS-first theme, custom design tokens in `app/globals.css`)
- **shadcn/ui** on **Base UI** primitives (`components/ui`)
- **Framer Motion** for scroll reveals, counters, and micro-interactions
- **next-themes** for persisted light/dark mode
- **MDX** wired up for the future Knowledge Hub (not yet in use)

## Getting started

```bash
npm install
npm run dev       # start dev server on :3000
npm run build     # production build
npm run lint      # ESLint
npm run format    # Prettier (writes)
```

## Structure

```
app/                  routes, layouts, metadata, robots/sitemap/OG image
components/
  ui/                 shadcn/ui primitives (Button, Badge, Card)
  layout/             Header, Footer
  navigation/         NavLink, MobileMenu
  hero/               Hero section + animated background + stats
  theme/              ThemeProvider, ThemeToggle
  common/             SectionHeader, AnimatedCounter, Tag, Callout, icons
  cards/              Reusable content-card patterns
content/              MDX content (articles, case-studies, projects, frameworks) — future phases
lib/                  site-config.ts (nav, stats, CV-sourced copy), utils.ts
types/                shared TypeScript types
```

## Status

**Phase 1 (complete):** project foundation, design system, sticky navigation,
theming, Hero section, SEO/accessibility foundations.

**Next phases:** About, Journey (timeline), Projects, Knowledge Hub, Leadership,
Fitness, Resume viewer, Contact form.
