# Landing Page Refinement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Shift pipe-up.ca from a general resource hub to a high-end SaaS oversight platform targeting Pipeline Owners and CMs.

**Architecture:** Single-page Next.js 16 App Router site. All components are server-rendered except Nav and Contact (client). New components follow existing pattern: JSX component + CSS Module, rendered in order from `app/page.jsx`. No new dependencies. Static CVI mockup uses hardcoded data from the real CVI engine output.

**Tech Stack:** Next.js 16, React 18, CSS Modules, Montserrat font

**Design Spec:** `docs/superpowers/specs/2026-04-14-landing-page-refinement-design.md`

---

## File Structure

### New Files
| File | Responsibility |
|------|---------------|
| `components/FounderAuthority.jsx` | Founder credibility statement section |
| `components/FounderAuthority.module.css` | Styles for FounderAuthority |
| `components/FinancialOversight.jsx` | CVI section: left copy + right dashboard mockup |
| `components/FinancialOversight.module.css` | Styles for FinancialOversight |
| `components/SecurityStandards.jsx` | Security/compliance trust ribbon |
| `components/SecurityStandards.module.css` | Styles for SecurityStandards |
| `public/hero-bg.jpg` | Pipeline ROW photograph (user-provided) |

### Modified Files
| File | Changes |
|------|---------|
| `components/Hero.jsx` | Background image support, CTA sub-text |
| `components/Hero.module.css` | `.bg` becomes photo background with overlay, new `.ctaSub` class |
| `app/page.jsx` | Import 3 new components, update render order |
| `app/globals.css` | 44px button height fixes if needed |

---

### Task 1: Create FounderAuthority Component

**Files:**
- Create: `components/FounderAuthority.jsx`
- Create: `components/FounderAuthority.module.css`

- [ ] **Step 1: Create `components/FounderAuthority.module.css`**

```css
.section {
  text-align: center;
}

.inner {
  max-width: 720px;
  margin: 0 auto;
}

.quote {
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  font-weight: 600;
  line-height: 1.75;
  color: var(--text);
  font-style: normal;
}

@media (max-width: 768px) {
  .quote {
    font-size: 1.05rem;
  }
}
```

- [ ] **Step 2: Create `components/FounderAuthority.jsx`**

