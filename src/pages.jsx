// Page bodies — Home, Platform, FinOps Services, Why moneta

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            {tagline && <Eyebrow className="mb-6">{tagline}</Eyebrow>}
            <h1 className="text-hero text-balance">{renderTitle()}</h1>
            {description && (
              <p className="mt-7 text-[18px] md:text-[19px] leading-[1.6] text-ink-secondary max-w-[560px]">{description}</p>
            )}
            <div className="mt-9">
              <Button variant="primary" onClick={onCta} className="!px-7 !py-4 !text-[15px]">
                {ctaLabel} <ArrowRight />
              </Button>
            </div>
          </div>
          <div className="lg:col-span-7">{right}</div>
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

// ---------- HOME ----------
function HomePage({ onDemoClick }) {
  return (
    <React.Fragment>
      <HeroSplit
        tagline="Built for AWS & Azure Resellers"
        title="Eliminate Margin Loss in Cloud Reseller Billing"
        accentWord="Cloud Reseller Billing"
        description="The operating system for cloud reseller billing — aligning cost, pricing, and discounts across every customer."
        ctaLabel="See Your Margin Gaps"
        onCta={onDemoClick}
        right={
          <div className="w-full flex items-center justify-center">
            <img
              src="graphics/examples/HeroGraphic.png"
              alt="moneta operating system diagram"
              className="w-full h-auto"
              style={{ display: "block", marginTop: "-24px" }}
            />
          </div>
        }
      />

      {/* Trust bar */}
      <section className="container-x relative -mt-2 md:-mt-4 mb-10 md:mb-14">
        <TrustBar />
      </section>

      {/* PROBLEM */}
      <SectionShell className="border-t border-line-soft" dotsRight style={{ background: "#0C0F17" }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-stretch">
          <div className="lg:col-span-5 flex flex-col">
            <Eyebrow className="mb-5">The Problem</Eyebrow>
            <h2 className="text-h1 text-balance">
              Margin Loss Is Built Into <span className="grad-text-bp">Cloud Reseller Billing</span>
            </h2>
            <span className="block mt-5 h-[3px] w-32 grad-line rounded-full" />
            <div className="mt-7 flex items-center gap-2 text-accent-cyan text-[12px] font-semibold tracking-[0.18em] uppercase">
              <ArrowRight size={14} /> Why It Happens
            </div>
            <p className="mt-3 text-[15px] leading-[1.6] text-ink-secondary">
              Resellers operate in complex pricing and discount environments — but billing, pricing, and cost rarely align.
            </p>
            <p className="mt-2 text-[15px] leading-[1.6] text-white font-semibold">Hidden margin loss is the result.</p>
            <hr className="my-5 border-line-soft" />
            <p className="text-[15px] leading-[1.6] text-ink-secondary">
              Without the right system, billing is manual and discounts are inconsistent.
            </p>
            <p className="mt-2 text-[15px] leading-[1.6] text-white font-semibold">Margins lack visibility and control.</p>
          </div>

          {/* Problem cards with PNG icons */}
          <div className="lg:col-span-7 flex flex-col gap-3">
            {PROBLEM_ROWS.map((row) => (
              <div key={row.t} className="card flex items-center gap-5 px-5 py-3 hover:border-line-hover flex-1">
                <div className="w-12 h-12 grid place-items-center shrink-0">
                  <img src={row.src} alt="" width="40" height="40" style={{ objectFit: "contain" }} />
                </div>
                <span className="block w-px self-stretch bg-line-soft" />
                <p className="text-[15px] md:text-[16px] text-ink-primary leading-[1.5]">{row.t}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom line callout — ProblemBLicon.png */}
        <div className="mt-6 card !rounded-2xl px-7 py-5 md:px-8 md:py-5" style={{ borderColor: "rgba(34,211,238,0.35)" }}>
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-xl grid place-items-center shrink-0 border border-line bg-bg-tertiary/40">
              <img src="graphics/icons/ProblemBLicon.png" alt="" width="36" height="36" style={{ objectFit: "contain" }} />
            </div>
            <div className="border-l border-line-soft pl-6">
              <p className="eyebrow text-[11px] mb-1.5" style={{ color: "#22D3EE" }}>The Bottom Line</p>
              <p className="text-[19px] md:text-[23px] font-semibold leading-[1.25] text-balance">
                Margin loss <span style={{ color: "#22D3EE" }}>compounds</span> across every customer.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* SOLUTION */}
      <SectionShell className="border-t border-line-soft" dotsRight style={{ background: "#101420" }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-stretch">
          <div className="lg:col-span-5 flex flex-col">
            <Eyebrow className="mb-5">The Solution</Eyebrow>
            <h2 className="text-h1 text-balance">
              Billing, Pricing, and Margin Control in <span className="grad-text-bp">One System</span>
            </h2>
            <span className="block mt-5 h-[3px] w-40 grad-line rounded-full" />
            <p className="mt-7 text-[16px] leading-[1.65] text-ink-secondary max-w-[460px]">
              <span className="grad-text-bp font-semibold">moneta</span> aligns billing, pricing, and discounts in a single system —
              so invoices are accurate, discounts are applied correctly, and margins are fully visible.
            </p>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-center lg:pt-14">
            <SolutionTimeline />
          </div>
        </div>

        {/* Bottom callout — SolutionIcon.png */}
        <div className="mt-6 card !rounded-2xl px-7 py-5 md:px-8 md:py-5" style={{ borderColor: "rgba(168,85,247,0.4)" }}>
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-xl grid place-items-center shrink-0">
              <img src="graphics/icons/SolutionIcon.png" alt="" width="44" height="44" style={{ objectFit: "contain" }} />
            </div>
            <div className="border-l border-line-soft pl-6">
              <p className="text-[19px] md:text-[22px] font-semibold leading-[1.3] text-balance">
                One system. Everything <span style={{ color: "#22D3EE" }}>aligned</span>. Margins{" "}
                <span style={{ color: "#A855F7" }}>controlled</span> at scale.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* RESULTS */}
      <SectionShell className="border-t border-line-soft" dotsLeft style={{ background: "#141828" }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Eyebrow className="mb-7">Results</Eyebrow>
            <h2 className="text-h1 text-balance">Real Outcomes for Cloud Resellers</h2>
            <span className="block mt-6 h-[3px] w-40 grad-line rounded-full" />
            <p className="mt-9 text-[16.5px] leading-[1.7] text-ink-secondary max-w-[420px]">
              moneta turns billing complexity into clear margins, automated invoicing,
              and scalable growth across every customer account.
            </p>
            <div className="mt-9">
              <ReviewCTA onClick={onDemoClick} />
            </div>
          </div>
          <div className="lg:col-span-7 lg:pt-4">
            <ResultsList />
          </div>
        </div>
      </SectionShell>

      {/* FINOPS PREVIEW */}
      <SectionShell className="border-t border-line-soft" dotsLeft style={{ background: "#101420" }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <Eyebrow className="mb-7">FinOps Managed Services</Eyebrow>
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
              <ReviewCTA onClick={onDemoClick} />
            </div>
          </div>
          <div className="lg:col-span-7 flex items-center justify-center">
            <div className="w-full max-w-[480px]">
              <FinopsSplit />
            </div>
          </div>
        </div>
      </SectionShell>

      <FinalCTA
        title="Stop discovering margin at quarter-end."
        description="Bring your own billing structure. We'll show you what moneta would do with it — in 45 minutes."
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
              <Eyebrow className="mb-7">Platform</Eyebrow>
              <h1 className="text-hero text-balance">
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
      <SectionShell className="border-t border-line-soft" style={{ background: "#0C0F17" }}>
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
      <SectionShell className="border-t border-line-soft" style={{ background: "#080A10" }} dotsRight>
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
        <div className="mt-14 p-7 md:p-8 rounded-2xl border border-line-soft bg-bg-primary/40">
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

function FinOpsDiagram() {
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

      <div className="mt-8 flex items-center justify-center gap-2">
        <span className="grad-text-bp text-[17px] font-semibold">→</span>
        <p className="text-[15.5px] text-white">
          <span className="font-semibold">Make FinOps Possible at Scale.</span>{" "}
          <span className="text-ink-secondary">moneta makes it simple.</span>
        </p>
      </div>
    </div>
  );
}

// ---------- FINOPS ----------
function FinOpsPage({ onDemoClick }) {
  return (
    <React.Fragment>
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

          <FinOpsDiagram />
        </div>
      </section>

      <SectionShell className="border-t border-line-soft" style={{ background: "#0C0F17" }}>
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
          <div className="grid grid-cols-[1fr_40px_1fr] px-6 py-3 border-b border-line-soft" style={{ background: "rgba(255,255,255,0.03)" }}>
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
              style={{ background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)" }}>
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

      <SectionShell className="border-t border-line-soft" style={{ background: "#080A10" }}>
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
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid #1A2030", borderLeft: `3px solid ${f.c}` }}>
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
      <SectionShell className="border-t border-line-soft" style={{ background: "#0C0F17" }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4">
            <Eyebrow className="mb-5">The Difference</Eyebrow>
            <h2 className="text-h2 text-balance">
              What makes moneta a <span className="grad-text-bp">system</span>, not a tool.
            </h2>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-3 lg:pt-10">
            {[
              { t: "Cost and price share one ledger", b: "Vendor invoices and customer invoices reconcile inside the system, not in spreadsheets.", c: "#3B82F6" },
              { t: "Discounts are first-class",       b: "EDP, PPA, RI/SP, and custom commitments are modeled — not patched in at month-end.", c: "#22D3EE" },
              { t: "Per-customer margin is live",     b: "Margin is a real-time number, visible while it can still be acted on.", c: "#A855F7" },
              { t: "Built for multi-customer scale",  b: "Hundreds of customers, dozens of contracts, one operating ledger.", c: "#5B7BFF" },
            ].map((f) => (
              <div key={f.t} className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid #1A2030", borderLeft: `3px solid ${f.c}` }}>
                <h3 className="text-[15px] font-semibold mb-2" style={{ color: f.c }}>{f.t}</h3>
                <p className="text-[13.5px] text-ink-secondary leading-[1.6]">{f.b}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* The Reality */}
      <SectionShell className="border-t border-line-soft overflow-hidden" style={{ background: "#0A0D14" }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Left — large heading */}
          <div className="lg:col-span-5">
            <Eyebrow className="mb-6">The Reality</Eyebrow>
            <h2 className="text-hero text-balance leading-[1.05]">
              Most reseller stacks are held together <span className="grad-text-bp">by people.</span>
            </h2>
          </div>

          {/* Right — body text + tool chaos diagram */}
          <div className="lg:col-span-7 relative">
            {/* Vertical divider */}
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-px" style={{ background: "linear-gradient(180deg, transparent, rgba(91,123,255,0.3) 30%, rgba(91,123,255,0.3) 70%, transparent)" }} />
            <div className="lg:pl-10 space-y-5 text-[17px] leading-[1.75] text-ink-secondary">
              <p>
                Talk to any reseller's finance team and a pattern shows up: monthly close runs on tribal knowledge,
                custom scripts, and shared spreadsheets. It works — until it doesn't, and the cost is invisible
                until margin reports are reconciled at quarter-end.
              </p>
              <p>moneta replaces that operational debt with a system that owns the cost-to-invoice loop end to end.</p>
            </div>

            {/* Tool chaos diagram — icon tiles connected by dashed lines */}
            <div className="lg:pl-10 mt-10 relative" style={{ height: 140 }} aria-hidden="true">
              {/* SVG lines only — positioned absolutely behind the tiles */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 560 140" preserveAspectRatio="none" fill="none">
                <line x1="100" y1="70"  x2="196" y2="70"  stroke="rgba(91,123,255,0.3)" strokeWidth="1" strokeDasharray="4 3" />
                <line x1="196" y1="70"  x2="316" y2="28"  stroke="rgba(91,123,255,0.3)" strokeWidth="1" strokeDasharray="4 3" />
                <line x1="196" y1="70"  x2="316" y2="110" stroke="rgba(91,123,255,0.3)" strokeWidth="1" strokeDasharray="4 3" />
                <line x1="316" y1="28"  x2="448" y2="70"  stroke="rgba(91,123,255,0.3)" strokeWidth="1" strokeDasharray="4 3" />
                <line x1="316" y1="110" x2="448" y2="70"  stroke="rgba(91,123,255,0.3)" strokeWidth="1" strokeDasharray="4 3" />
                {[[196,70],[316,28],[316,110]].map(([x,y]) => (
                  <circle key={`${x}-${y}`} cx={x} cy={y} r="3" fill="rgba(91,123,255,0.45)" />
                ))}
              </svg>
              {/* Icon tiles — positioned absolutely */}
              {[
                { label: "Spreadsheet", icon: "sheet",   left: "8%",  top: 50 },
                { label: "Custom Script",icon: "settings",left: "30%", top: 46 },
                { label: "Billing Tool", icon: "invoice", left: "52%", top: 4  },
                { label: "Data Export",  icon: "filter",  left: "52%", top: 84 },
                { label: "Reporting",    icon: "bars",    left: "75%", top: 46 },
              ].map(({ label, icon, left, top }) => (
                <div key={label} className="absolute flex flex-col items-center gap-1" style={{ left, top }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(91,123,255,0.22)" }}>
                    {Icons[icon]("rgba(180,186,200,0.5)")}
                  </div>
                  <span className="text-[9px] text-ink-muted whitespace-nowrap">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </SectionShell>

      {/* Why Cloud Resellers Choose moneta — WhyMonetaDiagram */}
      <SectionShell className="border-t border-line-soft" dotsRight style={{ background: "#0C0F17" }}>
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
      <SectionShell className="border-t border-line-soft" style={{ background: "#080A10" }}>
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
              <div className="icon-tile mb-5">{Icons[f.i](f.c)}</div>
              <h3 className="text-[18px] font-semibold mb-2" style={{ color: f.c }}>{f.t}</h3>
              <p className="text-[14.5px] text-ink-secondary leading-[1.65]">{f.b}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <FinalCTA
        title="See why resellers replace stitched workflows with moneta."
        description="Bring your own billing structure. We'll show you what moneta would do with it."
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

          <FinOpsDiagram />
        </div>
      </section>

      <SectionShell className="border-t border-line-soft" style={{ background: "#0C0F17" }}>
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
          <div className="grid grid-cols-[1fr_40px_1fr] px-6 py-3 border-b border-line-soft" style={{ background: "rgba(255,255,255,0.03)" }}>
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
              style={{ background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)" }}>
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

      <SectionShell className="border-t border-line-soft" style={{ background: "#080A10" }}>
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
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid #1A2030", borderLeft: `3px solid ${f.c}` }}>
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
