import Link from "next/link";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import { PostEntry } from "@/lib/data/posts";

export default function CategoryPage({
  category,
  posts,
}: {
  category: string;
  posts: PostEntry[];
}) {
  return (
    <>
      <section className="bg-navy-900 py-14 md:py-20">
        <Container>
          <span className="text-sm font-bold uppercase tracking-wide text-teal-400">
            Category
          </span>
          <h1 className="mt-2 text-3xl font-extrabold capitalize text-white sm:text-4xl">
            {category}
          </h1>
          <p className="mt-3 max-w-xl text-navy-300">
            Articles and updates on selling junk, old, and unwanted vehicles for
            cash.
          </p>
        </Container>
      </section>

      <section className="section bg-white">
        <Container>
          {posts.length === 0 ? (
            <p className="text-navy-500">No posts in this category yet.</p>
          ) : (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/${post.slug}/`}
                  className="rounded-2xl border border-navy-100 p-6 shadow-sm transition-shadow hover:shadow-card"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-teal-600">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h2 className="mt-2 text-xl font-bold text-navy-900">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-navy-500">{post.excerpt}</p>
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
