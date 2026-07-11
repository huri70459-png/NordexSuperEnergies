export type PageMeta = {
  title: string
  description: string
  ogImage?: string
}

export type NavItem = { label: string; href: string }

export type Stat = {
  id: string
  value: string
  label: string
}

export type TurbineModel = {
  id: "n149" | "n163" | "n175"
  name: string
  ratedPowerKw: number
  rotorDiameterM: number
  sweptAreaM2: number
  iecClass: string
  features: { title: string; description: string }[]
}

export type Service = {
  id: string
  title: string
  summary: string
  icon: "building-2" | "map" | "wrench"
}

export type FaqItem = {
  id: string
  question: string
  answer: string
}

export type SiteConfig = {
  brandName: string
  tagline: string
  nav: NavItem[]
  footer: {
    columns: { title: string; links: NavItem[] }[]
    copyright: string
    legalLinks: NavItem[]
  }
  contact: { email: string; hq: string }
  defaultMeta: PageMeta
  siteUrl: string
}
