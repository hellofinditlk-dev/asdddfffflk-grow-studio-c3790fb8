import MarkdownArticle from "@/components/MarkdownArticle";
import md from "@/content/graphic-design-portfolio-tips-sri-lanka.md?raw";

const BlogPost168 = () => (
  <MarkdownArticle
    slug="graphic-design-portfolio-tips-sri-lanka"
    markdown={md}
    title="Graphic Design Portfolio Tips for Sri Lanka (2026) | Cypher Digital"
    h1="Graphic Design Portfolio Tips: What Sri Lankan Agencies Look For"
    description="How a Colombo agency reviews designer portfolios: what we check first, how many pieces to show, common mistakes and a checklist before you apply."
    category="Design Careers"
    date="2026-10-13"
    related={[
      { href: "/blog/graphic-designer-day-in-life-sri-lanka", label: "A day in the life of a graphic designer in Sri Lanka" },
      { href: "/blog/graphic-designer-jobs-sri-lanka-guide", label: "Graphic designer jobs in Sri Lanka: salary guide" },
      { href: "/blog/digital-marketing-portfolio-sri-lanka", label: "How to build a digital marketing portfolio" },
      { href: "/careers", label: "All digital marketing jobs at Cypher Digital" },
    ]}
  />
);

export default BlogPost168;
