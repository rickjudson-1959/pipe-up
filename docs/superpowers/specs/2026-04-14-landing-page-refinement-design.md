# Landing Page Refinement — Design Spec

**Date:** 2026-04-14
**Goal:** Shift pipe-up.ca from a general resource hub to a high-end SaaS oversight platform for Pipeline Owners and CMs.

---

## Section Order (Updated)

1. Nav
2. **Hero** (refined — ROW background image + updated CTA)
3. **FounderAuthority** (new)
4. ProblemBand
5. Modules
6. HowItWorks
7. ContractTypes
8. **FinancialOversight / CVI** (new)
9. AISection
10. **SecurityStandards** (new)
11. Roles
12. FieldTools
13. Contact
14. Footer

---

## 1. Hero Section Refinement

### Files Modified
- `components/Hero.jsx`
- `components/Hero.module.css`

### Background Change
- Replace the current CSS gradient (`.bg` class: `radial-gradient` + `linear-gradient`) with a pipeline ROW photograph
- Image source: user-provided, placed at `/public/hero-bg.jpg`
- CSS approach:
  - `.bg` becomes a `background-image` referencing the photo, `background-size: cover`, `background-position: center`
  - Add a `::before` pseudo-element with `background: rgba(0, 51, 102, 0.6)` (#003366 at 60% opacity) for text readability
- Keep the existing `.grid` pattern overlay on top of the overlay for brand continuity
- All existing z-index layering stays: bg (0) → grid (1) → inner content (2)

### CTA Sub-text
- Below the "Request a demo →" button (`Link` with `className="btn-primary"`), add a `<span>` or `<p>` element:
  - Text: "15-minute technical walkthrough. No obligation."
  - Styling: `font-size: 0.72rem`, `color: var(--text2)`, `margin-top: 0.5rem`, centered under the actions row
- The "Explore the platform" ghost button remains unchanged

### What Stays the Same
- h1 copy, sub-copy, kicker badge, stats bar
- All `fadeUp` animations and timing
- Responsive behavior (stats hidden on mobile, padding adjustments)

---

## 2. Founder's Authority Section

### Files Created
- `components/FounderAuthority.jsx`
- `components/FounderAuthority.module.css`

### Position
- After Hero, before ProblemBand

### Layout
- Uses global `.sec.alt` background style (semi-transparent navy with top/bottom borders)
- Centered, narrow content block: `max-width: 720px`, `margin: 0 auto`, `text-align: center`

### Content
- Orange label above (using global `.label` class): "Built by Construction Managers"
- Blockquote-style statement:

> "Developed from over 20 years of Construction Management experience, Pipe-Up was engineered to provide owner organizations with the technical oversight necessary to protect project capital. Our platform provides a single source of truth from the ditch to the boardroom."

- Typography: Montserrat 600 weight, ~1.3rem font-size, `line-height: 1.75`, `color: var(--text)`
- No images, cards, or interactive elements — pure authority statement

---

## 3. CVI / Financial Oversight Section

### Files Created
- `components/FinancialOversight.jsx`
- `components/FinancialOversight.module.css`

### Position
- After ContractTypes, before AISection

### Layout
- Two-column layout matching existing pattern (AISection, FieldTools): left text + right visual
- Uses global `.sec` padding

### Left Column — Copy
- Label: "Financial Oversight" (`.label` class)
- Heading: "Capital Variance Index" (`.h2` class)
- Lead paragraph (~2 sentences): explains CVI as a single metric that tells you whether your project will finish over budget, extending standard EVM by factoring in schedule-driven indirect cost growth
- 3 bullet points with orange dot markers:
  - Real-time phase-level cost tracking
  - Automated alert engine (5 rules)
  - Approved capital vs projected EAC at a glance

### Right Column — CVI Mockup (Static HTML/CSS)

Combined executive dashboard panel using real data from the CVI engine (`cvi_dashboard.json`):

**Top section — 4 metric cards in a row:**
- Approved Capital: $200M (colored `#4a9eff` / Professional Blue)
- Projected EAC: $217M (colored `#CC5500` / Burnt Orange)
- CVI Overall: 0.921 (colored `#CC5500`)
- Capital Exposure: $17.1M (colored `#CC5500`)

**Middle section — Phase-level horizontal bars:**
- 6 active phases displayed (Clearing & Grading, Stringing & Bending, Welding, Coating & Insp., Ditching, HDD & Bores)
- Each bar: phase name (left), gradient bar (blue→color), CVI score, dollar exposure
- Color coding: GREEN (≥0.95) `#1a7a3a`, AMBER (≥0.85) `#CC5500`, RED (<0.85) `#cc3300`
- HDD & Bores highlighted with red background tint (0.824 / $4.7M)

**Bottom — Alert callout:**
- Left border accent (`#cc3300`), subtle red background
- Text: "HDD & Bores — significantly over budget (CVI 0.824)"
- Sub-text: "$4.7M capital exposure · Indirect cost growth critical · Flagged for executive review"

### Color System
- `#003366` (Professional Blue): healthy states, approved/working values
- `#CC5500` (Burnt Orange): warning states, billed/projected values
- `#cc3300` (Red): critical/RED status phases
- `#1a7a3a` (Green): healthy phase CVI scores (≥0.95)

### Responsive
- Two-column → single-column stack at 1024px (text on top, mockup below)
- Metric cards: 4-across → 2x2 grid at 600px

---

## 4. Security & Standards Ribbon

### Files Created
- `components/SecurityStandards.jsx`
- `components/SecurityStandards.module.css`

### Position
- After AISection, before Roles

### Layout
- Compact horizontal ribbon — not a full section, more like an enhanced ProblemBand
- `.sec.alt` background with border top/bottom
- Reduced vertical padding compared to standard sections (~3rem vs 6rem)
- Three items centered in a row with gaps

### Content (3 items)
Each item: SVG icon (inline, ~28px) + title + optional sub-text

1. **SHA-256 Data Integrity**
   - Icon: lock/shield
   - No sub-text needed

2. **PWA Offline Capability**
   - Icon: signal/wifi-off
   - No sub-text needed

3. **Automated Permit Parsing**
   - Icon: document/scan
   - Sub-text: "Provincial & State Regulatory Standards"

### Styling
- Items displayed as flex row, centered, gap ~3rem
- Icon: `color: var(--orange)`, `width: 28px`
- Title: Montserrat 700, 0.75rem, uppercase, letter-spacing
- Sub-text (item 3 only): `color: var(--text2)`, 0.68rem
- Trust-seal aesthetic — compact, authoritative, not flashy

### Responsive
- 3-across → vertical stack at 600px

---

## 5. Accessibility & Typography Audit

### Font Audit
- Confirm all components inherit `font-family: var(--ff)` (Montserrat) from body
- Check for any inline `font-family` overrides in component CSS modules
- No new font imports — staying single-family

### Button Height Audit (44px minimum)
Targets to verify:
- `.btn-primary` (global) — currently `padding: 0.875rem 2.2rem` ≈ 46px ✓
- `.btn-ghost` (global) — same padding ✓
- Nav CTA (`.cta` in Nav.module.css) — verify
- Contact form submit button — verify
- Any role selectors, dropdowns, or form inputs in Contact.jsx

If any target falls below 44px, increase padding to meet the minimum. This is a field-ready requirement — inspectors use this on phones in the field.

### No Changes
- No font family additions
- No visual changes unless something is below 44px

---

## Files Summary

### New Files (6)
- `components/FounderAuthority.jsx`
- `components/FounderAuthority.module.css`
- `components/FinancialOversight.jsx`
- `components/FinancialOversight.module.css`
- `components/SecurityStandards.jsx`
- `components/SecurityStandards.module.css`

### Modified Files (4)
- `components/Hero.jsx` — background image, CTA sub-text
- `components/Hero.module.css` — background image styles, overlay, sub-text styles
- `app/page.jsx` — import and render 3 new components in updated order
- `app/globals.css` — 44px button height fixes if needed

### User-Provided Assets (1)
- `/public/hero-bg.jpg` — Pipeline ROW photograph (user to provide)

---

## Design Decisions

| Decision | Rationale |
|----------|-----------|
| Static CVI mockup (not Chart.js) | Matches existing visual language (AI monitoring, phone mockup), no new dependencies, swappable later |
| Combined CVI panel (A+B) | Executive headline + phase detail tells the full story in one view |
| Montserrat only (no Open Sans) | Single font keeps load fast, weight differentiation provides enough hierarchy |
| Real CVI data from engine | Grounded in actual platform output, not placeholder numbers — more credible |
| Founder section as pure text | Authority statement needs no embellishment — let the words carry weight |
| Security ribbon (not full section) | Compact trust signals before the contact form push — doesn't need a full section |
| Section order: Founder after Hero | Capitalizes on hero attention, establishes credibility before the product pitch |
| CVI after ContractTypes | Reader is already thinking about contract cost structures — natural segue |
| Security before Roles | Trust signals near bottom act as reassurance before the demo ask |
