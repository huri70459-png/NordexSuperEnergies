"use client"

import * as React from "react"

/**
 * SSR-safe matchMedia hook.
 * Returns `undefined` until mounted so layout can avoid flash-of-wrong-branch.
 */
export function useMediaQuery(query: string): boolean | undefined {
  const [matches, setMatches] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(query)
    const onChange = () => setMatches(mql.matches)
    onChange()
    mql.addEventListener("change", onChange)
    return () => mql.removeEventListener("change", onChange)
  }, [query])

  return matches
}

/** Tailwind-aligned breakpoints (min-width). */
export const bp = {
  sm: "(min-width: 640px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 1024px)",
  xl: "(min-width: 1280px)",
  /** Coarse pointer = touch-primary devices */
  coarse: "(pointer: coarse)",
  /** Fine pointer + hover capability */
  canHover: "(hover: hover) and (pointer: fine)",
  reducedMotion: "(prefers-reduced-motion: reduce)",
} as const

export function useIsMobile() {
  const matches = useMediaQuery("(max-width: 767px)")
  return matches === true
}

export function useIsTablet() {
  const matches = useMediaQuery("(min-width: 768px) and (max-width: 1023px)")
  return matches === true
}

export function useCanHover() {
  const matches = useMediaQuery(bp.canHover)
  return matches === true
}
