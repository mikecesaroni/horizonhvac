// Single source of truth for the seasonal tune-up special, shared by the
// dedicated /tune-up page and the featured band on /deals.
//
// HEATING ONLY. Mirrors the service as defined in Horizon's Housecall Pro price
// book ("$149 Tune up Special - Heater / Furnace tune-up"). Do not add cooling
// work here: air conditioning is a separate visit, and /tune-up carries an FAQ
// that says so explicitly.
//
// The price lives here rather than in each page so the two can never disagree —
// which is exactly what happened when it was hardcoded per page.

export const tuneUp = {
  price: 149,
  name: "Heating Tune-Up Special",
  href: "/tune-up",
  blurb:
    "A full inspection and service of your heater or furnace, at one flat price. No trip fee, no diagnostic add-on, and no obligation to approve any repair we find.",
  // Verbatim from the Housecall Pro price book entry.
  checklist: [
    "Clean blower",
    "Clean & adjust burners",
    "Inspect heat exchanger",
    "Inspect gas pressure & flame",
    "Inspect igniter / pilot light",
    "Inspect filter",
    "Check airflow",
  ],
  recommendation:
    "When it's completed you'll receive a recommendation for any further maintenance or repair your system needs.",
};
