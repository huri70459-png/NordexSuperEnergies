/**
 * Energy portfolio — source of truth for /industrial (nav: Energy).
 * Images/video live in `public/images/energy/` (local paths only).
 */

export type IndustrialProject = {
  id: string
  title: string
  summary: string
  category:
    | "Resources"
    | "Oil & Gas"
    | "Renewable Energy"
    | "Generation & Infrastructure"
  location: string
  year: string
  metric?: string
  image: string
  imageAlt: string
}

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
  ctaSecondary: { label: "Featured programmes", href: "#projects" },
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

export const sustainabilityTimeline = [
  {
    year: "Resource",
    title: "Secure the base",
    description:
      "Develop and operate resource and extractive programmes with durable equipment, site safety, and long-horizon planning.",
  },
  {
    year: "Operate",
    title: "Offshore & field excellence",
    description:
      "Run offshore and production systems with logistics, maintenance, and risk controls suited to continuous operations.",
  },
  {
    year: "Diversify",
    title: "Clean capacity growth",
    description:
      "Scale solar, wind, and hydro as complementary pillars alongside firm generation and industrial infrastructure.",
  },
  {
    year: "Lead",
    title: "Trusted energy partner",
    description:
      "Inform stakeholders and deliver programmes that keep power, process, and critical infrastructure dependable.",
  },
]

export const impactStill = {
  image: img("pexels-malcolmhill-12270481.jpg"),
  imageAlt: "Row of large hydroelectric turbine generators inside a plant hall",
}

export const featuredProjects: IndustrialProject[] = [
  {
    id: "ind-01",
    title: "Open-pit resource corridor",
    summary:
      "Heavy-haul and pit operations supporting multi-year resource programmes with fleet logistics and site safety culture.",
    category: "Resources",
    location: "Multi-site",
    year: "2025",
    metric: "Continuous ops",
    image: img("Gold-Mine_Adobe-scaled-e1643707309450.jpeg"),
    imageAlt: "Three haul trucks at the rim of an open-pit mine at sunset",
  },
  {
    id: "ind-02",
    title: "Deep-level mining systems",
    summary:
      "Underground development and rock handling with drill jumbos, crews, and ground-control practices for confined environments.",
    category: "Resources",
    location: "Underground network",
    year: "2024",
    metric: "24/7 readiness",
    image: img("Mine-interior-in-Coodmilla-Cooperative-Gaelle-Tavernier-ARM.jpg"),
    imageAlt: "Miners working by lamp light in an underground rock gallery",
  },
  {
    id: "ind-03",
    title: "Offshore production complex",
    summary:
      "Marine production assets with helicopter and vessel logistics enabling sustained offshore energy operations.",
    category: "Oil & Gas",
    location: "Offshore basin",
    year: "2025",
    metric: "Marine ops",
    image: img("a71d58ca-c1b7-4da2-96fe-5a7ab692b34c.webp"),
    imageAlt: "Helicopter approaching a yellow offshore platform at dusk",
  },
  {
    id: "ind-04",
    title: "FPSO & floating systems",
    summary:
      "Floating production and support vessels delivering flexible capacity where fixed infrastructure is limited.",
    category: "Oil & Gas",
    location: "Deep water",
    year: "2024",
    metric: "FPSO class",
    image: img("26f848e8-776e-4de2-923e-8a1e734b9395.webp"),
    imageAlt: "Aerial view of an FPSO with support vessels and helicopters",
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
