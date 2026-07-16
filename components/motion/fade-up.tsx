"use client"

import { useRef, type ReactNode, type ElementType } from "react"
import { motion, useInView, useReducedMotion, type HTMLMotionProps } from "framer-motion"
import { cn } from "@/lib/utils"
import { easeOutExpo, transitions } from "@/lib/motion"

type FadeUpProps = {
  children: ReactNode
  className?: string
  delayMs?: number
  as?: "div" | "section" | "article" | "li"
  /** Slight scale + fade for media blocks */
  variant?: "up" | "scale" | "fade"
}

const motionMap = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  li: motion.li,
} as const

export function FadeUp({
  children,
  className,
  delayMs = 0,
  as = "div",
  variant = "up",
}: FadeUpProps) {
  const ref = useRef<HTMLElement | null>(null)
  const reduceMotion = useReducedMotion()
  const inView = useInView(ref, { once: true, amount: 0.12, margin: "0px 0px -6% 0px" })
  const Tag = motionMap[as] as ElementType

  // Moderate travel works on phone + desktop without measuring window (SSR-safe)
  const hidden =
    variant === "scale"
      ? { opacity: 0, scale: 0.97, y: 10 }
      : variant === "fade"
        ? { opacity: 0 }
        : { opacity: 0, y: 18 }

  const visible = { opacity: 1, scale: 1, y: 0 }

  return (
    <Tag
      ref={ref}
      className={cn(className)}
      initial={reduceMotion ? false : hidden}
      animate={reduceMotion || inView ? visible : hidden}
      transition={{
        duration: reduceMotion ? 0 : transitions.reveal.duration,
        delay: reduceMotion ? 0 : delayMs / 1000,
        ease: easeOutExpo,
      }}
      {...({} as HTMLMotionProps<"div">)}
    >
      {children}
    </Tag>
  )
}
