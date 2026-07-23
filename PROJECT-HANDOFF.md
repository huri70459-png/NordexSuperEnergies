# Project handoff — Nordex Super Energies

**Updated:** 2026-07-23  
**Production branch:** `main` (tip: `git log -1` — currently **`714d392`**)  
**Remote:** https://github.com/huri70459-png/NordexSuperEnergies  
**Live site:** https://nordexsuperenergies.com (apex canonical; www → apex 308)  
**Vercel:** project `nordex-super-energies` · team `raybeam-s-projects` · `prj_SkW1j6YezPiTDMgOiXTj1MEhgSmm`  
**Session memory:** `session/20260723_contact_deploy/handoff.md` (gitignored; also see newest `session/*`)

---

## Product

Dual-division institutional site + contact:

| Route | Theme | Role |
|-------|--------|------|
| `/` | default | Dual-division **gateway** (Energy + Antiques) |
| `/heritage` | `.theme-heritage` | Antiques / museum collection |
| `/industrial` | `.theme-industrial` | Energy **portfolio** |
| `/contact` | default | Contact form (mailto) + email cards + **head + branch offices** |

**Brand lockup:** Energy Portfolio · Antiques (`content/brand.ts`)

**Offices** (footer all pages + bottom of `/contact`) — `BRAND.offices` in `content/brand.ts`:

| Office | Address |
|--------|---------|
| Head office | Nordex SE · Langenhorner Chaussee 600 · 22418 Hamburg · Germany |
| Branch office | Nordex Super Energies · Centura Square 224, 2nd floor · Road no. 27, opp. Lanxess House · S.G. Brave Road, Wagle Estate · Thane, Maharashtra 400604 · India |

---

## Stack

- Next.js 16 (App Router) · Tailwind v4 · Framer Motion · `next/image`
- shadcn/ui under `components/ui/` (marketing pages mostly custom + `nx-*`)
- Content: `content/home.ts`, `heritage.ts`, `industrial.ts`, `brand.ts`, **`contact.ts`**
- Design system: `design-system/MASTER.md` + page docs
- Motion: `lib/motion.ts`, `components/motion/fade-up.tsx`, `app/template.tsx`

---

## Status (what is done)

- [x] Heritage / Energy / Home dual-gateway live  
- [x] Mobile S1–S3 polish on `main` (`53ee267` / PR #2 era)  
- [x] Google Sans site name lockup (`e8ca540`)  
- [x] **Contact v1** (`9d37302`): `/contact`, mailto form, Arshad + Noor cards, nav + footer  
- [x] **Head office (Hamburg)** (`881223d`): brand + contact + footer  
- [x] **Branch office (Thane, India)** (`714d392`): `BRAND.offices[]` — contact “Our offices” + footer both locations  
- [x] **Production:** `origin/main` @ `714d392` deployed via `vercel --prod` → apex  
- [x] Live smoke 2026-07-23: `/` `/contact` `/heritage` `/industrial` **200**; dual offices on contact/footer

### Contact v1 behavior

- Submit opens visitor mail client to **both**  
  `arshad@nordexsuperenergies.com`, `noor@nordexsuperenergies.com`  
- Subject: `Contact from {name}`; body includes name, reply email, message  
- Honest success copy (site does **not** claim server delivery)  
- Spec: `docs/superpowers/specs/2026-07-22-contact-page-design.md`

### Not done / next ops

- [ ] **Domain email delivery** — DNS has **no MX** yet; enable free **Cloudflare Email Routing** (domain NS already on Cloudflare) so `@nordexsuperenergies.com` inboxes receive mail  
- [ ] Optional: Gmail “Send as” / Workspace if they need professional send-from domain  
- [ ] Brand/legal: confirm **Nordex SE** + Hamburg address is intentional (name/address collide with listed German wind manufacturer)  
- [ ] Optional later: server-side mail API, careers/social URLs, prune unused bottle images, Dependabot noise on GitHub  

### Snapshot branch

| Branch | Role |
|--------|------|
| `main` | **Ship / production** |
| `ALPHAv2` | Brand/site snapshot — **do not merge** unless user asks |
| `pre-deploy` | Historical pre-ship tip |

---

## Run locally

```bash
cd "F:\Projects\Ray-studio Creations\Nordex Super Energies"
npm install   # if needed
npm run dev   # http://localhost:3000
```

| Page | URL |
|------|-----|
| Home | http://localhost:3000/ |
| Antiques | http://localhost:3000/heritage |
| Energy | http://localhost:3000/industrial |
| Contact | http://localhost:3000/contact |

```bash
npm run build
npx.cmd vercel --prod --yes   # deploy production (project already linked)
```

---

## Architecture map

```
app/
  page.tsx              Home
  heritage/page.tsx     Antiques
  industrial/page.tsx   Energy
  contact/page.tsx      Contact
  layout.tsx            fonts, ThemeProvider, skip link
  template.tsx          route enter motion
  globals.css           tokens, nx-*, themes, .nx-btn
components/
  header.tsx            SITE_NAV from brand
  contact/              ContactForm, EmailCards
  sections/*            Home sections + footer (address)
  heritage/*            Museum UI
  industrial/*          Energy UI
  motion/fade-up.tsx
  shared/*              SectionShell, theme toggle, scroll hint
content/
  brand.ts              BRAND, SITE_NAV, offices
  contact.ts            form copy, emails
  home.ts, heritage.ts, industrial.ts
public/images/
  energy/               Portfolio stills + hero MP4
  heritage/             Collection stills
docs/superpowers/specs/2026-07-22-contact-page-design.md
```

---

## Rules for next agent

1. Read this file + `design-system/MASTER.md` before redesign.  
2. Do **not** re-redesign Heritage/Energy/Home wholesale unless asked — polish only.  
3. **Ponytail / AGENTS.md:** YAGNI; shortest correct diff; Next.js 16 docs under `node_modules/next/dist/docs/`.  
4. Local media only on live routes — no Unsplash.  
5. Energy copy must stay **portfolio-honest** (mining/O&G present in photos).  
6. Prefer `FadeUp` / `lib/motion.ts` / `.nx-btn*` / `SectionShell` over new systems.  
7. Git noise: ignore `Omnisync-Mutated-Folder/`, `archive/`, `session/`, `*.zip`, `Sessionchat*` — never commit Omnisync dumps or chat dumps.  
8. Do **not** commit extra untracked `content/Google_Sans/*` dumps unless user asks (site fonts already shipped separately).  
9. Session memory: latest under `session/` → `handoff.md`.  
10. Windows: use `npx.cmd` if execution policy blocks npm.ps1.  
11. Contact stays **mailto v1** unless user asks for a server mail provider.  
12. Production ship path: commit → `git push origin main` → `npx.cmd vercel --prod --yes` (or rely on Git integration if enabled).

---

## Session memory

| Session | Notes |
|---------|--------|
| `session/20260716_*` | Mobile review, pre-deploy, ALPHAv2 era |
| `session/20260723_172537/` | Contact committed (pre-push snapshot) |
| `session/20260723_contact_deploy/` | **Current** — contact, dual offices, production deploy, handoff |

Start resume: **`session/20260723_contact_deploy/handoff.md`**
