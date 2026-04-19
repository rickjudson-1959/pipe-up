'use client';

import { useState } from 'react';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import styles from './roi.module.css';

const CALENDLY_URL = 'https://calendly.com/YOUR-HANDLE/pipe-up-walkthrough'; // TODO: replace with real URL

function fmt(n) {
  const neg = n < 0;
  const a = Math.abs(n);
  let s;
  if (a >= 1_000_000) s = '$' + (a / 1_000_000).toFixed(2) + 'M';
  else if (a >= 1_000) s = '$' + Math.round(a / 1_000).toLocaleString() + 'K';
  else s = '$' + Math.round(a);
  return neg ? '-' + s : s;
}

const PRESETS = [
  {
    key: 'small',
    title: 'Small Gathering',
    meta: '10 km · NPS 12 · $20M TIC\n50% T&M · 6 months',
    tic: 20, tm: 50, duration: 6, singleFee: 50_000,
  },
  {
    key: 'medium',
    title: 'Medium Transmission',
    meta: '40 km · NPS 24 · $120M TIC\n40% T&M · 18 months',
    tic: 120, tm: 40, duration: 18, singleFee: 100_000,
  },
  {
    key: 'large',
    title: 'Large Mainline',
    meta: '75 km · NPS 36 · $350M TIC\n60% T&M · 24 months',
    tic: 350, tm: 60, duration: 24, singleFee: 150_000,
  },
];

const SINGLE_TIERS = [50_000, 100_000, 150_000];
const PORTFOLIO_TIERS = [150_000, 250_000, 350_000];

