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
import { StateEntry } from "@/lib/data/states";
import { citiesForState } from "@/lib/data/cities";
import { countiesForState } from "@/lib/data/counties";
import { MapPinIcon } from "@/components/icons";
import {
  pick,
  stateRegion,
  stateHeroIntro,
  stateWhyChooseUsIntro,
  stateAnyCondition,
  stateNoTitle,
  stateWhySellDirect,
  stateFaqDoesntRun,
  stateFaqTowing,
  stateFaqOffer,
} from "@/lib/content/variants";

export default function StateTemplate({ state }: { state: StateEntry }) {
  const cities = citiesForState(state.slug);
  const counties = countiesForState(state.slug);
  const region = stateRegion[state.slug] ?? "the United States";

  const faqItems: FaqItem[] = [
    {
      question: `How do I sell my junk car in ${state.name}?`,
      answer:
        "Just contact us with your vehicle's details. We'll give you a free cash offer, schedule a pickup time, and pay you when we collect the vehicle.",
    },
    {
      question: "Do you buy cars that don't run?",
      answer: pick(stateFaqDoesntRun, state.slug, "faq-runs")(),
    },
    {
      question: "Do I have to pay for towing?",
      answer: pick(stateFaqTowing, state.slug, "faq-towing")(),
    },
    {
      question: `Can I sell a junk car without a title in ${state.name}?`,
      answer:
        "In some cases, yes. Reach out and we'll walk you through what documentation you'll need based on your situation.",
    },
    {
      question: "How is my cash offer determined?",
      answer: pick(stateFaqOffer, state.slug, "faq-offer")(),
    },
  ];

  const breadcrumbItems = [
    { name: "Home", url: `${site.url}/` },
    { name: state.name, url: `${site.url}/${state.slug}/` },
  ];

  return (
    <>
      <JsonLd data={faqPageSchema(faqItems)} />
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />

      <PageHero
        badge="Same-Day Cash For Junk Cars"
        title="Sell Your Junk Car in"
        accent={state.name}
        intro={<p>{pick(stateHeroIntro, state.slug, "hero")(state.name)}</p>}
      />

      <ProcessSteps />

      <ContentSection
        eyebrow="Why people choose us"
        title="Why People Choose Us"
        paragraphs={[pick(stateWhyChooseUsIntro, state.slug, "why-us")()]}
        list={[
          "Free, no-obligation quotes",
          "Fast cash offers",
          `Free towing anywhere in ${state.name}`,
          "We buy both running and non-running vehicles",
          "Friendly, straightforward service",
          "Same-day or next-day pickup in most areas",
        ]}
        listColumns={2}
      >
        <p className="prose-body mt-4">
          {state.name} sits in {region}. Wherever you are in the state, our
          pickup network reaches you the same way it reaches everyone else.
        </p>
      </ContentSection>

      {cities.length > 0 && (
        <section className="section bg-navy-50/60">
          <Container>
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
              Cities We Serve in {state.name}
            </h2>
            <p className="mt-3 max-w-2xl text-navy-500">
              We have dedicated local pages for the towns below. Pick yours for
              details specific to your area, or just request a quote and we&apos;ll
              take it from there.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${city.slug}/`}
                  className="flex items-center gap-2 rounded-xl border border-navy-100 bg-white px-4 py-3 text-sm font-semibold text-navy-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold-400 hover:text-gold-600 hover:shadow-card"
                >
                  <MapPinIcon className="h-4 w-4 text-gold-500" />
                  {city.name}
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {counties.length > 0 && (
        <section className={`section ${cities.length > 0 ? "bg-white" : "bg-navy-50/60"}`}>
          <Container>
            <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
              Counties We Serve in {state.name}
            </h2>
            <p className="mt-3 max-w-2xl text-navy-500">
              We have dedicated pages for the counties below. Pick yours for
              details specific to your area, or just request a quote and we&apos;ll
              take it from there.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {counties.map((county) => (
                <Link
                  key={county.slug}
                  href={`/${county.slug}/`}
                  className="flex items-center gap-2 rounded-xl border border-navy-100 bg-white px-4 py-3 text-sm font-semibold text-navy-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold-400 hover:text-gold-600 hover:shadow-card"
                >
                  <MapPinIcon className="h-4 w-4 text-gold-500" />
                  {county.name}
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <ContentSection
        tone={cities.length > 0 || counties.length > 0 ? "light" : "muted"}
        eyebrow="Any condition"
        title="We Buy Vehicles in Any Condition"
        paragraphs={pick(stateAnyCondition, state.slug, "any-condition")(state.name)}
      />

      <ContentSection
        eyebrow="Missing paperwork?"
        title="No Title? Reach Out Anyway"
        paragraphs={[pick(stateNoTitle, state.slug, "no-title")(state.name)]}
      />

      <ContentSection
        tone="muted"
        eyebrow="Direct buyer advantage"
        title="Why Sell Directly to Us Instead of a Junkyard"
        paragraphs={[pick(stateWhySellDirect, state.slug, "direct-vs-junkyard")()]}
      />

      <FaqAccordion
        title={`Frequently Asked Questions: ${state.name}`}
        items={faqItems}
      />

      <AreasServed />
      <CTASection />
    </>
  );
}
