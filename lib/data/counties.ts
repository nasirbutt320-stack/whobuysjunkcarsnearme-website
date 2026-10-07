export type CountyEntry = {
  slug: string;
  name: string;
  stateSlug: string;
  // The county seat -- a real, verifiable fact used to give each county
  // page genuine distinguishing content beyond the name being swapped in.
  seat: string;
  // Real cities/towns inside the county, rendered as a county-specific
  // section so pages differ by genuine local detail, not just the name.
  places?: string[];
  // One or two verified, county-specific sentences (geography, roads, notable
  // local context). Never a statistic or claim that has not been checked.
  localNote?: string;
  // Optional alternate seed for the wording-variant picker, used only to
  // break an unlucky collision between two pages. Existing pages omit it.
  variantSalt?: string;
};

// Pilot batch: 25 of the most populous U.S. counties, spread across many
// states, added deliberately as a small, monitorable batch rather than all
// ~3,143 U.S. counties at once. See PRODUCT.md / the SEO audit notes for why:
// programmatic location pages carry real thin/duplicate-content risk at
// scale, so this starts small and gets watched before any expansion.
// Slugs use the `[name]-county-[state-abbr]` pattern throughout (even where
// a shorter slug would be unambiguous today) since many county names repeat
// across states, and the pattern needs to stay consistent if this ever
// grows beyond the pilot.
export const counties: CountyEntry[] = [
  { slug: "los-angeles-county-ca", name: "Los Angeles County", stateSlug: "california", seat: "Los Angeles" },
  { slug: "cook-county-il", name: "Cook County", stateSlug: "illinois", seat: "Chicago" },
  { slug: "harris-county-tx", name: "Harris County", stateSlug: "texas", seat: "Houston" },
  { slug: "maricopa-county-az", name: "Maricopa County", stateSlug: "arizona", seat: "Phoenix" },
  { slug: "san-diego-county-ca", name: "San Diego County", stateSlug: "california", seat: "San Diego" },
  { slug: "orange-county-ca", name: "Orange County", stateSlug: "california", seat: "Santa Ana" },
  { slug: "miami-dade-county-fl", name: "Miami-Dade County", stateSlug: "florida", seat: "Miami" },
  { slug: "dallas-county-tx", name: "Dallas County", stateSlug: "texas", seat: "Dallas" },
  { slug: "riverside-county-ca", name: "Riverside County", stateSlug: "california", seat: "Riverside" },
  { slug: "san-bernardino-county-ca", name: "San Bernardino County", stateSlug: "california", seat: "San Bernardino" },
  { slug: "clark-county-nv", name: "Clark County", stateSlug: "nevada", seat: "Las Vegas" },
  { slug: "king-county-wa", name: "King County", stateSlug: "washington", seat: "Seattle" },
  { slug: "tarrant-county-tx", name: "Tarrant County", stateSlug: "texas", seat: "Fort Worth" },
  { slug: "santa-clara-county-ca", name: "Santa Clara County", stateSlug: "california", seat: "San Jose" },
  { slug: "broward-county-fl", name: "Broward County", stateSlug: "florida", seat: "Fort Lauderdale" },
  { slug: "wayne-county-mi", name: "Wayne County", stateSlug: "michigan", seat: "Detroit" },
  { slug: "bexar-county-tx", name: "Bexar County", stateSlug: "texas", seat: "San Antonio" },
  { slug: "alameda-county-ca", name: "Alameda County", stateSlug: "california", seat: "Oakland" },
  { slug: "sacramento-county-ca", name: "Sacramento County", stateSlug: "california", seat: "Sacramento" },
  { slug: "fulton-county-ga", name: "Fulton County", stateSlug: "georgia", seat: "Atlanta" },
  { slug: "nassau-county-ny", name: "Nassau County", stateSlug: "new-york", seat: "Mineola" },
  { slug: "suffolk-county-ny", name: "Suffolk County", stateSlug: "new-york", seat: "Riverhead" },
  { slug: "hillsborough-county-fl", name: "Hillsborough County", stateSlug: "florida", seat: "Tampa" },
  { slug: "franklin-county-oh", name: "Franklin County", stateSlug: "ohio", seat: "Columbus" },
  { slug: "mecklenburg-county-nc", name: "Mecklenburg County", stateSlug: "north-carolina", seat: "Charlotte" },
  // Florida batch (10 counties, approved 2026-10-08): the next-largest
  // Florida counties after the three already in the pilot above.
  { slug: "palm-beach-county-fl", name: "Palm Beach County", stateSlug: "florida", seat: "West Palm Beach", places: ["West Palm Beach", "Boca Raton", "Boynton Beach", "Delray Beach", "Jupiter", "Wellington"], localNote: "Palm Beach County is the largest county in Florida by total area, with I-95 and Florida's Turnpike both running through it, so a pickup in Jupiter and one in Boca Raton can be a long drive apart." },
  { slug: "orange-county-fl", name: "Orange County", stateSlug: "florida", seat: "Orlando", places: ["Orlando", "Winter Park", "Apopka", "Ocoee", "Winter Garden", "Windermere"], localNote: "Interstate 4 and Florida's Turnpike both cross Orange County through the Orlando area, so we schedule pickup windows around where the car sits and how traffic is running." },
  { slug: "duval-county-fl", name: "Duval County", stateSlug: "florida", seat: "Jacksonville", places: ["Jacksonville", "Jacksonville Beach", "Atlantic Beach", "Neptune Beach", "Baldwin"], localNote: "Duval County and the City of Jacksonville have shared one consolidated government since 1968, and Jacksonville covers more land than any other city in the contiguous United States, so two pickups inside the same city can be a long drive apart." },
  { slug: "pinellas-county-fl", name: "Pinellas County", stateSlug: "florida", seat: "Clearwater", places: ["St. Petersburg", "Clearwater", "Largo", "Dunedin", "Pinellas Park", "Tarpon Springs"], localNote: "Pinellas is a peninsula between Tampa Bay and the Gulf of Mexico and the most densely populated county in Florida, and salt air along the coast is hard on vehicle bodies over the years." },
  { slug: "lee-county-fl", variantSalt: "lee-county-fl-b", name: "Lee County", stateSlug: "florida", seat: "Fort Myers", places: ["Fort Myers", "Cape Coral", "Bonita Springs", "Estero", "Lehigh Acres", "Sanibel"], localNote: "Hurricane Ian made landfall near Cayo Costa in Lee County in September 2022, and flood-damaged vehicles are among the cars we buy here." },
  { slug: "polk-county-fl", name: "Polk County", stateSlug: "florida", seat: "Bartow", places: ["Lakeland", "Winter Haven", "Bartow", "Haines City", "Lake Wales", "Auburndale"], localNote: "Polk County sits along I-4 between the Tampa and Orlando areas, with Lakeland and Winter Haven among its largest cities." },
  { slug: "brevard-county-fl", name: "Brevard County", stateSlug: "florida", seat: "Titusville", places: ["Melbourne", "Palm Bay", "Titusville", "Cocoa", "Rockledge", "Cape Canaveral"], localNote: "Brevard County is known as the Space Coast, home to Cape Canaveral and Patrick Space Force Base, and its Atlantic shoreline means salt air takes a toll on vehicles parked outside." },
  { slug: "volusia-county-fl", name: "Volusia County", stateSlug: "florida", seat: "DeLand", places: ["Daytona Beach", "Deltona", "DeLand", "Ormond Beach", "New Smyrna Beach", "Port Orange"], localNote: "Volusia County is home to Daytona International Speedway in Daytona Beach, with beach communities on the coast and inland towns like DeLand and Deltona farther west." },
  { slug: "pasco-county-fl", name: "Pasco County", stateSlug: "florida", seat: "Dade City", places: ["New Port Richey", "Zephyrhills", "Dade City", "Wesley Chapel", "Land O' Lakes", "Port Richey"], localNote: "Pasco County borders Hillsborough and Pinellas counties to the south and stretches from Gulf coast communities like New Port Richey to inland towns like Dade City and Zephyrhills." },
  { slug: "seminole-county-fl", name: "Seminole County", stateSlug: "florida", seat: "Sanford", places: ["Sanford", "Lake Mary", "Oviedo", "Winter Springs", "Altamonte Springs", "Casselberry"], localNote: "Seminole County sits just north of Orlando, with I-4 running through Lake Mary, Sanford, and Altamonte Springs." },
];

export function getCounty(slug: string): CountyEntry | undefined {
  return counties.find((c) => c.slug === slug);
}

export function countiesForState(stateSlug: string): CountyEntry[] {
  return counties.filter((c) => c.stateSlug === stateSlug);
}
