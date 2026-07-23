import type { Metadata } from "next"
import { Header } from "@/components/header"
import { FooterSection } from "@/components/sections/footer-section"
import { SectionShell, SectionHeader } from "@/components/shared/section-shell"
import { ContactForm } from "@/components/contact/contact-form"
import { EmailCards } from "@/components/contact/email-cards"
import { CONTACT } from "@/content/contact"
import { BRAND } from "@/content/brand"

const { companyAddress } = BRAND

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${BRAND.name} — reach Arshad and Noor, or send a short message from the form.`,
}

export default function ContactPage() {
  return (
    <>
      <Header variant="solid" />
      <main id="main" className="nx-page bg-background">
        <SectionShell className="pt-[calc(5rem+var(--safe-top))] md:pt-[calc(6rem+var(--safe-top))]">
          <SectionHeader
            eyebrow={CONTACT.eyebrow}
            title={CONTACT.title}
            description={CONTACT.lead}
          />

          <div className="grid gap-12 md:grid-cols-2 md:gap-14 lg:gap-16">
            <div>
              <h2 className="sr-only">Send a message</h2>
              <ContactForm />
            </div>
            <EmailCards />
          </div>

          <div className="mt-14 border-t border-border pt-10 md:mt-16 md:pt-12">
            <h2 className="text-lg font-medium text-foreground">
              {CONTACT.addressSection.title}
            </h2>
            <address className="mt-4 not-italic text-sm leading-relaxed text-muted-foreground sm:text-base">
              <span className="block font-medium text-foreground">
                {companyAddress.legalName}
              </span>
              <span className="mt-1 block">{companyAddress.street}</span>
              <span className="block">{companyAddress.postalCity}</span>
              <span className="block">{companyAddress.country}</span>
            </address>
          </div>
        </SectionShell>
        <FooterSection />
      </main>
    </>
  )
}
