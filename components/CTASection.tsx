import Link from "next/link";
import Container from "./Container";
import { site } from "@/lib/site";
import { PhoneIcon } from "./icons";

export default function CTASection({
  title = "Ready to turn your junk car into cash?",
  subtitle = "Free towing · Instant offer · Same-day pickup available across all 50 states",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="relative bg-hazard-400">
      <div className="hazard-strip" />
      <Container className="flex flex-col items-center gap-6 py-14 text-center md:py-20">
        <h2 className="max-w-2xl font-display text-3xl uppercase tracking-wide text-ink-900 sm:text-4xl">
          {title}
        </h2>
        <p className="max-w-xl font-semibold text-ink-900/80">{subtitle}</p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/get-quote/"
            className="btn border-ink-900 bg-ink-900 text-hazard-400 shadow-[4px_4px_0_0_rgba(23,22,19,0.35)] hover:-translate-y-0.5 hover:bg-ink-800"
          >
            Get A Free Quote
          </Link>
          <a
            href={site.phoneHref}
            className="btn border-ink-900 bg-white text-ink-900 shadow-sticker-sm hover:-translate-y-0.5"
          >
            <PhoneIcon className="h-4 w-4" />
            Call {site.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
