"use client"

import * as React from "react"
import { Loader2Icon } from "lucide-react"

import { track } from "@/lib/analytics"
import {
  inquirySchema,
  isTimeTrap,
  type InquiryInput,
} from "@/lib/validations/inquiry"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const FIELD_ORDER = [
  "fullName",
  "email",
  "company",
  "capacityMw",
  "message",
] as const

type FieldName = (typeof FIELD_ORDER)[number]

type FieldErrors = Partial<Record<FieldName, string>>

const SUCCESS_COPY =
  "Thank you. Your details were checked in this browser only. This Phase 1 demo does not transmit inquiries to our team yet. When production intake is connected, a real confirmation path will replace this message."

function fieldErrorMessage(issue: { message: string }, key: string): string {
  if (key === "fullName") return "Enter your full name (at least 2 characters)."
  if (key === "email") return "Enter a valid email address."
  if (key === "company") return "Enter your company name."
  if (key === "capacityMw")
    return "Choose a capacity between 10 and 500 MW in steps of 10."
  if (key === "message") return "Message must be at least 20 characters."
  return issue.message
}

export function ProjectInquiryForm() {
  const [fullName, setFullName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [company, setCompany] = React.useState("")
  const [capacityMw, setCapacityMw] = React.useState(50)
  const [message, setMessage] = React.useState("")
  const [companyWebsite, setCompanyWebsite] = React.useState("")
  const [firstFocusAt, setFirstFocusAt] = React.useState<number | null>(null)
  const [pending, setPending] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const [errors, setErrors] = React.useState<FieldErrors>({})

  const refs = {
    fullName: React.useRef<HTMLInputElement>(null),
    email: React.useRef<HTMLInputElement>(null),
    company: React.useRef<HTMLInputElement>(null),
    capacityMw: React.useRef<HTMLInputElement>(null),
    message: React.useRef<HTMLTextAreaElement>(null),
  }

  function markFirstFocus() {
    setFirstFocusAt((prev) => (prev == null ? Date.now() : prev))
  }

  function focusFirstError(next: FieldErrors) {
    for (const key of FIELD_ORDER) {
      if (next[key]) {
        refs[key].current?.focus()
        break
      }
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    track("form_submit_attempt")
    setPending(true)
    setErrors({})

    const submitAt = Date.now()

    // Brief pending feedback so aria-busy is observable
    await new Promise((r) => setTimeout(r, 200))

    const honeypotFilled = companyWebsite.trim().length > 0
    if (honeypotFilled) {
      track("form_submit_blocked", { blockedReason: "honeypot" })
      setSubmitted(true)
      setPending(false)
      return
    }

    if (isTimeTrap(firstFocusAt, submitAt)) {
      track("form_submit_blocked", { blockedReason: "time_trap" })
      setSubmitted(true)
      setPending(false)
      return
    }

    const payload: InquiryInput = {
      fullName: fullName.trim(),
      email: email.trim(),
      company: company.trim(),
      capacityMw,
      message: message.trim(),
      company_website: companyWebsite,
    }

    const result = inquirySchema.safeParse(payload)
    if (!result.success) {
      const next: FieldErrors = {}
      for (const issue of result.error.issues) {
        const key = issue.path[0]
        if (
          typeof key === "string" &&
          (FIELD_ORDER as readonly string[]).includes(key) &&
          !next[key as FieldName]
        ) {
          next[key as FieldName] = fieldErrorMessage(issue, key)
        }
      }
      setErrors(next)
      setPending(false)
      // Focus after paint so invalid fields are marked
      queueMicrotask(() => focusFirstError(next))
      return
    }

    // ponytail: no CRM — upgrade path: POST /api/inquiry → provider; then replace success copy with real delivery confirmation
    track("form_submit_success", { capacityMw: result.data.capacityMw })
    setSubmitted(true)
    setPending(false)
  }

  if (submitted) {
    return (
      <Alert className="border-primary/20 bg-accent/40">
        <AlertTitle>Thank you</AlertTitle>
        <AlertDescription>{SUCCESS_COPY}</AlertDescription>
      </Alert>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-busy={pending}
      className="space-y-5"
    >
      <div className="space-y-2">
        <Label htmlFor="fullName">Full name</Label>
        <Input
          ref={refs.fullName}
          id="fullName"
          name="fullName"
          autoComplete="name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          onFocus={markFirstFocus}
          disabled={pending}
          aria-invalid={!!errors.fullName}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
          className="min-h-11"
        />
        {errors.fullName ? (
          <p id="fullName-error" className="text-small text-destructive">
            {errors.fullName}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          ref={refs.email}
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={markFirstFocus}
          disabled={pending}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="min-h-11"
        />
        {errors.email ? (
          <p id="email-error" className="text-small text-destructive">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company</Label>
        <Input
          ref={refs.company}
          id="company"
          name="company"
          autoComplete="organization"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          onFocus={markFirstFocus}
          disabled={pending}
          aria-invalid={!!errors.company}
          aria-describedby={errors.company ? "company-error" : undefined}
          className="min-h-11"
        />
        {errors.company ? (
          <p id="company-error" className="text-small text-destructive">
            {errors.company}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <Label htmlFor="capacityMw">Planned capacity (MW)</Label>
          <span className="text-small font-medium text-foreground tabular-nums">
            {capacityMw} MW
          </span>
        </div>
        <Input
          ref={refs.capacityMw}
          id="capacityMw"
          name="capacityMw"
          type="range"
          min={10}
          max={500}
          step={10}
          value={capacityMw}
          onChange={(e) => setCapacityMw(Number(e.target.value))}
          onFocus={markFirstFocus}
          disabled={pending}
          aria-valuemin={10}
          aria-valuemax={500}
          aria-valuenow={capacityMw}
          aria-valuetext={`${capacityMw} megawatts`}
          aria-invalid={!!errors.capacityMw}
          aria-describedby={
            errors.capacityMw ? "capacityMw-error" : "capacityMw-hint"
          }
          className="h-11 border-0 bg-transparent px-0 shadow-none focus-visible:ring-3 focus-visible:ring-ring/50"
        />
        <p id="capacityMw-hint" className="text-small text-muted-foreground">
          10–500 MW in steps of 10
        </p>
        {errors.capacityMw ? (
          <p id="capacityMw-error" className="text-small text-destructive">
            {errors.capacityMw}
          </p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          ref={refs.message}
          id="message"
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onFocus={markFirstFocus}
          disabled={pending}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="min-h-28"
        />
        {errors.message ? (
          <p id="message-error" className="text-small text-destructive">
            {errors.message}
          </p>
        ) : null}
      </div>

      {/* Honeypot — must stay empty; clipped from visual layout */}
      <div
        className="absolute -left-[9999px] h-0 w-0 overflow-hidden"
        aria-hidden="true"
      >
        <label htmlFor="company_website">Company website</label>
        <input
          id="company_website"
          name="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={companyWebsite}
          onChange={(e) => setCompanyWebsite(e.target.value)}
        />
      </div>

      <Button
        type="submit"
        disabled={pending}
        aria-busy={pending}
        className="min-h-11 w-full sm:w-auto"
      >
        {pending ? (
          <>
            <Loader2Icon className="animate-spin" data-icon="inline-start" />
            Submitting…
          </>
        ) : (
          "Submit inquiry"
        )}
      </Button>
    </form>
  )
}
