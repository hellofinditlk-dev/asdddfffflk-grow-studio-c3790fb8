import BuildPackPageLayout from "@/components/BuildPackPageLayout";
import { buildPackPages } from "@/data/buildPackPages";

export default function OutdoorAdvertisingSriLanka() {
  const page = buildPackPages.find(entry => entry.id === "09");
  if (!page) return null;
  return <BuildPackPageLayout page={page} />;
}
