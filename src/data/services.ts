// TODO: replace with the real list of services, descriptions, and photos
export type Service = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    slug: "emergency-service",
    name: "HVAC Emergencies",
    summary: "True 24/7 emergency HVAC service.",
    description:
      "Heating or cooling crisis? Horizon HVAC provides true emergency service, showing up promptly with solutions that protect your home and peace of mind.",
    featured: true,
  },
  {
    slug: "heating-repair",
    name: "Heating",
    summary: "Furnace and heating system repair.",
    description:
      "When your furnace stops working, Horizon HVAC responds quickly with dependable repairs that restore warmth and comfort without adding stress to your busy day.",
    featured: true,
  },
  {
    slug: "ac-repair",
    name: "Cooling",
    summary: "Fast, reliable air conditioning repair.",
    description:
      "Hot house? Horizon HVAC delivers fast, reliable AC repair to keep your family cool, comfortable, and confident you've chosen the right team.",
    featured: true,
  },
  {
    slug: "installation",
    name: "System Installation",
    summary: "New HVAC system installation.",
    description: "Full installation of new, energy-efficient heating and cooling systems, done right the first time.",
  },
  {
    slug: "maintenance",
    name: "Maintenance Plans",
    summary: "Keep your system running efficiently year-round.",
    description: "Seasonal tune-ups and maintenance plans that keep your system running efficiently year-round.",
  },
];
