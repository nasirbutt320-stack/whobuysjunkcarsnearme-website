import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { PostEntry } from "@/lib/data/posts";
import { blogPostingSchema } from "@/lib/schema";

export default function PostPage({ post }: { post: PostEntry }) {
  const date = new Date(post.date);

  return (
    <>
      <JsonLd data={blogPostingSchema(post)} />

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
          {post.heroImage && (
            <div className="relative mb-10 h-64 w-full overflow-hidden rounded-2xl bg-navy-50 sm:h-80">
              <Image
                src={post.heroImage}
                alt={post.heroImageAlt ?? post.title}
                fill
                priority
                sizes="(min-width: 768px) 768px, 100vw"
                className="object-cover"
              />
            </div>
          )}

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
