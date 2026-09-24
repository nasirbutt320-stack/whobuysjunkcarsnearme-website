import { ReactNode } from "react";
import Container from "./Container";
import CheckList from "./CheckList";

export default function ContentSection({
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
    <section className={`section ${tone === "muted" ? "bg-navy-50/60" : "bg-white"}`}>
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold leading-tight text-navy-900 sm:text-3xl">
              {title}
            </h2>
            <span className="mt-4 block h-1 w-14 rounded-full bg-gold-500" aria-hidden="true" />
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
