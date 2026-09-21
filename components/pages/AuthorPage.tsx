import Link from "next/link";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import { AuthorEntry } from "@/lib/data/authors";
import { PostEntry } from "@/lib/data/posts";

export default function AuthorPage({
  author,
  posts,
}: {
  author: AuthorEntry;
  posts: PostEntry[];
}) {
  return (
    <>
      <section className="bg-ink-900 py-14 md:py-20">
        <Container>
          <span className="text-sm font-bold uppercase tracking-wide text-hazard-400">
            Author
          </span>
          <h1 className="mt-2 font-display text-3xl uppercase tracking-wide text-white sm:text-4xl">
            {author.name}
          </h1>
          <p className="mt-3 max-w-xl text-ink-300">
            Posts published by {author.name} on selling junk, old, and unwanted
            vehicles for cash.
          </p>
        </Container>
      </section>

      <section className="section bg-white">
        <Container>
          {posts.length === 0 ? (
            <p className="text-ink-500">No posts from this author yet.</p>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/${post.slug}/`}
                  className="rounded-2xl border border-ink-100 p-6 shadow-sm transition-shadow hover:shadow-card"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-hazard-600">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-ink-900">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-ink-500">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </section>

      <CTASection />
    </>
  );
}
