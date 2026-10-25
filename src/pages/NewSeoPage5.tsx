import NewSeoServicePage from "@/components/NewSeoServicePage";
import { newSeoPages } from "@/data/new-seo-pages";
import markdown from "@/content/google-shopping-ads-sri-lanka.md?raw";
export default function NewSeoPage5() {
  const page = newSeoPages.find(entry => entry.path === "/google-shopping-ads-sri-lanka");
  if (!page) return null;
  return <NewSeoServicePage page={page} markdown={markdown} />;
}
