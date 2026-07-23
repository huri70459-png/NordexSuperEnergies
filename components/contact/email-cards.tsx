import { Mail } from "lucide-react"
import { CONTACT } from "@/content/contact"

export function EmailCards() {
  const { emailSection, emails } = CONTACT

  return (
    <aside className="flex flex-col gap-6" aria-labelledby="contact-emails-heading">
      <div>
        <h2 id="contact-emails-heading" className="text-lg font-medium text-foreground">
          {emailSection.title}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {emailSection.description}
        </p>
      </div>

      <ul className="flex flex-col gap-3">
        {emails.map((item) => (
          <li key={item.address}>
            <a
              href={`mailto:${item.address}`}
              className="nx-card nx-touch group flex items-start gap-3 p-4 transition-colors hover:border-foreground/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span
                className="mt-0.5 flex size-9 shrink-0 items-center justify-center border border-border bg-muted/40 text-foreground"
                aria-hidden
              >
                <Mail className="size-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-medium text-foreground">{item.name}</span>
                <span className="mt-0.5 block break-all text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                  {item.address}
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
