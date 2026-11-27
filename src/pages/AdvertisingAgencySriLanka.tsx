import BuildPackPageLayout from "@/components/BuildPackPageLayout";
import { buildPackPages } from "@/data/buildPackPages";

export default function AdvertisingAgencySriLanka() {
  const page = buildPackPages.find(entry => entry.id === "02");
  if (!page) return null;
  return <BuildPackPageLayout page={page} />;
}
