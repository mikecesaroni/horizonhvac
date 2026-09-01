// Single source of truth for the real Google Business Profile listing.
// The star rating / review count shown on the site are still placeholders —
// replace them (RatingBadges.astro, index.astro testimonials section) once
// the real numbers are provided, and swap in real review quotes at the same time.
export const googleMapsUrl =
  "https://www.google.com/maps/place/Horizon+Hvac/@41.7886342,-72.1081504,220199m/data=!3m1!1e3!4m7!3m6!1s0x486fb4dc34a6b4d:0x7d63159c2c3a112f!8m2!3d41.8666705!4d-71.3928414!16s%2Fg%2F11l2p2q8px";

// Google's short "leave a review" deep link for the profile. The /review suffix
// opens the write-a-review dialog directly rather than the profile page, so use
// this only behind a "review us" call to action — never behind "read our
// reviews", where a customer expects to see existing reviews.
//
// Dropping the /review suffix (https://g.page/r/CS8ROiycFWN9EAE) gives the short
// profile link for the same listing, if a tidier profile URL is ever wanted.
export const googleReviewUrl = "https://g.page/r/CS8ROiycFWN9EAE/review";
