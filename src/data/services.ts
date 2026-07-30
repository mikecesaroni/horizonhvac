export type Service = {
  slug: string;
  name: string;
  summary: string;
  description: string;
  featured?: boolean;
  metaTitle: string;
  metaDescription: string;
  signs: string[];
  whatWeDo: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "emergency-service",
    name: "HVAC Emergencies",
    summary: "True 24/7 emergency HVAC service.",
    description:
      "Heating or cooling crisis? Horizon HVAC provides true emergency service, showing up promptly with solutions that protect your home and peace of mind.",
    featured: true,
    metaTitle: "24/7 Emergency HVAC Repair in Rhode Island | Horizon HVAC",
    metaDescription:
      "No heat in a Rhode Island winter or no AC in a heat wave? Horizon HVAC answers day or night, 7 days a week, with fast emergency heating & cooling repair.",
    signs: [
      "No heat during a cold snap, or a furnace that won't turn on at all",
      "Central air that's stopped cooling during a summer heat wave",
      "Burning smells, unusual noises, or visible sparking from your system",
      "A tripped breaker that keeps tripping when your HVAC system runs",
      "Water pooling around your furnace, air handler, or outdoor condenser",
    ],
    whatWeDo: [
      "Answer the phone and dispatch a technician — day, night, weekends, and holidays",
      "Diagnose the failure on-site and explain the problem in plain language before any work starts",
      "Carry common parts on the truck to fix most emergencies in a single visit",
      "Provide safe temporary solutions when a full repair requires ordering a part",
    ],
    faqs: [
      {
        q: "Do you really answer the phone at 2am?",
        a: "Yes. Horizon HVAC offers true 24/7 emergency service across Rhode Island, every day of the year, not just an answering service that calls you back in the morning.",
      },
      {
        q: "How fast can a technician get to my home?",
        a: "We prioritize no-heat and no-cool emergencies and dispatch the closest available technician. Same-day service is standard across our Rhode Island service area.",
      },
      {
        q: "What does emergency HVAC service cost?",
        a: "We diagnose the issue and give you an upfront price before any repair begins, so there are never surprise charges — even for after-hours emergency calls.",
      },
    ],
  },
  {
    slug: "heating-repair",
    name: "Heating Repair",
    summary: "Furnace and heating system repair.",
    description:
      "When your furnace stops working, Horizon HVAC responds quickly with dependable repairs that restore warmth and comfort without adding stress to your busy day.",
    featured: true,
    metaTitle: "Furnace & Heating Repair in Rhode Island | Horizon HVAC",
    metaDescription:
      "Furnace not heating, short-cycling, or making noise? Horizon HVAC repairs gas, oil, and electric heating systems fast across Rhode Island. Same-day service.",
    signs: [
      "The furnace runs but blows cold or lukewarm air",
      "Short cycling — the system turns on and off repeatedly",
      "Rooms that heat unevenly, or a thermostat that doesn't match the actual temperature",
      "Banging, clicking, or squealing noises from the furnace",
      "A noticeable jump in heating bills with no change in usage",
      "The pilot light or ignitor won't stay lit",
    ],
    whatWeDo: [
      "Full diagnostic on gas, oil, and electric furnaces and heat pumps",
      "Repair or replace ignitors, thermocouples, blower motors, and control boards",
      "Clean and inspect burners, heat exchangers, and ductwork connections",
      "Check for carbon monoxide safety issues on combustion systems",
      "Recommend repair vs. replacement honestly based on your system's age and condition",
    ],
    faqs: [
      {
        q: "Should I repair my old furnace or replace it?",
        a: "It depends on the age and repair cost. As a rule of thumb, if a furnace is past 15 years old and the repair costs more than a third of a new system, replacement usually saves money long-term. We'll give you real numbers for your specific system so you can decide.",
      },
      {
        q: "Why is my furnace making a banging noise when it starts?",
        a: "That's often delayed ignition — gas building up before it lights — which is worth having inspected quickly for safety. It can also be ductwork expanding or a failing blower component.",
      },
      {
        q: "How often should a furnace be serviced?",
        a: "Once a year, ideally before the heating season starts, to catch small issues before they turn into a no-heat emergency in the middle of a Rhode Island winter.",
      },
    ],
  },
  {
    slug: "ac-repair",
    name: "AC Repair",
    summary: "Fast, reliable air conditioning repair.",
    description:
      "Hot house? Horizon HVAC delivers fast, reliable AC repair to keep your family cool, comfortable, and confident you've chosen the right team.",
    featured: true,
    metaTitle: "Air Conditioning Repair in Rhode Island | Horizon HVAC",
    metaDescription:
      "AC not cooling, leaking, or blowing warm air? Horizon HVAC provides fast, reliable air conditioning repair across Rhode Island with same-day appointments.",
    signs: [
      "The AC runs constantly but never quite cools the house",
      "Warm air blowing from the vents",
      "Ice buildup on the indoor coil or outdoor unit",
      "Water leaking or pooling near the indoor unit",
      "Loud rattling, buzzing, or grinding from the outdoor condenser",
      "Higher humidity indoors even with the AC running",
    ],
    whatWeDo: [
      "Diagnose refrigerant leaks, compressor issues, and electrical faults",
      "Repair or replace capacitors, contactors, fan motors, and coils",
      "Recharge refrigerant to manufacturer spec and pressure-test for leaks",
      "Clean condenser coils and check airflow across the entire system",
      "Test the whole system under load before we leave, not just the failed part",
    ],
    faqs: [
      {
        q: "Why is my AC blowing warm air?",
        a: "Common causes are low refrigerant from a leak, a failing compressor, a dirty condenser coil restricting heat exchange, or a bad capacitor. We diagnose the actual cause rather than guessing.",
      },
      {
        q: "Is it normal for my AC to freeze up?",
        a: "No — ice on the coil or lines usually means restricted airflow (dirty filter, blocked vents) or low refrigerant. Running a frozen system can damage the compressor, so it's worth shutting it off and calling us.",
      },
      {
        q: "How long does an AC repair visit take?",
        a: "Most repairs are completed in a single visit, often under two hours. If a specialty part needs to be ordered, we'll get your system running safely in the meantime.",
      },
    ],
  },
  {
    slug: "installation",
    name: "System Installation",
    summary: "New HVAC system installation.",
    description: "Full installation of new, energy-efficient heating and cooling systems, done right the first time.",
    metaTitle: "New HVAC System Installation in Rhode Island | Horizon HVAC",
    metaDescription:
      "Replacing an old furnace, AC, or heat pump? Horizon HVAC installs energy-efficient heating & cooling systems sized correctly for your Rhode Island home.",
    signs: [
      "Your system is 15+ years old and repair costs keep climbing",
      "Energy bills have crept up even though usage hasn't changed",
      "Repairs are becoming more frequent",
      "Your home has rooms that are always too hot or too cold",
      "You're renovating, finishing a basement, or adding square footage",
    ],
    whatWeDo: [
      "Perform a proper load calculation instead of just matching the old system's size",
      "Present efficiency and equipment options at different price points, honestly explained",
      "Handle ductwork modifications, electrical, and permitting where required",
      "Test and commission the full system before calling the job done",
      "Walk you through financing options and available rebates",
    ],
    faqs: [
      {
        q: "How do I know what size system I need?",
        a: "We run a load calculation based on your home's square footage, insulation, windows, and layout — not just a guess based on the old unit. An oversized or undersized system wastes energy and wears out faster either way.",
      },
      {
        q: "How long does a full installation take?",
        a: "A straightforward furnace or AC swap is typically done in a day. Jobs involving ductwork changes, heat pump conversions, or electrical upgrades may take longer, which we'll walk through before work starts.",
      },
      {
        q: "Do you offer financing for a new system?",
        a: "Yes — see our Financing page for current options. We'll also flag any Rhode Island or federal energy-efficiency rebates your new system may qualify for.",
      },
    ],
  },
  {
    slug: "maintenance",
    name: "Maintenance Plans",
    summary: "Keep your system running efficiently year-round.",
    description: "Seasonal tune-ups and maintenance plans that keep your system running efficiently year-round.",
    metaTitle: "HVAC Maintenance Plans in Rhode Island | Horizon HVAC",
    metaDescription:
      "Seasonal furnace & AC tune-ups that catch small problems before they become expensive breakdowns. Rhode Island maintenance plans from Horizon HVAC.",
    signs: [
      "It's been over a year since your last tune-up",
      "You want to avoid an emergency breakdown during peak season",
      "You'd like to keep your manufacturer's warranty valid (many require documented annual service)",
      "Your energy bills are creeping up year over year",
    ],
    whatWeDo: [
      "Inspect and clean burners, coils, filters, and electrical connections",
      "Check refrigerant charge and combustion safety",
      "Test system startup, shutdown, and safety controls",
      "Provide a written report of findings — no upsell pressure, just what we found",
      "Prioritize maintenance-plan members for scheduling during peak season",
    ],
    faqs: [
      {
        q: "What's included in a maintenance plan?",
        a: "See our Plans page for full details — typically two visits a year (spring AC check, fall furnace check), priority scheduling, and a member discount on repairs.",
      },
      {
        q: "Does regular maintenance actually save money?",
        a: "Yes. A dirty or neglected system works harder to hit the same temperature, which shows up directly on your energy bill, and small issues caught early are far cheaper than the breakdown they'd eventually cause.",
      },
      {
        q: "When should I schedule my seasonal tune-up?",
        a: "Ideally AC service in spring before the first hot stretch, and furnace service in fall before the heat gets turned on for the season — both before, not during, peak demand.",
      },
    ],
  },
];
