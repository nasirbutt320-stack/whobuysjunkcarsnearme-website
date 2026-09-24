import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
import TrustStats from "@/components/TrustStats";
import ContentSection from "@/components/ContentSection";
import FaqAccordion from "@/components/FaqAccordion";
import AreasServed from "@/components/AreasServed";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Who Buys Junk Cars Near Me? Instant Cash Across the USA",
  description:
    "We buy junk, wrecked, and unwanted cars in any condition. Free towing, a fair cash offer, and same-day pickup available nationwide.",
  alternates: { canonical: "/" },
};

const homeFaqs = [
  {
    question: "Do I need to be present when the tow truck arrives?",
    answer:
      "Not always, but you'll need to provide ID and sign the title or paperwork, so most buyers ask that an authorized person be there.",
  },
  {
    question: "What if my junk car doesn't run at all?",
    answer:
      "That's fine. The majority of vehicles we buy don't run. Tell us what's wrong and we'll factor that into your offer.",
  },
  {
    question: "How fast can I actually get paid?",
    answer:
      "Many sellers get an offer the same day they call and have the vehicle picked up, and paid for, within 24 to 48 hours.",
  },
  {
    question: "Does the car need to be in one piece?",
    answer:
      "No. We buy vehicles that are missing parts, partially dismantled, or damaged. Let us know what's missing so we can plan the right equipment for pickup.",
  },
  {
    question: "Will I owe anything out of pocket?",
    answer:
      "No. Towing, paperwork, and pickup are all included in your offer. There's never a fee to sell your car to us.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqPageSchema(homeFaqs)} />

      <PageHero
        badge="Rated Junk Car Buyer in the USA"
        title="Who Buys Junk Cars"
        accent="Near Me?"
        intro={
          <p>
            That dead sedan in the driveway has been parked long enough that it&apos;s
            basically part of the landscaping. At some point the question stops
            being whether to deal with it and starts being who&apos;ll take it off your
            hands without wasting your afternoon or lowballing you once they show
            up. Our crew doesn&apos;t need the car running, doesn&apos;t need it to look
            good, and usually doesn&apos;t even need the title in hand before quoting a
            number over the phone.
          </p>
        }
      />

      <ProcessSteps />
      <TrustStats />

      <ContentSection
        eyebrow="Why choose us"
        title="The USA's most trusted junk car buyer"
        paragraphs={[
          "We've been buying junk cars from American families for over a decade. Whether your car was in an accident, stopped running, or is simply too old to repair, we want it, and we'll pay you fairly for it.",
          "Unlike local junkyards that scrap-price everything, our nationwide network competes for your vehicle, which is usually why our offer ends up higher than the first quote you get.",
        ]}
        list={[
          "Licensed and insured in all 50 states",
          "Over 250,000 vehicles purchased since 2011",
          "A+ rating from the Better Business Bureau",
          "Responsible, EPA-conscious recycling partners",
        ]}
        listColumns={2}
      />

      <ContentSection
        tone="muted"
        eyebrow="Know your options"
        title="Where people usually start looking"
        paragraphs={[
          "If you've searched for where to sell a junk car and landed on local salvage yard listings, there's a difference worth knowing. A traditional yard typically pays for scrap weight alone, while a dedicated buyer like us also factors in working parts and resale value, which is usually why the offer ends up higher.",
          "So what's your car really worth? A few things drive the number: your car's condition, its mileage, whether the engine and transmission still work, and how in-demand its parts are. A non-running compact with a blown engine is worth less than a similar car with a transmission someone can still use.",
        ]}
      />

      <ContentSection
        eyebrow="Missing paperwork?"
        title="No title? That's not a dealbreaker"
        paragraphs={[
          "Plenty of vehicles outlive their paperwork. Maybe the title was misplaced during a move, or the car was passed down from a relative before the transfer was finished. Either way, selling a car without a title is one of the most common situations we run into, and it's rarely a dead end.",
          "In most states, a valid ID, proof of address, and a notarized bill of sale are enough to get the process moving. Requirements shift by state, so it's worth asking upfront rather than assuming your car can't be sold.",
        ]}
      />

      <ContentSection
        tone="muted"
        eyebrow="Pickup day"
        title="Getting paid, the same day"
        paragraphs={[
          "Once you agree on a price, the next question is usually when someone will actually show up. We offer same-day or next-day pickup in most areas. Our driver brings the tow truck, confirms the vehicle matches what you described, pays you on the spot, and takes care of the paperwork before leaving.",
          "The phone quote and the driveway price should always match. If a buyer drops their number once they see the car in person, that's a red flag worth walking away from.",
        ]}
      />

      <FaqAccordion items={homeFaqs} />
      <AreasServed />
      <CTASection />
    </>
  );
}
