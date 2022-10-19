import { defineConfig } from "vite"
import path from "path"
import envCompatible from "vite-plugin-env-compatible"
import { createHtmlPlugin } from "vite-plugin-html"
import { viteCommonjs } from "@originjs/vite-plugin-commonjs"

export default defineConfig({
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
  plugins: [
    viteCommonjs(),
    envCompatible(),
    createHtmlPlugin({
      inject: {
        data: {
          title: "sanity-mobile-preview",
        },
      },
    }),
  ],
  build: {},
})
