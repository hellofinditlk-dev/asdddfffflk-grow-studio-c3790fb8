/**
 * Internal linking map — pushes authority from the (very large) article inventory
 * up into a small number of commercial "money" pages.
 *
 * How it works:
 *  - Each cluster matches article slugs by keyword fragments.
 *  - Each cluster has ONE pillar (the page we most want to rank) plus supporting
 *    commercial pages.
 *  - Anchor text is varied per article (deterministic hash of the slug) so the same
 *    exact-match anchor is not repeated site-wide.
 */

export type LinkTarget = {
  to: string;
  /** Anchor text variations — one is chosen per article. */
  anchors: string[];
  /** Short supporting line shown under the anchor. */
  note: string;
};

export type LinkCluster = {
  id: string;
  /** Slug fragments that put an article in this cluster (checked in order). */
  match: string[];
  heading: string;
  intro: string;
  pillar: LinkTarget;
  services: LinkTarget[];
};

const SOCIAL_PILLAR: LinkTarget = {
  to: "/social-media-management-sri-lanka",
  anchors: [
    "social media marketing in Sri Lanka",
    "social media marketing services in Sri Lanka",
    "social media management services",
    "our social media marketing agency services",
    "social media management in Sri Lanka",
  ],
  note: "Our main social media service — strategy, content, publishing and reporting.",
};

const LEAD_GENERATION_PILLAR: LinkTarget = {
  to: "/lead-generation-campaigns-sri-lanka",
  anchors: [
    "lead generation campaigns in Sri Lanka",
    "multichannel lead generation campaigns",
    "lead generation services for Sri Lankan businesses",
    "digital campaigns built around enquiries",
  ],
  note: "Multichannel campaigns connecting audience, offer, enquiry route, qualification and sales follow-up.",
};

