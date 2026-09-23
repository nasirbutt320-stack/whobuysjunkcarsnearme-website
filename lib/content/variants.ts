// Deterministic content variation for the programmatically-generated city,
// state, and brand pages. Each page picks a different phrasing for every
// section (seeded by its own slug), so pages read as genuinely distinct
// rather than the same template with a name swapped in -- while staying
// factually accurate and easy to maintain from a small set of options,
// instead of hand-writing 100+ full pages of copy.
//
// IMPORTANT: this only changes wording/structure. No slugs, routes, or URLs
// are affected by anything in this file.

function seededIndex(seed: string, length: number): number {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
  }
  return hash % length;
}

export function pick<T>(variants: T[], slug: string, section: string): T {
  return variants[seededIndex(`${slug}::${section}`, variants.length)];
}

// ---------------------------------------------------------------------------
// State pages
// ---------------------------------------------------------------------------

export const stateRegion: Record<string, string> = {
  alabama: "the Deep South, bordering Georgia, Florida, Mississippi, and Tennessee",
  louisiana: "the Gulf South, bordering Texas, Arkansas, and Mississippi",
  alaska: "the far north, separated from the other 49 states by Canada",
  arizona: "the Southwest, bordering California, Nevada, Utah, and New Mexico",
  arkansas: "the Mid-South, bordering Missouri, Tennessee, Mississippi, Louisiana, Texas, and Oklahoma",
  california: "the Pacific Coast, bordering Oregon, Nevada, and Arizona",
  delaware: "the Mid-Atlantic, bordering Maryland, Pennsylvania, and New Jersey",
  idaho: "the Mountain West, bordering Washington, Oregon, Nevada, Utah, Wyoming, and Montana",
  illinois: "the Midwest, bordering Wisconsin, Indiana, Kentucky, Missouri, and Iowa",
  indiana: "the Midwest, bordering Michigan, Ohio, Kentucky, and Illinois",
  iowa: "the Midwest, bordering Minnesota, Wisconsin, Illinois, Missouri, Nebraska, and South Dakota",
  kansas: "the Great Plains, bordering Nebraska, Missouri, Oklahoma, and Colorado",
  maine: "New England, bordering only New Hampshire on land",
  maryland: "the Mid-Atlantic, bordering Pennsylvania, Delaware, Virginia, and West Virginia",
  massachusetts: "New England, bordering New Hampshire, Vermont, New York, Connecticut, and Rhode Island",
  mississippi: "the Deep South, bordering Tennessee, Alabama, Louisiana, and Arkansas",
  nevada: "the Southwest, bordering California, Oregon, Idaho, Utah, and Arizona",
  colorado: "the Rocky Mountain West, bordering Wyoming, Nebraska, Kansas, Oklahoma, New Mexico, and Utah",
  connecticut: "New England, bordering New York, Massachusetts, and Rhode Island",
  michigan: "the Great Lakes region, bordering Ohio, Indiana, and Wisconsin",
  minnesota: "the Upper Midwest, bordering Wisconsin, Iowa, South Dakota, and North Dakota",
  missouri: "the Midwest, bordering eight states from Iowa to Oklahoma",
  montana: "the Mountain West, bordering North Dakota, South Dakota, Wyoming, and Idaho",
  nebraska: "the Great Plains, bordering South Dakota, Iowa, Missouri, Kansas, Colorado, and Wyoming",
  "new-hampshire": "New England, bordering Maine, Vermont, and Massachusetts",
  "new-jersey": "the Mid-Atlantic, bordering New York, Pennsylvania, and Delaware",
  "new-mexico": "the Southwest, bordering Arizona, Colorado, Oklahoma, and Texas",
  "new-york": "the Northeast, bordering Vermont, Massachusetts, Connecticut, New Jersey, and Pennsylvania",
  ohio: "the Midwest, bordering Michigan, Pennsylvania, West Virginia, Kentucky, and Indiana",
  "north-dakota": "the Upper Midwest, bordering Minnesota, South Dakota, and Montana",
  vermont: "New England, bordering New Hampshire, Massachusetts, and New York",
  wisconsin: "the Upper Midwest, bordering Michigan, Illinois, Iowa, and Minnesota",
  washington: "the Pacific Northwest, bordering Idaho and Oregon",
  "west-virginia": "Appalachia, bordering Virginia, Maryland, Pennsylvania, Ohio, and Kentucky",
  wyoming: "the Rocky Mountain West, bordering Montana, South Dakota, Nebraska, Colorado, Utah, and Idaho",
  georgia: "the Southeast, bordering Florida, Alabama, Tennessee, North Carolina, and South Carolina",
  "north-carolina": "the Southeast, bordering Virginia, Tennessee, Georgia, and South Carolina",
  oklahoma: "the South Central region, bordering Kansas, Missouri, Arkansas, Texas, New Mexico, and Colorado",
  oregon: "the Pacific Northwest, bordering Washington, Idaho, Nevada, and California",
  pennsylvania: "the Mid-Atlantic, bordering New York, New Jersey, Delaware, Maryland, West Virginia, and Ohio",
  "rhode-island": "New England, bordering Massachusetts and Connecticut",
  "south-carolina": "the Southeast, bordering North Carolina and Georgia",
  "south-dakota": "the Great Plains, bordering North Dakota, Minnesota, Iowa, Nebraska, Wyoming, and Montana",
  tennessee: "the Mid-South, bordering eight other states, more than almost any state in the country",
  texas: "the South Central region, bordering New Mexico, Oklahoma, Arkansas, and Louisiana",
  virginia: "the Mid-Atlantic, bordering Maryland, North Carolina, Tennessee, Kentucky, and West Virginia",
  "district-of-columbia": "the Mid-Atlantic, surrounded entirely by Maryland and Virginia",
  utah: "the Mountain West, bordering Idaho, Wyoming, Colorado, Arizona, and Nevada",
};

