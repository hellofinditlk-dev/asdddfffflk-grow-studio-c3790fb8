import BatchTwoArticlePage from "@/components/BatchTwoArticlePage";
import markdown from "@/content/ads-support-sri-lanka.md?raw";
import image from "@/assets/advertising-types.jpg";
export default function BatchTwoArticle13() {
  return <BatchTwoArticlePage path="/blog/ads-support-sri-lanka" markdown={markdown} image={image} category="Advertising" cta={{"title": "Not sure which platform suits your business?", "body": "We'll recommend the right mix, set up your accounts and manage the ads.", "path": "/google-ads-sri-lanka", "label": "Talk to our ads team"}} />;
}
