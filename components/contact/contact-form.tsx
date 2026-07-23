"use client"

import { useId, useState, type FormEvent } from "react"
import { CONTACT, CONTACT_MAILTO_RECIPIENTS } from "@/content/contact"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

type FieldErrors = {
  name?: string
  email?: string
  message?: string
}

function isValidEmail(value: string) {
  // ponytail: simple shape check; upgrade to Zod if form grows
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function buildMailto(name: string, email: string, message: string) {
  const subject = `Contact from ${name}`
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    "",
    message,
  ].join("\n")

  return `mailto:${CONTACT_MAILTO_RECIPIENTS}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function ContactForm() {
  const formId = useId()
  const nameId = `${formId}-name`
  const emailId = `${formId}-email`
  const messageId = `${formId}-message`
  const honeypotId = `${formId}-company`

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  /** Honeypot — bots fill this; humans leave empty. */
  const [company, setCompany] = useState("")
  const [errors, setErrors] = useState<FieldErrors>({})
  const [openedMail, setOpenedMail] = useState(false)

  const { form } = CONTACT

  function validate(): FieldErrors {
    const next: FieldErrors = {}
    if (!name.trim()) next.name = form.errors.name
    if (!email.trim() || !isValidEmail(email.trim())) next.email = form.errors.email
    if (!message.trim()) next.message = form.errors.message
    return next
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (company.trim()) {
      // Silent discard for honeypot hits
      setOpenedMail(true)
      return
    }

    const next = validate()
    setErrors(next)
    if (Object.keys(next).length > 0) return

    const href = buildMailto(name.trim(), email.trim(), message.trim())
    window.location.href = href
    setOpenedMail(true)
  }

  return (
    <div>
      <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5" aria-describedby={openedMail ? `${formId}-success` : undefined}>
        {/* Honeypot: visually hidden, not focusable for keyboard users */}
        <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden>
          <label htmlFor={honeypotId}>Company</label>
          <input
            id={honeypotId}
            name="company"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor={nameId}>{form.nameLabel}</Label>
          <Input
            id={nameId}
            name="name"
            type="text"
            autoComplete="name"
            placeholder={form.namePlaceholder}
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? `${nameId}-error` : undefined}
            className="min-h-[var(--touch-min)] md:min-h-9"
          />
          {errors.name ? (
            <p id={`${nameId}-error`} className="text-sm text-destructive" role="alert">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor={emailId}>{form.emailLabel}</Label>
          <Input
            id={emailId}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder={form.emailPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? `${emailId}-error` : undefined}
            className="min-h-[var(--touch-min)] md:min-h-9"
          />
          {errors.email ? (
            <p id={`${emailId}-error`} className="text-sm text-destructive" role="alert">
              {errors.email}
            </p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor={messageId}>{form.messageLabel}</Label>
          <Textarea
            id={messageId}
            name="message"
            rows={6}
            placeholder={form.messagePlaceholder}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? `${messageId}-error` : undefined}
            className="min-h-32"
          />
          {errors.message ? (
            <p id={`${messageId}-error`} className="text-sm text-destructive" role="alert">
              {errors.message}
            </p>
          ) : null}
        </div>

        <Button type="submit" className="nx-btn nx-btn-solid nx-touch h-auto min-h-[var(--touch-min)] w-full sm:w-auto">
          {form.submit}
        </Button>
      </form>

      {openedMail ? (
        <p
          id={`${formId}-success`}
          className="mt-5 border border-border bg-muted/30 px-4 py-3 text-sm leading-relaxed text-muted-foreground"
          role="status"
        >
          {form.success}
        </p>
      ) : null}
    </div>
  )
}
