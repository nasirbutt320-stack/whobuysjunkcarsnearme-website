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
    <section className="section bg-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold text-navy-900 sm:text-3xl">{title}</h2>
          {subtitle && <p className="mt-3 text-navy-500">{subtitle}</p>}
        </div>

        <div className="mx-auto mt-10 max-w-3xl divide-y divide-navy-100 rounded-2xl border border-navy-100">
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                >
                  <span className="font-semibold text-navy-900">{item.question}</span>
                  <ChevronDownIcon
                    className={`h-5 w-5 shrink-0 text-teal-600 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-navy-500 sm:px-6">{item.answer}</div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
