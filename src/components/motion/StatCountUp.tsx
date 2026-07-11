"use client"

import * as React from "react"

import { parseStatValue } from "@/components/motion/parseStatValue"
import { cn } from "@/lib/utils"

type StatCountUpProps = {
  value: string
  className?: string
  /** Duration in ms when motion is allowed (token: cinematic ~700) */
  durationMs?: number
}

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

/**
 * Intersection Observer count-up for numeric stats.
 * Disabled under prefers-reduced-motion (shows final value immediately).
 */
export function StatCountUp({
  value,
  className,
  durationMs = 700,
}: StatCountUpProps) {
  const parsed = parseStatValue(value)
  const ref = React.useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = React.useState(() =>
    parsed.kind === "count" ? `0${parsed.suffix}` : parsed.display
  )
  const ran = React.useRef(false)

  React.useEffect(() => {
    if (parsed.kind === "static") {
      setDisplay(parsed.display)
      return
    }

    const el = ref.current
    if (!el) return

    const finish = () => {
      setDisplay(`${parsed.target}${parsed.suffix}`)
    }

    if (prefersReducedMotion()) {
      finish()
      return
    }

    const run = () => {
      if (ran.current) return
      ran.current = true
      const start = performance.now()
      const from = 0
      const to = parsed.target

      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / durationMs)
        // ease-out cubic — matches emphasized feel without extra deps
        const eased = 1 - (1 - t) ** 3
        const current = Math.round(from + (to - from) * eased)
        setDisplay(`${current}${parsed.suffix}`)
        if (t < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          run()
          io.disconnect()
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [parsed, durationMs])

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {display}
    </span>
  )
}
