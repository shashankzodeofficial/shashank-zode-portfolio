/** Shared Framer Motion primitives — keep hero/section entrance animations consistent site-wide. */

export const easeOutExpo = [0.16, 1, 0.3, 1] as const;
export const easeOutQuart = [0.25, 1, 0.5, 1] as const;

export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: easeOutExpo },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay, ease: easeOutExpo },
  }),
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, delay, ease: easeOutExpo },
  }),
};

/** Stagger container — pair with `fadeUp`/`fadeIn` children using `custom={index * staggerStep}`. */
export const staggerStep = 0.08;

export const viewportOnce = { once: true, margin: "-10% 0px" } as const;
