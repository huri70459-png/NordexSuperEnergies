/** Site-wide brand copy for Nordex Super Energies */
export const BRAND = {
  name: "Nordex Super Energies",
  shortName: "Nordex",
  /** Dual-division lockup — matches live Energy portfolio + Antiques. */
  tagline: "Energy Portfolio · Antiques",
  description:
    "Nordex Super Energies advances energy systems across the value chain — resources, operations, renewables, and generation infrastructure — while curating a world-class antiques collection.",
  mission:
    "Grow dependable energy from resource base through renewables and plant infrastructure, with safety discipline and long-horizon engineering — and preserve cultural heritage through curated antiques.",
  /** Legal / postal block shown in footer and on Contact. */
  companyAddress: {
    legalName: "Nordex SE",
    street: "Langenhorner Chaussee 600",
    postalCity: "22418 Hamburg",
    country: "Germany",
  },
} as const

export const SITE_NAV = [
  { label: "Home", href: "/" },
  { label: "Antiques", href: "/heritage" },
  { label: "Energy", href: "/industrial" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/contact" },
] as const
