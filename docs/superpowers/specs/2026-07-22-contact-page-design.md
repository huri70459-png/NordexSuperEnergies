# Contact page design — Nordex Super Energies

**Date:** 2026-07-22  
**Status:** Approved (brainstorming) · implement v1

## Goal

Add `/contact` so visitors can share name, email, and a message, and reach the team at both inbox addresses without a server mail provider.

## Decisions

| Topic | Choice |
|-------|--------|
| Submit | `mailto:` opens the visitor’s mail client |
| Recipients | Always both: `arshad@nordexsuperenergies.com`, `noor@nordexsuperenergies.com` |
| Fields | Name, Email, Message (all required) |
| Layout | Split: form + email cards (form first on mobile) |
| Chrome | Contact in header `SITE_NAV` and footer Explore |
| Header | `variant="solid"` (no dark hero) |
| Out of scope | Server email API, CRM, captcha service, phone/company fields |

## Behavior

1. Validate name, email format, and non-empty message client-side.
2. On valid submit, open `mailto:arshad@…,noor@…` with subject `Contact from {name}` and body including name, reply email, and message.
3. Show honest success copy: the mail app should open — do **not** claim the website transmitted the message.
4. Email cards are independent `mailto:` links for each address.

## Files

- `app/contact/page.tsx`
- `content/contact.ts`
- `components/contact/contact-form.tsx`
- `components/contact/email-cards.tsx`
- `content/brand.ts` (`SITE_NAV`)
- `components/sections/footer-section.tsx`

## Check

`/contact` loads; nav/footer link works; mailto To/subject/body correct after form submit.
