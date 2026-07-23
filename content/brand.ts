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
  /**
   * Offices shown in footer and on Contact.
   * `lines` are postal lines under the optional legal/label name.
   */
  offices: [
    {
      label: "Head office",
      name: "Nordex SE",
      lines: [
        "Langenhorner Chaussee 600",
        "22418 Hamburg",
        "Germany",
      ],
    },
    {
      label: "Branch office",
      name: "Nordex Super Energies",
      lines: [
        "Centura Square 224, 2nd floor",
        "Road no. 27, opp. Lanxess House",
        "S.G. Brave Road, Wagle Estate",
        "Thane, Maharashtra 400604",
        "India",
      ],
    },
  ],
} as const

export const SITE_NAV = [
  { label: "Home", href: "/" },
  { label: "Antiques", href: "/heritage" },
  { label: "Energy", href: "/industrial" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Contact", href: "/contact" },
] as const
