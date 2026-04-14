# Pipe-Up Project Manifest

> Living document tracking everything built in this project.
> Last updated: 2026-04-14

---

## Project Overview

**Name:** Pipe-Up
**Domain:** https://pipe-up.ca
**Repository:** https://github.com/rickjudson-1959/pipe-up
**Description:** Marketing landing page for the Pipe-Up platform — a digital oversight platform for pipeline construction, purpose-built for owner organizations.

---

## Tech Stack

| Layer        | Technology                     | Version  |
|--------------|--------------------------------|----------|
| Framework    | Next.js (App Router)           | ^16.2.3  |
| UI Library   | React                          | ^18.3.0  |
| Styling      | CSS Modules + global CSS vars  | —        |
| Font         | Montserrat (Google Fonts)      | —        |
| Linting      | ESLint + eslint-config-next    | ^9.0.0   |
| Deployment   | Vercel (auto-deploy from main) | —        |
| Package Mgr  | npm                            | —        |

---

## Project Structure

```
pipe-up/
├── app/
│   ├── api/contact/route.js   — Contact form API endpoint (POST)
│   ├── globals.css            — Brand tokens, shared styles, utility classes
│   ├── layout.jsx             — Root layout, metadata, SEO/OpenGraph tags
│   └── page.jsx               — Main page (assembles all section components)
├── components/
│   ├── Logo.jsx               — SVG logo (orange ring + flame icon)
│   ├── Nav.jsx                — Fixed navbar with backdrop blur
│   ├── Hero.jsx               — Full-viewport hero with stats bar
│   ├── ProblemBand.jsx        — Orange problem-statement banner
│   ├── Modules.jsx            — 8-module platform overview grid
│   ├── HowItWorks.jsx         — 4-step process flow
│   ├── ContractTypes.jsx      — 3 contract type cards (T&M, Target, Lump Sum)
│   ├── AISection.jsx          — AI capabilities + live monitoring visual
│   ├── Roles.jsx              — 6 role-based capability cards
│   ├── FieldTools.jsx         — Field tools list + iPhone mockup
│   ├── Features.jsx           — 6-feature grid (not currently on main page)
│   ├── Audience.jsx           — 2 audience cards (not currently on main page)
│   ├── Contact.jsx            — Demo request form with fetch submission
│   └── Footer.jsx             — Site footer
├── .env.local.example         — Template for environment variables
├── .gitignore
├── jsconfig.json              — Path alias (@/ → project root)
├── next.config.mjs            — Next.js config (minimal, ready to extend)
├── package.json
└── package-lock.json
```

---

## Page Composition (app/page.jsx)

The single-page site renders sections in this order:

1. **Nav** — Fixed top navigation
2. **Hero** — Headline, sub-copy, CTAs, stat blocks
3. **ProblemBand** — Orange banner with pain-point statement
4. **Modules** — 8-card platform module grid (Inspector Field Journal is featured)
5. **HowItWorks** — 4-step numbered process
6. **ContractTypes** — T&M / Target Price / Lump Sum cards
7. **AISection** — AI capability list + live monitoring mock-up
8. **Roles** — 6 role cards (Executive, Operations, Chief Inspector, Field Inspector, Welding Chief, Project Admin)
9. **FieldTools** — Feature list + inspector report phone mockup
10. **Contact** — Demo request form
11. **Footer**

**Note:** `Features.jsx` and `Audience.jsx` exist but are not currently imported on the main page.

---

## Component Details

### Interactive Components (client-side)

| Component    | State                          | Behavior                                                              |
|--------------|--------------------------------|-----------------------------------------------------------------------|
| Nav.jsx      | None (client component)        | Fixed header, links scroll to sections                                |
| Contact.jsx  | `status`, `form` via useState  | Form submission via fetch POST to `/api/contact`, success/error states |

### Presentational Components (server-rendered)

All other components are stateless and server-rendered. They map over hardcoded data arrays and render styled cards/sections.

---

## Design System (globals.css)

### Color Palette

