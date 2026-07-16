"use client"

import Image from "next/image"
import Link from "next/link"
import { FadeUp } from "@/components/motion/fade-up"
import { homeHero } from "@/content/home"

export function HeroSection() {
  return (
    <section className="relative w-full overflow-x-clip bg-background">
      <div className="relative min-h-[min(92svh,52rem)] w-full overflow-hidden">
        <Image
          src={homeHero.image}
          alt={homeHero.imageAlt}
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/25" />

        <div className="relative z-10 flex min-h-[min(92svh,52rem)] flex-col justify-end px-[max(var(--section-x),var(--safe-left))] pr-[max(var(--section-x),var(--safe-right))] pb-12 pt-[max(var(--header-offset),calc(var(--safe-top)+5.5rem))] sm:pb-16 md:pb-20">
          <div className="nx-container max-w-3xl">
            <FadeUp>
              <p className="nx-eyebrow text-white/75">{homeHero.eyebrow}</p>
              <h1 className="mt-4 text-balance text-[clamp(2.35rem,6.5vw,3.85rem)] font-medium leading-[1.05] tracking-tight text-white">
                {homeHero.headline}
              </h1>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg md:mt-6">
                {homeHero.subheading}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center">
                <Link
                  href={homeHero.ctaPrimary.href}
                  className="nx-btn nx-btn-on-dark-solid"
                >
                  {homeHero.ctaPrimary.label}
                </Link>
                <Link
                  href={homeHero.ctaSecondary.href}
                  className="nx-btn nx-btn-on-dark"
                >
                  {homeHero.ctaSecondary.label}
                </Link>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      <div className="nx-pad-x grid grid-cols-2 gap-2.5 py-4 sm:gap-3 sm:py-6 md:grid-cols-4">
        {homeHero.frames.map((frame, i) => (
          <FadeUp key={frame.src} delayMs={i * 60} variant="scale">
            <div className="nx-media relative aspect-[4/5] overflow-hidden rounded-[var(--radius)] bg-muted">
              <Image
                src={frame.src}
                alt={frame.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  )
}
