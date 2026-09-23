import { site } from "@/lib/site";
import type { FaqItem } from "@/components/FaqAccordion";

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
    "@type": "AutoWreckingService",
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

export function localBusinessSchema(params: {
  name: string;
  description: string;
  areaServed: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "AutoWreckingService",
    name: site.name,
    url: params.url,
    telephone: site.phone,
    description: params.description,
    areaServed: {
      "@type": params.areaServed.length > 2 ? "AdministrativeArea" : "State",
      name: params.areaServed,
    },
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
