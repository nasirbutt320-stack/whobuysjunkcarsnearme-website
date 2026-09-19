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
    <section className="section bg-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wide text-teal-600">
            {eyebrow}
          </span>
          <h2 className="mt-2 text-2xl font-extrabold text-navy-900 sm:text-3xl">
            {title}
          </h2>
          <p className="mt-3 text-navy-500">{subtitle}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-navy-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-card"
            >
              <span className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-white">
                {index + 1}
              </span>
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                <step.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-500">{step.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
