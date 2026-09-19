export type StateEntry = {
  slug: string;
  name: string;
  abbr: string;
};

// Slugs match the live site's page-sitemap.xml exactly.
export const states: StateEntry[] = [
  { slug: "alabama", name: "Alabama", abbr: "AL" },
  { slug: "louisiana", name: "Louisiana", abbr: "LA" },
  { slug: "alaska", name: "Alaska", abbr: "AK" },
  { slug: "arizona", name: "Arizona", abbr: "AZ" },
  { slug: "arkansas", name: "Arkansas", abbr: "AR" },
  { slug: "california", name: "California", abbr: "CA" },
  { slug: "delaware", name: "Delaware", abbr: "DE" },
  { slug: "idaho", name: "Idaho", abbr: "ID" },
  { slug: "illinois", name: "Illinois", abbr: "IL" },
  { slug: "indiana", name: "Indiana", abbr: "IN" },
  { slug: "iowa", name: "Iowa", abbr: "IA" },
  { slug: "kansas", name: "Kansas", abbr: "KS" },
  { slug: "maine", name: "Maine", abbr: "ME" },
  { slug: "maryland", name: "Maryland", abbr: "MD" },
  { slug: "massachusetts", name: "Massachusetts", abbr: "MA" },
  { slug: "mississippi", name: "Mississippi", abbr: "MS" },
  { slug: "nevada", name: "Nevada", abbr: "NV" },
  { slug: "colorado", name: "Colorado", abbr: "CO" },
  { slug: "connecticut", name: "Connecticut", abbr: "CT" },
  { slug: "michigan", name: "Michigan", abbr: "MI" },
  { slug: "minnesota", name: "Minnesota", abbr: "MN" },
  { slug: "missouri", name: "Missouri", abbr: "MO" },
  { slug: "montana", name: "Montana", abbr: "MT" },
  { slug: "nebraska", name: "Nebraska", abbr: "NE" },
  { slug: "new-hampshire", name: "New Hampshire", abbr: "NH" },
  { slug: "new-jersey", name: "New Jersey", abbr: "NJ" },
  { slug: "new-mexico", name: "New Mexico", abbr: "NM" },
  { slug: "new-york", name: "New York", abbr: "NY" },
  { slug: "ohio", name: "Ohio", abbr: "OH" },
  { slug: "north-dakota", name: "North Dakota", abbr: "ND" },
  { slug: "vermont", name: "Vermont", abbr: "VT" },
  { slug: "wisconsin", name: "Wisconsin", abbr: "WI" },
  { slug: "washington", name: "Washington", abbr: "WA" },
  { slug: "west-virginia", name: "West Virginia", abbr: "WV" },
  { slug: "wyoming", name: "Wyoming", abbr: "WY" },
  { slug: "georgia", name: "Georgia", abbr: "GA" },
  { slug: "north-carolina", name: "North Carolina", abbr: "NC" },
  { slug: "oklahoma", name: "Oklahoma", abbr: "OK" },
  { slug: "oregon", name: "Oregon", abbr: "OR" },
  { slug: "pennsylvania", name: "Pennsylvania", abbr: "PA" },
  { slug: "rhode-island", name: "Rhode Island", abbr: "RI" },
  { slug: "south-carolina", name: "South Carolina", abbr: "SC" },
  { slug: "south-dakota", name: "South Dakota", abbr: "SD" },
  { slug: "tennessee", name: "Tennessee", abbr: "TN" },
  { slug: "texas", name: "Texas", abbr: "TX" },
  { slug: "virginia", name: "Virginia", abbr: "VA" },
  { slug: "district-of-columbia", name: "District of Columbia", abbr: "DC" },
  { slug: "utah", name: "Utah", abbr: "UT" },
];

export function getState(slug: string): StateEntry | undefined {
  return states.find((s) => s.slug === slug);
}
