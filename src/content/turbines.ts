import type { PageMeta, TurbineModel } from "./types"

/** Shared platform features from legacy product section (not per-model). */
const platformFeatures: TurbineModel["features"] = [
  {
    title: "Optimized Cost of Energy (COE)",
    description:
      "Substantial energy yields combined with low operational lifecycle and maintenance costs.",
  },
  {
    title: "High-Fidelity Engineering",
    description:
      "Precisely designed components including pitch controls, yaw drives, robust gearboxes, and generator sets.",
  },
  {
    title: "Grid Capability and Compliance",
    description:
      "Integrated control technologies matching the strict stability criteria of national electricity grids.",
  },
]

/** Canonical specs from legacy `specsData` (index (2).css / _legacy/source.html). */
export const turbines: TurbineModel[] = [
  {
    id: "n149",
    name: "N149",
    ratedPowerKw: 4500,
    rotorDiameterM: 149,
    sweptAreaM2: 17437,
    iecClass: "IEC S (Medium / High)",
    features: platformFeatures,
  },
  {
    id: "n163",
    name: "N163",
    ratedPowerKw: 5700,
    rotorDiameterM: 163,
    sweptAreaM2: 20867,
    iecClass: "IEC S (Medium / Low)",
    features: platformFeatures,
  },
  {
    id: "n175",
    name: "N175",
    ratedPowerKw: 6800,
    rotorDiameterM: 175,
    sweptAreaM2: 24053,
    iecClass: "IEC S (Low Wind)",
    features: platformFeatures,
  },
]

export const turbinesPage = {
  meta: {
    title: "Turbines | Nordex Super Energies",
    description:
      "Advanced onshore wind turbines in the 4–7 MW class — N149, N163, and N175 platforms.",
  } satisfies PageMeta,
  eyebrow: "Our Products",
  title: "Advanced Onshore Wind Turbines",
  intro:
    "Engineering robust, highly efficient systems tailored for maximum yields, limited space, and constrained grid capacities.",
  platformTitle: "The 4 to 7 MW Turbine Class",
  platformSummary:
    "Our comprehensive turbine platform offers individual solutions for all geographic regions and climatic settings.",
  cta: { label: "Request Technical Data", href: "/contact" },
}
