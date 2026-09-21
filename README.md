# Who Buys Junk Cars Near Me — Next.js rebuild

A Next.js 16 (App Router + TypeScript + Tailwind CSS, React 19) rebuild of
`whobuysjunkcarsnearme.com`, mobile-first and built from the same slug
structure as the live site's sitemaps (122 URLs: home, 15 city pages, 48
state pages, 46 vehicle-brand pages, 12 core pages, 4 blog posts, and 2
category pages).

## Getting started

You'll need [Node.js](https://nodejs.org) 20.9+ installed (Node.js LTS was
installed and the project built successfully during development).

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

## Project structure

- `app/[slug]/page.tsx` — single dynamic route that renders every
  top-level page (cities, states, brands, blog posts, and the core pages
  like `/about-us/`, `/get-quote/`, etc.), matched against the data files
  in `lib/data/`.
- `app/category/[slug]/page.tsx` — `/category/blog/` and
  `/category/uncategorized/`.
- `app/page.tsx` — the homepage.
- `app/sitemap.ts` / `app/robots.ts` — generates `/sitemap.xml` and
  `/robots.txt` automatically from the same data files (Next.js's
  convention replaces the old multi-file Yoast sitemaps with one combined,
  always-in-sync sitemap).
- `lib/data/` — the source of truth for every city, state, brand, static
  page, and blog post. Add a new city/state/brand by adding one line here;
  the page, its metadata, and its sitemap entry are generated automatically.
- `components/templates/` — the shared page templates used to generate
  every city, state, and brand page from the data above.
- `components/pages/` — one component per core page (About, Contact,
  FAQs, Reviews, Gallery, Get a Quote, Privacy Policy, Terms, etc.).
- `components/` (root) — shared building blocks: header/mobile nav,
  footer, hero, quote forms, FAQ accordion, process steps, CTA band, etc.

## Notes

- All slugs match the live site's `page-sitemap.xml` / `post-sitemap.xml`
  exactly (including quirks like `/alabamaakron/` and `/ram-trucks/` vs.
  `/ram/` both existing), with `trailingSlash: true` in `next.config.mjs`
  so URLs resolve the same way (e.g. `/toyota/`).
- Content on the city/state/brand pages is original copy written for this
  rebuild (not scraped from the live site) using the same information
  architecture — hero, 4-step process, "why choose us," conditions
  accepted, no-title guidance, FAQ, coverage map, and CTA — so every page
  is unique, on-topic, and easy to extend.
- Every quote form on the site (the compact hero widget on every page via
  `components/QuoteForm.tsx`, and the full form on `/get-quote/` and
  `/contact-us/` via `components/GetQuoteForm.tsx`) uses the same field
  set and `name` attributes, defined once in `lib/leadForm.ts`:
  `full_name`, `email`, `phone`, `postal_code`, `has_title`,
  `runs_and_drives`, `vehicle_details`. That's intentional — it means one
  CRM webhook/integration can handle a lead from any page on the site
  without per-page field mapping. Forms are fully client-side for now
  (validation + a success state); point `handleSubmit` in both components
  at your CRM's endpoint (e.g. a GoHighLevel/webhook URL) to go live.
- Update the phone number, business details, and legal copy in
  `lib/site.ts` and `components/pages/PrivacyPolicyPage.tsx` /
  `TermsOfServicePage.tsx` before launch.
