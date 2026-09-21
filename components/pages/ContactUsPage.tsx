import Container from "@/components/Container";
import GetQuoteForm from "@/components/GetQuoteForm";
import { site } from "@/lib/site";
import { PhoneIcon, DocumentIcon, MapPinIcon, DollarIcon } from "@/components/icons";

const steps = [
  { number: "01", text: "Tell us your car's year, make and model." },
  { number: "02", text: "Describe its condition and your location." },
  { number: "03", text: "Get your cash offer over the phone." },
  { number: "04", text: "Schedule pickup and get paid on the spot." },
];

const checklist = [
  { icon: DocumentIcon, text: "Year, make and model" },
  { icon: DollarIcon, text: "Vehicle condition" },
  { icon: DocumentIcon, text: "Title availability" },
  { icon: MapPinIcon, text: "Your ZIP code or location" },
];

export default function ContactUsPage() {
  return (
    <section className="bg-ink-900">
      <Container className="grid grid-cols-1 gap-12 py-14 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <h1 className="font-display text-3xl uppercase tracking-wide text-white sm:text-4xl">
            Ready to Sell Your Car?
          </h1>
          <p className="mt-3 max-w-lg text-ink-200">
            Tell us about your vehicle and get a fair, no-obligation cash offer.
          </p>
          <a href={site.phoneHref} className="btn btn-primary mt-6">
            <PhoneIcon className="h-4 w-4" />
            Call {site.phone}
          </a>

          <div className="mt-12">
            <h2 className="text-xl font-bold text-white">
              We Buy Cars in Any Condition
            </h2>
            <p className="mt-2 text-ink-300">
              Whether you have a junk car, damaged vehicle, old car, used car, or
              newer model, we&apos;re ready to buy it anywhere in the USA.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start gap-3">
                  <span className="font-display text-2xl uppercase tracking-wide text-hazard-500">
                    {step.number}
                  </span>
                  <p className="pt-1 text-sm text-ink-200">{step.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-md border-2 border-hazard-400/50 bg-white/5 p-6">
            <h3 className="font-display text-lg uppercase tracking-wide text-hazard-400">Have Your Details Ready</h3>
            <ul className="mt-4 space-y-3">
              {checklist.map((item) => (
                <li key={item.text} className="flex items-center gap-3 text-sm text-ink-200">
                  <item.icon className="h-4 w-4 text-hazard-400" />
                  {item.text}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-ink-400">
              No forms · No pressure · No hidden fees
            </p>
          </div>
        </div>

        <GetQuoteForm />
      </Container>
    </section>
  );
}
