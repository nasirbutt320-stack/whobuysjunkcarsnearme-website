import Container from "./Container";
import { CarIcon, DocumentIcon, DollarIcon, TruckIcon } from "./icons";

const steps = [
  {
    icon: DocumentIcon,
    title: "Tell us about your car",
    body: "Year, make, model, and general condition. That's all we need to get started.",
  },
  {
    icon: DollarIcon,
    title: "Get a real cash offer",
    body: "We give you a straight number over the phone, based on real market value.",
  },
  {
    icon: TruckIcon,
    title: "Schedule your pickup",
    body: "Pick a time that works for you, often same-day or next-day, free of charge.",
  },
  {
    icon: CarIcon,
    title: "Get paid on the spot",
    body: "Cash or check in hand the moment your vehicle is picked up. No waiting.",
  },
];

export default function ProcessSteps({
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
          <h2 className="text-2xl font-bold text-navy-900 sm:text-3xl">{title}</h2>
          <p className="mt-3 text-navy-500">{subtitle}</p>
        </div>

        <div className="relative mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div
            className="pointer-events-none absolute top-9 hidden h-0.5 w-full bg-navy-100 lg:block"
            aria-hidden="true"
          />
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              <div className="flex items-center gap-3 lg:block">
                <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-gold-400 ring-4 ring-white">
                  {index + 1}
                </span>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-50 text-gold-600 lg:mt-4">
                  <step.icon className="h-6 w-6" />
                </span>
              </div>
              <h3 className="mt-4 text-lg font-bold text-navy-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-500">{step.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
