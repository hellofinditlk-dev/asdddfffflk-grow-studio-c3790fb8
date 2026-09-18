import SocialClusterLayout, { ClusterSection } from "@/components/SocialClusterLayout";
import { Link } from "react-router-dom";

const sections: ClusterSection[] = [
  {
    id: "what-is-a-campaign",
    h2: "What counts as a social media campaign",
    intro:
      "A campaign is a set of content, creative and paid distribution built around one objective, one offer and a fixed period. That is what separates it from ongoing posting, which has no end date and no single goal.",
    body: (
      <>
        <p>
          Ongoing management keeps a page alive. A campaign is how a business moves something specific: a new branch, a
          seasonal offer, an intake deadline, a launch, an event, a clearance, a recruitment drive.
        </p>
        <p>
          Every campaign we run has five things written down before anything is designed: the objective, the audience,
          the offer, the period, and the number we will judge it by. If any of those is missing, it is not a campaign —
          it is a batch of posts.
        </p>
        <p>
          Day-to-day content and community work sits under{" "}
          <Link to="/social-media-management-sri-lanka" className="text-primary hover:underline">
            social media marketing
          </Link>
          . The paid mechanics behind campaign delivery are covered under{" "}
          <Link to="/social-media-advertising-sri-lanka" className="text-primary hover:underline">
            social media advertising
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "campaign-types",
    h2: "Campaign types we run for Sri Lankan businesses",
    body: (
      <>
        <h3>Awareness and launch campaigns</h3>
        <p>
          New brand, new branch, new outlet, new menu, new project. Heavy on video and reach, measured on reach,
          frequency, video views and enquiry volume rather than immediate sales.
        </p>
        <h3>Lead generation campaigns</h3>
        <p>
          The most common request. A defined offer, a click-to-WhatsApp or instant-form route, and daily lead handling.
          Standard for property, education, healthcare, home services, finance and B2B.
        </p>
        <h3>Sales and promotion campaigns</h3>
        <p>
          Time-bound discounts, bundles, festival offers, clearance. These live and die on urgency — a real end date, a
          visible price and stock or seat limits.
        </p>
        <h3>Seasonal campaigns</h3>
        <p>
          Avurudu, Christmas, Ramadan, Vesak, Black Friday, back-to-school, the December–March and July–August tourism
          seasons, January and May education intakes. Planned four to six weeks ahead because creative and shoots take
          time.
        </p>
        <h3>Event campaigns</h3>
        <p>
          Exhibitions, open days, launches, workshops, weddings and corporate events split into three phases:
          pre-event registration, live coverage on the day, and post-event recap that feeds the next one.
        </p>
        <h3>Competition and giveaway campaigns</h3>
        <p>
          Effective for follower and email growth if the prize is relevant to your actual customer. A phone giveaway
          brings prize hunters; a free service voucher brings buyers.
        </p>
        <h3>Influencer and creator campaigns</h3>
        <p>
          Local creators for reach and credibility, usually paired with paid amplification of the best-performing
          creator asset so it is not left to organic chance.
        </p>
        <h3>User-generated content campaigns</h3>
        <p>
          Customers filming their own experience — strongest in food, salons, travel, fitness and retail. Needs a simple
          prompt, a hashtag and permission to reuse.
        </p>
        <h3>Retargeting campaigns</h3>
        <p>
          Aimed at people who already engaged: video viewers, form abandoners, site visitors, past customers. Usually the
          cheapest results in the whole plan.
        </p>
        <h3>Recruitment campaigns</h3>
        <p>
          Increasingly common. Social campaigns fill roles faster than job boards for sales, service and creative
          positions, especially outside Colombo.
        </p>
      </>
    ),
  },
  {
    id: "planning-process",
    h2: "How we plan a campaign, step by step",
    body: (
      <>
        <ul className="list-disc pl-5">
          <li>
            <strong>1. Research.</strong> Your last 6–12 months of content and ad data, competitor activity, comment
            themes, what your sales team hears from buyers.
          </li>
          <li>
            <strong>2. Audience.</strong> Who exactly is being moved — location, language, life stage, buying trigger,
            objection.
          </li>
          <li>
            <strong>3. Offer.</strong> One clear thing to respond to, with a price, a range, or a genuine reason to
            enquire.
          </li>
          <li>
            <strong>4. Creative concept.</strong> Two to four distinct angles, not one design in different colours.
            Angles are tested; the winner takes the budget.
          </li>
          <li>
            <strong>5. Content plan.</strong> The asset list: Reels, statics, carousels, Stories, captions in each
            language, plus a shoot schedule if filming is needed.
          </li>
          <li>
            <strong>6. Platforms and placements.</strong> Where the audience actually is, and which formats fit them.
          </li>
          <li>
            <strong>7. Budget split.</strong> Awareness, lead and retargeting layers, plus a fixed testing allowance.
          </li>
          <li>
            <strong>8. Timeline.</strong> Production dates, launch date, mid-campaign review, end date, reporting date.
          </li>
          <li>
            <strong>9. Launch.</strong> Staged so early data can redirect budget rather than confirming it too late.
          </li>
          <li>
            <strong>10. Optimisation.</strong> Weekly creative and audience decisions, with reasons recorded.
          </li>
          <li>
            <strong>11. Reporting and handover.</strong> What was spent, what it produced, what we learned, and what the
            next campaign should keep or drop.
          </li>
        </ul>
        <p>
          Response handling is planned with you before launch. A campaign that generates 200 WhatsApp messages nobody
          answers within the hour is a wasted budget, not a marketing success.
        </p>
      </>
    ),
  },
  {
    id: "frameworks",
    h2: "Sample campaign frameworks",
    intro:
      "These are structures, not promises. Numbers below are budget allocations we commonly use, not predicted results.",
    body: (
      <>
        <h3>Restaurant or café — weekend traffic campaign, 4 weeks</h3>
        <ul className="list-disc pl-5">
          <li>Offer: a specific weekend set or family bundle with a printed price</li>
          <li>Creative: one food Reel filmed in-kitchen, one dine-in atmosphere Reel, two price cards, Story polls</li>
          <li>Targeting: 7km radius around the outlet, plus retargeting of engagers</li>
          <li>Split: 60% reach and engagement in the radius, 25% click-to-WhatsApp reservations, 15% retargeting</li>
          <li>Measured on: reservations, WhatsApp enquiries, walk-in mentions of the offer</li>
        </ul>
        <h3>Property project — enquiry campaign, 8 weeks</h3>
        <ul className="list-disc pl-5">
          <li>Offer: unit types with starting price and a site-visit invitation</li>
          <li>Creative: drone or walkthrough video, unit carousel, location-advantage static, buyer FAQ Reel</li>
          <li>Targeting: Colombo and suburbs plus expatriate audiences in the Gulf, UK and Australia</li>
          <li>Split: 40% video views, 40% lead campaigns, 20% retargeting of 50%+ video viewers</li>
          <li>Measured on: qualified site visits, not raw lead count</li>
        </ul>
        <h3>Education institute — intake campaign, 6 weeks before deadline</h3>
        <ul className="list-disc pl-5">
          <li>Offer: named course, intake date, fee structure, career outcome</li>
          <li>Creative: student and lecturer testimonial Reels, course comparison carousel, deadline countdown Stories</li>
          <li>Targeting: school leavers and parents, Sinhala, Tamil and English versions</li>
          <li>Split: 30% awareness, 50% lead forms and WhatsApp, 20% retargeting in the final ten days</li>
          <li>Measured on: registrations and enrolments</li>
        </ul>
        <h3>Hotel or villa — season campaign, 10 weeks before the season</h3>
        <ul className="list-disc pl-5">
          <li>Offer: direct-booking rate or package that beats the OTA rate</li>
          <li>Creative: room and property Reels, destination content, guest experience clips, wedding and event angles</li>
          <li>Targeting: inbound source markets plus local staycation and corporate audiences</li>
          <li>Split: 45% awareness in source markets, 35% direct-booking traffic, 20% retargeting</li>
          <li>Measured on: direct enquiries and direct bookings versus OTA share</li>
        </ul>
        <h3>Salon or clinic — new service campaign, 4 weeks</h3>
        <ul className="list-disc pl-5">
          <li>Offer: introductory price for the new treatment, limited slots</li>
          <li>Creative: before-and-after sequences, practitioner explanation, real client reaction</li>
          <li>Targeting: tight radius, retargeting of past enquirers and past clients</li>
          <li>Split: 50% lead campaigns, 30% awareness in the radius, 20% retargeting and past customers</li>
          <li>Measured on: booked appointments and no-show rate</li>
        </ul>
      </>
    ),
  },
  {
    id: "calendar",
    h2: "A Sri Lankan campaign calendar",
    body: (
      <>
        <ul className="list-disc pl-5">
          <li>
            <strong>January</strong> — new-year intent, education intakes, fitness and self-improvement offers
          </li>
          <li>
            <strong>February–March</strong> — peak inbound tourism, wedding season activity, school term planning
          </li>
          <li>
            <strong>April</strong> — Avurudu retail and family campaigns, plan creative in February
          </li>
          <li>
            <strong>May</strong> — Vesak, mid-year education intakes, corporate half-year pushes
          </li>
          <li>
            <strong>June–August</strong> — second tourism wave, monsoon-aware messaging in the south-west, school
            holidays
          </li>
          <li>
            <strong>September–October</strong> — B2B and corporate procurement, exhibition season
          </li>
          <li>
            <strong>November</strong> — Deepavali, Black Friday, early season hotel booking pushes
          </li>
          <li>
            <strong>December</strong> — Christmas retail and gifting, year-end promotions, peak tourism arrivals
          </li>
        </ul>
        <p>
          Ramadan and Eid dates move each year and should be planned against the current calendar rather than a fixed
          month. Regional differences matter too: Jaffna, Kandy, Galle and Colombo do not share the same event or
          season pattern.
        </p>
      </>
    ),
  },
  {
    id: "creative-production",
    h2: "Producing the campaign assets",
    body: (
      <>
        <p>
          Most campaigns need more creative than clients expect, because paid distribution burns through an angle in
          about two weeks. We plan volume up front.
        </p>
        <ul className="list-disc pl-5">
          <li>A location shoot day producing multiple Reels and a stills bank</li>
          <li>Two to four Reels per month per active campaign, captioned for silent viewing</li>
          <li>Statics and carousels for price, proof and objection handling</li>
          <li>Stories for countdowns, polls, slot availability and behind-the-scenes</li>
          <li>Sinhala, Tamil and English versions where the audience requires it</li>
        </ul>
        <p>
          Vertical video is produced through our{" "}
          <Link to="/reel-creation-sri-lanka" className="text-primary hover:underline">
            reel creation
          </Link>{" "}
          and{" "}
          <Link to="/ai-video-production-sri-lanka" className="text-primary hover:underline">
            AI video production
          </Link>{" "}
          services, and design through{" "}
          <Link to="/graphic-design-sri-lanka" className="text-primary hover:underline">
            graphic design
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    id: "measurement",
    h2: "Measuring a campaign honestly",
    body: (
      <>
        <p>Each campaign type gets judged on its own primary number, decided before launch.</p>
        <ul className="list-disc pl-5">
          <li>
            <strong>Awareness</strong> — reach, frequency, video view-through, branded search and page visit lift
          </li>
          <li>
            <strong>Lead generation</strong> — qualified leads and cost per qualified lead, not raw form fills
          </li>
          <li>
            <strong>Sales and promotions</strong> — redemptions, orders, revenue against spend
          </li>
          <li>
            <strong>Events</strong> — registrations, attendance rate, post-event enquiries
          </li>
          <li>
            <strong>Recruitment</strong> — relevant applications per role and time to fill
          </li>
        </ul>
        <p>
          We ask for one thing from clients: tell us which enquiries turned into business. Without that, optimisation is
          guesswork dressed up as data.
        </p>
      </>
    ),
  },
  {
    id: "mistakes",
    h2: "Why campaigns fail",
    body: (
      <>
        <ul className="list-disc pl-5">
          <li>No specific offer — "contact us for details" is not an offer</li>
          <li>One creative asset expected to carry six weeks of spend</li>
          <li>Launching a seasonal campaign the week the season starts</li>
          <li>Enquiries answered the next day instead of within minutes</li>
          <li>Changing objective and audience mid-flight, so no learning survives</li>
          <li>No retargeting layer, so warm audiences are paid for once and abandoned</li>
          <li>Judging a lead-generation campaign on likes and follower growth</li>
          <li>Sending traffic to a page that does not show the price or the next step</li>
        </ul>
      </>
    ),
  },
  {
    id: "working-with-us",
    h2: "How campaign work is delivered",
    body: (
      <>
        <p>
          Campaigns run either inside a monthly retainer or as a standalone project. Retainer clients get campaigns
          planned as part of the monthly calendar; project clients get a fixed scope, timeline and asset list.
        </p>
        <ul className="list-disc pl-5">
          <li>Kick-off session and written campaign brief you approve before production</li>
          <li>Asset production, with a shoot day where filming is included in your package</li>
          <li>Campaign build, launch and daily monitoring during the first week</li>
          <li>Mid-campaign review with creative and budget changes</li>
          <li>End-of-campaign report and recommendations for the next one</li>
        </ul>
        <p>
          Inclusions by package level are on the{" "}
          <Link to="/social-media-marketing-packages-sri-lanka" className="text-primary hover:underline">
            packages page
          </Link>
          .
        </p>
      </>
    ),
  },
];

const faqs = [
  {
    q: "How long should a social media campaign run?",
    a: "Four weeks is a workable minimum for most offers, six to eight weeks for higher-value purchases like property or education, and ten weeks or more of lead time for tourism season campaigns. Anything under two weeks rarely leaves the learning phase.",
  },
  {
    q: "What is the difference between a campaign and monthly social media management?",
    a: "Management is continuous: content, posting, community handling and reporting. A campaign is a fixed-period push around one objective and one offer, with its own creative and budget. Most businesses need both.",
  },
  {
    q: "How much does a social media campaign cost in Sri Lanka?",
    a: "There are two costs: production and management, which is covered by your monthly package or a project fee, and ad spend paid to the platforms. Campaign ad budgets commonly start around LKR 40,000 for a single-offer local campaign.",
  },
  {
    q: "Can you run a campaign without a monthly retainer?",
    a: "Yes. Standalone campaigns are quoted as a project with a fixed asset list, timeline and reporting date.",
  },
  {
    q: "How far in advance should seasonal campaigns be planned?",
    a: "Four to six weeks for Avurudu, Christmas and festival retail. Eight to ten weeks for tourism season campaigns, because shoots and international audience warm-up need time.",
  },
  {
    q: "Do campaigns need video, or will designs do?",
    a: "Designs still work for price and offer messaging, but vertical video carries most of the reach on Reels and TikTok. A mix performs best, and video is usually what stops the scroll.",
  },
  {
    q: "Which platforms will my campaign run on?",
    a: "Whichever ones your audience uses. Facebook and Instagram for most consumer and local service offers, TikTok for younger audiences, LinkedIn for B2B and corporate.",
  },
  {
    q: "How many creatives does a campaign need?",
    a: "At least two to four genuinely different angles at launch, with fresh assets every two to three weeks. Creative fatigue, not budget, is the usual reason a working campaign starts to decline.",
  },
  {
    q: "Do you handle the enquiries the campaign generates?",
    a: "We handle inbox and comment responses within the scope of your package and route qualified enquiries to your team. Sales conversations and quotations stay with you, since you know your pricing and availability.",
  },
  {
    q: "Can you run competitions and giveaways?",
    a: "Yes, and they work best when the prize is something only your real customers would want. We also set the entry mechanics and rules so the audience you gain is usable afterwards.",
  },
  {
    q: "What reporting do I get?",
    a: "A campaign report covering spend, results against the objective set at the start, creative performance, audience performance, what we changed and why, and recommendations for the next campaign.",
  },
  {
    q: "Can you rescue a campaign that is already running badly?",
    a: "Often. We audit the objective, audience structure, creative and conversion path first, tell you what is wrong, and only then propose changes or additional spend.",
  },
];

const relatedLinks = [
  { label: "Social Media Marketing", path: "/social-media-management-sri-lanka", desc: "Strategy, content, management and paid social in one service." },
  { label: "Social Media Advertising", path: "/social-media-advertising-sri-lanka", desc: "How paid targeting, funnels and retargeting are built." },
  { label: "Packages & Pricing", path: "/social-media-marketing-packages-sri-lanka", desc: "Monthly package inclusions and campaign support levels." },
  { label: "Facebook Ads", path: "/facebook-ads-sri-lanka", desc: "Facebook and Instagram campaign management." },
  { label: "TikTok Marketing", path: "/tiktok-marketing-sri-lanka", desc: "Native TikTok campaign content and ads." },
  { label: "Instagram Marketing", path: "/instagram-marketing-sri-lanka", desc: "Reels and Stories campaign execution." },
  { label: "Reel Creation", path: "/reel-creation-sri-lanka", desc: "Vertical video production for campaign assets." },
  { label: "Event Marketing", path: "/event-marketing-sri-lanka", desc: "Promotion for launches, exhibitions and corporate events." },
];

const SocialMediaCampaigns = () => (
  <SocialClusterLayout
    metaTitle="Social Media Campaigns Sri Lanka | Campaign Planning & Management | Cypher Digital"
    metaDescription="Social media campaigns in Sri Lanka — launches, promotions, seasonal and lead generation campaigns planned, produced and run end to end with clear objectives and honest reporting."
    canonical="/social-media-campaigns-sri-lanka"
    breadcrumbLabel="Social Media Campaigns"
    eyebrow="Campaign Planning & Execution"
    h1="Social Media Campaigns in Sri Lanka"
    heroLead="Launches, festival offers, intake drives, event pushes and lead generation campaigns — planned around one objective, produced properly and measured against the number that matters to your business."
    heroPoints={[
      "Written campaign brief before anything is designed",
      "Two to four creative angles, tested not assumed",
      "Sinhala, Tamil and English versions where needed",
      "Seasonal planning around Avurudu, tourism and intakes",
    ]}
    serviceName="Social Media Campaign Management Sri Lanka"
    serviceDescription="Planning, production and management of social media campaigns in Sri Lanka, including launches, seasonal promotions, event campaigns, lead generation and retargeting across Facebook, Instagram, TikTok and LinkedIn."
    sections={sections}
    faqs={faqs}
    relatedLinks={relatedLinks}
    whatsappMessage="Hi, I want to plan a social media campaign. The campaign is for: "
    finalCtaHeading="Plan Your Next Social Media Campaign"
    finalCtaLead="Tell us what you need to move — a launch, a season, an intake, an event or a monthly lead target — and we will send back a campaign structure with the assets, timeline and budget split we would use."
    formService="Social Media Campaigns"
  />
);

export default SocialMediaCampaigns;
