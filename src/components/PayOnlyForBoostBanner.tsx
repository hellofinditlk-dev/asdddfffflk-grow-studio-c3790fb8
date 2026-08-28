import { Sparkles } from "lucide-react";

/** Prominent value-prop banner: management fee becomes awareness on partner directories. */
const PayOnlyForBoostBanner = () => (
  <div className="relative overflow-hidden rounded-2xl border-2 border-[hsl(25,95%,53%)]/40 bg-gradient-to-r from-[hsl(25,95%,53%)]/10 to-primary/5 p-5 md:p-6 mb-8">
    <div className="absolute top-0 right-0 w-40 h-40 bg-[hsl(25,95%,53%)]/10 rounded-full blur-[60px] pointer-events-none" />
    <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[hsl(25,95%,53%)] text-white shrink-0">
        <Sparkles className="w-6 h-6" />
      </div>
      <div>
        <h3 className="font-heading text-base md:text-lg font-extrabold text-foreground mb-1">
          You only pay for boosting — we turn your management fee into real awareness
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          At Cypher Digital, your package management fee is reinvested as exposure on Sri Lanka's top advertising sites{" "}
          <a href="https://www.findit.lk" target="_blank" rel="noopener noreferrer" className="font-bold text-primary underline decoration-primary/40 underline-offset-2 hover:text-primary/80">
            Findit.lk
          </a>{" "}
          &{" "}
          <a href="https://www.studyway.lk" target="_blank" rel="noopener noreferrer" className="font-bold text-primary underline decoration-primary/40 underline-offset-2 hover:text-primary/80">
            StudyWay.lk
          </a>
          , so you get extra reach at no additional cost.
        </p>
      </div>
    </div>
  </div>
);

export default PayOnlyForBoostBanner;
