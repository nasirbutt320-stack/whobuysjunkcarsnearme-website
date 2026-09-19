import PageHero from "@/components/PageHero";
import ProcessSteps from "@/components/ProcessSteps";
import ContentSection from "@/components/ContentSection";
import FaqAccordion from "@/components/FaqAccordion";
import AreasServed from "@/components/AreasServed";
import CTASection from "@/components/CTASection";
import { BrandEntry } from "@/lib/data/brands";

export default function BrandTemplate({ brand }: { brand: BrandEntry }) {
  const mechanicalTerm = brand.ev ? "battery pack or drive unit" : "engine or transmission";
  const conditionTerm = brand.ev
    ? "battery degradation, charging faults, or drivetrain issues"
    : "engine trouble, transmission failure, or electrical issues";

  return (
    <>
      <PageHero
        badge="Any Year, Any Condition"
        title="Sell Your"
        accent={`${brand.name} for Cash`}
        intro={
          <p>
            Turning your old {brand.name} into quick cash doesn&apos;t have to be
            complicated. Whether it&apos;s a daily driver that&apos;s seen better days or a
            truck with {mechanicalTerm} problems, we make the process
            straightforward and rewarding — no inspections, no dealership
            markups, no waiting around.
          </p>
        }
      />

      <ProcessSteps
        title={`How We Buy Your ${brand.name} for Cash`}
      />

      <ContentSection
        eyebrow={`Why ${brand.name} owners choose us`}
        title="Fair Pricing, Every Time"
        paragraphs={[
          `We offer cash for your ${brand.name} based on current market rates, not a dealer trade-in number. You get what your vehicle actually sells for, plus we cut out the middleman markup.`,
          `Non-running truck? High-mileage sedan? Body damage? We buy them all. Mechanical problems and cosmetic issues don't determine our interest — your ${brand.name} has value to us regardless of condition.`,
        ]}
        list={[
          "Cash, check, or bank transfer — your choice",
          "Free towing in all 50 states",
          "We handle title transfer and paperwork",
          `We buy ${brand.name} cars, trucks, and SUVs alike`,
        ]}
        listColumns={2}
      />

      <ContentSection
        tone="muted"
        eyebrow="What we look at"
        title={`Common ${brand.name} Issues We Buy`}
        paragraphs={[
          `Plenty of sellers assume their vehicle has to be running to qualify. It doesn't. We regularly buy ${brand.name} vehicles with ${conditionTerm}, accident damage, or high mileage. If it's sitting unused and you want it gone, it's worth a call.`,
        ]}
      />

      <ContentSection
        eyebrow={`${brand.name} junk yards vs. a direct buyer`}
        title="Why Direct Selling Usually Wins"
        paragraphs={[
          `Traditional junk yards strip vehicles for parts and typically pay less, since their profit comes from selling components rather than the whole car. When you sell directly to us, we base your offer on the overall market value of the vehicle, arrange free pickup, and pay you immediately once it's confirmed — no waiting, no surprises.`,
        ]}
      />

      <FaqAccordion
        title={`Frequently Asked Questions — Selling a ${brand.name}`}
        items={[
          {
            question: `Do you buy ${brand.name} vehicles that don't run?`,
            answer:
              "Yes. Running condition doesn't determine whether we're interested — we regularly buy non-running vehicles in almost any condition.",
          },
          {
            question: "Do I need the title to sell?",
            answer:
              "In most cases we can still work with you if the title is missing. Call us and we'll explain what alternative documentation is accepted in your state.",
          },
          {
            question: "How is my cash offer calculated?",
            answer:
              `We look at your ${brand.name}'s year, model, mileage, condition, and current resale or scrap value for its parts to arrive at a fair, no-lowball number.`,
          },
          {
            question: "Is towing really free?",
            answer:
              "Yes, always. The price we quote already accounts for pickup, so there's nothing extra to pay.",
          },
        ]}
      />

      <AreasServed />
      <CTASection
        title={`Ready to turn your ${brand.name} into cash?`}
      />
    </>
  );
}
