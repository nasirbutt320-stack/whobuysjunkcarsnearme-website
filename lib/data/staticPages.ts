export type StaticPageMeta = {
  slug: string;
  title: string;
  description: string;
};

// Slugs match the live site's page-sitemap.xml exactly.
export const staticPages: StaticPageMeta[] = [
  {
    slug: "watch-video",
    title: "Watch Video - Who Buys Junk Cars Near Me",
    description: "See exactly how selling your junk car for cash works, from quote to pickup.",
  },
  {
    slug: "watch-video-2",
    title: "Watch Video - See How Pickup Works",
    description: "A behind-the-scenes look at what happens on pickup day when you sell your car.",
  },
  {
    slug: "contact-us",
    title: "Contact Us - Who Buys Junk Cars Near Me?",
    description: "Tell us about your vehicle and get a fair, no-obligation cash offer.",
  },
  {
    slug: "about-us",
    title: "About Us | Who Buys Junk Cars Near Me?",
    description: "Learn how we buy junk, damaged, and unwanted cars quickly and fairly across the USA.",
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy | Who Buys Junk Cars Near Me",
    description: "How we collect, use, and protect your information.",
  },
  {
    slug: "terms-of-service",
    title: "Terms of Service | Who Buys Junk Cars Near Me",
    description: "The terms that govern quotes, pickups, and payment on this site.",
  },
  {
    slug: "we-buy",
    title: "We Buy Junk Cars for Cash Nationwide | Free Towing",
    description: "We buy cars of all makes and models, regardless of age or condition.",
  },
  {
    slug: "area-we-serve",
    title: "Junk Car Buyer Near Me | Serving All 50 States",
    description: "Nationwide junk car pickup, no matter which state you call from.",
  },
  {
    slug: "reviews",
    title: "Customer Reviews | Who Buys Junk Cars Near Me",
    description: "Real feedback from real sales, updated as it comes in.",
  },
  {
    slug: "faqs",
    title: "Junk Car Selling FAQs | What You Need To Know",
    description: "Straightforward answers to the most common junk car selling questions.",
  },
  {
    slug: "get-quote",
    title: "Get A Free Junk Car Quote | Instant Cash Offer",
    description: "Request your free, no-obligation cash offer in minutes.",
  },
  {
    slug: "gallery",
    title: "See the Vehicles That We Buy - Junk, Used, Old & New",
    description: "A look at the range of vehicles we've recently purchased.",
  },
];

export function getStaticPageMeta(slug: string): StaticPageMeta | undefined {
  return staticPages.find((p) => p.slug === slug);
}
