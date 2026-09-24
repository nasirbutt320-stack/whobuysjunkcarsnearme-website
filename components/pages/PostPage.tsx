import Link from "next/link";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import { PostEntry } from "@/lib/data/posts";

export default function PostPage({ post }: { post: PostEntry }) {
  const date = new Date(post.date);

  return (
    <>
      <section className="bg-navy-900 py-14 md:py-20">
        <Container className="max-w-3xl">
          <Link
            href={`/category/${post.category}/`}
            className="text-sm font-semibold uppercase tracking-wide text-gold-400"
          >
            {post.category}
          </Link>
          <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            {post.title}
          </h1>
          <p className="mt-3 text-sm text-navy-300">
            {date.toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </Container>
      </section>

      <section className="section bg-white">
        <Container className="max-w-3xl">
          <div className="prose-body text-[1.05rem]">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-navy-100 bg-navy-50/60 p-6">
            <p className="text-sm text-navy-500">
              Ready to sell your own vehicle?{" "}
              <Link href="/get-quote/" className="font-semibold text-gold-600">
                Get a free cash offer
              </Link>{" "}
              in minutes.
            </p>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
