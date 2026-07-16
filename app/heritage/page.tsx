import type { Metadata } from "next"
import { Header } from "@/components/header"
import { FooterSection } from "@/components/sections/footer-section"
import { HeritageHero } from "@/components/heritage/heritage-hero"
import { HeritageGallerySection } from "@/components/heritage/masonry-gallery"
import { CategoryStorySections } from "@/components/heritage/category-story-sections"
import { HeritageCta } from "@/components/heritage/heritage-cta"

export const metadata: Metadata = {
  title: "Antiques",
  description:
    "Nordex Super Energies antiques collection — rare currency, vintage collectibles, and historical artifacts in an institutional showcase.",
}

export default function HeritagePage() {
  return (
    <main id="main" className="theme-heritage nx-page bg-[var(--heritage-ivory)] text-[var(--heritage-charcoal)]">
      <Header variant="overDark" />
      <HeritageHero />
      <HeritageGallerySection />
      <CategoryStorySections />
      <HeritageCta />
      <FooterSection />
    </main>
  )
}
