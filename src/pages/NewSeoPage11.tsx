import NewSeoServicePage from "@/components/NewSeoServicePage";
import { newSeoPages } from "@/data/new-seo-pages";
import markdown from "@/content/web-design-sri-lanka.md?raw";
export default function NewSeoPage11() {
  const page = newSeoPages.find(entry => entry.path === "/web-design-sri-lanka");
  if (!page) return null;
  return <NewSeoServicePage page={page} markdown={markdown} />;
}
