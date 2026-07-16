import type { Metadata } from "next"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/sections/hero-section"
import { PhilosophySection } from "@/components/sections/philosophy-section"
import { GallerySection } from "@/components/sections/gallery-section"
import { CollectionSection } from "@/components/sections/collection-section"
import { AboutSection } from "@/components/sections/about-section"
import { FooterSection } from "@/components/sections/footer-section"
import { BRAND } from "@/content/brand"

export const metadata: Metadata = {
  title: "Home",
  description: BRAND.description,
}

export default function Home() {
  return (
    <main id="main" className="nx-page bg-background">
      <Header />
      <HeroSection />
      <PhilosophySection />
      <GallerySection />
      <CollectionSection />
      <AboutSection />
      <FooterSection />
    </main>
  )
}
