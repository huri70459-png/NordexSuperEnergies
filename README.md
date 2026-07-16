# Nordex Super Energies

Institutional dual-division marketing site:

- **Home** `/` — gateway (Energy + Antiques)
- **Antiques** `/heritage` — museum collection
- **Energy** `/industrial` — energy portfolio (resources, oil & gas, renewables, generation/infra)

## Stack

Next.js 16 · Tailwind CSS v4 · Framer Motion · `next/image` · content modules under `content/`

## Branch

| Branch | Role |
|--------|------|
| **`main`** | Shipped product (PR #1 merge) — default for deploy / new work |
| `pre-deploy` | Staging snapshot used for review; merged into `main` |

Remote: https://github.com/huri70459-png/NordexSuperEnergies

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm start
npx tsc --noEmit
```

## Design system

- Global: [`design-system/MASTER.md`](design-system/MASTER.md)
- Pages: [`design-system/pages/`](design-system/pages/)
- Project handoff: [`PROJECT-HANDOFF.md`](PROJECT-HANDOFF.md)

## Deploy package

From a clean commit tip:

```bash
git archive --format=zip --prefix=Nordex-Super-Energies/ -o Nordex-Super-Energies-Deployable.zip HEAD
```

Unzip → `npm install` → `npm run build` → host `.next` + start, or import the repo on Vercel (branch **`main`**).

### Vercel

Local project link (if present): `.vercel/project.json` → **nordex-super-energies**.

```bash
# one-time: browser login
npx vercel login
# from repo root, preview (not production)
npx vercel --yes
```

Or: Vercel dashboard → import `huri70459-png/NordexSuperEnergies` → branch **`main`**.

Ship gate (local) last run: `tsc` + `next build` + prod route smoke green. See `PROJECT-HANDOFF.md`.

## Brand note

Private brand draft. Confirm legal/naming and content before public production deploy.