export const LINK_CLUSTERS: LinkCluster[] = [
  {
    id: "lead-generation",
    match: ["lead-generation-campaign", "generate-leads", "marketing-leads"],
    heading: "Lead generation services mentioned in this guide",
    intro: "Build the complete path from campaign planning and enquiry capture through to qualification and follow-up.",
    pillar: LEAD_GENERATION_PILLAR,
    services: [
      {
        to: "/lead-follow-up-services-sri-lanka",
        anchors: ["lead follow-up services", "lead qualification and follow-up", "structured prospect follow-up"],
        note: "First contact, requirement understanding, qualification, feedback and sales handover.",
      },
      {
        to: "/social-media-lead-generation-sri-lanka",
        anchors: ["social media lead generation", "Facebook and Instagram lead campaigns", "paid social lead generation"],
        note: "Lead forms, WhatsApp enquiries, landing pages and retargeting through social platforms.",
      },
      {
        to: "/google-ads-sri-lanka",
        anchors: ["Google Ads lead generation", "Google Search campaigns", "paid search lead generation"],
        note: "Reach people actively searching for relevant products and services.",
      },
    ],
  },
  {
    id: "fashion",
    match: ["fashion", "clothing", "boutique", "apparel"],
    heading: "Fashion marketing services mentioned in this guide",
    intro: "If you would like this handled for your label, these are the services behind the guide above.",
    pillar: {
      to: "/fashion-brand-digital-marketing-sri-lanka",
      anchors: [
        "fashion brand digital marketing in Sri Lanka",
        "digital marketing for fashion brands",
        "our fashion brand marketing service",
      ],
      note: "Content, campaigns and creator partnerships built around your collections.",
    },
    services: [
      {
        to: "/instagram-marketing-sri-lanka",
        anchors: ["Instagram marketing in Sri Lanka", "Instagram marketing services", "Instagram growth and content"],
        note: "The main discovery platform for style-led brands.",
      },
      {
        to: "/reel-creation-sri-lanka",
        anchors: ["reel creation in Sri Lanka", "reel production service", "short-form video for your brand"],
        note: "Try-ons, styling clips and new-arrival reveals produced monthly.",
      },
      {
        to: "/influencer-marketing-sri-lanka",
        anchors: ["influencer marketing in Sri Lanka", "creator partnerships", "influencer campaign management"],
        note: "Matched creators, briefs, approvals and performance tracking.",
      },
      SOCIAL_PILLAR,
    ],
  },
  {
    id: "facebook",
    match: ["facebook", "meta-ads", "messenger"],
    heading: "Facebook marketing services we provide",
    intro: "If you would rather have this managed for you, these are the services behind this guide.",
    pillar: SOCIAL_PILLAR,
    services: [
      {
        to: "/facebook-ads-sri-lanka",
        anchors: ["Facebook Ads management in Sri Lanka", "Facebook advertising services", "our Facebook Ads service"],
        note: "Campaign setup, targeting, creative testing and lead follow-up.",
      },
      {
        to: "/social-media-lead-generation-sri-lanka",
        anchors: ["social media lead generation", "lead generation through social media", "social media leads for your business"],
        note: "Lead Ads, WhatsApp and Messenger enquiries, qualification and reporting.",
      },
      {
        to: "/social-media-advertising-sri-lanka",
        anchors: ["social media advertising in Sri Lanka", "paid social advertising services", "social media ads management"],
        note: "Paid campaigns across Facebook, Instagram, TikTok and LinkedIn.",
      },
      {
        to: "/facebook-ad-design-sri-lanka",
        anchors: ["Facebook ad design", "ad creative design services", "Facebook ad creative design"],
        note: "Scroll-stopping creatives built for paid campaigns.",
      },
      {
        to: "/social-media-marketing-packages-sri-lanka",
        anchors: ["social media marketing packages", "our monthly packages and rates", "social media package pricing"],
        note: "Transparent monthly rates with agency fee and ad spend separated.",
      },
    ],
  },
  {
    id: "social",
    match: [
      "social-media",
      "instagram",
      "tiktok",
      "linkedin",
      "reel",
      "influencer",
      "content-calendar",
      "engagement",
      "followers",
    ],
    heading: "Social media services mentioned in this guide",
    intro: "Want this handled by a team? These are the services that deliver the work described above.",
    pillar: SOCIAL_PILLAR,
    services: [
      {
        to: "/social-media-strategy-sri-lanka",
        anchors: ["social media strategy services", "a social media strategy for your business", "social media strategy in Sri Lanka"],
        note: "Objectives, audience, platform mix, content plan and measurement.",
      },
      {
        to: "/social-media-advertising-sri-lanka",
        anchors: ["social media advertising in Sri Lanka", "paid social media advertising", "social media ads management"],
        note: "Paid campaigns built around leads, enquiries and sales.",
      },
      {
        to: "/social-media-content-creation-sri-lanka",
        anchors: ["social media content creation", "content creation services", "social media content production"],
        note: "Posts, carousels, reels, copywriting and monthly calendars.",
      },
      {
        to: "/social-media-campaigns-sri-lanka",
        anchors: ["social media campaigns", "campaign planning and management", "social media campaign management"],
        note: "Launches, seasonal offers and always-on campaign management.",
      },
      {
        to: "/social-media-marketing-packages-sri-lanka",
        anchors: ["social media marketing packages", "monthly social media packages", "our package rates"],
        note: "Basic to Platinum monthly plans with real published rates.",
      },
    ],
  },
  {
    id: "seo",
    match: ["seo", "google-business", "local-search", "keyword", "backlink", "ai-visibility", "search-console"],
    heading: "SEO services mentioned in this guide",
    intro: "These are the services we use to put Sri Lankan businesses in front of people searching for them.",
    pillar: {
      to: "/seo-services-sri-lanka",
      anchors: ["SEO services in Sri Lanka", "our SEO services", "search engine optimisation in Sri Lanka", "SEO agency services"],
      note: "Technical SEO, content, local search and reporting.",
    },
    services: [
      {
        to: "/ai-visibility-sri-lanka",
        anchors: ["AI search visibility", "getting found in AI search", "AI visibility services"],
        note: "Being recommended by ChatGPT, Gemini and AI search results.",
      },
      {
        to: "/google-ads-sri-lanka",
        anchors: ["Google Ads management", "Google Ads services in Sri Lanka", "paid search management"],
        note: "Search campaigns for people ready to buy today.",
      },
      SOCIAL_PILLAR,
      {
        to: "/social-media-content-creation-sri-lanka",
        anchors: ["content creation services", "social media content creation", "content production support"],
        note: "Content that supports both search and social visibility.",
      },
    ],
  },
  {
    id: "google-ads",
    match: ["google-ads", "ppc", "search-ads", "youtube-ads", "programmatic", "display-ads"],
    heading: "Paid advertising services mentioned in this guide",
    intro: "If you want these campaigns built and managed properly, start here.",
    pillar: {
      to: "/google-ads-sri-lanka",
      anchors: ["Google Ads management in Sri Lanka", "our Google Ads service", "paid search advertising services"],
      note: "Search, Performance Max, YouTube and remarketing campaigns.",
    },
    services: [
      {
        to: "/facebook-ads-sri-lanka",
        anchors: ["Facebook Ads management", "Facebook advertising services", "Meta advertising management"],
        note: "The demand-generation half of most Sri Lankan ad budgets.",
      },
      {
        to: "/programmatic-advertising-sri-lanka",
        anchors: ["programmatic advertising", "programmatic media buying", "programmatic ad services"],
        note: "Reach audiences across premium local and global inventory.",
      },
      {
        to: "/social-media-advertising-sri-lanka",
        anchors: ["social media advertising", "paid social advertising", "social advertising management"],
        note: "Paid social campaigns that complement search.",
      },
      SOCIAL_PILLAR,
    ],
  },
  {
    id: "video",
    match: ["video", "reel", "youtube", "shoot", "animation", "motion"],
    heading: "Video and reel services mentioned in this guide",
    intro: "We produce the content described above for brands across Sri Lanka.",
    pillar: {
      to: "/reel-creation-sri-lanka",
      anchors: ["reel creation in Sri Lanka", "our reel production service", "short-form video production"],
      note: "Monthly reel packages shot, edited and delivered ready to post.",
    },
    services: [
      {
        to: "/ai-video-production-sri-lanka",
        anchors: ["AI video production", "AI video and reel production", "AI-assisted video production"],
        note: "Fast, affordable branded videos produced with AI tools.",
      },
      {
        to: "/video-production-sri-lanka",
        anchors: ["video production services", "corporate video production", "video production in Sri Lanka"],
        note: "Full production crews for corporate and commercial shoots.",
      },
      SOCIAL_PILLAR,
      {
        to: "/social-media-content-creation-sri-lanka",
        anchors: ["social media content creation", "monthly content production", "content creation services"],
        note: "Video built into a consistent monthly content plan.",
      },
    ],
  },
  {
    id: "design",
    match: ["design", "logo", "branding", "brand-identity", "poster", "flyer", "packaging"],
    heading: "Design services mentioned in this guide",
    intro: "Our design team produces this work for Sri Lankan businesses every day.",
    pillar: {
      to: "/graphic-design-sri-lanka",
      anchors: ["graphic design services in Sri Lanka", "our graphic design services", "graphic design agency services"],
      note: "Brand identity, marketing collateral and campaign creative.",
    },
    services: [
      {
        to: "/social-media-design-sri-lanka",
        anchors: ["social media design", "social media post design", "social media creative design"],
        note: "On-brand posts, carousels and story designs.",
      },
      {
        to: "/logo-design-sri-lanka",
        anchors: ["logo design services", "logo and identity design", "professional logo design"],
        note: "Logos with full brand guidelines.",
      },
      {
        to: "/facebook-ad-design-sri-lanka",
        anchors: ["Facebook ad design", "ad creative design", "paid ad creative design"],
        note: "Creative built specifically to convert in paid campaigns.",
      },
      SOCIAL_PILLAR,
    ],
  },
  {
    id: "events",
    match: ["event", "wedding", "product-launch", "exhibition", "activation"],
    heading: "Event services mentioned in this guide",
    intro: "We plan, produce and promote events across Sri Lanka.",
    pillar: {
      to: "/event-management-sri-lanka",
      anchors: ["event management in Sri Lanka", "our event management services", "event planning services"],
      note: "End-to-end planning, production and on-site management.",
    },
    services: [
      {
        to: "/corporate-event-management-sri-lanka",
        anchors: ["corporate event management", "corporate event planning", "corporate events team"],
        note: "Conferences, AGMs, dealer meets and staff events.",
      },
      {
        to: "/event-marketing-sri-lanka",
        anchors: ["event marketing", "event promotion services", "marketing your event"],
        note: "Filling seats with paid and organic promotion.",
      },
      {
        to: "/product-launch-events-sri-lanka",
        anchors: ["product launch events", "product launch management", "launch event planning"],
        note: "Launch concepts, production and media coverage.",
      },
      SOCIAL_PILLAR,
    ],
  },
  {
    id: "traditional",
    match: ["newspaper", "tv-advertising", "radio", "media-buying", "billboard", "advertising-agency", "advertising-cost"],
    heading: "Advertising services mentioned in this guide",
    intro: "We plan and buy media, then measure what it returns.",
    pillar: {
      to: "/advertising-in-sri-lanka",
      anchors: ["advertising in Sri Lanka", "our advertising services", "advertising agency services in Sri Lanka"],
      note: "The full picture of advertising options and what they cost.",
    },
    services: [
      {
        to: "/media-buying-agencies-sri-lanka",
        anchors: ["media buying services", "media planning and buying", "our media buying team"],
        note: "Negotiated rates across digital and traditional media.",
      },
      {
        to: "/newspaper-advertising-sri-lanka",
        anchors: ["newspaper advertising", "press advertising rates", "newspaper ad booking"],
        note: "Booking and rates for national dailies.",
      },
      {
        to: "/facebook-ads-sri-lanka",
        anchors: ["Facebook Ads management", "Facebook advertising", "digital advertising with Facebook Ads"],
        note: "The measurable side of your advertising mix.",
      },
      SOCIAL_PILLAR,
    ],
  },
];

