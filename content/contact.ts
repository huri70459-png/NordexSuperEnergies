/** Contact page copy + recipient list (mailto v1). */

export const CONTACT = {
  eyebrow: "Contact",
  title: "Get in touch",
  lead:
    "Share a short message and we will open your email app addressed to our team — or email either address directly.",
  form: {
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "you@company.com",
    messageLabel: "Message",
    messagePlaceholder: "How can we help?",
    submit: "Open email to send",
    success:
      "Your email app should open with your message ready. If nothing opened, use the addresses on this page or copy them into your mail client.",
    errors: {
      name: "Please enter your name.",
      email: "Please enter a valid email address.",
      message: "Please enter a message.",
    },
  },
  emailSection: {
    title: "Email us directly",
    description: "Prefer to write from your own inbox? Use either address below.",
  },
  emails: [
    {
      name: "Arshad",
      address: "arshad@nordexsuperenergies.com",
    },
    {
      name: "Noor",
      address: "noor@nordexsuperenergies.com",
    },
  ],
  addressSection: {
    title: "Our offices",
  },
} as const

export const CONTACT_MAILTO_RECIPIENTS = CONTACT.emails
  .map((e) => e.address)
  .join(",")
