import NewSeoServicePage from "@/components/NewSeoServicePage";
import { newSeoPages } from "@/data/new-seo-pages";
import markdown from "@/content/whatsapp-marketing-sri-lanka.md?raw";
export default function NewSeoPage9() {
  const page = newSeoPages.find(entry => entry.path === "/whatsapp-marketing-sri-lanka");
  if (!page) return null;
  return <NewSeoServicePage page={page} markdown={markdown} />;
}
