import { Globe } from "lucide-react";

export const webAdsFeatureText = "Web Ads Publishing (Findit.lk / StudyWay.lk)";

/** Feature-list line with live hyperlinks to the partner directories. */
export const WebAdsFeatureLine = () => (
  <>
    Web Ads Publishing —{" "}
    <a
      href="https://www.findit.lk"
      target="_blank"
      rel="noopener noreferrer"
      className="font-bold text-primary underline decoration-primary/40 underline-offset-2 hover:text-primary/80"
    >
      Findit.lk
    </a>{" "}
    &{" "}
    <a
      href="https://www.studyway.lk"
      target="_blank"
      rel="noopener noreferrer"
      className="font-bold text-primary underline decoration-primary/40 underline-offset-2 hover:text-primary/80"
    >
      StudyWay.lk
    </a>
  </>
);

/** Highlighted banner shown above pricing grids — sells the extra-reach USP. */
const ExtraReachBadge = () => (
  <div className="relative overflow-hidden rounded-2xl border border-primary/30 bg-primary/5 p-5 md:p-6 mb-10">
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-primary-foreground shrink-0">
        <Globe className="w-6 h-6" />
      </div>
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h3 className="font-heading text-base md:text-lg font-extrabold">Extra Reach Included in Every Package</h3>
          <span className="bg-[hsl(25,95%,53%)] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full">Cypher Exclusive</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Unlike most agencies, every Cypher Digital package includes <strong className="text-foreground">free web ad publishing</strong> on{" "}
          <a href="https://www.findit.lk" target="_blank" rel="noopener noreferrer" className="font-bold text-primary underline decoration-primary/40 underline-offset-2 hover:text-primary/80">
            Findit.lk
          </a>{" "}
          and{" "}
          <a href="https://www.studyway.lk" target="_blank" rel="noopener noreferrer" className="font-bold text-primary underline decoration-primary/40 underline-offset-2 hover:text-primary/80">
            StudyWay.lk
          </a>{" "}
          — putting your business in front of thousands of extra monthly visitors beyond social media, at no additional cost.
        </p>
      </div>
    </div>
  </div>
);

export default ExtraReachBadge;
