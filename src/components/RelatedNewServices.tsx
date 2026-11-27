import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { RELATED_NEW_SERVICES } from "@/data/newServiceLinks";

const RelatedNewServices = () => {
  const { pathname } = useLocation();
  const links = RELATED_NEW_SERVICES[pathname.replace(/\/+$/, "") || "/"];
  if (!links?.length) return null;
  return (
    <aside aria-label="Related services" className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-6 max-w-5xl">
        <p className="font-heading text-sm font-bold text-foreground mb-3">Related services</p>
        <ul className="flex flex-wrap gap-3">
          {links.map((l) => (
            <li key={l.path}>
              <Link to={l.path} className="inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-2 text-sm text-primary hover:border-primary transition-colors">
                {l.label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default RelatedNewServices;
