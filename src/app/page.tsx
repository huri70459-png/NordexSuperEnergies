import type { Metadata } from "next"

import { CtaBand } from "@/components/marketing/CtaBand"
import { HeroCinematic } from "@/components/marketing/HeroCinematic"
import { ServicesTeaser } from "@/components/marketing/ServicesTeaser"
import { StatGrid } from "@/components/marketing/StatGrid"
import { home } from "@/content/home"

export const metadata: Metadata = {
  title: home.meta.title,
  description: home.meta.description,
}

export default function HomePage() {
  const { hero, statsTeaser, servicesTeaser } = home

  return (
    <>
      <HeroCinematic
        eyebrow={hero.eyebrow}
        title={hero.title}
        summary={hero.summary}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        image={hero.image}
      />
      <StatGrid
        stats={statsTeaser}
        eyebrow="At a glance"
        title="Proven scale for utility onshore wind"
      />
      <ServicesTeaser services={servicesTeaser} />
      {/* Signature band: only Home imports CtaBand — once site-wide */}
      <CtaBand />
    </>
  )
}
