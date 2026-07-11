import type { Metadata } from "next"

import { contact } from "@/content/contact"

export const metadata: Metadata = {
  title: contact.meta.title,
  description: contact.meta.description,
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <p className="text-small font-medium text-primary">{contact.eyebrow}</p>
      <h1 className="mt-3 text-h1 text-foreground">{contact.title}</h1>
      <p className="mt-6 max-w-2xl text-body text-muted-foreground">
        {contact.intro}
      </p>
      <p className="mt-4 text-small text-muted-foreground">
        Inquiry form ships in a later release. For now, email{" "}
        <a
          href={`mailto:${contact.email}`}
          className="font-medium text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          {contact.email}
        </a>
        .
      </p>
    </div>
  )
}
