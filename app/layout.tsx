import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import { site } from "@/lib/site";
import { GHL_TRACKING_ID } from "@/lib/leadForm";
import JsonLd from "@/components/JsonLd";
import { organizationSchema } from "@/lib/schema";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}? Instant Cash Across the USA`,
    template: `%s | ${site.name}`,
  },
  description:
    "Sell your junk, wrecked, or unwanted car for cash. Free towing, same-day pickup, and fair offers in all 50 states.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <JsonLd data={organizationSchema()} />
        <Script
          src="https://link.cashforcarsflorida.net/js/external-tracking.js"
          data-tracking-id={GHL_TRACKING_ID}
          strategy="afterInteractive"
        />
        <Header />
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
