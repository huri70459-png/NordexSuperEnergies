"use client"

import { useEffect, useState, type RefObject } from "react"

/** SSR-safe reduced-motion preference. */
export function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    const sync = () => setReduce(mq.matches)
    sync()
    mq.addEventListener("change", sync)
    return () => mq.removeEventListener("change", sync)
  }, [])

  return reduce
}

/**
 * True when viewport is phone-width (< md / 768).
 * Defaults false on SSR so desktop markup hydrates cleanly; mobile swaps after mount.
 */
export function useIsPhone() {
  const [phone, setPhone] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767.98px)")
    const sync = () => setPhone(mq.matches)
    sync()
    mq.addEventListener("change", sync)
    return () => mq.removeEventListener("change", sync)
  }, [])

  return phone
}

/** rAF-throttled scroll progress 0→1 for a section ref. */
export function useSectionScrollProgress(
  sectionRef: RefObject<HTMLElement | null>,
  {
    scrubVh = 2,
    enabled = true,
  }: { scrubVh?: number; enabled?: boolean } = {},
) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!enabled) {
      setProgress(1)
      return
    }

    let raf = 0
    const update = () => {
      const el = sectionRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const range = Math.max(1, window.innerHeight * scrubVh)
      const scrolled = Math.max(0, -rect.top)
      setProgress(Math.max(0, Math.min(1, scrolled / range)))
    }

    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })
    update()
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [sectionRef, scrubVh, enabled])

  return progress
}
