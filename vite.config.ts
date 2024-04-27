import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte({ compilerOptions: { customElement: true } })],
  build: {
    lib: {
      entry: "src/main-lib.ts",
      name: "my-element",
      fileName: (format) => `bundle.${format}.js`,
    },
  },
});
