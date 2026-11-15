import { useEffect, useRef } from "react";

type Fbq = (...args: unknown[]) => void;

/** Send a Meta Pixel event; skipped on admin pages and when the pixel is unavailable. */
export function trackPixel(event: string, params?: Record<string, unknown>, path = typeof window !== "undefined" ? window.location.pathname : "") {
  if (path.startsWith("/admin")) return false;
  const fbq = (typeof window !== "undefined" ? (window as unknown as { fbq?: Fbq }).fbq : undefined);
  if (typeof fbq !== "function") return false;
  try { params ? fbq("track", event, params) : fbq("track", event); return true; } catch { return false; }
}

/** PageView on client-side navigation; index.html already sends the first one. */
export function usePixelPageViews(pathname: string) {
  const first = useRef(true);
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    trackPixel("PageView", undefined, pathname);
  }, [pathname]);
}
