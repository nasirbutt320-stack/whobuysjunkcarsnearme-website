import Container from "@/components/Container";
import GetQuoteForm from "@/components/GetQuoteForm";
import { CheckIcon } from "@/components/icons";

const points = [
  "No hidden fees or surprises at pickup",
  "Driver arrives on time, every time",
  "Payment confirmed before we leave",
  "We handle all DMV paperwork",
];

export default function GetQuotePage() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative grid grid-cols-1 gap-12 py-14 md:py-20 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="animate-rise-in">
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-[2.75rem]">
            Get a Quote for Your Junk Car
          </h1>
          <p className="mt-4 max-w-md text-navy-200">
            Fill out the form and we&apos;ll get back to you with a fair cash offer,
            usually within the hour during business hours. Prefer to talk it
            through first? Call us any time.
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-navy-200">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
        <div className="animate-rise-in" style={{ animationDelay: "0.12s" }}>
          <GetQuoteForm />
        </div>
      </Container>
    </section>
  );
}
