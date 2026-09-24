export type PostEntry = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: "blog" | "uncategorized";
  author: "admin" | "cashforcar39gmail-com";
  content: string[];
};

// Slugs match the live site's post-sitemap.xml exactly.
export const posts: PostEntry[] = [
  {
    slug: "the-ultimate-guide-to-selling-your-junk-car-tips-and-insights",
    title: "The Ultimate Guide to Selling Your Junk Car: Tips and Insights",
    excerpt:
      "Everything you need to know before you sell an old, damaged, or non-running vehicle for cash.",
    date: "2026-06-11",
    category: "blog",
    author: "cashforcar39gmail-com",
    content: [
      "Selling a junk car can feel overwhelming if you've never done it before, but breaking it down into a few simple steps makes the whole process a lot less intimidating. Start by getting honest about your vehicle's condition: does it run, does it roll, and what's the general state of the body and interior? Buyers will ask these questions first, so having answers ready speeds things up.",
      "Next, gather any paperwork you have. A title is helpful but often not required. Many buyers, including us, can work with a state ID and proof of ownership if the title has been lost. Knowing your vehicle's year, make, model, and approximate mileage will also help you get an accurate quote instead of a rough estimate.",
      "When you're ready to request offers, compare more than one. A legitimate buyer will give you a number over the phone and honor that number in person, provided the car matches what you described. Watch out for anyone who insists on seeing the car before naming any price at all, that's usually a sign the number will drop once they arrive.",
      "Finally, ask about towing and payment. Reputable junk car buyers cover towing at no cost and pay on the spot, whether that's cash, a check, or a digital transfer. If a buyer wants to charge you fees to take the car away, keep looking. A properly priced offer already accounts for the cost of pickup.",
    ],
  },
  {
    slug: "the-benefits-of-selling-your-old-vehicle",
    title: "The Benefits of Selling Your Old Vehicle",
    excerpt:
      "Freeing up space and turning an unused car into cash has more upside than most owners realize.",
    date: "2026-06-11",
    category: "blog",
    author: "cashforcar39gmail-com",
    content: [
      "Many vehicle owners put off dealing with an old car simply because it feels like a hassle. But once it's gone, most people are surprised at how much driveway, garage, or yard space it was actually taking up, space that can be used for literally anything else.",
      "There's also the financial side. An old vehicle sitting unused isn't earning you anything, and depending on your state, it may still be racking up registration or insurance costs. Selling it converts a depreciating, costly asset into cash you can put toward something useful right now.",
      "Selling responsibly is also better for the environment than letting a vehicle rust away. Reputable buyers recycle usable parts and dispose of fluids and hazardous materials properly, keeping them out of landfills and waterways.",
      "If you've been putting off dealing with an old car, getting a quote costs nothing and takes just a few minutes. Even if you decide not to sell right away, you'll at least know what it's worth.",
    ],
  },
  {
    slug: "our-services",
    title: "Our Services",
    excerpt:
      "A quick look at everything we handle when you sell your vehicle to us.",
    date: "2026-06-12",
    category: "uncategorized",
    author: "cashforcar39gmail-com",
    content: [
      "We buy cars, trucks, SUVs, and vans in nearly any condition, running or not, across all 50 states. Our services are built around removing every bit of friction from selling an unwanted vehicle.",
      "That includes a free, no-obligation cash quote based on your vehicle's year, make, model, and condition; free towing wherever you're located; help completing the paperwork required in your state; and same-day or next-day pickup in most areas.",
      "We also specialize in vehicles other buyers turn away: cars with no title, vehicles that don't run or roll, flood- or fire-damaged cars, and anything considered a total loss. If it has four wheels and you want it gone, we want to hear about it.",
    ],
  },
  {
    slug: "who-junk-cars-in-the-usa",
    title: "Who Junks Cars in the USA?",
    excerpt:
      "A look at the different kinds of buyers in the junk car industry and how to tell them apart.",
    date: "2026-08-19",
    category: "blog",
    author: "admin",
    content: [
      "The junk car industry in the United States is made up of a few different types of buyers, and knowing the difference can save you time and money. Local salvage yards typically buy based on scrap weight alone. They're a fine option if your car has truly reached the end of its useful life, but they rarely account for parts that still have resale value.",
      "Specialized junk car buyers, like us, look past scrap weight and consider the engine, transmission, catalytic converter, and other resalable components. That's usually why our offers come in higher than a straightforward scrap-metal price.",
      "There are also private buyers and part-out specialists who purchase specific vehicles for specific parts. These buyers can occasionally offer a great price for the right car, but the process tends to take longer and requires more back-and-forth than a direct sale.",
      "Whichever route you choose, the fastest way to know what your car is actually worth is to describe it accurately and get a real number, rather than assuming its only value is as scrap.",
    ],
  },
];

export function getPost(slug: string): PostEntry | undefined {
  return posts.find((p) => p.slug === slug);
}

export function postsForCategory(category: PostEntry["category"]): PostEntry[] {
  return posts.filter((p) => p.category === category);
}

export function postsForAuthor(author: PostEntry["author"]): PostEntry[] {
  return posts.filter((p) => p.author === author);
}
