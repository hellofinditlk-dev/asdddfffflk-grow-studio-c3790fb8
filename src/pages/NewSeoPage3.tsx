import NewSeoServicePage from "@/components/NewSeoServicePage";
import { newSeoPages } from "@/data/new-seo-pages";
import markdown from "@/content/google-ads-audit-sri-lanka.md?raw";
export default function NewSeoPage3() {
  const page = newSeoPages.find(entry => entry.path === "/google-ads-audit-sri-lanka");
  if (!page) return null;
  return <NewSeoServicePage page={page} markdown={markdown} />;
}
