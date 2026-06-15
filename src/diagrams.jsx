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
  code: (c) => <IconLine color={c}><path d="M9 7l-5 5 5 5M15 7l5 5-5 5" /></IconLine>,
  sheetBox: (c) => <IconLine color={c}><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M4 10h16M4 16h16M10 4v16M16 4v16" /></IconLine>,
  dollar: (c) => <IconLine color={c}><circle cx="12" cy="12" r="9" /><path d="M12 6v12M15 9.5c0-1.4-1.3-2.5-3-2.5s-3 1.1-3 2.5S10.3 12 12 12s3 1.1 3 2.5-1.3 2.5-3 2.5-3-1.1-3-2.5" /></IconLine>,
  externalLink: (c) => <IconLine color={c}><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5" /></IconLine>,
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
          <line x1="0" y1="7" x2="28" y2="7" stroke="#22D3EE" strokeWidth="1.4" strokeDasharray="4 3" />
          <polygon points="28,3.5 36,7 28,10.5" fill="#A855F7" />
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
            <img src="assets/moneta-icon.png" alt="" width="27" height="27" style={{ objectFit: "contain", transform: "translateY(-2px)" }} />
            <span style={{ fontSize: 14, lineHeight: 1 }}>
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
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="56" height="56" aria-label="AWS" role="img">
      <path fill="#FFFFFF" d="M13.527,21.529c0,0.597,0.064,1.08,0.176,1.435c0.128,0.355,0.287,0.742,0.511,1.161 c0.08,0.129,0.112,0.258,0.112,0.371c0,0.161-0.096,0.322-0.303,0.484l-1.006,0.677c-0.144,0.097-0.287,0.145-0.415,0.145 c-0.16,0-0.319-0.081-0.479-0.226c-0.224-0.242-0.415-0.5-0.575-0.758c-0.16-0.274-0.319-0.58-0.495-0.951 c-1.245,1.483-2.81,2.225-4.694,2.225c-1.341,0-2.411-0.387-3.193-1.161s-1.181-1.806-1.181-3.096c0-1.37,0.479-2.483,1.453-3.321 s2.267-1.258,3.911-1.258c0.543,0,1.102,0.048,1.692,0.129s1.197,0.21,1.836,0.355v-1.177c0-1.225-0.255-2.08-0.75-2.58 c-0.511-0.5-1.373-0.742-2.602-0.742c-0.559,0-1.133,0.064-1.724,0.21c-0.591,0.145-1.165,0.322-1.724,0.548 c-0.255,0.113-0.447,0.177-0.559,0.21c-0.112,0.032-0.192,0.048-0.255,0.048c-0.224,0-0.335-0.161-0.335-0.5v-0.79 c0-0.258,0.032-0.451,0.112-0.564c0.08-0.113,0.224-0.226,0.447-0.339c0.559-0.29,1.229-0.532,2.012-0.726 c0.782-0.21,1.612-0.306,2.49-0.306c1.9,0,3.289,0.435,4.183,1.306c0.878,0.871,1.325,2.193,1.325,3.966v5.224H13.527z M7.045,23.979c0.527,0,1.07-0.097,1.644-0.29c0.575-0.193,1.086-0.548,1.517-1.032c0.255-0.306,0.447-0.645,0.543-1.032 c0.096-0.387,0.16-0.855,0.16-1.403v-0.677c-0.463-0.113-0.958-0.21-1.469-0.274c-0.511-0.064-1.006-0.097-1.501-0.097 c-1.07,0-1.852,0.21-2.379,0.645s-0.782,1.048-0.782,1.854c0,0.758,0.192,1.322,0.591,1.709 C5.752,23.786,6.311,23.979,7.045,23.979z M19.865,25.721c-0.287,0-0.479-0.048-0.607-0.161c-0.128-0.097-0.239-0.322-0.335-0.629 l-3.752-12.463c-0.096-0.322-0.144-0.532-0.144-0.645c0-0.258,0.128-0.403,0.383-0.403h1.565c0.303,0,0.511,0.048,0.623,0.161 c0.128,0.097,0.223,0.322,0.319,0.629l2.682,10.674l2.49-10.674c0.08-0.322,0.176-0.532,0.303-0.629 c0.128-0.097,0.351-0.161,0.639-0.161h1.277c0.303,0,0.511,0.048,0.639,0.161c0.128,0.097,0.239,0.322,0.303,0.629l2.522,10.803 l2.762-10.803c0.096-0.322,0.208-0.532,0.319-0.629c0.128-0.097,0.335-0.161,0.623-0.161h1.485c0.255,0,0.399,0.129,0.399,0.403 c0,0.081-0.016,0.161-0.032,0.258s-0.048,0.226-0.112,0.403l-3.847,12.463c-0.096,0.322-0.208,0.532-0.335,0.629 s-0.335,0.161-0.607,0.161h-1.373c-0.303,0-0.511-0.048-0.639-0.161c-0.128-0.113-0.239-0.322-0.303-0.645l-2.474-10.4 L22.18,24.915c-0.08,0.322-0.176,0.532-0.303,0.645c-0.128,0.113-0.351,0.161-0.639,0.161H19.865z M40.379,26.156 c-0.83,0-1.66-0.097-2.458-0.29c-0.798-0.193-1.421-0.403-1.836-0.645c-0.255-0.145-0.431-0.306-0.495-0.451 c-0.064-0.145-0.096-0.306-0.096-0.451v-0.822c0-0.339,0.128-0.5,0.367-0.5c0.096,0,0.192,0.016,0.287,0.048 c0.096,0.032,0.239,0.097,0.399,0.161c0.543,0.242,1.133,0.435,1.756,0.564c0.639,0.129,1.261,0.193,1.9,0.193 c1.006,0,1.788-0.177,2.331-0.532c0.543-0.355,0.83-0.871,0.83-1.532c0-0.451-0.144-0.822-0.431-1.129 c-0.287-0.306-0.83-0.58-1.612-0.838l-2.315-0.726c-1.165-0.371-2.027-0.919-2.554-1.645c-0.527-0.709-0.798-1.499-0.798-2.338 c0-0.677,0.144-1.274,0.431-1.79s0.671-0.967,1.149-1.322c0.479-0.371,1.022-0.645,1.66-0.838C39.533,11.081,40.203,11,40.906,11 c0.351,0,0.718,0.016,1.07,0.064c0.367,0.048,0.702,0.113,1.038,0.177c0.319,0.081,0.623,0.161,0.91,0.258s0.511,0.193,0.671,0.29 c0.224,0.129,0.383,0.258,0.479,0.403c0.096,0.129,0.144,0.306,0.144,0.532v0.758c0,0.339-0.128,0.516-0.367,0.516 c-0.128,0-0.335-0.064-0.607-0.193c-0.91-0.419-1.932-0.629-3.065-0.629c-0.91,0-1.628,0.145-2.123,0.451 c-0.495,0.306-0.75,0.774-0.75,1.435c0,0.451,0.16,0.838,0.479,1.145c0.319,0.306,0.91,0.613,1.756,0.887l2.267,0.726 c1.149,0.371,1.98,0.887,2.474,1.548s0.734,1.419,0.734,2.257c0,0.693-0.144,1.322-0.415,1.87 c-0.287,0.548-0.671,1.032-1.165,1.419c-0.495,0.403-1.086,0.693-1.772,0.903C41.943,26.043,41.193,26.156,40.379,26.156z"/>
      <path fill="#FF9900" d="M43.396,33.992c-5.252,3.918-12.883,5.998-19.445,5.998c-9.195,0-17.481-3.434-23.739-9.142 c-0.495-0.451-0.048-1.064,0.543-0.709c6.769,3.966,15.118,6.369,23.755,6.369c5.827,0,12.229-1.225,18.119-3.741 C43.508,32.364,44.258,33.347,43.396,33.992z M45.583,31.477c-0.671-0.871-4.438-0.419-6.146-0.21 c-0.511,0.064-0.591-0.387-0.128-0.726c3.001-2.128,7.934-1.516,8.509-0.806c0.575,0.726-0.16,5.708-2.969,8.094 c-0.431,0.371-0.846,0.177-0.655-0.306C44.833,35.927,46.254,32.331,45.583,31.477z"/>
    </svg>
  );
}