export const stateHeroIntro = [
  (state: string) =>
    `If your car has been sitting in the driveway for years, won't start anymore, or just isn't worth fixing, we can help. We buy cars, trucks, SUVs, vans, and other unwanted vehicles across ${state}, running or not, and we handle the pickup for free.`,
  (state: string) =>
    `Got a vehicle taking up space somewhere in ${state}? We buy cars, trucks, and SUVs in almost any condition, running or not, and there's no cost to you for pickup or paperwork.`,
  (state: string) =>
    `Whether it's been parked for one season or ten, an unwanted vehicle in ${state} is worth a phone call. We buy cars, trucks, vans, and SUVs regardless of condition, and towing is always free.`,
];

export const stateWhyChooseUsIntro = [
  () =>
    "Every vehicle has some value, even if it doesn't run anymore. Our team looks at the brand, model, age, condition, and which parts are still usable, then gives you a cash offer based on that.",
  () =>
    "A car doesn't need to run, look good, or have a clean title to be worth something. We weigh the make, model, mileage, and condition, and give you a straightforward number based on what we find.",
  () =>
    "We don't work off a single flat rate. Your offer is based on the vehicle in front of us: its year, condition, mileage, and which parts still have value to someone else.",
];

export const stateAnyCondition = [
  (state: string) => [
    "No matter the shape your vehicle is in, we're interested. That includes junk cars, trucks, SUVs, and vans; crossovers and commercial vehicles; flood, fire, or accident-damaged vehicles; cars with engine or transmission problems; and vehicles that have been sitting unused for years.",
    `Even cars with major damage often have value in their parts and materials, so it's worth reaching out before assuming your vehicle in ${state} isn't worth anything.`,
  ],
  (state: string) => [
    "We regularly buy vehicles other buyers pass on: non-running cars, wrecked and flood-damaged vehicles, cars with blown engines or failed transmissions, and anything that's simply been parked too long to bother fixing.",
    `Condition alone doesn't decide the offer. If your vehicle is anywhere in ${state}, describe what's wrong with it and we'll tell you what it's worth before you decide anything.`,
  ],
  (state: string) => [
    "Junk, wrecked, flooded, high-mileage, missing parts, or simply old — we look at all of it. A vehicle doesn't have to run, start, or even be complete for us to make an offer.",
    `A lot of owners in ${state} assume a badly damaged car is worthless. More often than not, there's still real value in the parts and materials, so it's worth a call either way.`,
  ],
];

export const stateNoTitle = [
  (state: string) =>
    `A missing title doesn't automatically mean your car has no resale value. Depending on ${state}'s requirements and your proof of ownership, there may still be a way to sell it. Tell us your situation, and we'll explain exactly what's needed before we schedule a pickup.`,
  (state: string) =>
    `Lost or missing titles come up often, and they're rarely a dealbreaker. ${state} has its own rules for proving ownership without the original document, and we can usually work within them. Let us know what paperwork you do have.`,
  (state: string) =>
    `Don't rule out selling just because the title is missing. Most sellers in ${state} without a title can still complete the sale with the right documentation — tell us what you have and we'll walk you through the rest.`,
];

