# Project handoff — Nordex Super Energies

**Updated:** 2026-07-16  
**Branch:** `pre-deploy` (tip: `git log -1`)  
**Remote:** https://github.com/huri70459-png/NordexSuperEnergies/tree/pre-deploy  
**Deploy zip:** `Nordex-Super-Energies-Deployable.zip` (~117 MB, gitignored; recreate with `git archive`)

---

## Product

Dual-division institutional site:

| Route | Theme | Role |
|-------|--------|------|
| `/` | default | Dual-division **gateway** (Energy + Antiques) |
| `/heritage` | `.theme-heritage` | Antiques / museum collection |
| `/industrial` | `.theme-industrial` | Energy **portfolio** (resources → O&G → renewables → generation/infra) |

**Brand lockup:** Energy Portfolio · Antiques (`content/brand.ts`)

---

## Stack

- Next.js 16 (App Router) · Tailwind v4 · Framer Motion · `next/image`
- shadcn/ui kit present under `components/ui/` (marketing pages mostly custom + `nx-*` utilities)
- Content modules: `content/home.ts`, `content/heritage.ts`, `content/industrial.ts`, `content/brand.ts`
- Design system: `design-system/MASTER.md` + `design-system/pages/{home,heritage,energy}.md`
- Motion: `lib/motion.ts`, `components/motion/fade-up.tsx`, `app/template.tsx`

---

## Status (what is done)

- [x] Heritage redesign + local assets + filter/masonry + museum cards  
- [x] Energy redesign + local assets + hero video/poster + portfolio sections  
- [x] Home dual-gateway redesign + local assets  
- [x] Audit pass: dead footer links removed, brand/tagline aligned, fake stats fixed, Unsplash dead sections deleted, Home de-duped (pillars only), sharp radius + `.nx-btn*`, skip link  
- [x] `pre-deploy` branch committed and pushed  
- [x] Deploy zip generated from `git archive` (local file; not in git)
- [x] Phase 1 polish: CTAs, motion, type floor, hero offset, header radius  
- [x] Phase 2 Energy length: drop timeline + featured; stats use `--section-y-sm`  
- [x] Phase 3 a11y/cleanup: mobile focus trap, heritage tab scrollIntoView, dead CSS purge  
- [x] **Phase 4 ship gate (local):** `tsc --noEmit` OK · `npm run build` OK · prod smoke `/` `/heritage` `/industrial` 200 · 404 OK · 54/54 content media paths exist · deploy zip refreshed (~116.6 MB)

## Not done / optional next

- [ ] **Vercel preview** — blocked until CLI login (`npx vercel login`) or GitHub import of `pre-deploy` (no Nordex project linked yet; team MCP sees other projects only)  
- [ ] Eyeball visual QA in browser (phone + desktop × 3 routes; light/dark once) — automated HTML smoke passed  
- [ ] Contact / careers / social real URLs when available  
- [ ] Production deploy (prefer **preview first**; public brand decision still advisory before go-live)  
- [ ] Merge `pre-deploy` → `main` when you approve  
- [ ] Prune unused product bottle images under `public/images/*` (legacy template leftovers)

### Phase 4 smoke log (2026-07-16)

| Check | Result |
|-------|--------|
| `npx tsc --noEmit` | exit 0 |
| `npm run build` (Next 16.0.10) | exit 0; static `/`, `/heritage`, `/industrial` |
| Prod `next start` smoke | Home / Antiques / Energy **200**; unknown route **404** |
| Content markers | Home dual CTAs present; Energy has `#portfolio`, no timeline; Heritage collection present |
| Content media refs | **54/54** files on disk |
| Key static assets | hero mp4, key JPG/WEBP **200** |
| Deploy zip | recreated from `HEAD` via `git archive` |
| Vercel remote | **not deployed** — no local `vercel` credentials / no project |

---

## Run locally

```bash
cd "F:\Projects\Ray-studio Creations\Nordex Super Energies"
# Windows PATH: prefer "C:\Program Files\nodejs\npx.cmd" if policy blocks .ps1
npm install   # if needed
npm run dev   # http://localhost:3000
```

| Page | URL |
|------|-----|
| Home | http://localhost:3000/ |
| Antiques | http://localhost:3000/heritage |
| Energy | http://localhost:3000/industrial |

```bash
npx tsc --noEmit   # typecheck
npm run build      # production build
```

### Recreate deploy zip from current branch tip

```bash
git archive --format=zip --prefix=Nordex-Super-Energies/ -o Nordex-Super-Energies-Deployable.zip HEAD
```

Zip contains source + `public/` media — **not** `node_modules` / `.next`. Deploy: unzip → `npm install` → `npm run build` → `npm start` (or Vercel import of `pre-deploy`).

---

## Architecture map

```
app/
  page.tsx              Home
  heritage/page.tsx     Antiques
  industrial/page.tsx   Energy
  layout.tsx            fonts, ThemeProvider, skip link
  template.tsx          route enter motion
  globals.css           tokens, nx-*, themes, .nx-btn
components/
  header.tsx
  sections/*            Home sections
  heritage/*            Museum UI
  industrial/*          Energy UI
  motion/fade-up.tsx
  shared/*              SectionShell, theme toggle, scroll hint
content/                Brand + page catalogs (local image paths only)
public/images/
  energy/               Portfolio stills + hero MP4
  heritage/             Collection stills
lib/motion.ts
design-system/          MASTER + page docs
```

---

## Rules for next agent

1. Read this file + `design-system/MASTER.md` before redesign.  
2. Do **not** re-redesign Heritage/Energy/Home wholesale unless asked — polish only.  
3. **Ponytail / AGENTS.md:** YAGNI; shortest correct diff; Next.js 16 docs under `node_modules/next/dist/docs/`.  
4. Local media only on live routes — no Unsplash. Paths: `/images/energy/*`, `/images/heritage/*`.  
5. Do not use cooling-tower mural (`pexels-wendelinjacober-*`) as primary brand still.  
6. Energy copy must stay **portfolio-honest** (mining/O&G present in photos).  
7. Prefer `FadeUp` / `lib/motion.ts` / `.nx-btn*` / `SectionShell` over new systems.  
8. Git noise: ignore `Omnisync-Mutated-Folder/`, `archive/`, `session/`, `*.zip` — never commit Omnisync dumps.  
9. Session memory: latest under `session/` (see newest folder’s `handoff.md`).  
10. Windows: Node via `C:\Program Files\nodejs\`; use `npx.cmd` if execution policy blocks npm.ps1.

---

## Session memory

| Session | Notes |
|---------|--------|
| `session/20260716_140333/` | Heritage-era |
| `session/20260716_143053/` | Energy complete; Home pending |
| `session/20260716_152009/` | **Current** — Home + audit + pre-deploy + zip |

Start resume: **`session/20260716_152009/handoff.md`**