export default function ROICalculator() {
  const [mode, setMode] = useState('single');
  const [activePreset, setActivePreset] = useState('medium');

  const [tic, setTic] = useState(120);
  const [tmPct, setTmPct] = useState(40);
  const [duration, setDuration] = useState(18);
  const [projectsPerYear, setProjectsPerYear] = useState(3);

  const [recoveryPct, setRecoveryPct] = useState(3.0);
  const [laborSavingsPct, setLaborSavingsPct] = useState(40);
  const [disputePct, setDisputePct] = useState(0.5);

  const [singleFee, setSingleFee] = useState(100_000);
  const [portfolioFee, setPortfolioFee] = useState(250_000);

  function selectPreset(p) {
    setActivePreset(p.key);
    setTic(p.tic);
    setTmPct(p.tm);
    setDuration(p.duration);
    setSingleFee(p.singleFee);
  }

  function switchMode(m) {
    setMode(m);
    if (m === 'portfolio') {
      setPortfolioFee(250_000);
    }
  }

  // Calculations
  const ticDollars = tic * 1_000_000;
  const overbilling = ticDollars * (tmPct / 100) * (recoveryPct / 100);
  const baselineLabor = (tic / 100) * 25_000 * duration;
  const laborSavings = baselineLabor * (laborSavingsPct / 100);
  const disputePrevention = ticDollars * (disputePct / 100);
  const perProjectTotal = overbilling + laborSavings + disputePrevention;

  const fee = mode === 'single' ? singleFee : portfolioFee;

  let totalSavings, netValue, roiMultiple, paybackMonths;
  if (mode === 'single') {
    totalSavings = perProjectTotal;
    netValue = totalSavings - fee;
    roiMultiple = fee > 0 ? totalSavings / fee : 0;
    paybackMonths = totalSavings > 0 ? (fee / totalSavings) * duration : 0;
  } else {
    const annualized = (12 / duration) * projectsPerYear * perProjectTotal;
    totalSavings = annualized;
    netValue = annualized - fee;
    roiMultiple = fee > 0 ? annualized / fee : 0;
    paybackMonths = annualized > 0 ? (fee / annualized) * 12 : 0;
  }

  const paybackDisplay = paybackMonths < 1 ? '< 1 month' : Math.round(paybackMonths) + ' months';

  return (
    <>
      <Nav />
      <main>
        {/* ── Hero ─────────────────────────────────────── */}
        <section className={`sec ${styles.hero}`}>
          <div className={`wrap ${styles.heroInner}`}>
            <p className="label">ROI Calculator</p>
            <h1 className={styles.h1}>
              The math on <em className={styles.heroEm}>better field data.</em>
            </h1>
            <p className={styles.heroSub}>
              Independent reconciliation of contractor LEMs, daily tickets, and inspector
              reports recovers a meaningful share of T&amp;M and Target Priced spend.
              Adjust the scenario below to model your own numbers.
            </p>

            {/* Mode toggle */}
            <div className={styles.modeToggle}>
              <button
                className={`${styles.modeBtn} ${mode === 'single' ? styles.modeBtnActive : ''}`}
                onClick={() => switchMode('single')}
              >
                Single Project
              </button>
              <button
                className={`${styles.modeBtn} ${mode === 'portfolio' ? styles.modeBtnActive : ''}`}
                onClick={() => switchMode('portfolio')}
              >
                Enterprise Portfolio
              </button>
            </div>
          </div>
        </section>

        {/* ── Presets ──────────────────────────────────── */}
        <section className="sec" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className={styles.presets}>
              {PRESETS.map((p) => (
                <button
                  key={p.key}
                  className={`${styles.preset} ${activePreset === p.key ? styles.presetActive : ''}`}
                  onClick={() => selectPreset(p)}
                >
                  <div className={styles.presetDot} />
                  <div className={styles.presetTitle}>{p.title}</div>
                  <div className={styles.presetMeta}>
                    {p.meta.split('\n').map((line, i) => (
                      <span key={i}>{line}{i === 0 && <br />}</span>
                    ))}
                  </div>
                </button>
              ))}
            </div>

            {/* ── Calculator ─────────────────────────── */}
            <div className={styles.calculator}>
              {/* Left — Inputs */}
              <div className={styles.inputPanel}>
                {/* Project parameters */}
                <div className={styles.inputGroup}>
                  <div className={styles.inputGroupTitle}>Project Parameters</div>

                  <div className={styles.slider}>
                    <div className={styles.sliderHeader}>
                      <label className={styles.sliderLabel} htmlFor="tic">Total Installed Cost</label>
                      <span className={styles.sliderValue}>{fmt(ticDollars)}</span>
                    </div>
                    <input
                      id="tic"
                      type="range"
                      className={styles.sliderInput}
                      min={5} max={500} step={5}
                      value={tic}
                      onChange={(e) => { setTic(Number(e.target.value)); setActivePreset(''); }}
                    />
                  </div>

                  <div className={styles.slider}>
                    <div className={styles.sliderHeader}>
                      <label className={styles.sliderLabel} htmlFor="tm">% on T&amp;M or Target Priced</label>
                      <span className={styles.sliderValue}>{tmPct}%</span>
                    </div>
                    <input
                      id="tm"
                      type="range"
                      className={styles.sliderInput}
                      min={0} max={100} step={5}
                      value={tmPct}
                      onChange={(e) => { setTmPct(Number(e.target.value)); setActivePreset(''); }}
                    />
                  </div>

                  <div className={styles.slider}>
                    <div className={styles.sliderHeader}>
                      <label className={styles.sliderLabel} htmlFor="duration">Project Duration</label>
                      <span className={styles.sliderValue}>{duration} months</span>
                    </div>
                    <input
                      id="duration"
                      type="range"
                      className={styles.sliderInput}
                      min={3} max={36} step={1}
                      value={duration}
                      onChange={(e) => { setDuration(Number(e.target.value)); setActivePreset(''); }}
                    />
                  </div>

                  {mode === 'portfolio' && (
                    <div className={styles.slider}>
                      <div className={styles.sliderHeader}>
                        <label className={styles.sliderLabel} htmlFor="projects">Projects Running Per Year</label>
                        <span className={styles.sliderValue}>{projectsPerYear}</span>
                      </div>
                      <input
                        id="projects"
                        type="range"
                        className={styles.sliderInput}
                        min={1} max={8} step={1}
                        value={projectsPerYear}
                        onChange={(e) => setProjectsPerYear(Number(e.target.value))}
                      />
                    </div>
                  )}
                </div>

                {/* Value drivers */}
                <div className={styles.inputGroup}>
                  <div className={styles.inputGroupTitle}>Value Drivers</div>

                  <div className={styles.slider}>
                    <div className={styles.sliderHeader}>
                      <label className={styles.sliderLabel} htmlFor="recovery">Overbilling Recovery on T&amp;M</label>
                      <span className={styles.sliderValue}>{recoveryPct.toFixed(1)}%</span>
                    </div>
                    <input
                      id="recovery"
                      type="range"
                      className={styles.sliderInput}
                      min={0} max={8} step={0.5}
                      value={recoveryPct}
                      onChange={(e) => setRecoveryPct(Number(e.target.value))}
                    />
                  </div>

                  <div className={styles.slider}>
                    <div className={styles.sliderHeader}>
                      <label className={styles.sliderLabel} htmlFor="labor">Reconciliation Labor Savings</label>
                      <span className={styles.sliderValue}>{laborSavingsPct}%</span>
                    </div>
                    <input
                      id="labor"
                      type="range"
                      className={styles.sliderInput}
                      min={0} max={80} step={5}
                      value={laborSavingsPct}
                      onChange={(e) => setLaborSavingsPct(Number(e.target.value))}
                    />
                  </div>

                  <div className={styles.slider}>
                    <div className={styles.sliderHeader}>
                      <label className={styles.sliderLabel} htmlFor="dispute">Dispute / Claim Prevention</label>
                      <span className={styles.sliderValue}>{disputePct.toFixed(1)}% of TIC</span>
                    </div>
                    <input
                      id="dispute"
                      type="range"
                      className={styles.sliderInput}
                      min={0} max={2} step={0.1}
                      value={disputePct}
                      onChange={(e) => setDisputePct(Number(e.target.value))}
                    />
                  </div>
                </div>

                {/* Pricing tier */}
                <div className={styles.inputGroup}>
                  <div className={styles.inputGroupTitle}>
                    {mode === 'single' ? 'Pipe-Up Fee (Per Project)' : 'Pipe-Up Fee (Annual Subscription)'}
                  </div>
                  <div className={styles.tierGroup}>
                    {(mode === 'single' ? SINGLE_TIERS : PORTFOLIO_TIERS).map((t) => {
                      const isActive = mode === 'single' ? singleFee === t : portfolioFee === t;
                      return (
                        <button
                          key={t}
                          className={`${styles.tierBtn} ${isActive ? styles.tierBtnActive : ''}`}
                          onClick={() => mode === 'single' ? setSingleFee(t) : setPortfolioFee(t)}
                        >
                          {fmt(t)}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right — Results */}
              <div className={styles.results}>
                <div className={styles.resultsHero}>
                  <div className={styles.resultsLabel}>
                    {mode === 'single' ? 'Net Value Per Project' : 'Net Value Per Year'}
                  </div>
                  <div className={styles.resultsValue}>{fmt(netValue)}</div>
                  <div className={styles.resultsRoi}>
                    {roiMultiple.toFixed(1)}x return on {fmt(fee)} investment
                  </div>
                </div>

                <div className={styles.metricsRow}>
                  <div className={styles.metricCard}>
                    <div className={styles.metricCardLabel}>Total Savings</div>
                    <div className={styles.metricCardValue}>{fmt(totalSavings)}</div>
                  </div>
                  <div className={styles.metricCard}>
                    <div className={styles.metricCardLabel}>Pipe-Up Cost</div>
                    <div className={`${styles.metricCardValue} ${styles.metricCardValueOrange}`}>
                      {fmt(fee)}
                    </div>
                  </div>
                </div>

                <div className={styles.breakdown}>
                  <div className={styles.breakdownRow}>
                    <span className={styles.breakdownLabel}>Overbilling recovery</span>
                    <span className={styles.breakdownValue}>{fmt(mode === 'single' ? overbilling : overbilling * (12 / duration) * projectsPerYear)}</span>
                  </div>
                  <div className={styles.breakdownRow}>
                    <span className={styles.breakdownLabel}>Labor savings</span>
                    <span className={styles.breakdownValue}>{fmt(mode === 'single' ? laborSavings : laborSavings * (12 / duration) * projectsPerYear)}</span>
                  </div>
                  <div className={styles.breakdownRow}>
                    <span className={styles.breakdownLabel}>Dispute prevention</span>
                    <span className={styles.breakdownValue}>{fmt(mode === 'single' ? disputePrevention : disputePrevention * (12 / duration) * projectsPerYear)}</span>
                  </div>
                  <div className={styles.breakdownDivider} />
                  <div className={styles.breakdownRow}>
                    <span className={`${styles.breakdownLabel} ${styles.breakdownTotal}`}>Total</span>
                    <span className={`${styles.breakdownValue} ${styles.breakdownTotal}`}>{fmt(totalSavings)}</span>
                  </div>
                  <div className={styles.breakdownRow}>
                    <span className={styles.breakdownLabel}>Payback period</span>
                    <span className={styles.breakdownValue}>{paybackDisplay}</span>
                  </div>
                </div>

                <p className={styles.disclaimer}>
                  Illustrative only. Figures depend on project controls maturity, contractor
                  behaviour, and contract type. Baseline reconciliation labor assumed at
                  $25K/mo per $100M TIC (~2 dedicated cost-control FTEs). Overbilling
                  recovery applies only to the T&amp;M or Target Priced portion of spend.
                </p>
              </div>
            </div>

            {/* ── Methodology ─────────────────────────── */}
            <div className={styles.methodology}>
              <p className="label">Methodology</p>
              <h2 className="h2">How the numbers work</h2>
              <div className={styles.methGrid}>
                <div className={styles.methCard}>
                  <h3 className={styles.methTitle}>Overbilling Recovery</h3>
                  <p className={styles.methBody}>
                    Applied only to the T&amp;M or Target Priced portion of your contract mix.
                    Third-party audits of time-and-material pipeline contracts routinely identify
                    3–8% in recoverable charges — duplicate equipment hours, incorrect rate tables,
                    uncaptured standby offsets, and phantom crew time. Default assumes the
                    conservative end of that range.
                  </p>
                </div>
                <div className={styles.methCard}>
                  <h3 className={styles.methTitle}>Reconciliation Labor Savings</h3>
                  <p className={styles.methBody}>
                    A mid-sized pipeline typically runs 2 dedicated cost-control or admin FTEs
                    reconciling LEMs against inspector tickets. Pipe-Up&apos;s 4-panel variance
                    workflow compresses that effort by auto-flagging line-item mismatches. Savings
                    shown reflect reduction against the project-scaled baseline of $25K per month
                    per $100M TIC.
                  </p>
                </div>
                <div className={styles.methCard}>
                  <h3 className={styles.methTitle}>Dispute &amp; Claim Prevention</h3>
                  <p className={styles.methBody}>
                    The single largest owner exposure on a construction project is a contested
                    progress claim or change order at closeout. Independent field measurement with
                    a time-stamped audit trail materially reduces both the likelihood and the
                    defensible size of such claims. The default figure represents 0.5% of total
                    installed cost — a modest estimate for most projects.
                  </p>
                </div>
              </div>
            </div>

            {/* ── Final CTA ───────────────────────────── */}
            <div className={styles.finalCta}>
              <h2 className={styles.finalCtaH2}>Ready to see this on your project?</h2>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Book a 20-min walkthrough →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
