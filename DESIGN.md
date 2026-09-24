---
name: Who Buys Junk Cars Near Me
description: Nationwide junk-car cash-buyer lead-gen site
colors:
  navy-950: "#070f22"
  navy-900: "#0b1734"
  navy-800: "#101d35"
  navy-700: "#172a4a"
  navy-600: "#213a63"
  navy-500: "#334f80"
  navy-400: "#516ea3"
  navy-300: "#7f97c4"
  navy-200: "#aebddd"
  navy-100: "#d7deee"
  navy-50: "#eef1f8"
  gold-600: "#d97706"
  gold-500: "#f59e0b"
  gold-400: "#fbbf24"
  gold-100: "#fef3c7"
  gold-50: "#fffbeb"
typography:
  display:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 700
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 400
    lineHeight: 1.75
rounded:
  sm: "0.75rem"
  md: "1rem"
  lg: "1.25rem"
  pill: "9999px"
spacing:
  section: "4rem"
  section-md: "5.5rem"
components:
  button-primary:
    backgroundColor: "{colors.gold-500}"
    textColor: "#1f1204"
    rounded: "{rounded.pill}"
    padding: "0.8rem 1.6rem"
  button-primary-hover:
    backgroundColor: "{colors.gold-600}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
---

# Design System: Who Buys Junk Cars Near Me

## Overview

**Creative North Star: "The Trusted National Buyer"**

This is a lead-generation site for a nationwide junk-car buying service, competing against a category where most sites look thin, templated, or scammy. The system's job is to read as the most careful, most put-together operator a skeptical seller finds — deep navy for institutional trust, one warm gold accent standing in for "cash" and calling out the one action that matters, real typography instead of a system-font fallback, and zero decorative filler (no eyebrow labels, no emoji-as-icon, no invented section numbering).

This is a deliberate "familiar category" execution, not a novel visual world: it was chosen over three custom directions (an automotive-gauge "Instrument Panel" world, an "Auction House" world, and an "Inspection Report" world) offered during the redesign. The user chose the standing, played-straight path, with the craft bar set by Peddle, CarBrain, Junk Car Medics, and cashforcarsflorida.net.

**Key Characteristics:**
- Navy-anchored trust, gold-accented action
- Real webfonts (Space Grotesk display + Inter body), no system-font fallback
- No kicker/eyebrow labels above headings — the heading carries its own weight
- No fabricated imagery or unicode-glyph icons; every icon comes from the Phosphor icon library
- One authored entrance motion (hero rise-in), not scattered per-section fades

## Colors

Two-color system: navy does the trust-building, gold does the persuading. Gold appears only where it earns its keep — CTAs, the one live accent per section, small underline marks — never as a background wash.

### Primary
- **Cash Gold** (`#f59e0b`, `gold-500`): every primary button, active/checked icon glyphs, link hover states, the one highlighted word per hero headline, focus rings, text selection, scrollbar thumb.

### Neutral
- **Deep Navy** (`#0b1734`, `navy-900`): header/hero/footer/CTA-adjacent dark surfaces, primary heading color on light backgrounds.
- **Navy Ink** (`#16213e`): default body text color (set on `body`, outside the Tailwind scale).
- **Navy Mist** (`#eef1f8`, `navy-50`): muted section backgrounds, scrollbar track.
- **Navy Line** (`#d7deee`, `navy-100`): borders and dividers throughout.

### Named Rules
**The One Accent Rule.** Gold is reserved for calls to action and small live-state marks (check icons, active nav, focus). It never fills a large surface except the CTA band itself, which is the one place the system goes "Committed" (gold owns 100% of that one section) rather than "Restrained."

## Typography

**Display Font:** Space Grotesk (with ui-sans-serif, system-ui fallback)
**Body Font:** Inter (with ui-sans-serif, system-ui fallback)

**Character:** Space Grotesk's confident, slightly technical geometry carries every heading and the wordmark — bold enough to compete with Peddle-style category leaders. Inter stays out of the way for body copy and form labels.

