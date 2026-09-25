export type CityEntry = {
  slug: string;
  name: string;
  stateSlug: string;
};

// Slugs match the live site's page-sitemap.xml exactly.
export const cities: CityEntry[] = [
  { slug: "adamsville", name: "Adamsville", stateSlug: "alabama" },
  { slug: "addison", name: "Addison", stateSlug: "alabama" },
  { slug: "alabamaakron", name: "Akron", stateSlug: "alabama" },
  { slug: "alabaster", name: "Alabaster", stateSlug: "alabama" },
  { slug: "albertville", name: "Albertville", stateSlug: "alabama" },
  { slug: "alexander-city", name: "Alexander City", stateSlug: "alabama" },
  { slug: "aliceville", name: "Aliceville", stateSlug: "alabama" },
  { slug: "allgood", name: "Allgood", stateSlug: "alabama" },
  { slug: "abbeville", name: "Abbeville", stateSlug: "alabama" },
  { slug: "altoona", name: "Altoona", stateSlug: "alabama" },
  { slug: "anniston", name: "Anniston", stateSlug: "alabama" },
  { slug: "arab", name: "Arab", stateSlug: "alabama" },
  { slug: "ardmore", name: "Ardmore", stateSlug: "alabama" },
  { slug: "ariton", name: "Ariton", stateSlug: "alabama" },
  { slug: "anderson", name: "Anderson", stateSlug: "south-carolina" },
  // Pilot batch of major-metro cities, added alongside the county pilot as a
  // small, monitorable expansion rather than comprehensive nationwide city
  // coverage. See lib/data/counties.ts for the reasoning.
  { slug: "new-york-city", name: "New York City", stateSlug: "new-york" },
  { slug: "los-angeles", name: "Los Angeles", stateSlug: "california" },
  { slug: "chicago", name: "Chicago", stateSlug: "illinois" },
  { slug: "houston", name: "Houston", stateSlug: "texas" },
  { slug: "phoenix", name: "Phoenix", stateSlug: "arizona" },
  { slug: "philadelphia", name: "Philadelphia", stateSlug: "pennsylvania" },
  { slug: "san-antonio", name: "San Antonio", stateSlug: "texas" },
  { slug: "san-diego", name: "San Diego", stateSlug: "california" },
  { slug: "dallas", name: "Dallas", stateSlug: "texas" },
  { slug: "austin", name: "Austin", stateSlug: "texas" },
  { slug: "jacksonville", name: "Jacksonville", stateSlug: "florida" },
  { slug: "san-jose", name: "San Jose", stateSlug: "california" },
  { slug: "fort-worth", name: "Fort Worth", stateSlug: "texas" },
  { slug: "columbus", name: "Columbus", stateSlug: "ohio" },
  { slug: "charlotte", name: "Charlotte", stateSlug: "north-carolina" },
  { slug: "indianapolis", name: "Indianapolis", stateSlug: "indiana" },
  { slug: "seattle", name: "Seattle", stateSlug: "washington" },
  { slug: "denver", name: "Denver", stateSlug: "colorado" },
  { slug: "boston", name: "Boston", stateSlug: "massachusetts" },
  { slug: "nashville", name: "Nashville", stateSlug: "tennessee" },
  { slug: "detroit", name: "Detroit", stateSlug: "michigan" },
  { slug: "portland", name: "Portland", stateSlug: "oregon" },
  { slug: "las-vegas", name: "Las Vegas", stateSlug: "nevada" },
  { slug: "atlanta", name: "Atlanta", stateSlug: "georgia" },
  { slug: "miami", name: "Miami", stateSlug: "florida" },
];

export function getCity(slug: string): CityEntry | undefined {
  return cities.find((c) => c.slug === slug);
}

export function citiesForState(stateSlug: string): CityEntry[] {
  return cities.filter((c) => c.stateSlug === stateSlug);
}
