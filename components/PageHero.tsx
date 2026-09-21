import { ReactNode } from "react";
import Container from "./Container";
import QuoteForm from "./QuoteForm";
import { StarIcon } from "./icons";
import Link from "next/link";
import { site } from "@/lib/site";

export default function PageHero({
  badge,
  title,
  accent,
  intro,
  primaryCta = { href: "/get-quote/", label: "Get A Free Quote" },
  secondaryCta = { href: "/we-buy/", label: "Our Services" },
  showForm = true,
}: {
  badge: string;
  title: string;
  accent?: string;
  intro: ReactNode;
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string } | null;
  showForm?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative grid grid-cols-1 gap-10 py-14 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-teal-300">
            <StarIcon className="h-4 w-4" />
            {badge}
          </span>
          <h1 className="mt-5 text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            {title} {accent && <span className="text-teal-400">{accent}</span>}
          </h1>
          <div className="prose-body mt-5 max-w-xl text-[1.05rem] leading-relaxed text-navy-200 [&_p]:text-navy-200">
            {intro}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href={primaryCta.href} className="btn btn-primary">
              {primaryCta.label}
            </Link>
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn btn-outline">
                {secondaryCta.label}
              </Link>
            )}
          </div>
          <p className="mt-6 text-sm text-navy-300">
            Prefer to talk it through? Call{" "}
            <a href={site.phoneHref} className="font-semibold text-white">
              {site.phone}
            </a>
          </p>
        </div>
        {showForm && (
          <div className="lg:justify-self-end lg:pl-4">
            <QuoteForm />
          </div>
        )}
      </Container>
    </section>
  );
}
