// Shared UI primitives — Header, Footer, Modal, Button, layout pieces

const NAV = [
  { label: "Platform", href: "#/platform" },
  { label: "Cloud FinOps", href: "#/finops-services" },
  { label: "Why moneta", href: "#/why-moneta" },
];

function MonetaMark({ size = 28 }) {
  return (
    <img
      src="assets/moneta-icon.png"
      alt=""
      width={size}
      height={size}
      style={{ width: size, height: size, objectFit: "contain", display: "block", transform: "translateY(-4px)" }}
      aria-hidden="true"
    />
  );
}

function Logo({ size = 30 }) {
  return (
    <a href="#/" className="inline-flex items-center group" aria-label="moneta home" style={{ gap: 2 }}>
      <MonetaMark size={size} />
      <span className="font-semibold tracking-tight text-ink-primary"
        style={{ fontSize: Math.round(size * 0.72), lineHeight: 1, display: "inline-block", marginLeft: -2 }}>
        moneta
      </span>
    </a>
  );
}

function Button({ variant = "primary", as = "button", href, children, className = "", onClick, type, ...rest }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-[10px] font-semibold text-[14.5px] transition-all duration-150 ease-out select-none";
  const sizes = "px-6 py-3";
  const variants = {
    primary: `btn-solid-blue text-white ${sizes}`,
    gradient: `btn-grad-border text-white ${sizes}`,
    secondary: `bg-transparent border border-line-hover text-ink-primary hover:border-accent-indigo hover:text-white ${sizes}`,
    ghost: `bg-transparent text-ink-secondary hover:text-ink-primary ${sizes}`,
  };
  const cls = `${base} ${variants[variant]} ${className}`;
  if (as === "a" || href) return <a href={href} onClick={onClick} className={cls} {...rest}>{children}</a>;
  return <button type={type || "button"} onClick={onClick} className={cls} {...rest}>{children}</button>;
}

