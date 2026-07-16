/**
 * Home (`/`) — dual-division gateway.
 * Media: local paths under `public/images/energy/` and `public/images/heritage/` only.
 *
 * Content jobs (no parallel rewrites of the same story):
 * - Hero: thesis + dual CTAs + 4 frames
 * - Pillars: the two division entries
 * - Gallery: mixed frames not used as hero primary / collection teasers
 * - Collection: three antiques holdings → /heritage
 * - About: institutional close + stats
 */

import { BRAND } from "@/content/brand"

const energy = (file: string) => `/images/energy/${file}`
const heritage = (file: string) => `/images/heritage/${file}`

export const homeHero = {
  eyebrow: BRAND.tagline,
  headline: "Two divisions. One institution.",
  subheading:
    "Nordex Super Energies advances energy systems across the value chain — and preserves cultural heritage through a carefully curated antiques collection.",
  image: energy("pexels-aliakdemir-30037318.jpg"),
  imageAlt: "Wind turbines across rolling hills at golden hour",
  frames: [
    {
      src: energy("Gold-Mine_Adobe-scaled-e1643707309450.jpeg"),
      alt: "Open-pit mining operations with heavy haul trucks at sunset",
    },
    {
      src: energy("pexels-kelly-4320449.jpg"),
      alt: "Aerial view of blue solar panel arrays over grassland",
    },
    {
      src: heritage("gramophone-classic.webp"),
      alt: "Antique gramophone with golden horn in a wood-paneled room",
    },
    {
      src: heritage("849cc3fb-30de-4092-b2c3-3264786aefd3.webp"),
      alt: "Gold skeleton wrist chronometer on a dark strap",
    },
  ],
  ctaPrimary: { label: "Explore Energy", href: "/industrial" },
  ctaSecondary: { label: "Explore Antiques", href: "/heritage" },
} as const

export const homeMission = {
  eyebrow: "Our purpose",
  body: BRAND.mission,
} as const

/** Sole dual-entry into the two divisions (do not restate as a second spotlight block). */
export const homePillars = [
  {
    id: "energy",
    label: "Energy",
    title: "Resources. Power. Continuity.",
    description:
      "From extractive systems and offshore operations to solar, wind, hydro, and generation infrastructure — delivered with safety discipline and long-horizon engineering.",
    href: "/industrial",
    cta: "Energy portfolio",
    image: energy("pexels-malcolmhill-12270481.jpg"),
    imageAlt: "Row of large hydroelectric turbine generators inside a plant hall",
  },
  {
    id: "antiques",
    label: "Antiques",
    title: "Provenance. Craft. Continuity.",
    description:
      "A carefully held collection of rare antiques, ceremonial objects, and heritage instruments — presented with institutional clarity.",
    href: "/heritage",
    cta: "View collection",
    image: heritage("6f9366f9-b37e-4a40-b1fb-477ee756fef1.webp"),
    imageAlt: "Gilt horn phonograph with ornate columns",
  },
] as const

export const homeGallery = {
  eyebrow: "Gallery",
  title: "Frames from both divisions",
  /** Prefer assets not already used as hero still, hero strip, or collection teaser. */
  frames: [
    {
      src: energy("OIP.jpg"),
      alt: "Underground mining drill jumbo operating in a rock tunnel",
    },
    {
      src: energy("074cc02d-50fc-4875-a1be-3b7755e33a41.webp"),
      alt: "Oil production pump jack silhouette at desert sunset",
    },
    {
      src: energy("pexels-gowtham-agm-609630353-20220791.jpg"),
      alt: "Power plant cooling tower and stack beside water",
    },
    {
      src: energy("pexels-orlando-s-197680330-11531870.jpg"),
      alt: "Pipeline bridge leading toward a large industrial energy complex",
    },
    {
      src: heritage("08b71fde-bc67-4298-9238-b83f4d45f6bb.webp"),
      alt: "Heritage collection object photography",
    },
    {
      src: heritage("b0fe1b38-a22a-447e-a7b8-632089c570eb.webp"),
      alt: "Curated antique object on dark ground",
    },
    {
      src: heritage("02ef0516-d52f-4bcb-8107-d057943f8f7a.webp"),
      alt: "Vintage wooden radio cabinet with globe and headphones",
    },
    {
      src: heritage("gramophone-classic.webp"),
      alt: "Salon gramophone with brass horn",
    },
  ],
} as const

export const homeCollectionTeaser = {
  eyebrow: "From the collection",
  title: "Selected holdings",
  description: "A glimpse of objects currently presented in the antiques division.",
  href: "/heritage",
  cta: "Full collection",
  items: [
    {
      title: "Salon Gramophone",
      meta: "Vintage Instruments · c. 1910–1925",
      image: heritage("gramophone-classic.webp"),
      imageAlt: "Antique gramophone with golden horn",
    },
    {
      title: "Gilt Horn Phonograph",
      meta: "Vintage Instruments · c. 1920s",
      image: heritage("6f9366f9-b37e-4a40-b1fb-477ee756fef1.webp"),
      imageAlt: "Fully gilded phonograph horn and base",
    },
    {
      title: "Skeleton Wrist Chronometer",
      meta: "Timepieces · Contemporary atelier",
      image: heritage("849cc3fb-30de-4092-b2c3-3264786aefd3.webp"),
      imageAlt: "Gold skeleton wristwatch with open gear train",
    },
  ],
} as const

export const homeAbout = {
  eyebrow: "About Nordex",
  body: BRAND.description,
  image: energy("pexels-ata-mohammad-202980284-13058796.jpg"),
  imageAlt: "Industrial energy site perimeter with people and infrastructure",
} as const

/** Honest institutional metrics — no decorative “tone” values. */
export const homeStats = [
  { label: "Divisions", value: "2" },
  { label: "Energy domains", value: "4+" },
  { label: "Collection categories", value: "10" },
  { label: "Asset base", value: "Local" },
] as const
