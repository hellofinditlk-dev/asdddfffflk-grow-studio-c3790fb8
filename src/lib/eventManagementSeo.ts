import { faqs } from "../data/eventManagementContent";

export const EVENT_PATH = "/event-management-sri-lanka";
export const EVENT_CANONICAL = `https://cypherdigital.lk${EVENT_PATH}`;
export const EVENT_TITLE = "Event Planning & Event Management Sri Lanka | Cypher Digital";
export const EVENT_DESCRIPTION = "Event planning and event management in Sri Lanka by Cypher Digital. Corporate events, product launches and brand activations. Request your custom event quote.";
export const EVENT_OVERVIEW = "Cypher Digital provides event planning and event management in Sri Lanka for corporate events, conferences, product launches, brand activations, weddings and private celebrations. Planning covers the brief, budget, venue and programme; management coordinates suppliers, guest arrangements and on-day delivery. Choose planning only or discuss optional event promotion, photography and video. Share your date, city, guest count and requirements for a written, itemised quotation.";

export function eventManagementSchema() {
    return [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://cypherdigital.lk/#event-service-provider",
        name: "Cypher Digital",
        description: "Event planning and marketing coordination in Sri Lanka covering corporate events, product launches, brand activations and wedding planning.",
        url: "https://cypherdigital.lk",
        telephone: "+94701772626",
        contactPoint: { "@type": "ContactPoint", telephone: "+94760317477", contactType: "Event planning enquiries", areaServed: "LK" },
        areaServed: { "@type": "Country", name: "Sri Lanka" },
      },
      {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Event Management Services in Sri Lanka — Cypher Digital",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Corporate Event Management Sri Lanka" },
          { "@type": "ListItem", position: 2, name: "Product Launch Events Sri Lanka" },
          { "@type": "ListItem", position: 3, name: "Brand Activation Sri Lanka" },
          { "@type": "ListItem", position: 4, name: "Wedding Planning Sri Lanka" },
          { "@type": "ListItem", position: 5, name: "Conference & Seminar Management Sri Lanka" },
          { "@type": "ListItem", position: 6, name: "Exhibition & Trade Show Management Sri Lanka" },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${EVENT_CANONICAL}#service`,
        url: EVENT_CANONICAL,
        name: "Event Planning & Event Management Sri Lanka",
        description: "Professional marketing-driven event management and event planning services in Sri Lanka by Cypher Digital. Corporate events, weddings, brand activations, and product launches.",
        provider: {
          "@type": "Organization",
          "@id": "https://cypherdigital.lk/#event-service-provider",
          name: "Cypher Digital",
          url: "https://cypherdigital.lk",
        },
        serviceType: ["Event planning", "Event management", "Event promotion"],
        areaServed: { "@type": "Country", name: "Sri Lanka" },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Event Management Services",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Corporate Event Management Sri Lanka" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Planning Sri Lanka" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Event Marketing Sri Lanka" } },
            { "@type": "Offer", itemOffered: { "@type": "Service", name: "Product Launch Events Sri Lanka" } },
          ],
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": `${EVENT_CANONICAL}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://cypherdigital.lk" },
          { "@type": "ListItem", position: 2, name: "Event Planning & Event Management Sri Lanka", item: EVENT_CANONICAL },
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": `${EVENT_CANONICAL}#webpage`,
        inLanguage: "en-LK",
        mainEntity: { "@id": `${EVENT_CANONICAL}#service` },
        name: "Event Planning & Event Management Sri Lanka | Cypher Digital",
        url: EVENT_CANONICAL,
        breadcrumb: { "@id": `${EVENT_CANONICAL}#breadcrumbs` },
        dateModified: "2026-11-26",
        description: "Event planning and event management in Sri Lanka by Cypher Digital. Corporate events, product launches and brand activations. Request your custom event quote.",
      },
    ];
}
