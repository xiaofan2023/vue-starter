import { resolve } from "node:path";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

const srcPath = resolve(__dirname, "src");

export default defineConfig({
  resolve: {
    alias: [
      {
        find: "~/",
        replacement: `${srcPath}/`,
      },
    ],
  },

  plugins: [
    Vue(),

    AutoImport({
      imports: ["vue", "@vueuse/core"],
      dts: true,
    }),

    Components({
      dts: true,
    }),
  ],
});