export const stateWhySellDirect = [
  () =>
    "Taking a car to a junkyard yourself usually means arranging transport, doing paperwork, and often getting a lower offer. Selling directly to us means no towing costs, no waiting around for a private buyer, no advertising or listing fees, and fast payment handled on pickup day.",
  () =>
    "A junkyard visit means you handle the transport, the paperwork, and usually accept whatever they offer on the spot. Sell directly to us instead and we handle the tow, the paperwork, and the payment — with no fees taken out of your offer.",
  () =>
    "Driving or towing a car to a junkyard yourself costs time and often money, on top of getting a lower number than expected. We come to you, cover the tow, handle the paperwork, and pay on pickup — no extra steps on your end.",
];

export const stateFaqDoesntRun = [
  () => "Yes. We purchase both running and non-running vehicles in almost any condition.",
  () => "Yes — most of the vehicles we buy don't run. Tell us what's wrong and we'll factor it into your offer.",
  () => "Yes, running condition isn't a requirement. Dead battery, blown engine, or anything in between, we'll still make an offer.",
];

export const stateFaqTowing = [
  () => "No. Towing is always free when you sell your vehicle to us.",
  () => "No — towing is included in every offer, no matter where in the state you're located.",
  () => "No. The price we quote already accounts for pickup, so there's nothing extra to pay.",
];

export const stateFaqOffer = [
  () =>
    "We look at your vehicle's year, make, model, condition, current market value, and any usable or recyclable parts to give you a fair price.",
  () =>
    "Your offer comes from a mix of factors: year, make, model, mileage, condition, and how much of the vehicle can still be reused or recycled.",
  () =>
    "We weigh the vehicle's age, condition, mileage, and parts value together to land on a number, rather than pricing off a single factor.",
];

// ---------------------------------------------------------------------------
// City pages
// ---------------------------------------------------------------------------

export const cityHeroIntro = [
  (city: string, state: string) =>
    `If your car has been sitting around ${city} for years, won't start anymore, or just isn't worth fixing, we can help. We buy cars, trucks, SUVs, vans, and other unwanted vehicles across ${city} and the rest of ${state} — running or not — and we handle pickup for free.`,
  (city: string, state: string) =>
    `Got an unwanted vehicle somewhere in ${city}? We buy cars, trucks, and SUVs in almost any condition, running or not, and cover the tow anywhere in the ${city} area and across ${state}.`,
  (city: string, state: string) =>
    `Whether it's been parked for a season or a decade, a vehicle sitting in ${city} is worth a call. We buy cars, trucks, vans, and SUVs regardless of condition, with free pickup throughout ${state}.`,
];

export const cityWhyChoose = [
  (city: string) => [
    "Every vehicle has some value, even if it doesn't run anymore. Our team looks at the brand, model, age, condition, and which parts are still usable, then gives you a cash offer based on that.",
    `A traditional dealership isn't interested once a car needs real work, because a vehicle that needs repairs just sits on their lot losing them money. That's the gap we fill in ${city}: we buy for parts, scrap, and recycling, so condition matters a lot less to us than it does to a used car lot.`,
  ],
  (city: string) => [
    "A car doesn't need to run, look good, or have a clean title to be worth something to us. We weigh the make, model, mileage, and condition, then give you a straightforward number.",
    `Used car lots in and around ${city} need vehicles they can clean up and resell fast — anything that needs real work gets turned away or lowballed. We take the opposite approach and buy for parts and materials instead.`,
  ],
  (city: string) => [
    "We don't work off a flat rate. Your offer reflects the vehicle in front of us: its year, condition, mileage, and which parts still have value to someone else.",
    `Most sellers in ${city} find out the hard way that a used car lot won't touch a vehicle that needs real work. We buy those vehicles anyway, because our business is parts and materials, not resale.`,
  ],
];

