import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
import ContentSection from "@/components/ContentSection";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import AreasServed from "@/components/AreasServed";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";
import { BrandEntry } from "@/lib/data/brands";
import {
  pick,
  brandFact,
  brandIntro,
  brandFairPricing,
  brandCommonIssues,
  brandDirectVsJunkyard,
  brandFaqTitle,
  brandFaqTowing,
} from "@/lib/content/variants";

export default function BrandTemplate({ brand }: { brand: BrandEntry }) {
  const mechanicalTerm = brand.ev ? "battery pack or drive unit" : "engine or transmission";
  const conditionTerm = brand.ev
    ? "battery degradation, charging faults, or drivetrain issues"
    : "engine trouble, transmission failure, or electrical issues";
  const fact = brandFact[brand.slug];

  const faqItems: FaqItem[] = [
    {
      question: `Do you buy ${brand.name} vehicles that don't run?`,
      answer:
        "Yes. Running condition doesn't determine whether we're interested. We regularly buy non-running vehicles in almost any condition.",
    },
    {
      question: "Do I need the title to sell?",
      answer: pick(brandFaqTitle, brand.slug, "faq-title")(),
    },
    {
      question: "How is my cash offer calculated?",
      answer: `We look at your ${brand.name}'s year, model, mileage, condition, and current resale or scrap value for its parts to arrive at a fair, no-lowball number.`,
    },
    {
      question: "Is towing really free?",
      answer: pick(brandFaqTowing, brand.slug, "faq-towing")(),
    },
  ];

  return (
    <>
      <JsonLd data={faqPageSchema(faqItems)} />

      <PageHero
        badge="Any Year, Any Condition"
        title="Sell Your"
        accent={`${brand.name} for Cash`}
        intro={<p>{pick(brandIntro, brand.slug, "hero")(brand.name, mechanicalTerm)}</p>}
      />

      <ProcessSteps title={`How We Buy Your ${brand.name} for Cash`} />

      <ContentSection
        eyebrow={`Why ${brand.name} owners choose us`}
        title="Fair Pricing, Every Time"
        paragraphs={pick(brandFairPricing, brand.slug, "fair-pricing")(brand.name)}
        list={[
          "Cash, check, or bank transfer, your choice",
          "Free towing in all 50 states",
          "We handle title transfer and paperwork",
          `We buy ${brand.name} cars, trucks, and SUVs alike`,
        ]}
        listColumns={2}
      >
        {fact && <p className="prose-body mt-4">{fact}</p>}
      </ContentSection>

      <ContentSection
        tone="muted"
        eyebrow="What we look at"
        title={`Common ${brand.name} Issues We Buy`}
        paragraphs={[pick(brandCommonIssues, brand.slug, "common-issues")(brand.name, conditionTerm)]}
      />

      <ContentSection
        eyebrow={`${brand.name} junk yards vs. a direct buyer`}
        title="Why Direct Selling Usually Wins"
        paragraphs={[pick(brandDirectVsJunkyard, brand.slug, "direct-vs-junkyard")(brand.name)]}
      />

      <FaqAccordion
        title={`Frequently Asked Questions: Selling a ${brand.name}`}
        items={faqItems}
      />

      <AreasServed />
      <CTASection title={`Ready to turn your ${brand.name} into cash?`} />
    </>
  );
}
