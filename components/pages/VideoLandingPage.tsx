import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import ProcessSteps from "@/components/ProcessSteps";
import ContentSection from "@/components/ContentSection";
import CTASection from "@/components/CTASection";

export default function VideoLandingPage({ variant }: { variant: 1 | 2 }) {
  return (
    <>
      <PageHero
        badge="Rated Junk Car Buyer in the USA"
        title="Who Buys Junk Cars"
        accent="Near Me? We Do, Right Now."
        intro={
          <p>
            That dead sedan in the driveway has been parked long enough that
            it&apos;s basically part of the landscaping. Our crew doesn&apos;t need the
            car running, doesn&apos;t need it to look good, and usually doesn&apos;t even
            need the title in hand before quoting a number over the phone.
          </p>
        }
      />

      <ProcessSteps />

      <section className="section bg-navy-50/60">
        <Container className="max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
            Watch how easy it is to sell your junk car
          </h2>
          <p className="mt-3 text-navy-500">
            We're putting together a short walkthrough of exactly what happens,
            from quote to cash in hand. In the meantime, the steps below cover
            the same process.
          </p>

          <div
            className="relative mt-8 flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl bg-navy-900 shadow-card"
            aria-label="Walkthrough video coming soon"
          >
            <span className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-950" />
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white sm:h-20 sm:w-20">
              <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-7 w-7 sm:h-9 sm:w-9">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="absolute bottom-4 left-4 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white">
              Video coming soon
            </span>
          </div>
        </Container>
      </section>

      <ContentSection
        eyebrow="Who we are"
        title="The USA's Most Trusted Junk Car Buyer"
        paragraphs={[
          "We buy junk cars from American families nationwide. Whether your car was in an accident, stopped running, or is just too old to repair, we want it, and we'll pay you fairly for it.",
          "Unlike local junkyards that low-ball you, our nationwide network competes for your vehicle, which is usually why our offer ends up higher.",
        ]}
        list={[
          "No hidden fees or surprises at pickup",
          "Driver arrives on time, every time",
          "Payment confirmed before we leave",
          "We handle all DMV paperwork",
        ]}
        listColumns={2}
      />

      <CTASection />
    </>
  );
}
