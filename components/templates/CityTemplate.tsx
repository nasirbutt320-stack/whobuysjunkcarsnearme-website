import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
import ContentSection from "@/components/ContentSection";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import AreasServed from "@/components/AreasServed";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";
import { CityEntry } from "@/lib/data/cities";
import { getState } from "@/lib/data/states";
import {
  pick,
  cityHeroIntro,
  cityWhyChoose,
  cityAnyCondition,
  cityNoTitle,
  cityServingArea,
  stateFaqDoesntRun,
  stateFaqTowing,
} from "@/lib/content/variants";

export default function CityTemplate({ city }: { city: CityEntry }) {
  const state = getState(city.stateSlug);
  const stateName = state?.name ?? "your state";

  const faqItems: FaqItem[] = [
    {
      question: `How do I sell my junk car in ${city.name}?`,
      answer:
        "Just contact us with your vehicle's details. We'll give you a free cash offer, schedule a pickup time, and pay you when we collect the vehicle.",
    },
    {
      question: "Do you buy cars that don't run?",
      answer: pick(stateFaqDoesntRun, city.slug, "faq-runs")(),
    },
    {
      question: "Do I have to pay for towing?",
      answer: pick(stateFaqTowing, city.slug, "faq-towing")(),
    },
    {
      question: `Can I sell a junk car without a title in ${stateName}?`,
      answer:
        "In some cases, yes. Reach out and we'll walk you through what documentation you'll need based on your situation.",
    },
    {
      question: "How quickly can my vehicle be picked up?",
      answer:
        "Many vehicles can be picked up the same day or the next business day, depending on your location and schedule.",
    },
  ];

  return (
    <>
      <JsonLd data={faqPageSchema(faqItems)} />

      <PageHero
        badge="Local Car Buyer"
        title={`Sell Your Junk Car in`}
        accent={`${city.name}, ${state?.abbr ?? ""}`}
        intro={<p>{pick(cityHeroIntro, city.slug, "hero")(city.name, stateName)}</p>}
      />

      <ProcessSteps />

      <ContentSection
        eyebrow="Why local sellers choose us"
        title={`Why ${city.name} Drivers Pick a Direct Buyer`}
        paragraphs={pick(cityWhyChoose, city.slug, "why-choose")(city.name)}
        list={[
          "Free, no-obligation quotes",
          "Fast cash offers",
          "Free towing anywhere near " + city.name,
          "We buy running and non-running vehicles",
          "Help with the paperwork",
          "Same-day or next-day pickup in most areas",
        ]}
        listColumns={2}
      />

      <ContentSection
        tone="muted"
        eyebrow="Any condition"
        title="What Counts as a Junk Car?"
        paragraphs={pick(cityAnyCondition, city.slug, "any-condition")()}
      />

      <ContentSection
        eyebrow="Missing paperwork?"
        title="No Title? Reach Out Anyway"
        paragraphs={[pick(cityNoTitle, city.slug, "no-title")(stateName)]}
      />

      <ContentSection
        tone="muted"
        eyebrow="Serving the area"
        title={`Serving Vehicle Owners Across ${city.name}`}
        paragraphs={pick(cityServingArea, city.slug, "serving-area")(city.name)}
      />

      <FaqAccordion
        title={`Frequently Asked Questions: ${city.name}`}
        items={faqItems}
      />

      <AreasServed />
      <CTASection />
    </>
  );
}
