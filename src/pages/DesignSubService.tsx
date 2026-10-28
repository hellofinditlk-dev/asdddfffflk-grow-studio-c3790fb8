import { Link, useLocation, Navigate } from "react-router-dom";
import DesignSubServiceLayout from "@/components/DesignSubServiceLayout";
import { designSubServices } from "@/data/graphic-design-services";

const DesignSubService = () => {
  const { pathname } = useLocation();
  const slug = pathname.replace(/^\//, "");
  const service = designSubServices.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/404" replace />;

  const anchorBySlug: Record<string, string> = {
    "landing-page-design-sri-lanka": "landing page design",
    "website-ui-design-sri-lanka": "professional website interfaces",
    "ui-ux-design-sri-lanka": "UI/UX design",
  };
  const anchor = anchorBySlug[slug];
  const index = anchor ? service.intro.indexOf(anchor) : -1;
  const introContent = anchor && index >= 0 ? (
    <>
      {service.intro.slice(0, index)}
      <Link to="/web-design-sri-lanka" className="text-inherit no-underline hover:no-underline">{anchor}</Link>
      {service.intro.slice(index + anchor.length)}
    </>
  ) : undefined;

  return <DesignSubServiceLayout data={service} introContent={introContent} />;
};

export default DesignSubService;
