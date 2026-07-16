/** Shared motion presets — GPU-safe (opacity + transform only). */

export const easeOutExpo = [0.22, 1, 0.36, 1] as const
export const easeOutSoft = [0.16, 1, 0.3, 1] as const

export const transitions = {
  /** Section / scroll reveal — MASTER base tier (~320ms chrome; section ~520ms) */
  reveal: {
    duration: 0.52,
    ease: easeOutExpo,
  },
  /** Hero headline / primary mount */
  hero: {
    duration: 0.55,
    ease: easeOutExpo,
  },
  /** Snappy UI chrome */
  chrome: {
    type: "spring" as const,
    stiffness: 420,
    damping: 32,
    mass: 0.8,
  },
  /** Soft content hover */
  hover: {
    duration: 0.45,
    ease: easeOutSoft,
  },
  /** Stagger parent */
  stagger: {
    staggerChildren: 0.08,
    delayChildren: 0.06,
  },
} as const

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
} as const

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
} as const

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.97, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0 },
} as const
