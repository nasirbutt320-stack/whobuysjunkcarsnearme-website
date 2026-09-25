export type CountyEntry = {
  slug: string;
  name: string;
  stateSlug: string;
  // The county seat -- a real, verifiable fact used to give each county
  // page genuine distinguishing content beyond the name being swapped in.
  seat: string;
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
];

export function getCounty(slug: string): CountyEntry | undefined {
  return counties.find((c) => c.slug === slug);
}

export function countiesForState(stateSlug: string): CountyEntry[] {
  return counties.filter((c) => c.stateSlug === stateSlug);
}
