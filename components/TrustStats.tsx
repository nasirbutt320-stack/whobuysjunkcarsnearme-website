import Container from "./Container";
import { ShieldIcon, DollarIcon, StarIcon, CarIcon } from "./icons";

const stats = [
  { icon: ShieldIcon, value: "50 STATES", label: "Licensed and insured nationwide" },
  { icon: CarIcon, value: "250,000+", label: "Vehicles purchased since 2011" },
  { icon: StarIcon, value: "A+ RATING", label: "Better Business Bureau" },
  { icon: DollarIcon, value: "SAME-DAY", label: "Cash payment on pickup" },
];

export default function TrustStats() {
  return (
    <section className="bg-ink-900">
      <Container className="grid grid-cols-2 divide-x divide-y divide-white/10 py-10 sm:grid-cols-4 sm:divide-y-0">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center gap-2 px-3 py-4 text-center">
            <stat.icon className="h-6 w-6 text-hazard-400" />
            <span className="font-display text-2xl tracking-wide text-white">{stat.value}</span>
            <span className="text-xs font-medium text-ink-300">{stat.label}</span>
          </div>
        ))}
      </Container>
    </section>
  );
}
