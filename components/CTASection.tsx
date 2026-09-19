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
    <section className="bg-teal-500">
      <Container className="flex flex-col items-center gap-6 py-14 text-center">
        <h2 className="max-w-2xl text-2xl font-extrabold text-navy-950 sm:text-3xl">
          {title}
        </h2>
        <p className="max-w-xl text-navy-900/80">{subtitle}</p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/get-quote/" className="btn bg-navy-900 text-white hover:bg-navy-800">
            Get A Free Quote
          </Link>
          <a href={site.phoneHref} className="btn bg-white text-navy-900 hover:bg-navy-50">
            <PhoneIcon className="h-4 w-4" />
            Call {site.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
