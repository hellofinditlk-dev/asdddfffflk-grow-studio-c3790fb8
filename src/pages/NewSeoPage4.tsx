import NewSeoServicePage from "@/components/NewSeoServicePage";
import { newSeoPages } from "@/data/new-seo-pages";
import markdown from "@/content/youtube-ads-sri-lanka.md?raw";
export default function NewSeoPage4() {
  const page = newSeoPages.find(entry => entry.path === "/youtube-ads-sri-lanka");
  if (!page) return null;
  return <NewSeoServicePage page={page} markdown={markdown} />;
}
