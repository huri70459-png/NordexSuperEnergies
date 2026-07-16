"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

type ScrollHintProps = {
  className?: string
  label?: string
  tone?: "light" | "dark" | "gold"
}

export function ScrollHint({
  className,
  label = "Scroll",
  tone = "light",
}: ScrollHintProps) {
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduceMotion(mq.matches)
    const onChange = () => setReduceMotion(mq.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  const toneClass =
    tone === "gold"
      ? "text-[var(--heritage-gold)] border-[var(--heritage-gold)]/50"
      : tone === "dark"
        ? "text-white/80 border-white/40"
        : "text-white/80 border-white/40"

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-2 text-xs uppercase tracking-[0.2em]",
        toneClass,
        className,
      )}
      aria-hidden="true"
    >
      <span>{label}</span>
      <span
        className={cn(
          "flex h-10 w-6 items-start justify-center rounded-full border pt-1.5",
          toneClass,
        )}
      >
        <span
          className={cn(
            "h-1.5 w-1.5 rounded-full bg-current",
            !reduceMotion && "animate-scroll-hint",
          )}
        />
      </span>
    </div>
  )
}
