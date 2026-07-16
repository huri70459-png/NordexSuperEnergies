/** Shared motion presets — GPU-safe (opacity + transform only). */

export const easeOutExpo = [0.22, 1, 0.36, 1] as const
export const easeOutSoft = [0.16, 1, 0.3, 1] as const

export const transitions = {
  /** Page enter / section reveal */
  reveal: {
    duration: 0.7,
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
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
} as const

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
} as const

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
} as const