```jsx
import styles from './FounderAuthority.module.css';

export default function FounderAuthority() {
  return (
    <section className={`sec alt ${styles.section}`}>
      <div className={`wrap ${styles.inner}`}>
        <p className="label">Built by Construction Managers</p>
        <blockquote className={styles.quote}>
          Developed from over 20 years of Construction Management experience,
          Pipe-Up was engineered to provide owner organizations with the technical
          oversight necessary to protect project capital. Our platform provides a
          single source of truth from the ditch to the boardroom.
        </blockquote>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds with no errors (component not rendered yet, but should compile)

- [ ] **Step 4: Commit**

```bash
git add components/FounderAuthority.jsx components/FounderAuthority.module.css
git commit -m "feat: add FounderAuthority component"
```

---

### Task 2: Create FinancialOversight (CVI) Component

**Files:**
- Create: `components/FinancialOversight.jsx`
- Create: `components/FinancialOversight.module.css`

- [ ] **Step 1: Create `components/FinancialOversight.module.css`**

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.leadSpaced {
  margin-top: 1rem;
  margin-bottom: 0;
}

.points {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}

.point {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--orange);
  flex-shrink: 0;
  margin-top: 6px;
}

.pointText {
  font-size: 0.88rem;
  font-weight: 400;
  color: var(--text2);
  line-height: 1.6;
}

/* ── Dashboard mockup ──────────────────────── */
.dashboard {
  background: var(--navy-deep);
  border: 0.5px solid var(--border2);
  border-radius: 16px;
  padding: 1.75rem;
}

.dashHeader {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.25rem;
}

.dashLabel {
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--orange);
}

.dashSub {
  font-size: 0.68rem;
  color: var(--text3);
  margin-top: 2px;
}

.statusBadge {
  font-size: 0.68rem;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 6px;
}

.statusAmber {
  background: rgba(204, 85, 0, 0.15);
  border: 1px solid rgba(204, 85, 0, 0.3);
  color: var(--orange);
}

/* Metric cards row */
.metrics {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  margin-bottom: 1.25rem;
}

.metric {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 6px;
  padding: 10px;
  text-align: center;
}

.metricLabel {
  font-size: 0.52rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text3);
}

.metricValue {
  font-size: 1.4rem;
  font-weight: 900;
  margin-top: 4px;
  letter-spacing: -0.02em;
}

.metricBlue {
  color: #4a9eff;
}

.metricOrange {
  color: var(--orange);
}

.metricApproved {
  background: rgba(0, 51, 102, 0.2);
  border-color: rgba(0, 51, 102, 0.3);
}

.metricWarning {
  background: rgba(204, 85, 0, 0.1);
  border-color: rgba(204, 85, 0, 0.25);
}

/* Phase bars */
.divider {
  border-top: 1px solid var(--border);
  margin-bottom: 1rem;
}

.phasesLabel {
  font-size: 0.52rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--text3);
  margin-bottom: 0.75rem;
}

.phases {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.phase {
  display: flex;
  align-items: center;
  gap: 8px;
}

.phaseHighlight {
  background: rgba(204, 51, 0, 0.06);
  margin: 0 -10px;
  padding: 5px 10px;
  border-radius: 4px;
}

.phaseName {
  font-size: 0.62rem;
  color: var(--text2);
  width: 100px;
  text-align: right;
  flex-shrink: 0;
}

.phaseNameBold {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
}

.phaseBar {
  flex: 1;
  height: 14px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 3px;
  overflow: hidden;
}

.phaseBarFill {
  height: 100%;
  border-radius: 3px;
}

.phaseCvi {
  font-size: 0.62rem;
  font-weight: 700;
  width: 34px;
  flex-shrink: 0;
}

.phaseExposure {
  font-size: 0.56rem;
  color: var(--text3);
  width: 42px;
  flex-shrink: 0;
}

/* Alert callout */
.alert {
  margin-top: 1.1rem;
  padding: 10px 12px;
  background: rgba(204, 51, 0, 0.08);
  border-left: 3px solid #cc3300;
  border-radius: 0 6px 6px 0;
}

.alertTitle {
  font-size: 0.68rem;
  font-weight: 600;
  color: #cc3300;
}

.alertSub {
  font-size: 0.62rem;
  color: var(--text3);
  margin-top: 2px;
}

/* ── Responsive ──────────────────────────── */
@media (max-width: 1024px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 600px) {
  .metrics {
    grid-template-columns: 1fr 1fr;
  }

  .phaseName {
    width: 70px;
    font-size: 0.55rem;
  }
}
```

- [ ] **Step 2: Create `components/FinancialOversight.jsx`**

