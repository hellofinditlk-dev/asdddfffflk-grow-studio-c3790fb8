import SocialClusterLayout, { ClusterSection } from "@/components/SocialClusterLayout";
import { Link } from "react-router-dom";

const sections: ClusterSection[] = [
  {
    id: "what-is-paid-social",
    h2: "What social media advertising actually is",
    intro:
      "Social media advertising is paid distribution. Instead of hoping followers see a post, you buy placement in the feeds, Stories and Reels of people who match a defined audience, then measure what those impressions cost you and what they returned.",
    body: (
      <>
        <p>
          It is a different discipline from organic posting. Organic content builds familiarity with people who already
          know you. Paid social decides <strong>who sees you next</strong> — a homeowner in Nugegoda looking at kitchen
          renovations, a parent researching an international school intake, a traveller in Europe planning a Sri Lankan
          itinerary in November.
        </p>
        <p>
          Three things determine results: the audience you buy, the creative you show them, and the conversion path you
          send them to. Budget matters far less than most advertisers assume. A LKR 40,000 monthly ad budget with a
          strong Reel and a WhatsApp click-to-chat destination regularly beats a LKR 150,000 budget pointed at a slow
          website with a contact form nobody fills.
        </p>
        <p>
          For day-to-day organic management, content calendars and community handling, see our{" "}
          <Link to="/social-media-management-sri-lanka" className="text-primary hover:underline">
            social media marketing services
          </Link>
          . This page is only about the paid side.
        </p>
      </>
    ),
  },
  {
    id: "platforms",
    h2: "The platforms we buy, and what each one is good for",
    body: (
      <>
        <h3>Facebook Ads</h3>
        <p>
          Still the widest reach in Sri Lanka and the workhorse for lead generation. Strongest for local service
          businesses, education, property, healthcare, home services and anything sold through a conversation. Lead
          forms and click-to-WhatsApp campaigns do most of the heavy lifting. Detailed setup, structure and pricing sit
          on our{" "}
          <Link to="/facebook-ads-sri-lanka" className="text-primary hover:underline">
            Facebook Ads service page
          </Link>
          .
        </p>
        <h3>Instagram Ads</h3>
        <p>
          Bought in the same ad account as Facebook but a different creative game: vertical video, Stories, Reels
          placements, aspirational framing. Best for fashion, salons, hotels, restaurants, cafés, fitness, weddings and
          anything visual. See{" "}
          <Link to="/instagram-marketing-sri-lanka" className="text-primary hover:underline">
            Instagram marketing
          </Link>
          .
        </p>
        <h3>TikTok Ads</h3>
        <p>
          Cheapest impressions of the four, youngest audience, and the least forgiving of anything that looks like an
          advertisement. Works when the creative is filmed native — a staff member talking to camera, a real
          before-and-after, a product used in one take. More on{" "}
          <Link to="/tiktok-marketing-sri-lanka" className="text-primary hover:underline">
            TikTok marketing
          </Link>
          .
        </p>
        <h3>LinkedIn Ads</h3>
        <p>
          The most expensive per click and the only place you can buy by job title, seniority, company size and
          industry. Justified for B2B, corporate services, enterprise software, professional training and recruitment —
          rarely for consumer offers. See{" "}
          <Link to="/linkedin-marketing-sri-lanka" className="text-primary hover:underline">
            LinkedIn marketing
          </Link>
          .
        </p>
        <h3>Web ads placement in addition to social</h3>
        <p>
          Because we also publish on Findit.lk and StudyWay.lk, part of your management fee comes back as additional
          local ad placement rather than disappearing into agency overhead. That reach sits alongside your paid social,
          not instead of it.
        </p>
      </>
    ),
  },
  {
    id: "campaign-objectives",
    h2: "Choosing the right campaign objective",
    intro:
      "Every platform optimises towards the objective you select, so the objective is the single most consequential setting in the account. Picking the flattering one is how advertisers end up with cheap likes and no customers.",
    body: (
      <>
        <ul className="list-disc pl-5">
          <li>
            <strong>Awareness / reach</strong> — use for launches, events, seasonal pushes and brand building. Judge it
            on reach, frequency and CPM. Do not expect enquiries.
          </li>
          <li>
            <strong>Traffic</strong> — use when the destination genuinely converts. Judge on cost per landing page view,
            not per click.
          </li>
          <li>
            <strong>Engagement</strong> — useful early to warm a new page and build retargeting audiences, and for
            comment-heavy offers. Not a lead objective.
          </li>
          <li>
            <strong>Leads</strong> — instant forms or click-to-WhatsApp. The default for most Sri Lankan service
            businesses because buyers prefer to chat before committing.
          </li>
          <li>
            <strong>Sales / conversions</strong> — for e-commerce with a working pixel and tracked purchases. Judge on
            cost per purchase and ROAS.
          </li>
          <li>
            <strong>App promotion</strong> — only with proper in-app event tracking in place.
          </li>
        </ul>
        <p>
          One objective per campaign, one clear action per ad. Campaigns that try to do brand awareness and lead
          generation at once do neither well.
        </p>
      </>
    ),
  },
  {
    id: "targeting",
    h2: "Audience targeting for a small market",
    body: (
      <>
        <p>
          Sri Lanka is a small enough market that over-narrow targeting hurts. Stacking district, age, income proxy and
          six interests together often shrinks an audience below the size the delivery system needs to learn, so costs
          rise and results become erratic.
        </p>
        <h3>What we usually run</h3>
        <ul className="list-disc pl-5">
          <li>
            <strong>Broad local</strong> — country or district level with a wide age band, letting the platform find
            responders. Works surprisingly well when creative is strong.
          </li>
          <li>
            <strong>Radius targeting</strong> — essential for salons, clinics, restaurants, gyms and showrooms. A 5–10km
            radius around Colombo, Kandy, Galle, Negombo or Jaffna beats national targeting for a single-branch
            business.
          </li>
          <li>
            <strong>Interest and behaviour sets</strong> — kept to a small number of genuinely predictive interests,
            tested against broad rather than assumed to be better.
          </li>
          <li>
            <strong>Custom audiences</strong> — page engagers, video viewers, Instagram interactions, website visitors,
            customer phone lists you own and are permitted to upload.
          </li>
          <li>
            <strong>Lookalikes</strong> — built from real buyers or qualified leads, not from all page followers.
          </li>
          <li>
            <strong>Expatriate and inbound targeting</strong> — for hotels, tours, property and education, we buy
            audiences in the UK, Australia, the Gulf and India where the buyer is abroad and the service is here.
          </li>
        </ul>
        <p>
          Language is part of targeting in Sri Lanka. The same offer often needs a Sinhala version, a Tamil version and
          an English version, each with its own creative rather than one translated caption.
        </p>
      </>
    ),
  },
  {
    id: "creative",
    h2: "Creative and ad copy that carries the campaign",
    intro:
      "In a well-structured account, creative explains most of the variance in performance. We build every campaign with several genuinely different concepts rather than one design in five colours.",
    body: (
      <>
        <h3>Formats we produce</h3>
        <ul className="list-disc pl-5">
          <li>Vertical Reels and TikToks, 9:16, filmed or AI-generated, captioned for silent viewing</li>
          <li>Single-image ads with the offer legible at thumbnail size</li>
          <li>Carousels for multi-unit offers — property units, menu items, course streams, product ranges</li>
          <li>Before-and-after and demonstration videos for salons, clinics, construction and renovation</li>
          <li>Testimonial and staff-to-camera cuts, which usually beat polished brand films on cost per lead</li>
          <li>Static price and package cards, which perform well in Sri Lanka where buyers want the number early</li>
        </ul>
        <h3>Copy structure that works locally</h3>
        <p>
          Lead with the outcome or the price, name the audience in the first line, keep the offer to one sentence, and
          make the next step explicit ("Message us on WhatsApp for the price list"). Sinhala and Tamil copy should be
          written natively; translated English rarely reads as trustworthy.
        </p>
        <p>
          Reels and short-form production is available as part of our{" "}
          <Link to="/reel-creation-sri-lanka" className="text-primary hover:underline">
            reel creation service
          </Link>{" "}
          from LKR 18,000 per reel, and inside the monthly packages.
        </p>
      </>
    ),
  },
  {
    id: "funnel",
    h2: "The funnel: awareness to conversion",
    body: (
      <>
        <p>
          Very few Sri Lankan buyers convert on first exposure for anything above a few thousand rupees. We build layered
          campaigns so each stage does one job.
        </p>
        <ul className="list-disc pl-5">
          <li>
            <strong>Stage 1 — Awareness.</strong> Broad video views and reach at low CPM. Purpose: build a large pool of
            people who have watched you.
          </li>
          <li>
            <strong>Stage 2 — Engagement and consideration.</strong> Offer explanation, comparison, proof, process. Sent
            to video viewers and page engagers.
          </li>
          <li>
            <strong>Stage 3 — Lead.</strong> Direct offer with instant form or WhatsApp, aimed at warm audiences and at
            broad in parallel.
          </li>
          <li>
            <strong>Stage 4 — Retargeting.</strong> Website visitors, form abandoners, cart abandoners, people who
            watched 75% of a video. Usually your cheapest conversions.
          </li>
          <li>
            <strong>Stage 5 — Conversion and repeat.</strong> Existing customer lists for upsell, renewal and referral
            offers.
          </li>
        </ul>
        <p>
          Campaign-level planning around seasons, launches and events is covered on our{" "}
          <Link to="/social-media-campaigns-sri-lanka" className="text-primary hover:underline">
            social media campaigns page
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "landing",
    h2: "Where the click goes",
    body: (
      <>
        <p>
          Ad accounts get blamed for problems that live after the click. Before we scale spend we check the destination.
        </p>
        <ul className="list-disc pl-5">
          <li>
            <strong>WhatsApp click-to-chat</strong> — highest reply rate for service businesses, provided someone
            actually answers within minutes during business hours.
          </li>
          <li>
            <strong>Instant lead forms</strong> — cheapest leads, lowest intent. Needs a same-day call process or the
            list goes cold.
          </li>
          <li>
            <strong>Landing page</strong> — best for higher-value offers where the buyer needs detail. Must load fast on
            mobile data, show price or price range, and put the enquiry action above the fold.
          </li>
          <li>
            <strong>Catalogue and shop</strong> — for e-commerce, with product feed and events verified before spend
            increases.
          </li>
        </ul>
        <p>
          We also check the unglamorous things: is the phone number correct, is the inbox monitored, does the form
          notification reach a person, is there a follow-up on day two.
        </p>
      </>
    ),
  },
  {
    id: "budget",
    h2: "Budgets and what your money buys",
    intro:
      "Two separate numbers matter and we always quote them separately: the ad spend that goes to the platform, and the management fee that pays for strategy, creative and optimisation.",
    body: (
      <>
        <h3>Ad spend guidance</h3>
        <ul className="list-disc pl-5">
          <li>
            <strong>LKR 20,000–40,000 per month</strong> — one offer, one district, one platform. Enough to test whether
            paid social works for you.
          </li>
          <li>
            <strong>LKR 50,000–100,000 per month</strong> — a real funnel: awareness, lead and retargeting layers on
            Facebook and Instagram.
          </li>
          <li>
            <strong>LKR 150,000+ per month</strong> — multi-platform, multi-language, multi-location, with room for
            structured creative testing.
          </li>
        </ul>
        <p>
          Ad spend is always paid to the platform, never included in a management fee unless a proposal says so in
          writing. Our ad management sits inside the monthly social media packages, and standalone Facebook and
          Instagram ad management starts from LKR 25,000 per month. Full inclusions are on the{" "}
          <Link to="/social-media-marketing-packages-sri-lanka" className="text-primary hover:underline">
            packages page
          </Link>
          .
        </p>
        <h3>Where budget is wasted</h3>
        <ul className="list-disc pl-5">
          <li>Boosting posts from the app instead of running structured campaigns</li>
          <li>Changing the offer or audience every few days, so nothing exits the learning phase</li>
          <li>Running five near-identical creatives against the same small audience</li>
          <li>Paying for traffic to a page that takes eight seconds to load on mobile data</li>
        </ul>
      </>
    ),
  },
  {
    id: "metrics",
    h2: "Metrics we report, and which ones we act on",
    body: (
      <>
        <ul className="list-disc pl-5">
          <li>
            <strong>CPM</strong> — cost per thousand impressions. A read on audience competitiveness and creative
            quality.
          </li>
          <li>
            <strong>CTR</strong> — click-through rate. Primarily a creative and offer signal.
          </li>
          <li>
            <strong>CPC</strong> — cost per click. Useful, but never the goal.
          </li>
          <li>
            <strong>CPL</strong> — cost per lead. The number most Sri Lankan service businesses should be managed on.
          </li>
          <li>
            <strong>CPA</strong> — cost per acquisition, once a lead becomes a customer.
          </li>
          <li>
            <strong>ROAS</strong> — return on ad spend, meaningful only where purchase tracking is verified.
          </li>
          <li>
            <strong>Conversion rate</strong> — clicks or leads that become customers. Often the fastest thing to
            improve, and it costs nothing in media.
          </li>
          <li>
            <strong>Frequency</strong> — how often the same person sees the ad. Rising frequency with falling results
            means creative fatigue.
          </li>
        </ul>
        <p>
          Cost per lead without a qualification step is a vanity metric too. We ask clients to tell us which leads were
          real, and we feed that back into targeting and creative decisions.
        </p>
      </>
    ),
  },
  {
    id: "optimisation",
    h2: "How we run and optimise the account",
    body: (
      <>
        <ul className="list-disc pl-5">
          <li>
            <strong>Week 1</strong> — account and pixel check, audience build, three to five creative concepts, campaign
            structure, launch.
          </li>
          <li>
            <strong>Week 2</strong> — leave delivery alone long enough to stabilise; fix only breakages and obvious
            audience or placement problems.
          </li>
          <li>
            <strong>Week 3</strong> — cut the weakest creatives, scale the strongest, add the retargeting layer, review
            lead quality with you.
          </li>
          <li>
            <strong>Week 4</strong> — reporting, next month's creative brief, budget reallocation between platforms and
            offers.
          </li>
        </ul>
        <p>
          Reporting shows spend, results, cost per result and what we changed and why — not a screenshot of impressions.
          You keep ownership of your ad account, pixel, page and audiences.
        </p>
      </>
    ),
  },
  {
    id: "local",
    h2: "What is different about advertising in Sri Lanka",
    body: (
      <>
        <ul className="list-disc pl-5">
          <li>
            <strong>Conversation-first buying.</strong> WhatsApp is the real conversion point for most categories. A
            campaign is only as good as your reply speed.
          </li>
          <li>
            <strong>Three languages.</strong> Sinhala, Tamil and English audiences behave differently and need separate
            creative, not a single translated post.
          </li>
          <li>
            <strong>Seasonality.</strong> Avurudu, Christmas and Ramadan retail peaks; the December–March and July–August
            tourism seasons; January and May school and university intakes; year-end corporate budget cycles.
          </li>
          <li>
            <strong>Price transparency.</strong> Local audiences ask for the price in the comments within minutes.
            Putting a starting price in the creative filters out low-intent enquiries.
          </li>
          <li>
            <strong>Mobile data reality.</strong> Most impressions are served to mid-range Android phones on mobile data,
            which decides video length, caption size and page weight.
          </li>
        </ul>
        <p>
          We do not publish invented benchmark figures for these markets. When we quote a cost per lead, it comes from an
          account we ran, for a business we can describe.
        </p>
      </>
    ),
  },
];

const faqs = [
  {
    q: "How much should I spend on social media advertising in Sri Lanka?",
    a: "Start at LKR 20,000–40,000 per month for a single offer in one district to learn whether paid social works for your business. A full funnel with awareness, lead and retargeting layers usually needs LKR 50,000–100,000 per month in ad spend, separate from management fees.",
  },
  {
    q: "Is ad spend included in your fee?",
    a: "No. Ad spend is paid to Facebook, Instagram, TikTok or LinkedIn and is always quoted separately from our management fee. Anyone who bundles the two without a written breakdown is making it hard for you to see what you are paying for.",
  },
  {
    q: "Which platform gives the cheapest leads?",
    a: "For most Sri Lankan service businesses, Facebook and Instagram lead campaigns give the lowest cost per lead. TikTok gives the cheapest impressions but needs native-looking creative. LinkedIn is the most expensive per lead and only makes sense for B2B and corporate offers.",
  },
  {
    q: "How long before I see results?",
    a: "Lead campaigns usually produce enquiries within the first week. Reliable cost per lead figures need two to four weeks, because delivery has to stabilise and creative has to be tested before scaling.",
  },
  {
    q: "Do you manage my existing ad account or create a new one?",
    a: "We prefer to work inside your existing Business Manager and ad account so the data history and pixel stay yours. If nothing is set up yet, we create it in your name and give you full admin access.",
  },
  {
    q: "Can you run ads in Sinhala and Tamil?",
    a: "Yes. We write natively in Sinhala, Tamil and English and build separate creative for each language rather than translating one caption.",
  },
  {
    q: "What is the difference between boosting a post and running ads?",
    a: "Boosting pushes an existing post to a loosely defined audience with limited objectives. A campaign lets you choose objective, audience structure, placements, creative testing and retargeting, which is where efficiency comes from.",
  },
  {
    q: "Do you need a website to run social media ads?",
    a: "No. Click-to-WhatsApp and instant lead forms work without a website. A landing page helps for higher-value offers where the buyer needs detail before enquiring.",
  },
  {
    q: "Who owns the ad account and audiences?",
    a: "You do. Account, page, pixel, catalogue and custom audiences stay in your ownership, and you keep them if we stop working together.",
  },
  {
    q: "Do you guarantee a cost per lead?",
    a: "No, and no honest agency can. Cost per lead depends on your offer, price point, competition and follow-up speed. We commit to structure, creative volume, testing and transparent reporting.",
  },
  {
    q: "Can you fix an account that has stopped performing?",
    a: "Usually. Most stalled accounts have creative fatigue, over-narrow audiences, too many overlapping campaigns or a broken conversion event. We audit first and tell you what we find before proposing spend.",
  },
  {
    q: "How does this differ from your social media management service?",
    a: "Management covers organic content, posting and community handling. Advertising covers paid distribution, targeting and conversion campaigns. Most clients run both, and our monthly packages include ad management.",
  },
];

const relatedLinks = [
  { label: "Social Media Marketing", path: "/social-media-management-sri-lanka", desc: "The full service overview: strategy, content, management and paid social." },
  { label: "Social Media Campaigns", path: "/social-media-campaigns-sri-lanka", desc: "Planning and running launches, promotions and seasonal campaigns." },
  { label: "Packages & Pricing", path: "/social-media-marketing-packages-sri-lanka", desc: "What each monthly package includes and how to choose one." },
  { label: "Facebook Ads", path: "/facebook-ads-sri-lanka", desc: "Facebook and Instagram ad management in detail." },
  { label: "Instagram Marketing", path: "/instagram-marketing-sri-lanka", desc: "Reels, Stories and Instagram ad strategy." },
  { label: "TikTok Marketing", path: "/tiktok-marketing-sri-lanka", desc: "Native TikTok creative and TikTok Ads." },
  { label: "LinkedIn Marketing", path: "/linkedin-marketing-sri-lanka", desc: "B2B targeting by job title, industry and seniority." },
  { label: "Reel Creation", path: "/reel-creation-sri-lanka", desc: "Vertical video production for paid social creative." },
];

const SocialMediaAdvertising = () => (
  <SocialClusterLayout
    metaTitle="Social Media Advertising Sri Lanka | Paid Social Agency | Cypher Digital"
    metaDescription="Social media advertising in Sri Lanka — Facebook, Instagram, TikTok and LinkedIn ad campaigns built for leads and sales. Targeting, creative, retargeting and transparent reporting."
    canonical="/social-media-advertising-sri-lanka"
    breadcrumbLabel="Social Media Advertising"
    eyebrow="Paid Social Media"
    h1="Social Media Advertising in Sri Lanka"
    heroLead="Paid campaigns on Facebook, Instagram, TikTok and LinkedIn built around one question: what does a real enquiry cost, and can we make it cheaper next month?"
    heroPoints={[
      "Campaign structure built by objective, not boosted posts",
      "Sinhala, Tamil and English creative written natively",
      "Click-to-WhatsApp, lead forms and landing page routes",
      "Reporting on CPL, CPA and ROAS — you keep the ad account",
    ]}
    serviceName="Social Media Advertising Sri Lanka"
    serviceDescription="Paid social media advertising management in Sri Lanka across Facebook, Instagram, TikTok and LinkedIn, including audience targeting, creative production, retargeting and performance reporting."
    sections={sections}
    faqs={faqs}
    relatedLinks={relatedLinks}
    whatsappMessage="Hi, I want to run social media advertising. My business is: "
    finalCtaHeading="Get a Social Media Advertising Plan for Your Business"
    finalCtaLead="Tell us your business, your offer and the monthly budget you have in mind. We will come back with a campaign structure, the creative we would produce and a realistic view of what results to expect."
    formService="Social Media Advertising"
  />
);

export default SocialMediaAdvertising;
