import NewSeoServicePage from "@/components/NewSeoServicePage";
import { newSeoPages } from "@/data/new-seo-pages";
import markdown from "@/content/tiktok-ads-sri-lanka.md?raw";
export default function NewSeoPage8() {
  const page = newSeoPages.find(entry => entry.path === "/tiktok-ads-sri-lanka");
  if (!page) return null;
  return <NewSeoServicePage page={page} markdown={markdown} />;
}
