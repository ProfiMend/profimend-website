// netlify/functions/server.mjs
import { createRequestHandler as createRemixHandler } from "@remix-run/node";
import * as build from "../../build/server/index.js";

// Build a proper absolute URL from event pieces
function buildAbsoluteUrl(event) {
  const proto =
    event.headers?.["x-forwarded-proto"] ||
    event.headers?.["x-forwarded-protocol"] ||
    "https";

  const host =
    event.headers?.["x-forwarded-host"] ||
    event.headers?.host;

  // rawQuery is present in some envs; otherwise use queryStringParameters
  let query = "";
  if (typeof event.rawQuery === "string" && event.rawQuery.length) {
    query = `?${event.rawQuery}`;
  } else if (event.queryStringParameters) {
    const usp = new URLSearchParams(event.queryStringParameters);
    const s = usp.toString();
    if (s) query = `?${s}`;
  }

  const path = event.path || "/";
  return `${proto}://${host}${path}${query}`;
}

const remixHandler = createRemixHandler(build, process.env.NODE_ENV);

export const handler = async (event /*, context */) => {
  try {
    const url = buildAbsoluteUrl(event);

    // Headers -> Fetch Headers
    const headers = new Headers();
    for (const [k, v] of Object.entries(event.headers || {})) {
      if (typeof v === "string") headers.set(k, v);
    }

    // Body handling
    let body = event.body;
    if (body && event.isBase64Encoded) {
      body = Buffer.from(body, "base64");
    }

    const request = new Request(url, {
      method: event.httpMethod || "GET",
      headers,
      body: ["GET", "HEAD"].includes((event.httpMethod || "GET").toUpperCase())
        ? undefined
        : body,
    });

    const response = await remixHandler(request);

    // Convert Fetch Response -> Netlify response
    const resHeaders = {};
    for (const [k, v] of response.headers.entries()) {
      resHeaders[k] = v;
    }

    const text = await response.text();

    return {
      statusCode: response.status,
      headers: resHeaders,
      body: text,
    };
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


