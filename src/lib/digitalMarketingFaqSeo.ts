import { digitalMarketingFaq } from "../data/digitalMarketingFaq";

export const FAQ_PATH = "/digital-marketing-faq-sri-lanka";
export const CANONICAL = "https://cypherdigital.lk/digital-marketing-faq-sri-lanka";
export const PAGE_TITLE = "Digital Marketing FAQ Sri Lanka: 56 Questions Answered | Cypher Digital";
export const PAGE_DESCRIPTION =
  "Clear answers to 56 common digital marketing questions in Sri Lanka: costs in LKR, social media, Facebook and Google Ads, SEO, AI search visibility, video and TV advertising.";

export const stripHtml = (html: string) =>
  html
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'");

export function digitalMarketingFaqSchema() {
  return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "@id": `${CANONICAL}#faq`,
          url: CANONICAL,
          name: "Digital Marketing FAQ Sri Lanka",
          inLanguage: "en-LK",
          dateModified: "2026-11-23",
          publisher: { "@id": "https://cypherdigital.lk/#organization" },
          mainEntity: digitalMarketingFaq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: stripHtml(item.answerHtml),
            },
          })),
        },
        {
          "@type": "Organization",
          "@id": "https://cypherdigital.lk/#organization",
          name: "Cypher Digital",
          url: "https://cypherdigital.lk/",
          logo: "https://cypherdigital.lk/assets/logo-DJLYsmc6.png",
          telephone: "+94760317477",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Colombo",
            addressCountry: "LK",
          },
          areaServed: { "@type": "Country", name: "Sri Lanka" },
          knowsAbout: [
            "Social media marketing",
            "Facebook advertising",
            "Google Ads",
            "Search engine optimisation",
            "AI search visibility",
            "Video production",
            "Graphic design",
            "TV and media buying",
          ],
          sameAs: [
            "https://www.facebook.com/cypherdigitalsrilanka",
            "https://www.instagram.com/cypherdigital_sl/",
          ],
        },
        {
          "@type": "WebPage",
          "@id": CANONICAL,
          url: CANONICAL,
          name: "Digital Marketing FAQ Sri Lanka",
          inLanguage: "en-LK",
          dateModified: "2026-11-23",
          isPartOf: { "@id": "https://cypherdigital.lk/#website" },
          about: { "@id": "https://cypherdigital.lk/#organization" },
          mainEntity: { "@id": `${CANONICAL}#faq` },
        },
        {
          "@type": "WebSite",
          "@id": "https://cypherdigital.lk/#website",
          url: "https://cypherdigital.lk/",
          name: "Cypher Digital",
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://cypherdigital.lk/" },
            { "@type": "ListItem", position: 2, name: "Digital Marketing FAQ", item: CANONICAL },
          ],
        },
      ],
    };
}