```jsx
import styles from './FinancialOversight.module.css';

const phases = [
  { name: 'Clearing & Grading', cvi: 0.925, exposure: '$1.5M', pct: 92.5, color: '#cc5500' },
  { name: 'Stringing & Bending', cvi: 0.939, exposure: '$0.8M', pct: 93.9, color: '#cc5500' },
  { name: 'Welding', cvi: 0.904, exposure: '$3.0M', pct: 90.4, color: '#cc5500' },
  { name: 'Coating & Insp.', cvi: 0.948, exposure: '$0.4M', pct: 94.8, color: '#1a7a3a' },
  { name: 'Ditching', cvi: 0.913, exposure: '$1.3M', pct: 91.3, color: '#cc5500' },
  { name: 'HDD & Bores', cvi: 0.824, exposure: '$4.7M', pct: 82.4, color: '#cc3300', highlight: true },
];

const points = [
  'Real-time phase-level cost tracking across every construction spread',
  'Automated alert engine — 5 rules flag capital at risk, declining trends, and schedule overruns',
  'Approved capital vs projected EAC visible at a glance',
];

export default function FinancialOversight() {
  return (
    <section id="financial" className="sec">
      <div className="wrap">
        <div className={styles.grid}>
          {/* Left column — copy */}
          <div>
            <p className="label">Financial Oversight</p>
            <h2 className="h2">Capital Variance Index</h2>
            <p className={`lead ${styles.leadSpaced}`}>
              A single metric that tells you whether your project will finish over
              budget — and by how much. CVI extends standard Earned Value Management
              by factoring in schedule-driven indirect cost growth.
            </p>
            <div className={styles.points}>
              {points.map((p) => (
                <div key={p} className={styles.point}>
                  <div className={styles.dot} />
                  <p className={styles.pointText}>{p}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — CVI dashboard mockup */}
          <div className={styles.dashboard}>
            {/* Header */}
            <div className={styles.dashHeader}>
              <div>
                <div className={styles.dashLabel}>Capital Variance Index</div>
                <div className={styles.dashSub}>
                  Eagle Mountain Woodfibre Gas Pipeline · 49% Elapsed
                </div>
              </div>
              <span className={`${styles.statusBadge} ${styles.statusAmber}`}>
                AMBER
              </span>
            </div>

            {/* Metric cards */}
            <div className={styles.metrics}>
              <div className={`${styles.metric} ${styles.metricApproved}`}>
                <div className={styles.metricLabel}>Approved Capital</div>
                <div className={`${styles.metricValue} ${styles.metricBlue}`}>
                  $200M
                </div>
              </div>
              <div className={`${styles.metric} ${styles.metricWarning}`}>
                <div className={styles.metricLabel}>Projected EAC</div>
                <div className={`${styles.metricValue} ${styles.metricOrange}`}>
                  $217M
                </div>
              </div>
              <div className={styles.metric}>
                <div className={styles.metricLabel}>CVI Overall</div>
                <div className={`${styles.metricValue} ${styles.metricOrange}`}>
                  0.921
                </div>
              </div>
              <div className={styles.metric}>
                <div className={styles.metricLabel}>Capital Exposure</div>
                <div className={`${styles.metricValue} ${styles.metricOrange}`}>
                  $17.1M
                </div>
              </div>
            </div>

            {/* Phase bars */}
            <div className={styles.divider} />
            <div className={styles.phasesLabel}>Phase-Level Variance</div>
            <div className={styles.phases}>
              {phases.map((p) => (
                <div
                  key={p.name}
                  className={`${styles.phase} ${p.highlight ? styles.phaseHighlight : ''}`}
                >
                  <span
                    className={`${styles.phaseName} ${p.highlight ? styles.phaseNameBold : ''}`}
                  >
                    {p.name}
                  </span>
                  <div className={styles.phaseBar}>
                    <div
                      className={styles.phaseBarFill}
                      style={{
                        width: `${p.pct}%`,
                        background: `linear-gradient(90deg, #003366 ${p.pct > 90 ? '85%' : '60%'}, ${p.color})`,
                      }}
                    />
                  </div>
                  <span className={styles.phaseCvi} style={{ color: p.color }}>
                    {p.cvi.toFixed(3)}
                  </span>
                  <span
                    className={styles.phaseExposure}
                    style={p.highlight ? { color: '#cc3300', fontWeight: 600 } : {}}
                  >
                    {p.exposure}
                  </span>
                </div>
              ))}
            </div>

            {/* Alert */}
            <div className={styles.alert}>
              <div className={styles.alertTitle}>
                HDD &amp; Bores — significantly over budget (CVI 0.824)
              </div>
              <div className={styles.alertSub}>
                $4.7M capital exposure · Indirect cost growth critical · Flagged
                for executive review
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds with no errors

- [ ] **Step 4: Commit**

```bash
git add components/FinancialOversight.jsx components/FinancialOversight.module.css
git commit -m "feat: add FinancialOversight CVI component with real project data"
```

---

### Task 3: Create SecurityStandards Ribbon Component

**Files:**
- Create: `components/SecurityStandards.jsx`
- Create: `components/SecurityStandards.module.css`

- [ ] **Step 1: Create `components/SecurityStandards.module.css`**

```css
.ribbon {
  padding: 3rem 2rem;
}

.inner {
  display: flex;
  justify-content: center;
  gap: 4rem;
  flex-wrap: wrap;
}

.item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.icon {
  width: 28px;
  height: 28px;
  color: var(--orange);
  flex-shrink: 0;
}

.text {}

.title {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--white);
}

.sub {
  font-size: 0.62rem;
  color: var(--text2);
  margin-top: 1px;
}

@media (max-width: 600px) {
  .inner {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
}
```

- [ ] **Step 2: Create `components/SecurityStandards.jsx`**

