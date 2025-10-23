import { createRequestHandler } from "@netlify/remix-adapter";
import * as build from "../../build/server/index.js";

export const handler = async (event, context) => {
  try {
    const requestHandler = createRequestHandler({ build, mode: process.env.NODE_ENV });
    return await requestHandler(event, context);
  } catch (error) {
    console.error("Remix server error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error", message: error.message }),
    };
  }
};

