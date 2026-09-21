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
    <section className="diagonal-bottom relative overflow-hidden bg-ink-900 pb-16 pt-4 md:pb-24">
      <div className="grain-overlay" aria-hidden="true" />
      <CarWatermark />

      <Container className="relative grid grid-cols-1 gap-10 py-10 md:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
        <div>
          <span className="animate-fade-up inline-flex -rotate-2 items-center gap-2 border-2 border-hazard-400 bg-ink-900 px-4 py-1.5 text-sm font-bold uppercase tracking-wide text-hazard-400 shadow-sticker-hazard">
            <StarIcon className="h-4 w-4" />
            {badge}
          </span>
          <h1 className="animate-fade-up mt-6 font-display text-4xl uppercase leading-[0.95] tracking-wide text-white [animation-delay:90ms] sm:text-5xl md:text-6xl">
            {title}{" "}
            {accent && <span className="text-hazard-400">{accent}</span>}
          </h1>
          <div className="animate-fade-up prose-body mt-5 max-w-xl text-[1.05rem] leading-relaxed [animation-delay:180ms] [&_p]:text-ink-200">
            {intro}
          </div>
          <div className="animate-fade-up mt-8 flex flex-wrap gap-4 [animation-delay:260ms]">
            <Link href={primaryCta.href} className="btn btn-primary">
              {primaryCta.label}
            </Link>
            {secondaryCta && (
              <Link href={secondaryCta.href} className="btn btn-outline">
                {secondaryCta.label}
              </Link>
            )}
          </div>
          <p className="animate-fade-up mt-6 text-sm text-ink-300 [animation-delay:320ms]">
            Prefer to talk it through? Call{" "}
            <a href={site.phoneHref} className="font-bold text-white underline decoration-hazard-400 decoration-2 underline-offset-4">
              {site.phone}
            </a>
          </p>
        </div>
        {showForm && (
          <div className="animate-fade-up lg:justify-self-end lg:pl-4 [animation-delay:200ms]">
            <div className="rotate-1 transition-transform hover:rotate-0">
              <QuoteForm />
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}

function CarWatermark() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-16 -right-16 h-80 w-80 -rotate-12 text-white/[0.04] md:h-[26rem] md:w-[26rem]"
    >
      <path
        d="M3.5 12.5l1.4-4.2A2 2 0 016.8 7h10.4a2 2 0 011.9 1.3l1.4 4.2M3.5 12.5h17M3.5 12.5v4a1 1 0 001 1H6a1 1 0 001-1v-1h10v1a1 1 0 001 1h1.5a1 1 0 001-1v-4"
        stroke="currentColor"
        strokeWidth="1"
      />
      <circle cx="7.5" cy="16.5" r="1.4" stroke="currentColor" strokeWidth="1" />
      <circle cx="16.5" cy="16.5" r="1.4" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
