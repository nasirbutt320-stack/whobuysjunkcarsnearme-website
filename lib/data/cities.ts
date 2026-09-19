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
];

export function getCity(slug: string): CityEntry | undefined {
  return cities.find((c) => c.slug === slug);
}

export function citiesForState(stateSlug: string): CityEntry[] {
  return cities.filter((c) => c.stateSlug === stateSlug);
}
