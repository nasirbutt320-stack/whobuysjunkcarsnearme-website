import PageHero from "@/components/PageHero";
import ContentSection from "@/components/ContentSection";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { faqPageSchema } from "@/lib/schema";
import { site } from "@/lib/site";

export default function AboutUsPage() {
  const aboutFaqs: FaqItem[] = [
    {
      question: "Do you buy cars that don't run?",
      answer:
        "Yes. Running condition doesn't matter to us. We regularly buy cars with blown engines, transmission problems, or ones that simply won't start anymore.",
    },
    {
      question: "What if I don't have the title?",
      answer: `In most cases we can still buy your car without a title. Call ${site.phone} and we'll explain what alternative paperwork works in your state.`,
    },
    {
      question: "How fast can you pick up my car?",
      answer:
        "Many pickups happen within 24 to 48 hours of your call, depending on your location and schedule.",
    },
    {
      question: "Is there any cost to me for towing or pickup?",
      answer: "No. Towing and pickup are free. The price we quote is the price you get paid.",
    },
  ];

  return (
    <>
      <JsonLd data={faqPageSchema(aboutFaqs)} />

      <PageHero
        badge="Who We Are"
        title="About"
        accent={site.name}
        intro={
          <p>
            We started {site.name} because selling an old, damaged, or unwanted
            car shouldn&apos;t be complicated. Most people who come to us are dealing
            with the same headache: a vehicle that no longer runs, failed
            inspection, or has simply been sitting in the driveway for months. We
            buy it in almost any condition, running or not, with or without a
            title.
          </p>
        }
        showForm={false}
        secondaryCta={null}
      />

      <ContentSection
        eyebrow="Our approach"
        title="Built Around Speed and Honesty"
        paragraphs={[
          "You tell us about your vehicle, we give you a straightforward cash offer based on real market value, and if you accept, we come to you. No hidden fees, no towing charges, and no waiting around for a buyer who might change their mind.",
          "What sets us apart is that we're not a junkyard and we're not a classifieds listing. We're a dedicated car-buying service with coverage across the country, which means we can usually get to you fast and get you paid the same day in many cases.",
        ]}
      />

      <ContentSection
        tone="muted"
        eyebrow="Get in touch"
        title={`Call ${site.phone} Today`}
        paragraphs={[
          "We'll walk you through the process, answer your questions, and get you a fair cash offer, no obligation, no pressure.",
        ]}
      />

      <FaqAccordion items={aboutFaqs} />

      <CTASection />
    </>
  );
}
