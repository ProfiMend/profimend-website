import { createRequestHandler } from "@netlify/remix-adapter";
import * as build from "../../build/server/index.js";

// helper to build a query string if Netlify didn't give us rawUrl
function toQueryString(params) {
  if (!params) return "";
  const usp = new URLSearchParams(params);
  const s = usp.toString();
  return s ? `?${s}` : "";
}

export const handler = async (event, context) => {
  try {
    // Ensure event.rawUrl exists (some environments don't send it)
    const proto =
      event.headers?.["x-forwarded-proto"] ||
      event.headers?.["x-forwarded-protocol"] ||
      "https";

    const host =
      event.headers?.["x-forwarded-host"] ||
      event.headers?.host;

    const rawUrl =
      event.rawUrl ||
      `${proto}://${host}${event.path}${toQueryString(event.queryStringParameters)}`;

    const normalizedEvent = { ...event, rawUrl };

    const requestHandler = createRequestHandler({
      build,
      mode: process.env.NODE_ENV,
    });

    return await requestHandler(normalizedEvent, context);
  } catch (error) {
    console.error("Remix server error:", error);
    return {
      statusCode: 500,
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        error: "Internal Server Error",
        message: error?.message || String(error),
      }),
    };
  }
};

