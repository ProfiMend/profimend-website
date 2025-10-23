/** @type {import('@remix-run/dev').AppConfig} */
export default {
  // ✅ Tell Remix to use Netlify serverless adapter
  server: "@netlify/remix-adapter",

  // ✅ Write the server bundle into Netlify’s internal functions folder
  //    (this guarantees a function named `server`)
  serverBuildPath: ".netlify/functions-internal/server.mjs",

  serverModuleFormat: "esm",
  ignoredRouteFiles: ["**/.*"],

  // quiet future warnings; safe defaults
  future: {
    v3_fetcherPersist: true,
    v3_relativeSplatPath: true,
    v3_throwAbortReason: true,
    v3_singleFetch: true,
    v3_lazyRouteDiscovery: true,
  },
};
