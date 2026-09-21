import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <section className="section bg-white">
      <Container className="flex flex-col items-center text-center">
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-rust-600">
          404
        </span>
        <h1 className="mt-2 font-display text-3xl uppercase tracking-wide text-ink-900 sm:text-4xl">
          We couldn&apos;t find that page
        </h1>
        <p className="mt-3 max-w-md text-ink-500">
          The page you&apos;re looking for may have moved. Try heading back home, or
          get a free quote for your vehicle instead.
        </p>
        <div className="mt-6 flex gap-3">
          <Link href="/" className="btn btn-outline-dark">
            Back to home
          </Link>
          <Link href="/get-quote/" className="btn btn-primary">
            Get a free quote
          </Link>
        </div>
      </Container>
    </section>
  );
}
