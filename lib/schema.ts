import { site } from "@/lib/site";
import type { FaqItem } from "@/components/FaqAccordion";
import type { PostEntry } from "@/lib/data/posts";
import { getAuthor } from "@/lib/data/authors";

export function faqPageSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutomotiveBusiness",
    name: site.name,
    url: site.url,
    telephone: site.phone,
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    description:
      "We buy junk, wrecked, and unwanted cars in any condition. Free towing, a fair cash offer, and same-day pickup available nationwide.",
  };
}

export function blogPostingSchema(post: PostEntry) {
  const author = getAuthor(post.author);

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: author?.name ?? site.name,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${site.url}/${post.slug}/`,
    },
    ...(post.heroImage && { image: `${site.url}${post.heroImage}` }),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
