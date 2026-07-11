import type { SiteConfig } from "./types"

export const site: SiteConfig = {
  brandName: "Nordex Super Energies",
  tagline: "Enterprise wind energy systems",
  siteUrl: "https://nordex-super-energies.com",
  nav: [
    { label: "Home", href: "/" },
    { label: "Turbines", href: "/turbines" },
    { label: "Services", href: "/services" },
    { label: "Company", href: "/company" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Contact", href: "/contact" },
  ],
  footer: {
    columns: [
      {
        title: "Product",
        links: [
          { label: "Turbines", href: "/turbines" },
          { label: "Services", href: "/services" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "/company" },
          { label: "Sustainability", href: "/sustainability" },
          { label: "Contact", href: "/contact" },
        ],
      },
    ],
    copyright: "© 2026 NORDEX SUPER ENERGIES SE. All rights reserved.",
    legalLinks: [
      { label: "Legal Notice", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  },
  contact: {
    email: "info@nordex-super-energies.com",
    hq: "Hamburg & Legal Register: Rostock, Germany",
  },
  defaultMeta: {
    title: "Nordex Super Energies",
    description:
      "Enterprise wind turbines and project services for utilities, IPPs, and EPCs.",
    ogImage: "/assets/wind_farm_hero.jpg",
  },
}
