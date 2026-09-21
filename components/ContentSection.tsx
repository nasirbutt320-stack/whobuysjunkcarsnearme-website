import { ReactNode } from "react";
import Container from "./Container";
import CheckList from "./CheckList";

export default function ContentSection({
  eyebrow,
  title,
  paragraphs = [],
  list,
  listColumns = 1,
  tone = "light",
  children,
}: {
  eyebrow?: string;
  title: string;
  paragraphs?: string[];
  list?: string[];
  listColumns?: 1 | 2;
  tone?: "light" | "muted";
  children?: ReactNode;
}) {
  return (
    <section className={`section ${tone === "muted" ? "bg-paper-100" : "bg-white"}`}>
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            {eyebrow && (
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-rust-600">
                {eyebrow}
              </span>
            )}
            <h2 className="mt-3 font-display text-2xl uppercase tracking-wide text-ink-900 sm:text-3xl">
              {title}
            </h2>
          </div>
          <div>
            <div className="prose-body">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {list && <CheckList items={list} columns={listColumns} />}
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