```jsx
import styles from './SecurityStandards.module.css';

const items = [
  {
    title: 'SHA-256 Data Integrity',
    sub: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l7 4v6c0 5.25-3.5 9.74-7 11-3.5-1.26-7-5.75-7-11V6l7-4z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'PWA Offline Capability',
    sub: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <circle cx="12" cy="20" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Automated Permit Parsing',
    sub: 'Provincial & State Regulatory Standards',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
        <path d="M14 2v6h6" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
  },
];

export default function SecurityStandards() {
  return (
    <section className={`sec alt ${styles.ribbon}`}>
      <div className={`wrap ${styles.inner}`}>
        {items.map((item) => (
          <div key={item.title} className={styles.item}>
            <div className={styles.icon}>{item.icon}</div>
            <div className={styles.text}>
              <div className={styles.title}>{item.title}</div>
              {item.sub && <div className={styles.sub}>{item.sub}</div>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Verify build**

Run: `npm run build`
Expected: Build succeeds with no errors

- [ ] **Step 4: Commit**

```bash
git add components/SecurityStandards.jsx components/SecurityStandards.module.css
git commit -m "feat: add SecurityStandards trust ribbon component"
```

---

### Task 4: Refine Hero Section

**Files:**
- Modify: `components/Hero.jsx`
- Modify: `components/Hero.module.css`

- [ ] **Step 1: Update `components/Hero.module.css` — replace `.bg` class**

Replace the existing `.bg` block:

```css
.bg {
  position: absolute; inset: 0;
  background:
    radial-gradient(ellipse 100% 70% at 50% -10%, rgba(204,85,0,0.13) 0%, transparent 60%),
    linear-gradient(180deg, var(--navy-deep) 0%, #001830 100%);
}
```

With:

```css
.bg {
  position: absolute;
  inset: 0;
  background-image: url('/hero-bg.jpg');
  background-size: cover;
  background-position: center;
}

.bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 51, 102, 0.6);
}
```

- [ ] **Step 2: Add `.ctaSub` class to `Hero.module.css`**

Add after the `.actions` rule:

```css
.ctaSub {
  font-size: 0.72rem;
  color: var(--text2);
  margin-top: 0.5rem;
  text-align: center;
  animation: fadeUp 0.8s 0.65s ease both;
}
```

- [ ] **Step 3: Update `components/Hero.jsx` — add CTA sub-text**

Replace the existing `actions` div:

```jsx
<div className={styles.actions}>
  <Link href="#contact" className="btn-primary">Request a demo →</Link>
  <Link href="#platform" className="btn-ghost">Explore the platform</Link>
</div>
```

With:

```jsx
<div className={styles.actions}>
  <Link href="#contact" className="btn-primary">Request a demo →</Link>
  <Link href="#platform" className="btn-ghost">Explore the platform</Link>
</div>
<p className={styles.ctaSub}>
  15-minute technical walkthrough. No obligation.
</p>
```

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: Build succeeds. Note: Hero background image will be missing until user provides `public/hero-bg.jpg` — this is expected. The overlay color will still render.

- [ ] **Step 5: Commit**

```bash
git add components/Hero.jsx components/Hero.module.css
git commit -m "feat: hero section — ROW image background with #003366 overlay, CTA sub-text"
```

---

### Task 5: Wire Up Page Layout

**Files:**
- Modify: `app/page.jsx`

- [ ] **Step 1: Update `app/page.jsx` with new imports and section order**

Replace the entire file content:

```jsx
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import FounderAuthority from '@/components/FounderAuthority';
import ProblemBand from '@/components/ProblemBand';
import Modules from '@/components/Modules';
import HowItWorks from '@/components/HowItWorks';
import ContractTypes from '@/components/ContractTypes';
import FinancialOversight from '@/components/FinancialOversight';
import AISection from '@/components/AISection';
import SecurityStandards from '@/components/SecurityStandards';
import Roles from '@/components/Roles';
import FieldTools from '@/components/FieldTools';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <FounderAuthority />
        <ProblemBand />
        <Modules />
        <HowItWorks />
        <ContractTypes />
        <FinancialOversight />
        <AISection />
        <SecurityStandards />
        <Roles />
        <FieldTools />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds with all components rendering in the correct order

- [ ] **Step 3: Commit**

