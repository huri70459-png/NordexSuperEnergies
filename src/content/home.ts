import type { PageMeta } from "./types"
import { companyStats } from "./company"
import { services } from "./services"

export const home = {
  meta: {
    title: "Nordex Super Energies | Onshore Wind Turbines & Services",
    description:
      "NORDEX SUPER ENERGIES is a leading developer, manufacturer, and service provider of utility-scale onshore wind turbine systems. Driving the global energy transition.",
  } satisfies PageMeta,
  hero: {
    eyebrow: "Technology Powered by Nature",
    title: "NORDEX SUPER ENERGIES",
    summary:
      "We supply high-efficiency onshore wind turbine systems designed to maximize energy output under all climatic zones, empowering a zero-carbon future.",
    /** Inverted vs legacy: primary = Contact, secondary = Turbines */
    primaryCta: { label: "Contact", href: "/contact" },
    secondaryCta: { label: "Our turbines", href: "/turbines" },
    image: {
      src: "/assets/wind_farm_hero.jpg",
      alt: "Aerial view of an onshore wind farm at dusk",
    },
  },
  statsTeaser: companyStats,
  servicesTeaser: services,
}
