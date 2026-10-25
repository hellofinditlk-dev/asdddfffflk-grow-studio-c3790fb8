import BatchTwoArticlePage from "@/components/BatchTwoArticlePage";
import markdown from "@/content/web-design-price-sri-lanka.md?raw";
import image from "@/assets/advertising-benefits.jpg";
export default function BatchTwoArticle16() {
  return <BatchTwoArticlePage path="/blog/web-design-price-sri-lanka" markdown={markdown} image={image} category="Web Design" cta={{"title": "Want a clear, fixed price for your website?", "body": "Tell us what you need and get a free quote within one hour.", "path": "/web-design-sri-lanka", "label": "Get a free website quote"}} />;
}
