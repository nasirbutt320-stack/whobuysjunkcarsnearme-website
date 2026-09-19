import PageHero from "@/components/PageHero";
import FaqAccordion from "@/components/FaqAccordion";
import CTASection from "@/components/CTASection";

const faqs = [
  {
    question: "Who buys junk cars near me?",
    answer:
      "You can sell an unwanted vehicle to a junk car buyer, auto recycler, salvage yard, or vehicle removal company that serves your area. We help vehicle owners get an offer and arrange pickup without the hassle of repairing or advertising the vehicle themselves.",
  },
  {
    question: "What types of vehicles do you buy?",
    answer:
      "We consider cars, trucks, vans, SUVs, Jeeps, sedans, minivans, work vehicles, and fleet vehicles. We may also consider vehicles that are old, used, damaged, wrecked, flooded, incomplete, or no longer running.",
  },
  {
    question: "Do you buy all makes and models?",
    answer:
      "We consider vehicles from many manufacturers, including Ford, Chevrolet, GMC, Dodge, RAM, Jeep, Chrysler, Toyota, Honda, Nissan, Mazda, Subaru, Hyundai, Kia, Volkswagen, BMW, Mercedes-Benz, Audi, Lexus, Acura, Volvo, Tesla, and more. The make and model are only part of the review — condition, location, and paperwork matter too.",
  },
  {
    question: "Do you buy newer used vehicles?",
    answer:
      "Yes. A vehicle doesn't have to be extremely old to be considered. We review newer used cars, trucks, and SUVs with accident damage, mechanical problems, flood damage, title issues, or that are simply no longer wanted.",
  },
  {
    question: "Do you buy cars that do not run?",
    answer:
      "Yes. A car may still be considered if it has a dead battery, failed engine, bad transmission, electrical problem, accident damage, or another issue preventing it from starting or driving.",
  },
  {
    question: "Can I sell a car with a bad engine or transmission?",
    answer:
      "Usually, yes. You typically don't need to complete an expensive repair first — just describe the problem as accurately as you can.",
  },
  {
    question: "Do you buy wrecked or accident-damaged vehicles?",
    answer:
      "We may buy vehicles with body damage, broken glass, damaged airbags, or other collision-related problems. Even a heavily damaged vehicle may have usable parts or recyclable materials.",
  },
  {
    question: "Do you buy flooded or fire-damaged vehicles?",
    answer:
      "Flood-damaged and fire-damaged vehicles may be considered, depending on the damage and local requirements. Be upfront about the vehicle's condition so we can plan the right pickup.",
  },
  {
    question: "Can I sell a vehicle that is missing parts?",
    answer:
      "Possibly. We may consider vehicles missing an engine, transmission, battery, wheels, doors, catalytic converter, or interior components. Let us know what's missing and whether the vehicle can roll or needs to be loaded.",
  },
  {
    question: "What paperwork do I need to sell my vehicle?",
    answer:
      "Requirements depend on your state. A title and valid ID are often useful; you may also need registration, a bill of sale, or lien information. Keep your VIN handy if you have it.",
  },
  {
    question: "Can I sell a junk car without a title?",
    answer:
      "In many cases, yes. Depending on your state and proof of ownership, we can often work with alternative documentation — just tell us your situation.",
  },
  {
    question: "How fast can my car be picked up?",
    answer:
      "Many vehicles can be picked up the same day or the next business day, depending on your location and schedule.",
  },
  {
    question: "Is towing really free?",
    answer:
      "Yes. Towing and pickup are always included in your offer — there's never a separate charge.",
  },
];

export default function FaqsPage() {
  return (
    <>
      <PageHero
        badge="Straightforward Answers"
        title="Junk Car Selling"
        accent="FAQs"
        intro={
          <p>
            Have an old car sitting in the driveway? Is your truck no longer
            running, or is a damaged van taking up valuable space? Here are
            straightforward answers to the questions people ask most before
            selling a junk, used, old, damaged, or unwanted vehicle.
          </p>
        }
        showForm={false}
        secondaryCta={null}
      />
      <FaqAccordion title="Everything you need to know" items={faqs} />
      <CTASection />
    </>
  );
}
