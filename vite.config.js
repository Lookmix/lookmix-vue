import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
// import { createVuePlugin as vue } from "vite-plugin-vue2"
import { fileURLToPath, URL } from "node:url"
// import { VuetifyResolver } from "unplugin-vue-components/resolvers";
// import Components from "unplugin-vue-components/vite";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify"

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      sass: {
        api: "modern-compiler"
      }
    }
  },
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    vuetify({
      autoImport: true,
      styles: { configFile: "src/styles/variables.scss" }
    }),
    // Components({
      // resolvers: [
        // Vuetify
        // VuetifyResolver(),
      // ],
    // }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    },
    // remove this if all imported vue files ends with .vue extension
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"]
  },
  server: {
    host: "127.10.10.10",
    port: "8080"
  }
})