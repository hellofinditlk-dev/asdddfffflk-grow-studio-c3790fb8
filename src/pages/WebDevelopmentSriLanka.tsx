import BuildPackPageLayout from "@/components/BuildPackPageLayout";
import { buildPackPages } from "@/data/buildPackPages";

export default function WebDevelopmentSriLanka() {
  const page = buildPackPages.find(entry => entry.id === "07");
  if (!page) return null;
  return <BuildPackPageLayout page={page} />;
}
