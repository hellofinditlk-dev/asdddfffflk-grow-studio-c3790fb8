import NewSeoArticlePage from "@/components/NewSeoArticlePage";
import { newSeoPages } from "@/data/new-seo-pages";
import markdown from "@/content/google-ads-vs-google-adsense-sri-lanka.md?raw";
export default function NewSeoPage10() {
  const page = newSeoPages.find(entry => entry.path === "/blog/google-ads-vs-google-adsense-sri-lanka");
  if (!page) return null;
  return <NewSeoArticlePage page={page} markdown={markdown} />;
}
