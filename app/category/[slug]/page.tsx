import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CategoryPage from "@/components/pages/CategoryPage";
import { postsForCategory } from "@/lib/data/posts";

const categories = ["blog", "uncategorized"] as const;

export function generateStaticParams() {
  return categories.map((slug) => ({ slug }));
}

type CategoryParams = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: CategoryParams;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!categories.includes(slug as (typeof categories)[number])) return {};

  return {
    title: { absolute: `${slug[0].toUpperCase()}${slug.slice(1)} Archives - Who Buys Junk Cars Near Me` },
    description: `Articles filed under ${slug} on selling junk, old, and unwanted vehicles for cash.`,
    alternates: { canonical: `/category/${slug}/` },
  };
}

export default async function CategorySlugPage({
  params,
}: {
  params: CategoryParams;
}) {
  const { slug } = await params;
  if (!categories.includes(slug as (typeof categories)[number])) notFound();

  const posts = postsForCategory(slug as (typeof categories)[number]);
  return <CategoryPage category={slug} posts={posts} />;
}
