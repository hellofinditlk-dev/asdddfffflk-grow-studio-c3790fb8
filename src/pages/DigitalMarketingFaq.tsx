import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SEOHead from "@/components/SEOHead";
import {
  digitalMarketingFaq,
  digitalMarketingFaqCategories,
} from "@/data/digitalMarketingFaq";
import "@/styles/digital-marketing-faq.css";

const CANONICAL = "https://cypherdigital.lk/digital-marketing-faq-sri-lanka";
const PAGE_TITLE = "Digital Marketing FAQ Sri Lanka: 56 Questions Answered | Cypher Digital";
const PAGE_DESCRIPTION =
  "Clear answers to 56 common digital marketing questions in Sri Lanka: costs in LKR, social media, Facebook and Google Ads, SEO, AI search visibility, video and TV advertising.";

const stripHtml = (html: string) =>
  html
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'");

const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/** Render question text with <mark> around search matches. */
const highlight = (text: string, words: string[]) => {
  if (!words.length) return text;
  const re = new RegExp(`(${words.map(escapeRegExp).join("|")})`, "gi");
  const parts = text.split(re);
  return parts.map((part, i) =>
    re.test(part) ? <mark key={i}>{part}</mark> : part
  );
};

const DigitalMarketingFaq = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());
  const [activeCat, setActiveCat] = useState<string>("");
  const catRefs = useRef<Record<string, HTMLElement | null>>({});
  const chipRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const words = useMemo(
    () => query.trim().toLowerCase().split(/\s+/).filter(Boolean),
    [query]
  );

  const matches = useMemo(() => {
    const map = new Map<string, boolean>();
    for (const item of digitalMarketingFaq) {
      const text = `${item.question} ${stripHtml(item.answerHtml)}`.toLowerCase();
      map.set(item.id, words.every((w) => text.includes(w)));
    }
    return map;
  }, [words]);

  const matchCount = useMemo(
    () => digitalMarketingFaq.filter((i) => matches.get(i.id)).length,
    [matches]
  );

  // Auto-open results when 8 or fewer match
  useEffect(() => {
    if (!words.length || matchCount > 8 || matchCount === 0) return;
    setOpenIds((prev) => {
      const next = new Set(prev);
      for (const item of digitalMarketingFaq) {
        if (matches.get(item.id)) next.add(item.id);
      }
      return next;
    });
  }, [words, matchCount, matches]);

  // Open + scroll to hash target
  useEffect(() => {
    const openHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (!id) return;
      if (digitalMarketingFaq.some((i) => i.id === id)) {
        setOpenIds((prev) => new Set(prev).add(id));
        requestAnimationFrame(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        });
      }
    };
    openHash();
    window.addEventListener("hashchange", openHash);
    return () => window.removeEventListener("hashchange", openHash);
  }, [location.hash]);

  // Highlight active category chip while scrolling
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveCat(id);
            if (window.innerWidth < 900) {
              const chip = chipRefs.current[id];
              chip?.parentElement?.scrollTo({
                left: chip.offsetLeft - 20,
                behavior: "smooth",
              });
            }
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    for (const cat of digitalMarketingFaqCategories) {
      const el = catRefs.current[cat.id];
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, []);

  // Page-only head tags: robots, OG extras, font, JSON-LD
  useEffect(() => {
    const setMeta = (attr: string, key: string, content: string) => {
      let el = document.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
      return el;
    };
    const robots = setMeta("name", "robots", "index, follow, max-snippet:-1");
    const ogType = setMeta("property", "og:type", "website");
    const ogUrl = setMeta("property", "og:url", CANONICAL);
    const ogImage = setMeta("property", "og:image", "https://cypherdigital.lk/assets/logo-DJLYsmc6.png");
    const twCard = setMeta("name", "twitter:card", "summary_large_image");

    const font = document.createElement("link");
    font.rel = "stylesheet";
    font.href =
      "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@700;800&display=swap";
    document.head.appendChild(font);

    const graph = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "FAQPage",
          "@id": `${CANONICAL}#faq`,
          url: CANONICAL,
          name: "Digital Marketing FAQ Sri Lanka",
          inLanguage: "en-LK",
          dateModified: "2026-11-23",
          publisher: { "@id": "https://cypherdigital.lk/#organization" },
          mainEntity: digitalMarketingFaq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: stripHtml(item.answerHtml),
            },
          })),
        },
        {
          "@type": "Organization",
          "@id": "https://cypherdigital.lk/#organization",
          name: "Cypher Digital",
          url: "https://cypherdigital.lk/",
          logo: "https://cypherdigital.lk/assets/logo-DJLYsmc6.png",
          telephone: "+94760317477",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Colombo",
            addressCountry: "LK",
          },
          areaServed: { "@type": "Country", name: "Sri Lanka" },
          knowsAbout: [
            "Social media marketing",
            "Facebook advertising",
            "Google Ads",
            "Search engine optimisation",
            "AI search visibility",
            "Video production",
            "Graphic design",
            "TV and media buying",
          ],
          sameAs: [
            "https://www.facebook.com/cypherdigitalsrilanka",
            "https://www.instagram.com/cypherdigital_sl/",
          ],
        },
        {
          "@type": "WebPage",
          "@id": CANONICAL,
          url: CANONICAL,
          name: "Digital Marketing FAQ Sri Lanka",
          inLanguage: "en-LK",
          dateModified: "2026-11-23",
          isPartOf: { "@id": "https://cypherdigital.lk/#website" },
          about: { "@id": "https://cypherdigital.lk/#organization" },
          mainEntity: { "@id": `${CANONICAL}#faq` },
        },
        {
          "@type": "WebSite",
          "@id": "https://cypherdigital.lk/#website",
          url: "https://cypherdigital.lk/",
          name: "Cypher Digital",
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://cypherdigital.lk/" },
            { "@type": "ListItem", position: 2, name: "Digital Marketing FAQ", item: CANONICAL },
          ],
        },
      ],
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(graph);
    document.head.appendChild(script);

    return () => {
      robots.remove();
      ogType.remove();
      ogUrl.remove();
      ogImage.remove();
      twCard.remove();
      font.remove();
      script.remove();
    };
  }, []);

  const toggleItem = useCallback((id: string, open: boolean) => {
    setOpenIds((prev) => {
      const has = prev.has(id);
      if (has === open) return prev;
      const next = new Set(prev);
      if (open) next.add(id);
      else next.delete(id);
      return next;
    });
  }, []);

  const allVisibleOpen =
    matchCount > 0 &&
    digitalMarketingFaq.every((i) => !matches.get(i.id) || openIds.has(i.id));

  const toggleAll = () => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (allVisibleOpen) {
        for (const i of digitalMarketingFaq) next.delete(i.id);
      } else {
        for (const i of digitalMarketingFaq) if (matches.get(i.id)) next.add(i.id);
      }
      return next;
    });
  };

  // SPA navigation for internal links inside answer HTML
  const onAnswerClick = (e: React.MouseEvent) => {
    const anchor = (e.target as HTMLElement).closest("a");
    if (!anchor) return;
    const href = anchor.getAttribute("href") || "";
    if (href.startsWith("/")) {
      e.preventDefault();
      navigate(href);
    }
  };

  const countFor = (catId: string) =>
    digitalMarketingFaq.filter((i) => i.categoryId === catId).length;

  return (
    <div className="dm-faq pt-16">
      <SEOHead title={PAGE_TITLE} description={PAGE_DESCRIPTION} canonical={CANONICAL} />

      <section className="hero">
        <div className="narrow">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link> / <span>Digital Marketing FAQ</span>
          </nav>
          <span className="pill">Knowledge Hub • Sri Lanka</span>
          <h1>
            Digital marketing questions, <span className="mark">answered.</span>
          </h1>
          <p className="lead">
            <b>56 straight answers</b> about costs, social media, ads, SEO and AI search in Sri
            Lanka, written by the team that runs these campaigns every day.
          </p>
          <div className="search" role="search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              id="q"
              type="search"
              placeholder="Search a question, e.g. “Facebook ads cost”"
              aria-label="Search questions"
              autoComplete="off"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="meta">
            <span>
              <i></i>Updated <time dateTime="2026-11-23">November 2026</time>
            </span>
            <span>Prices in LKR</span>
            <span>By the Cypher Digital team, Colombo</span>
          </div>
        </div>
      </section>

      <section className="glance" aria-labelledby="glance-h">
        <div className="narrow">
          <div className="facts">
            <h2 id="glance-h">Cypher Digital at a glance</h2>
            <dl>
              <div>
                <dt>Who we are</dt>
                <dd>
                  A digital marketing agency based in Colombo, Sri Lanka, with an in-house team of
                  strategists, designers, video editors and ad specialists.
                </dd>
              </div>
              <div>
                <dt>What we do</dt>
                <dd>
                  Social media management, Facebook, Instagram, TikTok and Google Ads, SEO, AI
                  search visibility, video and AI video, graphic design, and TV, radio and print
                  media buying.
                </dd>
              </div>
              <div>
                <dt>Prices</dt>
                <dd>
                  Social media packages LKR 85,000 – 250,000 per month; ads management from LKR
                  25,000 per month; design from LKR 6,000. Monthly plans, no annual contract.
                </dd>
              </div>
              <div>
                <dt>Where we work</dt>
                <dd>
                  Island-wide (Colombo, Kandy, Galle, Negombo, Jaffna and more), plus clients in the
                  Middle East, UK and Australia.
                </dd>
              </div>
              <div>
                <dt>Contact</dt>
                <dd>
                  <a href="tel:+94760317477">+94 76 031 7477</a> ·{" "}
                  <a href="https://wa.me/94760317477">WhatsApp</a> ·{" "}
                  <Link to="/contact">Contact form</Link>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <div className="catbar">
        <div className="wrap">
          {digitalMarketingFaqCategories.map((cat) => (
            <a
              key={cat.id}
              className={`chip${activeCat === cat.id ? " active" : ""}`}
              href={`#${cat.id}`}
              ref={(el) => {
                chipRefs.current[cat.id] = el;
              }}
            >
              <span aria-hidden="true">{cat.emoji}</span>
              {cat.title}
              <em>{countFor(cat.id)}</em>
            </a>
          ))}
        </div>
      </div>

      <main onClick={onAnswerClick}>
        <div className="narrow">
          <div className="toolbar">
            <span id="count">
              {words.length
                ? `${matchCount} of ${digitalMarketingFaq.length} questions match`
                : `Showing all ${digitalMarketingFaq.length} questions`}
            </span>
            <button className="linkbtn" id="toggle" type="button" onClick={toggleAll}>
              {allVisibleOpen ? "Collapse all" : "Expand all"}
            </button>
          </div>

          {digitalMarketingFaqCategories.map((cat) => {
            const items = digitalMarketingFaq.filter((i) => i.categoryId === cat.id);
            const visible = items.filter((i) => matches.get(i.id));
            if (!visible.length) return null;
            return (
              <section
                className="cat"
                id={cat.id}
                aria-labelledby={`${cat.id}-h`}
                key={cat.id}
                ref={(el) => {
                  catRefs.current[cat.id] = el;
                }}
              >
                <p className="eyebrow">
                  <span>✦</span>
                  {cat.title}
                </p>
                <h2 id={`${cat.id}-h`}>{cat.title}</h2>

                {cat.id === "pricing" && (
                  <div className="tablewrap">
                    <table className="prices">
                      <caption>
                        Digital marketing prices in Sri Lanka at a glance (LKR, November 2026)
                      </caption>
                      <thead>
                        <tr>
                          <th scope="col">Service</th>
                          <th scope="col">Typical market range</th>
                          <th scope="col">Cypher Digital</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">Social media management</th>
                          <td>15,000 – 120,000+ / month</td>
                          <td>85,000 – 250,000 / month (content, reels, inbox, reports)</td>
                        </tr>
                        <tr>
                          <th scope="row">Facebook &amp; Instagram ads management</th>
                          <td>15,000 – 100,000+ / month</td>
                          <td>From 25,000 / month</td>
                        </tr>
                        <tr>
                          <th scope="row">Facebook ad spend (paid to Meta)</th>
                          <td>20,000 – 150,000+ / month</td>
                          <td>40,000 – 60,000 suggested for most SMEs</td>
                        </tr>
                        <tr>
                          <th scope="row">Google Ads spend (paid to Google)</th>
                          <td>30,000 – 200,000+ / month</td>
                          <td>Quoted per campaign</td>
                        </tr>
                        <tr>
                          <th scope="row">SEO</th>
                          <td>20,000 – 150,000+ / month</td>
                          <td>Quoted per scope</td>
                        </tr>
                        <tr>
                          <th scope="row">Reels &amp; video</th>
                          <td>25,000 – 250,000+ per video</td>
                          <td>Reels from 18,000 · brand videos from 45,000</td>
                        </tr>
                        <tr>
                          <th scope="row">Graphic design</th>
                          <td>5,000 – 80,000 per project</td>
                          <td>From 6,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                <div className="qa-list">
                  {visible.map((item) => (
                    <details
                      className={`qa${words.length ? " hit" : ""}`}
                      id={item.id}
                      key={item.id}
                      open={openIds.has(item.id)}
                      onToggle={(e) => toggleItem(item.id, e.currentTarget.open)}
                    >
                      <summary>
                        <h3>{highlight(item.question, words)}</h3>
                        <span className="chev" aria-hidden="true"></span>
                      </summary>
                      <div className="ans">
                        <p dangerouslySetInnerHTML={{ __html: item.answerHtml }} />
                        <a className="permalink" href={`#${item.id}`} aria-label="Link to this answer">
                          #
                        </a>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            );
          })}

          {matchCount === 0 && (
            <div className="empty" id="empty">
              <strong>No matching question yet</strong>
              Ask us directly. We reply on WhatsApp within working hours. <br />
              <br />
              <a
                className="btn btn-orange"
                href="https://wa.me/94760317477?text=Hi%2C%20I%20have%20a%20digital%20marketing%20question"
              >
                Ask on WhatsApp
              </a>
            </div>
          )}

          <aside className="cta">
            <div>
              <h2>Still have a question?</h2>
              <p>
                Tell us about your business and we'll give you a straight answer and a free plan,
                with no obligation.
              </p>
            </div>
            <div className="btns">
              <a
                className="btn btn-orange btn-lg"
                href="https://wa.me/94760317477?text=Hi%2C%20I%20read%20your%20FAQ%20and%20have%20a%20question"
              >
                Ask on WhatsApp →
              </a>
              <Link className="btn btn-white btn-lg" to="/contact">
                Book a Consultation
              </Link>
            </div>
          </aside>
        </div>

        <div className="narrow">
          <p className="note">
            <strong>How we keep this page accurate:</strong> Cypher Digital prices are our published
            rates as of November 2026. Market ranges come from our{" "}
            <Link to="/blog/digital-marketing-cost-sri-lanka-pricing-guide">
              Sri Lanka pricing guide
            </Link>
            . Advice marked “in our experience” reflects our own campaigns, not universal rules. We
            review every answer at least every three months.
          </p>
        </div>

        <section className="guides">
          <div className="narrow">
            <p className="eyebrow">
              <span>✦</span>Go deeper
            </p>
            <h2>Popular guides</h2>
            <div className="grid">
              <Link className="guide" to="/blog/digital-marketing-cost-sri-lanka-pricing-guide">
                <span className="tag">Pricing</span>
                <strong>Digital marketing cost in Sri Lanka</strong>
                <span className="arrow">→</span>
              </Link>
              <Link className="guide" to="/blog/complete-guide-facebook-ads-businesses-sri-lanka">
                <span className="tag">Facebook Ads</span>
                <strong>Complete guide to Facebook ads</strong>
                <span className="arrow">→</span>
              </Link>
              <Link className="guide" to="/blog/how-to-rank-on-google-sri-lanka-practical-guide">
                <span className="tag">SEO</span>
                <strong>How to rank on Google in Sri Lanka</strong>
                <span className="arrow">→</span>
              </Link>
              <Link className="guide" to="/blog/get-business-on-chatgpt-sri-lanka">
                <span className="tag">AI Visibility</span>
                <strong>Get your business on ChatGPT</strong>
                <span className="arrow">→</span>
              </Link>
              <Link className="guide" to="/blog/social-media-statistics-sri-lanka-2026">
                <span className="tag">Data</span>
                <strong>Social media statistics Sri Lanka 2026</strong>
                <span className="arrow">→</span>
              </Link>
              <Link className="guide" to="/blog/how-to-choose-digital-marketing-agency-sri-lanka">
                <span className="tag">Agencies</span>
                <strong>How to choose a digital marketing agency</strong>
                <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DigitalMarketingFaq;
