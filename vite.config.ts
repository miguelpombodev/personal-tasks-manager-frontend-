import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const env = loadEnv("development", process.cwd(), "");

// https://vite.dev/config/
export default defineConfig({
  define: {
    "process.env.API_BASE_URL": JSON.stringify(env.API_BASE_URL),
  },
  plugins: [react()],
});
