# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

People who own an unwanted vehicle — junk, old, wrecked, flood-damaged, non-running, or simply no longer wanted — and want to convert it into cash without repairing it, advertising it themselves, or negotiating a private sale. Vehicle types span cars, trucks, vans, SUVs, and fleet/work vehicles, in any condition and with or without a title. Users find the site nationwide, searching for a buyer in their own city/state.

## Product Purpose

A nationwide junk-car buying service. The site's job is to turn a visitor's vehicle details into a cash offer and a scheduled pickup, converting via lead-capture forms present on nearly every page. Success is a completed form submission that lands as a clean, correctly-mapped lead in the company's CRM (GoHighLevel).

## Positioning

Direct buyer, not a classifieds listing or a local-only junkyard: nationwide coverage with local-feeling pickup (a partner network usually reaches a seller within a day or two), free towing always included, and vehicles accepted in "any condition" (non-running, wrecked, flood/fire-damaged, missing parts) with or without a title. Price is based on the vehicle's condition and parts value, not the seller's location.

## Operating Context

Content is organized as ~134 static routes: home, core static pages (we-buy, area-we-serve, about-us, faqs, reviews, gallery, get-quote, contact-us), per-state pages, per-city pages, per-brand pages, blog posts (category pages), and author pages. Every page carries a lead form; `/get-quote/` and `/contact-us/` carry the full form. Forms submit as native DOM `<form>` elements picked up by a GoHighLevel external-tracking script embedded site-wide — GHL auto-maps fields by their `name` attribute, and custom fields only map correctly when `name` is the field's raw GHL field id (not a guessed key). Location/state/brand pages use a deterministic seeded content-variant system so no two pages read identically (this was a recent SEO fix and must survive the redesign).

## Capabilities and Constraints

- **Hard constraint, repeatedly confirmed by the user: every URL slug/route must remain byte-identical to the current site.** This traces back to matching a legacy WordPress site's sitemap 1:1 for reindexing purposes. The redesign must not touch `lib/data/`, `app/[slug]/page.tsx`, `app/category/[slug]/page.tsx`, `app/author/[slug]/page.tsx`, `app/sitemap.ts`, `app/robots.ts`, or `next.config.mjs`.
- **Content/copy must stay factually the same or be improved for tone only (per this session's separate humanizer/stop-slop pass) — no new claims, stats, or invented specifics** (matches the existing "Reviews" page's stated policy against writing fake customer voices).
- Lead-form field set and `name` attributes (`lib/leadForm.ts`) must not change — they are wired to live GHL custom-field ids and any change breaks CRM mapping.
- GoHighLevel external-tracking `<script>` in `app/layout.tsx` must remain present and unmodified.
- FAQPage/Organization JSON-LD (added for SEO) must be preserved.
- Stack: Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 3 — already in place, redesign works within it.

## Brand Commitments

- Business name: "Who Buys Junk Cars Near Me". Phone: 833-922-2277. Founded 2011 (per `lib/site.ts`).
- No existing logo file in the repo (no images at all currently — `public/` has no photo/logo assets; UI currently uses icon placeholders instead of photography).
- User is open to a new logo/wordmark as part of this overhaul (not fixed).
- Prior visual identity was navy/teal; the user has now explicitly approved replacing it (this session's request is a full visual overhaul, superseding an earlier instruction to keep the old design unchanged).
- **Standing visual direction: the familiar "cash for junk cars" category look, executed at full craft/fidelity — not a novel visual world.** Offered a choice between three distinctive custom directions (Instrument Panel gauge-cluster world, Auction House world, Inspection Report world) and the plain category-standard look, the user explicitly chose the category-standard path. Quality bar: top national brands in this category (Peddle, CarBrain, Junk Car Medics) plus cashforcarsflorida.net (already the lead-form reference), and other well-regarded examples in the space. Build to that craft level, played straight, no irony or smuggled quirk.

## Evidence on Hand

- No real customer reviews exist yet — the Reviews page currently states this honestly and must keep doing so; do not fabricate testimonials.
- No real pickup/vehicle photography or team photos exist — Gallery page currently uses icon placeholders for this reason. The user confirmed: do not fabricate real-looking photos or claim generic/AI imagery is real. Illustration, icons, or clearly-generic imagery are fine; real customer/vehicle photos are not available.
- Live GHL integration is real and tested (confirmed via two clean live lead-capture tests with correct custom-field mapping) — this is functioning infrastructure, not a placeholder.

## Product Principles

1. Lead-capture integrity is non-negotiable — every visual change must leave form field names, GHL script, and JSON-LD schema untouched and functioning.
2. URL/slug identity is absolute — this is a redesign of the skin, never of the routes or content structure.
3. Honesty over polish — no fabricated reviews, photos, or claims, even where competitors in this space commonly use them.
4. Nationwide trust at local speed — the design should read as fast, direct, and locally reachable, not like an anonymous national aggregator.
5. Every page is a conversion surface — the redesign is Persuade-mode throughout: the lead form is the product, not a footnote.
