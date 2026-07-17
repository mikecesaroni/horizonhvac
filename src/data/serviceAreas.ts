// All 39 Rhode Island cities/towns — each gets its own SEO-friendly page automatically
// via src/pages/service-areas/[slug].astro. If Horizon HVAC doesn't actually service
// a given town, remove it here rather than leaving a page claiming coverage you don't offer.
export type ServiceArea = {
  slug: string;
  name: string;
};

export const serviceAreas: ServiceArea[] = [
  { slug: "barrington", name: "Barrington, RI" },
  { slug: "bristol", name: "Bristol, RI" },
  { slug: "burrillville", name: "Burrillville, RI" },
  { slug: "central-falls", name: "Central Falls, RI" },
  { slug: "charlestown", name: "Charlestown, RI" },
  { slug: "coventry", name: "Coventry, RI" },
  { slug: "cranston", name: "Cranston, RI" },
  { slug: "cumberland", name: "Cumberland, RI" },
  { slug: "east-greenwich", name: "East Greenwich, RI" },
  { slug: "east-providence", name: "East Providence, RI" },
  { slug: "exeter", name: "Exeter, RI" },
  { slug: "foster", name: "Foster, RI" },
  { slug: "glocester", name: "Glocester, RI" },
  { slug: "hopkinton", name: "Hopkinton, RI" },
  { slug: "jamestown", name: "Jamestown, RI" },
  { slug: "johnston", name: "Johnston, RI" },
  { slug: "lincoln", name: "Lincoln, RI" },
  { slug: "little-compton", name: "Little Compton, RI" },
  { slug: "middletown", name: "Middletown, RI" },
  { slug: "narragansett", name: "Narragansett, RI" },
  { slug: "newport", name: "Newport, RI" },
  { slug: "new-shoreham", name: "New Shoreham (Block Island), RI" },
  { slug: "north-kingstown", name: "North Kingstown, RI" },
  { slug: "north-providence", name: "North Providence, RI" },
  { slug: "north-smithfield", name: "North Smithfield, RI" },
  { slug: "pawtucket", name: "Pawtucket, RI" },
  { slug: "portsmouth", name: "Portsmouth, RI" },
  { slug: "providence", name: "Providence, RI" },
  { slug: "richmond", name: "Richmond, RI" },
  { slug: "scituate", name: "Scituate, RI" },
  { slug: "smithfield", name: "Smithfield, RI" },
  { slug: "south-kingstown", name: "South Kingstown, RI" },
  { slug: "tiverton", name: "Tiverton, RI" },
  { slug: "warren", name: "Warren, RI" },
  { slug: "warwick", name: "Warwick, RI" },
  { slug: "westerly", name: "Westerly, RI" },
  { slug: "west-greenwich", name: "West Greenwich, RI" },
  { slug: "west-warwick", name: "West Warwick, RI" },
  { slug: "woonsocket", name: "Woonsocket, RI" },
];
