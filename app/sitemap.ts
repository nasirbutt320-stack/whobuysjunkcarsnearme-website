import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { cities } from "@/lib/data/cities";
import { states } from "@/lib/data/states";
import { brands } from "@/lib/data/brands";
import { staticPages } from "@/lib/data/staticPages";
import { posts } from "@/lib/data/posts";
import { authors } from "@/lib/data/authors";

// The real date this templated content (home, static pages, states, cities,
// brands) was last actually edited. Update this when that content changes --
// stamping every deploy with the build time made every page look like it had
// fresh content on every push, which an SEO audit flagged as misleading to
// crawlers. Blog posts and authors already carry their own real dates below.
const CONTENT_LAST_UPDATED = new Date("2026-09-25");

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, lastModified: CONTENT_LAST_UPDATED, priority: 1 },
  ];

  for (const page of staticPages) {
    entries.push({ url: `${site.url}/${page.slug}/`, lastModified: CONTENT_LAST_UPDATED, priority: 0.7 });
  }
  for (const state of states) {
    entries.push({ url: `${site.url}/${state.slug}/`, lastModified: CONTENT_LAST_UPDATED, priority: 0.8 });
  }
  for (const city of cities) {
    entries.push({ url: `${site.url}/${city.slug}/`, lastModified: CONTENT_LAST_UPDATED, priority: 0.7 });
  }
  for (const brand of brands) {
    entries.push({ url: `${site.url}/${brand.slug}/`, lastModified: CONTENT_LAST_UPDATED, priority: 0.7 });
  }
  for (const post of posts) {
    entries.push({
      url: `${site.url}/${post.slug}/`,
      lastModified: new Date(post.date),
      priority: 0.5,
    });
  }
  entries.push(
    { url: `${site.url}/category/blog/`, lastModified: CONTENT_LAST_UPDATED, priority: 0.4 },
    { url: `${site.url}/category/uncategorized/`, lastModified: CONTENT_LAST_UPDATED, priority: 0.3 }
  );
  for (const author of authors) {
    entries.push({ url: `${site.url}/author/${author.slug}/`, lastModified: CONTENT_LAST_UPDATED, priority: 0.3 });
  }

  return entries;
}
