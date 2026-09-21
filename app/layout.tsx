import type { Metadata } from "next";
import { Anton, Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import { site } from "@/lib/site";

const displayFont = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
});

const bodyFont = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
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
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="flex min-h-screen flex-col bg-paper font-sans text-ink-900 antialiased">
        <Header />
        <main className="flex-1 pb-16 lg:pb-0">{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
