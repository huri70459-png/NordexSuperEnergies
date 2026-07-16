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
    <div className="theme-heritage">
      <Header variant="overDark" />
      <main
        id="main"
        className="nx-page bg-[var(--heritage-ivory)] text-[var(--heritage-charcoal)]"
      >
        <HeritageHero />
        <HeritageGallerySection />
        <CategoryStorySections />
        <HeritageCta />
        <FooterSection />
      </main>
    </div>
  )
}
