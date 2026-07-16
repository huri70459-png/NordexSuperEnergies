/**
 * Energy portfolio — source of truth for /industrial (nav: Energy).
 * Images/video live in `public/images/energy/` (local paths only).
 */

const img = (file: string) => `/images/energy/${file}`

export const industrialHero = {
  eyebrow: "Energy portfolio",
  headline: "Resources. Power. Continuity.",
  subheading:
    "From extractive systems and offshore operations to solar, wind, hydro, and generation infrastructure — delivered with safety discipline and long-horizon engineering.",
  /** Poster / static fallback when video is unavailable or reduced motion. */
  image: img("Gold-Mine_Adobe-scaled-e1643707309450.jpeg"),
  imageAlt: "Open-pit mining operations with heavy haul trucks at sunset",
  video: img("Header-Website-29022024.mp4"),
  ctaPrimary: { label: "Explore portfolio", href: "#portfolio" },
  ctaSecondary: { label: "See impact", href: "#impact" },
}

export const missionPillars = [
  {
    title: "Resources & mining systems",
    description:
      "Surface and underground operations, heavy mobile plant, and resource development programmes built for reliability under demanding site conditions.",
  },
  {
    title: "Offshore & hydrocarbons",
    description:
      "Offshore platforms, FPSO and marine logistics, and production systems engineered for continuous, high-stakes operating environments.",
  },
  {
    title: "Renewables at scale",
    description:
      "Utility-scale solar, onshore wind, and hydro generation pathways that complement firm capacity and long-term grid needs.",
  },
  {
    title: "Generation, safety & infrastructure",
    description:
      "Plant systems, process infrastructure, and safety culture that protect people and assets while keeping critical energy facilities online.",
  },
]

export const industrialStats = [
  { label: "Operating domains", value: "4+" },
  { label: "Portfolio programmes", value: "40+" },
  { label: "Partner markets", value: "18" },
  { label: "Safety-first model", value: "Core" },
]

/** Portfolio showcase — resources → O&G → renewables (solar/wind) + hydro as generation-adjacent. */
export const renewableGrid = [
  {
    title: "Resources & mining",
    description:
      "Open-pit and underground systems with heavy equipment fleets supporting long-life resource programmes.",
    image: img("OIP.jpg"),
    imageAlt: "Underground mining drill jumbo operating in a rock tunnel",
  },
  {
    title: "Oil & gas operations",
    description:
      "Offshore production assets and field systems designed for continuous marine and desert operating regimes.",
    image: img("074cc02d-50fc-4875-a1be-3b7755e33a41.webp"),
    imageAlt: "Oil production pump jack and platform silhouette at desert sunset",
  },
  {
    title: "Solar power",
    description:
      "Utility-scale photovoltaic fields engineered for high yield across arid and temperate climates.",
    image: img("pexels-kelly-4320449.jpg"),
    imageAlt: "Aerial view of blue solar panel arrays over grassland",
  },
  {
    title: "Wind & hydro",
    description:
      "Onshore wind arrays and hydro turbine halls delivering clean capacity into regional grids.",
    image: img("pexels-aliakdemir-30037318.jpg"),
    imageAlt: "Wind turbines across rolling hills at golden hour",
  },
]

export const manufacturingCards = [
  {
    title: "Plant & process systems",
    description:
      "Generation and process facilities — cooling, stacks, and plant architecture for continuous industrial energy.",
    image: img("pexels-gowtham-agm-609630353-20220791.jpg"),
    imageAlt: "Active power plant cooling tower and striped stack beside water",
  },
  {
    title: "Safety & site operations",
    description:
      "Controlled sites, trained teams, and operating discipline that protect people, communities, and assets.",
    image: img("pexels-ata-mohammad-202980284-13058796.jpg"),
    imageAlt: "Industrial power plant perimeter with workers and security fencing",
  },
  {
    title: "Grid & heavy infrastructure",
    description:
      "Pipelines, interconnects, and process complexes that move energy products from field to market.",
    image: img("pexels-orlando-s-197680330-11531870.jpg"),
    imageAlt: "Pipeline bridge leading toward a large industrial energy complex",
  },
]

export const industrialCta = {
  eyebrow: "Nordex Super Energies",
  title: "Energy systems and cultural heritage, one house",
  description:
    "Explore the antiques collection, or return to the main overview of Nordex Super Energies.",
  primary: { label: "Antiques collection", href: "/heritage" },
  secondary: { label: "Home", href: "/" },
}
