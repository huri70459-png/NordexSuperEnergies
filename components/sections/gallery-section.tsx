"use client"

import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"
import { useIsPhone, usePrefersReducedMotion } from "@/hooks/use-prefers"
import { homeGallery } from "@/content/home"

const images = homeGallery.frames

/**
 * Home gallery:
 * - Mobile / reduced-motion: native horizontal snap
 * - Desktop: sticky vertical→horizontal scrub
 */
export function GallerySection() {
  const [mounted, setMounted] = useState(false)
  const isPhone = useIsPhone()
  const reduceMotion = usePrefersReducedMotion()

  useEffect(() => setMounted(true), [])

  if (!mounted || isPhone || reduceMotion) {
    return <MobileGallery />
  }

  return <DesktopGallery />
}

function GalleryHeading() {
  return (
    <div className="nx-pad-x mb-5 sm:mb-6">
      <p className="nx-eyebrow text-muted-foreground">{homeGallery.eyebrow}</p>
      <h2 className="mt-2 text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
        {homeGallery.title}
      </h2>
    </div>
  )
}

function MobileGallery() {
  return (
    <section id="gallery" className="relative border-t border-border/60 bg-background py-10 sm:py-14">
      <GalleryHeading />
      <div className="nx-snap-x pb-2">
        {images.map((image, index) => (
          <div
            key={image.src}
            className="relative h-[58svh] w-[78vw] max-w-sm shrink-0 overflow-hidden rounded-[var(--radius)] bg-muted"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="78vw"
              className="object-cover"
              priority={index < 2}
            />
          </div>
        ))}
        <div className="w-2 shrink-0" aria-hidden />
      </div>
    </section>
  )
}

function DesktopGallery() {
  const galleryRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [sectionHeight, setSectionHeight] = useState("100vh")
  const [translateX, setTranslateX] = useState(0)
  const rafRef = useRef<number | null>(null)

  const measure = useCallback(() => {
    if (!containerRef.current) return
    const containerWidth = containerRef.current.scrollWidth
    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    const totalHeight = viewportHeight + Math.max(0, containerWidth - viewportWidth)
    setSectionHeight(`${totalHeight}px`)
  }, [])

  useEffect(() => {
    const timer = window.setTimeout(measure, 80)
    window.addEventListener("resize", measure, { passive: true })
    return () => {
      window.clearTimeout(timer)
      window.removeEventListener("resize", measure)
    }
  }, [measure])

  const updateTransform = useCallback(() => {
    if (!galleryRef.current || !containerRef.current) return
    const rect = galleryRef.current.getBoundingClientRect()
    const containerWidth = containerRef.current.scrollWidth
    const viewportWidth = window.innerWidth
    const totalScrollDistance = Math.max(1, containerWidth - viewportWidth)
    const scrolled = Math.max(0, -rect.top)
    const progress = Math.min(1, scrolled / totalScrollDistance)
    setTranslateX(progress * -totalScrollDistance)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
      rafRef.current = requestAnimationFrame(updateTransform)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    updateTransform()
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current)
    }
  }, [updateTransform])

  return (
    <section
      id="gallery"
      ref={galleryRef}
      className="relative w-full overflow-x-clip border-t border-border/60 bg-background"
      style={{ height: sectionHeight }}
    >
      <div className="sticky top-0 h-svh overflow-hidden">
        <div className="flex h-full flex-col justify-center">
          <GalleryHeading />
          <div className="flex items-center">
            <div
              ref={containerRef}
              className="flex gap-6 px-[var(--section-x)] will-change-transform"
              style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
            >
              {images.map((image, index) => (
                <div
                  key={image.src}
                  className="relative h-[62vh] w-[60vw] max-w-4xl shrink-0 overflow-hidden rounded-[var(--radius)] bg-muted lg:w-[42vw]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 1024px) 60vw, 42vw"
                    className="object-cover"
                    priority={index < 3}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
