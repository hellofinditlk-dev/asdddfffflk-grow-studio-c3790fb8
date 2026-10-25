import BatchTwoArticlePage from "@/components/BatchTwoArticlePage";
import markdown from "@/content/sri-lanka-tv-channels-advertising-guide.md?raw";
import image from "@/assets/advertising-types.jpg";
export default function BatchTwoArticle20() {
  return <BatchTwoArticlePage path="/blog/sri-lanka-tv-channels-advertising-guide" markdown={markdown} image={image} category="Advertising" cta={{"title": "Planning a TV campaign?", "body": "We'll recommend channels and programmes, produce your TVC and book the schedule.", "path": "/tv-advertising-sri-lanka", "label": "Plan my TV campaign"}} />;
}
