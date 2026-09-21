import Container from "@/components/Container";

export type LegalSection = {
  heading: string;
  body: string[];
};

export default function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <section className="section bg-white">
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-extrabold text-navy-900 sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-navy-400">Last updated: {updated}</p>
        <p className="prose-body mt-6">{intro}</p>

        <div className="mt-4 space-y-8">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="text-xl font-bold text-navy-900">{section.heading}</h2>
              <div className="prose-body mt-3">
                {section.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
