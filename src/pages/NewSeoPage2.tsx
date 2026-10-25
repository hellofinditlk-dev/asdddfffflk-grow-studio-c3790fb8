import NewSeoServicePage from "@/components/NewSeoServicePage";
import { newSeoPages } from "@/data/new-seo-pages";
import markdown from "@/content/google-ads-specialist-sri-lanka.md?raw";
export default function NewSeoPage2() {
  const page = newSeoPages.find(entry => entry.path === "/google-ads-specialist-sri-lanka");
  if (!page) return null;
  return <NewSeoServicePage page={page} markdown={markdown} />;
}
