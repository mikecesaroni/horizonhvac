// Real Google Business Profile reviews, quoted verbatim.
//
// Do not edit the `quote` text — these are real customers' words, and rewriting
// them (even for polish) misrepresents a real person. Add or remove entries as
// the profile changes, but keep each quote exactly as posted.
//
// Reviewer names are as they appear publicly on the Google review, normalised
// only for capitalisation. `service` is a short editorial label summarising what
// the review describes — it is not part of the customer's words.
//
// Relative dates ("3 months ago") are deliberately not stored: they go stale the
// moment the page is built, and a wrong date on a real review looks worse than
// no date at all.

export type Review = {
  name: string;
  quote: string;
  service: string;
};

export const reviews: Review[] = [
  {
    name: "Michael O'Hara",
    quote:
      "Great team. Reasonable price. Amazing customer service. They took the time and care to make sure our new heating system was installed correctly and working on the first go. They were able to accommodate our schedule and get us up and running.",
    service: "New heating system installation",
  },
  {
    name: "Donna Roy",
    quote:
      "Very happy with the maintenance service for my HVAC. Scheduling was easy. Received updates confirming arrival time. Jacob was very professional and took the time to explain what he did and his assessment of my system.",
    service: "Seasonal maintenance visit",
  },
  {
    name: "Brandon Heroux",
    quote:
      "Awesome company, came right out and fixed my mini split system after 4 other companies couldn't. Prices are well worth the knowledge from these guys. Thank you",
    service: "Ductless mini-split repair",
  },
];
