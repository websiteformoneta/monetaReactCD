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
    <section className="relative pt-[110px] md:pt-[140px] pb-12 md:pb-16 overflow-hidden">
      <div className="glow-hero" />
      <div className="dot-corner" />
      <div className="container-x relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6">
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
          <div className="lg:col-span-6">{right}</div>
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
              style={{ maxWidth: 580, display: "block" }}
            />
          </div>
        }
      />

      {/* Trust bar */}
      <section className="container-x relative -mt-2 md:-mt-4">
        <TrustBar />
      </section>

      {/* PROBLEM */}
      <SectionShell dotsRight>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Eyebrow className="mb-7">The Problem</Eyebrow>
            <h2 className="text-h1 text-balance">
              Margin Loss Is Built Into <span className="grad-text-bp">Cloud Reseller Billing</span>
            </h2>
            <span className="block mt-6 h-[3px] w-32 grad-line rounded-full" />
            <div className="mt-10 flex items-center gap-2 text-accent-cyan text-[12px] font-semibold tracking-[0.18em] uppercase">
              <ArrowRight size={14} /> Why It Happens
            </div>
            <p className="mt-4 text-[16px] leading-[1.7] text-ink-secondary">
              Resellers operate in complex pricing and discount environments — but billing, pricing, and cost rarely align.
            </p>
            <p className="mt-3 text-[16px] leading-[1.7] text-white font-semibold">Hidden margin loss is the result.</p>
            <hr className="my-7 border-line-soft" />
            <p className="text-[16px] leading-[1.7] text-ink-secondary">
              Without the right system, billing is manual and discounts are inconsistent.
            </p>
            <p className="mt-3 text-[16px] leading-[1.7] text-white font-semibold">Margins lack visibility and control.</p>
          </div>

          {/* Problem cards with PNG icons */}
          <div className="lg:col-span-7 space-y-3">
            {PROBLEM_ROWS.map((row) => (
              <div key={row.t} className="card flex items-center gap-5 px-5 py-4 hover:border-line-hover">
                <div className="w-14 h-14 grid place-items-center shrink-0">
                  <img src={row.src} alt="" width="44" height="44" style={{ objectFit: "contain" }} />
                </div>
                <span className="block w-px self-stretch bg-line-soft" />
                <p className="text-[15px] md:text-[16px] text-ink-primary leading-[1.5]">{row.t}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom line callout — ProblemBLicon.png */}
        <div className="mt-14 card !rounded-2xl px-7 py-7 md:px-10 md:py-8" style={{ borderColor: "rgba(34,211,238,0.35)" }}>
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-xl grid place-items-center shrink-0 border border-line bg-bg-tertiary/40">
              <img src="graphics/icons/ProblemBLicon.png" alt="" width="40" height="40" style={{ objectFit: "contain" }} />
            </div>
            <div className="border-l border-line-soft pl-6">
              <p className="eyebrow text-[11px] mb-2" style={{ color: "#22D3EE" }}>The Bottom Line</p>
              <p className="text-[20px] md:text-[26px] font-semibold leading-[1.25] text-balance">
                Margin loss <span style={{ color: "#22D3EE" }}>compounds</span> across every customer.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* SOLUTION */}
      <SectionShell className="bg-bg-secondary border-t border-line-soft" dotsRight>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Eyebrow className="mb-7">The Solution</Eyebrow>
            <h2 className="text-h1 text-balance">
              Billing, Pricing, and Margin Control in <span className="grad-text-bp">One System</span>
            </h2>
            <span className="block mt-6 h-[3px] w-40 grad-line rounded-full" />
            <p className="mt-9 text-[16.5px] leading-[1.7] text-ink-secondary max-w-[460px]">
              <span className="grad-text-bp font-semibold">moneta</span> aligns billing, pricing, and discounts in a single system —
              so invoices are accurate, discounts are applied correctly, and margins are fully visible.
            </p>
          </div>
          <div className="lg:col-span-7">
            <SolutionTimeline />
          </div>
        </div>

        {/* Bottom callout — SolutionIcon.png */}
        <div className="mt-14 card !rounded-2xl px-7 py-7 md:px-10 md:py-8" style={{ borderColor: "rgba(168,85,247,0.4)" }}>
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-xl grid place-items-center shrink-0">
              <img src="graphics/icons/SolutionIcon.png" alt="" width="50" height="50" style={{ objectFit: "contain" }} />
            </div>
            <div className="border-l border-line-soft pl-6">
              <p className="text-[20px] md:text-[24px] font-semibold leading-[1.3] text-balance">
                One system. Everything <span style={{ color: "#22D3EE" }}>aligned</span>. Margins{" "}
                <span style={{ color: "#A855F7" }}>controlled</span> at scale.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* RESULTS */}
      <SectionShell dotsLeft>
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
          <div className="lg:col-span-7">
            <ResultsList />
          </div>
        </div>
      </SectionShell>

      {/* FINOPS PREVIEW */}
      <SectionShell className="bg-bg-secondary border-t border-line-soft" dotsLeft>
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

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

              {/* "A System Built for Cloud Resale Operations" — matches Platform.png left column */}
              <div className="mt-10 pt-8 border-t border-line-soft">
                <Eyebrow className="mb-5">A System Built for Cloud Resale Operations</Eyebrow>
                <div className="border-l-2 border-line pl-5 space-y-4 text-[15px] leading-[1.75] text-ink-secondary">
                  <p>Cloud resellers operate across complex billing, pricing, and margin environments.</p>
                  <p>moneta brings these into a single system purpose-built for AWS and Azure resale models.</p>
                  <p>Billing, pricing, and profitability remain aligned across every customer account — without spreadsheets or manual reconciliation.</p>
                </div>
              </div>
            </div>

            {/* RIGHT — CoreSystemLayers */}
            <div className="lg:col-span-6">
              <CoreSystemLayers />
            </div>
          </div>
        </div>
      </section>

      {/* System Flow */}
      <SectionShell className="bg-bg-secondary border-t border-line-soft" dotsRight>
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

          {/* Diagram */}
          <div className="mt-14 max-w-[1040px] mx-auto">
            <div className="flex items-center justify-center gap-2 mb-1">
              <MonetaMark size={26} />
              <span className="text-[19px] font-semibold tracking-tight text-white">moneta</span>
            </div>
            <p className="eyebrow text-ink-muted mb-6">The Billing Infrastructure</p>

            <div className="flex items-center relative">

              {/* Left: pain points — each row's vertical CENTER aligns to a connector stub (top/middle/bottom of the 200px column) */}
              <div className="shrink-0 w-[160px] text-left relative" style={{ height: 200 }}>
                <p className="absolute left-0 text-[12px] leading-tight whitespace-nowrap" style={{ top: -40 }}>
                  <span className="text-white font-semibold">Today </span>
                  <span className="font-semibold" style={{ color: "#22D3EE" }}>Hard to Provide FinOps</span>
                </p>
                {/* faint dividers between rows (at 25% and 75% — midpoints between row centers) */}
                <div className="absolute left-0 right-2" style={{ top: "25%", height: 1, background: "rgba(180, 186, 200, 0.12)" }} />
                <div className="absolute left-0 right-2" style={{ top: "75%", height: 1, background: "rgba(180, 186, 200, 0.12)" }} />
                {[
                  { label: "One-off analysis for each customer", y: 6 },
                  { label: "Manual process and reporting",       y: 100 },
                  { label: "Difficult to scale across customers", y: 194 },
                ].map(({ label, y }) => (
                  <p
                    key={label}
                    className="absolute left-0 right-0 text-[12px] text-ink-secondary leading-[1.35]"
                    style={{ top: y, transform: "translateY(-50%)" }}
                  >
                    {label}
                  </p>
                ))}
              </div>

              {/* Connector bracket — SVG so stub length is tunable; 3 dashed arrows on the left meeting at a junction dot, one solid arrow on the right into the box */}
              <svg width="80" height="200" viewBox="0 0 80 200" fill="none" className="shrink-0" aria-hidden="true">
                {/* vertical spine (right side of bracket) */}
                <line x1="62" y1="6" x2="62" y2="194" stroke="#22D3EE" strokeWidth="1.5" strokeDasharray="3 4" />
                {/* top stub (long, with left-pointing arrowhead) */}
                <line x1="62" y1="6" x2="14" y2="6" stroke="#22D3EE" strokeWidth="1.5" strokeDasharray="3 4" />
                <polyline points="14,2 8,6 14,10" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
                {/* middle stub */}
                <line x1="62" y1="100" x2="14" y2="100" stroke="#22D3EE" strokeWidth="1.5" strokeDasharray="3 4" />
                <polyline points="14,96 8,100 14,104" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
                {/* bottom stub */}
                <line x1="62" y1="194" x2="14" y2="194" stroke="#22D3EE" strokeWidth="1.5" strokeDasharray="3 4" />
                <polyline points="14,190 8,194 14,198" fill="none" stroke="#3B82F6" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
                {/* junction dot on the spine, at the middle */}
                <circle cx="62" cy="100" r="3.5" fill="#3B82F6" />
                {/* right stub into the pipeline box */}
                <line x1="62" y1="100" x2="78" y2="100" stroke="#22D3EE" strokeWidth="1.5" strokeDasharray="3 4" />
              </svg>

              {/* Pipeline box — with glow */}
              <div className="flex-1 ml-1 rounded-xl flex flex-col min-h-[180px]"
                style={{ border: "1px solid #1A2030", background: "#0B0E17", boxShadow: "0 0 40px 8px rgba(91,123,255,0.12), 0 0 80px 16px rgba(168,85,247,0.08)" }}>
                <div className="px-8 pt-6 pb-2 relative">
                  {/* gradient timeline line — extends past the right edge of the box to meet the external arrow seamlessly */}
                  <div className="absolute left-8" style={{ top: "calc(1.5rem + 5px)", right: -2, height: 1.5, background: "linear-gradient(90deg, #3B82F6, #22D3EE, #6366F1, #A855F7)" }} />
                  <div className="flex items-start justify-between relative z-10">
                    {[
                      { label: "Billing",   color: "#3B82F6" },
                      { label: "Pricing",   color: "#22D3EE" },
                      { label: "Discounts", color: "#6366F1" },
                      { label: "Margin",    color: "#A855F7" },
                    ].map(({ label, color }) => (
                      <div key={label} className="flex flex-col items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ background: color, boxShadow: `0 0 8px ${color}cc` }} />
                        <span className="text-[13px] font-medium text-white">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center px-8 pb-6 pt-2">
                  <p className="text-center text-[13px] text-ink-secondary leading-[1.55]">
                    Continuously aligning billing, pricing,<br />discounts, and margin.
                  </p>
                </div>
              </div>

              {/* Right cluster: arrow flush against box at timeline level + outcome text vertically centered on arrow */}
              <div className="shrink-0 self-start flex items-start" style={{ paddingTop: 35, marginLeft: -4 }}>
                <svg width="56" height="12" viewBox="0 0 56 12" fill="none" className="shrink-0 block" preserveAspectRatio="none" style={{ display: "block" }}>
                  <line x1="0" y1="6" x2="50" y2="6" stroke="#A855F7" strokeWidth="1.5" />
                  <polyline points="45,2 51,6 45,10" fill="none" stroke="#A855F7" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" />
                </svg>
                <p className="ml-2 text-[13px] font-semibold leading-[1.5] text-white text-left" style={{ marginTop: -23, width: 120 }}>
                  Continuous<br />FinOps across<br /><span style={{ color: "#22D3EE" }}>every customer.</span>
                </p>
              </div>
            </div>

            {/* Bottom CTA line */}
            <div className="mt-10 flex items-center justify-center gap-2">
              <span className="grad-text-bp text-[17px] font-semibold">→</span>
              <p className="text-[16px] text-white">
                <span className="font-semibold">Make FinOps Possible at Scale.</span>{" "}
                <span className="text-ink-secondary">moneta makes it simple.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionShell>
        <div className="text-center max-w-[820px] mx-auto">
          <h2 className="text-h1 text-balance">
            FinOps <span className="grad-text-bp">cannot</span> scale without infrastructure.
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-ink-secondary">
            Without system-level alignment, FinOps depends on disconnected tools, manual reconciliation, and one-time analysis.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-y-6 gap-x-10">
          <div className="md:col-start-1">
            <p className="eyebrow text-ink-muted">FinOps Without Infrastructure</p>
          </div>
          <div></div>
          <div>
            <p className="eyebrow grad-text-bp">FinOps With moneta</p>
          </div>
          {[
            ["One-off cost analysis", "Continuous FinOps delivery across every customer account", "#3B82F6"],
            ["Cost, pricing, and billing disconnected", "A single system of record across cost, pricing, and invoicing", "#5B7BFF"],
            ["Manual, reactive optimization", "Continuous, system-driven optimization across every customer", "#6366F1"],
            ["One-time engagement", "Recurring FinOps service delivered at scale", "#A855F7"],
          ].map(([a, b, c]) => (
            <React.Fragment key={a}>
              <div className="md:col-start-1 self-center">
                <p className="text-[16.5px] text-ink-secondary leading-[1.5]">{a}</p>
              </div>
              <div className="hidden md:flex items-center justify-center text-ink-muted text-[20px]">→</div>
              <div className="self-center">
                <p className="text-[16.5px] font-semibold leading-[1.45]" style={{ color: c }}>{b}</p>
              </div>
              <div className="md:col-span-3 h-px bg-line-soft" />
            </React.Fragment>
          ))}
        </div>

        <p className="mt-10 text-[16px] leading-[1.7] text-ink-secondary max-w-[860px]">
          When billing, pricing, and discount data operate within a single system, FinOps no longer depends on
          manual reconciliation or disconnected tools.
        </p>
      </SectionShell>

      <SectionShell className="bg-bg-secondary border-t border-line-soft">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Eyebrow className="mb-7">Why moneta</Eyebrow>
            <h2 className="text-h1 text-balance">
              Built for <span className="grad-text-bp">AWS and Azure</span> resellers operating across multiple customers,
              pricing models, and discount programs.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:self-center space-y-3">
            {[
              { t: "Customer review reporting", b: "Branded, repeatable cost & savings reviews built from real billing data.", c: "#3B82F6" },
              { t: "Optimization playbooks", b: "Rightsizing, commitment planning, and anomaly detection out of the box.", c: "#22D3EE" },
              { t: "Discount earn-back tracking", b: "Show customers exactly what their commitments earned this quarter.", c: "#A855F7" },
              { t: "One source of truth", b: "Same data behind invoices powers FinOps insights — no parallel pipeline.", c: "#5B7BFF" },
            ].map((f, i) => (
              <div key={f.t} className="card flex items-start gap-5 px-5 py-4">
                <span className="font-semibold text-[12px] mt-0.5" style={{ color: f.c }}>0{i + 1}</span>
                <span className="block w-px self-stretch bg-line-soft" />
                <div>
                  <h4 className="text-[16px] font-semibold mb-1">{f.t}</h4>
                  <p className="text-[14.5px] text-ink-secondary leading-[1.6]">{f.b}</p>
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
      <section className="relative pt-[110px] md:pt-[140px] pb-12 overflow-hidden">
        <div className="glow-hero" />
        <div className="dot-corner-left" />
        <div className="container-x relative">
          <Eyebrow className="mb-7">Why moneta</Eyebrow>
          <h1 className="text-hero max-w-[1100px] text-balance">
            Why Existing Solutions Fail <span className="grad-text-bp">Cloud Reseller Billing</span>
          </h1>
          <p className="mt-7 text-[18px] md:text-[19px] leading-[1.6] text-ink-secondary max-w-[700px]">
            moneta is the billing infrastructure built for how AWS and Azure resellers actually operate —
            multi-customer, multi-vendor, and continuously reconciled.
          </p>
          <div className="mt-8">
            <Button variant="primary" onClick={onDemoClick} className="!px-7 !py-4 !text-[15px]">
              Book a Demo <ArrowRight />
            </Button>
          </div>
        </div>
      </section>

      {/* The Difference */}
      <SectionShell>
        <div className="mb-10 max-w-[760px]">
          <Eyebrow className="mb-6">The Difference</Eyebrow>
          <h2 className="text-h1 text-balance">
            What makes moneta a <span className="grad-text-bp">system</span>, not a tool.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { t: "Cost and price share one ledger", b: "Vendor invoices and customer invoices reconcile inside the system, not in spreadsheets.", c: "#3B82F6", i: "layers" },
            { t: "Discounts are first-class", b: "EDP, PPA, RI/SP, and custom commitments are modeled — not patched in at month-end.", c: "#22D3EE", i: "percent" },
            { t: "Per-customer margin is live", b: "Margin is a real-time number, visible while it can still be acted on.", c: "#A855F7", i: "bars" },
            { t: "Built for multi-customer scale", b: "Hundreds of customers, dozens of contracts, one operating ledger.", c: "#5B7BFF", i: "scale" },
          ].map((f) => (
            <div key={f.t} className="card p-7">
              <div className="icon-tile mb-5">{Icons[f.i](f.c)}</div>
              <h3 className="text-[18px] font-semibold mb-2" style={{ color: f.c }}>{f.t}</h3>
              <p className="text-[14.5px] text-ink-secondary leading-[1.65]">{f.b}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* The Reality */}
      <SectionShell className="bg-bg-secondary border-t border-line-soft">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Eyebrow className="mb-7">The Reality</Eyebrow>
            <h2 className="text-h1 text-balance">
              Most reseller stacks are held together <span className="grad-text-bp">by people.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-5 text-[16.5px] leading-[1.7] text-ink-secondary">
            <p>
              Talk to any reseller's finance team and a pattern shows up: monthly close runs on tribal knowledge,
              custom scripts, and shared spreadsheets. It works — until it doesn't, and the cost is invisible
              until margin reports are reconciled at quarter-end.
            </p>
            <p>moneta replaces that operational debt with a system that owns the cost-to-invoice loop end to end.</p>
          </div>
        </div>
      </SectionShell>

      {/* Why Cloud Resellers Choose moneta — WhyMonetaDiagram */}
      <SectionShell dotsRight>
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
      <SectionShell className="bg-bg-secondary border-t border-line-soft">
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

          {/* Diagram */}
          <div className="mt-14 max-w-[1040px] mx-auto">
            <div className="flex items-center justify-center gap-2 mb-1">
              <MonetaMark size={26} />
              <span className="text-[19px] font-semibold tracking-tight text-white">moneta</span>
            </div>
            <p className="eyebrow text-ink-muted mb-6">The Billing Infrastructure</p>

            <div className="flex items-center">
              {/* Left: bracket + pain points */}
              <div className="shrink-0 w-[200px] text-left">
                <p className="text-[11px] mb-4 leading-tight">
                  <span className="text-white font-semibold">Today </span>
                  <span className="font-semibold" style={{ color: "#F59E0B" }}>Hard to Provide FinOps</span>
                </p>
                <div className="flex items-stretch gap-0">
                  <div className="flex flex-col justify-between gap-4 flex-1">
                    {["One-off analysis for each customer", "Manual process and reporting", "Difficult to scale across customers"].map((label) => (
                      <p key={label} className="text-[12px] text-ink-secondary leading-[1.35]">{label}</p>
                    ))}
                  </div>
                  <svg width="36" height="110" viewBox="0 0 36 110" fill="none" className="shrink-0 ml-2" style={{ overflow: "visible" }}>
                    <line x1="8" y1="10" x2="8" y2="100" stroke="#6B7385" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="8" y1="10"  x2="28" y2="10"  stroke="#6B7385" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="8" y1="55"  x2="28" y2="55"  stroke="#6B7385" strokeWidth="1.5" strokeDasharray="3 3" />
                    <line x1="8" y1="100" x2="28" y2="100" stroke="#6B7385" strokeWidth="1.5" strokeDasharray="3 3" />
                    <polyline points="24,6 28,10 24,14"    fill="none" stroke="#6B7385" strokeWidth="1.5" strokeLinejoin="round" />
                    <polyline points="24,51 28,55 24,59"   fill="none" stroke="#6B7385" strokeWidth="1.5" strokeLinejoin="round" />
                    <polyline points="24,96 28,100 24,104" fill="none" stroke="#6B7385" strokeWidth="1.5" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Pipeline box — with glow */}
              <div className="flex-1 mx-3 rounded-xl flex flex-col min-h-[180px]"
                style={{ border: "1px solid #1A2030", background: "#0B0E17", boxShadow: "0 0 40px 8px rgba(91,123,255,0.12), 0 0 80px 16px rgba(168,85,247,0.08)" }}>
                <div className="px-8 pt-6 pb-2 relative">
                  <div className="absolute left-8 right-8" style={{ top: "calc(1.5rem + 5px)", height: 1, background: "linear-gradient(90deg, #3B82F6, #22D3EE, #6366F1, #A855F7)" }} />
                  <div className="flex items-start justify-between relative z-10">
                    {[
                      { label: "Billing",   color: "#3B82F6" },
                      { label: "Pricing",   color: "#22D3EE" },
                      { label: "Discounts", color: "#6366F1" },
                      { label: "Margin",    color: "#A855F7" },
                    ].map(({ label, color }) => (
                      <div key={label} className="flex flex-col items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ background: color, boxShadow: `0 0 8px ${color}cc` }} />
                        <span className="text-[13px] font-medium text-white">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 flex items-center justify-center px-8 pb-6 pt-2">
                  <p className="text-center text-[13px] text-ink-secondary leading-[1.55]">
                    Continuously aligning billing, pricing,<br />discounts, and margin.
                  </p>
                </div>
              </div>

              {/* Right connector: purple arrow */}
              <svg width="36" height="12" viewBox="0 0 36 12" fill="none" className="shrink-0">
                <line x1="0" y1="6" x2="30" y2="6" stroke="#A855F7" strokeWidth="1.5" />
                <polyline points="25,2 31,6 25,10" fill="none" stroke="#A855F7" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>

              {/* Right: outcome */}
              <div className="text-left w-[120px] shrink-0 ml-1">
                <p className="text-[13px] font-semibold leading-[1.5] text-white">
                  Continuous<br />FinOps across<br /><span style={{ color: "#22D3EE" }}>every customer.</span>
                </p>
              </div>
            </div>

            {/* Bottom CTA line */}
            <div className="mt-10 flex items-center justify-center gap-2">
              <span className="grad-text-bp text-[17px] font-semibold">→</span>
              <p className="text-[16px] text-white">
                <span className="font-semibold">Make FinOps Possible at Scale.</span>{" "}
                <span className="text-ink-secondary">moneta makes it simple.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <SectionShell>
        <div className="text-center max-w-[820px] mx-auto">
          <h2 className="text-h1 text-balance">
            FinOps <span className="grad-text-bp">cannot</span> scale without infrastructure.
          </h2>
          <p className="mt-5 text-[16.5px] leading-[1.7] text-ink-secondary">
            Without system-level alignment, FinOps depends on disconnected tools, manual reconciliation, and one-time analysis.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-y-6 gap-x-10">
          <div className="md:col-start-1">
            <p className="eyebrow text-ink-muted">FinOps Without Infrastructure</p>
          </div>
          <div></div>
          <div>
            <p className="eyebrow grad-text-bp">FinOps With moneta</p>
          </div>
          {[
            ["One-off cost analysis", "Continuous FinOps delivery across every customer account", "#3B82F6"],
            ["Cost, pricing, and billing disconnected", "A single system of record across cost, pricing, and invoicing", "#5B7BFF"],
            ["Manual, reactive optimization", "Continuous, system-driven optimization across every customer", "#6366F1"],
            ["One-time engagement", "Recurring FinOps service delivered at scale", "#A855F7"],
          ].map(([a, b, c]) => (
            <React.Fragment key={a}>
              <div className="md:col-start-1 self-center">
                <p className="text-[16.5px] text-ink-secondary leading-[1.5]">{a}</p>
              </div>
              <div className="hidden md:flex items-center justify-center text-ink-muted text-[20px]">→</div>
              <div className="self-center">
                <p className="text-[16.5px] font-semibold leading-[1.45]" style={{ color: c }}>{b}</p>
              </div>
              <div className="md:col-span-3 h-px bg-line-soft" />
            </React.Fragment>
          ))}
        </div>

        <p className="mt-10 text-[16px] leading-[1.7] text-ink-secondary max-w-[860px]">
          When billing, pricing, and discount data operate within a single system, FinOps no longer depends on
          manual reconciliation or disconnected tools.
        </p>
      </SectionShell>

      <SectionShell className="bg-bg-secondary border-t border-line-soft">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Eyebrow className="mb-7">Why moneta</Eyebrow>
            <h2 className="text-h1 text-balance">
              Built for <span className="grad-text-bp">AWS and Azure</span> resellers operating across multiple customers,
              pricing models, and discount programs.
            </h2>
          </div>
          <div className="lg:col-span-7 lg:self-center space-y-3">
            {[
              { t: "Customer review reporting", b: "Branded, repeatable cost & savings reviews built from real billing data.", c: "#3B82F6" },
              { t: "Optimization playbooks", b: "Rightsizing, commitment planning, and anomaly detection out of the box.", c: "#22D3EE" },
              { t: "Discount earn-back tracking", b: "Show customers exactly what their commitments earned this quarter.", c: "#A855F7" },
              { t: "One source of truth", b: "Same data behind invoices powers FinOps insights — no parallel pipeline.", c: "#5B7BFF" },
            ].map((f, i) => (
              <div key={f.t} className="card flex items-start gap-5 px-5 py-4">
                <span className="font-semibold text-[12px] mt-0.5" style={{ color: f.c }}>0{i + 1}</span>
                <span className="block w-px self-stretch bg-line-soft" />
                <div>
                  <h4 className="text-[16px] font-semibold mb-1">{f.t}</h4>
                  <p className="text-[14.5px] text-ink-secondary leading-[1.6]">{f.b}</p>
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
