"use client"

import Image from "next/image"
import Link from "next/link"
import { FadeUp } from "@/components/motion/fade-up"
import { SectionShell } from "@/components/shared/section-shell"
import { homeMission, homePillars } from "@/content/home"

export function PhilosophySection() {
  return (
    <SectionShell id="pillars">
      <FadeUp>
        <div className="mx-auto max-w-3xl text-center">
          <p className="nx-eyebrow text-muted-foreground">{homeMission.eyebrow}</p>
          <p className="mt-6 text-pretty text-xl leading-relaxed text-muted-foreground sm:mt-8 sm:text-2xl md:text-3xl">
            {homeMission.body}
          </p>
        </div>
      </FadeUp>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:mt-16 sm:gap-6 md:mt-20 md:grid-cols-2">
        {homePillars.map((pillar, i) => (
          <FadeUp key={pillar.id} delayMs={i * 80} as="article" variant="scale">
            <Link
              href={pillar.href}
              className="nx-card group flex h-full flex-col overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              <div className="nx-media relative aspect-[16/10] bg-muted">
                <Image
                  src={pillar.image}
                  alt={pillar.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <p className="nx-eyebrow text-muted-foreground">{pillar.label}</p>
                <h2 className="mt-3 text-balance text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                  {pillar.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {pillar.description}
                </p>
                <span className="mt-6 inline-flex text-sm font-medium text-foreground underline-offset-4 group-hover:underline">
                  {pillar.cta}
                </span>
              </div>
            </Link>
          </FadeUp>
        ))}
      </div>
    </SectionShell>
  )
}
