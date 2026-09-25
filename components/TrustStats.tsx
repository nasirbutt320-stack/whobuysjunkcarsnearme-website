import Container from "./Container";
import { ShieldIcon, DollarIcon, StarIcon, CarIcon } from "./icons";

const stats = [
  { icon: ShieldIcon, value: "50 states", label: "Nationwide coverage" },
  { icon: CarIcon, value: "Any condition", label: "Running or not, we buy it" },
  { icon: StarIcon, value: "No pressure", label: "Free, no-obligation quotes" },
  { icon: DollarIcon, value: "Same-day", label: "Cash payment on pickup" },
];

export default function TrustStats() {
  return (
    <section className="border-y border-navy-100 bg-white">
      <Container className="grid grid-cols-2 gap-6 py-10 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center text-center">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-50 text-gold-600">
              <stat.icon className="h-5 w-5" />
            </span>
            <span className="mt-3 text-lg font-extrabold text-navy-900">{stat.value}</span>
            <span className="mt-1 text-xs text-navy-500">{stat.label}</span>
          </div>
        ))}
      </Container>
    </section>
  );
}
