import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { netlifyPlugin } from "@netlify/remix-edge-adapter/plugin";

export default defineConfig({
  plugins: [remix(), netlifyPlugin(), tsconfigPaths()],
  ssr: {
    external: ["crypto", "fs", "@remix-run/node", "@prisma/client"], //  Excluye módulos de Node.js
  },
  build: {
    rollupOptions: {
      external: ["crypto", "fs", "@remix-run/node", "@prisma/client"], // Evita que se empaqueten
    },
  },
});
