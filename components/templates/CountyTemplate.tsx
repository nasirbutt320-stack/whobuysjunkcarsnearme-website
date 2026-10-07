import Link from "next/link";
import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
import ContentSection from "@/components/ContentSection";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import AreasServed from "@/components/AreasServed";
import CTASection from "@/components/CTASection";
import Container from "@/components/Container";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { CountyEntry } from "@/lib/data/counties";
import { getState } from "@/lib/data/states";
import { MapPinIcon } from "@/components/icons";
import {
  pick,
  countyHeroIntro,
  countyWhyChoose,
  countyAnyCondition,
  countyNoTitle,
  countyServingArea,
  stateFaqDoesntRun,
  stateFaqTowing,
} from "@/lib/content/variants";

function joinList(items: string[]) {
  if (items.length <= 2) return items.join(" and ");
  return `${items.slice(0, -1).join(", ")}, and ${items[items.length - 1]}`;
}

export default function CountyTemplate({ county }: { county: CountyEntry }) {
  const state = getState(county.stateSlug);
  const stateName = state?.name ?? "your state";
  const places = county.places ?? [];
  const variantKey = county.variantSalt ?? county.slug;

  const faqItems: FaqItem[] = [
    {
      question: `How do I sell my junk car in ${county.name}?`,
      answer:
        "Just contact us with your vehicle's details. We'll give you a free cash offer, schedule a pickup time, and pay you when we collect the vehicle.",
    },
    {
      question: "Do you buy cars that don't run?",
      answer: pick(stateFaqDoesntRun, variantKey, "faq-runs")(),
    },
    {
      question: "Do I have to pay for towing?",
      answer: pick(stateFaqTowing, variantKey, "faq-towing")(),
    },
    {
      question: `Can I sell a junk car without a title in ${stateName}?`,
      answer:
        "In some cases, yes. Reach out and we'll walk you through what documentation you'll need based on your situation.",
    },
    {
      question: `Do you cover all of ${county.name}, or just ${county.seat}?`,
      answer: `All of it. ${county.seat} is where we're most active, but pickup is free anywhere in the county.`,
    },
    ...(places.length
      ? [
          {
            question: `Which cities in ${county.name} do you pick up from?`,
            answer: `Anywhere in the county, including ${joinList(places)}. If your town isn't on that list, it's still covered.`,
          },
        ]
      : []),
  ];

  const breadcrumbItems = [
    { name: "Home", url: `${site.url}/` },
    ...(state ? [{ name: state.name, url: `${site.url}/${state.slug}/` }] : []),
    { name: county.name, url: `${site.url}/${county.slug}/` },
  ];

  return (
    <>
      <JsonLd data={faqPageSchema(faqItems)} />
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />

      <PageHero
        title="Sell Your Junk Car in"
        accent={`${county.name}, ${state?.abbr ?? ""}`}
        intro={<p>{pick(countyHeroIntro, variantKey, "hero")(county.name)}</p>}
      />

      <ProcessSteps />

      <ContentSection
        eyebrow="Why local sellers choose us"
        title={`Why ${county.name} Drivers Pick a Direct Buyer`}
        paragraphs={pick(countyWhyChoose, variantKey, "why-choose")(county.seat)}
        list={[
          "Free, no-obligation quotes",
          "Fast cash offers",
          `Free towing anywhere in ${county.name}`,
          "We buy running and non-running vehicles",
          "Help with the paperwork",
          "Same-day or next-day pickup in most areas",
        ]}
        listColumns={2}
      >
        <p className="prose-body mt-4">
          {county.name}&apos;s county seat is {county.seat}, and that&apos;s where our
          pickup network is most active, but we cover every part of the
          county the same way.
        </p>
      </ContentSection>

      <ContentSection
        tone="muted"
        eyebrow="Any condition"
        title="What Counts as a Junk Car?"
        paragraphs={pick(countyAnyCondition, variantKey, "any-condition")()}
      />

      <ContentSection
        eyebrow="Missing paperwork?"
        title="No Title? Reach Out Anyway"
        paragraphs={[pick(countyNoTitle, variantKey, "no-title")(stateName)]}
      />

      <ContentSection
        tone="muted"
        eyebrow="Serving the area"
        title={`Serving Vehicle Owners Across ${county.name}`}
        paragraphs={pick(countyServingArea, variantKey, "serving-area")(county.name)}
      />

      {places.length > 0 && (
        <ContentSection
          eyebrow="Where we pick up"
          title={`Cities and Towns We Serve in ${county.name}`}
          paragraphs={[
            `Our drivers regularly pick up vehicles in ${joinList(places)}, along with the neighborhoods and unincorporated areas between them.`,
            ...(county.localNote ? [county.localNote] : []),
          ]}
        />
      )}

      {state && (
        <section className="section bg-white">
          <Container>
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
              More of {state.name}
            </h2>
            <p className="mt-3 max-w-2xl text-navy-500">
              Looking for the state-wide page instead, or a specific city?
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/${state.slug}/`}
                className="flex items-center gap-2 rounded-xl border border-navy-100 bg-white px-4 py-3 text-sm font-semibold text-navy-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold-400 hover:text-gold-600 hover:shadow-card"
              >
                <MapPinIcon className="h-4 w-4 text-gold-500" />
                All of {state.name}
              </Link>
            </div>
          </Container>
        </section>
      )}

      <FaqAccordion
        title={`Frequently Asked Questions: ${county.name}`}
        items={faqItems}
      />

      <AreasServed />
      <CTASection />
    </>
  );
}
