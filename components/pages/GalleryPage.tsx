import Image from "next/image";
import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import CTASection from "@/components/CTASection";

const recentPickups = [
  {
    src: "/gallery/ford-super-duty.webp",
    label: "Ford Super Duty",
    alt: "Ford Super Duty pickup truck we bought for cash",
  },
  {
    src: "/gallery/honda-pilot.webp",
    label: "Honda Pilot",
    alt: "Honda Pilot SUV we bought for cash",
  },
  {
    src: "/gallery/jeep-grand-cherokee.webp",
    label: "Jeep Grand Cherokee",
    alt: "Jeep Grand Cherokee SUV we bought for cash",
  },
  {
    src: "/gallery/mazda5.webp",
    label: "Mazda5",
    alt: "Mazda5 wagon we bought for cash",
  },
  {
    src: "/gallery/ford-mustang.webp",
    label: "Ford Mustang",
    alt: "Ford Mustang we bought for cash",
  },
  {
    src: "/gallery/ford-f150.webp",
    label: "Ford F-150",
    alt: "Ford F-150 pickup truck we bought for cash",
  },
  {
    src: "/gallery/chevrolet-cruze.webp",
    label: "Chevrolet Cruze",
    alt: "Chevrolet Cruze sedan we bought for cash",
  },
  {
    src: "/gallery/audi-a4.webp",
    label: "Audi A4",
    alt: "Audi A4 sedan we bought for cash",
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
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
                className="overflow-hidden rounded-2xl border border-navy-100 shadow-sm transition-shadow hover:shadow-card"
              >
                <div className="relative h-48 w-full bg-navy-50">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-navy-900">{item.label}</h3>
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
