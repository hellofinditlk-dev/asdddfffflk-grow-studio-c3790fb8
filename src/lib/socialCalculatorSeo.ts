export function socialCalculatorSchema(description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Social Media Cost Calculator Sri Lanka",
    description,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript for interactive estimates",
    inLanguage: "en-LK",
    isAccessibleForFree: true,
    url: "https://cypherdigital.lk/social-media-cost-calculator",
    offers: { "@type": "Offer", price: "0", priceCurrency: "LKR" },
    provider: {
      "@type": "Organization",
      "@id": "https://cypherdigital.lk/#organization",
      name: "Cypher Digital",
      url: "https://cypherdigital.lk",
      sameAs: ["https://share.google/XT1Ol3n1HNjs9wAyT"],
      areaServed: { "@type": "Country", name: "Sri Lanka" },
    },
  };
}