// Iconography & diagram components — match the inspiration

// ---- Colored outline icons (varied per card to match Problem section) ----
function IconLine({ children, color = "#3B82F6", size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

const Icons = {
  tag:    (c) => <IconLine color={c}><path d="M20.6 13.4l-7.2 7.2a2 2 0 01-2.8 0l-7-7a2 2 0 01-.6-1.4V5a2 2 0 012-2h7.2a2 2 0 011.4.6l7 7a2 2 0 010 2.8z" /><circle cx="8.5" cy="8.5" r="1.6" /></IconLine>,
  cloud:  (c) => <IconLine color={c}><path d="M7 18a4 4 0 010-8 6 6 0 0111.5 1.5A4 4 0 0117 19H7z" /><path d="M12 13v3M10.5 14.5h3" /></IconLine>,
  sheet:  (c) => <IconLine color={c}><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" /><path d="M14 3v5h5" /><path d="M8 13h8M8 17h6M8 21" /><rect x="8" y="11" width="8" height="8" rx="0.5" fill="none" /><path d="M12 11v8M8 15h8" /></IconLine>,
  percent:(c) => <IconLine color={c}><circle cx="12" cy="12" r="9" /><path d="M8.5 15.5l7-7" /><circle cx="9" cy="9" r="1.2" /><circle cx="15" cy="15" r="1.2" /></IconLine>,
  bars:   (c) => <IconLine color={c}><path d="M5 20V11M12 20V5M19 20v-7M3 20h18" /></IconLine>,
  invoice:(c) => <IconLine color={c}><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" /><path d="M14 3v5h5" /><path d="M9 13h6M9 17h4" /><circle cx="17" cy="17" r="2" /><path d="M16 17l1 1 1.5-1.5" /></IconLine>,
  trend:  (c) => <IconLine color={c}><path d="M3 17l6-6 4 4 8-8" /><path d="M14 7h7v7" /></IconLine>,
  target: (c) => <IconLine color={c}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill={c} /></IconLine>,
  layers: (c) => <IconLine color={c}><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5M3 18l9 5 9-5" /></IconLine>,
  shield: (c) => <IconLine color={c}><path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" /><path d="M9 12l2 2 4-4" /></IconLine>,
  spark:  (c) => <IconLine color={c}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.5 5.5l2.8 2.8M15.7 15.7l2.8 2.8M5.5 18.5l2.8-2.8M15.7 8.3l2.8-2.8" /></IconLine>,
  scale:  (c) => <IconLine color={c}><path d="M12 4v16M5 9h14M5 14h14" /><circle cx="12" cy="4" r="1.5" fill={c} /></IconLine>,
  filter: (c) => <IconLine color={c}><path d="M3 5h18l-7 8v6l-4-2v-4L3 5z" /></IconLine>,
};

// ---- Operating-system diagram (hero) ----
// Three-column: Inputs / moneta core / Outputs, with Controls below the core.
function OperatingSystemDiagram() {
  // side: "in" attaches a dashed connector on the right edge (toward center)
  //       "out" attaches one on the left edge
  const item = (label, sub, IconKey, color, side) => (
    <div className="relative card !rounded-xl px-3.5 py-3 flex items-center gap-3 min-w-[180px]">
      {side === "in" && (
        <svg className="hidden md:block absolute left-full top-1/2 -translate-y-1/2 pointer-events-none" width="32" height="2" viewBox="0 0 32 2" aria-hidden="true">
          <line x1="0" y1="1" x2="32" y2="1" stroke="#1A2030" strokeWidth="1.2" />
          <line x1="0" y1="1" x2="32" y2="1" stroke="#3B82F6" strokeWidth="1.2" className="flow-line" />
        </svg>
      )}
      {side === "out" && (
        <svg className="hidden md:block absolute right-full top-1/2 -translate-y-1/2 pointer-events-none" width="32" height="2" viewBox="0 0 32 2" aria-hidden="true">
          <line x1="0" y1="1" x2="32" y2="1" stroke="#1A2030" strokeWidth="1.2" />
          <line x1="0" y1="1" x2="32" y2="1" stroke="#A855F7" strokeWidth="1.2" className="flow-line" />
        </svg>
      )}
      <div className="w-9 h-9 rounded-md grid place-items-center border border-line bg-bg-tertiary">
        {Icons[IconKey](color)}
      </div>
      <div className="leading-tight">
        <p className="text-[13px] font-semibold">{label}</p>
        <p className="text-[11px] text-ink-muted">{sub}</p>
      </div>
    </div>
  );

  return (
    <div className="relative w-full">
      <div className="grid grid-cols-[1fr_auto_1fr] gap-5 md:gap-7 items-center">
        {/* Inputs column */}
        <div className="space-y-3">
          <p className="eyebrow text-center md:text-left text-[10.5px] tracking-[0.22em]">Inputs</p>
          {item("Usage Data", "Real-time", "bars", "#22D3EE", "in")}
          {item("Vendor Pricing", "AWS, Azure", "trend", "#5B7BFF", "in")}
          {item("Contracts", "Agreements", "sheet", "#3B82F6", "in")}
        </div>

        {/* Center: moneta core panel */}
        <div className="relative">
          <div className="relative card !rounded-2xl p-4 md:p-5 min-w-[280px]" style={{ boxShadow: "0 0 0 1px rgba(91,123,255,0.25), 0 24px 60px -20px rgba(91,123,255,0.35)" }}>
            <div className="flex items-center justify-center mb-4 pb-3 border-b border-line-soft" style={{ gap: 2 }}>
              <img src="assets/moneta-icon.png" alt="" width="26" height="26" style={{ width: 26, height: 26, objectFit: "contain", display: "block", transform: "translateY(-3px)" }} aria-hidden="true" />
              <span style={{ fontSize: 14, lineHeight: 1, marginLeft: -2 }}><b className="text-white">moneta</b> <span className="grad-text-bp font-semibold">operating system</span></span>
            </div>
            <div className="space-y-2.5">
              {[
                { t: "Pricing Logic",            s: "Pricing rules that adapt",       i: "tag",     c: "#5B7BFF" },
                { t: "Discount Engine",          s: "Automated discounts",            i: "percent", c: "#22D3EE" },
                { t: "Billing System",           s: "Accurate. Automated. Aligned.",  i: "invoice", c: "#3B82F6" },
                { t: "Margin Intelligence Layer",s: "Real-time margin visibility",    i: "trend",   c: "#A855F7" },
              ].map((r) => (
                <div key={r.t} className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-line-soft bg-bg-tertiary/40">
                  <div className="w-8 h-8 rounded-md grid place-items-center border border-line">{Icons[r.i](r.c)}</div>
                  <div className="leading-tight">
                    <p className="text-[12.5px] font-semibold">{r.t}</p>
                    <p className="text-[10.5px] text-ink-muted">{r.s}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Controls row */}
            <div className="mt-4 pt-3 border-t border-line-soft">
              <p className="eyebrow text-center text-[10px] tracking-[0.22em] mb-3">Controls</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-line-soft">
                  {Icons.shield("#5B7BFF")}
                  <div className="leading-tight">
                    <p className="text-[12px] font-semibold">Margin Rules</p>
                    <p className="text-[10px] text-ink-muted">Active</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-line-soft">
                  {Icons.percent("#F59E0B")}
                  <div className="leading-tight">
                    <p className="text-[12px] font-semibold">Discount Policies</p>
                    <p className="text-[10px] text-ink-muted">Enforced</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Outputs column */}
        <div className="space-y-3">
          <p className="eyebrow text-center md:text-left text-[10.5px] tracking-[0.22em]">Outputs</p>
          {item("Invoices", "Accurate", "invoice", "#5B7BFF", "out")}
          {item("Margin Intelligence", "Actionable", "trend", "#A855F7", "out")}
          {item("Discount Allocation", "Per customer", "percent", "#22D3EE", "out")}
        </div>
      </div>
    </div>
  );
}

// ---- Trust bar (Over $100M / AWS / Azure / Purpose-built for Cloud Resellers)
function AwsLogo() {
  // Clean "aws" wordmark + orange smile arc — built from simple shapes for crisp rendering
  return (
    <svg viewBox="0 0 140 64" width="140" height="64" aria-label="AWS" role="img">
      <g fill="#FFFFFF" fontFamily="Inter, system-ui, sans-serif" fontWeight="700">
        <text x="70" y="32" textAnchor="middle" fontSize="32" letterSpacing="-1">aws</text>
      </g>
      {/* smile arc */}
      <path
        d="M14 48 C 42 60, 98 60, 126 48"
        stroke="#FF9900"
        strokeWidth="3.6"
        fill="none"
        strokeLinecap="round"
      />
      {/* arrow head */}
      <path
        d="M118 44 L 128 49 L 121 56"
        stroke="#FF9900"
        strokeWidth="3.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AzureLogo() {
  // Microsoft Azure triangular mark — proper proportions
  return (
    <svg viewBox="0 0 64 64" width="50" height="50" aria-hidden="true">
      <defs>
        <linearGradient id="azGradA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#22D3EE" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>
        <linearGradient id="azGradB" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>
      </defs>
      {/* Back triangle (left, larger) */}
      <path d="M22 8 L42 8 L58 56 L34 56 L26 38 L18 50 L4 50 Z" fill="url(#azGradA)" />
      {/* Front folded face */}
      <path d="M26 16 L42 8 L58 56 L34 56 L40 44 L24 40 Z" fill="url(#azGradB)" opacity="0.92" />
    </svg>
  );
}

function TrustBar() {
  return (
    <div className="card !rounded-2xl px-6 md:px-10 py-7 md:py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl border border-line-soft bg-bg-tertiary/40 grid place-items-center shrink-0">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <defs>
                <linearGradient id="cloudBp" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#5B7BFF" />
                  <stop offset="100%" stopColor="#A855F7" />
                </linearGradient>
              </defs>
              <path d="M7 18a4 4 0 010-8 6 6 0 0111.5 1.5A4 4 0 0117 19H7z" fill="url(#cloudBp)" />
            </svg>
          </div>
          <div className="leading-tight">
            <p className="text-[20px] font-bold grad-text-bp">Over $100M</p>
            <p className="text-[12px] text-ink-muted mt-0.5">processed annually</p>
          </div>
        </div>

        <div className="flex items-center justify-center md:justify-start">
          <AwsLogo />
        </div>

        <div className="flex items-center gap-3">
          <AzureLogo />
          <div className="leading-tight">
            <p className="text-[11px] uppercase tracking-[0.16em] text-ink-muted">Microsoft</p>
            <p className="text-[18px] font-semibold text-white -mt-0.5">Azure</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl border border-line-soft bg-bg-tertiary/40 grid place-items-center shrink-0">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <defs>
                <linearGradient id="shieldBp" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#5B7BFF" />
                  <stop offset="100%" stopColor="#A855F7" />
                </linearGradient>
              </defs>
              <path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" fill="none" stroke="url(#shieldBp)" strokeWidth="1.7" strokeLinejoin="round" />
              <path d="M9 12l2 2 4-4" stroke="url(#shieldBp)" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="leading-tight">
            <p className="text-[12px] text-ink-muted">Purpose-built for</p>
            <p className="text-[16px] font-semibold grad-text-bp -mt-0.5">Cloud Resellers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---- Solution vertical timeline ----
function SolutionTimeline() {
  const items = [
    { t: "Accurate, Automated Invoicing", b: "Consistent, customer-ready invoices aligned to pricing.",  i: "invoice", c: "#3B82F6" },
    { t: "Cloud Discount Management",     b: "Apply discount programs by customer and capture savings.", i: "percent", c: "#22D3EE" },
    { t: "Margin Visibility by Customer", b: "Track margin performance and identify where to adjust.",   i: "bars",    c: "#A855F7" },
    { t: "Pricing Advantage",             b: "Set pricing with full visibility into cost, discounts, and margin.", i: "trend", c: "#5B7BFF" },
  ];
  return (
    <div className="relative">
      {/* center title */}
      <div className="hidden md:flex items-center gap-3 mb-7">
        <span className="h-px flex-1 grad-line opacity-60" />
        <p className="text-[15px] font-semibold"><span className="text-white">moneta</span> <span className="grad-text-bp">system</span></p>
        <span className="h-px flex-1 grad-line opacity-60" />
      </div>

      {/* gradient vertical line behind dots */}
      <div className="relative pl-9">
        <span className="absolute left-[14px] top-2 bottom-2 w-px" style={{background: "linear-gradient(180deg, #3B82F6 0%, #6366F1 50%, #A855F7 100%)"}} />
        <ul className="space-y-7">
          {items.map((it, idx) => (
            <li key={it.t} className="relative">
              <span className={"absolute -left-[27px] top-1.5 timeline-dot " + (idx % 2 === 1 ? "timeline-dot-purple" : "")} />
              <div className="grid grid-cols-[44px_1fr] gap-4 items-start">
                <div className="w-11 h-11 rounded-md grid place-items-center border border-line bg-bg-tertiary/40">
                  {Icons[it.i](it.c)}
                </div>
                <div>
                  <h4 className="text-[16.5px] font-semibold text-white mb-1">{it.t}</h4>
                  <p className="text-[14px] text-ink-secondary leading-[1.6]">{it.b}</p>
                </div>
              </div>
              {idx < items.length - 1 && <hr className="border-line-soft mt-7" />}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ---- "Before → After" results table ----
function ResultsList() {
  const rows = [
    ["Unknown Margins",         "Clear Profitability"],
    ["Manual Billing",          "Automated Invoicing"],
    ["Missed Discounts",        "Captured Savings"],
    ["Reactive Pricing",        "Competitive Advantage"],
    ["Operational Bottlenecks", "Scalable Growth"],
    ["Ad Hoc FinOps",           "Managed Service"],
  ];
  return (
    <div>
      <div className="space-y-4">
        {rows.map(([a, b]) => (
          <div key={a} className="grid grid-cols-[1fr_28px_1fr] items-center gap-4 py-3 border-b border-line-soft last:border-b-0">
            <span className="text-[17px] text-ink-secondary">{a}</span>
            <span className="text-ink-muted text-[18px] text-center">→</span>
            <span className="text-[17px] font-semibold grad-text-bp">{b}</span>
          </div>
        ))}
      </div>
      <p className="mt-7 pt-5 border-t border-line-soft text-[15.5px] text-ink-secondary leading-[1.65]">
        Built for <span className="grad-text-bp font-semibold">AWS and Azure</span> resellers — aligning <span className="grad-text-bp font-semibold">multi-customer</span> billing, pricing, and margin in a <span className="grad-text-bp font-semibold">single system</span>.
      </p>
    </div>
  );
}

// ---- FinOps split: moneta | Your Managed Service ----
function FinopsSplit() {
  const items = [
    { t: "Customer Cost Visibility", b: "Clear cloud budgeting and reporting", c: "#3B82F6" },
    { t: "Rate Reduction",           b: "Reduce rates for customers",          c: "#A855F7" },
    { t: "Infrastructure Efficiency",b: "Optimize resource usage and reduce waste", c: "#5B7BFF" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
      {/* left column belongs to the page; this component renders only the right diagram */}
      <div></div>
      <div>
        <div className="flex flex-col items-center text-center">
          <p className="text-[28px] md:text-[32px] font-semibold text-white tracking-tight">moneta</p>
          <span className="my-2 h-10 w-px bg-line-hover" />
          <p className="text-[26px] md:text-[30px] font-semibold grad-text-bp tracking-tight">Your Managed Service</p>
          <span className="my-2 h-10 w-px bg-line-hover" />
        </div>

        <div className="mt-6 grid grid-cols-3 gap-5">
          {items.map((it) => (
            <div key={it.t} className="text-center">
              <p className="text-[16px] md:text-[17px] font-semibold text-white leading-[1.25]">{it.t}</p>
              <span className="block mx-auto my-3 h-[2px] w-10 rounded-full" style={{ background: it.c }} />
              <p className="text-[13.5px] text-ink-secondary leading-[1.55]">{it.b}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-line-soft">
          <p className="text-[15px] text-ink-secondary leading-[1.65]">
            Deliver Cloud FinOps as a repeatable service that strengthens customer relationships and enables{" "}
            <span className="grad-text-bp font-semibold">recurring services revenue.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

// ---- Platform: vertical timeline (Pricing → Discount → Billing → Margin) ----
function CoreSystemLayers() {
  const items = [
    { t: "Pricing Layer",  b: "Holds customer-specific pricing models and ensures pricing reflects agreements, cost structures, and strategy.", c: "#3B82F6" },
    { t: "Discount Layer", b: "Applies cloud discount programs across customers and aligns discounts with both cost and pricing.",               c: "#22D3EE" },
    { t: "Billing Layer",  b: "Generates customer-ready invoices directly from usage, pricing, and discount data — without reconciliation.",     c: "#5B7BFF" },
    { t: "Margin Intelligence Layer", b: "Provides visibility into margin performance across every customer, continuously updated as billing and pricing change.", c: "#A855F7" },
  ];
  return (
    <div className="relative pl-9">
      <span className="absolute left-[14px] top-2 bottom-2 w-px" style={{background: "linear-gradient(180deg, #3B82F6 0%, #6366F1 50%, #A855F7 100%)"}} />
      <ul className="space-y-8">
        {items.map((it, idx) => (
          <li key={it.t} className="relative">
            <span className="absolute -left-[27px] top-1.5 timeline-dot" style={{ background: it.c, boxShadow: `0 0 0 4px ${it.c}33, 0 0 18px ${it.c}88` }} />
            <h4 className="text-[18px] font-semibold mb-1.5" style={{ color: it.c }}>{it.t}</h4>
            <p className="text-[14.5px] text-ink-secondary leading-[1.65] max-w-[460px]">{it.b}</p>
            {idx < items.length - 1 && <hr className="border-line-soft mt-7" />}
          </li>
        ))}
      </ul>
    </div>
  );
}

// ---- Platform: horizontal "system flow" with dots and arrow ----
function SystemFlowHorizontal() {
  const steps = [
    { t: "Cloud Data (Continuous)",      b: "Cloud billing data is continuously ingested across all customer accounts.", c: "#3B82F6" },
    { t: "Pricing & Discounts (Aligned)",b: "Pricing models and discount programs are applied automatically and aligned with cost.", c: "#5B7BFF" },
    { t: "Invoicing (Continuous)",       b: "Accurate, customer-ready invoices are generated based on aligned billing and pricing.", c: "#6366F1" },
    { t: "Margin Visibility (Real-Time)",b: "Margin performance is updated in real time across every customer for complete visibility and control.", c: "#A855F7" },
  ];
  return (
    <div className="relative">
      {/* horizontal line + dots */}
      <div className="relative h-7 mb-4">
        <span className="absolute top-1/2 left-0 right-0 h-px -translate-y-1/2 grad-line" />
        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 grid grid-cols-4">
          {steps.map((s, i) => (
            <div key={i} className="flex justify-center">
              <span className="timeline-dot" style={{ background: s.c, boxShadow: `0 0 0 4px ${s.c}26, 0 0 18px ${s.c}80` }} />
            </div>
          ))}
        </div>
        {/* arrow head at end */}
        <svg className="absolute right-0 top-1/2 -translate-y-1/2" width="22" height="14" viewBox="0 0 22 14" fill="none">
          <path d="M0 7h18M14 1l6 6-6 6" stroke="#A855F7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
        {steps.map((s) => (
          <div key={s.t} className="border-l border-line-soft pl-4 md:border-l-0 md:pl-0">
            <h4 className="text-[15.5px] font-semibold mb-2" style={{ color: s.c }}>{s.t}</h4>
            <p className="text-[13.5px] text-ink-secondary leading-[1.6]">{s.b}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, {
  Icons, OperatingSystemDiagram, TrustBar, SolutionTimeline, ResultsList,
  FinopsSplit, CoreSystemLayers, SystemFlowHorizontal,
});
