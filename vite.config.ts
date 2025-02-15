import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { netlifyPlugin } from "@netlify/remix-edge-adapter/plugin";

export default defineConfig({
  plugins: [remix(), netlifyPlugin(), tsconfigPaths()],
  ssr: {
    external: ["crypto", "fs", "@remix-run/node"], //  Excluye módulos de Node.js
  },
  build: {
    rollupOptions: {
      external: ["crypto", "fs", "@remix-run/node"], // Evita que se empaqueten
    },
  },
});
