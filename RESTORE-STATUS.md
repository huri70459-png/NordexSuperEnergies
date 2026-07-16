# Project status (supersedes early restore timeline)

**Last updated:** 2026-07-16  
**Canonical handoff:** [`PROJECT-HANDOFF.md`](PROJECT-HANDOFF.md)  
**Agent session:** `session/20260716_152009/`

## Git

| Item | Value |
|------|--------|
| Branch | `pre-deploy` |
| Commit | `367af43` — dual-division site + audit polish |
| Remote | `origin/pre-deploy` (up to date) |
| Repo | https://github.com/huri70459-png/Nordex-Super-Energies2 |

## Live routes

| Page | Route | Role | Status |
| --- | --- | --- | --- |
| Home | `/` | Dual-division gateway | Redesigned + audit polish |
| Antiques | `/heritage` | Museum collection | Redesigned; polish only |
| Energy | `/industrial` | Full energy portfolio | Redesigned; polish only |

## Brand

- Tagline: **Energy Portfolio · Antiques**
- Content: `content/brand.ts`, `content/home.ts`, `content/heritage.ts`, `content/industrial.ts`
- Media: `public/images/energy/*`, `public/images/heritage/*` only on live pages

## Historical restore (2026-07-12)

Early dual-site restore from Omnisync evasion template is complete. Wind-corporate app archived under `archive/wind-corporate-pre-restore-20260712/`. Omnisync dumps remain local-only (`Omnisync-Mutated-Folder/`, gitignored).

## Run

```bash
npm run dev
```

Open http://localhost:3000 · `/heritage` · `/industrial`

## Deploy zip

Local: `Nordex-Super-Energies-Deployable.zip` (gitignored).  
Regenerate: see `PROJECT-HANDOFF.md` or README.
