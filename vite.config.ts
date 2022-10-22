import { defineConfig } from "vite"
import { resolve } from "path"
import { viteCommonjs } from "@originjs/vite-plugin-commonjs"
import dts from "vite-plugin-dts"

export default defineConfig({
  resolve: {
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
  },
  plugins: [viteCommonjs(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "SanityMobilePreview",
      fileName: "sanity-mobile-preview",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
})
