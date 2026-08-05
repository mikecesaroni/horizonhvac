// Receives raffle-entry submissions and forwards them server-side to a
// dedicated GoHighLevel inbound webhook — a separate pipeline from the
// regular quote-form leads (see submit-quote.js), so raffle entrants don't
// land in the same workflow as service-estimate leads.
import { getSourceLabel } from "./lib/source.js";

export default async (req) => {
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  const webhookUrl = process.env.GHL_RAFFLE_WEBHOOK_URL;
  if (!webhookUrl) {
    return new Response(JSON.stringify({ error: "Server not configured" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  let payload;
  try {
    payload = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (!payload.fullName || !payload.phone || !payload.email) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (payload.riResident !== "true") {
    return new Response(JSON.stringify({ error: "Rhode Island residency confirmation required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const ghlResponse = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...payload,
      source: getSourceLabel(payload.pageUrl),
      sourcePage: payload.pageUrl || "unknown",
      submittedAt: new Date().toISOString(),
    }),
  });

  if (!ghlResponse.ok) {
    return new Response(JSON.stringify({ error: "CRM submission failed" }), {
      status: 502,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
