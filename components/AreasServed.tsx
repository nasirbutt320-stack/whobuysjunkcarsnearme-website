import Link from "next/link";
import Container from "./Container";
import { states } from "@/lib/data/states";
import { MapPinIcon } from "./icons";

export default function AreasServed() {
  return (
    <section className="section bg-navy-900">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            We buy cars in all 50 states
          </h2>
          <Link href="/area-we-serve/" className="btn btn-outline">
            See full coverage
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {states.map((state) => (
            <Link
              key={state.slug}
              href={`/${state.slug}/`}
              className="flex items-center gap-2 text-sm text-navy-200 transition-colors hover:text-gold-400"
            >
              <MapPinIcon className="h-4 w-4 shrink-0 text-gold-500" />
              {state.name}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
