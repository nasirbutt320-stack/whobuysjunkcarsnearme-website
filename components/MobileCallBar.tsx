import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon } from "./icons";

export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t-2 border-ink-900 bg-paper p-3 lg:hidden">
      <a href={site.phoneHref} className="btn btn-outline-dark flex-1">
        <PhoneIcon className="h-4 w-4" />
        Call now
      </a>
      <Link href="/get-quote/" className="btn btn-primary flex-1">
        Get quote
      </Link>
    </div>
  );
}
