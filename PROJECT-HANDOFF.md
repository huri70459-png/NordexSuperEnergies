# Project handoff — Nordex Super Energies

**Updated:** 2026-07-16 (~16:30 local)  
**Primary branch:** `main` @ `f1ad5ae` — *Ship: merge pre-deploy polish to main* (PR #1)  
**Staging branch:** `pre-deploy` @ `3221d8e` (merged into `main`; tip is Phase 4 ship-gate docs)  
**Remote:** https://github.com/huri70459-png/NordexSuperEnergies  
**Deploy zip:** `Nordex-Super-Energies-Deployable.zip` (~116.6 MB, gitignored; recreate with `git archive`)

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
- shadcn/ui kit under `components/ui/` (marketing pages mostly custom + `nx-*` utilities)
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
- [x] **Merge to `main`:** PR #1 — `f1ad5ae` *Ship: merge pre-deploy polish to main* (on `origin/main`)

## Not done / optional next

- [ ] **Vercel preview / production** — local link exists (`.vercel/project.json` → project `nordex-super-energies`, team `team_seY1RW4EfalP7jZniWkCsjfv`); **no confirmed remote deployment** from this handoff (CLI/MCP list was forbidden or Node PATH incomplete). Prefer preview on `main` or `pre-deploy` before public go-live.  
- [ ] Eyeball visual QA in browser (phone + desktop × 3 routes; light/dark once) — automated HTML smoke passed  
- [ ] Contact / careers / social real URLs when available  
- [ ] Public production deploy (brand/legal still advisory before go-live)  
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
| Deploy zip | recreated from tip via `git archive` |
| GitHub | `main` + `pre-deploy` on `origin` |
| Vercel remote | project **linked locally**; deploy **not verified** in this handoff |

### Useful commit map (newest first on `main`)

| SHA | Note |
|-----|------|
| `f1ad5ae` | Merge PR #1 → `main` |
| `3221d8e` | Phase 4 ship-gate docs |
| `280f002` | a11y focus trap, heritage tab scroll, dead CSS purge |
| `3467bc6` | Energy length trim |
| `ce5d006` | CTAs, motion, type floor, hero offset |
| `367af43` | Dual-division site + audit polish (product base) |

---

## Run locally

```bash
cd "F:\Projects\Ray-studio Creations\Nordex Super Energies"
# Windows: ensure Node is on PATH, or use "C:\Program Files\nodejs\"
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

Zip contains source + `public/` media — **not** `node_modules` / `.next`. Deploy: unzip → `npm install` → `npm run build` → `npm start`, or import the GitHub repo on Vercel (branch `main` or `pre-deploy`).

### Vercel (when ready)

```bash
# one-time login if needed
npx vercel login
# preview from repo root (project already linked as nordex-super-energies)
npx vercel --yes
# production only after explicit approval
# npx vercel --prod --yes
```

Or: Vercel dashboard → project **nordex-super-energies** / import `huri70459-png/NordexSuperEnergies` → deploy **`main`**.

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
8. Git noise: ignore `Omnisync-Mutated-Folder/`, `archive/`, `session/`, `*.zip`, `.vercel/`, `.env*` — never commit Omnisync dumps.  
9. Session memory: latest under `session/` (see newest folder’s `handoff.md`).  
10. Windows: Node via `C:\Program Files\nodejs\`; ensure `node` is on PATH (npx alone can fail).  
11. Default branch for new work is **`main`** unless the user asks for a feature branch.

---

## Session memory

| Session | Notes |
|---------|--------|
| `session/20260716_140333/` | Heritage-era |
| `session/20260716_143053/` | Energy complete; Home pending |
| `session/20260716_152009/` | Home + audit + pre-deploy + zip + early handoff |
| `session/20260716_162727/` | **Current** — docs after merge to `main` + ship gate |

Start resume: **`session/20260716_162727/handoff.md`**
