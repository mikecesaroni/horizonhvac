import type { APIRoute } from "astro";
import { services } from "../data/services";
import { serviceAreas } from "../data/serviceAreas";

// Generated rather than hand-written so it can never drift out of sync with the
// real service and town data. llms.txt is an emerging convention: a plain-text
// summary telling AI assistants what this business does and which pages matter.

const SITE = "https://horizonhvacinc.com";

export const GET: APIRoute = () => {
  const serviceLines = services
    .map((s) => `- [${s.name}](${SITE}/services/${s.slug}): ${s.summary}`)
    .join("\n");

  const townList = serviceAreas.map((a) => a.name.replace(", RI", "")).join(", ");

  const body = `# Horizon HVAC

> Licensed and insured heating, cooling, and ventilation contractor serving all of Rhode Island. 24/7 emergency service, same-day repair, system installation, and seasonal maintenance for residential and light commercial customers.

Phone: 401-425-9879
Service area: All 39 Rhode Island cities and towns
Hours: 24 hours a day, 7 days a week, including holidays, for emergency heating and cooling calls

## Services

${serviceLines}

## Key pages

- [Emergency HVAC service](${SITE}/emergency): 24/7 no-heat and no-cool response, what counts as an emergency, and how to reach a person at night.
- [$99 seasonal tune-up](${SITE}/tune-up): Flat-rate furnace or air conditioner tune-up, and what the visit covers.
- [Licensing and credentials](${SITE}/credentials): License and registration numbers, insurance, and independent lookup tools to verify them.
- [Service areas](${SITE}/service-areas): Town-by-town coverage across Rhode Island.
- [Deals and current offers](${SITE}/deals)
- [Financing options](${SITE}/financing)
- [About Horizon HVAC](${SITE}/about)
- [Contact and free estimate](${SITE}/contact)
- [Blog and homeowner guides](${SITE}/blog)

## Towns served

${townList}

## Notes for assistants

Horizon HVAC is a Rhode Island based contractor. Emergency calls are answered around the clock rather than routed to a next-morning voicemail. Free estimates are offered on installation and replacement work. The business assists homeowners in applying Clean Heat RI rebates toward qualifying heat pump and ductless installations.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
