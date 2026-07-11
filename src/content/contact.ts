import type { PageMeta } from "./types"
import { site } from "./site"

export const contact = {
  meta: {
    title: "Contact | Nordex Super Energies",
    description:
      "Request a project proposal or product inquiry from NORDEX SUPER ENERGIES.",
  } satisfies PageMeta,
  eyebrow: "Get in Touch",
  title: "Partner with the Energy Leaders",
  intro:
    "Ready to deploy efficient wind energy systems? Have questions about our products or ongoing project development opportunities? Our team is available to assist you.",
  formTitle: "Request Project Proposal",
  successTitle: "Thank you!",
  successMessage:
    "Your inquiry has been recorded in this browser session only. No email was sent and no CRM is connected yet — a utility specialist will not be notified until backend intake is enabled.",
  email: site.contact.email,
  hq: site.contact.hq,
}

export { site }
