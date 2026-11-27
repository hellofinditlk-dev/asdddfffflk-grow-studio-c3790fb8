import BuildPackPageLayout from "@/components/BuildPackPageLayout";
import { buildPackPages } from "@/data/buildPackPages";

export default function DigitalMarketingConsultantSriLanka() {
  const page = buildPackPages.find(entry => entry.id === "03");
  if (!page) return null;
  return <BuildPackPageLayout page={page} />;
}
