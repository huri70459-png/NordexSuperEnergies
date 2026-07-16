"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { heritageHero } from "@/content/heritage"
import { ScrollHint } from "@/components/shared/scroll-hint"
import { easeOutExpo, transitions } from "@/lib/motion"

export function HeritageHero() {
  const [offset, setOffset] = useState(0)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (reduceMotion) return
    const onScroll = () => setOffset(Math.min(window.scrollY, 600))
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [reduceMotion])

  const y = reduceMotion ? 0 : offset * 0.18
  const scale = reduceMotion ? 1 : 1 + offset * 0.00012

  return (
    <section className="nx-hero-min nx-vh relative overflow-hidden bg-[var(--heritage-charcoal)]">
      <div
        className="absolute inset-0 will-change-transform"
        style={{ transform: `translate3d(0, ${y * 0.32}px, 0) scale(${scale})` }}
      >
        <Image
          src={heritageHero.image}
          alt={heritageHero.imageAlt}
          fill
          priority
          quality={85}
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Enterprise museum veil — readable type, restrained gold */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--heritage-charcoal)]/70 via-[var(--heritage-charcoal)]/50 to-[var(--heritage-charcoal)]/88" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,transparent_0%,rgba(28,22,18,0.55)_100%)]" />

      <div
        className="relative z-10 mx-auto flex h-full max-w-[var(--content-max)] flex-col items-center justify-center px-[max(var(--section-x),var(--safe-left))] pr-[max(var(--section-x),var(--safe-right))] pt-[max(var(--header-offset),calc(var(--safe-top)+4.5rem))] pb-[max(4.5rem,calc(var(--safe-bottom)+3rem))] text-center"
        style={{ transform: reduceMotion ? undefined : `translate3d(0, ${y * -0.1}px, 0)` }}
      >
        <motion.div
          className="mb-5 flex flex-col items-center gap-3 sm:mb-7 sm:gap-4"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: transitions.hero.duration, ease: easeOutExpo }}
        >
          <p className="nx-eyebrow text-[var(--heritage-gold)]">{heritageHero.eyebrow}</p>
          <span
            aria-hidden
            className="h-px w-10 bg-[var(--heritage-gold)]/70 sm:w-12"
          />
        </motion.div>

        <motion.h1
          className="font-display max-w-4xl text-balance text-[clamp(2.25rem,7.5vw,4.25rem)] leading-[1.08] tracking-[-0.02em] text-[var(--heritage-ivory)]"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: transitions.hero.duration, delay: 0.06, ease: easeOutExpo }}
        >
          {heritageHero.headline}
        </motion.h1>

        <motion.p
          className="mx-auto mt-5 max-w-xl text-pretty text-[0.9375rem] leading-[1.7] text-[var(--heritage-beige)]/90 sm:mt-6 sm:text-base md:max-w-2xl md:text-lg md:leading-[1.75]"
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: transitions.reveal.duration, delay: 0.12, ease: easeOutExpo }}
        >
          {heritageHero.subheading}
        </motion.p>

        <motion.a
          href="#collection"
          className="nx-btn nx-btn-heritage mt-8 min-w-[10.5rem] sm:mt-10"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: transitions.hero.duration, delay: 0.2, ease: easeOutExpo }}
        >
          View collection
        </motion.a>
      </div>

      <ScrollHint
        className="absolute bottom-[max(1.25rem,var(--safe-bottom))] left-1/2 z-10 -translate-x-1/2 max-sm:scale-90"
        tone="gold"
      />
    </section>
  )
}
