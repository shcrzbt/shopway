import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],

  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "#app": resolve(__dirname, "src/app"),
      "#modules": resolve(__dirname, "src/modules"),
      "#pages": resolve(__dirname, "src/views/pages"),
      "#shared": resolve(__dirname, "src/shared"),
      "#services": resolve(__dirname, "src/shared/services"),
      "#icons": resolve(__dirname, "src/shared/components/icons")
    }
  },

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/shared/assets/styles/_variables.scss";
          @import "./src/shared/assets/styles/_mixins.scss";
          @import "./src/shared/assets/styles/global.scss";
        `
      }
    }
  }
});
