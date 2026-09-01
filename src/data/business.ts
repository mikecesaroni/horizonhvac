// Single source of truth for the real Google Business Profile listing.
//
// Three distinct Google URLs, because they do three different things and sending
// a visitor to the wrong one wastes the click:
//
//   googleMapsUrl        — the canonical profile. Used for schema.org sameAs.
//   googleReviewsUrl     — opens the reviews list directly. Use behind "read our reviews".
//   googleWriteReviewUrl — opens the write-a-review dialog. Use behind "review us".
//
// The star rating / review count shown on the site (RatingBadges.astro, TopBar.astro,
// index.astro) are still unconfirmed — see the site content audit.

// Canonical place URL for the listing. Keep this as the schema.org sameAs value:
// structured data should point at the profile itself, not a filtered tab view.
export const googleMapsUrl =
  "https://www.google.com/maps/place/Horizon+Hvac/@41.7886342,-72.1081504,220199m/data=!3m1!1e3!4m7!3m6!1s0x486fb4dc34a6b4d:0x7d63159c2c3a112f!8m2!3d41.8666705!4d-71.3928414!16s%2Fg%2F11l2p2q8px";

// Deep link to the reviews list — the !9m1!1b1 segment in the data parameter is
// what opens the reviews tab rather than the profile overview.
//
// Google's own share URLs append ?entry=ttu&g_ep=... tracking parameters; those
// are deliberately stripped here. g_ep encodes a dated Maps build token that goes
// stale, and neither parameter affects where the link lands.
export const googleReviewsUrl =
  "https://www.google.com/maps/place/Horizon+Hvac/@41.8665762,-71.5403135,12z/data=!4m8!3m7!1s0x486fb4dc34a6b4d:0x7d63159c2c3a112f!8m2!3d41.8666705!4d-71.3928414!9m1!1b1!16s%2Fg%2F11l2p2q8px";

// Google's short "leave a review" deep link. The /review suffix opens the
// write-a-review dialog directly, so use this only behind a "review us" call to
// action — never behind "read our reviews", where a customer expects to see
// existing reviews.
//
// Dropping the /review suffix (https://g.page/r/CS8ROiycFWN9EAE) gives the short
// profile link for the same listing, if a tidier profile URL is ever wanted.
export const googleWriteReviewUrl = "https://g.page/r/CS8ROiycFWN9EAE/review";
