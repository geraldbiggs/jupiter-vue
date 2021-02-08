import vue from "@vitejs/plugin-vue";
const path = require("path");

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  dedupe: ["vue"],
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.js"),
      name: "CompositionUtils",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
};
