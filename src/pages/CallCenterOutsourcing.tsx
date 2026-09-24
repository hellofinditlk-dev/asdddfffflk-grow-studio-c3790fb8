import { useEffect, useRef } from "react";
import SEOHead from "@/components/SEOHead";
import { callCenterCss, callCenterHtml } from "@/data/call-center-page";
import { callCenterThemeCss } from "@/data/call-center-theme";
import schema from "@/data/call-center-schema.json";

const PHONE = "94771437707";

const CallCenterOutsourcing = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const btn = root.querySelector<HTMLButtonElement>("#sendBtn");
    const val = (id: string) =>
      (root.querySelector<HTMLInputElement | HTMLTextAreaElement>(`#${id}`)?.value || "").trim();
    const onSend = () => {
      let t = "Hi Cypher! I'd like a lead calling quote.";
      const n = val("fName"), b = val("fBiz"), p = val("fPhone"), m = val("fMsg");
      if (n) t += "\n\nName: " + n;
      if (b) t += "\nBusiness: " + b;
      if (p) t += "\nPhone: " + p;
      if (m) t += "\nLeads: " + m;
      window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(t)}`, "_blank");
    };
    btn?.addEventListener("click", onSend);

    const s = document.createElement("script");
    s.type = "application/ld+json";
    s.id = "cc-schema";
    s.text = JSON.stringify(schema);
    document.head.appendChild(s);
    return () => {
      btn?.removeEventListener("click", onSend);
      s.remove();
    };
  }, []);

  return (
    <>
      <SEOHead
        title="Call Center Outsourcing Sri Lanka | Cypher Digital"
        description="Call center outsourcing in Sri Lanka for lead calling & sales follow-up. We call your leads, verify who answered & send a clean Excel list. Free quote today."
        canonical="https://cypherdigital.lk/call-center-outsourcing-sri-lanka"
      />
      <style>{`.ccx .hero{padding-top:96px}.ccx b,.ccx h3,.ccx strong{font-family:inherit}` + callCenterCss + callCenterThemeCss}</style>
      <div ref={ref} className="ccx" dangerouslySetInnerHTML={{ __html: callCenterHtml }} />
    </>
  );
};

export default CallCenterOutsourcing;