function ArrowRight({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function Eyebrow({ children, className = "" }) {
  return (
    <div className={className}>
      <p className="eyebrow">{children}</p>
      <div className="eyebrow-rule" />
    </div>
  );
}

function ReviewCTA({ onClick, label = "Review Your Billing, Pricing, and Margins", stack = true, className = "" }) {
  return (
    <button onClick={onClick} className={`btn-grad-border inline-flex items-start gap-4 px-6 py-5 text-left ${className}`}>
      <span className="mt-0.5 grad-text-bp"><ArrowRight size={20} /></span>
      <span className={`font-semibold text-white text-[15.5px] leading-[1.35] ${stack ? "max-w-[200px]" : ""}`}>{label}</span>
    </button>
  );
}

function SectionShell({ children, className = "", id, dotsRight = false, dotsLeft = false }) {
  return (
    <section id={id} className={`relative py-20 md:py-28 ${className}`}>
      {dotsRight && <div className="dot-corner" />}
      {dotsLeft && <div className="dot-corner-left" />}
      <div className="container-x relative">{children}</div>
    </section>
  );
}

// ----- Header -----
function Header({ onDemoClick }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [hash, setHash] = React.useState(window.location.hash || "#/");

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const onHash = () => { setHash(window.location.hash || "#/"); setOpen(false); };
    window.addEventListener("hashchange", onHash);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("hashchange", onHash); };
  }, []);

  return (
    <header className={"fixed top-0 left-0 right-0 z-40 transition-all duration-200 " + (scrolled ? "bg-bg-primary/80 backdrop-blur-xl border-b border-line-soft" : "bg-transparent border-b border-transparent")}>
      <div className="container-x h-[72px] flex items-center justify-between">
        <a href="#/" aria-label="moneta home" className="flex items-center gap-2.5"><MonetaMark size={30} /><span className="text-[17px] font-semibold tracking-tight text-white">moneta</span></a>
        <nav className="hidden md:flex items-center gap-9">
          {NAV.map((n) => {
            const active = hash.startsWith(n.href);
            return (
              <a key={n.href} href={n.href}
                className={"relative text-[14.5px] font-medium transition-colors " + (active ? "text-white" : "text-ink-secondary hover:text-white")}>
                {n.label}
                {active && <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] grad-line rounded-full" />}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <button onClick={onDemoClick}
            className="hidden sm:inline-flex items-center gap-2 grad-text-bp font-semibold text-[14.5px] hover:opacity-90 px-4 py-2 rounded-md bg-bg-primary"
            style={{ border: "1.5px solid transparent", borderImage: "linear-gradient(135deg,#3B82F6,#A855F7) 1", borderImageSlice: 1 }}>
            Book a Demo <ArrowRight size={13} />
          </button>
          <button className="md:hidden w-10 h-10 grid place-items-center rounded-md border border-line text-ink-secondary"
            onClick={() => setOpen(v => !v)} aria-label="Menu">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-line-soft bg-bg-primary/95 backdrop-blur-xl">
          <div className="container-x py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="py-3 text-[15px] text-ink-secondary hover:text-white">{n.label}</a>
            ))}
            <Button variant="primary" onClick={() => { setOpen(false); onDemoClick(); }} className="mt-2 w-full">
              Book a Demo <ArrowRight />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

// ----- Footer -----
function Footer({ onDemoClick }) {
  const cols = [
    { heading: "Product", links: [
      { label: "Platform", href: "#/platform" },
      { label: "Cloud FinOps", href: "#/finops-services" },
      { label: "Why moneta", href: "#/why-moneta" },
    ]},
    { heading: "Company", links: [
      { label: "About", href: "#" }, { label: "Customers", href: "#" }, { label: "Contact", href: "#" },
    ]},
    { heading: "Resources", links: [
      { label: "Documentation", href: "#" }, { label: "Security", href: "#" }, { label: "Changelog", href: "#" },
    ]},
  ];
  return (
    <footer className="bg-bg-secondary border-t border-line-soft mt-12">
      <div className="container-x pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 text-[14px] leading-[1.65] text-ink-muted max-w-sm">
              The financial infrastructure for AWS and Azure resellers — billing, pricing, and margin control in one system.
            </p>
            <div className="mt-6">
              <Button variant="gradient" onClick={onDemoClick} className="!px-5 !py-2.5">Book a Demo <ArrowRight /></Button>
            </div>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            {cols.map((c) => (
              <div key={c.heading}>
                <h4 className="text-[13px] font-semibold text-white mb-4">{c.heading}</h4>
                <ul className="space-y-3">
                  {c.links.map((l) => (
                    <li key={l.label}><a href={l.href} className="text-[14px] text-ink-secondary hover:text-white transition-colors">{l.label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-line-soft flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <p className="text-[13px] text-ink-muted">© 2026 moneta, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[13px] text-ink-muted hover:text-white">Privacy</a>
            <a href="#" className="text-[13px] text-ink-muted hover:text-white">Terms</a>
            <a href="#" className="text-[13px] text-ink-muted hover:text-white">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ----- Demo Modal -----
function FormField({ label, children }) {
  return (
    <label className="block">
      <span className="block text-[12.5px] font-medium text-ink-secondary mb-1.5">{label}</span>
      {children}
    </label>
  );
}

function DemoModal({ isOpen, onClose }) {
  const dialogRef = React.useRef(null);
  const [submitted, setSubmitted] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  React.useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    setTimeout(() => dialogRef.current?.querySelector("input")?.focus(), 50);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); };
  }, [isOpen, onClose]);

  React.useEffect(() => { if (!isOpen) { setSubmitted(false); setErrors({}); } }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());
    const next = {};
    if (!data.firstName) next.firstName = "Required";
    if (!data.lastName) next.lastName = "Required";
    if (!data.email || !/.+@.+\..+/.test(data.email)) next.email = "Valid email required";
    if (!data.company) next.company = "Required";
    setErrors(next);
    if (Object.keys(next).length === 0) setSubmitted(true);
  };

  const inputCls = (err) =>
    "w-full h-12 bg-bg-primary border rounded-md px-4 text-[15px] text-white placeholder:text-ink-muted focus:outline-none transition-colors " +
    (err ? "border-red-500 focus:border-red-400" : "border-line focus:border-accent-indigo");

  return (
    <div className="fixed inset-0 z-50 flex items-start md:items-center justify-center p-4 md:p-6 overflow-y-auto" role="dialog" aria-modal="true" aria-labelledby="demo-modal-title">
      <div className="absolute inset-0 bg-black/85 backdrop-blur-md" onClick={onClose} />
      <div ref={dialogRef} className="relative w-full max-w-[580px] card !rounded-2xl p-7 sm:p-10 my-8 shadow-[0_24px_60px_rgba(0,0,0,0.6)]">
        <button onClick={onClose} aria-label="Close" className="absolute top-4 right-4 w-9 h-9 grid place-items-center rounded-md text-ink-muted hover:text-white hover:bg-bg-tertiary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
        {submitted ? (
          <div className="py-10 text-center">
            <div className="w-14 h-14 mx-auto rounded-full grad-line grid place-items-center mb-5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
            </div>
            <h2 className="text-h3 mb-2">Request received</h2>
            <p className="text-[15px] text-ink-secondary max-w-sm mx-auto">Thanks — we'll follow up within one business day to schedule your billing and margin review.</p>
            <Button variant="primary" onClick={onClose} className="mt-6">Close</Button>
          </div>
        ) : (
          <React.Fragment>
            <Eyebrow className="mb-4">Book a Demo</Eyebrow>
            <h2 id="demo-modal-title" className="text-h3 mb-2">Review Your Billing, Pricing, and Margins</h2>
            <p className="text-[14.5px] text-ink-secondary mb-7 leading-[1.6]">Tell us a bit about your cloud resale business and we'll follow up to schedule a working session.</p>
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-2 gap-4">
                <FormField label="First name"><input name="firstName" className={inputCls(errors.firstName)} /></FormField>
                <FormField label="Last name"><input name="lastName" className={inputCls(errors.lastName)} /></FormField>
              </div>
              <FormField label="Business email"><input name="email" type="email" className={inputCls(errors.email)} /></FormField>
              <FormField label="Phone number"><input name="phone" type="tel" className={inputCls()} /></FormField>
              <div className="grid grid-cols-2 gap-4">
                <FormField label="Company"><input name="company" className={inputCls(errors.company)} /></FormField>
                <FormField label="Title"><input name="title" className={inputCls()} /></FormField>
              </div>
              <FormField label="Message">
                <textarea name="message" rows={4} className="w-full bg-bg-primary border border-line rounded-md px-4 py-3 text-[15px] text-white placeholder:text-ink-muted focus:outline-none focus:border-accent-indigo transition-colors resize-none" />
              </FormField>
              <Button type="submit" variant="primary" className="w-full !py-4 mt-2">Submit</Button>
              <p className="text-[12px] text-ink-muted text-center mt-2">By submitting you agree to moneta's privacy policy.</p>
            </form>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

// ----- Final CTA -----
function FinalCTA({ title, description, ctaLabel = "Book a Demo", onCta }) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="dot-corner" />
      <div className="container-x relative">
        <div className="max-w-[920px]">
          <h2 className="text-h1 text-balance">{title}</h2>
          {description && <p className="mt-6 text-[19px] leading-[1.6] text-ink-secondary max-w-[680px]">{description}</p>}
          <div className="mt-9">
            <Button variant="primary" onClick={onCta} className="!px-7 !py-4 !text-[15px]">{ctaLabel} <ArrowRight /></Button>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  MonetaMark, Logo, Button, ArrowRight, Eyebrow, ReviewCTA, SectionShell,
  Header, Footer, DemoModal, FinalCTA,
});
