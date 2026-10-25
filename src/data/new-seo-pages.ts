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
{
  "path": "/google-ads-specialist-sri-lanka",
  "contentFile": "src/content/google-ads-specialist-sri-lanka.md",
  "title": "Google Ads Specialist in Sri Lanka | Certified Experts | Cypher Digital",
  "description": "Hire a certified Google Ads specialist in Sri Lanka. Dedicated account manager, transparent reporting and no lock-in contracts. Get a free account review.",
  "breadcrumbLabel": "Google Ads Specialist Sri Lanka",
  "heroAlt": "Google Ads specialist in Sri Lanka reviewing campaign performance",
  "cta": "Book a free call with a Google Ads specialist",
  "kind": "service"
},
];
