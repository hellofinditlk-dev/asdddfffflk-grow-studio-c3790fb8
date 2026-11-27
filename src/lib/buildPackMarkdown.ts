import { buildPackLinkedRoutes } from "../data/buildPackPages";
import { escapeHtml, inlineMarkdown, sectionId } from "./newSeoMarkdown";

export const buildPackSectionId = sectionId;
export function buildPackInlineHtml(text: string) {
  return inlineMarkdown(text.replace(/\[([^\]]+)\]\((\/[^)]+)\)/g, (match, label: string, path: string) => buildPackLinkedRoutes.includes(path) ? match : label));
}

/** Dedicated to the remaining build-pack pages; existing Markdown renderers are unchanged. */
export function buildPackBodyHtml(body: string) {
  return body.split(/\n\n+/).map(block => {
    if (/^\[Button: [^\]]+\]$/.test(block)) return `<a href="#quote-form">${escapeHtml(block.slice(9, -1))}</a>`;
    const button = block.match(/\[Button: ([^\]]+)\]/);
    if (button) return `<p>${buildPackInlineHtml(block.replace(button[0], "").trim())}</p><a href="#quote-form">${escapeHtml(button[1])}</a>`;
    const lines = block.split("\n");
    if (lines.every(line => line.startsWith("- "))) return `<ul>${lines.map(line => `<li>${buildPackInlineHtml(line.slice(2))}</li>`).join("")}</ul>`;
    if (lines.every(line => /^\d+\. /.test(line))) return `<ol>${lines.map(line => `<li>${buildPackInlineHtml(line.replace(/^\d+\. /, ""))}</li>`).join("")}</ol>`;
    const heading = block.match(/^\*\*([^*]+)\*\*\n([\s\S]+)$/);
    return heading ? `<h3>${escapeHtml(heading[1])}</h3><p>${buildPackInlineHtml(heading[2])}</p>` : `<p>${buildPackInlineHtml(block)}</p>`;
  }).join("\n");
}