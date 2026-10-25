export const escapeHtml = (value: string) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

export const sectionId = (heading: string) => heading.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function inlineMarkdown(text: string): string {
  const pattern = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*|\[((?:ADD|CONFIRM)[^\]]*)\]/g;
  let output = "";
  let previous = 0;
  for (const match of text.matchAll(pattern)) {
    const index = match.index ?? 0;
    output += escapeHtml(text.slice(previous, index));
    if (match[1] && match[2]) {
      const href = match[2];
      output += href.startsWith("/") || href.startsWith("https://")
        ? `<a href="${escapeHtml(href)}">${escapeHtml(match[1])}</a>`
        : escapeHtml(match[0]);
    } else if (match[3]) {
      output += `<strong>${inlineMarkdown(match[3])}</strong>`;
    } else {
      output += `<mark class="new-seo-placeholder">${escapeHtml(match[0])}</mark>`;
    }
    previous = index + match[0].length;
  }
  return output + escapeHtml(text.slice(previous));
}

export function markdownHtml(markdown: string): string {
  const lines = markdown.trim().split("\n");
  const output: string[] = [];
  let index = 0;
  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line) { index++; continue; }
    const heading = line.match(/^(#{1,3}) (.+)$/);
    if (heading) {
      const level = heading[1].length;
      output.push(`<h${level} id="${sectionId(heading[2])}">${inlineMarkdown(heading[2])}</h${level}>`);
      index++;
      continue;
    }
    if (line.startsWith("|")) {
      const rows: string[][] = [];
      while (index < lines.length && lines[index].trim().startsWith("|")) {
        const row = lines[index].trim();
        if (!/^\|[\s:|\-]+\|$/.test(row)) rows.push(row.slice(1, -1).split("|").map(cell => cell.trim()));
        index++;
      }
      const [head, ...body] = rows;
      if (head) output.push(`<div class="new-seo-table"><table><thead><tr>${head.map(cell => `<th scope="col">${inlineMarkdown(cell)}</th>`).join("")}</tr></thead><tbody>${body.map(row => `<tr>${row.map(cell => `<td>${inlineMarkdown(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
      continue;
    }
    if (/^(- |\d+\. )/.test(line)) {
      const ordered = /^\d+\./.test(line);
      const items: string[] = [];
      while (index < lines.length && /^(- |\d+\. )/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^(- |\d+\. )/, ""));
        index++;
      }
      const tag = ordered ? "ol" : "ul";
      output.push(`<${tag}>${items.map(item => `<li>${inlineMarkdown(item)}</li>`).join("")}</${tag}>`);
      continue;
    }
    const paragraph = [line];
    index++;
    while (index < lines.length && lines[index].trim() && !/^(#{1,3} |\||- |\d+\. )/.test(lines[index].trim())) {
      paragraph.push(lines[index].trim());
      index++;
    }
    output.push(`<p>${inlineMarkdown(paragraph.join(" "))}</p>`);
  }
  return output.join("\n");
}

export function splitSeoMarkdown(markdown: string) {
  const h1 = markdown.match(/^# (.+)$/m)?.[1] ?? "";
  const intro = markdown.split(/^## /m)[0].replace(/^# .+\n/, "").trim();
  const sections = markdown.split(/^## /m).slice(1).map(block => {
    const newline = block.indexOf("\n");
    const title = block.slice(0, newline);
    return { title, id: sectionId(title), markdown: block.slice(newline + 1).trim() };
  });
  const faqSection = sections.find(section => section.title === "Frequently Asked Questions");
  const faqs = (faqSection?.markdown.split(/^### /m).slice(1) ?? []).map(block => {
    const newline = block.indexOf("\n");
    return { q: block.slice(0, newline).trim(), a: block.slice(newline + 1).trim() };
  });
  return { h1, intro, sections, faqs };
}