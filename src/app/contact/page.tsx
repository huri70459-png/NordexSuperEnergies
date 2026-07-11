import type { Metadata } from "next"

import { contact } from "@/content/contact"
import { ProjectInquiryForm } from "@/components/forms/ProjectInquiryForm"

export const metadata: Metadata = {
  title: contact.meta.title,
  description: contact.meta.description,
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start">
        <div>
          <p className="text-small font-medium text-primary">{contact.eyebrow}</p>
          <h1 className="mt-3 text-h1 text-foreground">{contact.title}</h1>
          <p className="mt-6 max-w-2xl text-body text-muted-foreground">
            {contact.intro}
          </p>
          <dl className="mt-8 space-y-4 text-small">
            <div>
              <dt className="font-medium text-foreground">Headquarters</dt>
              <dd className="mt-1 text-muted-foreground">{contact.hq}</dd>
            </div>
            <div>
              <dt className="font-medium text-foreground">Email</dt>
              <dd className="mt-1 text-muted-foreground">{contact.email}</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <h2 className="text-h3 text-foreground">{contact.formTitle}</h2>
          <div className="mt-6">
            <ProjectInquiryForm />
          </div>
        </div>
      </div>
    </div>
  )
}
