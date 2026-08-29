import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

const CUSTOM_NUMBER_PAGES = [
  "/automotive-digital-marketing-sri-lanka",
  "/education-marketing-agency-sri-lanka",
];

/** Exclusive "payback" value-prop card — shows that Cypher reinvests the
 *  management fee as free publicity on Findit.lk & StudyWay.lk. */
const PaybackCard = () => {
  const { pathname } = useLocation();
  const waNumber = CUSTOM_NUMBER_PAGES.includes(pathname) ? "94760317477" : "94701772626";

  const textRef = useRef<HTMLSpanElement>(null);
  const [decoded, setDecoded] = useState(false);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const final = "FREE_PUBLICITY.EXE";
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&_";
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      el.textContent = final;
      setDecoded(true);
      return;
    }

    const runDecode = () => {
      let frame = 0;
      const totalFrames = 24;
      const timer = window.setInterval(() => {
        frame++;
        let out = "";
        for (let i = 0; i < final.length; i++) {
          if (final[i] === "." || final[i] === "_") {
            out += final[i];
            continue;
          }
          const revealPoint = (i / final.length) * totalFrames;
          if (frame > revealPoint + 6) {
            out += final[i];
          } else {
            out += chars[Math.floor(Math.random() * chars.length)];
          }
        }
        el.textContent = out;
        if (frame >= totalFrames + 6) {
          el.textContent = final;
          clearInterval(timer);
          setDecoded(true);
        }
      }, 40);
    };

    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              runDecode();
              io.disconnect();
            }
          });
        },
        { threshold: 0.4 }
      );
      io.observe(el);
      return () => io.disconnect();
    } else {
      runDecode();
    }
  }, []);

  return (
    <div
      className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-[20px] border border-white/[0.08] p-8 md:p-10 shadow-2xl"
      style={{
        background:
          "radial-gradient(1200px 400px at 100% -10%, rgba(73,247,168,0.07), transparent 60%), linear-gradient(180deg, #0E1526, #121B31)",
        boxShadow: "0 30px 80px -30px rgba(0,0,0,0.7)",
      }}
    >
      {/* decorative scanline grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-100"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(circle at 80% 0%, black, transparent 70%)",
          WebkitMaskImage: "radial-gradient(circle at 80% 0%, black, transparent 70%)",
        }}
      />

      <div className="relative z-10">
        {/* eyebrow strip */}
        <div
          className="inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 mb-5 font-mono text-xs tracking-[0.14em]"
          style={{
            color: "#49F7A8",
            background: "rgba(73,247,168,0.16)",
            borderColor: "rgba(73,247,168,0.35)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{
              background: "#49F7A8",
              boxShadow: decoded ? "none" : "0 0 8px #49F7A8",
            }}
          />
          <span ref={textRef} className="min-w-[15ch]">
            FREE_PUBLICITY.EXE
          </span>
        </div>

        <h2 className="font-heading text-2xl md:text-3xl lg:text-[34px] font-extrabold leading-tight tracking-tight text-[#EDF1F7] mb-3">
          We're the only agency that{" "}
          <span style={{ color: "#49F7A8" }}>pays your fee back.</span>
        </h2>

        <p className="text-[15.5px] leading-relaxed text-[#8B95AC] max-w-2xl mb-6">
          Every other agency treats your management fee as the end of the
          transaction. Cypher Digital puts it back to work — as{" "}
          <strong className="text-[#EDF1F7] font-semibold">
            free publicity for your business
          </strong>{" "}
          on Sri Lanka's two leading advertising sites. Same fee, extra reach,
          zero extra cost.
        </p>

        <div className="flex flex-wrap gap-2.5 mb-7">
          <span
            className="inline-flex items-center gap-2 rounded-[10px] border border-white/[0.08] px-3 py-2 text-xs text-[#EDF1F7]"
            style={{ background: "rgba(255,255,255,0.03)" }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              className="shrink-0"
            >
              <path
                d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"
                stroke="#49F7A8"
                strokeWidth="1.6"
              />
            </svg>
            Featured on <b style={{ color: "#FFC857" }}>Findit.lk</b>
          </span>
          <span
            className="inline-flex items-center gap-2 rounded-[10px] border border-white/[0.08] px-3 py-2 text-xs text-[#EDF1F7]"
            style={{ background: "rgba(255,255,255,0.03)" }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              className="shrink-0"
            >
              <path
                d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4z"
                stroke="#49F7A8"
                strokeWidth="1.6"
              />
            </svg>
            Featured on <b style={{ color: "#FFC857" }}>StudyWay.lk</b>
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 border-t border-white/[0.08] pt-6">
          <p className="text-xs md:text-[12.5px] leading-relaxed text-[#8B95AC] max-w-xs">
            <strong className="text-[#EDF1F7]">Included</strong> with every
            Social Media Management package — no add-on cost.
          </p>
          <a
            href={`https://wa.me/${waNumber}?text=Hi%2C%20I%20want%20to%20get%20the%20free%20Findit.lk%20%2F%20StudyWay.lk%20publicity%20on%20my%20package`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[hsl(25,95%,53%)] text-white font-extrabold text-sm px-6 py-3.5 whitespace-nowrap transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Get This On My Package →
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaybackCard;
