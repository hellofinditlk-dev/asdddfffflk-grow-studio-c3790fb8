import BuildPackPageLayout from "@/components/BuildPackPageLayout";
import { buildPackPages } from "@/data/buildPackPages";

export default function PhotoshootSriLanka() {
  const page = buildPackPages.find(entry => entry.id === "04");
  if (!page) return null;
  return <BuildPackPageLayout page={page} />;
}
