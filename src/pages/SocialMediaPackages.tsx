import SocialClusterLayout, { ClusterSection } from "@/components/SocialClusterLayout";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import ExtraReachBadge from "@/components/ExtraReachBadge";
import PaybackCard from "@/components/PaybackCard";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Basic",
    price: "LKR 85,000",
    per: "/month",
    best: "Small businesses starting properly on social",
    platforms: "Facebook + Instagram",
    features: [
      "12 posts per month",
      "3 reels from stock footage",
      "Special day posts",
      "Facebook cover design",
      "TikTok cross-posting",
      "Story sharing",
      "Inbox & comment management",
      "Web ads publishing on Findit.lk & StudyWay.lk",
      "Monthly performance report",
    ],
  },
  {
    name: "Silver",
    price: "LKR 100,000",
    per: "/month",
    popular: true,
    best: "Most Sri Lankan SMEs — the balance point",
    platforms: "Facebook + Instagram",
    features: [
      "15 posts per month",
      "3 reels filmed on a 4-hour location shoot",
      "1 email campaign to a 350,000 corporate database",
      "Special day posts",
      "Facebook cover design",
      "TikTok cross-posting",
      "Story sharing",
      "Inbox & comment management",
      "Web ads publishing on Findit.lk & StudyWay.lk",
      "Monthly performance report",
    ],
  },
  {
    name: "Gold",
    price: "LKR 150,000",
    per: "/month",
    best: "Brands running paid campaigns alongside content",
    platforms: "Facebook + Instagram + LinkedIn",
    features: [
      "20 posts per month",
      "Reels from a location shoot",
      "2 email campaigns to a 350,000 corporate database",
      "LinkedIn cross-posting",
      "Special day posts",
      "Facebook cover design",
      "TikTok cross-posting",
      "Story sharing",
      "Inbox & comment management",
      "Web ads publishing on Findit.lk & StudyWay.lk",
      "Monthly performance report",
    ],
  },
  {
    name: "Platinum",
    price: "LKR 250,000",
    per: "/month",
    best: "Multi-platform brands with high content volume",
    platforms: "Facebook + Instagram + LinkedIn + TikTok",
    features: [
      "Unlimited posts",
      "8 reels from an 8-hour location shoot",
      "4 email campaigns to a 350,000 corporate database",
      "All four platforms managed",
      "Special day posts",
      "Facebook cover design",
      "Story sharing",
      "Priority inbox & comment management",
      "Web ads publishing on Findit.lk & StudyWay.lk",
      "Monthly performance report",
    ],
  },
];

