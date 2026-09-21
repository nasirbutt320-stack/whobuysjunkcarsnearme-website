import Link from "next/link";
import { CarIcon } from "./icons";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3 shrink-0">
      <span className="flex h-11 w-11 -rotate-3 items-center justify-center rounded-md border-2 border-ink-900 bg-hazard-400 text-ink-900 shadow-sticker-sm transition-transform group-hover:rotate-0">
        <CarIcon className="h-6 w-6" />
      </span>
      <span className={`leading-none ${dark ? "text-white" : "text-ink-900"}`}>
        <span className="block text-[0.65rem] font-bold uppercase tracking-[0.2em] text-hazard-500">
          Who Buys
        </span>
        <span className="block font-display text-xl uppercase tracking-wide">
          Junk Car
        </span>
      </span>
    </Link>
  );
}
