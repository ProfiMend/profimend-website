import { defineConfig } from "vite";
import { vitePlugin as remix } from "@remix-run/dev";
import tsconfigPaths from "vite-tsconfig-paths";

// @vitejs/plugin-react is optional for Remix; you can omit it.
// If you want to keep it, import it and add react() to the plugins array.

export default defineConfig({
  plugins: [
    remix(),         // ✅ REQUIRED for Remix + Vite
    tsconfigPaths(),
  ],
  css: { postcss: "./postcss.config.js" },
});


