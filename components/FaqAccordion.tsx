"use client";

import { useState } from "react";
import Container from "./Container";
import { ChevronDownIcon } from "./icons";

export type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqAccordion({
  title = "Frequently Asked Questions",
  subtitle,
  items,
}: {
  title?: string;
  subtitle?: string;
  items: FaqItem[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section bg-paper">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl uppercase tracking-wide text-ink-900 sm:text-4xl">
            {title}
          </h2>
          {subtitle && <p className="mt-3 text-ink-500">{subtitle}</p>}
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-md border-2 border-ink-900 bg-white shadow-sticker-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                >
                  <span className="font-extrabold text-ink-900">{item.question}</span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-ink-900 bg-hazard-400 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDownIcon className="h-4 w-4 text-ink-900" />
                  </span>
                </button>
                {isOpen && (
                  <div className="border-t-2 border-ink-900/10 px-5 pb-5 pt-4 text-ink-600 sm:px-6">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
