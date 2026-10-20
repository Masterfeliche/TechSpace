# DIT TechSpace

Official website for **DIT TechSpace** — a student-led engineering and innovation laboratory at the Dar es Salaam Institute of Technology.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — start local development
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — run ESLint

## Project structure

```text
src/
  app/                 # App Router entrypoints
  components/
    layout/            # Navbar, Footer
    sections/          # Landing page sections
    shared/            # Reusable UI building blocks
    ui/                # shadcn primitives
  lib/                 # Site content + utilities
```

## Content

- `src/lib/community.ts`: the manifesto, the builder loop, the three layers, the rhythm,
  leadership roles, products, and the optional home sections (deadline bar, metrics,
  quotes, mentors, essays, apply timeline). Optional sections stay hidden until filled. Add a person to a role with `holder` once confirmed;
  only list product links that really work.
- `src/lib/site.ts`: site name, links, navigation, roadmap and events.
- `docs/MANIFESTO.md`: the manifesto for print and onboarding (keep in sync with
  `community.ts`).

## Pages

- `/`: the builder loop, layers, roadmap, products, rhythm, leadership
- `/manifesto`: what TechSpace believes and what members commit to
- `/products`: products and how one moves from idea to launch
- `/apply`: the application (opens the applicant's email app; swap in a form service later). `/join` redirects here.
- `/events`: upcoming and past events