### Hierarchy
- **Display / H1** (700, `text-4xl` to `text-[3.4rem]`, leading-[1.05]): hero headlines only, one word set in gold per hero.
- **H2** (700, `text-2xl` to `text-3xl`): section titles. Always followed by a short gold underline mark (`h-1 w-14 bg-gold-500`) instead of an eyebrow label above.
- **H3** (700, `text-lg` to `text-xl`): card and step titles.
- **Body** (400, `1rem`–`1.05rem`, line-height 1.75, `prose-body` class): paragraph copy, capped by its container (max-w-xl/2xl/3xl), never a bare full-width measure.
- **Label** (600–700, `0.85rem`, form labels and small caps like the logo's "WHO BUYS" line, `tracking-[0.14em]` uppercase).

### Named Rules
**The No-Kicker Rule.** No small uppercase label sits above a heading anywhere in the system. The heading is the whole statement; supporting context lives in the paragraph beneath it, not a chip above it.

## Layout

Single `container-page` wrapper (max-width 1200px, 1.25rem side gutter) used everywhere. Section vertical rhythm is a flat `.section` utility: 4rem top/bottom padding under 768px, 5.5rem at 768px and up. Heroes and content sections use a two-column `[1.1fr_0.9fr]` or `[0.9fr_1.1fr]` split on `lg:`, stacking to one column below it. Grids (states, brands, FAQ cities) run 2 columns on mobile up to 5 on desktop. A slim navy announcement strip sits above the sticky white header on `sm:` and up (hidden on mobile to keep the header compact); a fixed bottom call/quote bar takes its place on mobile (`lg:hidden`).

## Elevation & Depth

Hybrid: mostly flat cards with a soft ambient shadow at rest, lifting to a stronger one on hover/interaction. Never a hard offset (`box-shadow: Npx Npx 0`) — every shadow carries blur and a soft vertical offset.

### Shadow Vocabulary
- **`shadow-card`** (`0 20px 45px -15px rgba(11,23,52,0.25)`): resting elevation for the lead-form card and any card that should read as "raised."
- **`shadow-card-hover`** (`0 24px 55px -12px rgba(11,23,52,0.32)`): hover state for interactive grid links (state/city/brand tiles), paired with a `-translate-y-0.5` lift.
- **`btn` shadow** (`0 12px 24px -8px rgba(245,158,11,0.5)`): the primary gold button's own colored glow, deepening on hover.

### Named Rules
**The Real Shadow Rule.** A shadow always has offset and blur. A zero-offset colored halo or a hard flat-drop shadow never appears in this system.

## Shapes

Generous rounding throughout: `rounded-2xl` (1rem) for cards and form containers, `rounded-xl` for grid link tiles, full `rounded-full`/pill for every button and small icon badge. Borders are thin (`1–1.5px`, `navy-100`) and never colored on one side only (no `border-left` accent bars).

## Components

### Buttons
- **Shape:** full pill (`border-radius: 9999px`), `0.8rem 1.6rem` padding, `font-weight: 700`.
- **Primary:** gold-500 background, near-black (`#1f1204`) text, glowing gold drop shadow, darkens to gold-600 with a deeper shadow on hover, scales down slightly on `:active`.
- **Outline (light-on-dark):** transparent with a 1.5px white/50%-opacity border, for use on navy surfaces.
- **Outline (dark-on-light):** transparent with a navy/25%-opacity border, for use on white surfaces (header "Book call", mobile call bar).

### Cards / Containers
- **Corner style:** `rounded-2xl` (1.25rem via `xl2` token, or Tailwind's `2xl`).
- **Background:** white on light sections, `navy-50/60` for "muted" tone sections.
- **Shadow strategy:** `shadow-card` at rest; interactive tiles add `shadow-card-hover` + lift on hover.
- **Border:** 1–1.5px `navy-100`, brightening to `gold-400` on hover for interactive tiles.

### Inputs / Fields
- **Style:** `rounded-xl` (0.75rem), 1.5px `#e2e6f0` border, `#f8fafc` background.
- **Focus:** border shifts to gold-500 plus a soft `0 0 0 3px rgba(245,158,11,0.15)` ring — no default browser outline.
- **Error:** red-600 text beneath the field group (Tailwind default red, not part of the two-color system — reserved strictly for validation errors).

### Navigation
- **Header:** sticky, white/95% + backdrop-blur, 76px tall. Links are navy-700, hover to gold-600. Desktop shows outline "Book call" + solid gold "Get quote"; mobile collapses to a hamburger drawer plus a fixed bottom call/quote bar.
- **Footer:** navy-900 background, gold-400 uppercase small-caps section headers, navy-200 body links brightening to white on hover.

### Numbered Sequences (signature component)
Where a real order matters (the 4-step "how it works" process, the on-page sell steps), steps use a small navy circle with a gold numeral — never a bare "01 / 02" text label, and never for decoration where no real sequence exists.

## Do's and Don'ts

### Do:
- **Do** keep gold reserved for actions and live state; if a section feels like it needs more color, deepen the navy or add whitespace instead of adding more gold.
- **Do** give every heading a gold underline mark or nothing at all — never an uppercase label above it.
- **Do** use `@phosphor-icons/react` (via the thin wrapper components in `components/icons.tsx`) for anything that needs a glyph. Never hand-roll a new icon's SVG path.
- **Do** keep real facts (phone number, free towing, no title needed, founded 2011) as the only trust claims added to hero/CTA copy — never invent a stat or testimonial.

### Don't:
- **Don't** reintroduce an eyebrow/kicker label above any H1 or H2.
- **Don't** use a Unicode checkmark, star, or emoji as a stand-in icon — always the drawn SVG.
- **Don't** add a hard offset (`Npx Npx 0`) shadow or a one-sided colored border accent.
- **Don't** change any route, slug, or the `lib/leadForm.ts` field names/ids — they're wired to the live GoHighLevel CRM integration.
