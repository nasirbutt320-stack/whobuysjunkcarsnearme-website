import PageHero from "@/components/PageHero";
import Container from "@/components/Container";
import AreasServed from "@/components/AreasServed";
import CTASection from "@/components/CTASection";

const promises = [
  {
    title: "No Games, Just What We Quoted",
    body: "The biggest complaint in this industry is a phone quote that drops once someone shows up in person. That's exactly why customers keep coming back to buyers who hold their number, and it's why we hold ours.",
  },
  {
    title: "Nothing Here Will Be Written By Us",
    body: "You won't find polished marketing lines pretending to be customer voices. Once real sales come in, what you'll see here are short, honest notes from people who actually sold a car through us, in their own words.",
  },
  {
    title: "Paid on the Spot or Not At All",
    body: "Getting paid fast is usually the deciding factor between two similar offers. We're building that reputation one sale at a time, starting with yours.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        title="Before We Have Reviews,"
        accent="Here's Our Promise"
        intro={
          <p>
            We built this page to show what actually happens when someone sells a
            car to us. It&apos;s still early, and we don&apos;t have a stack of reviews yet,
            but every sale from here forward gets a follow-up asking how it
            went.
          </p>
        }
      />

      <section className="section bg-white">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {promises.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-navy-100 p-6 shadow-sm"
              >
                <h3 className="text-lg font-bold text-navy-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-navy-50/60 p-8 text-center">
            <p className="text-navy-600">
              Sold a car to us recently?{" "}
              <a href="/contact-us/" className="font-semibold text-gold-600">
                Tell us how it went.
              </a>{" "}
              Your review could be the first one on this page.
            </p>
          </div>
        </Container>
      </section>

      <AreasServed />
      <CTASection title="Ready to be our next review?" />
    </>
  );
}