```bash
git add app/page.jsx
git commit -m "feat: wire up new sections — FounderAuthority, FinancialOversight, SecurityStandards"
```

---

### Task 6: Accessibility & Typography Audit

**Files:**
- Possibly modify: `app/globals.css`
- Possibly modify: `components/Nav.module.css`
- Possibly modify: `components/Contact.module.css`

- [ ] **Step 1: Audit Nav CTA button height**

Read `components/Nav.module.css`. The `.cta` class has `padding: 0.5rem 1.3rem`. At `font-size: 0.78rem` this gives approximately 37px height — **below 44px minimum**.

Update `.cta` in `components/Nav.module.css`:

```css
.cta {
  font-size: 0.78rem; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;
  background: var(--orange); color: #fff;
  border: none; border-radius: 6px; padding: 0.65rem 1.3rem;
  cursor: pointer; text-decoration: none;
  transition: background 0.2s, transform 0.15s;
  min-height: 44px;
  display: inline-flex;
  align-items: center;
}
```

- [ ] **Step 2: Audit Contact form inputs and submit button**

Read `components/Contact.module.css`. The `.submit` class has `padding: 0.95rem` which gives ~47px — OK. The `.fg input, .fg select` have `padding: 0.7rem 0.95rem` which gives ~38px — **below 44px**.

Update the input/select/textarea rule in `components/Contact.module.css`:

Replace:
```css
padding: 0.7rem 0.95rem;
```
With:
```css
padding: 0.8rem 0.95rem;
min-height: 44px;
```

- [ ] **Step 3: Audit font-family inheritance**

Search all `.module.css` files for any `font-family` declarations that don't use `var(--ff)`. The only expected occurrences are in `globals.css` (body and button definitions). If any component CSS overrides font-family with a different value, update it to `var(--ff)`.

Run: `grep -r "font-family" components/ app/`

Expected: Only `var(--ff)` or `'Montserrat'` references. No `Arial`, `Helvetica`, `Open Sans`, or other font families.

- [ ] **Step 4: Verify build**

Run: `npm run build`
Expected: Build succeeds

- [ ] **Step 5: Commit**

```bash
git add components/Nav.module.css components/Contact.module.css
git commit -m "fix: ensure 44px minimum touch targets for field-ready mobile use"
```

---

### Task 7: Visual Verification & Final Build

**Files:**
- No file changes (verification only)

- [ ] **Step 1: Create `/public` directory if needed**

```bash
mkdir -p public
```

Note: The hero background image (`hero-bg.jpg`) is user-provided. Until it's added, the hero will show the #003366 overlay color on a transparent background — this is acceptable for now.

- [ ] **Step 2: Run dev server and verify all sections**

Run: `npm run dev`

Verify in browser at http://localhost:3000:
1. Hero — overlay color visible, CTA sub-text shows below buttons
2. FounderAuthority — centered quote with orange label, alt background
3. ProblemBand — unchanged orange band
4. Modules — unchanged 8-card grid
5. HowItWorks — unchanged 4-step flow
6. ContractTypes — unchanged 3 cards
7. FinancialOversight — two-column layout, CVI dashboard mockup renders with phase bars and alert
8. AISection — unchanged AI monitoring visual
9. SecurityStandards — 3-item horizontal ribbon with SVG icons
10. Roles — unchanged 6 role cards
11. FieldTools — unchanged phone mockup
12. Contact — form inputs meet 44px height
13. Footer — unchanged

- [ ] **Step 3: Test responsive behavior**

Resize browser to 600px width and verify:
- CVI metric cards switch to 2x2 grid
- SecurityStandards items stack vertically
- All buttons remain at least 44px tall
- FounderAuthority text remains readable

- [ ] **Step 4: Production build**

Run: `npm run build`
Expected: Build succeeds with no warnings or errors

- [ ] **Step 5: Final commit and push**

```bash
git add -A
git commit -m "feat: landing page refinement — SaaS oversight platform positioning"
git push
```

---

## Blocked: User-Provided Asset

The hero background image (`public/hero-bg.jpg`) must be provided by the user. Until then:
- The hero section will show a solid `rgba(0, 51, 102, 0.6)` overlay on a blank background
- All other sections are fully functional without it
- When the user provides the image, place it at `public/hero-bg.jpg` — no code changes needed
