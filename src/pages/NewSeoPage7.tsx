import NewSeoServicePage from "@/components/NewSeoServicePage";
import { newSeoPages } from "@/data/new-seo-pages";
import markdown from "@/content/instagram-ads-sri-lanka.md?raw";
export default function NewSeoPage7() {
  const page = newSeoPages.find(entry => entry.path === "/instagram-ads-sri-lanka");
  if (!page) return null;
  return <NewSeoServicePage page={page} markdown={markdown} />;
}
