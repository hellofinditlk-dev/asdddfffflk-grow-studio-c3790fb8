import BuildPackPageLayout from "@/components/BuildPackPageLayout";
import { buildPackPages } from "@/data/buildPackPages";

export default function CorporatePhotographyColombo() {
  const page = buildPackPages.find(entry => entry.id === "06");
  if (!page) return null;
  return <BuildPackPageLayout page={page} />;
}
