# Feature: TICKET-123 - TechSpace Premium Engineering Lab Website

## 1. Analysis

**Summary**: Elevate the existing TechSpace Next.js site into a world-class, production-ready marketing site that reads as a premium engineering laboratory / innovation institute — not a typical student club. Stack, shell, and most sections already exist; work is primarily content alignment, leadership structure, polish, and gap closure against the product brief.

**Current state**:
- Next.js 15 App Router + TypeScript + Tailwind v4 + shadcn/ui + Framer Motion already wired
- Dark-by-default palette (`#020617` / `#0F172A` / `#111827` / `#2563EB` / `#06B6D4`) and fonts (Space Grotesk + Inter) match the brief
- Sections present: Sticky Navbar, Hero (photo + CTAs), About, What We Do, Learning Roadmap, Projects, Events, Leadership (Founders + team), Join CTA, Footer
- No statistics / counters section (already compliant)
- SEO basics: metadata, sitemap, robots, skip link

**Gaps vs brief**:

| Area | Gap |
|------|-----|
| Core Values | Spec lists 7 values (Excellence, Hands-on Learning, Collaboration, Innovation, Integrity, Community, Continuous Learning); site has 4 rewritten values |
| Leadership labels | "Operations Team" → "Leadership Team"; titles need CTO full name, Club Coordinator; each card needs a one-line responsibility |
| Founders | Second card titled "Co-Founder"; brief asks both titled "Founder" |
| Join CTA | Secondary button is "Explore GitHub"; brief asks "Contact Us" |
| Footer | Missing Instagram link |
| Roadmap label | "Cloud Development" → "Cloud Engineering" |
| Hero visual restraint | Animated radial gradients + grid may feel busier than "minimal / no unnecessary gradients" |
| Hero photo | Current Unsplash is a code-closeup; brief prefers collaboration / modern workspace authenticity |
| Hero hierarchy | Brand name currently dominates; brief's left column centers the engineering headline — keep TechSpace as brand signal without overcrowding |
| Pillars copy | Align Learn/Build/Collaborate/Innovate wording closer to brief (esp. Innovate domain list) |

**Affected files**:
- `src/lib/site.ts` — content SSOT (values, roadmap, founders, team, links, hero image)
- `src/components/sections/hero.tsx` — hierarchy, photo treatment, gradient restraint
- `src/components/sections/about.tsx` — core values layout for 7 items
- `src/components/sections/what-we-do.tsx` — pillar presentation polish if needed
- `src/components/sections/learning-roadmap.tsx` — label/copy only if structure changes
- `src/components/sections/leadership.tsx` — Founders + Leadership Team containers, responsibilities
- `src/components/sections/join-cta.tsx` — Contact Us secondary CTA
- `src/components/layout/footer.tsx` — Instagram + Resources completeness
- `src/components/shared/icons.tsx` — Instagram icon if missing
- `src/app/globals.css` — optional subtle atmosphere tweaks
- `next.config.ts` — confirm Unsplash remotePatterns

**Risks**:
- Unsplash remote URLs depend on `next/image` config; broken domains break build
- Over-polishing gradients/motion could reintroduce "club website" clutter — keep motion subtle
- Placeholder names/portraits must remain clearly temporary for founders/leadership
- Design rule tension: brand-first hero vs brief's headline-first left column — resolve with TechSpace as primary wordmark + engineering line as H1

**Assumptions**:
- Ticket ID remains `TICKET-123`
- Existing architecture (feature sections + `site.ts` content module) is retained; no greenfield rewrite
- Placeholder people names/images are acceptable until real leadership assets are provided
- Join / Contact use existing mailto unless a form URL is supplied later
- Instagram URL can use a placeholder org URL consistent with other social links
- Commits happen only when explicitly requested (user git rule) even though workflow mentions per-subtask commits
- Dark mode default is required by the product brief (overrides general anti–dark-mode bias in frontend design rules)

**Jira Tasks**:
| Key | Summary |
|-----|---------|
| TASK-1 | Align content model and brand copy to product brief |
| TASK-2 | Refine Hero for premium lab positioning |
| TASK-3 | Complete About, pillars, roadmap, projects, events polish |
| TASK-4 | Restructure Leadership into Founders + Leadership Team |
| TASK-5 | Finalize Join CTA, Footer, SEO/a11y, and visual QA |

