import type { PageMeta, Stat } from "./types"

export const companyStats: Stat[] = [
  {
    id: "experience",
    value: "40+",
    label: "Years of Technology Experience",
  },
  {
    id: "power",
    value: "4–7 MW",
    label: "Turbine Power Class Portfolio",
  },
  {
    id: "service-points",
    value: "380+",
    label: "Global After-Sales Service Points",
  },
  {
    id: "countries",
    value: "30+",
    label: "Active Operational Countries",
  },
]

export const company = {
  meta: {
    title: "Company | Nordex Super Energies",
    description:
      "Four decades developing, manufacturing, and servicing utility-scale onshore wind turbines.",
  } satisfies PageMeta,
  eyebrow: "About the Company",
  title: "Leading the Green Transformation",
  about:
    "For four decades, our core competence and passion has been the development, manufacture, project management, and servicing of utility-scale onshore wind turbines.",
  stats: companyStats,
}
