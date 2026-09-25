export type BrandEntry = {
  slug: string;
  name: string;
  ev?: boolean;
  luxury?: boolean;
  // Overrides the generic "cars, trucks, and SUVs" line on the brand page
  // for brands where that phrasing doesn't fit (e.g. a truck-only brand).
  vehicleFocus?: string;
};

// Slugs match the live site's page-sitemap.xml exactly.
export const brands: BrandEntry[] = [
  { slug: "dodge", name: "Dodge" },
  { slug: "land-rover", name: "Land Rover", luxury: true },
  { slug: "aston-martin", name: "Aston Martin", luxury: true },
  { slug: "jeep", name: "Jeep" },
  { slug: "alfa-romeo", name: "Alfa Romeo", luxury: true },
  { slug: "bentley", name: "Bentley", luxury: true },
  { slug: "porsche", name: "Porsche", luxury: true },
  { slug: "rolls-royce", name: "Rolls-Royce", luxury: true },
  { slug: "rivian", name: "Rivian", ev: true },
  { slug: "lucid-motors", name: "Lucid Motors", ev: true },
  { slug: "fisker", name: "Fisker", ev: true },
  { slug: "lincoln", name: "Lincoln", luxury: true },
  { slug: "polestar", name: "Polestar", ev: true },
  { slug: "genesis", name: "Genesis", luxury: true },
  { slug: "vinfast", name: "VinFast", ev: true },
  { slug: "acura", name: "Acura" },
  { slug: "bmw", name: "BMW", luxury: true },
  { slug: "ferrari", name: "Ferrari", luxury: true },
  { slug: "infiniti", name: "INFINITI", luxury: true },
  { slug: "mercedes-benz", name: "Mercedes-Benz", luxury: true },
  { slug: "lamborghini", name: "Lamborghini", luxury: true },
  { slug: "volvo", name: "Volvo" },
  { slug: "audi", name: "Audi", luxury: true },
  { slug: "mclaren", name: "McLaren", luxury: true },
  { slug: "jaguar", name: "Jaguar", luxury: true },
  { slug: "lexus", name: "Lexus", luxury: true },
  { slug: "honda", name: "Honda" },
  { slug: "toyota", name: "Toyota" },
  { slug: "ford", name: "Ford" },
  { slug: "chevrolet", name: "Chevrolet" },
  { slug: "nissan", name: "Nissan" },
  { slug: "hyundai", name: "Hyundai" },
  {
    slug: "ram-trucks",
    name: "RAM Trucks",
    vehicleFocus: "1500, 2500, and 3500 pickups",
  },
  { slug: "bugatti", name: "Bugatti", luxury: true },
  { slug: "hummer", name: "Hummer" },
  { slug: "maserati", name: "Maserati", luxury: true },
  { slug: "kia", name: "Kia" },
  { slug: "volkswagen", name: "Volkswagen" },
  { slug: "subaru", name: "Subaru" },
  { slug: "mazda", name: "Mazda" },
  { slug: "gmc", name: "GMC" },
  { slug: "buick", name: "Buick" },
  { slug: "cadillac", name: "Cadillac", luxury: true },
  { slug: "tesla", name: "Tesla", ev: true },
  {
    slug: "ram",
    name: "RAM",
    vehicleFocus: "trucks, ProMaster vans, and other RAM vehicles",
  },
  { slug: "chrysler", name: "Chrysler" },
];

export function getBrand(slug: string): BrandEntry | undefined {
  return brands.find((b) => b.slug === slug);
}
