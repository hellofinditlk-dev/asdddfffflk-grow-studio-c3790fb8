import NewSeoServicePage from "@/components/NewSeoServicePage";
import { newSeoPages } from "@/data/new-seo-pages";
import markdown from "@/content/google-remarketing-sri-lanka.md?raw";
export default function NewSeoPage6() {
  const page = newSeoPages.find(entry => entry.path === "/google-remarketing-sri-lanka");
  if (!page) return null;
  return <NewSeoServicePage page={page} markdown={markdown} />;
}
