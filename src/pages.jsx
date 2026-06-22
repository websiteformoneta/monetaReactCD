// Page bodies — Home, Platform, FinOps Services, Why moneta


function CountUp({ target, decimals, suffix, color, glow, started }) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    if (!started) return;
    const duration = 1600;
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(target * ease);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [started, target]);
  return (
    <span style={{ color, textShadow: `0 0 20px ${glow}` }}>
      {val.toFixed(decimals)}{suffix}
    </span>
  );
}

const TIMELINE_STATS = [
  { target: 13.2, decimals: 1, suffix: "%", label: "Resell Margin",              color: "#2dd4bf", glow: "rgba(45,212,191,0.5)", desc: "See true margin per customer with granular cost allocation and real-time margin insights.", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg> },
  { target: 25.8, decimals: 1, suffix: "%", label: "Total Margin",               color: "#38bdf8", glow: "rgba(56,189,248,0.5)",  desc: "Standardize billing and operations to support more customers without adding headcount or complexity.", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg> },
  { target: 14.6, decimals: 1, suffix: "%", label: "Revenue Growth",             color: "#a855f7", glow: "rgba(168,85,247,0.5)",  desc: "Eliminate manual work and invoice accurately at any scale with confidence and consistency.", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#a855f7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 11-6.219-8.56"/><polyline points="21 3 21 9 15 9"/></svg> },
  { target: 12,   decimals: 0, suffix: "x", label: "More Accounts Per Ops FTE", color: "#f59e0b", glow: "rgba(245,158,11,0.5)",  desc: "See true margin per customer with granular cost allocation and real-time margin insights.", icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
];

const BOTTOM_FEATURES = [
  { color: "#2dd4bf", iconBg: "rgba(45,212,191,0.12)", iconBorder: "rgba(45,212,191,0.3)", icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>, title: "Identify margin gaps earlier", desc: "See where customer pricing, discount allocation, or billing logic may be reducing profitability." },
  { color: "#38bdf8", iconBg: "rgba(56,189,248,0.12)",  iconBorder: "rgba(56,189,248,0.3)",  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>, title: "Customer-level profitability visibility", desc: "Understand margin per customer instead of relying on aggregate revenue or cost views." },
  { color: "#6366f1", iconBg: "rgba(99,102,241,0.12)",  iconBorder: "rgba(99,102,241,0.3)",  icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14"/></svg>, title: "Scale reseller operations", desc: "Support more customers and more complex cloud environments without proportional overhead." },
];

function ResultsGraphic() {
  const [started, setStarted] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect(); } }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {/* Centered header */}
      <div className="flex flex-col items-center text-center">
        <Eyebrow className="mb-6 flex flex-col items-center">Results</Eyebrow>
        <h2 className="text-h1">Real outcomes for cloud resellers.</h2>
        <p className="mt-6 text-[16.5px] leading-[1.7] text-ink-secondary max-w-[640px]">
          Improve billing control, protect margins, and scale customer operations without adding
          unnecessary complexity.
        </p>
      </div>

      {/* Stat bar */}
      <div style={{ marginTop: 40, display: "grid", gridTemplateColumns: "repeat(4,1fr)", background: "rgba(13,20,42,0.6)", border: "1px solid rgba(99,102,241,0.18)", borderRadius: 16, overflow: "hidden", backdropFilter: "blur(12px)" }}>
        {TIMELINE_STATS.map((s, i) => (
          <div key={s.label} style={{ padding: "32px 24px", textAlign: "left", borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ fontSize: 52, fontWeight: 800, lineHeight: 1, letterSpacing: "-2px", fontFamily: "Inter, sans-serif", color: s.color, textShadow: `0 0 28px ${s.glow}` }}>
              <CountUp {...s} started={started} />
            </div>
            <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.14em", textTransform: "uppercase", color: "#64748b", fontFamily: "Inter, sans-serif", marginTop: 12 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Feature cards */}
      <div style={{ marginTop: 20, display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}>
        {BOTTOM_FEATURES.map(f => (
          <div key={f.title} style={{ background: "rgba(13,20,42,0.6)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 14, padding: "22px 24px", backdropFilter: "blur(10px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
              <div style={{ width: 38, height: 38, borderRadius: 9, background: f.iconBg, border: `1px solid ${f.iconBorder}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{f.icon}</div>
              <div style={{ fontSize: 14.5, fontWeight: 700, color: "#f1f5f9", fontFamily: "Inter, sans-serif", lineHeight: 1.2 }}>{f.title}</div>
            </div>
            <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, fontFamily: "Inter, sans-serif" }}>{f.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HeroSplit({ tagline, title, accentWord, description, ctaLabel, onCta, right }) {
  const renderTitle = () => {
    if (!accentWord) return title;
    const idx = title.indexOf(accentWord);
    if (idx < 0) return title;
    return (
      <React.Fragment>
        {title.slice(0, idx)}
        <span className="grad-text-bp">{accentWord}</span>
        {title.slice(idx + accentWord.length)}
      </React.Fragment>
    );
  };
  return (
    <section className="relative pt-[95px] md:pt-[120px] pb-12 md:pb-16 overflow-hidden">
      <div className="glow-hero" />
      <div className="dot-corner" />
      <div className="container-x relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6">
            {tagline && <Eyebrow className="mb-6">{tagline}</Eyebrow>}
            <h1 className="text-hero text-balance">{renderTitle()}</h1>
            {description && (
              <p className="mt-7 text-[18px] md:text-[19px] leading-[1.6] text-ink-secondary">{description}</p>
            )}
            <div className="mt-9">
              <Button variant="primary" onClick={onCta} className="!px-7 !py-4 !text-[15px]">
                {ctaLabel} <ArrowRight />
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6 lg:pl-6">{right}</div>
        </div>
      </div>
    </section>
  );
}

// ---- Problem cards with PNG icons ----
const PROBLEM_ROWS = [
  { t: "Discount programs are hard to track and inconsistently applied", src: "graphics/icons/ProblemDiscountIcon.png" },
  { t: "Customer pricing is disconnected from actual cloud costs", src: "graphics/icons/ProblemCustomerIcon.png" },
  { t: "Billing relies on spreadsheets and manual work", src: "graphics/icons/ProblemBillingIcon.png" },
  { t: "Misapplied discounts and pricing gaps reduce margins", src: "graphics/icons/ProblemMisappliedIcon.png" },
  { t: "Limited visibility into margin performance by customer", src: "graphics/icons/ProblemLimitedIcon.png" },
];

// ---------- MARGIN INTELLIGENCE CARD ----------
const CUSTOMERS = [
  { name: "Acme Co.",        base: 284392, widthPct: 85, bar: "#22c55e", pct: "+18.2%", pctColor: "#22c55e",  tickRate: 26 },
  { name: "Northvale Labs",  base: 92408,  widthPct: 60, bar: "#22c55e", pct: "+14.0%", pctColor: "#22c55e",  tickRate: 9,  highlight: true },
  { name: "Ridgepoint Inc.", base: 38910,  widthPct: 38, bar: "#eab308", pct: "+6.4%",  pctColor: "#eab308",  tickRate: 4 },
  { name: "Saltcliff Media", base: 24118,  widthPct: 20, bar: "#ef4444", pct: "−2.1%",  pctColor: "#ef4444",  tickRate: 2,  alert: true },
];

function getVisitMultiplier() {
  try {
    const key = "moneta_visits";
    const visits = Math.min(parseInt(localStorage.getItem(key) || "0", 10) + 1, 40);
    localStorage.setItem(key, visits);
    return 1 + (visits - 1) * 0.008;
  } catch (e) { return 1; }
}

const VISIT_MULT = getVisitMultiplier();
const BASE_STATS = [
  { label: "Revenue",  base: 10500000, prefix: "$", color: "#f1f5f9",                                        tickRate: 47,  display: "$10.5m" },
  { label: "Growth",   base: 238000,   prefix: "$", color: "#22c55e", glow: "rgba(34,197,94,0.25)",          tickRate: 8,   display: "$238k"  },
  { label: "Margin",   base: 1600000,  prefix: "$", color: "#f97316", glow: "rgba(249,115,22,0.25)", pulse: true, tickRate: 1, display: "$1.6m" },
];

function useCountUp(target, duration = 1200, active = false) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    if (!active) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(ease * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return val;
}

function useLiveTick(initialTarget, tickRate, active) {
  const [live, setLive] = React.useState(initialTarget);
  React.useEffect(() => {
    if (!active) return;
    const schedule = () => {
      const delay = 3000 + Math.random() * 7000;
      return setTimeout(() => {
        const delta = Math.round(tickRate * (0.5 + Math.random() * 1.0));
        setLive(v => v + delta);
        timerRef.current = schedule();
      }, delay);
    };
    const timerRef = { current: schedule() };
    return () => clearTimeout(timerRef.current);
  }, [active, tickRate]);
  return live;
}

function StatTile({ label, base, prefix, color, glow, pulse, active, display }) {
  const initialTarget = Math.round(base * VISIT_MULT);
  const live = useLiveTick(initialTarget, base === 10500000 ? 47 : base === 238000 ? 8 : 1, active);
  const formatted = display || (prefix + live.toLocaleString());
  return (
    <div style={{ background: "#1a2236", border: "1px solid #1f2d45", borderRadius: 10, padding: 16 }}>
      <p style={{ color: "#64748b", fontSize: 10, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "Inter, monospace", marginBottom: 8 }}>{label}</p>
      <p style={{
        fontSize: 20, fontWeight: 500, color, fontFamily: "'Inter', monospace", fontVariantNumeric: "tabular-nums",
        textShadow: glow ? `0 0 14px ${glow}` : "none",
        animation: pulse ? "atRiskPulse 2.4s ease-in-out infinite" : "none",
      }}>{formatted}</p>
    </div>
  );
}

function CustomerRow({ c, i, hovered, mounted, setHovered }) {
  const liveAmount = useLiveTick(Math.round(c.base * VISIT_MULT), c.tickRate, mounted);
  return (
    <div
      onMouseEnter={(e) => { e.stopPropagation(); setHovered(i); }}
      onMouseLeave={(e) => { e.stopPropagation(); setHovered(null); }}
      style={{ display: "grid", gridTemplateColumns: "1fr 88px 110px 52px", alignItems: "center", gap: 10, padding: "9px 10px", borderRadius: 8, cursor: "default", transition: "background 0.15s", background: hovered === i ? "rgba(56,189,248,0.07)" : "transparent" }}>
      <span style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 400, fontFamily: "Inter, sans-serif", paddingLeft: 8 }}>{c.name}</span>
      <span style={{ color: "#64748b", fontSize: 12, textAlign: "right", fontFamily: "Inter, monospace", fontVariantNumeric: "tabular-nums" }}>${liveAmount.toLocaleString()}</span>
      <div style={{ background: "#1e293b", borderRadius: 999, height: 5, overflow: "hidden" }}>
        <div style={{ width: mounted ? `${c.widthPct}%` : "0%", height: "100%", borderRadius: 999, background: c.bar, transition: `width 0.9s cubic-bezier(0.4,0,0.2,1) ${i * 0.12}s` }} />
      </div>
      <span style={{ fontSize: 12, fontWeight: 500, textAlign: "right", color: c.pctColor, fontFamily: "Inter, monospace", fontVariantNumeric: "tabular-nums" }}>{c.pct}</span>
    </div>
  );
}

function MarginIntelligenceCard() {
  const [hovered, setHovered] = React.useState(null);
  const [cardHovered, setCardHovered] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setMounted(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <React.Fragment>
      <style>{`
        @keyframes atRiskPulse {
          0%,100% { text-shadow: 0 0 8px rgba(249,115,22,0.2); }
          50%      { text-shadow: 0 0 22px rgba(249,115,22,0.6); }
        }
        @keyframes barIn {
          from { width: 0; }
        }
      `}</style>
      <div ref={ref} onMouseEnter={() => setCardHovered(true)} onMouseLeave={() => { setCardHovered(false); setHovered(null); }} style={{ position: "relative", width: "100%", maxWidth: 520, margin: "0 auto", paddingBottom: 52 }}>

        {/* Card with gradient top border */}
        <div style={{
          borderRadius: 16, padding: 2,
          background: "linear-gradient(180deg, rgba(56,189,248,0.45) 0%, rgba(31,45,69,0.6) 60%)",
          boxShadow: "0 0 40px rgba(0,200,255,0.07), 0 24px 60px rgba(0,0,0,0.45)",
        }}>
          <div style={{ background: "#111827", borderRadius: 14, padding: 26 }}>

            {/* Header */}
            <p style={{ color: "#38bdf8", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 6, fontFamily: "Inter, sans-serif" }}>Cloud Revenues</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 22 }}>
              <span style={{ color: "#f1f5f9", fontSize: 18, fontWeight: 400, fontFamily: "Inter, sans-serif" }}>235 customers · June 2026</span>
              <span style={{ background: "#0f2e1a", border: "1px solid rgba(34,197,94,0.27)", color: "#22c55e", fontSize: 11, fontWeight: 500, padding: "4px 11px", borderRadius: 999, display: "flex", alignItems: "center", gap: 5, fontFamily: "Inter, sans-serif" }}>
                <span style={{ fontSize: 7 }}>●</span> 15.1% blended
              </span>
            </div>

            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginBottom: 22 }}>
              {BASE_STATS.map(s => <StatTile key={s.label} {...s} active={mounted} />)}
            </div>

            {/* Customer rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {CUSTOMERS.map((c, i) => (
                <CustomerRow key={c.name} c={c} i={i} hovered={hovered} mounted={mounted} setHovered={setHovered} />
              ))}
            </div>
          </div>
        </div>

        {/* Alert popup — always pointerEvents:none to avoid cursor conflicts */}
        <div style={{
          position: "absolute", bottom: 0, left: 20,
          background: "#ffffff", borderRadius: 12, padding: "13px 16px", width: 290,
          boxShadow: "0 8px 32px rgba(0,0,0,0.3), 0 0 0 1px rgba(234,88,12,0.12)",
          opacity: cardHovered ? 0 : 1,
          transition: "opacity 0.25s",
          pointerEvents: "none",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 5 }}>
            <span style={{ fontSize: 14 }}>⚠️</span>
            <span style={{ color: "#ea580c", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "Inter, sans-serif" }}>Margin Drop Alert</span>
          </div>
          {(() => { const pct = -3; const pos = pct >= 0; return (
          <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 3, fontFamily: "Inter, sans-serif", color: "#0f172a" }}>Saltcliff Media <span style={{ color: pos ? "#16a34a" : "#dc2626", fontWeight: 400 }}>{pos ? `${pct}%` : `(${Math.abs(pct)}%)`}</span></p>
          ); })()}
          <p style={{ color: "#64748b", fontSize: 11.5, lineHeight: 1.55, fontFamily: "Inter, sans-serif" }}>Customer Savings Plan discount applied at acct-level but priced at list.</p>
        </div>
      </div>
    </React.Fragment>
  );
}

// ---------- HOME ----------
function FinOpsCountUp({ target, decimals = 0, prefix = "", suffix = "", duration = 700, comma = false }) {
  const [val, setVal] = React.useState(0);
  React.useEffect(() => {
    setVal(0);
    const start = performance.now();
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 2);
      setVal(target * ease);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [target, duration]);
  const formatted = comma ? Math.floor(val).toLocaleString() : val.toFixed(decimals);
  return React.createElement(React.Fragment, null, `${prefix}${formatted}${suffix}`);
}

function FinOpsServiceTabs() {
  const [active, setActive] = React.useState(0);
  const [tick, setTick] = React.useState(0);
  const ref = React.useRef(null);

  React.useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setTick(t => t + 1); obs.disconnect(); } }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  function switchTab(i) { setActive(i); setTick(t => t + 1); }

  const tabs = [
    {
      label: "Cost visibility",
      icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/></svg>,
      service: "",
      title: "Customer cost visibility",
      desc: "Help customers understand where cloud spend is going, how it changes over time, and what is driving movement.",
      bullets: ["Spend breakdown by service, account, project", "MoM and trend reporting per customer", "White-labelled customer-facing reports"],
      card: (tick) => (
        <div style={{ background: "#fff", borderRadius: 12, padding: "14px 16px", border: "1px solid #e2e8f0", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
            <span style={{ fontSize: 11, color: "#64748b", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", fontFamily: "Inter, sans-serif" }}>KMR · JUNE SPEND</span>
            <span style={{ fontSize: 11, color: "#16a34a", fontWeight: 600, fontFamily: "Inter, sans-serif" }}>+11.4% MoM</span>
          </div>
          <div key={tick} style={{ fontSize: 28, fontWeight: 800, color: "#0f172a", fontFamily: "Inter, sans-serif", marginBottom: 8, letterSpacing: "-1px" }}>$<FinOpsCountUp target={127480} comma /></div>
          <svg width="100%" height="44" viewBox="0 0 300 56" preserveAspectRatio="none" style={{ display: "block", marginBottom: 10, flex: 1, minHeight: 44 }}>
            <defs>
              <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.25"/>
                <stop offset="100%" stopColor="#38bdf8" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0 50 C30 48,50 44,80 38 C110 32,130 28,160 22 C190 16,220 12,260 6 L260 56 L0 56 Z" fill="url(#areaGrad)" />
            <path d="M0 50 C30 48,50 44,80 38 C110 32,130 28,160 22 C190 16,220 12,260 6" stroke="#38bdf8" strokeWidth="2" fill="none" strokeLinecap="round"/>
          </svg>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
            <div>
              <div style={{ fontSize: 10, color: "#94a3b8", fontFamily: "Inter, sans-serif", marginBottom: 1 }}>Top driver</div>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#0f172a", fontFamily: "Inter, sans-serif" }}>Compute · 44%</div>
            </div>
            <div>
              <div style={{ fontSize: 10, color: "#94a3b8", fontFamily: "Inter, sans-serif", marginBottom: 1 }}>Accounts</div>
              <div key={tick} style={{ fontSize: 12, fontWeight: 700, color: "#0f172a", fontFamily: "Inter, sans-serif" }}><FinOpsCountUp target={6} /></div>
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Rate reduction",
      icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>,
      service: "",
      title: "Reduce Cloud Rates",
      desc: "Reduce cloud rates by 30% to 50% by implementing discount programs recommended by moneta.",
      bullets: ["Savings alerting", "Automated moneta implementation", "Current performance metrics"],
      card: (tick) => (
        <div style={{ background: "#fff", borderRadius: 12, padding: "14px 16px", border: "1px solid #e2e8f0", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
            <span style={{ fontSize: 11, color: "#64748b", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", fontFamily: "Inter, sans-serif" }}>KMR · JUNE SAVINGS</span>
            <span style={{ fontSize: 11, color: "#16a34a", fontWeight: 600, fontFamily: "Inter, sans-serif" }}>+$4.9K this month</span>
          </div>
          <div key={tick} style={{ fontSize: 28, fontWeight: 800, color: "#0f172a", fontFamily: "Inter, sans-serif", marginBottom: 10, letterSpacing: "-1px" }}>$<FinOpsCountUp target={22946} comma /></div>
          <div style={{ marginTop: "auto" }}>
          {(() => {
            const rows = [
              { label: "Discount Program Coverage", pct: 78.6, color: "#16a34a" },
              { label: "Savings Available", pct: 15, color: "#38bdf8", dollarValue: 10847 },
              { label: "Cloud Investment ROI", pct: 58, color: "#16a34a" },
            ];
            return rows.map(r => (
              <div key={r.label} style={{ marginBottom: 7 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                  <span style={{ fontSize: 11, color: "#475569", fontFamily: "Inter, sans-serif" }}>{r.label}</span>
                  <span key={tick} style={{ fontSize: 11, fontWeight: 600, color: "#0f172a", fontFamily: "Inter, sans-serif" }}>
                    {r.dollarValue
                      ? <>${r.dollarValue.toLocaleString()}</>
                      : <FinOpsCountUp target={r.pct} decimals={1} suffix="%" />
                    }
                  </span>
                </div>
                <div style={{ height: 5, background: "#f1f5f9", borderRadius: 99, overflow: "hidden" }}>
                  <div style={{ width: `${r.pct}%`, height: "100%", background: r.color, borderRadius: 99 }} />
                </div>
              </div>
            ));
          })()}
          </div>
        </div>
      ),
    },
    {
      label: "Infrastructure Efficiency",
      icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      service: "",
      title: "Operational Efficiency",
      desc: "Identify infrastructure changes that reduce cloud spend while maintaining performance and reliability.",
      bullets: ["Underutilized resources identified", "Rightsizing opportunities detected", "Waste and idle spend highlighted"],
      card: (tick) => {
        const opportunities = [
          { label: "EC2 Rightsizing",        savings: 3240, color: "#A855F7" },
          { label: "Idle EBS Volumes",       savings: 1470, color: "#22D3EE" },
          { label: "Unused Load Balancers",  savings: 890,  color: "#3B82F6" },
        ];
        const totalMonthly = opportunities.reduce((s, o) => s + o.savings, 0);
        const totalYear = totalMonthly * 12;
        const mono = "'Courier New', Courier, monospace";
        // Donut geometry
        const R = 34, C = 2 * Math.PI * R;
        let offset = 0;
        const segments = opportunities.map(o => {
          const frac = o.savings / totalMonthly;
          const seg = { ...o, dash: frac * C, gap: C - frac * C, rot: offset };
          offset += frac * 360;
          return seg;
        });
        return (
          <div style={{ background: "#fff", borderRadius: 12, padding: "14px 16px", border: "1px solid #e2e8f0", boxShadow: "0 2px 12px rgba(0,0,0,0.06)", flex: 1, boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
            <div>
              <span style={{ fontSize: 11, color: "#64748b", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", fontFamily: "Inter, sans-serif" }}>KMR · ANNUAL SAVINGS BREAKDOWN</span>
            </div>
            {/* Donut — centered in the available space between header and legend */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flex: 1, minHeight: 0 }}>
              <svg width="104" height="104" viewBox="0 0 96 96" style={{ display: "block" }}>
                <g transform="translate(48,48)">
                  {segments.map(s => (
                    <circle key={s.label} r={R} cx="0" cy="0" fill="none" stroke={s.color} strokeWidth="12"
                      strokeDasharray={`${s.dash} ${s.gap}`} strokeDashoffset="0"
                      transform={`rotate(${s.rot - 90})`} />
                  ))}
                </g>
                <text x="48" y="48" textAnchor="middle" dominantBaseline="central" style={{ fontSize: 13, fontWeight: 800, fill: "#0f172a", fontFamily: "Inter, sans-serif", letterSpacing: "-0.5px" }}>${totalYear.toLocaleString()}</text>
              </svg>
            </div>
            {/* Legend — pinned to bottom */}
            <div>
              {opportunities.map(o => (
                <div key={o.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ width: 7, height: 7, borderRadius: "50%", background: o.color, display: "inline-block", flexShrink: 0 }} />
                    <span style={{ fontSize: 11, color: "#475569", fontFamily: "Inter, sans-serif" }}>{o.label}</span>
                  </div>
                  <span style={{ fontSize: 11, color: "#0f172a", fontWeight: 600, fontFamily: mono, fontVariantNumeric: "tabular-nums" }}>${(o.savings * 12).toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        );
      },
    },
  ];

  const t = tabs[active];

  return (
    <div ref={ref} style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", boxShadow: "0 4px 24px rgba(0,0,0,0.08)", overflow: "hidden", fontFamily: "Inter, sans-serif" }}>
      {/* Tab bar */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6, padding: "10px", borderBottom: "1px solid #e2e8f0", background: "#f8fafc" }}>
        {tabs.map((tab, i) => (
          <button key={tab.label} onClick={() => switchTab(i)} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 7, padding: "9px 12px", background: active === i ? "#ffffff" : "transparent", border: active === i ? "1px solid #e2e8f0" : "1px solid transparent", borderRadius: 8, boxShadow: active === i ? "0 1px 4px rgba(0,0,0,0.08)" : "none", cursor: "pointer", color: active === i ? "#3b82f6" : "#64748b", fontWeight: active === i ? 600 : 500, fontSize: 13.5, fontFamily: "Inter, sans-serif", transition: "all 0.15s", whiteSpace: "nowrap" }}>
            {tab.icon}{tab.label}
          </button>
        ))}
      </div>

      {/* Content — all tabs rendered absolutely on a fixed-height stage so every tab is identical in size */}
      <div style={{ position: "relative", height: 252 }}>
        {tabs.map((tab, i) => (
          <div key={tab.label} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, alignItems: "stretch", visibility: i === active ? "visible" : "hidden", position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
            <div style={{ padding: "14px 24px 16px", borderRight: "1px solid #f1f5f9" }}>
              {tab.service && <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#38bdf8", textTransform: "uppercase", marginBottom: 10 }}>{tab.service}</div>}
              <div style={{ fontSize: 18, fontWeight: 800, color: "#0f172a", lineHeight: 1.25, marginBottom: 12 }}>{tab.title}</div>
              <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, marginBottom: 16 }}>{tab.desc}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                {tab.bullets.map(b => (
                  <div key={b} style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}><polyline points="20 6 9 17 4 12"/></svg>
                    <span style={{ fontSize: 12.5, color: "#475569", lineHeight: 1.4 }}>{b}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ padding: "14px 20px 16px", background: "#f8fafc", display: "flex", alignItems: "stretch" }}>
              {tab.card(tick)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HomePage({ onDemoClick }) {
  return (
    <React.Fragment>
      <HeroSplit
        tagline="Built for AWS & Azure Resellers"
        title="Eliminate Margin Loss in Cloud Reseller Billing"
        accentWord="Cloud Reseller Billing"
        description={<span>The <span className="grad-text-bp font-semibold">operating system</span> for cloud reseller billing — aligning cost, pricing, and discounts across every customer.</span>}
        ctaLabel="Improve Your Margins"
        onCta={onDemoClick}
        right={<MarginIntelligenceCard />}
      />

      {/* Trust bar */}
      <section className="container-x relative -mt-2 md:-mt-4 mb-10 md:mb-14">
        <TrustBar />
      </section>

      {/* PROBLEM */}
      <SectionShell className="border-t border-line-soft overflow-hidden" dotsRight style={{ background: "#0F2040" }}>
        {/* subtle animated dot-grid corner accents */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
          <div style={{
            position: "absolute", top: 0, left: 0, width: 260, height: 200,
            backgroundImage: "radial-gradient(rgba(91,123,255,0.35) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            WebkitMaskImage: "radial-gradient(180px 160px at 0% 0%, #000, transparent 75%)",
            maskImage: "radial-gradient(180px 160px at 0% 0%, #000, transparent 75%)",
            animation: "dotDriftA 16s ease-in-out infinite",
          }} />
          <div style={{
            position: "absolute", bottom: 0, right: 0, width: 260, height: 200,
            backgroundImage: "radial-gradient(rgba(168,85,247,0.3) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            WebkitMaskImage: "radial-gradient(180px 160px at 100% 100%, #000, transparent 75%)",
            maskImage: "radial-gradient(180px 160px at 100% 100%, #000, transparent 75%)",
            animation: "dotDriftB 19s ease-in-out infinite",
          }} />
        </div>
        <style>{`
          @keyframes dotDriftA {
            0%, 100% { transform: translate(0, 0); opacity: 0.55; }
            50%      { transform: translate(8px, 6px); opacity: 0.85; }
          }
          @keyframes dotDriftB {
            0%, 100% { transform: translate(0, 0); opacity: 0.5; }
            50%      { transform: translate(-8px, -6px); opacity: 0.8; }
          }
        `}</style>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-stretch relative" style={{ zIndex: 1 }}>
          <div className="lg:col-span-6 flex flex-col lg:justify-center">
            <Eyebrow className="mb-5">The Problem</Eyebrow>
            <h2 className="text-h1">
              <span className="whitespace-nowrap">Margin Loss Is Built Into</span><br /><span className="grad-text-bp">Cloud Reseller Billing</span>
            </h2>
            <span className="block mt-5 h-[3px] w-32 grad-line rounded-full" />
            <div className="mt-7 flex items-center gap-2 text-accent-cyan text-[13px] font-semibold tracking-[0.18em] uppercase">
              <ArrowRight size={14} /> Why It Happens
            </div>
            <p className="mt-3 text-[18px] leading-[1.65] text-ink-secondary">
              Resellers operate in complex pricing and discount environments.
            </p>
            <p className="mt-2 text-[18px] leading-[1.65] text-white font-semibold">Hidden margin loss is the result.</p>
            <hr className="my-5 border-line-soft" />
            <p className="text-[18px] leading-[1.65] text-ink-secondary">
              Without the right system, billing is manual and discounts are inconsistent.
            </p>
            <p className="mt-2 text-[18px] leading-[1.65] text-white font-semibold">Margins lack visibility and control.</p>
          </div>

          {/* Problem cards with PNG icons */}
          <div className="lg:col-span-6 flex flex-col items-end lg:pt-[16px]">
            <div className="flex flex-col gap-3" style={{ width: "min(100%, 480px)" }}>
              {PROBLEM_ROWS.map((row) => (
                <div key={row.t} className="card flex items-center gap-5 px-5 py-3 hover:border-line-hover flex-1">
                  <div className="w-12 h-12 grid place-items-center shrink-0">
                    <img src={row.src} alt="" width="40" height="40" style={{ objectFit: "contain" }} />
                  </div>
                  <span className="block w-px self-stretch bg-line-soft" />
                  <p className="text-[15px] md:text-[16px] text-ink-primary leading-[1.5] max-w-[330px]">{row.t}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom line callout — ProblemBLicon.png */}
        <div className="mt-6 !rounded-2xl px-7 py-5 md:px-8 md:py-6 relative overflow-hidden" style={{
          border: "1px solid rgba(34,211,238,0.5)",
          background: "#070d18",
          boxShadow: "0 0 24px rgba(34,211,238,0.18), inset 0 0 30px rgba(34,211,238,0.04)",
        }}>
          <div className="flex items-center gap-6 relative">
            <div className="grid place-items-center shrink-0">
              <img src="graphics/icons/ProblemBLicon.png" alt="" width="52" height="52" style={{ objectFit: "contain" }} />
            </div>
            <div className="border-l border-line-soft pl-6">
              <p className="eyebrow text-[11px] mb-1.5" style={{ color: "#22D3EE" }}>The Bottom Line</p>
              <p className="text-[19px] md:text-[24px] font-semibold leading-[1.25] text-balance">
                Margin loss <span style={{ background: "linear-gradient(90deg, #22D3EE, #38bdf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", textShadow: "0 0 20px rgba(34,211,238,0.4)" }}>compounds</span> across every customer.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* SOLUTION */}
      <SectionShell className="border-t border-line-soft light-section" dotsRight style={{ background: "#F8FAFC" }}>
        {/* Top text row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          <div className="lg:col-span-4">
            <Eyebrow className="mb-5">The Solution</Eyebrow>
            <h2 className="text-balance" style={{ fontSize: "clamp(26px, 2.6vw, 38px)", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em" }}>
              Align billing, pricing, discounts, and margins in <span className="grad-text-bp">one system.</span>
            </h2>
          </div>
          <div className="lg:col-span-8 flex flex-col justify-end gap-4 lg:pt-0">
            <p className="text-[16px] leading-[1.7] text-ink-secondary">
              moneta connects cloud billing data, customer pricing rules, discount programs, and margin visibility in one platform, helping resellers operate with better control across every customer account.
            </p>
            <p className="text-[16px] leading-[1.7] text-ink-secondary">
              Instead of treating billing, pricing, discounts, and margin reporting as separate workflows, moneta brings them together into a connected operating layer for cloud reseller operations.
            </p>
          </div>
        </div>

        {/* Graphic */}
        <ReconciliationLoop />

        {/* Bottom callout */}
        <div className="mt-8 card !rounded-2xl px-7 py-5 md:px-8 md:py-5 flex justify-center" style={{ borderColor: "rgba(168,85,247,0.4)" }}>
          <p className="text-[19px] md:text-[22px] font-semibold leading-[1.3] text-center">
            One System. Everything <span className="grad-text-bp">Aligned.</span>
          </p>
        </div>
      </SectionShell>

      {/* OPERATING SYSTEM */}
      <SectionShell className="border-t border-line-soft" style={{ background: "#060B18" }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <Eyebrow className="mb-5">Operating System</Eyebrow>
            <h2 className="text-h1 text-balance">
              Total Clarity. <span className="grad-text-bp">Every Layer.</span>
            </h2>
            <span className="block mt-5 h-[3px] w-32 grad-line rounded-full" />
            <p className="mt-6 text-[18px] leading-[1.7] text-ink-secondary">
              moneta connects every layer of cloud reseller billing — from raw usage data and vendor pricing to customer invoices and real-time margin visibility.
            </p>
            <p className="mt-4 text-[18px] leading-[1.7] text-ink-secondary">
              Not a dashboard. Not a plugin. A purpose-built operating system for how resellers actually run.
            </p>
          </div>
          <div className="lg:col-span-7">
            <OperatingSystemDiagram />
          </div>
        </div>
      </SectionShell>

      {/* RESULTS */}
      <SectionShell className="border-t border-line-soft" dotsLeft style={{ background: "#0F2040" }}>
        <ResultsGraphic />
      </SectionShell>

      {/* FINOPS PREVIEW */}
      <SectionShell className="border-t border-line-soft light-section" dotsLeft style={{ background: "#F8FAFC" }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <Eyebrow className="mb-7">Cloud FinOps Managed Services</Eyebrow>
            <h2 className="text-h1 text-balance">
              Deliver Cloud FinOps as a <span className="grad-text-bp">Managed Service</span>
            </h2>
            <p className="mt-9 text-[16.5px] leading-[1.7] text-ink-secondary max-w-[440px]">
              Cloud service providers are expected to help customers manage and optimize cloud spend.
            </p>
            <p className="mt-4 text-[16.5px] leading-[1.7] text-ink-secondary max-w-[440px]">
              With aligned billing, pricing, and margin data, Cloud FinOps becomes a structured, repeatable service delivered across every customer.
            </p>
            <div className="mt-9">
              <ReviewCTA onClick={onDemoClick} label="Deliver Cloud FinOps at Scale" />
            </div>
          </div>
          <div className="lg:col-span-7 flex items-end">
            <div className="w-full max-w-[680px]" style={{ marginTop: -20 }}>
              <FinOpsServiceTabs />
            </div>
          </div>
        </div>
      </SectionShell>

      <FinalCTA
        title="Stop discovering margin at quarter-end."
        description="Bring your own resell environment. We'll show you what the moneta operating system can do with it – in 45 minutes."
        ctaLabel="See Your Margin Gaps"
        onCta={onDemoClick}
      />
    </React.Fragment>
  );
}

// ---------- PLATFORM ----------
function PlatformPage({ onDemoClick }) {
  return (
    <React.Fragment>
      {/* Hero — left: all text content; right: CoreSystemLayers card */}
      <section className="relative pt-[110px] md:pt-[140px] pb-10 overflow-hidden">
        <div className="glow-hero" />
        <div className="dot-corner-left" />
        <div className="container-x relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* LEFT — matches Platform.png left column exactly */}
            <div className="lg:col-span-6">
              <Eyebrow className="mb-7 text-center [&_.eyebrow-rule]:mx-auto">System</Eyebrow>
              <h1 className="text-hero text-balance text-center">
                The Financial Infrastructure <br className="hidden md:block" />
                for <span className="grad-text-bp">Cloud Resellers</span>
              </h1>
              <p className="mt-7 text-[17px] leading-[1.7] text-ink-secondary max-w-[520px]">
                moneta is the billing infrastructure AWS and Azure resellers use to automate billing,
                apply cloud discounts correctly, and gain clear visibility into customer-level margins.
              </p>
              <p className="mt-4 text-[15.5px] font-medium" style={{ color: "#5B7BFF" }}>
                Built for AWS and Azure resellers managing multiple customers.
              </p>
              <div className="mt-7">
                <ReviewCTA onClick={onDemoClick} />
              </div>

            </div>

            {/* RIGHT — CoreSystemLayers */}
            <div className="lg:col-span-6 lg:sticky lg:top-32">
              <CoreSystemLayers />
            </div>
          </div>
        </div>
      </section>

      {/* A System Built for Cloud Resale Operations */}
      <SectionShell className="border-t border-line-soft" style={{ background: "#0F2040" }}>
        <Eyebrow className="mb-8">A System Built for Cloud Resale Operations</Eyebrow>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border-l-2 pl-5" style={{ borderColor: "#3B82F6" }}>
            <p className="text-[15.5px] leading-[1.75] text-ink-secondary">Cloud resellers operate across complex billing, pricing, and margin environments.</p>
          </div>
          <div className="border-l-2 pl-5" style={{ borderColor: "#5B7BFF" }}>
            <p className="text-[15.5px] leading-[1.75] text-ink-secondary">moneta brings these into a single system purpose-built for AWS and Azure resale models.</p>
          </div>
          <div className="border-l-2 pl-5" style={{ borderColor: "#A855F7" }}>
            <p className="text-[15.5px] leading-[1.75] text-ink-secondary">Billing, pricing, and profitability remain aligned across every customer account — without spreadsheets or manual reconciliation.</p>
          </div>
        </div>
      </SectionShell>

      {/* System Flow */}
      <SectionShell className="border-t border-line-soft light-section" style={{ background: "#FFFFFF" }} dotsRight>
        <div className="mb-10">
          <Eyebrow className="mb-6">System Flow</Eyebrow>
          <h2 className="text-h1 text-balance">One System. Continuous Flow.</h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-ink-secondary max-w-[760px]">
            moneta continuously ingests cloud billing data, applies pricing and discount logic, generates invoices,
            and updates margin visibility in <span className="grad-text-bp font-semibold">real time</span> — keeping everything aligned.
          </p>
        </div>
        <SystemFlowHorizontal />
        {/* Bottom callout quote — matches Platform.png */}
        <div className="mt-14 p-7 md:p-8 rounded-2xl" style={{ background: "#F0F4FF", border: "1px solid #C7D4F0" }}>
          <p className="text-[17px] md:text-[19px] leading-[1.65] text-ink-secondary">
            Built specifically for AWS and Azure resellers operating across multiple customers,
            pricing models, and discount programs — where billing, pricing, and margin must remain continuously aligned.
          </p>
        </div>
      </SectionShell>

      <FinalCTA
        title="See your own data flow through moneta."
        description="A working session on your real billing, pricing, and discount structure — not a generic walkthrough."
        ctaLabel="Book a Demo"
        onCta={onDemoClick}
      />
    </React.Fragment>
  );
}

function FinOpsDiagram({ onDemoClick }) {
  const steps = [
    { label: "Billing",   sub: "Accurate usage\nand invoicing",        color: "#3B82F6", icon: "invoice" },
    { label: "Pricing",   sub: "Flexible, customer-\nspecific pricing", color: "#22D3EE", icon: "tag"     },
    { label: "Discounts", sub: "Consistent discount\nmanagement",       color: "#6366F1", icon: "percent" },
    { label: "Margin",    sub: "Sustainable margins\nat scale",         color: "#A855F7", icon: "trend"   },
  ];
  return (
    <div className="mt-12 max-w-[1060px] mx-auto">
      <div className="flex items-center justify-center gap-2 mb-1">
        <MonetaMark size={22} />
        <span className="text-[17px] font-semibold tracking-tight text-white">moneta</span>
      </div>
      <p className="eyebrow text-ink-muted mb-3 text-[10px] tracking-[0.2em]">The Billing Infrastructure</p>

      <div className="flex items-stretch gap-0">

        {/* LEFT CARD */}
        <div className="shrink-0 w-[175px] rounded-2xl text-left p-5 flex flex-col justify-center"
          style={{ background: "#0B0D16", border: "1px solid #1E2235" }}>
          <p className="text-[10px] font-semibold tracking-[0.15em] uppercase mb-1.5" style={{ color: "#22D3EE" }}>Today</p>
          <p className="text-[12.5px] font-semibold mb-5 leading-[1.35] text-white">Hard to scale FinOps operations</p>
          <div className="space-y-3.5">
            {[
              { label: "One-off analysis per customer", icon: "bars"   },
              { label: "Manual process and reporting",  icon: "scale"  },
              { label: "Difficult to scale",            icon: "layers" },
            ].map(({ label, icon }) => (
              <div key={label} className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg shrink-0 flex items-center justify-center"
                  style={{ background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.25)" }}>
                  {Icons[icon]("#3B82F6")}
                </div>
                <p className="text-[11.5px] text-ink-secondary leading-[1.3]">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CONNECTOR LEFT */}
        <div className="shrink-0 w-20 relative">
          <svg width="100%" height="100%" viewBox="0 0 80 200" preserveAspectRatio="none" fill="none" aria-hidden="true"
            style={{ position: "absolute", inset: 0 }}>
            <line x1="4"  y1="58"  x2="52" y2="58"  stroke="#3B82F6" strokeWidth="1" strokeDasharray="3 3" opacity="0.45" />
            <line x1="4"  y1="100" x2="52" y2="100" stroke="#22D3EE" strokeWidth="1" strokeDasharray="3 3" opacity="0.45" />
            <line x1="4"  y1="142" x2="52" y2="142" stroke="#5B7BFF" strokeWidth="1" strokeDasharray="3 3" opacity="0.45" />
            <line x1="52" y1="58"  x2="52" y2="142" stroke="rgba(91,123,255,0.22)" strokeWidth="1" />
            <line x1="52" y1="100" x2="74" y2="100" stroke="#22D3EE" strokeWidth="1.5" />
            <polyline points="68,96 74,100 68,104" fill="none" stroke="#22D3EE" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
        </div>

        {/* CENTER BOX */}
        <div className="flex-1 rounded-2xl flex flex-col"
          style={{ border: "1px solid rgba(91,123,255,0.45)", background: "linear-gradient(160deg,#0E1122 0%,#0B0E1A 100%)", boxShadow: "0 0 50px 8px rgba(91,123,255,0.14), 0 0 80px 16px rgba(168,85,247,0.09)" }}>
          <div className="px-8 pt-8 pb-4 relative">
            {/* connecting line between circles — runs center-to-center between first and last */}
            <div className="absolute" style={{
              top: "calc(2rem + 23px)",
              left: "calc(2rem + 24px)",
              right: "calc(2rem + 24px)",
              height: 1.5,
              background: "linear-gradient(90deg,#3B82F6,#22D3EE,#6366F1,#A855F7)",
              opacity: 0.6,
            }} />
            <div className="flex items-start justify-between relative z-10">
              {steps.map(({ label, sub, color, icon }, i) => (
                <React.Fragment key={label}>
                  <div className="flex flex-col items-center gap-2.5" style={{ width: 90 }}>
                    <div className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ background: `linear-gradient(135deg,#1a1d2e,#0f1220)`, border: `2px solid ${color}80`, boxShadow: `0 0 18px ${color}60, 0 0 36px ${color}25`, position: "relative", zIndex: 20 }}>
                      {Icons[icon](color)}
                    </div>
                    <span className="text-[13px] font-semibold text-white">{label}</span>
                    <span className="text-[11px] text-ink-secondary leading-[1.35] text-center whitespace-pre-line">{sub}</span>
                  </div>
                  {/* small dot between steps */}
                  {i < steps.length - 1 && (
                    <div className="flex items-center justify-center shrink-0" style={{ width: 16, height: 48, zIndex: 20, position: "relative" }}>
                      <svg width="8" height="10" viewBox="0 0 8 10" fill="none" aria-hidden="true">
                        <path d="M1,2 L6,5 L1,8" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" strokeLinejoin="miter" strokeLinecap="square" />
                      </svg>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center px-6 pb-5 pt-2">
            <p className="text-[12px] text-ink-muted">Continuously aligning billing, pricing, discounts, and margin.</p>
          </div>
        </div>

        {/* CONNECTOR RIGHT */}
        <div className="shrink-0 w-20 relative">
          <svg width="100%" height="100%" viewBox="0 0 80 40" preserveAspectRatio="none" fill="none" aria-hidden="true"
            style={{ position: "absolute", inset: 0 }}>
            <line x1="0" y1="20" x2="60" y2="20" stroke="#A855F7" strokeWidth="1.5" strokeDasharray="5 4" opacity="0.65" />
            <path d="M60,18 L66,20 L60,22" fill="none" stroke="#A855F7" strokeWidth="1.4" strokeLinejoin="miter" strokeLinecap="square" />
          </svg>
        </div>

        {/* RIGHT CARD */}
        <div className="shrink-0 w-[155px] rounded-2xl flex flex-col items-center justify-center p-5 text-center"
          style={{ background: "#0B0D16", border: "1px solid rgba(168,85,247,0.4)", boxShadow: "0 0 28px rgba(168,85,247,0.12)" }}>
          <div className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
            style={{ background: "linear-gradient(135deg,rgba(168,85,247,0.3),rgba(168,85,247,0.15))", border: "2px solid rgba(168,85,247,0.6)", boxShadow: "0 0 20px rgba(168,85,247,0.4)" }}>
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M4 11l5 5L18 6" stroke="#A855F7" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="text-[12.5px] font-semibold text-white leading-[1.45]">
            Continuous FinOps across{" "}
            <span style={{ color: "#22D3EE" }}>every customer.</span>
          </p>
        </div>
      </div>

      {onDemoClick && (
        <div className="mt-6 flex justify-center">
          <button onClick={onDemoClick} className="btn-grad-border inline-flex items-center gap-3 px-7 py-4">
            <span className="font-semibold text-white text-[15px]">Review Your Billing, Pricing, and Margins</span>
            <ArrowRight size={15} className="text-white opacity-70" />
          </button>
        </div>
      )}
    </div>
  );
}

// ---------- FINOPS ----------
function FinOpsPage({ onDemoClick }) {
  return (
    <React.Fragment>

      {/* ── NEW SECTION 1: Hero ── */}
      <section className="relative pt-[95px] md:pt-[120px] pb-12 md:pb-16 overflow-hidden">
        <div className="glow-hero" />
        <div className="dot-corner" />
        <div className="container-x relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left column */}
            <div className="lg:col-span-6">
              <Eyebrow className="mb-6">Cloud FinOps</Eyebrow>
              <h1 className="text-balance" style={{ fontSize: "clamp(38px, 4.8vw, 64px)", fontWeight: 700, lineHeight: 1.06, letterSpacing: "-0.03em" }}>
                Cloud FinOps for resellers and{" "}
                <span className="grad-text-bp">managed service providers.</span>
              </h1>
              <p className="mt-7 text-[17px] md:text-[18px] leading-[1.65] text-ink-secondary max-w-[520px]">
                moneta helps cloud resellers and MSPs deliver cost visibility, optimization insights, budgeting, governance, and customer-facing FinOps reporting across AWS and Azure environments.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Button variant="primary" onClick={onDemoClick} className="!px-7 !py-4 !text-[15px]">
                  See your margin gaps <ArrowRight />
                </Button>
                <Button variant="secondary" as="a" href="#finops-how-it-works" className="!px-6 !py-4 !text-[15px]">
                  How it works
                </Button>
              </div>
              <p className="mt-8 text-[13px] text-ink-muted">
                Built for reseller-led FinOps services across AWS and Azure. GCP support coming soon.
              </p>
            </div>
            {/* Right column — Customer Portfolio card */}
            <div className="lg:col-span-6 lg:pl-4">
              <div style={{ position: "relative", width: "100%", maxWidth: 560, margin: "0 auto" }}>
                {/* Main card */}
                <div style={{ background: "rgba(15,20,40,0.85)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 16, padding: "22px 24px", backdropFilter: "blur(16px)", boxShadow: "0 24px 60px rgba(0,0,0,0.45)" }}>
                  {/* Card header */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
                    <div>
                      <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.13em", textTransform: "uppercase", color: "#64748b", fontFamily: "Inter, sans-serif", marginBottom: 4 }}>Customer Portfolio</p>
                      <p style={{ fontSize: 16, fontWeight: 600, color: "#f1f5f9", fontFamily: "Inter, sans-serif" }}>12 active · 4 in review</p>
                    </div>
                    <span style={{ fontSize: 11, color: "#22c55e", fontWeight: 500, fontFamily: "Inter, sans-serif", display: "flex", alignItems: "center", gap: 5 }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
                      live
                    </span>
                  </div>
                  {/* 2x2 customer grid */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 18 }}>
                    {[
                      { name: "Acme Co.",       pct: 72, status: "healthy",   statusColor: "#22c55e", spend: "$284k/mo", ring: "#22c55e" },
                      { name: "Northvale Labs", pct: 58, status: "+8 opps",   statusColor: "#38bdf8", spend: "$92k/mo",  ring: "#38bdf8" },
                      { name: "Riveroak",       pct: 88, status: "88% cap",   statusColor: "#f59e0b", spend: null,       ring: "#f59e0b" },
                      { name: "Saltcliff Media",pct: 42, status: "tag gap",   statusColor: "#ef4444", spend: "$24k/mo",  ring: "#ef4444" },
                    ].map((c) => {
                      const R = 16, circ = 2 * Math.PI * R;
                      const dash = (c.pct / 100) * circ;
                      return (
                        <div key={c.name} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "12px 14px", display: "flex", alignItems: "center", gap: 12 }}>
                          {/* Donut */}
                          <svg width="42" height="42" viewBox="0 0 42 42" style={{ flexShrink: 0 }}>
                            <circle cx="21" cy="21" r={R} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
                            <circle cx="21" cy="21" r={R} fill="none" stroke={c.ring} strokeWidth="4"
                              strokeDasharray={`${dash} ${circ - dash}`} strokeDashoffset={circ * 0.25}
                              strokeLinecap="round" />
                            <text x="21" y="25" textAnchor="middle" style={{ fontSize: 9, fontWeight: 700, fill: "#f1f5f9", fontFamily: "Inter, sans-serif" }}>{c.pct}%</text>
                          </svg>
                          <div>
                            <p style={{ fontSize: 13, fontWeight: 600, color: "#f1f5f9", fontFamily: "Inter, sans-serif", marginBottom: 2 }}>{c.name}</p>
                            <p style={{ fontSize: 12, fontWeight: 500, color: c.statusColor, fontFamily: "Inter, sans-serif", marginBottom: c.spend ? 1 : 0 }}>{c.status}</p>
                            {c.spend && <p style={{ fontSize: 11, color: "#64748b", fontFamily: "Inter, sans-serif" }}>{c.spend}</p>}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  {/* Footer timestamp */}
                  <p style={{ textAlign: "right", fontSize: 11, color: "#334155", fontFamily: "Inter, sans-serif" }}>May 2026</p>
                </div>
                {/* Savings Found popup */}
                <div style={{ position: "absolute", bottom: -32, left: 16, background: "#ffffff", borderRadius: 12, padding: "14px 18px", width: 300, boxShadow: "0 8px 32px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.06)", zIndex: 10 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <div style={{ width: 28, height: 28, borderRadius: 7, background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.25)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/></svg>
                    </div>
                    <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#16a34a", fontFamily: "Inter, sans-serif" }}>Savings Found</span>
                  </div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#0f172a", fontFamily: "Inter, sans-serif", marginBottom: 4 }}>Northvale Labs · +$22,480</p>
                  <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.55, fontFamily: "Inter, sans-serif" }}>Six optimization opportunities surfaced. Ready for May customer review.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NEW SECTION 2: The Challenge ── */}
      <SectionShell className="border-t border-line-soft" style={{ background: "#0F1729", paddingTop: 72, paddingBottom: 72 }}>
        {/* Top 2-col heading row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-14">
          <div>
            <Eyebrow className="mb-5">The Challenge</Eyebrow>
            <h2 style={{ fontSize: "clamp(30px, 3.5vw, 46px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.025em", color: "#f1f5f9" }}>
              Customers expect more than cloud billing.
            </h2>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <p className="text-[16px] leading-[1.7]" style={{ color: "#94a3b8" }}>
              Cloud customers want to understand where spend is going, why costs are changing, and how to reduce waste. For resellers and MSPs, this creates an opportunity to deliver Cloud FinOps as an ongoing service.
            </p>
            <p className="text-[16px] leading-[1.7]" style={{ color: "#94a3b8" }}>
              FinOps delivery becomes difficult when customer cost visibility, billing data, discount impact, optimization insights, and governance reporting are not connected. Resellers need a repeatable way to turn cloud financial data into customer-facing value.
            </p>
          </div>
        </div>
        {/* 5 challenge cards — 3 top row, 2 bottom row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {[
            {
              n: "01",
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/></svg>,
              t: "Customers need clear cost visibility",
              b: "Customers need reporting that explains spend, trends, cost drivers, and allocation across their cloud environments.",
            },
            {
              n: "02",
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>,
              t: "Optimization requires context",
              b: "Savings recommendations are more useful when connected to usage patterns, business priorities, and customer environments.",
            },
            {
              n: "03",
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>,
              t: "Governance affects cost accuracy",
              b: "Tagging gaps, allocation issues, and unclear ownership make cloud cost reporting harder to trust.",
            },
          ].map((c) => (
            <div key={c.n} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 14, padding: "24px 22px" }}>
              <p style={{ fontSize: 11, color: "#475569", fontWeight: 600, fontFamily: "Inter, sans-serif", marginBottom: 14 }}>{c.n}</p>
              <div style={{ width: 38, height: 38, borderRadius: 9, background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>{c.icon}</div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#e2e8f0", fontFamily: "Inter, sans-serif", marginBottom: 8, lineHeight: 1.35 }}>{c.t}</h3>
              <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.65, fontFamily: "Inter, sans-serif" }}>{c.b}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              n: "04",
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>,
              t: "FinOps delivery must be repeatable",
              b: "One-off cost reviews are difficult to scale across many customers and billing periods.",
            },
            {
              n: "05",
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/></svg>,
              t: "Resellers need internal and customer views",
              b: "Internal teams need margin and billing context; customers need clear cost, savings, and optimization reporting.",
            },
          ].map((c) => (
            <div key={c.n} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: 14, padding: "24px 22px" }}>
              <p style={{ fontSize: 11, color: "#475569", fontWeight: 600, fontFamily: "Inter, sans-serif", marginBottom: 14 }}>{c.n}</p>
              <div style={{ width: 38, height: 38, borderRadius: 9, background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>{c.icon}</div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#e2e8f0", fontFamily: "Inter, sans-serif", marginBottom: 8, lineHeight: 1.35 }}>{c.t}</h3>
              <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.65, fontFamily: "Inter, sans-serif" }}>{c.b}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* ── NEW SECTION 3: The Solution ── */}
      <SectionShell className="border-t border-line-soft light-section" style={{ background: "#F8FAFC", paddingTop: 72, paddingBottom: 72 }}>
        {/* Top 2-col heading row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-14">
          <div>
            <Eyebrow className="mb-5">The Solution</Eyebrow>
            <h2 style={{ fontSize: "clamp(30px, 3.5vw, 46px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.025em", color: "#0f172a" }}>
              Turn cloud financial data into repeatable FinOps services.
            </h2>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <p className="text-[16px] leading-[1.7]" style={{ color: "#334155" }}>
              moneta helps resellers and MSPs deliver Cloud FinOps as a structured service by connecting customer cost visibility, savings insights, budgeting, governance, and reporting.
            </p>
            <p className="text-[16px] leading-[1.7]" style={{ color: "#334155" }}>
              FinOps becomes more than occasional cost analysis. It becomes a repeatable customer service built on aligned billing, cost, discount, and reporting data.
            </p>
            <p style={{ fontSize: 13, color: "#22D3EE", fontStyle: "italic", fontFamily: "Inter, sans-serif" }}>Connected cost, savings, governance, and customer reporting.</p>
          </div>
        </div>
        {/* 5 solution cards — 3 top, 2 bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {[
            {
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/></svg>,
              iconColor: "#3B82F6",
              t: "Customer cost visibility",
              b: "Give customers clear reporting on cloud spend, usage trends, allocation, and cost drivers.",
            },
            {
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7v4M12 11l-5 6M12 11l5 6"/></svg>,
              iconColor: "#3B82F6",
              t: "Optimization and savings insights",
              b: "Identify opportunities to reduce waste, improve utilization, and take advantage of savings programs.",
            },
            {
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
              iconColor: "#3B82F6",
              t: "Budgeting and forecasting",
              b: "Support customer planning with budget tracking, spend trends, and forecast visibility.",
            },
          ].map((c) => (
            <div key={c.t} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: "24px 22px" }}>
              <div style={{ width: 38, height: 38, borderRadius: 9, background: `rgba(59,130,246,0.08)`, border: `1px solid rgba(59,130,246,0.18)`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>{c.icon}</div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", fontFamily: "Inter, sans-serif", marginBottom: 8, lineHeight: 1.35 }}>{c.t}</h3>
              <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.65, fontFamily: "Inter, sans-serif" }}>{c.b}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            {
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
              t: "Governance and tagging",
              b: "Improve allocation, accountability, tagging visibility, and cost ownership.",
              accent: "#f59e0b",
            },
            {
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>,
              t: "Managed FinOps reporting",
              b: "Deliver repeatable customer-facing reports that support ongoing cloud financial management.",
              accent: "#f59e0b",
            },
          ].map((c) => (
            <div key={c.t} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 14, padding: "24px 22px" }}>
              <div style={{ width: 38, height: 38, borderRadius: 9, background: `rgba(59,130,246,0.08)`, border: `1px solid rgba(59,130,246,0.18)`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>{c.icon}</div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", fontFamily: "Inter, sans-serif", marginBottom: 8, lineHeight: 1.35 }}>{c.t}</h3>
              <p style={{ fontSize: 13.5, color: c.accent, lineHeight: 1.65, fontFamily: "Inter, sans-serif" }}>{c.b}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* ── NEW SECTION 4: How It Works ── */}
      <SectionShell id="finops-how-it-works" className="border-t border-line-soft" style={{ background: "#0F2040", paddingTop: 80, paddingBottom: 80 }}>
        <div className="text-center max-w-[760px] mx-auto mb-14">
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#22D3EE", fontFamily: "Inter, sans-serif", marginBottom: 16 }}>How It Works</p>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 54px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.03em", color: "#f1f5f9" }}>
            From cloud cost data to customer-facing FinOps value.
          </h2>
          <p className="mt-5 text-[16px] leading-[1.7]" style={{ color: "#94a3b8" }}>
            moneta helps reseller teams turn billing and usage data into meaningful FinOps workflows for customers.
          </p>
        </div>
        {/* 6 step cards — 3+3 grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {[
            { step: 1, t: "Ingest cloud cost and usage data",      b: "Bring cloud billing, usage, cost, account, subscription, and service data into one platform." },
            { step: 2, t: "Organize spend by customer context",    b: "Map spend to customers, accounts, subscriptions, services, teams, projects, or business units." },
            { step: 3, t: "Surface cost drivers",                  b: "Identify where spend is increasing, which services are contributing, and what changed over time." },
          ].map((s) => (
            <div key={s.step} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "22px 22px 24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14, paddingBottom: 12, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <span style={{ fontSize: 12, color: "#475569", fontFamily: "Inter, sans-serif" }}>Step {s.step}</span>
                <span style={{ width: 26, height: 26, borderRadius: "50%", background: "#3B82F6", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#fff", fontFamily: "Inter, sans-serif" }}>0{s.step}</span>
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#e2e8f0", fontFamily: "Inter, sans-serif", marginBottom: 8, lineHeight: 1.35 }}>{s.t}</h3>
              <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.65, fontFamily: "Inter, sans-serif" }}>{s.b}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { step: 4, t: "Identify savings opportunities",  b: "Highlight waste, inefficient usage, discount opportunities, and optimization areas." },
            { step: 5, t: "Track budgets and governance",    b: "Monitor budgets, tagging, allocation, and cost ownership to improve financial discipline." },
            { step: 6, t: "Deliver customer reports",        b: "Provide customers with repeatable reporting for spend reviews, optimization planning, and FinOps conversations." },
          ].map((s) => (
            <div key={s.step} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 14, padding: "22px 22px 24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14, paddingBottom: 12, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                <span style={{ fontSize: 12, color: "#475569", fontFamily: "Inter, sans-serif" }}>Step {s.step}</span>
                <span style={{ width: 26, height: 26, borderRadius: "50%", background: "#3B82F6", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "#fff", fontFamily: "Inter, sans-serif" }}>0{s.step}</span>
              </div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#e2e8f0", fontFamily: "Inter, sans-serif", marginBottom: 8, lineHeight: 1.35 }}>{s.t}</h3>
              <p style={{ fontSize: 13.5, color: "#64748b", lineHeight: 1.65, fontFamily: "Inter, sans-serif" }}>{s.b}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <section className="relative pt-[110px] md:pt-[140px] pb-16 overflow-hidden">
        <div className="glow-hero" />
        <div className="dot-corner" />
        <div className="container-x relative text-center">
          <Eyebrow className="mb-7 flex flex-col items-center">FinOps for Cloud Resellers</Eyebrow>
          <h1 className="max-w-[900px] mx-auto" style={{ fontSize: "clamp(36px, 4.2vw, 58px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.025em" }}>
            Deliver FinOps Consistently<br />Across <span className="grad-text-bp">Every Customer</span>
          </h1>
          <p className="mt-6 text-[18px] md:text-[19px] leading-[1.6] text-ink-secondary max-w-[580px] mx-auto">
            A structured, repeatable FinOps service—without added operational burden.
          </p>
          <FinOpsDiagram onDemoClick={onDemoClick} />
        </div>
      </section>

      <SectionShell className="border-t border-line-soft light-section" style={{ background: "#F8FAFC" }}>
        <div className="text-center max-w-[820px] mx-auto">
          <h2 className="text-h1 text-balance">
            FinOps <span className="grad-text-bp">cannot</span> scale without infrastructure.
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-ink-secondary">
            Without system-level alignment, FinOps depends on disconnected tools, manual reconciliation, and one-time analysis.
          </p>
        </div>

        <div className="mt-12 rounded-2xl overflow-hidden border border-line-soft">
          {/* Header row */}
          <div className="grid grid-cols-[1fr_40px_1fr] px-6 py-3 border-b border-line-soft" style={{ background: "rgba(0,0,0,0.03)" }}>
            <p className="eyebrow text-[10px] text-ink-muted">Without Infrastructure</p>
            <div />
            <p className="eyebrow text-[10px] grad-text-bp">With moneta</p>
          </div>
          {[
            ["One-off cost analysis",                  "Continuous FinOps delivery across every customer account", "#3B82F6"],
            ["Cost, pricing, and billing disconnected", "A single system of record across cost, pricing, and invoicing", "#5B7BFF"],
            ["Manual, reactive optimization",          "Continuous, system-driven optimization across every customer", "#6366F1"],
            ["One-time engagement",                    "Recurring FinOps service delivered at scale", "#A855F7"],
          ].map(([a, b, c], i, arr) => (
            <div key={a} className={`grid grid-cols-[1fr_40px_1fr] items-center px-6 py-4 ${i < arr.length - 1 ? "border-b border-line-soft" : ""}`}
              style={{ background: i % 2 === 0 ? "transparent" : "rgba(0,0,0,0.02)" }}>
              <p className="text-[15px] text-ink-secondary leading-[1.5]">{a}</p>
              <div className="flex items-center justify-center">
                <svg width="20" height="10" viewBox="0 0 20 10" fill="none" aria-hidden="true">
                  <line x1="0" y1="5" x2="14" y2="5" stroke={c} strokeWidth="1" opacity="0.5" />
                  <path d="M12,3 L16,5 L12,7" fill="none" stroke={c} strokeWidth="1" strokeLinejoin="miter" strokeLinecap="square" />
                </svg>
              </div>
              <p className="text-[15px] font-semibold leading-[1.45]" style={{ color: c }}>{b}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[15px] leading-[1.7] text-ink-muted max-w-[760px]">
          When billing, pricing, and discount data operate within a single system, FinOps no longer depends on
          manual reconciliation or disconnected tools.
        </p>
      </SectionShell>

      <SectionShell className="border-t border-line-soft" style={{ background: "#0F2040" }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <Eyebrow className="mb-5">Why moneta</Eyebrow>
            <h2 className="text-balance" style={{ fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Built for <span className="grad-text-bp">AWS and Azure</span> resellers managing multiple customers, pricing models, and discount programs.
            </h2>
            <p className="mt-5 text-[15.5px] leading-[1.7] text-ink-secondary">
              Every feature is shaped by how resellers actually operate — not adapted from single-tenant tools.
            </p>
          </div>
          <div className="lg:col-span-7 space-y-2.5">
            {[
              { t: "Customer review reporting",   b: "Branded, repeatable cost & savings reviews built from real billing data.", c: "#3B82F6" },
              { t: "Optimization playbooks",      b: "Rightsizing, commitment planning, and anomaly detection out of the box.", c: "#22D3EE" },
              { t: "Discount earn-back tracking", b: "Show customers exactly what their commitments earned this quarter.", c: "#A855F7" },
              { t: "One source of truth",         b: "Same data behind invoices powers FinOps insights — no parallel pipeline.", c: "#5B7BFF" },
            ].map((f, i) => (
              <div key={f.t} className="flex items-start gap-4 px-5 py-4 rounded-xl"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderLeft: `3px solid ${f.c}` }}>
                <span className="text-[11px] font-bold mt-0.5 shrink-0" style={{ color: f.c }}>0{i + 1}</span>
                <div>
                  <h4 className="text-[15px] font-semibold mb-1 text-white">{f.t}</h4>
                  <p className="text-[13.5px] text-ink-secondary leading-[1.6]">{f.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <FinalCTA
        className="!pt-4 md:!pt-6"
        title="Build a FinOps practice on your own billing data."
        description="See how resellers are productizing cloud financial management with moneta as the spine."
        ctaLabel="Book a Demo"
        onCta={onDemoClick}
      />
    </React.Fragment>
  );
}

// ---------- WHY MONETA ----------
function WhyPage({ onDemoClick }) {
  return (
    <React.Fragment>
      <section className="relative pt-[95px] md:pt-[120px] pb-16 overflow-hidden">
        <div className="glow-hero" />
        <div className="dot-corner-left" />
        <div className="container-x relative text-center flex flex-col items-center">
            <Eyebrow className="mb-6">Why moneta</Eyebrow>
            <h1 className="text-hero text-balance max-w-[1100px]">
              Why Existing Solutions Fail <span className="grad-text-bp">Cloud Reseller Billing</span>
            </h1>
            <p className="mt-7 text-[18px] md:text-[19px] leading-[1.65] text-ink-secondary max-w-[780px]">
              moneta is the billing infrastructure built for how AWS and Azure resellers actually operate —
              multi-customer, multi-vendor, and continuously reconciled.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4">
              <div className="flex items-center gap-6">
                {[
                  { n: "Multi-customer", d: "by design" },
                  { n: "Real-time",      d: "margin visibility" },
                  { n: "Zero",           d: "manual reconciliation" },
                ].map(({ n, d }, i, arr) => (
                  <React.Fragment key={n}>
                    <div className="text-left">
                      <p className="text-[14px] font-semibold grad-text-bp leading-none">{n}</p>
                      <p className="text-[11px] text-ink-muted mt-0.5">{d}</p>
                    </div>
                    {i < arr.length - 1 && <span className="w-px h-6 bg-line-soft" />}
                  </React.Fragment>
                ))}
              </div>
              <Button variant="primary" onClick={onDemoClick} className="!px-7 !py-4 !text-[15px] w-full">
                Book a Demo <ArrowRight />
              </Button>
            </div>
        </div>
      </section>

      {/* The Difference */}
      <SectionShell className="border-t border-line-soft light-section" style={{ background: "#F8FAFC" }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <Eyebrow className="mb-5">The Difference</Eyebrow>
            <h2 className="text-h2 text-balance">
              What makes moneta a <span className="grad-text-bp">system</span>, not a tool.
            </h2>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              { t: "Cost and price share one ledger", b: "Vendor invoices and customer invoices reconcile inside the system, not in spreadsheets.", c: "#3B82F6" },
              { t: "Discounts are first-class",       b: "EDP, PPA, RI/SP, and custom commitments are modeled — not patched in at month-end.", c: "#22D3EE" },
              { t: "Per-customer margin is live",     b: "Margin is a real-time number, visible while it can still be acted on.", c: "#A855F7" },
              { t: "Built for multi-customer scale",  b: "Hundreds of customers, dozens of contracts, one operating ledger.", c: "#5B7BFF" },
            ].map((f) => (
              <div key={f.t} className="rounded-xl p-5" style={{ background: "#FFFFFF", border: "1px solid #E2E8F0", borderLeft: `3px solid ${f.c}` }}>
                <h3 className="text-[15px] font-semibold mb-2" style={{ color: f.c }}>{f.t}</h3>
                <p className="text-[13.5px] text-ink-secondary leading-[1.6]">{f.b}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* The Reality */}
      <SectionShell className="border-t border-line-soft overflow-hidden relative !pt-14 !pb-0" style={{
        background: "radial-gradient(ellipse 55% 65% at 78% 35%, rgba(91,123,255,0.14) 0%, rgba(168,85,247,0.07) 45%, transparent 80%), #060B18"
      }}>
        {/* Faint grid overlay — covers entire section, fades from left to right */}
        <div className="pointer-events-none" style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "linear-gradient(rgba(180,186,200,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(180,186,200,0.5) 1px, transparent 1px)", backgroundSize: "32px 32px", maskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.4) 30%, black 60%, black 100%)", WebkitMaskImage: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.4) 30%, black 60%, black 100%)" }} />

        <div className="grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-10 items-start relative">

          {/* LEFT */}
          <div>
            <Eyebrow className="mb-6">The Reality</Eyebrow>
            <h2 className="mb-8" style={{ fontSize: "clamp(32px, 3.6vw, 52px)", fontWeight: 700, lineHeight: 1.06, letterSpacing: "-0.025em" }}>
              Most reseller stacks are held together <span className="grad-text-bp">by people.</span>
            </h2>
            <div className="space-y-5 text-[15.5px] leading-[1.75]" style={{ color: "rgba(180,186,200,0.72)" }}>
              <p>Talk to any reseller's finance team and a pattern shows up: monthly close runs on tribal knowledge, custom scripts, and shared spreadsheets. It works — until it doesn't, and the cost is invisible until margin reports are reconciled at quarter-end.</p>
              <p>moneta replaces that operational debt with a system that owns the cost-to-invoice loop end to end.</p>
            </div>

            {/* Warning bar */}
            <div className="mt-8 flex items-center gap-3 px-5 py-3 rounded-xl" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0">
                <path d="M12 3L2 21h20L12 3z" stroke="rgba(245,158,11,0.7)" strokeWidth="1.5" strokeLinejoin="round"/>
                <line x1="12" y1="10" x2="12" y2="15" stroke="rgba(245,158,11,0.7)" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="12" cy="18" r="0.6" fill="rgba(245,158,11,0.7)" stroke="rgba(245,158,11,0.7)"/>
              </svg>
              <p className="text-[13.5px]" style={{ color: "rgba(180,186,200,0.75)" }}>When systems don't connect, <span className="text-white font-semibold">people pay the price.</span></p>
            </div>
          </div>

          {/* RIGHT — new diagram matching reference */}
          <div className="flex items-start gap-4 lg:gap-6" style={{ marginTop: 32 }}>

            {/* BEFORE column */}
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: "rgba(180,186,200,0.45)" }}>Before: Fragmented</p>
              <div className="flex flex-col gap-3">
                {[
                  { title: "Spreadsheets",   desc: "Manual downloads and edits create versioning issues.",   icon: "sheetBox",     c: "#22C55E" },
                  { title: "Custom Scripts", desc: "Brittle scripts connect systems that don't talk.",       icon: "code",         c: "#A855F7" },
                  { title: "Billing Tools",  desc: "Inconsistent configuration across accounts and teams.", icon: "dollar",       c: "#22D3EE" },
                  { title: "Exports",        desc: "Point-in-time exports that quickly go stale.",          icon: "externalLink", c: "#22C55E" },
                  { title: "Reporting",      desc: "Reconciliation happens days or weeks later.",           icon: "bars",         c: "#A855F7" },
                ].map(({ title, desc, icon, c }) => (
                  <div key={title} className="relative rounded-xl p-3 z-10" style={{ background: "#0B0E1A", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-[28px] h-[28px] rounded-md shrink-0 flex items-center justify-center" style={{ background: `${c}18`, border: `1px solid ${c}38` }}>
                        {Icons[icon](c)}
                      </div>
                      <span className="text-[12px] font-semibold text-white">{title}</span>
                    </div>
                    <p className="text-[11px] leading-[1.4]" style={{ color: "rgba(180,186,200,0.55)" }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CENTER — SVG connector trails */}
            <div className="shrink-0 self-stretch flex items-stretch" style={{ width: 72, paddingTop: 28 }}>
              <svg width="72" height="100%" viewBox="0 0 72 500" preserveAspectRatio="xMidYMid meet" fill="none" style={{ width: "100%", height: "100%" }}>
                {/* Each card is ~86px tall (72px content + 12px gap), center of card i = 43 + i*86 */}
                {/* Cards: 0→43, 1→129, 2→215, 3→301, 4→387 — junction at card 2 center = 215 */}
                {[43, 129, 215, 301, 387].map((y, i) => (
                  <path key={i}
                    d={`M 0 ${y} C 36 ${y}, 36 215, 52 215`}
                    stroke="rgba(91,123,255,0.55)" strokeWidth="1.5" strokeDasharray="5 4"
                  />
                ))}
                {/* Junction dot at center card */}
                <circle cx="52" cy="215" r="4" fill="rgba(91,123,255,0.9)" />
                {/* Single arrow line out right */}
                <line x1="56" y1="215" x2="68" y2="215" stroke="#5B7BFF" strokeWidth="1.5" />
                <path d="M62 211 L68 215 L62 219" stroke="#5B7BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </div>

            {/* AFTER — moneta panel */}
            <div className="shrink-0 w-[190px]" style={{ marginTop: 100 }}>
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-4" style={{ color: "#22D3EE" }}>After: Unified</p>
              <div className="rounded-2xl flex flex-col overflow-hidden" style={{ background: "#0B0E1A", border: "1.5px solid rgba(34,211,238,0.55)", boxShadow: "0 0 40px rgba(34,211,238,0.18), 0 0 80px rgba(91,123,255,0.14)" }}>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-4">
                    <MonetaMark size={20} />
                    <span className="text-[15px] font-bold text-white">moneta</span>
                  </div>
                  <div className="space-y-2.5">
                    {["One system of record","Real-time margin visibility","Automated reconciliation","Built for scale"].map(item => (
                      <div key={item} className="flex items-center gap-2">
                        <div className="shrink-0 w-[16px] h-[16px] rounded-full flex items-center justify-center" style={{ background: "#3B82F6" }}>
                          <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1.5 4.5l2 2L7.5 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        </div>
                        <span className="text-[12px] font-medium text-white leading-[1.3]">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="px-3 py-2 text-center" style={{ background: "rgba(34,211,238,0.1)", borderTop: "1px solid rgba(34,211,238,0.35)" }}>
                  <p className="text-[8px] font-black tracking-[0.18em] uppercase" style={{ color: "#22D3EE" }}>Connected. Reliable. Confident.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Why Cloud Resellers Choose moneta — WhyMonetaDiagram */}
      <SectionShell className="border-t border-line-soft" dotsRight style={{ background: "#0F2040" }}>
        <div className="mb-10 max-w-[820px]">
          <Eyebrow className="mb-6">Why Cloud Resellers Choose moneta</Eyebrow>
          <h2 className="text-h1 text-balance">
            The System <span className="grad-text-bp">Behind</span> the Outcomes
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-ink-secondary">
            Cloud reseller outcomes don't come from tools — they come from an aligned system.
          </p>
        </div>
        <WhyMonetaDiagram onCta={onDemoClick} />
      </SectionShell>

      {/* Built for multi-customer */}
      <SectionShell className="border-t border-line-soft light-section" style={{ background: "#FFFFFF" }}>
        <div className="mb-10 max-w-[820px]">
          <Eyebrow className="mb-6">Why moneta</Eyebrow>
          <h2 className="text-h1 text-balance">
            Built for <span className="grad-text-bp">multi-customer</span> cloud reseller operations.
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-ink-secondary">
            Every assumption in the platform is shaped by how resellers actually run — not adapted from SaaS billing
            or single-tenant FinOps.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { t: "Designed for fan-out", b: "Hundreds of customer accounts and dozens of vendor agreements as the default shape.", c: "#3B82F6", i: "scale" },
            { t: "Discount-aware", b: "Commitments and discount programs are modeled directly in the data — not in side-tables.", c: "#22D3EE", i: "filter" },
            { t: "Continuous, not batch", b: "Pricing, reconciliation, and margin all run in real time. No monthly close marathon.", c: "#A855F7", i: "bars" },
            { t: "Replaces, not layers", b: "moneta is the operating system — not another dashboard pointed at the existing one.", c: "#5B7BFF", i: "layers" },
          ].map((f) => (
            <div key={f.t} className="card p-7">
              <div className="icon-tile mb-5" style={{ background: `${f.c}15`, border: `1px solid ${f.c}30` }}>
                {f.i === "scale" && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={f.c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/>
                    <path d="M12 7v4M12 11l-5 6M12 11l5 6"/>
                  </svg>
                )}
                {f.i === "filter" && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={f.c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 7h10M9 12h6M11 17h2"/>
                  </svg>
                )}
                {f.i === "bars" && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={f.c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20V10M6 20v-4M18 20V4"/>
                    <circle cx="18" cy="4" r="1.5" fill={f.c}/>
                  </svg>
                )}
                {f.i === "layers" && (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={f.c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 12l10 5 10-5" opacity="0.5"/>
                    <path d="M2 17l10 5 10-5" opacity="0.25"/>
                  </svg>
                )}
              </div>
              <h3 className="text-[18px] font-semibold mb-2" style={{ color: f.c }}>{f.t}</h3>
              <p className="text-[14.5px] text-ink-secondary leading-[1.65]">{f.b}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <FinalCTA
        title="See why resellers replace stitched workflows with moneta."
        description="Bring your own resell environment. We'll show you what the moneta operating system can do with it – in 45 minutes."
        ctaLabel="Book a Demo"
        onCta={onDemoClick}
      />
    </React.Fragment>
  );
}

function FinOpsForCloudResellersPage({ onDemoClick }) {
  return (
    <React.Fragment>
      {/* Hero */}
      <section className="relative pt-[110px] md:pt-[140px] pb-16 overflow-hidden">
        <div className="glow-hero" />
        <div className="dot-corner" />
        <div className="container-x relative text-center">
          <Eyebrow className="mb-7 flex flex-col items-center">FinOps for Cloud Resellers</Eyebrow>
          <h1 className="max-w-[900px] mx-auto" style={{ fontSize: "clamp(36px, 4.2vw, 58px)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.025em" }}>
            Deliver FinOps Consistently<br />Across <span className="grad-text-bp">Every Customer</span>
          </h1>
          <p className="mt-6 text-[18px] md:text-[19px] leading-[1.6] text-ink-secondary max-w-[580px] mx-auto">
            A structured, repeatable FinOps service—without added operational burden.
          </p>
          <FinOpsDiagram onDemoClick={onDemoClick} />
        </div>
      </section>

      <SectionShell className="border-t border-line-soft light-section" style={{ background: "#F8FAFC" }}>
        <div className="text-center max-w-[820px] mx-auto">
          <h2 className="text-h1 text-balance">
            FinOps <span className="grad-text-bp">cannot</span> scale without infrastructure.
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-ink-secondary">
            Without system-level alignment, FinOps depends on disconnected tools, manual reconciliation, and one-time analysis.
          </p>
        </div>

        <div className="mt-12 rounded-2xl overflow-hidden border border-line-soft">
          {/* Header row */}
          <div className="grid grid-cols-[1fr_40px_1fr] px-6 py-3 border-b border-line-soft" style={{ background: "rgba(0,0,0,0.03)" }}>
            <p className="eyebrow text-[10px] text-ink-muted">Without Infrastructure</p>
            <div />
            <p className="eyebrow text-[10px] grad-text-bp">With moneta</p>
          </div>
          {[
            ["One-off cost analysis",                  "Continuous FinOps delivery across every customer account", "#3B82F6"],
            ["Cost, pricing, and billing disconnected", "A single system of record across cost, pricing, and invoicing", "#5B7BFF"],
            ["Manual, reactive optimization",          "Continuous, system-driven optimization across every customer", "#6366F1"],
            ["One-time engagement",                    "Recurring FinOps service delivered at scale", "#A855F7"],
          ].map(([a, b, c], i, arr) => (
            <div key={a} className={`grid grid-cols-[1fr_40px_1fr] items-center px-6 py-4 ${i < arr.length - 1 ? "border-b border-line-soft" : ""}`}
              style={{ background: i % 2 === 0 ? "transparent" : "rgba(0,0,0,0.02)" }}>
              <p className="text-[15px] text-ink-secondary leading-[1.5]">{a}</p>
              <div className="flex items-center justify-center">
                <svg width="20" height="10" viewBox="0 0 20 10" fill="none" aria-hidden="true">
                  <line x1="0" y1="5" x2="14" y2="5" stroke={c} strokeWidth="1" opacity="0.5" />
                  <path d="M12,3 L16,5 L12,7" fill="none" stroke={c} strokeWidth="1" strokeLinejoin="miter" strokeLinecap="square" />
                </svg>
              </div>
              <p className="text-[15px] font-semibold leading-[1.45]" style={{ color: c }}>{b}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[15px] leading-[1.7] text-ink-muted max-w-[760px]">
          When billing, pricing, and discount data operate within a single system, FinOps no longer depends on
          manual reconciliation or disconnected tools.
        </p>
      </SectionShell>

      <SectionShell className="border-t border-line-soft" style={{ background: "#0F2040" }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <Eyebrow className="mb-5">Why moneta</Eyebrow>
            <h2 className="text-balance" style={{ fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em" }}>
              Built for <span className="grad-text-bp">AWS and Azure</span> resellers managing multiple customers, pricing models, and discount programs.
            </h2>
            <p className="mt-5 text-[15.5px] leading-[1.7] text-ink-secondary">
              Every feature is shaped by how resellers actually operate — not adapted from single-tenant tools.
            </p>
          </div>
          <div className="lg:col-span-7 space-y-2.5">
            {[
              { t: "Customer review reporting",   b: "Branded, repeatable cost & savings reviews built from real billing data.", c: "#3B82F6" },
              { t: "Optimization playbooks",      b: "Rightsizing, commitment planning, and anomaly detection out of the box.", c: "#22D3EE" },
              { t: "Discount earn-back tracking", b: "Show customers exactly what their commitments earned this quarter.", c: "#A855F7" },
              { t: "One source of truth",         b: "Same data behind invoices powers FinOps insights — no parallel pipeline.", c: "#5B7BFF" },
            ].map((f, i) => (
              <div key={f.t} className="flex items-start gap-4 px-5 py-4 rounded-xl"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderLeft: `3px solid ${f.c}` }}>
                <span className="text-[11px] font-bold mt-0.5 shrink-0" style={{ color: f.c }}>0{i + 1}</span>
                <div>
                  <h4 className="text-[15px] font-semibold mb-1 text-white">{f.t}</h4>
                  <p className="text-[13.5px] text-ink-secondary leading-[1.6]">{f.b}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <FinalCTA
        title="Build a FinOps practice on your own billing data."
        description="See how resellers are productizing cloud financial management with moneta as the spine."
        ctaLabel="Book a Demo"
        onCta={onDemoClick}
      />
    </React.Fragment>
  );
}

Object.assign(window, { HomePage, PlatformPage, FinOpsPage, FinOpsForCloudResellersPage, WhyPage });
