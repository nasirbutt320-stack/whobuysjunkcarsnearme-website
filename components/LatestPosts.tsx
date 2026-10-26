import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import { latestPosts } from "@/lib/data/posts";

export default function LatestPosts({ count = 3 }: { count?: number }) {
  const posts = latestPosts(count);
  if (posts.length === 0) return null;

  return (
    <section className="section bg-navy-50/60">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
              Latest From the Blog
            </h2>
            <p className="mt-2 max-w-2xl text-navy-500">
              Straight answers on titles, paperwork, and getting a fair price
              for your junk car.
            </p>
          </div>
          <Link
            href="/category/blog/"
            className="text-sm font-semibold text-gold-600 hover:text-gold-500"
          >
            View all articles
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/${post.slug}/`}
              className="overflow-hidden rounded-2xl border border-navy-100 bg-white shadow-sm transition-shadow hover:shadow-card"
            >
              {post.heroImage && (
                <div className="relative h-40 w-full bg-navy-50">
                  <Image
                    src={post.heroImage}
                    alt={post.heroImageAlt ?? post.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-gold-600">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <h3 className="mt-2 text-lg font-bold text-navy-900">{post.title}</h3>
                <p className="mt-2 text-sm text-navy-500">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
