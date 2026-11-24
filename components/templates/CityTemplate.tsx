import Link from "next/link";
import Container from "@/components/Container";
import { MapPinIcon } from "@/components/icons";
import { countiesForCity } from "@/lib/data/areaLinks";
import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
import ContentSection from "@/components/ContentSection";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import AreasServed from "@/components/AreasServed";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import { site } from "@/lib/site";
import { CityEntry } from "@/lib/data/cities";
import { getState } from "@/lib/data/states";
import {
  pick,
  cityHeroIntro,
  cityWhyChoose,
  cityAnyCondition,
  cityNoTitle,
  cityServingArea,
  cityFact,
  stateFaqDoesntRun,
  stateFaqTowing,
} from "@/lib/content/variants";

export default function CityTemplate({ city }: { city: CityEntry }) {
  const state = getState(city.stateSlug);
  const variantKey = city.variantSalt ?? city.slug;
  const stateName = state?.name ?? "your state";
  const fact = cityFact[city.slug];

  const faqItems: FaqItem[] = [
    {
      question: `How do I sell my junk car in ${city.name}?`,
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
      question: "How quickly can my vehicle be picked up?",
      answer:
        "Many vehicles can be picked up the same day or the next business day, depending on your location and schedule.",
    },
  ];

  const breadcrumbItems = [
    { name: "Home", url: `${site.url}/` },
    ...(state ? [{ name: state.name, url: `${site.url}/${state.slug}/` }] : []),
    { name: city.name, url: `${site.url}/${city.slug}/` },
  ];

  return (
    <>
      <JsonLd data={faqPageSchema(faqItems)} />
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />

      <PageHero
        badge="Local Car Buyer"
        title={`Sell Your Junk Car in`}
        accent={`${city.name}, ${state?.abbr ?? ""}`}
        intro={<p>{pick(cityHeroIntro, variantKey, "hero")(city.name, stateName)}</p>}
      />

      <ProcessSteps />

      <ContentSection
        eyebrow="Why local sellers choose us"
        title={`Why ${city.name} Drivers Pick a Direct Buyer`}
        paragraphs={pick(cityWhyChoose, variantKey, "why-choose")(city.name)}
        list={[
          "Free, no-obligation quotes",
          "Fast cash offers",
          "Free towing anywhere near " + city.name,
          "We buy running and non-running vehicles",
          "Help with the paperwork",
          "Same-day or next-day pickup in most areas",
        ]}
        listColumns={2}
      >
        {fact && <p className="prose-body mt-4">{fact}</p>}
      </ContentSection>

      <ContentSection
        tone="muted"
        eyebrow="Any condition"
        title="What Counts as a Junk Car?"
        paragraphs={pick(cityAnyCondition, variantKey, "any-condition")()}
      />

      <ContentSection
        eyebrow="Missing paperwork?"
        title="No Title? Reach Out Anyway"
        paragraphs={[pick(cityNoTitle, variantKey, "no-title")(stateName)]}
      />

      <ContentSection
        tone="muted"
        eyebrow="Serving the area"
        title={`Serving Vehicle Owners Across ${city.name}`}
        paragraphs={pick(cityServingArea, variantKey, "serving-area")(city.name)}
      />

      <FaqAccordion
        title={`Frequently Asked Questions: ${city.name}`}
        items={faqItems}
      />

      {state && (
        <section className="section bg-white">
          <Container>
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
              More of {state.name}
            </h2>
            <p className="mt-3 max-w-2xl text-navy-500">
              Our pickup area covers more than {city.name}. See the wider region or the state page.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/${state.slug}/`}
                className="flex items-center gap-2 rounded-xl border border-navy-100 bg-white px-4 py-3 text-sm font-semibold text-navy-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold-400 hover:text-gold-600 hover:shadow-card"
              >
                <MapPinIcon className="h-4 w-4 text-gold-500" />
                All of {state.name}
              </Link>
              {countiesForCity(city).map((co) => (
                <Link
                  key={co.slug}
                  href={`/${co.slug}/`}
                  className="flex items-center gap-2 rounded-xl border border-navy-100 bg-white px-4 py-3 text-sm font-semibold text-navy-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold-400 hover:text-gold-600 hover:shadow-card"
                >
                  <MapPinIcon className="h-4 w-4 text-gold-500" />
                  {co.name}
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <AreasServed />
      <CTASection />
    </>
  );
}
