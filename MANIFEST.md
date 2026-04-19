# Pipe-Up Project Manifest

> Living document tracking everything built in this project.
> Last updated: 2026-04-19

---

## Project Overview

**Name:** Pipe-Up
**Domain:** https://pipe-up.ca
**Repository:** https://github.com/rickjudson-1959/pipe-up
**Description:** Marketing site for the Pipe-Up platform — a digital oversight platform for pipeline construction, purpose-built for owner organizations. Includes landing page and interactive ROI calculator.

---

## Tech Stack

| Layer        | Technology                     | Version  |
|--------------|--------------------------------|----------|
| Framework    | Next.js (App Router)           | ^16.2.3  |
| UI Library   | React                          | ^18.3.0  |
| Styling      | CSS Modules + global CSS vars  | —        |
| Font         | Montserrat (Google Fonts)      | —        |
| Email        | Resend SDK                     | latest   |
| Linting      | ESLint + eslint-config-next    | ^9.0.0   |
| Deployment   | Vercel (auto-deploy from main) | —        |
| Package Mgr  | npm                            | —        |

---

## Project Structure

```
pipe-up/
├── app/
│   ├── api/contact/route.js   — Contact form API endpoint (POST, Resend email)
│   ├── roi/
│   │   ├── page.jsx           — Interactive ROI calculator (client component)
│   │   └── roi.module.css     — ROI page styles
│   ├── globals.css            — Brand tokens, shared styles, utility classes
│   ├── layout.jsx             — Root layout, metadata, SEO/OpenGraph tags
│   └── page.jsx               — Main landing page (assembles all section components)
├── components/
│   ├── Logo.jsx               — SVG logo (orange ring + flame icon)
│   ├── Nav.jsx                — Fixed navbar with backdrop blur
│   ├── Hero.jsx               — Full-viewport hero with stats bar + ROI CTA
│   ├── FounderAuthority.jsx   — Founder credibility statement
│   ├── ProblemBand.jsx        — Orange problem-statement banner
│   ├── Modules.jsx            — 8-module platform overview grid
│   ├── HowItWorks.jsx         — 4-step process flow
│   ├── ContractTypes.jsx      — 3 contract type cards (T&M, Target, Lump Sum)
│   ├── FinancialOversight.jsx — CVI dashboard mockup with real project data
│   ├── AISection.jsx          — AI capabilities + live monitoring visual
│   ├── SecurityStandards.jsx  — Trust ribbon (SHA-256, PWA, Permit Parsing)
│   ├── Roles.jsx              — 6 role-based capability cards
│   ├── FieldTools.jsx         — Field tools list + iPhone mockup
│   ├── Features.jsx           — 6-feature grid (not currently on main page)
│   ├── Audience.jsx           — 2 audience cards (not currently on main page)
│   ├── Contact.jsx            — Demo request form with fetch submission
│   └── Footer.jsx             — Site footer
├── docs/superpowers/
│   ├── specs/                 — Design specifications
│   └── plans/                 — Implementation plans
├── .env.local.example         — Template for environment variables
├── .gitignore
├── jsconfig.json              — Path alias (@/ → project root)
├── next.config.mjs            — Next.js config (minimal, ready to extend)
├── package.json
└── package-lock.json
```

---

## Pages

### Landing Page (app/page.jsx)

Renders sections in this order:

1. **Nav** — Fixed top navigation
2. **Hero** — Headline, sub-copy, 3 CTAs (demo, explore, ROI), stat blocks
3. **FounderAuthority** — "Built by Construction Managers" credibility statement
4. **ProblemBand** — Orange banner with pain-point statement
5. **Modules** — 8-card platform module grid (Inspector Field Journal is featured)
6. **HowItWorks** — 4-step numbered process
7. **ContractTypes** — T&M / Target Price / Lump Sum cards
8. **FinancialOversight** — CVI dashboard mockup ($200M vs $217M, phase bars, alerts)
9. **AISection** — AI capability list + live monitoring mock-up
10. **SecurityStandards** — Trust ribbon (SHA-256, PWA, Permit Parsing)
11. **Roles** — 6 role cards (Executive, Operations, Chief Inspector, Field Inspector, Welding Chief, Project Admin)
12. **FieldTools** — Feature list + inspector report phone mockup
13. **Contact** — Demo request form
14. **Footer**

**Note:** `Features.jsx` and `Audience.jsx` exist but are not currently imported on the main page.

### ROI Calculator (app/roi/page.jsx)

Interactive client component with two engagement modes:

**Modes:**
- **Single Project** (default) — calculates per-project savings vs flat fee
- **Enterprise Portfolio** — annualizes savings across multiple projects vs annual subscription

**Three preset scenarios:** Small Gathering ($20M), Medium Transmission ($120M), Large Mainline ($350M)

**Input sliders:**
- Total installed cost ($5M–$500M)
- % on T&M or Target Priced (0–100%)
- Project duration (3–36 months)
- Projects per year (1–8, portfolio mode only)
- Overbilling recovery (0–8%)
- Reconciliation labor savings (0–80%)
- Dispute/claim prevention (0–2% of TIC)

**Pricing tiers:**
- Single: $50K / $100K / $150K per project
- Portfolio: $150K / $250K / $350K per year

