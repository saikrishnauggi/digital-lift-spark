import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/digital-lift-spark/", // ✅ IMPORTANT for GitHub Pages deployment

  server: {
    host: true,         // Enables access via network (IPv4 and IPv6)
    port: 8080,
  },

  plugins: [
    react(),
    ...(mode === "development" ? [componentTagger()] : []), // Conditional plugin loading
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
