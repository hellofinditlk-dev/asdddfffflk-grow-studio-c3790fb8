import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { newPagePrerender } from "./scripts/new-page-prerender";
import { telesalesPrerender } from "./scripts/telesales-prerender";
import { digitalMarketingFaqPrerender } from "./scripts/digital-marketing-faq-prerender";
import { eventManagementPrerender } from "./scripts/event-management-prerender";
import { eventPlanningPrerender } from "./scripts/event-planning-prerender";
import { eventArticlesPrerender } from "./scripts/event-articles-prerender";
import { productPhotographyPrerender } from "./scripts/product-photography-prerender";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger(), newPagePrerender(), telesalesPrerender(), digitalMarketingFaqPrerender(), eventManagementPrerender(), eventPlanningPrerender(), eventArticlesPrerender(), productPhotographyPrerender()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
