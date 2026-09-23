import PageHero from "@/components/PageHero";
import ContentSection from "@/components/ContentSection";
import StatesGrid from "@/components/StatesGrid";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";

const areaWeServeFaqs: FaqItem[] = [
  {
    question: "Do you buy cars in every state?",
    answer:
      "Yes, we work across the country. Wherever you live, there's a good chance our team can reach you within a day or two.",
  },
  {
    question: "Can you pick up a car in a small town or rural area?",
    answer:
      "Yes — distance isn't a problem for us. We arrange pickup for rural addresses the same way we do for big cities.",
  },
  {
    question: "Does the offer change depending on my state?",
    answer: "No. The price is based on your car's condition and parts, not where you live.",
  },
];

export default function AreaWeServePage() {
  return (
    <>
      <JsonLd data={faqPageSchema(areaWeServeFaqs)} />

      <PageHero
        badge="Nationwide Pickup"
        title="We Buy Cars In"
        accent="Every State"
        intro={
          <p>
            You don&apos;t have to live in a big city to sell your car fast. We pick up
            junk cars, old cars, used cars, and even newer cars that were in an
            accident, no matter which state you call from. Your location is never
            a problem.
          </p>
        }
      />

      <ContentSection
        eyebrow="Wide coverage"
        title="Local Pickup Without the Local Runaround"
        paragraphs={[
          "A lot of small yards only serve their own city and stop there. We built our network the opposite way — wherever you are, one of our local partners can usually reach you within a day or two. You call once, and we handle the rest from quote to pickup.",
          "Your state doesn't change your price, either. We look at the same things everywhere: the car's condition, its parts, and what it can still be used for. That means a seller in a small town gets treated the same as someone in a major city.",
        ]}
      />

      <StatesGrid />

      <FaqAccordion items={areaWeServeFaqs} />

      <CTASection />
    </>
  );
}
