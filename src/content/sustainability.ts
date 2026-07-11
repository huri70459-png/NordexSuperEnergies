import type { PageMeta } from "./types"

export type SustainabilityPillar = {
  id: string
  title: string
  description: string
}

export const sustainabilityPillars: SustainabilityPillar[] = [
  {
    id: "recyclable-blades",
    title: "Recyclable rotor blades",
    description:
      "We are at the forefront of introducing circular designs. Our research department is working to scale fully recyclable rotor blades and components, significantly cutting decommission waste.",
  },
  {
    id: "low-carbon-concrete",
    title: "Low-carbon concrete towers",
    description:
      "Utilizing low-carbon concrete tower formulations to reduce embodied carbon across the manufacturing footprint.",
  },
  {
    id: "hybrid-wood-steel",
    title: "Hybrid wood-steel assemblies",
    description:
      "Deploying hybrid wood-steel assemblies so sustainability is woven into tower and structural manufacturing.",
  },
  {
    id: "net-zero-2030",
    title: "Net-zero manufacturing by 2030",
    description:
      "Accelerating efforts to neutralize the direct carbon footprints of all nacelle and tower fabrication sites globally by 2030.",
  },
]

export const sustainability = {
  meta: {
    title: "Sustainability | Nordex Super Energies",
    description:
      "Circular turbine design, low-carbon manufacturing, and a net-zero fabrication target by 2030.",
  } satisfies PageMeta,
  eyebrow: "Sustainability",
  title: "Empowering a Zero-Carbon Earth",
  intro:
    "NORDEX SUPER ENERGIES is dedicated to leaving the planet cleaner, healthier, and more sustainable for future generations.",
  pillars: sustainabilityPillars,
}
