// TODO: replace with the real list of services and descriptions
export type Service = {
  slug: string;
  name: string;
  summary: string;
};

export const services: Service[] = [
  { slug: "ac-repair", name: "AC Repair", summary: "Fast, reliable air conditioning repair." },
  { slug: "heating-repair", name: "Heating Repair", summary: "Furnace and heating system repair." },
  { slug: "installation", name: "System Installation", summary: "New HVAC system installation." },
  { slug: "maintenance", name: "Maintenance Plans", summary: "Keep your system running efficiently year-round." },
];
