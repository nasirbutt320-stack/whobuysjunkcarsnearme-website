import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon } from "./icons";

export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-navy-100 bg-white p-3 shadow-[0_-8px_20px_-12px_rgba(11,23,52,0.25)] lg:hidden">
      <a href={site.phoneHref} className="btn btn-outline-dark flex-1">
        <PhoneIcon className="h-4 w-4" />
        Call now
      </a>
      <Link href="/get-quote/" className="btn btn-primary flex-1">
        Get Quote
      </Link>
    </div>
  );
}
