import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
import ContentSection from "@/components/ContentSection";
import BrandsGrid from "@/components/BrandsGrid";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";

const weBuyFaqs: FaqItem[] = [
  {
    question: "Do you buy all makes and models?",
    answer:
      "Yes. We consider vehicles from nearly every manufacturer, from economy cars to luxury and exotic brands.",
  },
  {
    question: "Do you buy newer used vehicles too?",
    answer:
      "Yes — a vehicle doesn't need to be extremely old. We review newer cars with accident damage, mechanical problems, or title issues as well.",
  },
  {
    question: "What if my car doesn't run?",
    answer:
      "That's fine. A car may still be considered if it has a dead battery, failed engine, bad transmission, or electrical problem.",
  },
];

export default function WeBuyPage() {
  return (
    <>
      <JsonLd data={faqPageSchema(weBuyFaqs)} />

      <PageHero
        badge="Every Make, Every Model"
        title="Sell Your Car With"
        accent="Confidence"
        intro={
          <p>
            At Who Buys Junk Cars Near Me, we buy cars of all makes and models,
            regardless of age or condition. Whether your vehicle still runs, needs
            major repairs, or has been sitting unused for years, our simple process
            gets you a cash offer without private-sale negotiations or expensive
            repairs.
          </p>
        }
      />

      <ProcessSteps />

      <ContentSection
        eyebrow="Any condition"
        title="We Buy Cars in Many Conditions"
        paragraphs={[
          "Your vehicle doesn't need to be perfect to have value. We consider non-running cars with dead batteries, engine trouble, or transmission problems; damaged and wrecked cars with accident or body damage; high-mileage cars where the parts and materials still matter; older, unwanted cars taking up space; and salvage-title vehicles.",
        ]}
        list={[
          "Old or unwanted vehicles",
          "Damaged in an accident",
          "High mileage",
          "No longer running",
          "Sitting unused for years",
          "Ready for junk car removal",
        ]}
        listColumns={2}
      />

      <ContentSection
        tone="muted"
        eyebrow="What we need"
        title="What Information Do We Need?"
        paragraphs={[
          "Having these details ready helps make the process smoother: vehicle year, make and model, trim level if known, approximate mileage, running or non-running status, any damage or mechanical problems, your vehicle's location, and title information. Don't guess if you're unsure — just give us the most accurate information available.",
        ]}
      />

      <BrandsGrid />

      <FaqAccordion items={weBuyFaqs} />

      <CTASection />
    </>
  );
}
