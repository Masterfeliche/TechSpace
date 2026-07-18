# DIT TechSpace

Official website for **DIT TechSpace** — a student-led engineering and innovation laboratory at the Dar es Salaam Institute of Technology.

## Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
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

Update community copy, projects, leadership, and links in `src/lib/site.ts`.
