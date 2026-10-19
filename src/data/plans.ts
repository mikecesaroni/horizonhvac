// Comfort Club membership plans, transcribed from Horizon's official plan sheet.
//
// Every figure here is a published commercial term that a customer can hold the
// business to, so treat this file as the source of truth and change it only
// against an updated plan sheet. Do not round prices, drop qualifiers such as
// "labor only" or "if needed", or soften the diagnostic-fee wording: those
// qualifiers are what keep the published offer matching what is actually sold.

export type PlanExtras = {
  heading: string;
  items: string[];
};

export type MembershipPlan = {
  name: string;
  tagline: string;
  /** Monthly price per enrolled system. */
  monthly: string;
  /** Total when paying monthly across the year. */
  perYear: string;
  /** Discounted total when paying for the year upfront. */
  annualPrepay: string;
  benefits: string[];
  extras: PlanExtras;
  highlight?: boolean;
  badge?: string;
};

/** Shown on every card: paying annually costs eleven months instead of twelve. */
export const annualPerk = "Pay annually and get 1 month free";

export const membershipPlans: MembershipPlan[] = [
  {
    name: "Essential",
    tagline: "Basic preventative maintenance",
    monthly: "$24",
    perYear: "$288 per year",
    annualPrepay: "$264 paid annually",
    benefits: [
      "One (1) annual HVAC maintenance tune-up",
      "10% discount on repair labor and parts",
      "Priority scheduling target within 48 hours",
      "Seasonal maintenance reminders (email and SMS)",
      "Thermostat calibration check",
      "Filter replacement labor during scheduled tune-up (customer supplies filters)",
      "Transferable membership to a new homeowner",
    ],
    extras: {
      heading: "Additional services",
      items: [
        "Standard diagnostic and service-call fee: $179, waived when recommended work is performed",
        "Chemical A/C coil cleaning: regular price",
        "Boiler descaling: regular price",
        "Additional HVAC systems: $24 per month each",
      ],
    },
  },
  {
    name: "Comfort Club",
    tagline: "Enhanced maintenance and repair savings",
    monthly: "$39",
    perYear: "$468 per year",
    annualPrepay: "$429 paid annually",
    highlight: true,
    badge: "Most Popular",
    benefits: [
      "Two (2) annual HVAC maintenance tune-ups, spring and fall",
      "15% discount on repair labor and parts",
      "Priority service scheduling",
      "Seasonal maintenance reminders (email and SMS)",
      "Thermostat calibration check",
      "Filter replacement labor during tune-ups (customer supplies filters)",
      "Annual visual indoor air quality inspection during tune-up",
      "5% discount on chemical A/C coil cleaning",
      "5% discount on boiler descaling labor",
      "$250 credit toward future equipment replacement",
      "Transferable membership to a new homeowner",
    ],
    extras: {
      heading: "Additional HVAC systems",
      items: ["50% off additional systems: $19.50 per month, $234 per year for each enrolled system"],
    },
  },
  {
    name: "Total Comfort",
    tagline: "Premium maintenance and maximum protection",
    monthly: "$59",
    perYear: "$708 per year",
    annualPrepay: "$649 paid annually",
    benefits: [
      "Two (2) annual HVAC maintenance tune-ups, spring and fall",
      "15% discount on repair labor and parts",
      "First two (2) diagnostic or service calls free per membership year, on the covered system",
      "Additional diagnostic or service calls: $139 each",
      "VIP priority service scheduling",
      "Seasonal maintenance reminders (email and SMS)",
      "Thermostat calibration check",
      "Filter replacement labor during tune-ups (customer supplies filters)",
      "Annual indoor air quality assessment during tune-up",
      "One (1) chemical A/C coil cleaning per year, if needed",
      "One (1) annual boiler descaling, labor only, for eligible equipment",
      "$500 credit toward future equipment replacement",
      "Transferable membership to a new homeowner",
    ],
    extras: {
      heading: "Additional HVAC systems",
      items: ["50% off additional systems: $29.50 per month, $354 per year for each enrolled system"],
    },
  },
];

/** Published membership terms. These bound every benefit listed above. */
export const membershipTerms: { title: string; body: string }[] = [
  {
    title: "Payment options",
    body: "Monthly or annually. Both payment options require a valid credit card on file.",
  },
  {
    title: "Coverage",
    body: "Membership benefits apply to each enrolled HVAC system. Residential systems only.",
  },
  {
    title: "Additional systems",
    body: "Comfort Club and Total Comfort members receive 50% off membership fees for additional enrolled systems. The Essential plan is full price for each additional system.",
  },
  {
    title: "Diagnostic and dispatch fees",
    body: "Diagnostic and dispatch fee waivers apply only to the covered system. Repair labor and parts are billed separately, subject to the applicable discounts.",
  },
  {
    title: "Maintenance",
    body: "Tune-ups are scheduled according to plan benefits and equipment eligibility. Filters are provided by the customer.",
  },
  {
    title: "Discounts",
    body: "Discounts cannot be combined with other promotions or offers. Discounts do not apply to previous purchases.",
  },
  {
    title: "Priority scheduling",
    body: "Scheduling is a target, subject to technician availability, operating hours, and emergency demand. Essential plan priority is within 48 hours.",
  },
  {
    title: "Membership transfer",
    body: "Membership may be transferred to a new homeowner, subject to Horizon HVAC's transfer policy. All outstanding balances must be paid prior to transfer.",
  },
];
