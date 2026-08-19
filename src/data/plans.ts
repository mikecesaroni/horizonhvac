export type MembershipPlan = {
  name: string;
  price: string;
  billing: string;
  annual: string;
  visits: string;
  discount: string;
  features: string[];
  addOn: string;
  highlight?: boolean;
  badge?: string;
};

export const membershipPlans: MembershipPlan[] = [
  {
    name: "Essential",
    price: "$24",
    billing: "/mo per system",
    annual: "$288/yr",
    visits: "1 visit/year",
    discount: "10% off repairs",
    features: [
      "1 annual HVAC tune-up + inspection",
      "Priority scheduling (within 48 hrs)",
      "10% discount on all repairs",
      "Filter reminder program",
      "No diagnostic fee on service calls",
    ],
    addOn: "Additional System: $24/mo",
  },
  {
    name: "Comfort Club",
    price: "$39",
    billing: "/mo per system",
    annual: "$468/yr",
    visits: "2 visits/year",
    discount: "15% off repairs & equipment",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Includes $250+ in free services",
      "2 tune-ups/year (spring + fall)",
      "Priority same-day emergency service",
      "15% discount on all repairs & equipment",
      "Free filter delivery (up to 4/year)",
      "Annual indoor air quality report",
      "Refrigerant top-off included (up to 1 lb)",
      "Thermostat calibration check",
    ],
    addOn: "Additional System: $39/mo",
  },
  {
    name: "Total Comfort",
    price: "$59",
    billing: "/mo per system",
    annual: "$708/yr",
    visits: "2 visits/year",
    discount: "15% off repairs & equipment",
    features: [
      "Covers full heating + cooling",
      "Everything in Comfort Club",
      "Full parts & labor warranty on repairs",
      "Dedicated VIP service line",
      "Free UV air purifier install (1st year)",
      "Smart thermostat programming & optimization",
      "Duct inspection + report annually",
      "20% off new equipment + free install quote",
      "2-hr emergency response guarantee",
      "Multi-system: 2nd system 50% off",
    ],
    addOn: "Additional System: $59/mo",
  },
];
