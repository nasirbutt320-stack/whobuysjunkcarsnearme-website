import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { cities } from "@/lib/data/cities";
import { states } from "@/lib/data/states";
import { brands } from "@/lib/data/brands";
import { staticPages } from "@/lib/data/staticPages";
import { posts } from "@/lib/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [
    { url: `${site.url}/`, lastModified: now, priority: 1 },
  ];

  for (const page of staticPages) {
    entries.push({ url: `${site.url}/${page.slug}/`, lastModified: now, priority: 0.7 });
  }
  for (const state of states) {
    entries.push({ url: `${site.url}/${state.slug}/`, lastModified: now, priority: 0.8 });
  }
  for (const city of cities) {
    entries.push({ url: `${site.url}/${city.slug}/`, lastModified: now, priority: 0.7 });
  }
  for (const brand of brands) {
    entries.push({ url: `${site.url}/${brand.slug}/`, lastModified: now, priority: 0.7 });
  }
  for (const post of posts) {
    entries.push({
      url: `${site.url}/${post.slug}/`,
      lastModified: new Date(post.date),
      priority: 0.5,
    });
  }
  entries.push(
    { url: `${site.url}/category/blog/`, lastModified: now, priority: 0.4 },
    { url: `${site.url}/category/uncategorized/`, lastModified: now, priority: 0.3 }
  );

  return entries;
}
