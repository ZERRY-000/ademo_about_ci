import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vitest/config";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@/": `${path.resolve(__dirname, "./src")}/`,
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
  },
});
