import BuildPackPageLayout from "@/components/BuildPackPageLayout";
import { buildPackPages } from "@/data/buildPackPages";

export default function EcommerceWebsiteSriLanka() {
  const page = buildPackPages.find(entry => entry.id === "08");
  if (!page) return null;
  return <BuildPackPageLayout page={page} />;
}
