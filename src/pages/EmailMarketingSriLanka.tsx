import BuildPackPageLayout from "@/components/BuildPackPageLayout";
import { buildPackPages } from "@/data/buildPackPages";

export default function EmailMarketingSriLanka() {
  const page = buildPackPages.find(entry => entry.id === "10");
  if (!page) return null;
  return <BuildPackPageLayout page={page} />;
}