**Calculations:**
- Overbilling recovery = TIC × T&M% × recovery%
- Labor savings = (TIC/$100M) × $25K × months × savings%
- Dispute prevention = TIC × dispute%
- Portfolio annualizes: (12/duration) × projects × per-project total

**Results panel (sticky on desktop):** Net value, ROI multiple, breakdown, payback period

**CTA:** "Book a 20-min walkthrough →" links to Calendly (rjudson-pipe-up/pipe-up-walkthrough)

**Methodology section:** Three cards explaining each value driver with full copy

---

## Component Details

### Interactive Components (client-side)

| Component         | State                          | Behavior                                                              |
|-------------------|--------------------------------|-----------------------------------------------------------------------|
| Nav.jsx           | None (client component)        | Fixed header, links use `/#section` for cross-page navigation         |
| Contact.jsx       | `status`, `form` via useState  | Form submission via fetch POST to `/api/contact`, success/error states |
| ROI page.jsx      | 10+ useState hooks             | Sliders, mode toggle, preset selection, live calculation               |

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
| `--text`        | rgba(255,255,255,1)      | Body text (full white)     |
| `--text2`       | rgba(255,255,255,0.85)   | Secondary text             |
| `--text3`       | rgba(255,255,255,0.6)    | Tertiary / muted text      |
| `--border`      | rgba(255,255,255,0.08)   | Subtle borders             |
| `--border2`     | rgba(255,255,255,0.15)   | Stronger borders           |

### Typography

- **Font:** Montserrat (single family, weight differentiation for hierarchy)
- **Base size:** 20px (bumped from 16px for readability)
- **All sizing uses rem** — scales proportionally from base

### Utility Classes

- `.wrap` — max-width 1120px centered container
- `.sec` / `.sec.alt` — Section padding (6rem), alt adds background + borders
- `.label` — Orange uppercase small text
- `.h2` — Responsive heading (clamp 1.8rem–2.6rem)
- `.lead` — Body lead text
- `.btn-primary` — Orange CTA button (44px+ min height)
- `.btn-ghost` — Transparent outline button (44px+ min height)

### Animations

- `fadeUp` — 0.8s fade + translate-Y entrance
- `pulse` — Green box-shadow pulsing (used in AI monitoring visual)

### Responsive Breakpoints

- 1024px — Grid columns reduce
- 900px — Nav adjusts, two-column grids stack
- 880px — ROI calculator stacks to single column
- 768px — Section padding reduces
- 600px — Form goes single-column, ROI presets stack
- 480px — Single-column layouts everywhere

---

## API Endpoints

### POST /api/contact

**Purpose:** Receives demo request form submissions and sends email notification.

**Required fields:** `firstName`, `lastName`, `email`, `company`
**Optional fields:** `role`, `message`

**Behavior:** Logs to Vercel console + sends email via Resend to `CONTACT_TO_EMAIL`.
**Sender:** `Pipe-Up <noreply@pipe-up.ca>` (domain verified in Resend)

---

## Environment Variables

| Variable           | Required | Purpose                          |
|--------------------|----------|----------------------------------|
| `RESEND_API_KEY`   | Yes      | Resend API key for email sending |
| `CONTACT_TO_EMAIL` | Yes      | Recipient for demo request emails |

---

## External Integrations

| Service   | Purpose                        | Config location                    |
|-----------|--------------------------------|------------------------------------|
| Resend    | Email notifications            | `RESEND_API_KEY` env var in Vercel |
| Calendly  | Walkthrough booking from ROI   | Hardcoded URL in `app/roi/page.jsx` line 9 |
| Vercel    | Hosting + auto-deploy          | Connected to GitHub main branch    |

---

## Deployment

- **Host:** Vercel
- **Auto-deploy:** Connected to GitHub — pushes to `main` trigger production builds
- **DNS:** pipe-up.ca pointed to Vercel (A record 76.76.21.21, CNAME www → cname.vercel-dns.com)
- **Domain verified** in Resend for email sending

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
| 2026-04-14 | Wired up Resend email for contact form (noreply@pipe-up.ca)          |
| 2026-04-14 | Copy fixes: Lump Sum, R. Judson, six roles, LEM Reconciliation       |
| 2026-04-15 | Base font bumped to 20px, text opacity brightened for readability     |
| 2026-04-19 | Added ROI calculator page (app/roi/page.jsx)                         |
|            | - Single project + enterprise portfolio modes                        |
|            | - Three preset scenarios, input sliders, pricing tiers               |
|            | - Sticky results panel with live calculations                        |
|            | - Methodology section, Calendly CTA                                  |
|            | - Hero: added "See the ROI math →" ghost button + inline link        |
|            | - Fixed Nav/Footer anchor links to work from any page (/#section)    |

---

## Known Issues & Notes

- `Features.jsx` and `Audience.jsx` are built but not rendered on the main page — available for future use
- Hero background image (`public/hero-bg.jpg`) not yet provided — overlay color renders in its place
- ESLint 8→9 was a major version bump; `eslint-config-next@16` expects ESLint 9+ (now aligned)
- A stale `{app` directory exists at project root (likely accidental — safe to delete)