| Token           | Value                    | Usage                      |
|-----------------|--------------------------|----------------------------|
| `--navy`        | #002244                  | Base navy                  |
| `--navy-mid`    | #001f3d                  | Section backgrounds        |
| `--navy-deep`   | #001226                  | Body background, cards     |
| `--navy-light`  | #0a3060                  | Lighter navy accents       |
| `--orange`      | #cc5500                  | Primary brand / CTAs       |
| `--orange-lt`   | #e06010                  | Hover states               |
| `--orange-dim`  | rgba(204,85,0,0.14)      | Icon backgrounds           |
| `--orange-glow` | rgba(204,85,0,0.06)      | Card hover overlays        |
| `--white`       | #ffffff                  | Headings                   |
| `--text`        | rgba(255,255,255,0.88)   | Body text                  |
| `--text2`       | rgba(255,255,255,0.55)   | Secondary text             |
| `--text3`       | rgba(255,255,255,0.28)   | Tertiary / muted text      |
| `--border`      | rgba(255,255,255,0.08)   | Subtle borders             |
| `--border2`     | rgba(255,255,255,0.15)   | Stronger borders           |

### Utility Classes

- `.wrap` — max-width 1120px centered container
- `.sec` / `.sec.alt` — Section padding (6rem), alt adds background + borders
- `.label` — Orange uppercase small text
- `.h2` — Responsive heading (clamp 1.6rem–2.2rem)
- `.lead` — Body lead text
- `.btn-primary` — Orange CTA button
- `.btn-ghost` — Transparent outline button

### Animations

- `fadeUp` — 0.8s fade + translate-Y entrance
- `pulse` — Green box-shadow pulsing (used in AI monitoring visual)

### Responsive Breakpoints

- 1024px — Grid columns reduce
- 900px — Nav adjusts, two-column grids stack
- 768px — Section padding reduces
- 600px — Form goes single-column
- 480px — Single-column layouts everywhere

---

## API Endpoints

### POST /api/contact

**Purpose:** Receives demo request form submissions.

**Required fields:** `firstName`, `lastName`, `email`, `company`
**Optional fields:** `role`, `message`

**Current behavior:** Logs to console (Vercel function logs).

**Email integration (ready but commented out):** Resend SDK — uncomment the block in `route.js` and set `RESEND_API_KEY` + `CONTACT_TO_EMAIL` env vars.

---

## Environment Variables

| Variable           | Required | Purpose                          |
|--------------------|----------|----------------------------------|
| `RESEND_API_KEY`   | No       | Enables email notifications      |
| `CONTACT_TO_EMAIL` | No       | Recipient for demo request emails |

---

## Deployment

- **Host:** Vercel
- **Auto-deploy:** Connected to GitHub — pushes to `main` trigger production builds
- **DNS:** pipe-up.ca pointed to Vercel (A record 76.76.21.21, CNAME www → cname.vercel-dns.com)

---

## Build History

| Date       | What Changed                                                         |
|------------|----------------------------------------------------------------------|
| 2026-04-13 | Initial site built — all components, layout, contact form API        |
| 2026-04-14 | Updated Next.js to v16.2.3, ESLint to v9, eslint-config-next to v16 |
| 2026-04-14 | Resolved all npm audit vulnerabilities (0 remaining)                 |
| 2026-04-14 | Initialized git repo, pushed to GitHub, Vercel auto-deploy confirmed |
| 2026-04-14 | Landing page refinement — SaaS oversight platform positioning        |
|            | - Added FounderAuthority section (credibility statement)             |
|            | - Added FinancialOversight/CVI section (real project data mockup)    |
|            | - Added SecurityStandards trust ribbon (SHA-256, PWA, Permit Parsing)|
|            | - Hero: ROW background image support with #003366 overlay           |
|            | - Hero: CTA sub-text ("15-min technical walkthrough")               |
|            | - Updated section order for conversion flow                          |
|            | - 44px minimum touch targets on Nav CTA and Contact form inputs      |

---

## Known Issues & Notes

- `Features.jsx` and `Audience.jsx` are built but not rendered on the main page — available for future use
- Resend email integration is coded but commented out in `app/api/contact/route.js`
- Hero background image (`public/hero-bg.jpg`) not yet provided — overlay color renders in its place
- ESLint 8→9 was a major version bump; `eslint-config-next@16` expects ESLint 9+ (now aligned)
- A stale `{app` directory exists at project root (likely accidental — safe to delete)
