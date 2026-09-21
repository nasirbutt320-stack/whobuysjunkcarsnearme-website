import Container from "./Container";
import { CarIcon, DocumentIcon, DollarIcon, TruckIcon } from "./icons";

const steps = [
  {
    icon: DocumentIcon,
    title: "Tell us about your car",
    body: "Year, make, model, and general condition — that's all we need to get started.",
  },
  {
    icon: DollarIcon,
    title: "Get a real cash offer",
    body: "We give you a straight number over the phone, based on real market value.",
  },
  {
    icon: TruckIcon,
    title: "Schedule your pickup",
    body: "Pick a time that works for you — often same-day or next-day, free of charge.",
  },
  {
    icon: CarIcon,
    title: "Get paid on the spot",
    body: "Cash or check in hand the moment your vehicle is picked up. No waiting.",
  },
];

export default function ProcessSteps({
  eyebrow = "Simple process",
  title = "Sell your junk car in 4 easy steps",
  subtitle = "No mechanic visits, no waiting rooms, no paperwork headaches. We handle everything.",
}: {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="section bg-paper">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-rust-600">
            {eyebrow}
          </span>
          <h2 className="mt-3 font-display text-3xl uppercase tracking-wide text-ink-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-ink-500">{subtitle}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-md border-2 border-ink-900 bg-white p-6 pt-8 shadow-sticker transition-transform hover:-translate-y-1"
            >
              <span className="absolute -top-5 left-5 flex h-10 w-10 items-center justify-center rounded-full border-2 border-ink-900 bg-hazard-400 font-display text-lg text-ink-900">
                {index + 1}
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-md bg-ink-900 text-hazard-400">
                <step.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-extrabold text-ink-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{step.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
