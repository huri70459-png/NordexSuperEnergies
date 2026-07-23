import type { Metadata } from "next"
import { Header } from "@/components/header"
import { FooterSection } from "@/components/sections/footer-section"
import { SectionShell, SectionHeader } from "@/components/shared/section-shell"
import { ContactForm } from "@/components/contact/contact-form"
import { EmailCards } from "@/components/contact/email-cards"
import { CONTACT } from "@/content/contact"
import { BRAND } from "@/content/brand"

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
            <div className="mt-6 grid gap-8 sm:grid-cols-2 sm:gap-10">
              {BRAND.offices.map((office) => (
                <address
                  key={office.label}
                  className="not-italic text-sm leading-relaxed text-muted-foreground sm:text-base"
                >
                  <span className="block text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {office.label}
                  </span>
                  <span className="mt-2 block font-medium text-foreground">
                    {office.name}
                  </span>
                  {office.lines.map((line) => (
                    <span key={line} className="mt-0.5 block first:mt-1">
                      {line}
                    </span>
                  ))}
                </address>
              ))}
            </div>
          </div>
        </SectionShell>
        <FooterSection />
      </main>
    </>
  )
}