---

## 2. Implementation Plan

| Subtask Key | Summary | Acceptance Criteria | Est. | Status |
|-------------|---------|---------------------|------|--------|
| SUB-1.1 | Update `site.ts` content SSOT | Values = 7 brief values; roadmap "Cloud Engineering"; founders both "Founder"; leadership titles + one-line responsibilities; Instagram link; hero Unsplash collaboration photo; pillar copy aligned | 1h | [x] |
| SUB-2.1 | Refine Hero section | Left: brand signal + large engineering H1 + 3-line support + Join/Explore CTAs; right: premium Unsplash photo; no circuit/illustration art; restrained motion/gradients; responsive | 1.5h | [x] |
| SUB-3.1 | Polish About + What We Do | Mission/Vision/Values professional layout; 4 premium Learn/Build/Collaborate/Innovate cards match brief intent | 1h | [x] |
| SUB-3.2 | Verify Roadmap, Projects, Events | Timeline progression clear; project cards show tech/description/status/GitHub/Demo; events as timeline; no stats section anywhere | 45m | [x] |
| SUB-4.1 | Rebuild Leadership section | Two separated containers: Founders (2 equal cards) and Leadership Team (6 equal cards with portrait, name, position, responsibility); responsive grid | 1.5h | [x] |
| SUB-5.1 | Join CTA + Footer completeness | Join: "Ready to Build the Future?" + Become a Member + Contact Us; Footer: Quick Links, Resources, GitHub, LinkedIn, Instagram, Email, copyright | 45m | [x] |
| SUB-5.2 | Production QA pass | `lint`/`build` clean; dark default; mobile/tablet/desktop spacing; a11y (focus, alt, landmarks); SEO metadata intact; subtle Framer Motion only | 1h | [x] |

---

## 3. Execution Log
- [x] SUB-1.1: Content SSOT updated in `src/lib/site.ts` (pending commit)
- [x] SUB-2.1: Hero refined — collaboration photo, headline hierarchy, restrained gradient
- [x] SUB-3.1: About (7 core values) + What We Do pillars aligned
- [x] SUB-3.2: Roadmap Cloud Engineering; Events titles; no stats section
- [x] SUB-4.1: Founders + Leadership Team with responsibilities
- [x] SUB-5.1: Join Contact Us + Footer Instagram
- [x] SUB-5.2: `npm run lint` + `npm run build` passed
- [x] ADD-ON: Dedicated `/events` page with page hero, ongoing rhythm, image-led past events archive; homepage preview CTA; nav + sitemap updated

---

## 4. Definition of Done (DoD)
- [x] Code is written and passes all local tests/lints
- [ ] Single-sentence commit rule followed for all commits (when commits are requested)
- [x] SSOT README is fully updated
- [x] Site communicates engineering-lab professionalism (no club clichés, no stats counters)
- [x] All brief sections present and responsive
- [ ] PR description generated from this checklist

---

## 5. PR Description (draft)

### Summary
- Elevate TechSpace marketing site to premium engineering-lab positioning with brief-aligned content and leadership structure
- Refine Hero, About (7 core values), pillars, roadmap, Join/Footer social completeness
- Add dedicated `/events` page with ongoing rhythm + image-led past events archive
- Keep dark-first design system, subtle motion, and production SEO/a11y baseline

### Test plan
- [ ] `npm run lint` and `npm run build` succeed
- [ ] Hero shows collaboration photo (right) and engineering H1 (left) on desktop/mobile
- [ ] About shows Mission, Vision, and 7 Core Values
- [ ] Leadership shows Founders (2) and Leadership Team (6) with responsibilities
- [ ] Join secondary CTA is Contact Us; Footer includes Instagram
- [ ] `/events` shows hero, ongoing rhythm, and past event cards with images
- [ ] Nav Events links to `/events`; homepage has View all events CTA
- [ ] No statistics/counters section anywhere
- [ ] Sticky navbar blurs on scroll; all nav anchors work
