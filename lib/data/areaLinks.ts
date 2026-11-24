import { cities, CityEntry } from "@/lib/data/cities";
import { counties, CountyEntry } from "@/lib/data/counties";

const norm = (s: string) => s.trim().toLowerCase();

/** Cities in the same state that this county covers (by seat or listed places). */
export function citiesInCounty(county: CountyEntry): CityEntry[] {
  const names = new Set([county.seat, ...(county.places ?? [])].map(norm));
  return cities.filter(
    (c) => c.stateSlug === county.stateSlug && names.has(norm(c.name))
  );
}

/** Counties in the same state whose seat or places include this city. */
export function countiesForCity(city: CityEntry): CountyEntry[] {
  return counties.filter(
    (co) =>
      co.stateSlug === city.stateSlug &&
      [co.seat, ...(co.places ?? [])].map(norm).includes(norm(city.name))
  );
}
