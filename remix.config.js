// remix.config.js
/** @type {import('@remix-run/dev').AppConfig} */
export default {
  // Tell Remix to target Netlify’s serverless adapter
  server: "@netlify/remix-adapter",
  serverModuleFormat: "esm",

  // Keep this simple; Vite handles assets
  ignoredRouteFiles: ["**/.*"],

  // Optional: opt into v3 behavior now so future upgrades are quiet
  future: {
    v3_fetcherPersist: true,
    v3_relativeSplatPath: true,
    v3_throwAbortReason: true,
    v3_singleFetch: true,
    v3_lazyRouteDiscovery: true,
  },
};
