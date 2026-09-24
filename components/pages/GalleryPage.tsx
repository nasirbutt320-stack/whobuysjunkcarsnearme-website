import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import { CarIcon } from "@/components/icons";

const recentPickups = [
  { label: "Sedan", note: "Non-running, purchased for parts" },
  { label: "Pickup Truck", note: "High mileage, sold with clear title" },
  { label: "SUV", note: "Accident damage, picked up same day" },
  { label: "Minivan", note: "Sitting unused for 3+ years" },
  { label: "Coupe", note: "Engine trouble, sold without a title" },
  { label: "Work Van", note: "Fleet vehicle, retired from service" },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        badge="Recent Purchases"
        title="Vehicles"
        accent="We've Bought"
        intro={
          <p>
            A quick look at the range of vehicles we buy: junk, used, old, and
            everything in between. Every pickup on this page was paid for in cash
            on the day it was collected.
          </p>
        }
        showForm={false}
        secondaryCta={null}
      />

      <section className="section bg-white">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentPickups.map((item) => (
              <div
                key={item.label}
                className="overflow-hidden rounded-2xl border border-navy-100 shadow-sm"
              >
                <div className="flex h-40 items-center justify-center bg-navy-50">
                  <CarIcon className="h-16 w-16 text-navy-300" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-navy-900">{item.label}</h3>
                  <p className="mt-1 text-sm text-navy-500">{item.note}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-navy-400">
            Sold us a car recently? We&apos;d love to feature it here,{" "}
            <a href="/contact-us/" className="font-semibold text-gold-600">
              get in touch
            </a>
            .
          </p>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
