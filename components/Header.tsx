"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./Container";
import Logo from "./Logo";
import { navLinks, site } from "@/lib/site";
import { CloseIcon, MenuIcon, PhoneIcon } from "./icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur">
      <Container className="flex h-[76px] items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-5 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="whitespace-nowrap text-sm font-bold uppercase tracking-wide text-ink-700 transition-colors hover:text-rust-600"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a href={site.phoneHref} className="btn btn-outline-dark whitespace-nowrap">
            <PhoneIcon className="h-4 w-4" />
            Book call
          </a>
          <Link href="/get-quote/" className="btn btn-primary whitespace-nowrap">
            Get quote
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-md border-2 border-ink-900 text-ink-900 shadow-sticker-sm xl:hidden"
        >
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="border-t-2 border-ink-900 bg-paper px-5 pb-6 pt-4 xl:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-3 text-base font-bold uppercase tracking-wide text-ink-800 hover:bg-ink-900/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a href={site.phoneHref} className="btn btn-outline-dark w-full">
              <PhoneIcon className="h-4 w-4" />
              Call {site.phone}
            </a>
            <Link href="/get-quote/" className="btn btn-primary w-full">
              Get a free quote
            </Link>
          </div>
        </div>
      )}
      <div className="hazard-strip" />
    </header>
  );
}
