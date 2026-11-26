import { corporateServices, marketingEvents, socialEvents, weddingServices, processSteps, locations, faqs, expertTips, subPages, eventPlanningGuideSections } from "../src/data/eventManagementContent";
import { eventWork, eventBehindTheScenesUrl } from "../src/data/eventWork";
import { EVENT_PATH, EVENT_CANONICAL, EVENT_TITLE, EVENT_DESCRIPTION, EVENT_OVERVIEW, eventManagementSchema } from "../src/lib/eventManagementSeo";
import { escapeHtml } from "../src/lib/newSeoMarkdown";

const paragraph = (text: string) => `<p>${escapeHtml(text)}</p>`;
const list = (items: string[]) => `<ul>${items.map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
const section = (id: string, title: string, content: string) => `<section id="${id}"><div class="container mx-auto px-6 max-w-5xl"><h2>${escapeHtml(title)}</h2>${content}</div></section>`;

/** A route-only, visitor-visible initial article; React replaces it with the interactive page. */
export function eventManagementHtml(template: string, pathname: string): string {
  const path = pathname.split("?")[0].replace(/\/$/, "");
  if (path !== EVENT_PATH && path !== `${EVENT_PATH}/index.html`) return template;
  const tags = [
    `<title>${escapeHtml(EVENT_TITLE)}</title>`,
    `<meta name="description" content="${escapeHtml(EVENT_DESCRIPTION)}">`,
    `<link rel="canonical" href="${EVENT_CANONICAL}">`,
    `<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">`,
    `<meta property="og:title" content="${escapeHtml(EVENT_TITLE)}">`,
    `<meta property="og:description" content="${escapeHtml(EVENT_DESCRIPTION)}">`,
    `<meta property="og:url" content="${EVENT_CANONICAL}">`,
    `<meta property="og:type" content="website">`,
    `<meta name="twitter:title" content="${escapeHtml(EVENT_TITLE)}">`,
    `<meta name="twitter:description" content="${escapeHtml(EVENT_DESCRIPTION)}">`,
    `<meta name="twitter:card" content="summary_large_image">`,
    `<script type="application/ld+json" data-event-schema>${JSON.stringify(eventManagementSchema()).replace(/</g, "\\u003c")}</script>`,
  ].join("\n");
  const groups = [["Corporate Event Management Sri Lanka", corporateServices], ["Marketing & Promotional Events", marketingEvents], ["Social & Private Events", socialEvents], ["Wedding Planning Sri Lanka", weddingServices]] as const;
  const services = groups.map(([title, items]) => `<h3>${escapeHtml(title)}</h3>${list([...items])}`).join("");
  const photos = eventWork.map(photo => `<figure><a href="${escapeHtml(photo.url)}"><img src="${escapeHtml(photo.url)}" alt="${escapeHtml(photo.alt)}" width="${photo.width}" height="${photo.height}" loading="lazy"></a><figcaption>${escapeHtml(photo.caption)}</figcaption></figure>`).join("");
  const guide = eventPlanningGuideSections.map(item => `<h3>${escapeHtml(item.title)}</h3>${item.paragraphs.map(paragraph).join("")}`).join("");
  const answers = faqs.map((faq, index) => `<details id="event-answer-${index + 1}" open><summary>${escapeHtml(faq.q)}</summary>${paragraph(faq.a)}</details>`).join("");
  const related = subPages.map(item => `<li><a href="${item.to}">${escapeHtml(item.label)}</a> — ${escapeHtml(item.desc)}</li>`).join("");
  const body = `<main class="event-page" data-event-initial>
    <section><div class="container mx-auto px-6 max-w-5xl"><nav aria-label="Breadcrumb"><a href="/">Home</a> / Event Management</nav><h1>Event Planning &amp; Event Management Sri Lanka</h1>${paragraph(EVENT_OVERVIEW)}<a href="#event-enquiry">Plan My Event — Get a Quote</a></div></section>
    ${section("event-services", "Types of Events We Manage in Sri Lanka", paragraph("Discuss the event format that fits your audience, purpose and budget. The proposal should identify the services and suppliers available for your date and location.") + services)}
    ${section("event-process", "Our Event Planning Process", processSteps.map(step => `<h3>${escapeHtml(step.title)}</h3>${paragraph(step.desc)}`).join(""))}
    ${section("event-costs", "Event Planning Costs & Custom Quotations", paragraph("We offer flexible pricing based on event type, number of guests, location, and custom requirements. Ask for an itemised quotation with inclusions, exclusions and payment conditions."))}
    ${section("event-work", "Real events. Real moments.", paragraph("A look at academic ceremonies, product launches and the moments that bring an event together.") + `<div class="event-work-grid">${photos}</div><a href="${eventBehindTheScenesUrl}" rel="noopener noreferrer">Behind the scenes on Facebook</a>`)}
    ${section("event-planning-guide", "A Practical Event Planning Guide for Sri Lankan Businesses", paragraph("Use the guidance below to prepare a brief, compare quotations and connect your event to a realistic promotion and follow-up plan.") + guide)}
    ${section("event-coverage", "Event Management Across Sri Lanka", paragraph("Request event planning in Sri Lanka for Colombo or a regional location. Travel, suppliers and availability are confirmed for your date and venue.") + list(locations))}
    ${section("event-tips", "How to Plan a Successful Event in Sri Lanka — Expert Tips", expertTips.map(tip => `<h3>${escapeHtml(tip.title)}</h3>${paragraph(tip.desc)}`).join(""))}
    ${section("event-related", "Specialized Event Services", `<ul>${related}</ul><p>Connect your invitations and promotion with an <a href="/event-marketing-sri-lanka">event marketing plan</a>. Review <a href="/blog/corporate-event-management-sri-lanka-choose-agency">choosing a corporate event agency</a> before comparing proposals.</p>`)}
    ${section("event-faq", "Event Planning & Management: Your Questions Answered", answers)}
    ${section("event-enquiry", "Request Your Event Quotation", paragraph("Send your event brief for a written proposal within 24–48 hours. Fees, supplier costs, payment terms and availability are confirmed in writing.") + list(["Purpose and type of event", "Preferred date, city and venue", "Expected guests and available budget", "Planning, production and promotion needs"]) + `<a href="https://wa.me/94760317477?text=Hi%2C%20I%20would%20like%20to%20discuss%20an%20event%20brief">Discuss Your Event on WhatsApp</a> · <a href="tel:+94760317477">Call +94 76 031 7477</a>`)}
  </main>`;
  return template.replace(/<title>[\s\S]*?<\/title>/gi, "")
    .replace(/<meta\b[^>]*(?:name|property)=["'](?:description|keywords|robots|og:title|og:description|og:url|og:type|og:image(?::[^"']+)?|twitter:title|twitter:description|twitter:card|twitter:image)["'][^>]*>/gi, "")
    .replace(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi, "")
    .replace(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, "")
    .replace("</head>", `${tags}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`)
    .replace(/<noscript>\s*<p><strong>Cypher Digital[\s\S]*?<\/noscript>/, "");
}