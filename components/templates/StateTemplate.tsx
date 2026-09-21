import Link from "next/link";
import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
import ContentSection from "@/components/ContentSection";
import FaqAccordion from "@/components/FaqAccordion";
import AreasServed from "@/components/AreasServed";
import CTASection from "@/components/CTASection";
import Container from "@/components/Container";
import { StateEntry } from "@/lib/data/states";
import { citiesForState } from "@/lib/data/cities";
import { MapPinIcon } from "@/components/icons";

export default function StateTemplate({ state }: { state: StateEntry }) {
  const cities = citiesForState(state.slug);

  return (
    <>
      <PageHero
        badge="Same-Day Cash For Junk Cars"
        title="Sell Your Junk Car in"
        accent={state.name}
        intro={
          <p>
            If your car has been sitting in the driveway for years, won&apos;t start
            anymore, or just isn&apos;t worth fixing, we can help. We buy cars, trucks,
            SUVs, vans, and other unwanted vehicles across {state.name}, running or
            not, and we handle the pickup for free.
          </p>
        }
      />

      <ProcessSteps />

      <ContentSection
        eyebrow="Why people choose us"
        title="Why People Choose Us"
        paragraphs={[
          "Every vehicle has some value, even if it doesn't run anymore. Our team looks at the brand, model, age, condition, and which parts are still usable, then gives you a cash offer based on that.",
        ]}
        list={[
          "Free, no-obligation quotes",
          "Fast cash offers",
          `Free towing anywhere in ${state.name}`,
          "We buy both running and non-running vehicles",
          "Friendly, straightforward service",
          "Same-day or next-day pickup in most areas",
        ]}
        listColumns={2}
      />

      {cities.length > 0 && (
        <section className="section bg-paper-100">
          <Container>
            <h2 className="font-display text-2xl uppercase tracking-wide text-ink-900 sm:text-3xl">
              Cities We Serve in {state.name}
            </h2>
            <p className="mt-3 max-w-2xl text-ink-500">
              We have dedicated local pages for the towns below — pick yours for
              details specific to your area, or just request a quote and we&apos;ll
              take it from there.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${city.slug}/`}
                  className="flex items-center gap-2 rounded-md border-2 border-ink-900 bg-white px-4 py-3 text-sm font-bold text-ink-800 shadow-sticker-sm transition-all hover:-translate-y-0.5 hover:bg-hazard-50"
                >
                  <MapPinIcon className="h-4 w-4 text-rust-600" />
                  {city.name}
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <ContentSection
        tone={cities.length > 0 ? "light" : "muted"}
        eyebrow="Any condition"
        title="We Buy Vehicles in Any Condition"
        paragraphs={[
          "No matter the shape your vehicle is in, we're interested. That includes junk cars, trucks, SUVs, and vans; crossovers and commercial vehicles; flood, fire, or accident-damaged vehicles; cars with engine or transmission problems; and vehicles that have been sitting unused for years.",
          "Even cars with major damage often have value in their parts and materials, so it's worth reaching out before assuming your vehicle isn't worth anything.",
        ]}
      />

      <ContentSection
        eyebrow="Missing paperwork?"
        title="No Title? Reach Out Anyway"
        paragraphs={[
          `A missing title doesn't automatically mean your car has no resale value. Depending on ${state.name}'s requirements and your proof of ownership, there may still be a way to sell it. Tell us your situation, and we'll explain exactly what's needed before we schedule a pickup.`,
        ]}
      />

      <ContentSection
        tone="muted"
        eyebrow="Direct buyer advantage"
        title="Why Sell Directly to Us Instead of a Junkyard"
        paragraphs={[
          "Taking a car to a junkyard yourself usually means arranging transport, doing paperwork, and often getting a lower offer. Selling directly to us means no towing costs, no waiting around for a private buyer, no advertising or listing fees, and fast payment handled on pickup day.",
        ]}
      />

      <FaqAccordion
        title={`Frequently Asked Questions — ${state.name}`}
        items={[
          {
            question: `How do I sell my junk car in ${state.name}?`,
            answer:
              "Just contact us with your vehicle's details. We'll give you a free cash offer, schedule a pickup time, and pay you when we collect the vehicle.",
          },
          {
            question: "Do you buy cars that don't run?",
            answer:
              "Yes. We purchase both running and non-running vehicles in almost any condition.",
          },
          {
            question: "Do I have to pay for towing?",
            answer: "No. Towing is always free when you sell your vehicle to us.",
          },
          {
            question: `Can I sell a junk car without a title in ${state.name}?`,
            answer:
              "In some cases, yes. Reach out and we'll walk you through what documentation you'll need based on your situation.",
          },
          {
            question: "How is my cash offer determined?",
            answer:
              "We look at your vehicle's year, make, model, condition, current market value, and any usable or recyclable parts to give you a fair price.",
          },
        ]}
      />

      <AreasServed />
      <CTASection />
    </>
  );
}
