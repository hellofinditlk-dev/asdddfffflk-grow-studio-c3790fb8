import { telesalesIsOpen, telesalesVacancy as job } from "../data/telesales-vacancy";
import { escapeHtml, markdownHtml } from "./newSeoMarkdown";

export const telesalesPath = `/careers/${job.slug}`;
export const telesalesCanonical = `https://cypherdigital.lk${telesalesPath}`;
export const telesalesWhatsApp = `https://wa.me/94701772626?text=${encodeURIComponent(job.whatsappMessage)}`;

export function telesalesSchemas(markdown: string, now = new Date()) {
  const breadcrumbs = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://cypherdigital.lk/" },
      { "@type": "ListItem", position: 2, name: "Careers", item: "https://cypherdigital.lk/careers" },
      { "@type": "ListItem", position: 3, name: job.title, item: telesalesCanonical },
    ],
  };
  if (!telesalesIsOpen(now)) return [breadcrumbs];
  return [breadcrumbs, {
    "@context": "https://schema.org", "@type": "JobPosting",
    title: job.title, description: markdownHtml(markdown),
    datePosted: job.datePosted, validThrough: job.validThrough,
    identifier: { "@type": "PropertyValue", name: "Cypher Digital", value: job.slug },
    hiringOrganization: { "@type": "Organization", name: "Cypher Digital", sameAs: "https://cypherdigital.lk/" },
    employmentType: job.employmentType,
    jobLocation: { "@type": "Place", address: { "@type": "PostalAddress", addressLocality: "Colombo", addressRegion: "Western Province", addressCountry: "LK" } },
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: { "@type": "Country", name: "Sri Lanka" },
    responsibilities: job.duties.join("; "), qualifications: job.requirements.join("; "),
    experienceRequirements: { "@type": "OccupationalExperienceRequirements", monthsOfExperience: 0 },
    jobBenefits: job.perks.join("; "), industry: "Digital Marketing",
    directApply: false, url: telesalesCanonical,
  }];
}

export function telesalesHtml(template: string, markdown: string, now = new Date()) {
  const open = telesalesIsOpen(now);
  const tags = `<title>${escapeHtml(job.metaTitle)}</title>
<meta name="description" content="${escapeHtml(job.metaDescription)}">
<link rel="canonical" href="${telesalesCanonical}">
<meta property="og:title" content="${escapeHtml(job.metaTitle)}">
<meta property="og:description" content="${escapeHtml(job.metaDescription)}">
<meta property="og:url" content="${telesalesCanonical}">
<meta property="og:type" content="website">
<meta name="twitter:title" content="${escapeHtml(job.metaTitle)}">
<meta name="twitter:description" content="${escapeHtml(job.metaDescription)}">
<meta name="twitter:card" content="summary_large_image">
<script type="application/ld+json" data-telesales-schema>${JSON.stringify(telesalesSchemas(markdown, now)).replace(/</g, "\\u003c")}</script>`;
  return template.replace(/<title>[\s\S]*?<\/title>/gi, "")
    .replace(/<meta\b[^>]*(?:name|property)=["'](?:description|robots|og:title|og:description|og:url|og:type|twitter:title|twitter:description|twitter:card)["'][^>]*>/gi, "")
    .replace(/<link\b[^>]*rel=["']canonical["'][^>]*>/gi, "")
    .replace(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>/gi, "")
    .replace("</head>", `${tags}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root"><main class="container mx-auto px-4 py-24"><nav aria-label="Breadcrumb"><a href="/">Home</a> / <a href="/careers">Careers</a> / Telesales Executive</nav><p>${open ? "Open vacancy" : "Applications closed"} · ${escapeHtml(job.location)} · ${escapeHtml(job.type)}</p><p>Posted 26 October 2026 · Applications close 31 January 2027</p><article>${markdownHtml(markdown)}</article>${open ? `<a href="${escapeHtml(telesalesWhatsApp)}">Apply on WhatsApp</a>` : ""}</main></div>`)
    .replace(/<noscript>\s*<p><strong>Cypher Digital[\s\S]*?<\/noscript>/, "");
}