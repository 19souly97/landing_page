import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// This tells Vite that the project uses React and JSX files.
export default defineConfig({
  plugins: [react()],
});
