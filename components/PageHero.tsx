import { ReactNode } from "react";
import Container from "./Container";
import QuoteForm from "./QuoteForm";
import { CheckIcon } from "./icons";
import Link from "next/link";

const trustBullets = ["Any condition, running or not", "No title needed", "Free towing, nationwide"];

export default function PageHero({
  title,
  accent,
  intro,
  primaryCta = { href: "/get-quote/", label: "Get A Free Quote" },
  secondaryCta = { href: "/we-buy/", label: "Our Services" },
  showForm = true,
}: {
  badge?: string;
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
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative grid grid-cols-1 gap-10 py-14 pb-24 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14 lg:pb-20">
        <div className="animate-rise-in">
          <h1 className="text-4xl font-bold leading-[1.05] text-white sm:text-5xl md:text-[3.4rem]">
            {title} {accent && <span className="text-gold-400">{accent}</span>}
          </h1>
          <div className="prose-body mt-5 max-w-xl text-[1.05rem] leading-relaxed text-navy-200 [&_p]:text-navy-200">
            {intro}
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
            {trustBullets.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-navy-100">
                <CheckIcon className="h-4 w-4 shrink-0 text-gold-400" />
                {item}
              </li>
            ))}
          </ul>
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
        </div>
        {showForm && (
          <div
            className="animate-rise-in lg:justify-self-end lg:pl-4"
            style={{ animationDelay: "0.12s" }}
          >
            <QuoteForm />
          </div>
        )}
      </Container>
    </section>
  );
}
