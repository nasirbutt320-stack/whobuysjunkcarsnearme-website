import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import GhlTrackingScript from "@/components/GhlTrackingScript";
import { site } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import { organizationSchema } from "@/lib/schema";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

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
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <JsonLd data={organizationSchema()} />
        <GhlTrackingScript />
        <TopBar />
        <Header />
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