export const cityAnyCondition = [
  () => [
    "A lot of people hesitate to call because they assume their car isn't junky enough, or that it's too far gone to be worth anything. Neither is usually true. As a junk car buyer, we purchase vehicles in pretty much any condition, including cars that won't start, vehicles with transmission or engine failure, cars from accidents that were never repaired, flood- or fire-damaged vehicles, and cars missing a title.",
      "If your car falls into any of these categories, you don't need to fix it, clean it, or even move it before calling. We come look at what you actually have.",
  ],
  () => [
    "We regularly buy vehicles other buyers pass on: non-running cars, wrecked and flood-damaged vehicles, cars with blown engines or failed transmissions, and anything that's simply been parked too long to bother fixing.",
    "Condition alone doesn't decide the offer. Describe what's wrong with the vehicle and we'll tell you what it's worth before you decide anything.",
  ],
  () => [
    "Junk, wrecked, flooded, high-mileage, missing parts, or simply old — we look at all of it. A vehicle doesn't have to run, start, or even be complete for us to make an offer.",
    "It's easy to assume a badly damaged car is worthless. More often than not, there's still real value sitting in the parts and materials, so it's worth a call either way.",
  ],
];

export const cityNoTitle = [
  (state: string) =>
    `A missing title doesn't automatically mean your car has no resale value. Depending on ${state}'s requirements and your proof of ownership, there may still be a way to sell it. Tell us your situation, and we'll explain exactly what's needed before we schedule a pickup.`,
  (state: string) =>
    `Lost or missing titles come up often, and they're rarely a dealbreaker. ${state} has its own rules for proving ownership without the original document, and we can usually work within them.`,
  (state: string) =>
    `Don't rule out selling just because the title is missing. Most sellers in ${state} without a title can still complete the sale with the right documentation — tell us what you have and we'll walk you through the rest.`,
];

export const cityServingArea = [
  (city: string) => [
    `Whether you're an individual with a car you don't need, a family with an old vehicle taking up space, or a business with a truck you can no longer use, we're here to help. Wherever you are in or around ${city}, our team can arrange a pickup that fits your schedule.`,
    "Our goal is simple: a fair offer, honest service, and a hassle-free experience from start to finish.",
  ],
  (city: string) => [
    `From a single sedan in a driveway to a truck a small business no longer needs, we handle it the same way for everyone in ${city}: a fair offer, a scheduled pickup, and payment on the spot.`,
    "No pressure, no obligation to accept — just an honest number based on what you actually have.",
  ],
  (city: string) => [
    `Individuals, families, and local businesses around ${city} all end up with a vehicle they no longer want for the same reasons — it's not worth fixing, it's not worth insuring, or it's simply in the way. We handle the pickup on a schedule that works for you.`,
    "Getting a fair offer and a hassle-free pickup is the whole point.",
  ],
];

// ---------------------------------------------------------------------------
// Brand pages
// ---------------------------------------------------------------------------

