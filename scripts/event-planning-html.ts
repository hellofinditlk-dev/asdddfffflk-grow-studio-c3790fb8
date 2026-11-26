import { PLANNING_PATH, PLANNING_CANONICAL, PLANNING_TITLE, PLANNING_DESCRIPTION, PLANNING_H1, PLANNING_INTRO, planningSections, eventTypeGuides, planningChecklist, hireAdvice, planningFaqs, eventPlanningSchema } from "../src/data/eventPlanningGuide";
import { escapeHtml } from "../src/lib/newSeoMarkdown";

const p = (t: string) => `<p>${escapeHtml(t)}</p>`;
const ul = (items: string[]) => `<ul>${items.map(i => `<li>${escapeHtml(i)}</li>`).join("")}</ul>`;

/** Route-only initial article for the planning guide; other paths return the template unchanged. */
export function eventPlanningHtml(template: string, pathname: string): string {
  const path = pathname.split("?")[0].replace(/\/$/, "");
  if (path !== PLANNING_PATH && path !== `${PLANNING_PATH}/index.html`) return template;
  const t = escapeHtml(PLANNING_TITLE), d = escapeHtml(PLANNING_DESCRIPTION);
  const tags = [`<title>${t}</title>`, `<meta name="description" content="${d}">`, `<link rel="canonical" href="${PLANNING_CANONICAL}">`,
    `<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">`, `<meta property="og:title" content="${t}">`,
    `<meta property="og:description" content="${d}">`, `<meta property="og:url" content="${PLANNING_CANONICAL}">`, `<meta property="og:type" content="article">`,
    `<meta name="twitter:title" content="${t}">`, `<meta name="twitter:description" content="${d}">`, `<meta name="twitter:card" content="summary_large_image">`,
    `<script type="application/ld+json" data-planning-schema>${JSON.stringify(eventPlanningSchema()).replace(/</g, "\\u003c")}</script>`].join("\n");
  const body = `<main class="event-page" data-planning-initial><article>
<nav aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/event-management-sri-lanka">Event Management Sri Lanka</a> / Event Planning Guide</nav>
<h1>${escapeHtml(PLANNING_H1)}</h1>${p(PLANNING_INTRO)}
${planningSections.map(s => `<section id="${s.id}"><h2>${escapeHtml(s.title)}</h2>${s.paragraphs.map(p).join("")}${s.list ? ul(s.list) : ""}</section>`).join("\n")}
<section id="plan-event-types"><h2>Planning Tips by Event Type</h2>${eventTypeGuides.map(g => `<h3>${escapeHtml(g.title)}</h3>${p(g.text)}`).join("")}</section>
<section id="plan-checklist"><h2>Event Planning Checklist</h2>${ul(planningChecklist)}</section>
<section id="plan-hire"><h2>When to Hire an Event Management Company</h2>${hireAdvice.map(p).join("")}<p><a href="/event-management-sri-lanka">Event management in Sri Lanka</a></p></section>
<section id="plan-faq"><h2>Event Planning FAQs</h2>${planningFaqs.map(f => `<details open><summary>${escapeHtml(f.q)}</summary>${p(f.a)}</details>`).join("")}</section>
<section id="plan-enquiry"><h2>Need Help Planning Your Event?</h2><a href="https://wa.me/94760317477">WhatsApp +94 76 031 7477</a></section>
</article></main>`;
  return template.replace(/<title>[\s\S]*?<\/title>/gi, "")
    .replace(/<meta\b[^>]*(?:name|property)=["'](?:description|keywords|robots|og:title|og:description|og:url|og:type|og:image(?::[^"']+)?|twitter:title|twitter:description|twitter:card|twitter:image)["'][^>]*>/gi, "")
    .replace(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi, "")
    .replace(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, "")
    .replace("</head>", `${tags}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`)
    .replace(/<noscript>\s*<p><strong>Cypher Digital[\s\S]*?<\/noscript>/, "");
}
