import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
import ContentSection from "@/components/ContentSection";
import FaqAccordion from "@/components/FaqAccordion";
import AreasServed from "@/components/AreasServed";
import CTASection from "@/components/CTASection";
import { CityEntry } from "@/lib/data/cities";
import { getState } from "@/lib/data/states";

export default function CityTemplate({ city }: { city: CityEntry }) {
  const state = getState(city.stateSlug);
  const stateName = state?.name ?? "your state";

  return (
    <>
      <PageHero
        badge="Local Car Buyer"
        title={`Sell Your Junk Car in`}
        accent={`${city.name}, ${state?.abbr ?? ""}`}
        intro={
          <p>
            If your car has been sitting around {city.name} for years, won&apos;t
            start anymore, or just isn&apos;t worth fixing, we can help. We buy cars,
            trucks, SUVs, vans, and other unwanted vehicles across {city.name} and
            the rest of {stateName} — running or not — and we handle pickup for
            free.
          </p>
        }
      />

      <ProcessSteps />

      <ContentSection
        eyebrow="Why local sellers choose us"
        title={`Why ${city.name} Drivers Pick a Direct Buyer`}
        paragraphs={[
          `Every vehicle has some value, even if it doesn't run anymore. Our team looks at the brand, model, age, condition, and which parts are still usable, then gives you a cash offer based on that — no guesswork, no runaround.`,
          `A traditional dealership isn't interested once a car needs real work, because a vehicle that needs repairs just sits on their lot losing them money. That's the gap we fill: we buy for parts, scrap, and recycling, so condition matters a lot less to us than it does to a used car lot.`,
        ]}
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
        paragraphs={[
          `A lot of people hesitate to call because they assume their car isn't junky enough, or that it's too far gone to be worth anything. Neither is usually true. As a junk car buyer, we purchase vehicles in pretty much any condition, including cars that won't start, vehicles with transmission or engine failure, cars from accidents that were never repaired, flood- or fire-damaged vehicles, and cars missing a title.`,
          `If your car falls into any of these categories, you don't need to fix it, clean it, or even move it before calling. We come look at what you actually have.`,
        ]}
      />

      <ContentSection
        eyebrow="Missing paperwork?"
        title="No Title? Reach Out Anyway"
        paragraphs={[
          `A missing title doesn't automatically mean your car has no resale value. Depending on ${stateName}'s requirements and your proof of ownership, there may still be a way to sell it. Tell us your situation, and we'll explain exactly what's needed before we schedule a pickup.`,
        ]}
      />

      <ContentSection
        tone="muted"
        eyebrow="Serving the area"
        title={`Serving Vehicle Owners Across ${city.name}`}
        paragraphs={[
          `Whether you're an individual with a car you don't need, a family with an old vehicle taking up space, or a business with a truck you can no longer use, we're here to help. Wherever you are in or around ${city.name}, our team can arrange a pickup that fits your schedule.`,
          `Our goal is simple: a fair offer, honest service, and a hassle-free experience from start to finish.`,
        ]}
      />

      <FaqAccordion
        title={`Frequently Asked Questions — ${city.name}`}
        items={[
          {
            question: `How do I sell my junk car in ${city.name}?`,
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
            question: `Can I sell a junk car without a title in ${stateName}?`,
            answer:
              "In some cases, yes. Reach out and we'll walk you through what documentation you'll need based on your situation.",
          },
          {
            question: "How quickly can my vehicle be picked up?",
            answer:
              "Many vehicles can be picked up the same day or the next business day, depending on your location and schedule.",
          },
        ]}
      />

      <AreasServed />
      <CTASection />
    </>
  );
}
