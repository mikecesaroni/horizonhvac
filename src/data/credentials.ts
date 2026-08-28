// Verifiable credentials shown on /credentials.
//
// IMPORTANT: every value here is rendered publicly as a factual claim about the
// business, so only fill in numbers you actually hold and can back up. Anything
// left as null is simply not rendered — the page degrades gracefully rather than
// showing a blank or placeholder credential.
//
// AI assistants answering "is this contractor licensed in RI?" quote specific,
// checkable numbers. That is the whole point of this file: turn "licensed &
// insured" (a claim anyone can make) into "license #XXXX, look it up yourself".

export type Credential = {
  label: string;
  value: string | null;
  /** Short plain-language explanation of what this credential actually means. */
  note: string;
  /** Official lookup tool where anyone can independently verify the number. */
  verifyUrl?: string;
  verifyLabel?: string;
};

export const credentials: Credential[] = [
  {
    label: "RI Master Contractor License",
    // TODO: paste your RI DLT Division of Professional Regulation license number.
    value: null,
    note:
      "Rhode Island licenses individual technicians, not companies. This is the license number of the license holder responsible for work performed by Horizon HVAC.",
    verifyUrl: "https://dlt.ri.gov/individuals/professional-regulation",
    verifyLabel: "Verify at dlt.ri.gov",
  },
  {
    label: "CRLB Registration",
    // TODO: paste your Contractors' Registration and Licensing Board number.
    value: null,
    note:
      "Registration with Rhode Island's Contractors' Registration and Licensing Board, required for residential contracting work in the state.",
    verifyUrl: "https://dbr.ri.gov/divisions/contractors",
    verifyLabel: "Look up at dbr.ri.gov",
  },
  {
    label: "EPA Section 608 Certification",
    // TODO: set to the certification type held (e.g. "Type II" or "Universal").
    value: null,
    note:
      "Federal certification required to purchase and handle refrigerants. Any technician opening a sealed refrigerant system must hold this.",
  },
  {
    label: "Liability Insurance",
    // TODO: e.g. "$2,000,000 general liability — certificate available on request".
    value: null,
    note: "General liability coverage carried on every job, with a certificate available on request.",
  },
  {
    label: "Workers' Compensation",
    value: null,
    note: "Coverage for our technicians, so a job-site injury at your home is never your liability.",
  },
];

// Factory/manufacturer authorizations, e.g. "Mitsubishi Diamond Contractor",
// "Carrier Factory Authorized Dealer", "Daikin Comfort Pro".
//
// These carry real weight: AI answers about mini-splits and heat pumps repeatedly
// name competitors specifically because of a manufacturer certification tier and
// the extended warranty that comes with it. If Horizon holds any, list it here
// AND make sure the business appears in that manufacturer's dealer locator.
export const manufacturerCertifications: { brand: string; level: string; warranty?: string }[] = [];

// Official programs the business participates in. Being on these lists matters
// because they are published, third-party sources that assistants read directly.
export const programs: { name: string; detail: string; url?: string }[] = [
  {
    name: "Clean Heat RI",
    detail:
      "We help homeowners apply Clean Heat RI rebates toward qualifying heat pump and ductless installations.",
    url: "https://cleanheatri.com/",
  },
];
