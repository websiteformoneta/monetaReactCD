# CLAUDE.md: monetacloud.com

## Core Persona & Directives

**Role:** You are assisting with the frontend web development and UI/UX design for monetacloud.com. 

**Operational Bounds:**
* **Guided Autonomy:** Follow explicit instructions closely, but you have the freedom to make slight, sensible code or design adjustments to improve the interface. The user will review, tune, and finalize the results.
* **Creative Mode:** When explicitly asked to be creative, step outside the box and make a strong effort to deliver innovative, highly professional, and polished results.
* **Invoke Required Skills:** Always invoke the `ui-ux-pro-max` and `frontend-design` skills before writing any code, every session, no exceptions.
* **Scope Restriction:** Focus strictly on frontend design. Do not attempt to optimize or modify any backend infrastructure.

## Tech Stack & Architecture

* **Core:** React with in-browser Babel transpilation (`type="text/babel"` script tags — no build step, no Vite, no npm run dev). Tailwind CSS via Play CDN. Do not reference `vite.config`, `package.json` scripts, or any build pipeline.
* **Deployment Integration:** Vercel.
* **Routing:** Hash routing (`#/`, `#/platform`, `#/why-moneta`, etc.).
* **Local Environment:** Do not attempt to launch a local server, install Playwright, or use Puppeteer workflows unless explicitly instructed. The local development site is running live at `http://127.0.0.1:5500/#/`.

## Key Source Files

* `src/pages.jsx` — All page-level components and layouts.
* `src/components.jsx` — Shared UI components (e.g., `FinalCTA`, `Eyebrow`, nav, footer).
* `src/diagrams.jsx` — All diagram and data-visualization components (e.g., `WhyMonetaDiagram`).

## Established Patterns

### SVG Connector Alignment
For any diagram that draws connector lines between DOM elements, use React refs + `useLayoutEffect` + `getBoundingClientRect()` to measure actual rendered positions, then render an absolutely-positioned SVG overlay spanning the full wrapper. Do NOT use `preserveAspectRatio="none"` or percentage-based coordinates — these misalign when internal layout shifts.

```jsx
const wrapperRef = React.useRef(null);
// ...measure refs in useLayoutEffect, call getBoundingClientRect()
// ...setConn({ x, y, ... }) with pixel values relative to wrapperRef
// render: <svg style={{ position:"absolute", top:0, left:0, width:"100%", height:conn.h }}>
```

### Extending Shared Components
To apply page-specific overrides (e.g., padding on `FinalCTA`), add an optional `className` prop to the component and merge it with the default classes. Do not hardcode page-specific styles inside a shared component.

### Tailwind Arbitrary Variants
Tailwind Play CDN supports arbitrary variants. Use them for child targeting, e.g.:
`className="text-center [&_.eyebrow-rule]:mx-auto"`

## Design & Styling Protocol

* **Visual Consistency:** There is no explicit external style guide document. You must review the existing codebase to infer styling rules and match the main design of the site exactly. This includes strictly maintaining the same fonts, sizes, colors, and overall themes.
* **Implementation:** Apply styles cleanly using Vanilla CSS within the React component structure. Ensure all new components feel native to the existing application.
* **Form Constraint:** The placeholder for the contact form is already set. Do not touch, update, or wire up the form logic or UI at this time unless explicitly requested to do so.

## Brand Color Palette

These are the canonical accent colors used consistently across all diagrams and components. Do not introduce new accent colors without explicit instruction.

| Role | Hex | Usage |
|---|---|---|
| Blue (primary) | `#3B82F6` | Billing, primary flows, first steps |
| Cyan | `#22D3EE` | Pricing, Discounts, secondary flows |
| Indigo | `#5B7BFF` | Tertiary steps, borders, connector dots |
| Purple | `#A855F7` | Margin, Savings, final outcomes |

Gradient across the four: `linear-gradient(90deg, #3B82F6, #22D3EE, #5B7BFF, #A855F7)`

Background dark surfaces typically use `#090C18` / `#0D1025`. Muted borders use `rgba(91,123,255,0.35)`.

## Memory & Pinned References

A persistent memory system lives at:
`C:\Users\Karso\.claude\projects\c--Users-Karso-OneDrive-Desktop-All-Moneta-Websites-monetaReact-github\memory\`

Check `MEMORY.md` in that directory for pinned references before working on any section that has a target image or spec. Key entries:
- **reality_section_reference.md** — pixel-accurate spec for "The Reality" section (5-card fragmented-stack diagram + moneta panel). Treat as source of truth when iterating on that section.

## Behavioral Guardrails

* **Always read before editing.** The Edit tool will error if a file has not been read first in the session. Read every file before attempting any edit.
* **Unique context for edits.** If two JSX blocks are nearly identical (e.g., two `FinalCTA` usages), include surrounding comments or unique neighboring code in `old_string` to make it unambiguous. Never use `replace_all: false` on a non-unique string.
* **No Playwright / browser installs.** Do not prompt to install browsers or use visual screenshot workflows unless the user explicitly asks.
* **No backend changes.** Strictly frontend only.