function AzureLogo() {
  return (
    <img src="assets/icons8-azure.svg" alt="Microsoft Azure" width="40" height="40" style={{ objectFit: "contain" }} />
  );
}

// ---- Trust Bar — uses PNG icons ----
function TrustBar() {
  return (
    <div className="card !rounded-2xl px-6 md:px-10 overflow-hidden" style={{ height: 88 }}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center h-full">
        <div className="flex items-center justify-center" style={{ transform: "scale(1.3)", transformOrigin: "center" }}>
          <div className="flex items-center gap-3">
            <PngIcon src="graphics/icons/HeroCloudProcessedAnnuallyIcon.png" size={42} />
            <div className="leading-tight">
              <p className="text-[20px] font-bold grad-text-bp">Over $100M</p>
              <p className="text-[12px] text-ink-muted mt-0.5">processed annually</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center" style={{ transform: "scale(1.3)", transformOrigin: "center" }}>
          <AwsLogo />
        </div>
        <div className="flex items-center justify-center" style={{ transform: "scale(1.3)", transformOrigin: "center" }}>
          <div className="flex items-center gap-3">
            <AzureLogo />
            <div className="leading-tight">
              <p className="text-[11px] uppercase tracking-[0.16em] text-ink-muted">Microsoft</p>
              <p className="text-[18px] font-semibold text-white -mt-0.5">Azure</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center" style={{ transform: "scale(1.3)", transformOrigin: "center" }}>
          <div className="flex items-center gap-3">
            <PngIcon src="graphics/icons/HeroPurposeBuiltIcon.png" size={42} />
            <div className="leading-tight">
              <p className="text-[12px] text-ink-muted">Purpose-built for</p>
              <p className="text-[16px] font-semibold grad-text-bp -mt-0.5">Cloud Resellers</p>
            </div>
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
    { t: "Cloud Billing", b: "Consistent, customer-ready invoices aligned to pricing.", src: "graphics/icons/ProblemBillingIcon.png", c: "#3B82F6" },
    { t: "Discounts", b: "Apply discount programs by customer and capture savings.", src: "graphics/icons/ProblemMisappliedIcon.png", c: "#22D3EE" },
    { t: "Customer Pricing", b: "Set pricing with full visibility into cost, discounts, and margin.", src: null, svgI: "trend", c: "#5B7BFF" },
    { t: "Margin Intelligence", b: "Track margin performance and identify where to adjust.", src: "graphics/icons/ProblemLimitedIcon.png", c: "#A855F7" },
  ];
  return (
    <div className="relative">
      <div className="hidden md:flex items-center gap-3 mb-7">
        <span className="h-px flex-1 grad-line opacity-60" />
        <p className="text-[15px] font-semibold"><span className="text-white">moneta</span> <span className="grad-text-bp">system</span></p>
        <span className="h-px flex-1 grad-line opacity-60" />
      </div>
      {/* Outer wrapper — single continuous line from first dot center to last dot center */}
      <div className="relative">
        <ul className="space-y-0">
          {items.map((it, idx) => (
            <li key={it.t} className="flex relative">
              {/* Timeline column — dot + line segment that connects to next item's dot */}
              <div className="relative shrink-0" style={{ width: TCOL }}>
                {/* Line BEFORE this dot (skipped on first item) */}
                {idx > 0 && (
                  <div
                    className="absolute"
                    style={{
                      left: TCOL / 2 - 1,
                      width: 2,
                      top: 0,
                      height: 18,
                      background: "linear-gradient(180deg,#3B82F6 0%,#6366F1 50%,#A855F7 100%)",
                    }}
                  />
                )}
                {/* Line AFTER this dot (skipped on last item) — extends to bottom of li */}
                {idx < items.length - 1 && (
                  <div
                    className="absolute"
                    style={{
                      left: TCOL / 2 - 1,
                      width: 2,
                      top: 18,
                      bottom: 0,
                      background: "linear-gradient(180deg,#3B82F6 0%,#6366F1 50%,#A855F7 100%)",
                    }}
                  />
                )}
                <span className={"absolute top-3 left-1/2 -translate-x-1/2 timeline-dot " + (idx % 2 === 1 ? "timeline-dot-purple" : "")} />
              </div>
              {/* Content */}
              <div className="flex-1 pl-5 pb-5">
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
                {idx < items.length - 1 && <hr className="border-line-soft mt-5" />}
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
      <div className="space-y-2">
        {rows.map(([a, b]) => (
          <div key={a} className="grid grid-cols-[1fr_28px_1fr] items-center gap-4 px-5 py-3.5 rounded-xl border"
            style={{ background: "rgba(255,255,255,0.02)", borderColor: "#0D1020" }}>
            <span className="text-[16px] text-ink-secondary">{a}</span>
            <span className="text-ink-muted text-[18px] text-center">→</span>
            <span className="text-[16px] font-semibold grad-text-bp">{b}</span>
          </div>
        ))}
      </div>
      <p className="mt-7 pt-5 border-t text-[15.5px] text-ink-secondary leading-[1.65]" style={{ borderColor: "#0D1020" }}>
        Built for <span className="grad-text-bp font-semibold">AWS and Azure</span> resellers — aligning <span className="grad-text-bp font-semibold">multi-customer</span> billing, pricing, and margin in a <span className="grad-text-bp font-semibold">single system</span>.
      </p>
    </div>
  );
}

// ---- FinOps split: glassmorphism pipeline — Your Managed Service ----
function FinopsSplit() {
  const glass = {
    background: "rgba(255, 255, 255, 0.03)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  };

  // Abstract bar chart — no numbers, no labels
  const BarChartGraphic = () => (
    <svg viewBox="0 0 80 56" width="80" height="56" aria-hidden="true">
      <defs>
        <linearGradient id="bcg" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#22D3EE" stopOpacity="1" />
        </linearGradient>
      </defs>
      {[
        { x: 6,  h: 20 }, { x: 20, h: 32 }, { x: 34, h: 16 },
        { x: 48, h: 40 }, { x: 62, h: 28 },
      ].map(({ x, h }, i) => (
        <rect key={i} x={x} y={52 - h} width="8" height={h} rx="1.5" fill="url(#bcg)" />
      ))}
      <line x1="2" y1="53" x2="78" y2="53" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
    </svg>
  );

  // Downward trend — purely graphic
  const TrendGraphic = () => (
    <svg viewBox="0 0 80 56" width="80" height="56" aria-hidden="true" fill="none">
      <defs>
        <linearGradient id="tg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#A855F7" />
          <stop offset="100%" stopColor="#5B7BFF" />
        </linearGradient>
        <marker id="tg-arrow" markerWidth="4" markerHeight="4" refX="3.5" refY="2" orient="auto">
          <path d="M0,0 L4,2 L0,4 Z" fill="#5B7BFF" />
        </marker>
      </defs>
      <polyline
        points="6,10 24,22 40,16 58,36 72,48"
        stroke="url(#tg)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="miter"
        markerEnd="url(#tg-arrow)"
      />
    </svg>
  );

  // Clean 3D server rack — no labels
  const ServerRackGraphic = () => (
    <svg viewBox="0 0 80 56" width="80" height="56" aria-hidden="true" fill="none">
      <defs>
        <linearGradient id="srf" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(91,123,255,0.35)" />
          <stop offset="100%" stopColor="rgba(91,123,255,0.08)" />
        </linearGradient>
        <linearGradient id="srt" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(91,123,255,0.45)" />
          <stop offset="100%" stopColor="rgba(91,123,255,0.15)" />
        </linearGradient>
      </defs>
      {/* Top face (parallelogram) */}
      <path d="M 22 12 L 58 12 L 68 6 L 32 6 Z" fill="url(#srt)" stroke="#5B7BFF" strokeWidth="1" />
      {/* Front face */}
      <rect x="22" y="12" width="36" height="40" rx="2" fill="url(#srf)" stroke="#5B7BFF" strokeWidth="1" />
      {/* Side face */}
      <path d="M 58 12 L 68 6 L 68 46 L 58 52 Z" fill="rgba(91,123,255,0.15)" stroke="#5B7BFF" strokeWidth="1" />
      {/* Server slots (front) */}
      {[18, 26, 34, 42].map((y) => (
        <g key={y}>
          <line x1="26" y1={y} x2="54" y2={y} stroke="rgba(255,255,255,0.18)" strokeWidth="0.8" />
          <circle cx="51" cy={y} r="1" fill="#22D3EE" />
        </g>
      ))}
    </svg>
  );

  const items = [
    { t: "Customer Cost Visibility",  b: "Clear cloud budgeting and reporting",     g: <BarChartGraphic /> },
    { t: "Rate Reduction",            b: "Reduce rates for customers",              g: <TrendGraphic /> },
    { t: "Infrastructure Efficiency", b: "Optimize resource usage and reduce waste", g: <ServerRackGraphic /> },
  ];

  return (
    <div className="w-full flex flex-col items-center text-center">
      {/* Top glowing cloud icon */}
      <div className="relative" style={{ width: 77, height: 77 }}>
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(34,211,238,0.45) 0%, rgba(34,211,238,0) 70%)",
            filter: "blur(6px)",
          }}
        />
        <img
          src="assets/moneta-icon.png"
          alt="moneta"
          width="77"
          height="77"
          style={{
            objectFit: "contain",
            position: "relative",
            filter: "drop-shadow(0 0 14px rgba(34,211,238,0.55))",
          }}
        />
      </div>

      {/* Vertical pipeline line */}
      <div
        style={{
          width: 2, height: 28, marginTop: 6,
          background: "linear-gradient(180deg, rgba(34,211,238,0.6), rgba(91,123,255,0.6))",
        }}
      />

      {/* "Your Managed Service" glass card */}
      <div
        className="px-8 py-4 w-full max-w-[420px] rounded-xl"
        style={{ ...glass, boxShadow: "0 0 28px rgba(91,123,255,0.2)" }}
      >
        <p className="text-[20px] md:text-[23px] font-bold grad-text-bp">Your Managed Service</p>
      </div>

      {/* Distribution lines — single SVG so lines are guaranteed to connect.
          viewBox 0 0 600 44. Column centers (gap-3 = 12px assumed on 420px max):
          col width = (420-24)/3 = 132. centers at 66, 210, 354 → as % of 420 → 15.7%, 50%, 84.3%
          In viewBox 600: x = 94, 300, 506  */}
      <svg
        viewBox="0 0 600 44"
        width="100%"
        height="44"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{ marginTop: 4, display: "block" }}
      >
        {/* stem from card down to horizontal */}
        <line x1="300" y1="0"  x2="300" y2="10" stroke="rgba(34,211,238,0.55)" strokeWidth="2" />
        {/* horizontal bar */}
        <line x1="94"  y1="10" x2="506" y2="10" stroke="rgba(34,211,238,0.55)" strokeWidth="2" />
        {/* verticals down */}
        <line x1="94"  y1="10" x2="94"  y2="36" stroke="rgba(34,211,238,0.55)" strokeWidth="2" />
        <line x1="300" y1="10" x2="300" y2="36" stroke="rgba(34,211,238,0.55)" strokeWidth="2" />
        <line x1="506" y1="10" x2="506" y2="36" stroke="rgba(34,211,238,0.55)" strokeWidth="2" />
        {/* arrowheads */}
        {[94, 300, 506].map((x) => (
          <polyline
            key={x}
            points={`${x - 6},32 ${x},40 ${x + 6},32`}
            fill="none" stroke="rgba(34,211,238,0.9)" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round"
          />
        ))}
      </svg>

      {/* Three columns */}
      <div className="grid grid-cols-3 gap-3 w-full mt-2">
        {items.map((it) => (
          <div key={it.t} className="flex flex-col items-center text-center">
            <p className="text-[13.5px] md:text-[14.5px] font-semibold text-white leading-[1.25] mb-3 min-h-[36px] flex items-center justify-center">
              {it.t}
            </p>
            <div
              className="w-full rounded-xl flex items-center justify-center"
              style={{ ...glass, padding: "14px 10px" }}
            >
              {it.g}
            </div>
            <p className="text-[12px] md:text-[12.5px] text-ink-secondary leading-[1.5] mt-3 px-1">
              {it.b}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom anchor card */}
      <div
        className="w-full mt-6 px-6 py-5 rounded-xl"
        style={{ ...glass }}
      >
        <p className="text-[14px] md:text-[15px] text-ink-secondary leading-[1.65]">
          Deliver Cloud FinOps as a repeatable service that strengthens customer relationships and enables{" "}
          <span className="grad-text-bp font-semibold">recurring services revenue</span>.
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
          left: TCOL / 2 - 1, width: 2, height: "calc(100% - 8px)",
          background: "linear-gradient(180deg,#3B82F6 0%,#22D3EE 33%,#5B7BFF 66%,#A855F7 85%, transparent 100%)",
          borderRadius: 2
        }} />
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
    { t: "Invoicing", sub: "(Automated)", b: "Accurate, customer-ready invoices are generated based on aligned billing and pricing.", c: "#5B7BFF" },
    { t: "Margin Visibility", sub: "(Real-Time)", b: "Margin performance is updated in real time across every customer for complete visibility and control.", c: "#A855F7" },
  ];
  return (
    <div>
      {/* Line + dots. Dots use the same 4-col grid so they're always centered over titles. */}
      <div className="relative mb-6" style={{ height: 24 }}>
        {/* Base line with fade edges */}
        <div className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2"
          style={{ background: "linear-gradient(90deg, transparent 0%, #3B82F6 8%, #22D3EE 33%, #5B7BFF 66%, #A855F7 92%, transparent 100%)", opacity: 0.5 }} />
        {/* Flowing arrows — travel full width left to right, fade out at right edge */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 24" preserveAspectRatio="none" style={{ overflow: "visible" }}>
          <defs>
            <linearGradient id="flowFade" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%"   stopColor="white" stopOpacity="0"/>
              <stop offset="10%"  stopColor="white" stopOpacity="1"/>
              <stop offset="80%"  stopColor="white" stopOpacity="1"/>
              <stop offset="100%" stopColor="white" stopOpacity="0"/>
            </linearGradient>
            <mask id="flowMask"><rect x="0" y="0" width="1000" height="24" fill="url(#flowFade)"/></mask>
          </defs>
          <g mask="url(#flowMask)">
            {[0, 1, 2, 3, 4].map(j => (
              <g key={j}>
                <polyline points="-6,8 0,12 -6,16" stroke="#5B7BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.8">
                  <animateTransform attributeName="transform" type="translate" from="0,0" to="1000,0" dur="14s" begin={`${j * 2.8}s`} repeatCount="indefinite"/>
                </polyline>
              </g>
            ))}
          </g>
        </svg>
        {/* Dots — same 4-col grid, each dot centered in its column */}
        <div className="absolute inset-0 grid grid-cols-4 gap-5 md:gap-6">
          {steps.map((s) => (
            <div key={s.t} className="flex items-center justify-center">
              <span style={{
                width: 13, height: 13, borderRadius: "50%", display: "block",
                background: s.c, boxShadow: `0 0 0 3px ${s.c}30, 0 0 10px ${s.c}80`,
              }} />
            </div>
          ))}
        </div>
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

// ---- Why Moneta system diagram ----
function WhyMonetaDiagram({ onCta }) {
  const outcomes = [
    { label: "Clear profitability",  icon: "trend",   c: "#3B82F6" },
    { label: "Automated invoicing",  icon: "invoice", c: "#22D3EE" },
    { label: "Savings captured",     icon: "shield",  c: "#A855F7" },
  ];
  const steps = [
    { label: "Billing",   sub: "Accurate usage captured and billed on your terms.",    c: "#3B82F6" },
    { label: "Pricing",   sub: "Flexible pricing models that reflect your strategy.",   c: "#22D3EE" },
    { label: "Discounts", sub: "Consistent discount management aligned to your goals.", c: "#5B7BFF" },
    { label: "Margin",    sub: "Stronger margins through visibility and control.",      c: "#A855F7" },
  ];

  return (
    <div>
      {/* Unified card: system diagram left, outcomes panel right */}
      <div className="rounded-2xl overflow-hidden"
        style={{
          border: "1px solid rgba(91,123,255,0.35)",
          background: "linear-gradient(160deg,#0D1025 0%,#090C18 100%)",
          boxShadow: "0 0 48px 8px rgba(59,130,246,0.08), 0 0 0 0 transparent",
        }}>

        <div className="flex">
          {/* ── LEFT: system pipeline ── */}
          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="flex flex-col items-center pt-5 pb-4 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
              <div className="flex items-center gap-2 mb-1">
                <img src="assets/moneta-icon.png" alt="" width="20" height="20" style={{ objectFit: "contain" }} />
                <span className="font-bold text-white text-[16px] tracking-tight">moneta</span>
              </div>
              <p className="eyebrow text-[9px] tracking-[0.22em] text-ink-secondary">The Billing Infrastructure for Cloud Resellers</p>
            </div>

            {/* Flow line + step dots */}
            <div className="px-8 pt-7 pb-4 relative">
              {/* gradient track */}
              <div className="absolute" style={{
                top: "calc(1.75rem + 5px)", left: "calc(2rem + 11.5%)", right: "calc(2rem + 11.5%)",
                height: 1.5,
                background: "linear-gradient(90deg,#3B82F6,#22D3EE 33%,#5B7BFF 66%,#A855F7 100%)",
              }} />
              <div className="flex justify-between relative z-10">
                {steps.map((s) => (
                  <div key={s.label} className="flex flex-col items-center gap-2" style={{ width: "23%" }}>
                    <div style={{ width: 11, height: 11, borderRadius: "50%", background: s.c, boxShadow: `0 0 8px ${s.c}` }} />
                    <p className="text-[13px] font-semibold text-center" style={{ color: s.c }}>{s.label}</p>
                    <p className="text-[11.5px] text-ink-primary leading-[1.45] text-center" style={{ opacity: 0.5 }}>{s.sub}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center px-6 pb-5 pt-2 border-t" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
              <p className="text-[12px] text-ink-secondary">Continuously aligning billing, pricing, discounts, and margin.</p>
            </div>
          </div>

          {/* ── DIVIDER ── */}
          <div style={{ width: 1, background: "rgba(91,123,255,0.2)", flexShrink: 0 }} />

          {/* ── RIGHT: outcomes panel ── */}
          <div className="shrink-0 flex flex-col justify-center gap-0" style={{ width: 240 }}>
            {/* panel header */}
            <div className="px-6 pt-5 pb-4 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
              <p className="eyebrow text-[9px] tracking-[0.22em]" style={{ color: "#22D3EE" }}>What You Gain</p>
            </div>

            {/* outcome rows */}
            <div className="flex flex-col divide-y" style={{ borderColor: "rgba(255,255,255,0.05)" }}>
              {outcomes.map((o) => (
                <div key={o.label} className="flex items-center gap-3 px-6 py-4">
                  <div className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center"
                    style={{ background: `${o.c}15`, border: `1px solid ${o.c}40` }}>
                    {Icons[o.icon](o.c)}
                  </div>
                  <span className="text-[13.5px] font-semibold text-white leading-[1.3]">{o.label}</span>
                </div>
              ))}
            </div>

            {/* panel footer gradient accent */}
            <div style={{ height: 2, background: "linear-gradient(90deg,#3B82F6,#22D3EE,#5B7BFF,#A855F7)" }} />
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 flex justify-center">
        <button onClick={onCta} className="btn-grad-border inline-flex items-center gap-3 px-7 py-4">
          <span className="font-semibold text-white text-[15px]">Strengthen The System Behind Your Margins</span>
          <ArrowRight size={16} className="text-white opacity-60" />
        </button>
      </div>
    </div>
  );
}

// ---- Reconciliation Loop graphic ----
function ReconciliationLoop() {
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % 4), 4000);
    return () => clearInterval(t);
  }, []);

  const steps = [
    {
      label: "Cloud Billing", sub: "AWS · Azure · GCP", num: "01",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6H16a5 5 0 011 9.9M8 17l4-4 4 4M12 13v8"/></svg>,
      color: "#38bdf8", stats: [{ k: "rows", v: "14.2M" }, { k: "providers", v: "3" }],
    },
    {
      label: "Discounts", sub: "SPs · RIs · MACC", num: "02",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="9" r="2"/><circle cx="15" cy="15" r="2"/><path d="M7 17L17 7"/><rect x="3" y="3" width="18" height="18" rx="2"/></svg>,
      color: "#34d399", stats: [{ k: "applied", v: "$124K", vc: "#34d399" }, { k: "coverage", v: "93.5%" }],
    },
    {
      label: "Customer Pricing", sub: "Rules & agreements", num: "03",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10M7 12h6M7 17h4"/><rect x="3" y="3" width="18" height="18" rx="2"/></svg>,
      color: "#a78bfa", stats: [{ k: "rules", v: "150" }, { k: "customers", v: "7" }],
    },
    {
      label: "Margin Intelligence", sub: "By customer", num: "04",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 9l-5 5-4-4-4 4"/></svg>,
      color: "#f472b6", stats: [{ k: "blended", v: "17.5%", vc: "#34d399" }, { k: "margin $", v: "$90,150", vc: "#34d399" }],
    },
  ];

  return (
    <div style={{ background: "linear-gradient(160deg,#162035 0%,#111828 100%)", border: "1px solid rgba(56,189,248,0.25)", borderRadius: 16, padding: "28px 28px 20px", boxShadow: "0 0 60px rgba(56,189,248,0.08)" }}>

      {/* Header row */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ animation: "spin 5s linear infinite" }}><path d="M21 12a9 9 0 11-6.219-8.56"/></svg>
            <span style={{ color: "#38bdf8", fontSize: 10, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", fontFamily: "Inter, sans-serif" }}>Continuous Reconciliation Loop</span>
          </div>
          <p style={{ color: "#f1f5f9", fontSize: 17, fontWeight: 600, fontFamily: "Inter, sans-serif" }}>Billing, pricing, discounts, and margin — aligned every cycle.</p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, whiteSpace: "nowrap" }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", display: "inline-block", boxShadow: "0 0 6px #22c55e" }} />
          <span style={{ color: "#64748b", fontSize: 12, fontFamily: "Inter, sans-serif" }}>Live &nbsp;·&nbsp; last sync · 2 min ago</span>
        </div>
      </div>

      {/* Step nodes + connector line */}
      <div style={{ position: "relative", display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 0 }}>
        {/* SVG connector line — matches return loop style exactly */}
        <svg style={{ position: "absolute", top: 21, left: 0, width: "100%", height: 4, overflow: "visible", zIndex: 0 }} preserveAspectRatio="none" viewBox="0 0 800 4">
          <line x1="100" y1="2" x2="700" y2="2" stroke="rgba(56,189,248,0.45)" strokeWidth="1.5" strokeDasharray="8 6" fill="none">
            <animate attributeName="stroke-dashoffset" from="0" to="-28" dur="2.4s" repeatCount="indefinite" />
          </line>
        </svg>

        {steps.map((s, i) => (
          <div key={s.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: `${100/4}%`, zIndex: 2, position: "relative" }}>
            <div style={{
              width: 44, height: 44, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
              background: "#0d1425",
              border: `2px solid ${active === i ? s.color : "rgba(255,255,255,0.1)"}`,
              color: active === i ? s.color : "rgba(180,186,200,0.4)",
              boxShadow: active === i ? `0 0 20px ${s.color}60` : "none",
              transition: "all 0.3s",
              marginBottom: 0,
              isolation: "isolate",
            }}>
              {s.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Cards row */}
      <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
        {steps.map((s, i) => (
          <div key={s.label} style={{
            flex: 1, borderRadius: 10, padding: "14px 14px 12px",
            background: active === i ? `linear-gradient(160deg,${s.color}12,rgba(10,16,32,0.9))` : "rgba(255,255,255,0.02)",
            border: `1px solid ${active === i ? s.color + "55" : "rgba(255,255,255,0.07)"}`,
            transition: "all 0.3s",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
              <span style={{ color: active === i ? "#f1f5f9" : "#94a3b8", fontSize: 13, fontWeight: 600, fontFamily: "Inter, sans-serif", lineHeight: 1.2 }}>{s.label}</span>
              <span style={{ color: "rgba(100,116,139,0.5)", fontSize: 10, fontFamily: "Inter, monospace" }}>{s.num}</span>
            </div>
            <p style={{ color: "#475569", fontSize: 11, fontFamily: "Inter, sans-serif", marginBottom: 12 }}>{s.sub}</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {s.stats.map(st => (
                <div key={st.k} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ color: "#475569", fontSize: 11, fontFamily: "Inter, monospace" }}>{st.k}</span>
                  <span style={{ color: st.vc || "#94a3b8", fontSize: 12, fontWeight: 600, fontFamily: "Inter, monospace", fontVariantNumeric: "tabular-nums" }}>{st.v}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{ marginTop: 16, display: "flex", justifyContent: "center" }}>
        <span style={{ color: "#475569", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", fontFamily: "Inter, sans-serif", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 999, padding: "5px 16px" }}>
          Re-syncs hourly · <span style={{ color: "#38bdf8" }}>No manual reconciliation</span>
        </span>
      </div>

      {/* Curved return loop */}
      <div style={{ position: "relative", marginTop: 8, height: 52, width: "100%" }}>
        {/* arc only — preserveAspectRatio none so it stretches full width */}
        <svg width="100%" height="52" viewBox="0 0 800 52" preserveAspectRatio="none" fill="none" style={{ display: "block", position: "absolute", top: 0, left: 0 }}>
          <path d="M 700 4 C 700 42, 550 48, 400 48 C 250 48, 100 42, 100 4" stroke="rgba(56,189,248,0.45)" strokeWidth="1.5" strokeDasharray="8 6" fill="none">
            <animate attributeName="stroke-dashoffset" from="28" to="0" dur="2.4s" repeatCount="indefinite" />
          </path>
        </svg>
        {/* arrowhead + stem */}
        <div style={{ position: "absolute", top: -10, left: "calc(12.5% - 6px)", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ width: 0, height: 0, borderLeft: "6px solid transparent", borderRight: "6px solid transparent", borderBottom: "11px solid #38bdf8" }} />
          <div style={{ width: 2, height: 6, background: "#2887ae", marginLeft: 1 }} />
        </div>
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}

Object.assign(window, {
  Icons, PngIcon, OperatingSystemDiagram, TrustBar, SolutionTimeline, ResultsList,
  FinopsSplit, CoreSystemLayers, SystemFlowHorizontal, WhyMonetaDiagram, ReconciliationLoop,
});
