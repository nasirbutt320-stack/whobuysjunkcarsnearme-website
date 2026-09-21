export type AuthorEntry = {
  slug: string;
  name: string;
};

// Slugs match the live site's author-sitemap.xml exactly.
export const authors: AuthorEntry[] = [
  { slug: "admin", name: "Admin" },
  { slug: "cashforcar39gmail-com", name: "cashforcar39@gmail.com" },
];

export function getAuthor(slug: string): AuthorEntry | undefined {
  return authors.find((a) => a.slug === slug);
}