const sections: ClusterSection[] = [
  {
    id: "packages",
    h2: "Social media marketing packages and prices",
    intro:
      "These are our current published rates. No annual contract, no hidden fees, and ad spend is always separate from the management fee below.",
    body: (
      <>
        <div className="grid md:grid-cols-2 gap-5 not-prose">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl border p-6 bg-card relative ${p.popular ? "border-primary shadow-lg" : "border-border"}`}
            >
              {p.popular && (
                <span className="absolute -top-3 left-6 text-[11px] font-bold uppercase tracking-wider bg-primary text-primary-foreground px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <p className="font-heading text-lg font-bold text-foreground">{p.name}</p>
              <p className="text-xs text-muted-foreground mb-3">{p.platforms}</p>
              <p className="font-heading text-3xl font-extrabold text-foreground">
                {p.price}
                <span className="text-sm font-medium text-muted-foreground">{p.per}</span>
              </p>
              <p className="text-xs text-muted-foreground mt-2 mb-4">Best for: {p.best}</p>
              <ul className="space-y-2 mb-5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="w-full bg-[hsl(25,95%,53%)] !text-white font-semibold hover:bg-[hsl(25,95%,45%)] border-none rounded-xl"
              >
                <a
                  href={`https://wa.me/94760317477?text=${encodeURIComponent(
                    `Hi, I'm interested in the ${p.name} social media package (${p.price}/month).`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ask about {p.name}
                </a>
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-6 not-prose">
          <ExtraReachBadge />
        </div>
        <div className="mt-6 not-prose">
          <PaybackCard />
        </div>
      </>
    ),
  },
  {
    id: "whats-included",
    h2: "What is included in every package",
    body: (
      <>
        <ul className="list-disc pl-5">
          <li>
            <strong>Content strategy and monthly calendar</strong> — themes, formats and posting schedule, approved by
            you before anything is published.
          </li>
          <li>
            <strong>Original design work</strong> — posts, carousels and Story graphics built for your brand, not
            template swaps.
          </li>
          <li>
            <strong>Captions in Sinhala, Tamil or English</strong> — written natively for the audience the post is aimed
            at.
          </li>
          <li>
            <strong>Publishing and scheduling</strong> — we post, so nothing depends on someone remembering.
          </li>
          <li>
            <strong>Inbox and comment management</strong> — questions answered, real enquiries routed to your team.
          </li>
          <li>
            <strong>Special day and festival posts</strong> — Avurudu, Vesak, Christmas, Deepavali, Ramadan and national
            days.
          </li>
          <li>
            <strong>Web ads publishing</strong> — additional placement on Findit.lk and StudyWay.lk, so part of your fee
            returns as extra local visibility.
          </li>
          <li>
            <strong>Monthly reporting</strong> — reach, engagement, follower change, enquiry volume and what we plan to
            change next month.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "differences",
    h2: "What actually changes between the packages",
    body: (
      <>
        <h3>Post volume</h3>
        <p>
          12 posts on Basic, 15 on Silver, 20 on Gold, unlimited on Platinum. More posts is not automatically better —
          consistency and quality matter more than frequency for most SMEs.
        </p>
        <h3>Video and shoots</h3>
        <p>
          Basic uses stock-footage reels. Silver includes a 4-hour location shoot producing 3 reels. Platinum includes an
          8-hour shoot producing 8 reels. If your product needs to be seen — food, salons, property, hotels, retail —
          filmed content is the difference that shows in results.
        </p>
        <h3>Platforms</h3>
        <p>
          Facebook and Instagram on every package with TikTok cross-posting. LinkedIn management from Gold. Full
          four-platform management on Platinum.
        </p>
        <h3>Email reach</h3>
        <p>
          Silver includes one email campaign to a 350,000-contact corporate database, Gold two, Platinum four. Useful for
          B2B, education, corporate services and event promotion.
        </p>
        <h3>Ad management</h3>
        <p>
          Campaign setup and management scales with the package. The paid strategy behind it is explained on our{" "}
          <Link to="/social-media-advertising-sri-lanka" className="text-primary hover:underline">
            social media advertising page
          </Link>
          , and standalone{" "}
          <Link to="/facebook-ads-sri-lanka" className="text-primary hover:underline">
            Facebook Ads management
          </Link>{" "}
          starts from LKR 25,000 per month.
        </p>
      </>
    ),
  },
  {
    id: "addons",
    h2: "Add-ons and separate services",
    body: (
      <>
        <ul className="list-disc pl-5">
          <li>
            <strong>Reels and short-form video</strong> — from LKR 18,000 per reel, with pro reels at LKR 30,000 and
            brand videos at LKR 45,000. See{" "}
            <Link to="/reel-creation-sri-lanka" className="text-primary hover:underline">
              reel creation
            </Link>
            .
          </li>
          <li>
            <strong>AI video packages</strong> — monthly AI video content from LKR 60,000. See{" "}
            <Link to="/ai-video-production-sri-lanka" className="text-primary hover:underline">
              AI video production
            </Link>
            .
          </li>
          <li>
            <strong>Additional location shoots</strong> — extra shoot days beyond your package allocation.
          </li>
          <li>
            <strong>Google Business Profile management</strong> — reviews, posts and local listing upkeep.
          </li>
          <li>
            <strong>Google Ads</strong> — search intent capture alongside social. See{" "}
            <Link to="/google-ads-sri-lanka" className="text-primary hover:underline">
              Google Ads
            </Link>
            .
          </li>
          <li>
            <strong>SEO</strong> — long-term organic visibility. See{" "}
            <Link to="/seo-services-sri-lanka" className="text-primary hover:underline">
              SEO services
            </Link>
            .
          </li>
          <li>
            <strong>Graphic design and print</strong> — brand assets beyond social. See{" "}
            <Link to="/graphic-design-sri-lanka" className="text-primary hover:underline">
              graphic design
            </Link>
            .
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "fee-vs-spend",
    h2: "Agency fee versus advertising spend",
    intro: "This is the single most misunderstood part of social media pricing in Sri Lanka, so we keep it explicit.",
    body: (
      <>
        <p>
          The monthly figures on this page are <strong>management and production fees</strong>. They cover strategy,
          design, video, copywriting, publishing, community management, campaign setup and reporting.
        </p>
        <p>
          <strong>Ad spend is separate</strong> and is paid to Facebook, Instagram, TikTok or LinkedIn. It never passes
          through us as a hidden margin. If a proposal from anyone claims "advertising included" without stating the
          spend figure, ask for the split in writing.
        </p>
        <p>
          A workable starting point for most SMEs is a LKR 100,000 package with LKR 40,000–60,000 in monthly ad spend.
          Businesses selling higher-value services usually put more into spend before they put more into content volume.
        </p>
        <p>
          What makes our fee different is the Findit.lk and StudyWay.lk placement included in every package — part of what
          you pay comes back as real local ad visibility instead of pure agency overhead.
        </p>
      </>
    ),
  },
  {
    id: "choosing",
    h2: "How to choose the right package",
    body: (
      <>
        <ul className="list-disc pl-5">
          <li>
            <strong>Choose Basic</strong> if you need a consistent, professional presence and are not yet ready for
            filmed content or heavy ad spend.
          </li>
          <li>
            <strong>Choose Silver</strong> if your business needs real footage of your product, place or people — this is
            where a monthly shoot enters, and it is the package most clients settle on.
          </li>
          <li>
            <strong>Choose Gold</strong> if you are running paid campaigns seriously, need LinkedIn for B2B credibility,
            or want more email reach.
          </li>
          <li>
            <strong>Choose Platinum</strong> if you operate multiple locations or brands, need daily volume, or run
            campaigns on all four platforms at once.
          </li>
        </ul>
        <p>
          If you are unsure, start one level below what you think you need and move up after two months of data. We do
          not lock clients into annual contracts, so upgrading is straightforward.
        </p>
      </>
    ),
  },
  {
    id: "cost-factors",
    h2: "What drives social media marketing costs in Sri Lanka",
    body: (
      <>
        <ul className="list-disc pl-5">
          <li>
            <strong>Number of platforms</strong> — each one needs its own format, not a copied post.
          </li>
          <li>
            <strong>Content volume</strong> — posts, carousels and Stories per month.
          </li>
          <li>
            <strong>Video</strong> — the biggest single cost driver. Filming, travel, editing, subtitling and revisions.
          </li>
          <li>
            <strong>Photography</strong> — product or location shoots, especially for food, fashion and property.
          </li>
          <li>
            <strong>Languages</strong> — Sinhala, Tamil and English versions multiply creative work.
          </li>
          <li>
            <strong>Community management load</strong> — a page receiving hundreds of daily messages costs more to run
            than one receiving ten.
          </li>
          <li>
            <strong>Campaign complexity</strong> — several concurrent offers, locations or audiences.
          </li>
          <li>
            <strong>Reporting depth</strong> — standard monthly reporting versus lead-level tracking and attribution.
          </li>
        </ul>
        <p>
          Related reading: our articles on{" "}
          <Link to="/blog/social-media-management-cost-sri-lanka" className="text-primary hover:underline">
            social media management costs
          </Link>{" "}
          and{" "}
          <Link to="/blog/social-media-marketing-packages" className="text-primary hover:underline">
            comparing package options
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "comparison",
    h2: "Package, freelancer or in-house hire?",
    body: (
      <>
        <p>
          A junior in-house social media executive in Colombo, once salary, EPF/ETF, equipment, design software and
          supervision are counted, typically costs more per month than our Silver package — and one person cannot
          reasonably cover strategy, design, video, copywriting, ads and reporting to a professional standard.
        </p>
        <p>
          A freelancer is cheaper and can be excellent for a narrow scope such as design-only or editing-only. The usual
          risks are availability, no cover during holidays or illness, and no second opinion on strategy.
        </p>
        <p>
          An agency package makes sense when you want the whole function covered with accountable reporting and no
          recruitment risk. Whichever route you take, insist on owning your page, ad account and pixel.
        </p>
        <p>
          We compare this in more detail in{" "}
          <Link to="/blog/freelancer-vs-digital-marketing-agency-sri-lanka" className="text-primary hover:underline">
            freelancer versus agency
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "getting-started",
    h2: "Getting started",
    body: (
      <>
        <ul className="list-disc pl-5">
          <li>
            <strong>Step 1</strong> — a free audit of your current pages, content and any past ad activity.
          </li>
          <li>
            <strong>Step 2</strong> — a recommended package with the content plan and suggested ad spend, in writing.
          </li>
          <li>
            <strong>Step 3</strong> — onboarding: brand assets, access, tone of voice, approval process and shoot dates.
          </li>
          <li>
            <strong>Step 4</strong> — first month calendar for approval, then publishing begins.
          </li>
          <li>
            <strong>Step 5</strong> — monthly report and a decision point on scope, spend and platforms.
          </li>
        </ul>
        <p>
          Month-to-month billing, no annual lock-in, and one dedicated account manager as your point of contact.
        </p>
      </>
    ),
  },
];

const faqs = [
  {
    q: "How much do social media marketing packages cost in Sri Lanka?",
    a: "Our packages are LKR 85,000 per month for Basic, LKR 100,000 for Silver, LKR 150,000 for Gold and LKR 250,000 for Platinum. These are management and production fees; advertising spend is separate and paid to the platforms.",
  },
  {
    q: "Is advertising spend included in the package price?",
    a: "No. Ad spend goes directly to Facebook, Instagram, TikTok or LinkedIn and is quoted separately. Most SMEs start with LKR 40,000–60,000 per month in spend alongside a LKR 100,000 package.",
  },
  {
    q: "Which package is the most popular?",
    a: "Silver at LKR 100,000 per month. It is the first package that includes a location shoot, and filmed content is usually what changes results for local businesses.",
  },
  {
    q: "How many posts do I get?",
    a: "12 on Basic, 15 on Silver, 20 on Gold and unlimited on Platinum, plus special day posts and Story sharing on every package.",
  },
  {
    q: "Are reels included?",
    a: "Yes. Basic includes 3 stock-footage reels, Silver includes 3 reels filmed on a 4-hour shoot, Gold includes reels from a location shoot and Platinum includes 8 reels from an 8-hour shoot. Extra reels start at LKR 18,000.",
  },
  {
    q: "Do you require an annual contract?",
    a: "No. All packages are month-to-month. You can upgrade, downgrade or stop with notice as agreed at onboarding.",
  },
  {
    q: "Which platforms are covered?",
    a: "Facebook and Instagram on every package with TikTok cross-posting, LinkedIn from Gold, and full four-platform management on Platinum.",
  },
  {
    q: "What is the Findit.lk and StudyWay.lk placement?",
    a: "Every package includes web ads publishing on Findit.lk and StudyWay.lk, so part of your management fee returns to you as additional local ad visibility rather than agency overhead.",
  },
  {
    q: "Can I customise a package?",
    a: "Yes. Post volume, platforms, shoot days, languages and reporting depth can all be adjusted, and we quote the change before anything starts.",
  },
  {
    q: "Do you work with small businesses on lower budgets?",
    a: "Basic at LKR 85,000 is our entry package for fully managed social media. For smaller budgets we usually recommend starting with reel production or ad management only, then moving to a package once results justify it.",
  },
  {
    q: "Do I own my page and ad account?",
    a: "Yes, always. Your page, ad account, pixel, audiences and content remain your property.",
  },
  {
    q: "What happens in the first month?",
    a: "A free audit, an agreed content plan, onboarding for brand assets and access, a calendar you approve, and then publishing. Filmed content is scheduled around your shoot date.",
  },
  {
    q: "Can I add Google Ads or SEO later?",
    a: "Yes. Google Ads, SEO, graphic design and video production are quoted as separate services and often run alongside a social media package.",
  },
];

const relatedLinks = [
  { label: "Social Media Marketing", path: "/social-media-management-sri-lanka", desc: "The full service: strategy, content, management and paid social." },
  { label: "Social Media Advertising", path: "/social-media-advertising-sri-lanka", desc: "How paid campaigns, targeting and retargeting work." },
  { label: "Social Media Campaigns", path: "/social-media-campaigns-sri-lanka", desc: "Launches, seasonal pushes and lead generation campaigns." },
  { label: "Facebook Ads", path: "/facebook-ads-sri-lanka", desc: "Facebook and Instagram ad management from LKR 25,000/month." },
  { label: "Reel Creation", path: "/reel-creation-sri-lanka", desc: "Reels and short-form video from LKR 18,000." },
  { label: "AI Video Production", path: "/ai-video-production-sri-lanka", desc: "AI avatar and product video packages from LKR 60,000." },
  { label: "Instagram Marketing", path: "/instagram-marketing-sri-lanka", desc: "Instagram-specific content and ad strategy." },
  { label: "Our Work", path: "/our-work", desc: "Creatives, reels and campaign work we have produced." },
];

const SocialMediaPackages = () => (
  <SocialClusterLayout
    metaTitle="Social Media Marketing Packages Sri Lanka | Prices from LKR 85,000 | Cypher Digital"
    metaDescription="Social media marketing packages in Sri Lanka from LKR 85,000/month. Posts, reels, location shoots, community management, ad management and reporting — with ad spend quoted separately."
    canonical="/social-media-marketing-packages-sri-lanka"
    breadcrumbLabel="Packages & Pricing"
    eyebrow="Packages & Pricing"
    h1="Social Media Marketing Packages in Sri Lanka"
    heroLead="Four monthly packages from LKR 85,000, with posts, reels, location shoots, community management and reporting included — and advertising spend always quoted separately from our fee."
    heroPoints={[
      "Published prices, no hidden fees, no annual contract",
      "Location shoots and reels from the Silver package up",
      "Extra reach on Findit.lk and StudyWay.lk included",
      "You keep your page, ad account and content",
    ]}
    serviceName="Social Media Marketing Packages Sri Lanka"
    serviceDescription="Monthly social media marketing packages in Sri Lanka covering content creation, reels, location shoots, community management, advertising management and reporting, priced from LKR 85,000 per month."
    sections={sections}
    faqs={faqs}
    relatedLinks={relatedLinks}
    whatsappMessage="Hi, I want to know more about your social media marketing packages. My business is: "
    finalCtaHeading="Not Sure Which Package Fits?"
    finalCtaLead="Send us your business type, the platforms you care about and your monthly budget. We will recommend a package, tell you honestly if a smaller one is enough, and suggest a realistic ad spend to go with it."
    formService="Social Media Marketing Packages"
  />
);

export default SocialMediaPackages;
