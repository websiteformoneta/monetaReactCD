// Iconography & diagram components — updated to use PNG icons from graphics/icons/

function IconLine({ children, color = "#3B82F6", size = 28 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

const Icons = {
  tag: (c) => <IconLine color={c}><path d="M20.6 13.4l-7.2 7.2a2 2 0 01-2.8 0l-7-7a2 2 0 01-.6-1.4V5a2 2 0 012-2h7.2a2 2 0 011.4.6l7 7a2 2 0 010 2.8z" /><circle cx="8.5" cy="8.5" r="1.6" /></IconLine>,
  cloud: (c) => <IconLine color={c}><path d="M7 18a4 4 0 010-8 6 6 0 0111.5 1.5A4 4 0 0117 19H7z" /></IconLine>,
  sheet: (c) => <IconLine color={c}><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" /><path d="M14 3v5h5" /><path d="M12 11v8M8 15h8" /></IconLine>,
  percent: (c) => <IconLine color={c}><circle cx="12" cy="12" r="9" /><path d="M8.5 15.5l7-7" /><circle cx="9" cy="9" r="1.2" /><circle cx="15" cy="15" r="1.2" /></IconLine>,
  bars: (c) => <IconLine color={c}><path d="M5 20V11M12 20V5M19 20v-7M3 20h18" /></IconLine>,
  invoice: (c) => <IconLine color={c}><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></IconLine>,
  trend: (c) => <IconLine color={c}><path d="M3 17l6-6 4 4 8-8" /><path d="M14 7h7v7" /></IconLine>,
  target: (c) => <IconLine color={c}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill={c} /></IconLine>,
  layers: (c) => <IconLine color={c}><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 13l9 5 9-5M3 18l9 5 9-5" /></IconLine>,
  shield: (c) => <IconLine color={c}><path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3z" /><path d="M9 12l2 2 4-4" /></IconLine>,
  scale: (c) => <IconLine color={c}><path d="M12 4v16M5 9h14M5 14h14" /><circle cx="12" cy="4" r="1.5" fill={c} /></IconLine>,
  filter: (c) => <IconLine color={c}><path d="M3 5h18l-7 8v6l-4-2v-4L3 5z" /></IconLine>,
  settings: (c) => <IconLine color={c}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" /></IconLine>,
};

function PngIcon({ src, size = 22 }) {
  return <img src={src} alt="" width={size} height={size} style={{ width: size, height: size, objectFit: "contain", display: "block", flexShrink: 0 }} />;
}

function CheckCircle({ color = "#5B7BFF", size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5" opacity="0.4" />
      <path d="M8 12l3 3 5-5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ---- Operating-system diagram (hero) ----
function OperatingSystemDiagram() {
  const inputs = [
    { label: "Usage Data", sub: "Real-time", src: "graphics/icons/ProblemLimitedIcon.png" },
    { label: "Vendor Pricing", sub: "AWS, Azure", src: "graphics/icons/ProblemCustomerIcon.png" },
    { label: "Contracts", sub: "Agreements", src: "graphics/icons/ProblemBillingIcon.png" },
  ];
  const outputs = [
    { label: "Invoices", sub: "Accurate", src: "graphics/icons/ProblemBillingIcon.png" },
    { label: "Margin Intelligence", sub: "Actionable", src: "graphics/icons/ProblemLimitedIcon.png" },
  ];
  const coreRows = [
    { t: "Pricing Logic", s: "Pricing rules that adapt", src: null, svgI: "settings", c: "#5B7BFF" },
    { t: "Discount Engine", s: "Automated discounts", src: "graphics/icons/ProblemMisappliedIcon.png", c: "#F59E0B" },
    { t: "Billing System", s: "Accurate. Automated. Aligned.", src: "graphics/icons/ProblemBillingIcon.png", c: "#A855F7" },
    { t: "Margin Intelligence Layer", s: "Real-time margin visibility", src: "graphics/icons/ProblemLimitedIcon.png", c: "#5B7BFF" },
  ];

  const Connector = ({ dir = "in" }) => (
    <svg className="hidden md:block" width="36" height="14" viewBox="0 0 36 14" aria-hidden="true">
      {dir === "in" ? (
        <>
          <line x1="0" y1="7" x2="28" y2="7" stroke="#22D3EE" strokeWidth="1.4" strokeDasharray="4 3" />
          <polygon points="28,3.5 36,7 28,10.5" fill="#3B82F6" />
        </>
      ) : (
        <>
          <line x1="8" y1="7" x2="36" y2="7" stroke="#22D3EE" strokeWidth="1.4" strokeDasharray="4 3" />
          <polygon points="8,3.5 0,7 8,10.5" fill="#A855F7" />
        </>
      )}
    </svg>
  );

  return (
    <div className="relative w-full">
      <div className="grid grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 items-center">

        {/* INPUTS */}
        <div className="space-y-2.5">
          <p className="eyebrow text-center md:text-left text-[10px] tracking-[0.2em] mb-1">Inputs</p>
          {inputs.map((inp) => (
            <div key={inp.label} className="relative card !rounded-xl px-3 py-3 flex items-center gap-3">
              <div className="w-9 h-9 rounded-md grid place-items-center border border-line bg-bg-tertiary/40 shrink-0">
                <PngIcon src={inp.src} size={22} />
              </div>
              <div className="leading-tight">
                <p className="text-[12.5px] font-semibold">{inp.label}</p>
                <p className="text-[10.5px] text-ink-muted">{inp.sub}</p>
              </div>
              <span className="absolute left-full top-1/2 -translate-y-1/2 ml-0.5 hidden md:block">
                <Connector dir="in" />
              </span>
            </div>
          ))}
        </div>

        {/* CENTER */}
        <div className="relative card !rounded-2xl p-4" style={{
          minWidth: "min(260px, 46vw)",
          boxShadow: "0 0 0 1px rgba(91,123,255,0.3), 0 24px 60px -20px rgba(91,123,255,0.4)"
        }}>
          <div className="flex items-center justify-center gap-1.5 mb-3 pb-3 border-b border-line-soft">
            <img src="assets/moneta-icon.png" alt="" width="22" height="22" style={{ objectFit: "contain", transform: "translateY(-2px)" }} />
            <span style={{ fontSize: 12, lineHeight: 1 }}>
              <b className="text-white">moneta</b>{" "}
              <span className="grad-text-bp font-semibold">operating system</span>
            </span>
          </div>
          <div className="space-y-1.5">
            {coreRows.map((r) => (
              <div key={r.t} className="flex items-center gap-2 px-2.5 py-2 rounded-lg border border-line-soft bg-bg-tertiary/40">
                <div className="w-7 h-7 rounded-md grid place-items-center border border-line bg-bg-tertiary shrink-0">
                  {r.src ? <PngIcon src={r.src} size={16} /> : Icons[r.svgI](r.c)}
                </div>
                <div className="flex-1 leading-tight min-w-0">
                  <p className="text-[11px] font-semibold truncate">{r.t}</p>
                  <p className="text-[9.5px] text-ink-muted leading-tight">{r.s}</p>
                </div>
                <CheckCircle color={r.c} size={14} />
              </div>
            ))}
          </div>
          <div className="mt-3 pt-2.5 border-t border-line-soft">
            <p className="eyebrow text-center text-[9px] tracking-[0.2em] mb-2">Controls</p>
            <div className="grid grid-cols-2 gap-1.5">
              {[
                { label: "Margin Rules", sub: "Active", src: "graphics/icons/ProblemBLicon.png" },
                { label: "Discount Policies", sub: "Enforced", src: "graphics/icons/ProblemMisappliedIcon.png" },
              ].map((ctrl) => (
                <div key={ctrl.label} className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg border border-line-soft">
                  <PngIcon src={ctrl.src} size={14} />
                  <div className="leading-tight min-w-0">
                    <p className="text-[10px] font-semibold truncate">{ctrl.label}</p>
                    <p className="text-[9px] text-ink-muted">{ctrl.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* OUTPUTS */}
        <div className="space-y-2.5">
          <p className="eyebrow text-center md:text-left text-[10px] tracking-[0.2em] mb-1">Outputs</p>
          {outputs.map((out) => (
            <div key={out.label} className="relative card !rounded-xl px-3 py-3 flex items-center gap-3">
              <span className="absolute right-full top-1/2 -translate-y-1/2 mr-0.5 hidden md:block">
                <Connector dir="out" />
              </span>
              <div className="w-9 h-9 rounded-md grid place-items-center border border-line bg-bg-tertiary/40 shrink-0">
                <PngIcon src={out.src} size={22} />
              </div>
              <div className="leading-tight">
                <p className="text-[12.5px] font-semibold">{out.label}</p>
                <p className="text-[10.5px] text-ink-muted">{out.sub}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

// ---- AWS / Azure logos ----
function AwsLogo() {
  return (
    <svg viewBox="0 0 140 64" width="100" height="44" aria-label="AWS" role="img">
      <text x="70" y="34" textAnchor="middle" fontSize="30" fontWeight="700" letterSpacing="-1" fill="#FFFFFF" fontFamily="Inter,system-ui,sans-serif">aws</text>
      <path d="M14 48 C 42 60, 98 60, 126 48" stroke="#FF9900" strokeWidth="3.6" fill="none" strokeLinecap="round" />
      <path d="M118 44 L 128 49 L 121 56" stroke="#FF9900" strokeWidth="3.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AzureLogo() {
  return (
    <img src="graphics/icons/azureIcon.png" alt="Microsoft Azure" width="40" height="40" style={{ objectFit: "contain", mixBlendMode: "screen" }} />
  );
}

// ---- Trust Bar — uses PNG icons ----
function TrustBar() {
  return (
    <div className="card !rounded-2xl px-6 md:px-10 py-7 md:py-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl border border-line-soft bg-bg-tertiary/40 grid place-items-center shrink-0">
            <PngIcon src="graphics/icons/HeroCloudProcessedAnnuallyIcon.png" size={30} />
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
            <PngIcon src="graphics/icons/HeroPurposeBuiltIcon.png" size={30} />
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

// ---- Solution vertical timeline — large PNG icons, centered line ----
function SolutionTimeline() {
  const TCOL = 28; // timeline column px — line and dot both centered here
  const items = [
    { t: "Accurate, Automated Invoicing", b: "Consistent, customer-ready invoices aligned to pricing.", src: "graphics/icons/ProblemBillingIcon.png", c: "#3B82F6" },
    { t: "Cloud Discount Management", b: "Apply discount programs by customer and capture savings.", src: "graphics/icons/ProblemMisappliedIcon.png", c: "#22D3EE" },
    { t: "Margin Visibility by Customer", b: "Track margin performance and identify where to adjust.", src: "graphics/icons/ProblemLimitedIcon.png", c: "#A855F7" },
    { t: "Pricing Advantage", b: "Set pricing with full visibility into cost, discounts, and margin.", src: null, svgI: "trend", c: "#5B7BFF" },
  ];
  return (
    <div className="relative">
      <div className="hidden md:flex items-center gap-3 mb-7">
        <span className="h-px flex-1 grad-line opacity-60" />
        <p className="text-[15px] font-semibold"><span className="text-white">moneta</span> <span className="grad-text-bp">system</span></p>
        <span className="h-px flex-1 grad-line opacity-60" />
      </div>
      {/* Outer wrapper — line positioned at center of TCOL */}
      <div className="relative">
        <div className="absolute top-3 bottom-3" style={{
          left: TCOL / 2 - 1, width: 2,
          background: "linear-gradient(180deg,#3B82F6 0%,#6366F1 50%,#A855F7 100%)"
        }} />
        <ul className="space-y-0">
          {items.map((it, idx) => (
            <li key={it.t} className="flex">
              {/* Timeline column — dot centered at 50% = same as line */}
              <div className="relative shrink-0" style={{ width: TCOL }}>
                <span className={"absolute top-3 left-1/2 -translate-x-1/2 timeline-dot " + (idx % 2 === 1 ? "timeline-dot-purple" : "")} />
              </div>
              {/* Content */}
              <div className="flex-1 pl-5 pb-7">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 flex items-center justify-center">
                    {it.src
                      ? <img src={it.src} alt="" width="44" height="44" style={{ objectFit: "contain" }} />
                      : <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke={it.c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 17l6-6 4 4 8-8" /><path d="M14 7h7v7" /></svg>
                    }
                  </div>
                  <div>
                    <h4 className="text-[17px] font-bold text-white mb-1">{it.t}</h4>
                    <p className="text-[14px] text-ink-secondary leading-[1.6]">{it.b}</p>
                  </div>
                </div>
                {idx < items.length - 1 && <hr className="border-line-soft mt-6" />}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ---- Before → After results table ----
function ResultsList() {
  const rows = [
    ["Unknown Margins", "Clear Profitability"], ["Manual Billing", "Automated Invoicing"],
    ["Missed Discounts", "Captured Savings"], ["Reactive Pricing", "Competitive Advantage"],
    ["Operational Bottlenecks", "Scalable Growth"], ["Ad Hoc FinOps", "Managed Service"],
  ];
  return (
    <div>
      <div className="space-y-4">
        {rows.map(([a, b]) => (
          <div key={a} className="grid grid-cols-[1fr_28px_1fr] items-center gap-4 py-3 border-b border-line-soft last:border-b-0">
            <span className="text-[17px] text-ink-secondary">{a}</span>
            <span className="text-ink-muted text-[20px] text-center">→</span>
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

// ---- FinOps split: moneta → Your Managed Service — matches FinOpsMSsGraphic.png ----
function FinopsSplit() {
  const items = [
    { t: "Customer Cost Visibility", b: "Clear cloud budgeting and reporting", c: "#3B82F6" },
    { t: "Rate Reduction", b: "Reduce rates for customers", c: "#A855F7" },
    { t: "Infrastructure Efficiency", b: "Optimize resource usage and reduce waste", c: "#5B7BFF" },
  ];
  return (
    <div className="flex flex-col items-center text-center">
      {/* Moneta cloud icon */}
      <div className="w-14 h-14 rounded-full border border-accent-indigo/40 bg-bg-tertiary grid place-items-center"
        style={{ boxShadow: "0 0 20px rgba(91,123,255,0.3)" }}>
        <img src="assets/moneta-icon.png" alt="moneta" width="34" height="34" style={{ objectFit: "contain", transform: "translateY(-3px)" }} />
      </div>
      {/* Dashed connector */}
      <div style={{ width: 2, height: 36, borderLeft: "2px dashed #22D3EE", opacity: 0.6, margin: "6px 0" }} />
      {/* Your Managed Service box */}
      <div className="btn-grad-border px-8 py-4 w-full max-w-[340px]"
        style={{ boxShadow: "0 0 28px rgba(91,123,255,0.2)" }}>
        <p className="text-[20px] md:text-[23px] font-bold grad-text-bp">Your Managed Service</p>
      </div>
      {/* Dashed connector */}
      <div style={{ width: 2, height: 36, borderLeft: "2px dashed #22D3EE", opacity: 0.6, margin: "6px 0" }} />
      {/* 3 outcome columns */}
      <div className="grid grid-cols-3 gap-4 w-full mt-2">
        {items.map((it) => (
          <div key={it.t} className="text-center">
            <p className="text-[14px] md:text-[15px] font-semibold text-white leading-[1.3]">{it.t}</p>
            <span className="block mx-auto my-2.5 h-[2px] w-10 rounded-full" style={{ background: it.c }} />
            <p className="text-[12.5px] text-ink-secondary leading-[1.55]">{it.b}</p>
          </div>
        ))}
      </div>
      {/* Bottom note */}
      <div className="mt-8 pt-5 border-t border-line-soft w-full">
        <p className="text-[14.5px] text-ink-secondary leading-[1.65]">
          Deliver Cloud FinOps as a repeatable service that strengthens customer relationships and enables{" "}
          <span className="grad-text-bp font-semibold">recurring services revenue.</span>
        </p>
      </div>
    </div>
  );
}

// ---- Core System Layers — bordered card matching Platform.png, centered line ----
function CoreSystemLayers() {
  const TCOL = 24; // timeline column px
  const items = [
    { t: "Pricing Layer", b: "Holds customer-specific pricing models and ensures pricing reflects agreements, cost structures, and strategy.", c: "#3B82F6" },
    { t: "Discount Layer", b: "Applies cloud discount programs across customers and aligns discounts with both cost and pricing.", c: "#22D3EE" },
    { t: "Billing Layer", b: "Generates customer-ready invoices directly from usage, pricing, and discount data — without reconciliation.", c: "#5B7BFF" },
    { t: "Margin Intelligence Layer", b: "Provides visibility into margin performance across every customer, continuously updated as billing and pricing change.", c: "#A855F7" },
  ];
  return (
    <div className="card !rounded-2xl p-6 md:p-8"
      style={{ boxShadow: "0 0 0 1px rgba(91,123,255,0.35), 0 20px 50px -10px rgba(91,123,255,0.28)" }}>
      {/* Header */}
      <div className="mb-6">
        <p className="eyebrow text-[11px] tracking-[0.2em]">Core System Layers</p>
      </div>
      {/* Timeline — line centered in TCOL column */}
      <div className="relative">
        <div className="absolute top-1" style={{
          left: TCOL / 2 - 1, width: 2, height: "calc(100% - 18px)",
          background: "linear-gradient(180deg,#3B82F6 0%,#22D3EE 33%,#5B7BFF 66%,#A855F7 100%)",
          borderRadius: 2
        }} />
        {/* Down arrow at bottom of line */}
        <svg className="absolute" style={{ left: TCOL / 2 - 7, bottom: -4 }} width="14" height="10" viewBox="0 0 14 10" aria-hidden="true">
          <path d="M7 10L0 0h14z" fill="#A855F7" />
        </svg>
        <ul className="space-y-0">
          {items.map((it, idx) => (
            <li key={it.t} className="flex">
              {/* Dot column — centered at 50% = same as line center */}
              <div className="relative shrink-0 pt-1" style={{ width: TCOL }}>
                <span className="absolute top-1 left-1/2 -translate-x-1/2" style={{
                  width: 12, height: 12, borderRadius: "50%", background: it.c, display: "block",
                  boxShadow: `0 0 0 3px ${it.c}28, 0 0 14px ${it.c}70`
                }} />
              </div>
              {/* Content */}
              <div className="flex-1 pl-4 pb-6">
                <h4 className="text-[13px] font-bold tracking-[0.1em] uppercase mb-1.5" style={{ color: it.c }}>{it.t}</h4>
                <p className="text-[13.5px] text-ink-secondary leading-[1.65]">{it.b}</p>
                {idx < items.length - 1 && <hr className="border-line-soft mt-5" />}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ---- System Flow horizontal — no card, matches Platform.png ----
function SystemFlowHorizontal() {
  const steps = [
    { t: "Cloud Data", sub: "(Continuous)", b: "Cloud billing data is continuously ingested across all customer accounts.", c: "#3B82F6" },
    { t: "Pricing & Discounts", sub: "(Aligned)", b: "Pricing models and discount programs are applied automatically and aligned with cost.", c: "#22D3EE" },
    { t: "Invoicing", sub: "(Continuous)", b: "Accurate, customer-ready invoices are generated based on aligned billing and pricing.", c: "#5B7BFF" },
    { t: "Margin Visibility", sub: "(Real-Time)", b: "Margin performance is updated in real time across every customer for complete visibility and control.", c: "#A855F7" },
  ];
  return (
    <div>
      {/* Horizontal flow line */}
      <div className="relative h-6 mb-8">
        <div className="absolute top-1/2 left-0 right-6 h-[2px] -translate-y-1/2 rounded-full"
          style={{ background: "linear-gradient(90deg,#3B82F6,#22D3EE 33%,#5B7BFF 66%,#A855F7 100%)" }} />
        <div className="absolute top-1/2 left-0 right-6 -translate-y-1/2 flex justify-between"
          style={{ paddingLeft: "6%", paddingRight: "6%" }}>
          {steps.map((s, i) => (
            <span key={i} style={{
              width: 14, height: 14, borderRadius: "50%", display: "block", flexShrink: 0,
              background: s.c, boxShadow: `0 0 0 3px ${s.c}28, 0 0 14px ${s.c}80`
            }} />
          ))}
        </div>
        <svg className="absolute right-0 top-1/2 -translate-y-1/2" width="14" height="11" viewBox="0 0 14 11">
          <path d="M14 5.5L0 0v11z" fill="#A855F7" />
        </svg>
      </div>
      {/* Step descriptions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
        {steps.map((s, i) => (
          <div key={s.t} className={i > 0 ? "md:border-l md:border-line-soft md:pl-6" : ""}>
            <p className="text-[14px] font-semibold mb-0.5" style={{ color: s.c }}>{s.t}</p>
            <p className="text-[12px] text-ink-muted mb-2">{s.sub}</p>
            <p className="text-[13px] text-ink-secondary leading-[1.6]">{s.b}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---- Why Moneta system diagram — matches WhyMoneta.png ----
function WhyMonetaDiagram({ onCta }) {
  const outcomes = ["Clear profitability", "Automated invoicing", "Captures savings"];
  const steps = [
    { label: "Billing", c: "#3B82F6" },
    { label: "Pricing", c: "#22D3EE" },
    { label: "Discounts", c: "#5B7BFF" },
    { label: "Margin", c: "#A855F7" },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 items-center">
        {/* OUTCOMES column */}
        <div>
          <p className="eyebrow text-[10px] mb-4" style={{ color: "#22D3EE" }}>Outcomes</p>
          <ul className="space-y-0">
            {outcomes.map((o, i) => (
              <li key={o} className={`flex items-center gap-3 py-4 ${i < outcomes.length - 1 ? "border-b border-line-soft" : ""}`}>
                <svg width="26" height="10" viewBox="0 0 26 10" className="hidden md:block shrink-0" aria-hidden="true">
                  <line x1="0" y1="5" x2="20" y2="5" stroke="#22D3EE" strokeWidth="1.5" strokeDasharray="3 2" />
                  <polygon points="20,2 26,5 20,8" fill="#3B82F6" />
                </svg>
                <span className="text-[15px] text-ink-secondary">{o}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* System box */}
        <div className="card !rounded-2xl p-5 md:p-7"
          style={{ boxShadow: "0 0 0 1px rgba(91,123,255,0.35), 0 20px 50px -10px rgba(91,123,255,0.28)" }}>
          <div className="flex flex-col items-center mb-5">
            <div className="flex items-center gap-1.5 mb-1.5">
              <img src="assets/moneta-icon.png" alt="" width="22" height="22" style={{ objectFit: "contain", transform: "translateY(-2px)" }} />
              <span className="font-bold text-white text-[16px]">moneta</span>
            </div>
            <p className="eyebrow text-[9.5px] tracking-[0.18em] text-ink-muted">The Billing Infrastructure for Cloud Resellers</p>
          </div>
          {/* Flow line */}
          <div className="relative h-4 mb-4">
            <div className="absolute top-1/2 left-0 right-4 h-px -translate-y-1/2"
              style={{ background: "linear-gradient(90deg,#3B82F6,#22D3EE 33%,#5B7BFF 66%,#A855F7 100%)" }} />
            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-4 flex justify-between"
              style={{ paddingLeft: "6.25%", paddingRight: "6.25%" }}>
              {steps.map((s) => (
                <span key={s.label} style={{
                  width: 10, height: 10, borderRadius: "50%", background: s.c, display: "block",
                  boxShadow: `0 0 0 2px ${s.c}28, 0 0 8px ${s.c}80`
                }} />
              ))}
            </div>
            <svg className="absolute right-0 top-1/2 -translate-y-1/2" width="10" height="8" viewBox="0 0 10 8">
              <path d="M10 4L0 0v8z" fill="#A855F7" />
            </svg>
          </div>
          <div className="grid grid-cols-4 gap-2 mb-4">
            {steps.map((s) => (
              <p key={s.label} className="text-center text-[13px] font-semibold" style={{ color: s.c }}>{s.label}</p>
            ))}
          </div>
          <hr className="border-line-soft mb-4" />
          <p className="text-center text-[13.5px] text-ink-secondary leading-[1.6]">
            Continuously aligning billing, pricing, discounts, and margin.
          </p>
        </div>
      </div>
      {/* CTA */}
      <div className="mt-8 pt-5 border-t border-line-soft">
        <button onClick={onCta} className="btn-grad-border inline-flex items-center gap-4 px-6 py-4">
          <span className="grad-text-bp"><ArrowRight size={18} /></span>
          <span className="font-semibold text-white text-[15px]">Review Your Billing, Pricing, and Margins</span>
        </button>
      </div>
    </div>
  );
}

Object.assign(window, {
  Icons, PngIcon, OperatingSystemDiagram, TrustBar, SolutionTimeline, ResultsList,
  FinopsSplit, CoreSystemLayers, SystemFlowHorizontal, WhyMonetaDiagram,
});
