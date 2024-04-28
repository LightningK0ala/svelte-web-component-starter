import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte({ compilerOptions: { customElement: true } }),
    viteStaticCopy({
      targets: [
        {
          src: "demo.html",
          dest: ".",
        },
      ],
    }),
  ],
  build: {
    lib: {
      entry: "src/main-lib.ts",
      name: "my-element",
      fileName: (format) => `bundle.${format}.js`,
    },
  },
});
