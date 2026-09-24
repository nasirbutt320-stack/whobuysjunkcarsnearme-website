import Link from "next/link";
import { CarIcon } from "./icons";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500 text-navy-900">
        <CarIcon className="h-6 w-6" />
      </span>
      <span className={`leading-tight ${dark ? "text-white" : "text-navy-900"}`}>
        <span className="block text-[0.65rem] font-bold uppercase tracking-[0.14em] text-gold-500">
          Who Buys
        </span>
        <span className="block font-display text-lg font-bold uppercase tracking-tight">
          Junk Car
        </span>
      </span>
    </Link>
  );
}
