// TODO: replace with real current promotions and fine print
export type Offer = {
  amount: string;
  label: string;
  fineprint: string;
};

export const offers: Offer[] = [
  {
    amount: "$50 OFF",
    label: "Any Repair Over $300",
    fineprint: "Cannot be combined with any other offers or memberships. Must be presented at time of service. Expires 15 days from redemption.",
  },
  {
    amount: "$500 OFF",
    label: "New AC Installation",
    fineprint: "Subject to approval. Cannot be combined with other offers or discounts. Restrictions may apply. Expires 15 days from redemption.",
  },
  {
    amount: "$100 OFF",
    label: "New Furnace Install",
    fineprint: "Subject to approval. Cannot be combined with other offers or discounts. Restrictions may apply. Expires 15 days from redemption.",
  },
];
