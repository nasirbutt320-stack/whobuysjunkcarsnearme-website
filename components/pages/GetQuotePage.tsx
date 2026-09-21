import Container from "@/components/Container";
import GetQuoteForm from "@/components/GetQuoteForm";
import { StarIcon } from "@/components/icons";

export default function GetQuotePage() {
  return (
    <section className="bg-navy-900">
      <Container className="grid grid-cols-1 gap-12 py-14 md:py-20 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-teal-300">
            <StarIcon className="h-4 w-4" />
            Free · No Obligation
          </span>
          <h1 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl">
            Get a Quote for Your Junk Car
          </h1>
          <p className="mt-4 max-w-md text-navy-200">
            Fill out the form and we&apos;ll get back to you with a fair cash offer,
            usually within the hour during business hours. Prefer to talk it
            through first? Call us any time.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-navy-200">
            <li>✓ No hidden fees or surprises at pickup</li>
            <li>✓ Driver arrives on time, every time</li>
            <li>✓ Payment confirmed before we leave</li>
            <li>✓ We handle all DMV paperwork</li>
          </ul>
        </div>
        <GetQuoteForm />
      </Container>
    </section>
  );
}