export const brandFact: Record<string, string> = {
  dodge: "Dodge's muscle-car and truck lineup means even non-running Chargers and Ram-era Dodges often still have valuable drivetrain parts.",
  "land-rover": "Land Rover's off-road-focused SUVs carry complex four-wheel-drive systems that keep parts demand steady, even on vehicles that no longer run.",
  "aston-martin": "As a low-volume British marque, even a non-running Aston Martin can carry real value in its hand-built components.",
  jeep: "Jeep's Wrangler and Grand Cherokee lines are among the most parted-out vehicles in the country, thanks to a huge off-road aftermarket.",
  "alfa-romeo": "Alfa Romeo parts can be harder to source domestically, which often makes a non-running Alfa worth more for parts than owners expect.",
  bentley: "Bentley's hand-finished interiors and drivetrains mean even a wrecked or non-running example can hold significant parts value.",
  porsche: "Porsche's flat-six and flat-four engines are in high demand among enthusiasts, so a non-running 911 or Cayenne is rarely worthless.",
  "rolls-royce": "Rolls-Royce builds in extremely limited numbers, so parts and materials from one carry outsized value.",
  rivian: "Rivian's battery packs and drive units are new enough that recyclers and parts buyers pay well above scrap value for them.",
  "lucid-motors": "Lucid's battery technology is some of the most energy-dense on the market, which keeps used battery packs valuable even in a written-off vehicle.",
  fisker: "Fisker's smaller production numbers mean parts can be scarce, so a non-running Fisker is often worth more disassembled than intact.",
  lincoln: "Lincoln shares many mechanical parts with Ford's larger SUVs and trucks, so even older Navigators and Aviators hold solid parts value.",
  polestar: "Polestar's shared platform with Volvo's electric lineup keeps battery and drivetrain components in demand even on damaged cars.",
  genesis: "Genesis is still relatively new to the used market, so recyclers pay well for its low-mileage components.",
  vinfast: "As one of the newest EV brands on U.S. roads, VinFast parts and batteries are scarce enough to hold value even on damaged vehicles.",
  acura: "Acura shares its engineering with Honda, one of the most reliable and widely serviced brands on the road, which keeps parts demand high.",
  bmw: "BMW's engines and electronics are widely serviced aftermarket, so even a non-running 3 Series or X5 usually has resale value in parts.",
  ferrari: "Ferrari's engines and carbon-fiber components are sought after by specialty shops, so even a wrecked Ferrari rarely goes to waste.",
  infiniti: "INFINITI shares much of its platform and engine technology with Nissan, keeping parts sourcing straightforward even on older models.",
  "mercedes-benz": "Mercedes-Benz engines and electronics stay in demand well past 200,000 miles, which keeps resale value in non-running cars higher than owners expect.",
  lamborghini: "Lamborghini's low production numbers mean even scrap materials and used components command a premium in the specialty market.",
  volvo: "Volvo is known for vehicles that keep running well past 200,000 miles, so even a non-running Volvo often has usable high-mileage parts.",
  audi: "Audi's quattro all-wheel-drive systems and turbocharged engines are popular with specialty shops, keeping parts demand strong.",
  mclaren: "McLaren's carbon-fiber tubs and bespoke components mean even a damaged car retains meaningful value to parts buyers and collectors.",
  jaguar: "Jaguar's aluminum-intensive construction often makes scrap value alone higher than owners expect, on top of any usable parts.",
  lexus: "Lexus is built on Toyota's reputation for reliability, so even older, high-mileage models tend to hold real resale and parts value.",
  honda: "Honda is one of the most reliable, widely-parted-out brands on the road, so almost any Civic, Accord, or CR-V still has resale value.",
  toyota: "Toyota's reputation for longevity means even a Corolla or 4Runner with 200,000+ miles is still worth real cash to the right buyer.",
  ford: "Ford's F-Series has been America's best-selling truck for decades, which keeps demand for F-150 and Super Duty parts extremely high.",
  chevrolet: "Chevrolet trucks and SUVs share many parts across model years, which keeps demand steady even for older Silverados and Tahoes.",
  nissan: "Nissan's Altima and Sentra are among the most common cars on U.S. roads, so parts demand for them stays consistently high.",
  hyundai: "Hyundai's rapid growth in the U.S. over the last decade means there's strong demand for parts even on older Elantras and Sonatas.",
  "ram-trucks": "RAM's Cummins diesel option is especially sought after, so diesel RAM trucks often bring in more than their gas counterparts.",
  bugatti: "Bugatti builds only a handful of cars a year, so even a single component from one can be worth more than most complete vehicles.",
  hummer: "Original Hummer H1s and H2s have a dedicated following, and their heavy-duty parts remain in demand among off-road enthusiasts.",
  maserati: "Maserati's Italian-built engines and trim are less common domestically, which often makes parts more valuable than a quick scrap sale would suggest.",
  kia: "Kia's warranty reputation has driven rapid sales growth, which means there's a large and growing market for used Kia parts.",
  volkswagen: "Volkswagen's TDI diesel engines and MQB platform parts remain popular with specialty shops and DIY mechanics alike.",
  subaru: "Subaru's symmetrical all-wheel-drive system is a signature feature that keeps drivetrain parts in demand across nearly every model.",
  mazda: "Mazda's SKYACTIV engines and well-regarded build quality keep resale and parts value solid even on older models.",
  gmc: "GMC shares most of its drivetrain with Chevrolet's truck lineup, so Sierra and Yukon parts are in steady, reliable demand.",
  buick: "Buick's more recent lineup shares parts with GMC and Chevrolet, keeping sourcing straightforward for even older Enclaves and Encores.",
  cadillac: "Cadillac's shift toward performance and EV models has kept demand for both older V8 engines and newer components strong.",
  tesla: "Tesla's battery packs and drive units are some of the most in-demand EV components on the used market, even from a totaled car.",
  ram: "RAM's Hemi V8 engines are popular swaps and rebuilds, which keeps demand for used RAM engines and drivetrain parts high.",
  chrysler: "Chrysler shares many components with Dodge and RAM under the same parent company, which keeps parts sourcing simple even for older minivans and sedans.",
};

