import type { PageMeta, Service } from "./types"

export const services: Service[] = [
  {
    id: "turnkey",
    title: "Turnkey Projects",
    summary:
      "We handle full engineering, procurement, construction, and commissioning (EPC) services for wind farms globally, ensuring seamless on-time project completion.",
    icon: "building-2",
  },
  {
    id: "development",
    title: "Project Development",
    summary:
      "Offering support for micro-siting, meteorological analysis, environmental permitting, and layout optimization to secure maximum wind capture rates.",
    icon: "map",
  },
  {
    id: "servicing",
    title: "Global Servicing",
    summary:
      "Over 380 localized service depots and a global team of maintenance technicians monitor and maintain systems 24/7 to ensure maximum operational uptime.",
    icon: "wrench",
  },
]

export const servicesPage = {
  meta: {
    title: "Services | Nordex Super Energies",
    description:
      "Turnkey EPC, project development, and global servicing across the wind farm lifecycle.",
  } satisfies PageMeta,
  eyebrow: "Services",
  title: "Comprehensive Project Lifecycle Support",
  intro:
    "Supporting our clients throughout the entire value chain: from active site development to turnkey engineering and long-term service agreements.",
  items: services,
}
