/** @type {import('@remix-run/dev').AppConfig} */
export default {
  // Build the server bundle to the default place
  serverBuildPath: "build/server/index.js",
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


