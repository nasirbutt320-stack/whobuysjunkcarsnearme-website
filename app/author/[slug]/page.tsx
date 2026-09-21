import type { Metadata } from "next";
import { notFound } from "next/navigation";
import AuthorPage from "@/components/pages/AuthorPage";
import { authors, getAuthor } from "@/lib/data/authors";
import { postsForAuthor, PostEntry } from "@/lib/data/posts";

export function generateStaticParams() {
  return authors.map((a) => ({ slug: a.slug }));
}

type AuthorParams = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: AuthorParams;
}): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) return {};

  return {
    title: { absolute: `${author.name}, Author at Who Buys Junk Cars Near Me` },
    description: `Posts published by ${author.name} on selling junk, old, and unwanted vehicles for cash.`,
    alternates: { canonical: `/author/${slug}/` },
  };
}

export default async function AuthorSlugPage({
  params,
}: {
  params: AuthorParams;
}) {
  const { slug } = await params;
  const author = getAuthor(slug);
  if (!author) notFound();

  const posts = postsForAuthor(slug as PostEntry["author"]);
  return <AuthorPage author={author} posts={posts} />;
}
