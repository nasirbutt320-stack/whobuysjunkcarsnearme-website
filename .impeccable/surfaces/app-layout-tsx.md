---
version: 1
slug: "app-layout-tsx"
primary_target: "app/layout.tsx"
related_targets: ["tailwind.config.ts","app/globals.css"]
---

## Direction contract

THESIS: The site should read as the most polished, most trustworthy national junk-car buyer a skeptical seller could find — refusing the cheap "template site" arrangement (thin nav, no trust signals above the fold, stock car+dollar clipart, unstyled system font) that most small competitors in this category ship. Standing exit taken: familiar category look, played straight, at the craft level of Peddle / CarBrain / Junk Car Medics / cashforcarsflorida.net, not a novel visual world.

OWN-WORLD: Deep navy (#0b1734 scale, unchanged from incumbent) as the trust anchor; a single warm gold/amber accent (#f59e0b scale, replacing the old teal) reserved for CTAs, live-state icons, and small underline accents; warm white/neutral backgrounds. Space Grotesk (bold, confident, real webfont via next/font) for all headings and the wordmark; Inter for body. Rounded-2xl cards with soft layered shadow (shadow-card), pill buttons with a real offset+blur shadow in the accent color, numbered-circle step sequences instead of icon-card grids, no eyebrow/kicker labels anywhere.

STORY: A visitor with an unwanted vehicle lands, immediately reads the offer promise plus a compact real-fact trust row (any condition / no title needed / free towing), fills the short hero form or the full form on Get a Quote, and feels this is a careful, real company — consistent polish, real type, a real (not fabricated) reviews policy — rather than a fly-by-night scraper site.

FIRST VIEWPORT: A slim navy announcement strip (phone + free-towing line) above a sticky white header (logo, nav, phone + quote CTA). Below: two-column navy hero with ambient gold glow — left: bold stacked headline with one gold-highlighted word, intro paragraph, three-item real-fact trust row with check icons, primary (gold pill) + secondary (outline) CTA, phone line; right: the compact lead form in an elevated white card. Both halves rise in on load (single authored entrance moment, exponential ease-out, reduced-motion safe).

FORM: Standing exit / category-canon path, chosen by the user over three custom directions (Instrument Panel gauge-cluster, Auction House, Inspection Report) offered via concept-seed. Seed key edf7624c, assigned index 5 (Auto Auction world) — not built, since the user took the canon path instead.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
