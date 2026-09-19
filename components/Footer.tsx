import Link from "next/link";
import Container from "./Container";
import Logo from "./Logo";
import { footerCompanyLinks, footerServices, site } from "@/lib/site";
import { PhoneIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-navy-100">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo dark />
          <p className="mt-4 text-sm leading-relaxed text-navy-200">
            Turning unwanted cars into cash, one call at a time — proudly buying
            vehicles of every kind, all across the USA.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-teal-400">
            Company Info
          </h3>
          <ul className="mt-4 space-y-2.5">
            {footerCompanyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-navy-200 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-teal-400">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5">
            {footerServices.map((service) => (
              <li key={service} className="text-sm text-navy-200">
                {service}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-teal-400">
            Connect
          </h3>
          <a
            href={site.phoneHref}
            className="mt-4 flex items-center gap-2 text-sm font-semibold text-white"
          >
            <PhoneIcon className="h-4 w-4 text-teal-400" />
            Call: +1-{site.phone}
          </a>
          <Link href="/get-quote/" className="btn btn-primary mt-5 w-full sm:w-auto">
            Get a free quote
          </Link>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-navy-300 sm:flex-row">
          <p>
            © {year} {site.domain} · All rights reserved
          </p>
          <div className="flex gap-5">
            <Link href="/privacy-policy/" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service/" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
