export interface NewSeoPage {
  path: string;
  contentFile: string;
  title: string;
  description: string;
  breadcrumbLabel: string;
  heroAlt?: string;
  cta?: string;
  kind?: "service" | "article";
}

export const newSeoPages: NewSeoPage[] = [
  {
    path: "/google-ads-cost-sri-lanka",
    contentFile: "src/content/google-ads-cost-sri-lanka.md",
    title: "Google Ads Cost Sri Lanka (2026) | Budgets & Fees | Cypher Digital",
    description: "How much do Google Ads cost in Sri Lanka? See typical cost per click, minimum budgets, management fees and what drives your price. Free quote in 1 hour.",
    breadcrumbLabel: "Google Ads Cost Sri Lanka",
  },
];