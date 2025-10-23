/** @type {import('@remix-run/dev').AppConfig} */
export default {
  server: "@netlify/remix-adapter", // ✅ Tells Remix to use Netlify serverless adapter
  serverBuildPath: ".netlify/functions-internal/server.mjs", // ✅ Where to emit the function
  serverModuleFormat: "esm",
  ignoredRouteFiles: ["**/.*"],
  future: {
    v3_fetcherPersist: true,
    v3_relativeSplatPath: true,
    v3_throwAbortReason: true,
    v3_singleFetch: true,
    v3_lazyRouteDiscovery: true,
  },
};

