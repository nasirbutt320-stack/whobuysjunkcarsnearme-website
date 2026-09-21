import Link from "next/link";
import Container from "./Container";
import { states } from "@/lib/data/states";
import { citiesForState } from "@/lib/data/cities";
import { MapPinIcon } from "./icons";

export default function StatesGrid() {
  return (
    <section className="section bg-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-rust-600">
            Nationwide coverage
          </span>
          <h2 className="mt-3 font-display text-3xl uppercase tracking-wide text-ink-900 sm:text-4xl">
            Pick your state
          </h2>
          <p className="mt-3 text-ink-500">
            Every state page has details on pickup, pricing, and titles specific to
            where you live.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {states.map((state) => {
            const cityCount = citiesForState(state.slug).length;
            return (
              <Link
                key={state.slug}
                href={`/${state.slug}/`}
                className="flex flex-col gap-1 rounded-md border-2 border-ink-900 bg-white px-4 py-3 shadow-sticker-sm transition-all hover:-translate-y-0.5 hover:bg-hazard-50"
              >
                <span className="flex items-center gap-2 text-sm font-semibold text-ink-800">
                  <MapPinIcon className="h-4 w-4 text-hazard-500" />
                  {state.name}
                </span>
                {cityCount > 0 && (
                  <span className="pl-6 text-xs text-ink-400">
                    {cityCount} local {cityCount === 1 ? "page" : "pages"}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
