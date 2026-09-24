import { site } from "@/lib/site";

export default function TopBar() {
  return (
    <div className="hidden bg-navy-950 text-navy-200 sm:block">
      <div className="container-page flex h-9 items-center justify-between text-xs font-medium">
        <span>Free towing &amp; pickup, nationwide &middot; No title? No problem.</span>
        <a href={site.phoneHref} className="font-semibold text-gold-400 hover:text-gold-300">
          {site.phone}
        </a>
      </div>
    </div>
  );
}
