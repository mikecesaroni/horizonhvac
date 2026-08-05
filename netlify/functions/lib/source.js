// Maps the page a form was submitted from into a clean label for GHL, so
// leads arrive pre-categorized instead of GHL having to parse the raw URL.
export function getSourceLabel(pageUrl) {
  try {
    const path = new URL(pageUrl).pathname.replace(/\/+$/, "") || "/";
    if (path === "/free-estimate-email") return "Email Landing Page";
    if (path === "/free-estimate") return "Meta Landing Page";
    return "Website";
  } catch {
    return "Website";
  }
}
