import type { FaqItem } from "./types"

export const faqItems: FaqItem[] = [
  {
    id: "deployment-lifecycle",
    question: "How long is the deployment lifecycle of a wind farm?",
    answer:
      "Typically, project planning, permitting, and grid evaluation takes 12 to 24 months. Once construction begins, fully constructing a turnkey site takes between 6 to 12 months depending on size, terrain, and climatic challenges.",
  },
  {
    id: "blade-recyclability",
    question: "Are NORDEX SUPER ENERGIES blades recyclable?",
    answer:
      "Yes. We are currently rolling out fully recyclable blade technology which enables the composite fibers and binding resins to be separated cleanly at end-of-life, drastically lowering landfill impact.",
  },
  {
    id: "cold-climates",
    question: "How do your wind systems behave in cold climates?",
    answer:
      "All our turbine configurations offer specialized Cold Climate Version (CCV) adaptations, featuring active anti-icing systems on rotor blades and internal nacelle heating systems to keep mechanics operating down to -30°C.",
  },
  {
    id: "grid-stability",
    question: "How do you handle grid synchronization stability?",
    answer:
      "Our turbine platforms are built with advanced double-fed induction generators (DFIG) and full converter systems, matching strict national utility criteria for ride-through capability, reactive power feed, and inertia emulation.",
  },
]

export const faq = {
  eyebrow: "FAQ",
  title: "Frequently Asked Questions",
  intro:
    "Have questions about turbine dimensions, construction logistics, or wind farm compliance? Here are our standard responses.",
  items: faqItems,
}