/** Fallback cluster for general digital marketing articles. */
export const DEFAULT_CLUSTER: LinkCluster = {
  id: "default",
  match: [],
  heading: "Services mentioned in this guide",
  intro: "If you would like our team to handle this for your business, start with these services.",
  pillar: SOCIAL_PILLAR,
  services: [
    {
      to: "/facebook-ads-sri-lanka",
      anchors: ["Facebook Ads management", "Facebook advertising services", "Meta ads management"],
      note: "Paid campaigns built around leads and enquiries.",
    },
    {
      to: "/seo-services-sri-lanka",
      anchors: ["SEO services in Sri Lanka", "search engine optimisation services", "our SEO team"],
      note: "Long-term visibility in Google and AI search.",
    },
    {
      to: "/google-ads-sri-lanka",
      anchors: ["Google Ads management", "paid search advertising", "Google Ads services"],
      note: "Capture people already searching for what you sell.",
    },
    {
      to: "/social-media-marketing-packages-sri-lanka",
      anchors: ["social media marketing packages", "our monthly rates", "package pricing"],
      note: "Monthly plans with published rates.",
    },
  ],
};

/** Stable, non-cryptographic hash so anchor choice is consistent per article. */
export const hashSlug = (slug: string) => {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  return h;
};

export const clusterForSlug = (slug: string): LinkCluster => {
  for (const cluster of LINK_CLUSTERS) {
    if (cluster.match.some((m) => slug.includes(m))) return cluster;
  }
  return DEFAULT_CLUSTER;
};

export const anchorFor = (target: LinkTarget, slug: string, offset = 0) =>
  target.anchors[(hashSlug(slug) + offset) % target.anchors.length];
