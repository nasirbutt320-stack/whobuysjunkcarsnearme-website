export type PostFaq = {
  question: string;
  answer: string;
};

export type PostEntry = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: "blog" | "uncategorized";
  author: "admin" | "cashforcar39gmail-com";
  content: string[];
  heroImage?: string;
  heroImageAlt?: string;
  seoTitle?: string;
  faqs?: PostFaq[];
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
    faqs: [
      {
        question: "How do I know if my car qualifies as a junk car?",
        answer:
          "A car typically qualifies if it's old, high-mileage, or has mechanical or body damage that makes it worth more to sell than to keep fixing. It doesn't need to be completely undrivable to sell it this way.",
      },
      {
        question: "Do I need the title to sell my junk car?",
        answer:
          "Not always. Many buyers, including us, can work with a state ID and proof of ownership if the title has been lost, though the exact requirements depend on your state.",
      },
      {
        question: "How is my junk car's value determined?",
        answer:
          "Buyers typically look at the vehicle's year, make, model, mileage, running condition, and which major parts are still usable, rather than applying one fixed price to every car.",
      },
      {
        question: "Is towing really free when I sell my car?",
        answer:
          "With a reputable buyer, yes. Towing is built into the offer at no extra cost, and pickup can usually be scheduled within a day or two.",
      },
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
    faqs: [
      {
        question: "Is it worth selling a car that just sits unused?",
        answer:
          "Usually, yes. A car sitting idle isn't earning you anything and may still cost you in registration or insurance, so turning it into cash is typically better than letting it keep depreciating.",
      },
      {
        question: "Does selling an old car help the environment?",
        answer:
          "It can, as long as the buyer handles it responsibly. Reputable buyers recycle usable parts and dispose of fluids and hazardous materials properly instead of letting a vehicle rust and leak.",
      },
      {
        question: "Do I need to fix anything before I sell?",
        answer:
          "No. Most junk car buyers base their offer on the vehicle's actual condition, so repairs generally aren't necessary before you sell.",
      },
      {
        question: "How much space will I actually get back by selling it?",
        answer:
          "That depends on the vehicle and where it's parked, but owners are often surprised how much driveway, garage, or yard space a single unused car was taking up.",
      },
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
    faqs: [
      {
        question: "What's the difference between a salvage yard and a junk car buyer?",
        answer:
          "Salvage yards generally pay based on scrap weight alone, while specialized junk car buyers also factor in the resale value of usable parts like the engine or transmission, which often results in a higher offer.",
      },
      {
        question: "Are private part-out buyers a good option?",
        answer:
          "They can be, especially for a specific part in demand, but the process usually takes longer and involves more back-and-forth than selling directly to a junk car buyer.",
      },
      {
        question: "How do I know if an offer is actually fair?",
        answer:
          "Comparing offers from more than one type of buyer, a salvage yard, a specialized junk car buyer, and a private buyer if you have time, is the most reliable way to tell whether a quote reflects your car's real value.",
      },
      {
        question: "Does the type of buyer matter if my car is only good for scrap?",
        answer:
          "It still can. Even a vehicle headed for scrap may have parts worth something to a specialized buyer, so it's worth getting more than one quote before assuming the car's only value is its weight in metal.",
      },
    ],
  },
  {
    slug: "how-much-is-my-junk-car-worth-a-state-by-state-pricing-guide",
    title: "How Much Is My Junk Car Worth? A State-by-State Pricing Guide",
    excerpt:
      "A breakdown of the real factors that set a junk car's cash value and why the same vehicle can get different offers depending on where you live.",
    date: "2026-10-07",
    category: "blog",
    author: "cashforcar39gmail-com",
    content: [
      "If you've searched \"how much is my junk car worth,\" the honest answer is that there isn't one number. There's a range, and where your car lands in it depends on a handful of factors that have nothing to do with guesswork.",
      "The biggest factor is weight: specifically, how much steel and other metal your car has to offer. Junk car buyers and salvage yards work with scrap metal processors, and those processors pay by the pound. A full-size truck or SUV has more metal in it than a compact sedan, so all else being equal, bigger vehicles tend to bring in more. Scrap metal prices also move with the broader commodities market, which is why the same car might get a slightly different offer this month than it would have a few months ago.",
      "Running condition matters too, though maybe not the way most people assume. A car that runs and drives is worth more than one that doesn't, but a non-running car still has value. Buyers who specialize in junk vehicles, rather than a general salvage yard, often look past whether it starts and instead evaluate which components are still usable. An engine or transmission that's intact and functional holds resale value even if the rest of the car is done for.",
      "That's the second factor: parts value. Certain components stay in demand regardless of the vehicle's overall condition. Catalytic converters are a good example, since they contain precious metals and get resold into the recycling chain. Engines, transmissions, alternators, and even intact wheels and tires can add to an offer if they're still usable. A car that's already been stripped before you call for a quote will naturally be worth less, since the buyer is now just paying for what's left.",
      "Make and model play a role too, mostly through parts demand. A popular model with plenty of similar vehicles still on the road usually has steady demand for its used parts, which can support a better offer. A rare or unusual model might have less demand for parts even if the car itself is in decent shape. It's one reason two owners describing what sounds like a similar car can end up with different quotes.",
      "Location affects pricing more than most people realize. Scrap metal buyers and parts demand vary by region, and so does the number of junk car buyers competing for business in a given area. More buyers in an area tends to push offers up through competition. Fewer options nearby can mean lower offers, partly because towing a vehicle farther costs more. Some states also add extra steps around vehicle titling and disposal, which can factor into how a buyer prices an offer.",
      "Title status matters as well. Having a clean title generally makes the transaction simpler and can support a stronger offer, since the buyer has no question about ownership or how the vehicle will be re-titled or scrapped. Losing your title doesn't mean you can't sell the car, but you may need a few extra steps depending on your state's DMV requirements, and that can affect the offer too.",
      "There are a few things within your control that can make the process smoother and sometimes support a better offer. Having your title or an alternative ownership document ready, listing out any major missing or damaged parts upfront, and giving an accurate mileage and condition report all help a buyer quote a firm number instead of a lowball figure they plan to renegotiate once they see the car in person. Getting a second opinion from another buyer before you commit also costs nothing and can tell you whether the first offer was reasonable for your area.",
      "None of this means you should try to estimate your car's value from a general price chart online, since those are built on vehicles and conditions that aren't yours. The only way to get a number that applies to your specific car is to describe it accurately, year, make, model, mileage, running condition, and any missing or damaged parts, and get a real quote based on that. A legitimate buyer should be able to give you a number over the phone without seeing the car first, and that number shouldn't change once they arrive, as long as the car matches what you described.",
      "If you want to know what your vehicle is actually worth, describing it and asking is faster than any chart. Getting a quote takes a few minutes, costs nothing, and gives you a real number instead of a guess, whether you decide to sell today or just want to know where you stand.",
    ],
    faqs: [
      {
        question: "Why do junk car offers vary so much from state to state?",
        answer:
          "Local scrap metal prices, parts demand, and how many buyers are competing in your area all vary by region, which is why the same vehicle can get different offers depending on where you live.",
      },
      {
        question: "Does a non-running car still have value?",
        answer:
          "Yes. Even if a car won't start, components like the engine, transmission, catalytic converter, and wheels can still have resale value if they're intact.",
      },
      {
        question: "Will my offer change once the buyer sees the car in person?",
        answer:
          "It shouldn't, as long as the vehicle matches what you described. A legitimate buyer gives you a number based on accurate details and honors it at pickup.",
      },
      {
        question: "Should I rely on an online junk car value chart?",
        answer:
          "Not as a final number. Those charts are built on different vehicles and conditions than yours, so describing your specific car and getting a real quote is more accurate than any general price chart.",
      },
    ],
  },
  {
    slug: "cash-for-junk-cars-utah",
    title: "Cash For Junk Cars Utah",
    seoTitle: "Cash For Junk Cars Utah | Get Paid Fast",
    excerpt:
      "Sell your junk car in Utah for a fair price. Learn how payment actually works and get a free same day offer with pickup included.",
    date: "2026-10-08",
    category: "blog",
    author: "cashforcar39gmail-com",
    content: [
      "Getting cash for a junk car sounds simple and mostly it is. There is one detail about how payment actually works in Utah that catches a lot of sellers off guard.",
      "## What Cash For Junk Cars Really Means",
      "Most people picture a stack of bills handed over at pickup. In practice many buyers pay by check or money order instead once the deal crosses a certain dollar amount. Utah law actually requires this for metal recyclers buying scrap over a set value in one transaction. It is meant to stop stolen vehicles and parts from being sold quickly for untraceable money. The end result for you is the same fast payoff, just possibly a check in hand instead of literal cash.",
      "## Why This Detail Actually Helps You",
      "A paper trail protects the seller too. If anything about the sale is ever questioned later a check or money order shows exactly when and how much you were paid. Ask upfront how your specific buyer plans to pay so there are no surprises on pickup day.",
      "## What Changes The Number You Get",
      "The offer usually comes down to your car's weight in scrap metal, current metal prices and any parts still worth reselling. A running car with clean paperwork tends to land higher than one that is missing pieces or has been sitting for years. If your title is the sticking point, our [sell junk car for cash no title Utah](/sell-junk-car-for-cash-no-title-utah/) guide walks through the fix.",
      "## Getting To A Number Fast",
      "Share your car's year, make, model and general condition. Most sellers hear back the same day with a real figure rather than a rough guess. From there scheduling pickup is usually the only step left.",
      "## What Pickup Day Looks Like",
      "A driver arrives at the time you picked. You sign the title over and hand off the keys. Payment happens on the spot whether that lands as cash, a check or a money order depending on the amount.",
      "## Common Questions",
      "**Will I actually get paid in cash?**",
      "Sometimes. Above a certain amount Utah law pushes payment toward check or money order instead.",
      "**Does that change how fast I get paid?**",
      "No. Payment still happens the same day at pickup either way.",
      "**What affects my offer the most?**",
      "Mostly the car's weight in metal and its current condition.",
      "**Do I need anything besides the title?**",
      "A valid photo ID and your keys cover most situations.",
      "For more on how buyers land on a number for a rougher car check [scrap cars for cash Utah](/scrap-cars-for-cash-utah/) or see which vehicles typically qualify on our [junk cars for cash Utah](/junk-cars-for-cash-utah/) page.",
    ],
  },
  {
    slug: "junk-cars-for-cash-utah",
    title: "Junk Cars For Cash Utah",
    seoTitle: "Junk Cars For Cash Utah | Pickup Statewide",
    excerpt:
      "Sell your junk car anywhere in Utah to a licensed buyer. Get a fair cash offer and free pickup with payment the same day.",
    date: "2026-10-08",
    category: "blog",
    author: "cashforcar39gmail-com",
    content: [
      "A junk car does not need to sit forever. Buyers all across Utah pick up junk cars every day and pay on the spot. The process is simpler than most people expect once they know how it works.",
      "## What Counts As A Junk Car Here",
      "Utah treats a vehicle as junk once it can no longer be driven safely or has been declared a total loss. That covers cars with a dead engine, a rusted frame or damage from a wreck. State rules also say a junk vehicle has to be sold to a licensed dismantler or recycler rather than just anyone.",
      "## Why That Licensing Rule Matters To You",
      "This rule protects you as the seller. A licensed buyer knows how to handle the paperwork correctly and follow state disposal rules. It also means the sale holds up legally so nothing comes back to you later tied to that car.",
      "## Getting An Actual Number For Your Car",
      "The offer comes down to a few basics. The vehicle's weight in scrap metal. Any parts still good enough to resell. Current market rates for steel and aluminum in the area. If paperwork is the part holding you up check our [sell junk car for cash no title Utah](/sell-junk-car-for-cash-no-title-utah/) guide since a missing title rarely kills a sale.",
      "## Coverage Across The State",
      "Salt Lake City, Provo, Ogden and West Valley City all get regular pickup requests. Smaller towns get covered too since most buyers send a driver out rather than asking you to bring the car in. Distance from a big city usually does not change the offer much.",
      "## How The Process Runs Start To Finish",
      "Share the basics on your car including make, model and condition. Hear back with a number the same day in most cases. Set a pickup time that works for your schedule. Sign the title over and get paid right as the car leaves.",
      "## Common Questions",
      "**Is selling a junk car in Utah actually legal without a dealer?**",
      "Yes as long as the buyer is a licensed dismantler or recycler.",
      "**Does a rougher looking car still sell?**",
      "Yes, the condition affects the price but rarely stops a sale outright.",
      "**Do small towns get the same service as big cities?**",
      "Generally yes since most buyers tow the car themselves rather than needing you to deliver it.",
      "**How fast does payment happen?**",
      "Usually right at pickup once the title is signed over.",
      "For a closer look at how the payout gets calculated check [scrap cars for cash Utah](/scrap-cars-for-cash-utah/) or jump straight to a [free quote](/get-quote/).",
    ],
  },
  {
    slug: "sell-junk-car-for-cash-no-title-utah",
    title: "Sell Junk Car For Cash No Title Utah",
    seoTitle: "Sell Junk Car For Cash No Title Utah | Fast Offers",
    excerpt:
      "Missing your title does not stop a sale in Utah. Learn how duplicate titles work and get cash for your junk car today with free pickup.",
    date: "2026-10-08",
    category: "blog",
    author: "cashforcar39gmail-com",
    content: [
      "Losing a car title feels like a dead end. It is not. Buyers across Utah handle no title sales every week and the fix is usually simpler than people expect.",
      "## Why Titles Go Missing",
      "Titles get lost in moves. They get lost in old paperwork drawers. Some cars were bought years ago and the title never got sorted out. None of that is unusual and none of it should stop a sale.",
      "## Getting A Replacement Title In Utah",
      "Utah lets you request a duplicate title through the state Motor Vehicle Portal online. You can also mail in a form called TC-123 along with a small fee. Most replacements take about one to two weeks to arrive. If a loan on the car was paid off years ago, check that the lien was actually cleared in the state system since an old lien can hold up the request.",
      "## What If You Do Not Want To Wait",
      "Some buyers can still work with you while a duplicate title is being processed. This depends on the buyer and the car so it is worth asking directly rather than assuming the sale has to wait. If you already checked our [scrap cars for cash Utah](/scrap-cars-for-cash-utah/) guide you know condition and metal weight still drive most of the offer regardless of paperwork status.",
      "## What You Should Have Ready",
      "A valid photo ID is required either way. Proof that any old loan was paid off helps if the lien question comes up. Keys and any spare fobs speed up pickup once everything else is settled.",
      "## How The Sale Moves Forward",
      "Describe the car and mention the title situation upfront. Get an offer back the same day in most cases. Handle the title paperwork based on what is missing. Get paid once everything is signed and the car is picked up.",
      "## Common Questions",
      "**Can I sell a car in Utah with no title at all?**",
      "Often yes. It depends on the buyer and how far along the replacement title is.",
      "**How long does a duplicate title take in Utah?**",
      "Usually one to two weeks through the state Motor Vehicle Portal.",
      "**Does an old paid off loan still count as a lien?**",
      "It can if it was never officially cleared in the state system. Check before applying.",
      "**Will the offer be lower with no title?**",
      "Not usually. The car's condition and weight matter more than paperwork status.",
      "Ready to see what your car is worth? Head to our [Utah page](/utah/) for pickup details or jump straight to a [free quote](/get-quote/).",
    ],
  },
  {
    slug: "scrap-cars-for-cash-utah",
    title: "Scrap Cars For Cash Utah",
    seoTitle: "Scrap Cars For Cash Utah | Get Paid Today",
    excerpt:
      "Turn your scrap car into cash anywhere in Utah. Free pickup, a fair price based on weight and parts, and payment the same day you sell.",
    date: "2026-10-08",
    category: "blog",
    author: "cashforcar39gmail-com",
    content: [
      "That scrap car sitting in your yard is still worth something. Steel, aluminum, and any working parts inside it all carry value. In Utah scrap cars for cash is one of the fastest ways to clear that space and walk away with real money.",
      "## What Actually Makes A Car Scrap",
      "A car becomes scrap once fixing it costs more than it is worth. Common signs include a blown engine, a rusted frame, flood damage or simple old age. Utah law treats a car as junk once it is inoperable, unsafe to drive or declared a total loss by an insurance company. Any of those situations can still be sold without trouble.",
      "## What Determines The Payout",
      "Three things drive the price. How much the car weighs in scrap metal terms. Whether the parts are still usable for resale. What scrap yards in your part of the state are currently paying for metal. Steel prices shift often so the same car can be worth more one month than the next. Trucks and larger vehicles usually bring more simply because there is more metal to work with.",
      "## What You Need Before You Call",
      "Utah requires a signed title to complete the sale. A valid photo ID is also needed. If there is a lien on the car you will need proof it is cleared. Take your plates off before pickup since Utah asks sellers to keep those rather than hand them over with the car.",
      "## No Title Does Not End The Sale",
      "Losing a title happens more than people think. You can request a duplicate through the Utah DMV for a small fee. Some buyers can still work with you while that paperwork is in process so it is worth asking rather than assuming the sale is off.",
      "## How The Sale Actually Works",
      "Give a quick rundown of your car including its age, make, model and current shape. Get an offer back the same day in most cases. Pick a pickup time that works for you. Hand over the signed title and keys and get paid on the spot.",
      "## After The Sale Is Done",
      "Utah asks sellers to notify the DMV once a vehicle is sold. This protects you from any tickets or issues tied to the car after it leaves your hands. Keep a copy of the signed title transfer for your own records too.",
      "## Common Questions",
      "**What paperwork lets me scrap a car in Utah?**",
      "A signed title covers almost every case. A lost title can be replaced through the DMV first.",
      "**What sets the number a scrap car sells for?**",
      "It comes down to the vehicle's weight, its usable parts, and current scrap metal rates.",
      "**When does the money actually change hands?**",
      "Payment happens at pickup once the title is signed over.",
      "**Is towing included?**",
      "Yes most buyers include free towing as part of the offer.",
      "**Do I need to remove my plates?**",
      "Yes, Utah asks you to keep your plates rather than leave them in the car.",
      "## Ready To Turn That Car Into Cash",
      "A scrap car sitting idle only loses value over time. Get an offer today and see what yours is actually worth. Start with a [free quote](/get-quote/).",
    ],
  },
  {
    slug: "do-i-need-a-title-to-sell-my-junk-car",
    title: "Do I Need a Title to Sell My Junk Car? State-by-State Rules",
    excerpt:
      "Losing your title doesn't automatically end a junk car sale. Here's a general look at how duplicate titles, bonded titles, and other alternatives usually work, and why checking your own state is the one step you shouldn't skip.",
    date: "2026-10-18",
    category: "blog",
    author: "cashforcar39gmail-com",
    content: [
      "If you've lost your title and want to sell a junk car, the question that matters most is whether it kills the deal. Usually it doesn't, though the real answer depends on your state. Title rules for selling an unwanted vehicle aren't federal, they're set DMV by DMV, so what works for someone a few states away isn't necessarily the rule where you live.",
      "A title exists to prove who legally owns a car, which is why buyers care about it. Without one, a buyer has no clean way to confirm the car isn't stolen, isn't still carrying a lien, or wasn't passed down through owners who never bothered to update the paperwork. A bank asks for the same kind of proof of ownership before it lets you refinance a house, and a junk car buyer is working off the same logic. The title is the paper trail.",
      "That said, losing a title doesn't automatically mean starting over from zero. Most states offer a path to replace one, and the paths tend to fall into a few general categories. If you once had a title and it's simply gone, missing, water-damaged, shredded by accident, most DMVs let you apply for a duplicate using your vehicle's VIN and your own identification. If you never had a title at all, maybe you bought the car informally years ago and the paperwork never got sorted out, a bonded title is the more common fix. That process involves a surety bond tied to the vehicle's value, which essentially backs up your claim of ownership in place of the missing document. Some states also accept a notarized affidavit when the circumstances are clear enough, though that option is far less universal than the first two.",
      "None of those processes are instant, and none of them are free, so it's worth weighing the cost and time against what you're actually trying to accomplish. If the car runs and still has resale value beyond scrap, sorting out a replacement title first is often worth it. If it's sitting dead in the driveway and the goal is simply to get it gone, that's where talking to a buyer before you start the DMV process pays off, since the paperwork hurdle might matter less than you think.",
      "This is also where it helps to separate two different situations that get lumped together. A car that runs and has real resale value is a different conversation than a car that's headed for scrap regardless. Buyers who specialize in non-running or heavily damaged vehicles are often set up to work within whatever alternative process your state allows, since they deal with this far more often than a private buyer or a dealership would. That doesn't mean a title never matters for a junk car sale, some states are strict about it even for scrap vehicles, but it does mean the bar is frequently lower than people assume going in.",
      "A couple of situations complicate things further and are worth sorting out before you call anyone. If there's still a loan on the car, even an old one you think you paid off, check that the lien was actually released in your state's system and not just paid off on your end. An unreleased lien can stall a sale even if you have cash in hand to prove the loan is done. If the car came to you informally, inherited from a relative, bought off a friend who never transferred anything, that's generally the scenario bonded titles exist for, and it's worth starting that process sooner rather than later if you think you'll need it.",
      "Before you reach out for a quote, it helps to gather what you do have rather than assuming you have nothing. A government-issued photo ID, the vehicle's VIN, any old registration or insurance paperwork, even a bill of sale from when you originally got the car, can all help establish ownership even without a title in hand. The more of this you can show, the more options a buyer typically has for working with your specific situation.",
      "Because the actual rules shift from state to state, and sometimes change, treat anything you read online, including this, as a starting point rather than a final answer. Your state's DMV website or a quick call to a local office will tell you exactly what's required where you live, what a duplicate or bonded title costs right now, and how long it typically takes. That's worth doing even if you're fairly sure you know the answer, since titling rules are the kind of thing that get updated without much fanfare.",
      "If you're trying to sell a car that doesn't run and the missing title has you stuck, the simplest next step is usually to just describe the situation to a buyer and ask. Mention upfront that you don't have the title and why, whether it's lost, never transferred, or tied up in an old lien, and a legitimate junk car buyer should be able to tell you right away whether that's workable or what you'd need first. Getting a quote costs nothing, and you'll often learn more about your actual options in that one conversation than from an hour of searching state statutes on your own.",
    ],
    faqs: [
      {
        question: "What if I never had a title for the car at all?",
        answer:
          "That's generally what a bonded title process exists for. It involves a surety bond tied to the vehicle's value that backs up your ownership claim in place of the missing document.",
      },
      {
        question: "Can I sell a car with a lien that's already paid off?",
        answer:
          "It's worth confirming the lien was actually released in your state's system, not just paid off on your end, since an unreleased lien can stall a sale even with proof the loan is settled.",
      },
      {
        question: "What documents help if I don't have a title?",
        answer:
          "A government-issued photo ID, your vehicle's VIN, old registration or insurance paperwork, and a bill of sale can all help establish ownership even without a title in hand.",
      },
      {
        question: "Do all junk car buyers require a title?",
        answer:
          "No. Buyers who specialize in non-running or problem vehicles are often set up to work within whatever alternative process your state allows, though some states are stricter about it than others, even for scrap vehicles.",
      },
    ],
  },
  {
    slug: "what-actually-happens-to-your-car-after-you-junk-it",
    title: "What Actually Happens to Your Car After You Junk It?",
    excerpt:
      "From the tow truck to the scrap yard, here's the real path a car takes once it's sold for junk, and why so little of it actually goes to waste.",
    date: "2026-10-15",
    category: "blog",
    author: "cashforcar39gmail-com",
    content: [
      "Once the tow truck pulls away with your old car, most people never think about it again. The check has cleared, the driveway is clear, and that's usually where the story ends for the seller. But what happens to junk cars after that sale is actually just getting started, a process with several distinct stages before the car stops existing as a car at all.",
      "The first stop is paperwork, not the crusher. Before anything happens to the vehicle, the buyer needs the title transferred into their name, since that's what legally shifts ownership and liability away from you. If you left anything personal in the car, the glove box, the trunk, under the seats, it's worth grabbing before pickup, since a salvage yard isn't responsible for sorting through someone's belongings once a vehicle is on their lot.",
      "After that, the car gets drained. Working on cars full of old fluids is both a safety issue and an environmental one, so this step happens early. A yard will typically pull the battery, remove the refrigerant from the AC system, and drain the oil, gasoline, coolant, and brake fluid, sometimes through holes drilled specifically for this purpose. Usable fluids get filtered and reused; the rest are disposed of through hazardous waste channels rather than left to leak into the ground.",
      "Next comes the part most sellers underestimate: how much of the car still has value once it's off the road. Engines, transmissions, alternators, starters, wheels, and tires often come out intact and get resold as used parts for other vehicles still on the road. Catalytic converters get special attention since they contain small amounts of platinum, palladium, and rhodium, which makes them worth recovering and recycling separately from the rest of the metal. This is also the stage where a car's specific condition matters most. A vehicle with more usable components is worth more to a buyer than one that's already been stripped, which is part of why two seemingly similar cars can get different offers.",
      "None of this happens the moment the tow truck leaves your driveway. Yards typically work through a backlog of vehicles, pulling parts as cars come up in the queue or as a specific part gets ordered by a mechanic or another shop. A car can sit mostly intact in a yard for weeks or months before it's stripped down, which is part of why some yards let you buy used parts off a vehicle that's been sitting there a while.",
      "Only after the useful parts and hazardous materials are gone does the car actually get crushed. A hydraulic crusher flattens what's left of the body into a compact slab, mostly to make it cheaper and easier to move. From there, it's usually trucked to a shredding facility that breaks the flattened metal down into much smaller pieces.",
      "Shredded metal doesn't stay mixed together for long. Large magnets and other separation equipment sort steel from aluminum, copper, and other metals mixed into the shredded material, since each one gets recycled through a different stream. Once sorted, the steel gets baled or piled with steel from other vehicles and shipped off to mills that melt it down and turn it into new raw material.",
      "That new material doesn't necessarily become another car. Recycled automotive steel gets used across construction, appliances, and plenty of other manufacturing, including new vehicles. It's genuinely closer to a loop than a one-way trip to a landfill, since metal from an old car commonly ends up as part of something else entirely down the line.",
      "Knowing this process matters for more than curiosity. It's also why the buyer you choose matters: draining fluids and pulling usable parts properly before anything gets crushed, then sending the rest through real recycling channels, takes more effort than just hauling a car to a scrap pile. Asking a buyer how they handle fluid disposal is a reasonable question before you agree to a pickup, and a legitimate one should be able to answer it without hesitation.",
      "If you've been holding onto a car because it feels wasteful to send it off, it's worth knowing that very little of it actually goes to waste. Between resold parts and recycled metal, most of what made up your car continues on in some form. Getting a quote costs nothing and takes a few minutes if you're ready to see what the next stage of your car's life is worth to you right now.",
    ],
    faqs: [
      {
        question: "What happens to the fluids in my car after it's junked?",
        answer:
          "They're drained early in the process. Usable fluids get filtered and reused, while the rest are disposed of through hazardous waste channels instead of being left to leak into the ground.",
      },
      {
        question: "Does my car get crushed right away?",
        answer:
          "No. Usable parts and hazardous materials are removed first, and a vehicle can sit mostly intact in a yard for weeks or months before it's actually crushed.",
      },
      {
        question: "Does recycled car metal become a new car?",
        answer:
          "Not necessarily. Recycled automotive steel gets used across construction, appliances, and other manufacturing, so it's more of a loop than a one-way path back into another vehicle.",
      },
      {
        question: "Should I ask a buyer how they handle fluid disposal?",
        answer:
          "Yes. It's a reasonable question to ask before agreeing to pickup, and a legitimate buyer should be able to answer it without hesitation.",
      },
    ],
  },
  {
    slug: "flood-damaged-car-heres-how-to-sell-it-for-cash",
    title: "Flood-Damaged Car? Here's How to Sell It for Cash",
    excerpt:
      "Private buyers tend to walk away from flood damage, but that doesn't mean the car is worthless. Here's why it's hard to sell privately and what a fair cash sale actually looks like.",
    date: "2026-10-22",
    category: "blog",
    author: "cashforcar39gmail-com",
    content: [
      "A flooded car is one of the hardest vehicles to sell the normal way. Water damage isn't always obvious from the outside, and most private buyers know that, which is exactly why they tend to walk away the moment \"flood\" comes up in a conversation. That doesn't mean the car is worthless. It means you're usually better off selling it as a cash sale rather than trying to list it like any other used vehicle.",
      "The reason private buyers are so wary isn't just caution, it's that flood damage keeps causing problems long after the water is gone. Corrosion can start inside wiring harnesses, connectors, and control modules where nobody can see it, and it doesn't always show symptoms right away. Mold can take hold in carpet padding and seat foam. Electrical gremlins, a sensor that fails intermittently, a warning light that comes and goes, can show up months later and be expensive to chase down. A buyer who doesn't know the car's history has no way to price in that risk, so a lot of them simply won't take it on.",
      "If your car was flooded and you filed an insurance claim, what happens next depends on the insurer's assessment. If the cost to repair the water damage comes close to or exceeds the car's value, the insurance company will usually declare it a total loss. In that case, you'd typically be paid out based on the car's value before the flood, and the insurer takes possession of the vehicle, at which point it's out of your hands entirely. If you didn't have comprehensive coverage, which is what actually covers flood damage, or you decided not to file a claim, the car stays yours to deal with directly.",
      "Here's where it gets state-specific. Once a flooded vehicle is declared a total loss, most states require it to be issued some version of a branded title, often labeled \"flood,\" \"salvage,\" or \"water damage.\" That brand stays with the vehicle's history and shows up on a vehicle history report even if the car is later repaired and resold. It's one of the main reasons flood-damaged cars sell for less than a comparable vehicle with a clean history, buyers and resellers alike can see exactly what happened to it.",
      "None of this means the car has no value. A junk car buyer evaluates a flood-damaged vehicle differently than a private buyer would. Instead of worrying about what might fail six months down the road, the offer is built around the vehicle's actual current condition: what still runs, which parts are salvageable, and what the vehicle is worth for scrap and recycling if it isn't. That's a much more straightforward calculation, and it's why flood-damaged cars that are nearly impossible to sell privately still have a real cash value to the right buyer.",
      "Being upfront about the flood history matters more here than with almost any other kind of damage. Mention it when you first describe the car, how high the water got if you know, how long it sat, and whether the engine was running when it flooded or just sitting in standing water. These details affect the offer, and a legitimate buyer would rather have accurate information upfront than find out after the fact. Trying to hide flood history generally backfires anyway, since water damage tends to leave signs, a musty smell, water lines inside the doors or trunk, rust in spots that shouldn't rust, that an experienced buyer knows to look for.",
      "Paperwork follows a similar path to other total-loss or title-brand situations. If your insurer already processed the claim and issued a settlement, they typically handle the title transfer as part of that process. If you're selling the car directly without going through insurance, you'll want your original title if you have one, and if it's already branded for flood or water damage, that's fine to disclose, it doesn't stop a sale to a buyer set up to handle it. Buyers who deal regularly with flood and total-loss vehicles are generally used to working with branded titles and can walk you through what's needed in your state.",
      "If you're sitting on a flooded car wondering whether it's worth anything, the most reliable way to find out is to describe it honestly and get a quote. Mention the flood history, the current condition, and any paperwork you have, and a buyer who specializes in these situations can tell you quickly whether it's a fit and what it's actually worth, rather than you guessing based on what a private buyer might have said.",
    ],
    faqs: [
      {
        question: "Will insurance automatically total a flooded car?",
        answer:
          "Not automatically. The insurer typically declares a total loss when the cost of repairing water damage comes close to or exceeds the car's value; a car with only minor flood exposure might still be repaired and kept.",
      },
      {
        question: "Does a flood-damaged car always get a branded title?",
        answer:
          "In most states, yes, once it's officially declared a total loss, though the exact branding label and process depend on your state's DMV.",
      },
      {
        question: "Can I sell a flood-damaged car without going through insurance?",
        answer:
          "Yes. If you didn't file a claim or didn't have comprehensive coverage, the car is yours to sell directly, and you can describe its condition straight to a buyer.",
      },
      {
        question: "Should I disclose flood damage even if it isn't obvious?",
        answer:
          "Yes. Being upfront matters more with flood damage than with most other issues, and hiding it rarely works since water exposure tends to leave signs that an experienced buyer knows to check for.",
      },
    ],
  },
  {
    slug: "junk-car-vs-trade-in-which-gets-you-more-cash",
    title: "Junk Car vs. Trade-In: Which Gets You More Cash?",
    excerpt:
      "A trade-in and a direct cash sale pay out differently, and which one actually nets you more depends on your car's condition and whether you're buying a replacement.",
    date: "2026-10-14",
    category: "blog",
    author: "cashforcar39gmail-com",
    content: [
      "If you've got an old car taking up space, there are really only two paths that lead to getting paid for it: trade it in toward something else, or sell it outright to a junk car buyer. Which one puts more money in your pocket has more to do with what you're trying to do next than with the car itself.",
      "The quickest way to sort this out is to ask one question first: are you buying another vehicle? A trade-in only exists as part of a purchase. If you're not shopping for a replacement car, trading in isn't on the table at all, and a direct cash sale is your only real option anyway.",
      "If you are buying something else, a trade-in can feel convenient because it folds two transactions into one. You hand over the old car, it knocks some amount off the new one, and you drive away having dealt with both at once. The catch is that the number doing that knocking off is set by the dealer, inside a deal built around their margin on the new car. It's common for a trade-in figure to look reasonable on its own while the overall deal moves in the dealer's favor somewhere else, maybe in the price of the new car or the financing terms. Because everything gets bundled together, it's hard to know how much of that trade-in number was real value and how much just got shuffled around elsewhere in the paperwork.",
      "A junk car sale works differently because there's nothing to bundle. The offer is just for the car in front of you, based on its weight in scrap metal, which parts are still usable, and what buyers in your area are currently paying. There's no new vehicle purchase riding on the number, so there's less reason for it to move around once it's quoted. What you're told on the phone is generally what you get at pickup, as long as the car matches what you described.",
      "A dealer evaluating a trade-in is thinking about resale, whether that's putting your old car back on their lot or sending it to auction, so they want something that runs, drives, and looks reasonably presentable. A car with a dead engine, major body damage, or enough miles that it's not worth reconditioning often gets a token trade-in offer, or the dealer just declines to take it and tells you to sell it separately. A junk car buyer has no such requirement. Whether it runs, rolls, or has been sitting in the driveway for two years, the value comes from parts and metal, not from reselling it as a working vehicle.",
      "The paperwork splits the same way. Trading in is wrapped inside a vehicle purchase, so you're dealing with financing documents, trade-in disclosures, and whatever your state requires for transferring a title as part of that larger transaction. A junk car sale skips almost all of that. It's typically a title transfer and a bill of sale, nothing tied to a loan application or a new set of keys. If your title is missing, a junk buyer is usually easier to work with than a dealer, since dealers generally won't take a trade-in without clean paperwork already in hand.",
      "Speed usually favors a direct sale too. A trade-in's timeline is really the new car's timeline: financing approval, paperwork, maybe a wait for the specific model you want. A junk car sale can often be quoted and picked up within a day or two, since there's no second transaction holding it up.",
      "None of this makes a trade-in a bad choice. If you're already buying a new car, the vehicle you're trading in still runs and looks decent, and you'd rather handle everything in one stop than squeeze out every last dollar, a trade-in is a perfectly reasonable way to go, and there's less for you to manage.",
      "It tends to fall short when the car itself is the obstacle rather than the convenience. A non-running vehicle, something with serious damage, or a car you're not replacing with anything is usually better off going to a junk car buyer directly, since you're getting paid for the car on its own terms instead of through a deal built around something else.",
      "If you want to actually compare the two, there's no need to guess. Get a trade-in quote from the dealer as part of your new car conversation, and separately get a quote from a junk car buyer for the same vehicle. Comparing two real numbers is the only way to know which route actually pays more for your specific car.",
      "If you still owe money on the vehicle, check your payoff amount with your lender before deciding either way. Whichever offer you take needs to cover what's left on the loan, or you'll need to bring the difference to the table regardless of whether the car goes to a dealer's lot or to a junk car buyer.",
      "If selling outright turns out to be the better move, getting there is simple: describe your car's year, make, model, and condition and ask to sell your car for cash instead of taking whatever the dealer offers on paper. Getting a quote costs nothing and takes a few minutes, and it gives you something solid to compare against whatever a dealer offers for the trade-in.",
    ],
  },
  {
    slug: "salvage-title-vs-junk-title-whats-the-difference",
    title: "Salvage Title vs. Junk Title: What's the Difference?",
    excerpt:
      "What separates a salvage title from a junk title, and why that one distinction changes who can buy your car and what it's worth.",
    date: "2026-10-18",
    category: "blog",
    author: "cashforcar39gmail-com",
    content: [
      "If you've been told your car has a \"salvage title\" or a \"junk title,\" those two words might sound interchangeable, but they describe very different situations. Both mean the vehicle has been through something serious, usually a wreck, a flood, or fire damage significant enough that an insurance company or state agency decided it wasn't worth fixing at full value. Where they differ is what can legally happen to the car next, and that difference changes who will buy it and what they'll pay.",
      "A salvage title shows up after an insurance company pays out a total loss claim on a vehicle. That happens when the cost to repair the car is close to or more than what the car is worth, not necessarily when the car is beyond saving. A salvage-titled car isn't dead yet. In most states, someone, often a rebuilder or a buyer at a salvage auction, can repair it, pass a state inspection, and get it back on the road under a new title, usually branded \"rebuilt\" or \"reconstructed.\" The salvage history stays attached to the vehicle permanently once that happens; it never goes back to a clean title. But the car itself still has a future as a driveable vehicle, which matters a lot for its value.",
      "A junk title is a step further down the line, and it's meant to be final. States issue a junk title, sometimes called a junk certificate or parts-only title, when a vehicle has been deemed unfit to ever return to the road. Once that designation is on record, the car generally cannot be repaired, re-inspected, or re-registered for driving in any state. In most places the VIN itself gets flagged in a national title database, which is what keeps someone from trying to clean up the paperwork and sell it as a roadworthy car later. A junk-titled vehicle still has value, just not as transportation. Its worth comes from scrap metal and any parts that are still good.",
      "That distinction between repairable and permanently retired is why the two titles attract different buyers. A salvage-titled car can interest rebuilders or parts dealers who want a mostly intact vehicle to pull from, so it tends to hold more value even in rough shape, since someone might still put it back on the road. A junk-titled car is realistically limited to dismantlers, scrap buyers, and junk car services, since nobody can legally register it to drive again. The offer on a junk-titled car is based on weight and usable parts rather than any chance of a second life on the road.",
      "Not every state uses this exact language, either. Some states don't issue a distinct \"junk\" title at all and instead handle it through a certificate of destruction or a non-repairable designation that functions the same way. Others use \"junk\" and \"salvage\" more loosely than the strict definitions above. If you're not sure which one applies to your car, your title itself, or a call to your state's DMV or motor vehicle division, is the only reliable way to check, rather than going by what a neighbor's title said or what a buyer tells you over the phone.",
      "For a seller, a salvage title doesn't mean your car is worthless. It means someone still has to decide whether repairing it makes financial sense, and that's a conversation some buyers are willing to have. A junk title means that conversation is already settled, and the sale is just about the vehicle's remaining material value. You don't need to fix anything or guess at the number yourself in either case. Describing your car's title status honestly, along with its condition, lets a buyer give you an accurate offer instead of a lowball figure based on uncertainty.",
      "Whether your paperwork says salvage, junk, or something your state calls by a different name entirely, it's rarely a reason to put off selling. A quote takes a few minutes, doesn't require the car to be running, and will tell you what your specific title situation is actually worth instead of leaving you to guess.",
    ],
  },
  {
    slug: "how-to-sell-a-car-that-doesnt-run-step-by-step",
    title: "How to Sell a Car That Doesn't Run: Step-by-Step",
    excerpt:
      "What to gather before you call, how a quote works without a test drive, and what actually happens on pickup day.",
    date: "2026-10-21",
    category: "blog",
    author: "cashforcar39gmail-com",
    content: [
      "A car that won't start or won't stay running can feel like a dead end, but it isn't one. You don't need to fix it, tow it to a shop for a diagnosis, or even know exactly what's wrong before you sell it. Buyers who specialize in non-running vehicles work with incomplete information every day, and the process is more straightforward than most people expect once you know what to prepare.",
      "It helps to understand why \"non-running\" doesn't scare off a serious buyer the way it might scare off a private one. A dead battery, a blown engine, a failed transmission, and bad electrical work are all different problems with very different repair costs, but none of them erase the car's value. The frame, the body panels, the wiring, and whatever's left of the drivetrain still have weight in scrap metal and, often, parts that are still good. A buyer who deals in this kind of vehicle is pricing the car as it sits, not betting on whether you'll get it running again.",
      "Before you call anyone, gather the basics: year, make, model, and approximate mileage if you know it. Add in when it stopped running and what happened right before it quit, even if you're not sure of the actual mechanical cause. \"Wouldn't start one morning,\" \"overheated and died on the highway,\" or \"has been sitting for two years\" all tell a buyer something useful. Mention any parts that are already missing or removed, since that affects the offer more than the fact that it doesn't run. If you have the title, note that too, and if you don't, say so; a lost title usually doesn't stop a sale, but the buyer needs to know upfront to tell you what they'll need instead.",
      "Quotes for a non-running car also work a little differently than you might expect. A buyer isn't going to ask for a test drive, so the number they give you is based entirely on what you describe. That puts some responsibility on you to be accurate rather than optimistic, but it also means you can get a real figure over the phone or online without anyone needing to see the car first. A legitimate buyer should be willing to commit to that number before dispatching a tow truck, and should honor it once the driver arrives, provided the car matches what you said. If a buyer refuses to give any number until they've physically seen the car, that's usually a sign they're planning to lowball you once they're standing in your driveway and you've already arranged your schedule around the pickup.",
      "Getting more than one quote costs nothing and is worth doing, especially since a car that doesn't run is one you can't easily drive somewhere else for a second opinion. Comparing two or three offers gives you a sense of whether the first number you got was reasonable, and it only takes a few extra minutes since most buyers can give you a figure the same day.",
      "Towing is the part people worry about most. A non-running car can't be driven onto a truck under its own power, so it needs a flatbed or a winch, and buyers who handle junk car removal for a living show up with the right equipment already. Confirm towing is included in the offer you're given, not added as a separate fee once the driver shows up. You'll also want to make sure the car is actually reachable, out of a locked garage, not blocked by another vehicle, and that you have the keys on hand even if the engine won't turn over, since the driver will need them to steer it onto the truck.",
      "On the paperwork side, keep it simple: have your title ready if you have it, or ask the buyer in advance what they'll accept instead, since requirements for a lost title vary by state and it's worth confirming rather than assuming. A valid photo ID is standard across the board. If there's a loan or lien still attached to the car, mention it early, since that can add a step to the sale even though it rarely kills it.",
      "Pickup day itself is short. The driver arrives at the agreed time, takes a quick look to confirm the car matches your description, and handles loading it onto the truck. You sign the title over, hand off the keys, and get paid on the spot, whether that's cash, a check, or a digital transfer depending on the buyer and the amount. Some states ask you to remove your plates before the car leaves and to notify the DMV once it's sold, so it's worth asking about that step if you're not sure what your state requires.",
      "A car that doesn't run isn't a project you're obligated to finish before you can sell it for cash. Describing it honestly, lining up your paperwork, and comparing a couple of offers is really the whole process. If you're ready to see what yours is worth, getting a quote takes a few minutes and doesn't require the engine to turn over even once.",
    ],
  },
];

export function getPost(slug: string): PostEntry | undefined {
  return posts.find((p) => p.slug === slug);
}

export function postsForCategory(category: PostEntry["category"]): PostEntry[] {
  return posts.filter((p) => p.category === category);
}

// Posts written for one state follow the "<topic>-<state-slug>" slug pattern
// (e.g. scrap-cars-for-cash-utah), which is what ties them to that state's page.
export function postsForState(stateSlug: string): PostEntry[] {
  return posts.filter((p) => p.category === "blog" && p.slug.endsWith(`-${stateSlug}`));
}

export function postsForAuthor(author: PostEntry["author"]): PostEntry[] {
  return posts.filter((p) => p.author === author);
}
