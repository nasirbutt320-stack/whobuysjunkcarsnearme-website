import Link from "next/link";
import Container from "./Container";
import { brands } from "@/lib/data/brands";
import { ArrowRightIcon } from "./icons";

export default function BrandsGrid() {
  return (
    <section className="section bg-paper-100">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-rust-600">
            All makes and models
          </span>
          <h2 className="mt-3 font-display text-3xl uppercase tracking-wide text-ink-900 sm:text-4xl">
            Find your vehicle brand
          </h2>
          <p className="mt-3 text-ink-500">
            Tap your brand below for details on selling that specific make, or just
            request a quote — we buy them all.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {brands.map((brand) => (
            <Link
              key={brand.slug}
              href={`/${brand.slug}/`}
              className="group flex items-center justify-between gap-2 rounded-md border-2 border-ink-900 bg-white px-4 py-3 text-sm font-bold text-ink-800 shadow-sticker-sm transition-all hover:-translate-y-0.5 hover:bg-hazard-400"
            >
              {brand.name}
              <ArrowRightIcon className="h-4 w-4 shrink-0 text-ink-400 transition-colors group-hover:text-ink-900" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
