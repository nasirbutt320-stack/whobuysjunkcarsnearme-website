import Link from "next/link";
import Container from "./Container";
import { brands } from "@/lib/data/brands";
import { ArrowRightIcon } from "./icons";

export default function BrandsGrid() {
  return (
    <section className="section bg-navy-50/60">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">
            Find your vehicle brand
          </h2>
          <p className="mt-3 text-navy-500">
            Tap your brand below for details on selling that specific make, or just
            request a quote. We buy them all.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {brands.map((brand) => (
            <Link
              key={brand.slug}
              href={`/${brand.slug}/`}
              className="group flex items-center justify-between gap-2 rounded-xl border border-navy-100 bg-white px-4 py-3 text-sm font-semibold text-navy-800 shadow-sm transition-all hover:-translate-y-0.5 hover:border-gold-400 hover:text-gold-600 hover:shadow-card"
            >
              {brand.name}
              <ArrowRightIcon className="h-4 w-4 shrink-0 text-navy-300 transition-colors group-hover:text-gold-500" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
