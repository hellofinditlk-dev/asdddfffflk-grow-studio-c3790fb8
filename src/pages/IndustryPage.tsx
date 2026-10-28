import { Link, useParams, Navigate } from "react-router-dom";
import IndustryPageLayout from "@/components/IndustryPageLayout";
import { industries } from "@/data/industries";

const IndustryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) return <Navigate to="/404" replace />;

  const introLinks: Record<string, { anchor: string; target: string; sentence?: string }> = {
    "travel-agency-digital-marketing-sri-lanka": {
      anchor: "hotel digital marketing", target: "/hotel-digital-marketing-sri-lanka",
      sentence: " For accommodation-focused campaigns, explore our approach to ",
    },
    "b2b-digital-marketing-sri-lanka": {
      anchor: "LinkedIn marketing", target: "/linkedin-marketing-sri-lanka",
    },
    "home-services-construction-digital-marketing-sri-lanka": {
      anchor: "property developers", target: "/real-estate-digital-marketing-sri-lanka",
    },
  };
  const entry = introLinks[industry.slug];
  const index = entry ? industry.intro.indexOf(entry.anchor) : -1;
  const introContent = entry?.sentence ? (
    <>{industry.intro}{entry.sentence}<Link to={entry.target} className="!text-inherit ![font-weight:inherit] !no-underline">{entry.anchor}</Link>.</>
  ) : entry && index >= 0 ? (
    <>{industry.intro.slice(0, index)}<Link to={entry.target} className="!text-inherit ![font-weight:inherit] !no-underline">{entry.anchor}</Link>{industry.intro.slice(index + entry.anchor.length)}</>
  ) : undefined;

  return <IndustryPageLayout data={industry} introContent={introContent} />;
};

export default IndustryPage;
