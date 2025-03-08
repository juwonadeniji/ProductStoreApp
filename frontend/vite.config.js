import { defineConfig } from "vite";  // ✅ Import defineConfig
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()]
});
