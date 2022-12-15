import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, loadEnv } from "vite";
import svgr from "vite-plugin-svgr";

export default ({ mode }) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd(), ""));

  // https://vitejs.dev/config/
  return defineConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "./src/components"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@layouts": path.resolve(__dirname, "./src/layouts"),
        "@styles": path.resolve(__dirname, "./src/styles"),
        "@tps": path.resolve(__dirname, "./src/types"),
        "@routes": path.resolve(__dirname, "./src/routes"),
        "@store": path.resolve(__dirname, "./src/store"),
        "@static": path.resolve(__dirname, "./src/static"),
        "@hooks": path.resolve(__dirname, "./src/hooks"),
        "@api": path.resolve(__dirname, "./src/api"),
        "@utils": path.resolve(__dirname, "./src/utils"),
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        target: "es2020",
      },
    },
    esbuild: {
      // https://github.com/vitejs/vite/issues/8644#issuecomment-1159308803
      logOverride: { "this-is-undefined-in-esm": "silent" },
    },
    base: process.env.BASE_URL,
    plugins: [
      svgr(),
      react({
        babel: {
          plugins: ["babel-plugin-macros", "babel-plugin-styled-components"],
        },
      }),
    ],
  });
};
