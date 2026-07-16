"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { industrialHero } from "@/content/industrial"
import { EnergyParticles } from "@/components/industrial/energy-particles"
import { ScrollHint } from "@/components/shared/scroll-hint"
import { easeOutExpo } from "@/lib/motion"

export function IndustrialHero() {
  const reduce = useReducedMotion()
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoReady, setVideoReady] = useState(false)

  useEffect(() => {
    const el = videoRef.current
    if (!el || reduce) return

    const tryPlay = () => {
      el.muted = true
      void el.play().then(() => setVideoReady(true)).catch(() => setVideoReady(false))
    }

    // Defer play slightly so LCP can paint the poster first
    const id = window.setTimeout(tryPlay, 120)
    return () => window.clearTimeout(id)
  }, [reduce])

  const showVideo = Boolean(industrialHero.video) && !reduce

  return (
    <section className="nx-hero-min nx-vh relative flex min-h-[min(100svh,560px)] overflow-hidden bg-[var(--ind-navy-deep,var(--ind-navy))]">
      {/* Poster always present for LCP / reduced motion */}
      <Image
        src={industrialHero.image}
        alt={industrialHero.imageAlt}
        fill
        priority
        sizes="100vw"
        quality={85}
        className={`object-cover object-center transition-opacity duration-700 ${
          showVideo && videoReady ? "opacity-0" : "opacity-80"
        }`}
      />

      {showVideo && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
            videoReady ? "opacity-80" : "opacity-0"
          }`}
          poster={industrialHero.image}
          muted
          playsInline
          loop
          preload="metadata"
          aria-hidden
          tabIndex={-1}
        >
          <source src={industrialHero.video} type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-gradient-to-br from-[var(--ind-navy)]/93 via-[var(--ind-navy)]/75 to-[var(--ind-navy)]/48" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_15%,rgba(16,185,129,0.18),transparent_48%),radial-gradient(ellipse_at_85%_75%,rgba(14,165,233,0.14),transparent_42%)]" />

      {/* Particles only on still hero — video carries motion */}
      {(!showVideo || reduce) && (
        <EnergyParticles className="absolute inset-0 z-[1] h-full w-full opacity-60" particleCount={56} />
      )}

      <div className="relative z-10 mx-auto flex w-full max-w-[var(--content-max)] flex-col items-center justify-center px-[max(var(--section-x),var(--safe-left))] pr-[max(var(--section-x),var(--safe-right))] pt-[max(5.25rem,calc(var(--safe-top)+3.5rem))] pb-[max(3.5rem,var(--safe-bottom))] text-center">
        <motion.p
          className="nx-eyebrow mb-4 text-[var(--ind-emerald-soft,var(--ind-emerald))] sm:mb-5"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: easeOutExpo }}
        >
          {industrialHero.eyebrow}
        </motion.p>
        <motion.h1
          className="font-energy max-w-5xl text-balance text-[clamp(2.25rem,8.5vw,4.25rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-white sm:leading-[1.05]"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: easeOutExpo }}
        >
          {industrialHero.headline}
        </motion.h1>
        <motion.p
          className="mt-4 max-w-2xl text-pretty text-[0.9375rem] leading-relaxed text-white/85 sm:mt-5 sm:text-base md:text-lg md:leading-[1.7]"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.16, ease: easeOutExpo }}
        >
          {industrialHero.subheading}
        </motion.p>

        <motion.div
          className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24, ease: easeOutExpo }}
        >
          <Link
            href={industrialHero.ctaPrimary.href}
            className="nx-touch inline-flex w-full items-center justify-center border border-[var(--ind-emerald)]/55 bg-[var(--ind-emerald)]/15 px-6 py-3 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-white transition-colors duration-[var(--duration-fast)] hover:bg-[var(--ind-emerald)]/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ind-emerald)] sm:w-auto sm:min-w-[12rem]"
          >
            {industrialHero.ctaPrimary.label}
          </Link>
          <Link
            href={industrialHero.ctaSecondary.href}
            className="nx-touch inline-flex w-full items-center justify-center border border-white/25 px-6 py-3 text-center text-[11px] font-medium uppercase tracking-[0.18em] text-white/90 transition-colors duration-[var(--duration-fast)] hover:border-white/45 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:min-w-[12rem]"
          >
            {industrialHero.ctaSecondary.label}
          </Link>
        </motion.div>
      </div>

      <ScrollHint
        className="absolute bottom-[max(1.5rem,var(--safe-bottom))] left-1/2 z-10 -translate-x-1/2 max-sm:scale-90"
        tone="dark"
      />
    </section>
  )
}
