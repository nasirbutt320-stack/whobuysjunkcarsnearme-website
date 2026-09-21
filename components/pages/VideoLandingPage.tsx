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
        accent="Near Me? We Do — Right Now."
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
          <span className="text-sm font-bold uppercase tracking-wide text-teal-600">
            See it in action
          </span>
          <h2 className="mt-2 text-2xl font-extrabold text-navy-900 sm:text-3xl">
            Watch how easy it is to sell your junk car
          </h2>
          <p className="mt-3 text-navy-500">
            Thousands of Americans sell their junk cars to us every month. This
            short walkthrough shows exactly what happens — from quote to cash in
            hand — in under 24 hours.
          </p>

          <button
            type="button"
            className="group relative mt-8 flex aspect-video w-full items-center justify-center overflow-hidden rounded-2xl bg-navy-900 shadow-card"
            aria-label="Play walkthrough video"
          >
            <span className="absolute inset-0 bg-gradient-to-br from-navy-800 to-navy-950" />
            <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-teal-500 text-navy-950 transition-transform group-hover:scale-105 sm:h-20 sm:w-20">
              <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-7 w-7 sm:h-9 sm:w-9">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="absolute bottom-4 left-4 rounded-full bg-black/40 px-3 py-1 text-xs font-semibold text-white">
              {variant === 1 ? "Customer walkthrough · 1:42" : "Behind the pickup · 2:05"}
            </span>
          </button>
        </Container>
      </section>

      <ContentSection
        eyebrow="Who we are"
        title="The USA's Most Trusted Junk Car Buyer Since 2011"
        paragraphs={[
          "We've been buying junk cars from American families for over a decade. Whether your car was in an accident, stopped running, or is just too old to repair, we want it — and we'll pay you fairly for it.",
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
