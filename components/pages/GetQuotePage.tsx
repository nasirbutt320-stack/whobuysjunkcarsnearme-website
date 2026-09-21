import Container from "@/components/Container";
import GetQuoteForm from "@/components/GetQuoteForm";
import CheckList from "@/components/CheckList";
import { StarIcon } from "@/components/icons";

export default function GetQuotePage() {
  return (
    <section className="bg-ink-900">
      <Container className="grid grid-cols-1 gap-12 py-14 md:py-20 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <span className="inline-flex -rotate-2 items-center gap-2 border-2 border-hazard-400 bg-ink-900 px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-hazard-400 shadow-sticker-hazard">
            <StarIcon className="h-4 w-4" />
            Free · No Obligation
          </span>
          <h1 className="mt-5 font-display text-3xl uppercase tracking-wide text-white sm:text-4xl">
            Get a Quote for Your Junk Car
          </h1>
          <p className="mt-4 max-w-md text-ink-200">
            Fill out the form and we&apos;ll get back to you with a fair cash offer,
            usually within the hour during business hours. Prefer to talk it
            through first? Call us any time.
          </p>
          <div className="mt-8 [&_span]:text-ink-200">
            <CheckList
              items={[
                "No hidden fees or surprises at pickup",
                "Driver arrives on time, every time",
                "Payment confirmed before we leave",
                "We handle all DMV paperwork",
              ]}
            />
          </div>
        </div>
        <GetQuoteForm />
      </Container>
    </section>
  );
}
