import type { Metadata } from "next"
import { Header } from "@/components/header"
import { FooterSection } from "@/components/sections/footer-section"
import { IndustrialHero } from "@/components/industrial/industrial-hero"
import {
  IndustrialCta,
  ManufacturingSection,
  MissionSection,
  RenewableSection,
  StatsSection,
} from "@/components/industrial/industrial-sections"

export const metadata: Metadata = {
  title: "Energy Portfolio",
  description:
    "Nordex Super Energies — resources, offshore operations, renewables, and generation infrastructure across the energy value chain.",
}

export default function IndustrialPage() {
  return (
    <div className="theme-industrial">
      <Header variant="overDark" />
      <main
        id="main"
        className="nx-page bg-white text-[var(--ind-navy)] dark:bg-[var(--ind-navy)] dark:text-white"
      >
        <IndustrialHero />
        {/* ponytail: 5 beats after hero — Mission · Portfolio · Systems · Stats · CTA (timeline + featured dropped Phase 2) */}
        <MissionSection />
        <RenewableSection />
        <ManufacturingSection />
        <StatsSection />
        <IndustrialCta />
        <FooterSection />
      </main>
    </div>
  )
}
