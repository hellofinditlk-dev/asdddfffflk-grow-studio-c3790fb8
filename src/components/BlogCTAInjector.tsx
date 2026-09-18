import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import RotatingCTA from "./RotatingCTA";
import BlogInternalLinks from "./BlogInternalLinks";

/**
 * Auto-injects rotating CTAs into blog post pages without editing each post:
 *  1. Sticky sidebar CTA (lg+ only) — mounted into a slot positioned next to the article column
 *  2. End-of-post CTA — mounted just before the "Related Articles" block (or end of <article>)
 *
 * Triggers on routes matching /blog/<slug> (not the /blog index itself).
 */
const BlogCTAInjector = () => {
  const { pathname } = useLocation();
  const [endHost, setEndHost] = useState<HTMLElement | null>(null);
  const [sideHost, setSideHost] = useState<HTMLElement | null>(null);
  const [linkHost, setLinkHost] = useState<HTMLElement | null>(null);
  const slug = pathname.replace(/^\/blog\//, "").replace(/\/$/, "");

  const isBlogPost = /^\/blog\/[^/]+\/?$/.test(pathname);

  useEffect(() => {
    if (!isBlogPost) {
      setEndHost(null);
      setSideHost(null);
      setLinkHost(null);
      return;
    }

    let endEl: HTMLDivElement | null = null;
    let sideEl: HTMLDivElement | null = null;
    let linkEl: HTMLDivElement | null = null;
    let cancelled = false;

    const tryMount = () => {
      if (cancelled) return;
      const article = document.querySelector("article");
      if (!article) return false;

      // ---- End-of-post host ----
      if (!endEl) {
        endEl = document.createElement("div");
        endEl.setAttribute("data-blog-cta-end", "");
        endEl.className = "max-w-2xl mx-auto px-4 mt-10";
        // Insert before the "Related Articles" border block when present
        const relatedHeading = Array.from(article.querySelectorAll("h2")).find((h) =>
          /related articles/i.test(h.textContent || "")
        );
        const relatedBlock = relatedHeading?.closest("div.mt-14, div.border-t, div");
        if (relatedBlock && relatedBlock.parentNode) {
          relatedBlock.parentNode.insertBefore(endEl, relatedBlock);
        } else {
          article.appendChild(endEl);
        }
        setEndHost(endEl);
      }

      // ---- Internal link block host (sits above the end CTA) ----
      if (!linkEl && endEl?.parentNode) {
        linkEl = document.createElement("div");
        linkEl.setAttribute("data-blog-internal-links", "");
        endEl.parentNode.insertBefore(linkEl, endEl);
        setLinkHost(linkEl);
      }

      // ---- Sticky sidebar host (lg+) ----
      if (!sideEl) {
        sideEl = document.createElement("div");
        sideEl.setAttribute("data-blog-cta-side", "");
        sideEl.className =
          "hidden lg:block fixed top-28 right-6 xl:right-10 w-[300px] z-30";
        document.body.appendChild(sideEl);
        setSideHost(sideEl);
      }
      return true;
    };

    // Article may mount asynchronously (lazy route). Retry briefly.
    if (!tryMount()) {
      const obs = new MutationObserver(() => {
        if (tryMount()) obs.disconnect();
      });
      obs.observe(document.body, { childList: true, subtree: true });
      // Safety stop
      const timeout = window.setTimeout(() => obs.disconnect(), 5000);
      return () => {
        cancelled = true;
        obs.disconnect();
        window.clearTimeout(timeout);
        endEl?.remove();
        sideEl?.remove();
        linkEl?.remove();
      };
    }

    return () => {
      cancelled = true;
      endEl?.remove();
      sideEl?.remove();
      linkEl?.remove();
    };
  }, [pathname, isBlogPost]);

  if (!isBlogPost) return null;

  return (
    <>
      {linkHost && createPortal(<BlogInternalLinks slug={slug} />, linkHost)}
      {endHost && createPortal(<RotatingCTA placement="inline" />, endHost)}
      {sideHost && createPortal(<RotatingCTA placement="sidebar" />, sideHost)}
    </>
  );
};

export default BlogCTAInjector;