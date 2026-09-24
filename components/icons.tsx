import {
  Car,
  Phone,
  CheckCircle,
  Star,
  MapPin,
  CaretDown,
  List,
  X,
  ShieldCheck,
  Clock,
  CurrencyDollar,
  Truck,
  FileText,
  ArrowRight,
  Lightning,
} from "@phosphor-icons/react/dist/ssr";

type IconProps = {
  className?: string;
};

export function CarIcon({ className }: IconProps) {
  return <Car className={className} weight="regular" />;
}

export function PhoneIcon({ className }: IconProps) {
  return <Phone className={className} weight="regular" />;
}

export function CheckIcon({ className }: IconProps) {
  return <CheckCircle className={className} weight="regular" />;
}

export function StarIcon({ className }: IconProps) {
  return <Star className={className} weight="fill" />;
}

export function MapPinIcon({ className }: IconProps) {
  return <MapPin className={className} weight="regular" />;
}

export function ChevronDownIcon({ className }: IconProps) {
  return <CaretDown className={className} weight="bold" />;
}

export function MenuIcon({ className }: IconProps) {
  return <List className={className} weight="regular" />;
}

export function CloseIcon({ className }: IconProps) {
  return <X className={className} weight="regular" />;
}

export function ShieldIcon({ className }: IconProps) {
  return <ShieldCheck className={className} weight="regular" />;
}

export function ClockIcon({ className }: IconProps) {
  return <Clock className={className} weight="regular" />;
}

export function DollarIcon({ className }: IconProps) {
  return <CurrencyDollar className={className} weight="regular" />;
}

export function TruckIcon({ className }: IconProps) {
  return <Truck className={className} weight="regular" />;
}

export function DocumentIcon({ className }: IconProps) {
  return <FileText className={className} weight="regular" />;
}

export function ArrowRightIcon({ className }: IconProps) {
  return <ArrowRight className={className} weight="regular" />;
}

export function BoltIcon({ className }: IconProps) {
  return <Lightning className={className} weight="fill" />;
}