export const brandIntro = [
  (brand: string, mechanicalTerm: string) =>
    `Turning your old ${brand} into quick cash doesn't have to be complicated. Whether it's a daily driver that's seen better days or a truck with ${mechanicalTerm} problems, we make the process straightforward and rewarding — no inspections, no dealership markups, no waiting around.`,
  (brand: string, mechanicalTerm: string) =>
    `Got a ${brand} that's stopped earning its keep? Whether the ${mechanicalTerm} has failed or it's simply outlived its usefulness, we'll give you a fair cash offer without the inspections and back-and-forth a dealer trade-in usually involves.`,
  (brand: string, mechanicalTerm: string) =>
    `A ${brand} with ${mechanicalTerm} trouble, or one that just isn't worth fixing anymore, is still worth a phone call. We skip the inspections and dealership markups and give you a straight cash number instead.`,
];

export const brandFairPricing = [
  (brand: string) => [
    `We offer cash for your ${brand} based on current market rates, not a dealer trade-in number. You get what your vehicle actually sells for, plus we cut out the middleman markup.`,
    `Non-running truck? High-mileage sedan? Body damage? We buy them all. Mechanical problems and cosmetic issues don't determine our interest — your ${brand} has value to us regardless of condition.`,
  ],
  (brand: string) => [
    `Trade-in numbers from a dealer are built around resale, not what your ${brand} is actually worth to a buyer who isn't planning to resell it. Our offers reflect current market value instead.`,
    `Condition doesn't rule your ${brand} out. High mileage, body damage, a dead engine — none of it changes whether we're interested, just what the number looks like.`,
  ],
  (brand: string) => [
    `A dealer trade-in offer is designed to protect their margin, not to reflect what your ${brand} is worth. We price based on current market value instead, with nothing subtracted for a middleman.`,
    `We don't screen by condition. A ${brand} that won't start, has body damage, or has racked up serious mileage is still worth a real offer from us.`,
  ],
];

export const brandCommonIssues = [
  (brand: string, conditionTerm: string) =>
    `Plenty of sellers assume their vehicle has to be running to qualify. It doesn't. We regularly buy ${brand} vehicles with ${conditionTerm}, accident damage, or high mileage. If it's sitting unused and you want it gone, it's worth a call.`,
  (brand: string, conditionTerm: string) =>
    `A ${brand} doesn't need to start or drive for us to make an offer. We see ${conditionTerm}, collision damage, and high-mileage vehicles regularly, and all of them are worth a conversation.`,
  (brand: string, conditionTerm: string) =>
    `We're not put off by ${conditionTerm}, collision damage, or six-figure mileage on a ${brand}. If it's been sitting and you're ready to be rid of it, that's really all that matters.`,
];

export const brandDirectVsJunkyard = [
  (brand: string) =>
    `Traditional junk yards strip vehicles for parts and typically pay less, since their profit comes from selling components rather than the whole car. When you sell directly to us, we base your ${brand}'s offer on its overall market value, arrange free pickup, and pay you immediately once it's confirmed — no waiting, no surprises.`,
  (brand: string) =>
    `A junk yard's offer on your ${brand} is built around parting it out, which is why it usually comes in lower. We price the whole vehicle instead, cover the tow, and pay on the spot once everything checks out.`,
  (brand: string) =>
    `Junk yards profit from your ${brand}'s individual parts, which is reflected in a lower upfront offer. We look at the vehicle as a whole, handle pickup for free, and pay immediately rather than making you wait.`,
];

export const brandFaqTitle = [
  () => "In most cases we can still work with you if the title is missing. Call us and we'll explain what alternative documentation is accepted in your state.",
  () => "A missing title usually isn't a dealbreaker. Reach out and we'll walk you through what's accepted in your state instead.",
  () => "Most sellers without a title can still complete the sale with the right alternative paperwork — let us know your situation and we'll explain what's needed.",
];

export const brandFaqTowing = [
  () => "Yes, always. The price we quote already accounts for pickup, so there's nothing extra to pay.",
  () => "Yes. Towing is included in every offer, no matter where you're located.",
  () => "Yes — free pickup is part of every offer we make, not an add-on.",
];
