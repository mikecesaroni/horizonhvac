// All 39 Rhode Island cities/towns — each gets its own SEO-friendly page automatically
// via src/pages/service-areas/[slug].astro. If Horizon HVAC doesn't actually service
// a given town, remove it here rather than leaving a page claiming coverage you don't offer.
export type County = "Providence County" | "Kent County" | "Washington County" | "Newport County" | "Bristol County";

export type ServiceArea = {
  slug: string;
  name: string;
  county: County;
};

export const serviceAreas: ServiceArea[] = [
  { slug: "barrington", name: "Barrington, RI", county: "Bristol County" },
  { slug: "bristol", name: "Bristol, RI", county: "Bristol County" },
  { slug: "burrillville", name: "Burrillville, RI", county: "Providence County" },
  { slug: "central-falls", name: "Central Falls, RI", county: "Providence County" },
  { slug: "charlestown", name: "Charlestown, RI", county: "Washington County" },
  { slug: "coventry", name: "Coventry, RI", county: "Kent County" },
  { slug: "cranston", name: "Cranston, RI", county: "Providence County" },
  { slug: "cumberland", name: "Cumberland, RI", county: "Providence County" },
  { slug: "east-greenwich", name: "East Greenwich, RI", county: "Kent County" },
  { slug: "east-providence", name: "East Providence, RI", county: "Providence County" },
  { slug: "exeter", name: "Exeter, RI", county: "Washington County" },
  { slug: "foster", name: "Foster, RI", county: "Providence County" },
  { slug: "glocester", name: "Glocester, RI", county: "Providence County" },
  { slug: "hopkinton", name: "Hopkinton, RI", county: "Washington County" },
  { slug: "jamestown", name: "Jamestown, RI", county: "Newport County" },
  { slug: "johnston", name: "Johnston, RI", county: "Providence County" },
  { slug: "lincoln", name: "Lincoln, RI", county: "Providence County" },
  { slug: "little-compton", name: "Little Compton, RI", county: "Newport County" },
  { slug: "middletown", name: "Middletown, RI", county: "Newport County" },
  { slug: "narragansett", name: "Narragansett, RI", county: "Washington County" },
  { slug: "newport", name: "Newport, RI", county: "Newport County" },
  { slug: "new-shoreham", name: "New Shoreham (Block Island), RI", county: "Washington County" },
  { slug: "north-kingstown", name: "North Kingstown, RI", county: "Washington County" },
  { slug: "north-providence", name: "North Providence, RI", county: "Providence County" },
  { slug: "north-smithfield", name: "North Smithfield, RI", county: "Providence County" },
  { slug: "pawtucket", name: "Pawtucket, RI", county: "Providence County" },
  { slug: "portsmouth", name: "Portsmouth, RI", county: "Newport County" },
  { slug: "providence", name: "Providence, RI", county: "Providence County" },
  { slug: "richmond", name: "Richmond, RI", county: "Washington County" },
  { slug: "scituate", name: "Scituate, RI", county: "Providence County" },
  { slug: "smithfield", name: "Smithfield, RI", county: "Providence County" },
  { slug: "south-kingstown", name: "South Kingstown, RI", county: "Washington County" },
  { slug: "tiverton", name: "Tiverton, RI", county: "Newport County" },
  { slug: "warren", name: "Warren, RI", county: "Bristol County" },
  { slug: "warwick", name: "Warwick, RI", county: "Kent County" },
  { slug: "westerly", name: "Westerly, RI", county: "Washington County" },
  { slug: "west-greenwich", name: "West Greenwich, RI", county: "Kent County" },
  { slug: "west-warwick", name: "West Warwick, RI", county: "Kent County" },
  { slug: "woonsocket", name: "Woonsocket, RI", county: "Providence County" },
];
