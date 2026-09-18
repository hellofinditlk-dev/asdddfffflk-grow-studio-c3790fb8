import SocialClusterLayout, { ClusterSection } from "@/components/SocialClusterLayout";
import { Link } from "react-router-dom";

const L = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} className="text-primary hover:underline">
    {children}
  </Link>
);

const sections: ClusterSection[] = [
  {
    id: "what-strategy-means",
    h2: "What a social media strategy actually is",
    intro:
      "A strategy is a written decision set: who you are talking to, what you want them to do, which platforms carry that, what you will publish, what you will pay to distribute, and the number you will judge it all by.",
    body: (
      <>
        <p>
          Most Sri Lankan businesses we meet do not have a strategy problem in the abstract sense. They have a decision
          problem. Nobody has written down whether the page exists to build a brand, fill a booking calendar, or produce
          twenty enquiries a week. Without that decision, every content review turns into a matter of taste, and every
          ad budget question becomes guesswork.
        </p>
        <p>
          A usable strategy fits into a few pages. It names the objective for the next three to six months, the audience
          segments worth spending money on, the platforms that reach them, the content themes that will run, the paid
          structure behind those themes, and the reporting that tells you whether it worked. Everything else — captions,
          colours, posting times — is execution.
        </p>
        <p>
          Day-to-day execution sits under <L to="/social-media-management-sri-lanka">social media marketing services</L>.
          Strategy is the document that tells that execution what to do.
        </p>
      </>
    ),
  },
  {
    id: "business-objectives",
    h2: "Start with business objectives, not platform goals",
    body: (
      <>
        <p>
          "More followers" is not an objective. It is a side effect. Objectives that hold up under review look like
          these:
        </p>
        <ul className="list-disc pl-5">
          <li>A hotel in Bentota wants direct bookings that do not carry an OTA commission.</li>
          <li>A private campus wants qualified enquiries for the January and May intakes.</li>
          <li>A property developer wants site-visit appointments, not general enquiries.</li>
          <li>A salon chain wants appointments filled on weekdays, when chairs sit empty.</li>
          <li>A parts importer wants dealer and workshop accounts, not retail walk-ins.</li>
        </ul>
        <p>
          Each of those changes the whole plan. The hotel needs seasonal planning and a booking route. The campus needs
          intake-linked campaign windows and fast WhatsApp response. The developer needs qualification questions before
          the appointment. The salon needs offer-led weekday promotions. The importer needs LinkedIn and a different tone
          entirely.
        </p>
        <h3>Turn each objective into one number</h3>
        <p>
          One objective, one primary metric, one review period. Bookings per month. Enquiries per week. Cost per
          qualified lead. Revenue attributed to social. If a plan cannot name that number, it cannot be judged, which
          usually means it will run for a year without anyone deciding whether it worked.
        </p>
      </>
    ),
  },
  {
    id: "audience-research",
    h2: "Audience research for Sri Lankan buyers",
    body: (
      <>
        <p>
          Audience work here is less about global personas and more about practical detail: which language they read,
          which device they scroll on, when they are free, and how they prefer to make contact.
        </p>
        <h3>Language</h3>
        <p>
          Sinhala, Tamil and English are not interchangeable. English-first works for premium hospitality, B2B and
          international-facing education. Sinhala-first almost always outperforms for retail offers, home services,
          vehicle sales and mass-market food. Tamil matters seriously in the North, East and parts of the hill country,
          and is under-used by most advertisers, which usually means cheaper reach.
        </p>
        <h3>Device and connection</h3>
        <p>
          Assume mobile, assume vertical, assume sound off on the first second. Long horizontal edits designed for
          desktop viewing lose most of their audience before the message appears.
        </p>
        <h3>Contact preference</h3>
        <p>
          WhatsApp is the default enquiry channel in Sri Lanka. Contact forms and email requests will reduce your enquiry
          volume, sometimes by half. Plan for click-to-WhatsApp, and plan for someone to actually answer within working
          hours.
        </p>
        <h3>Timing</h3>
        <p>
          Commute hours, lunch, and the 8pm–11pm window carry the most attention for consumer categories. B2B behaves
          differently — weekday mornings work better than evenings.
        </p>
      </>
    ),
  },
  {
    id: "competitor-analysis",
    h2: "Competitor analysis as a strategy input",
    body: (
      <>
        <p>
          The purpose of competitor review is not imitation. It is to find what the category has stopped doing. Three
          things we look at for every client:
        </p>
        <ul className="list-disc pl-5">
          <li>
            <strong>Publishing pattern.</strong> How often, what format, what proportion is video. If everyone in the
            category posts static price cards, video is your opening.
          </li>
          <li>
            <strong>Active ads.</strong> Meta's Ad Library is public. What competitors are running, how long a creative
            has been live, and which offers they keep repeating tells you what is working for them.
          </li>
          <li>
            <strong>Comment sections.</strong> The questions customers ask under competitor posts are your content
            calendar. Price, location, delivery, warranty, availability — answer those before anyone has to ask.
          </li>
        </ul>
        <p>
          A common finding in Sri Lankan categories: competitors publish consistently but never answer messages within
          the day. Response speed is a strategy advantage that costs nothing in media.
        </p>
      </>
    ),
  },
  {
    id: "platform-selection",
    h2: "Choosing platforms instead of joining all of them",
    body: (
      <>
        <p>
          Being on five platforms with thin content is worse than being on two properly. A rough guide from the work we
          do locally:
        </p>
        <ul className="list-disc pl-5">
          <li>
            <strong>Facebook</strong> — widest reach across ages and districts, strongest for lead generation, offers and
            local services. Detailed on our <L to="/facebook-ads-sri-lanka">Facebook Ads page</L>.
          </li>
          <li>
            <strong>Instagram</strong> — visual categories: hospitality, food, fashion, beauty, interiors, weddings. See{" "}
            <L to="/instagram-marketing-sri-lanka">Instagram marketing</L>.
          </li>
          <li>
            <strong>TikTok</strong> — younger audiences and fast discovery, strong for food, retail, education and
            entertainment. See <L to="/tiktok-marketing-sri-lanka">TikTok marketing</L>.
          </li>
          <li>
            <strong>LinkedIn</strong> — B2B, corporate services, recruitment and high-value professional offers. See{" "}
            <L to="/linkedin-marketing-sri-lanka">LinkedIn marketing</L>.
          </li>
          <li>
            <strong>YouTube</strong> — worth it only when you can sustain longer-form or a real reel library.
          </li>
        </ul>
        <p>
          Our usual recommendation for an SME starting properly: two platforms, one primary and one secondary, with reels
          cut once and adapted for both.
        </p>
      </>
    ),
  },
  {
    id: "content-strategy",
    h2: "Content strategy: themes before posts",
    body: (
      <>
        <p>
          A content strategy assigns a job to every piece of content. We work with five recurring themes and a rough
          split:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-lg">
            <thead className="bg-secondary/60">
              <tr>
                <th className="text-left p-3 font-semibold text-foreground">Theme</th>
                <th className="text-left p-3 font-semibold text-foreground">Job it does</th>
                <th className="text-left p-3 font-semibold text-foreground">Typical share</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border">
                <td className="p-3">Proof</td>
                <td className="p-3">Real work, real premises, real customers, finished results</td>
                <td className="p-3">30%</td>
              </tr>
              <tr className="border-t border-border">
                <td className="p-3">Educational</td>
                <td className="p-3">Answers the questions that delay a decision</td>
                <td className="p-3">25%</td>
              </tr>
              <tr className="border-t border-border">
                <td className="p-3">Offer</td>
                <td className="p-3">Prices, packages, intakes, seasonal deals</td>
                <td className="p-3">20%</td>
              </tr>
              <tr className="border-t border-border">
                <td className="p-3">Behind the scenes</td>
                <td className="p-3">Team, process, kitchen, site, workshop — builds trust</td>
                <td className="p-3">15%</td>
              </tr>
              <tr className="border-t border-border">
                <td className="p-3">Cultural and seasonal</td>
                <td className="p-3">Avurudu, Vesak, Ramadan, Christmas, exam and tourism seasons</td>
                <td className="p-3">10%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Production planning for these themes — shoots, reels, carousels, copy — is covered under{" "}
          <L to="/social-media-content-creation-sri-lanka">social media content creation</L>, and short-form production
          under <L to="/reel-creation-sri-lanka">reel creation</L>.
        </p>
      </>
    ),
  },
  {
    id: "paid-media-strategy",
    h2: "Paid media strategy and budget structure",
    body: (
      <>
        <p>
          Organic reach for business pages is small and getting smaller. A strategy without paid distribution is a
          strategy that assumes your best content will be seen by a few hundred people.
        </p>
        <h3>A workable three-part budget split</h3>
        <ul className="list-disc pl-5">
          <li>
            <strong>Cold reach (about 50%)</strong> — new audiences by location, interest and behaviour, plus broad
            targeting where the creative is strong enough to do the sorting.
          </li>
          <li>
            <strong>Warm retargeting (about 30%)</strong> — video viewers, page engagers, website visitors, message
            starters who did not finish the conversation.
          </li>
          <li>
            <strong>Conversion and offer (about 20%)</strong> — the campaign asking for the booking, the appointment or
            the purchase.
          </li>
        </ul>
        <p>
          Agency fees and ad spend are separate lines, always. Fees are on our{" "}
          <L to="/social-media-marketing-packages-sri-lanka">packages page</L>; how the spend is structured and optimised
          is covered under <L to="/social-media-advertising-sri-lanka">social media advertising</L>.
        </p>
      </>
    ),
  },
  {
    id: "campaign-strategy",
    h2: "Campaign strategy on top of always-on activity",
    body: (
      <>
        <p>
          Always-on content keeps you present. Campaigns move specific things. A year plan usually holds four to six real
          campaigns — a launch, two seasonal pushes, an intake or peak-season drive, and one recruitment or event
          campaign — each with its own objective, period and number.
        </p>
        <p>
          Planning, phasing and creative for those is covered under{" "}
          <L to="/social-media-campaigns-sri-lanka">social media campaigns</L>. Strategy's job is to decide which
          campaigns are worth running and when, so production is booked before the season arrives rather than during it.
        </p>
      </>
    ),
  },
  {
    id: "lead-strategy",
    h2: "Lead generation and follow-up as part of the strategy",
    body: (
      <>
        <p>
          Most social media disappointment in Sri Lanka is not a media problem. Leads arrive and nothing happens to them.
          A strategy that stops at "generate leads" is unfinished.
        </p>
        <ul className="list-disc pl-5">
          <li>Decide the enquiry route: click-to-WhatsApp, instant form, call, or landing page.</li>
          <li>Decide who answers, in what language, within what time.</li>
          <li>Decide the qualifying questions that separate a buyer from a browser.</li>
          <li>Decide where the lead is recorded, and who follows up on day two and day seven.</li>
        </ul>
        <p>
          The full mechanics live on our{" "}
          <L to="/social-media-lead-generation-sri-lanka">social media lead generation page</L>.
        </p>
      </>
    ),
  },
  {
    id: "measurement",
    h2: "Measurement, reporting and optimisation",
    body: (
      <>
        <p>
          A strategy defines what will be reported before the first post goes out. We report on the numbers that connect
          to the objective: enquiries, cost per enquiry, qualified leads, cost per qualified lead, bookings or sales, and
          spend against those outcomes. Reach and engagement are context, not the verdict.
        </p>
        <h3>The review rhythm</h3>
        <ul className="list-disc pl-5">
          <li><strong>Weekly</strong> — ad performance, lead volume and response times. Small adjustments only.</li>
          <li><strong>Monthly</strong> — full report, creative winners and losers, budget reallocation.</li>
          <li><strong>Quarterly</strong> — the strategy itself: objective still right, platforms still right, offer still right.</li>
        </ul>
        <p>
          Changing everything weekly is the most common self-inflicted problem. Campaigns need enough data before a
          verdict, and creative needs a fair run before it is replaced.
        </p>
      </>
    ),
  },
  {
    id: "our-process",
    h2: "How we build a social media strategy",
    body: (
      <>
        <h3>1. Discovery</h3>
        <p>
          A working session on the business: what sells, what margin looks like, what the sales process is, which
          enquiries the team can actually handle, and what has already been tried.
        </p>
        <h3>2. Audit</h3>
        <p>
          Current pages, content, ad history, response times and analytics — what to keep, fix or stop. Available on its
          own as a <L to="/social-media-audit-sri-lanka">social media audit</L>.
        </p>
        <h3>3. Audience and competitor mapping</h3>
        <p>Segments worth paying for, language split, and the gaps in the category.</p>
        <h3>4. Platform and content plan</h3>
        <p>Platform choice, content themes, formats, volume and a first-month calendar.</p>
        <h3>5. Paid plan</h3>
        <p>Campaign structure, budget split, targeting approach, retargeting layers and expected reporting.</p>
        <h3>6. Measurement plan</h3>
        <p>Objective, primary metric, tracking setup, report format and review dates.</p>
        <h3>7. Handover or execution</h3>
        <p>
          Either your team runs it with the document, or we run it as a monthly engagement. Both are fine; the strategy
          is written to be readable by whoever executes it.
        </p>
      </>
    ),
  },
  {
    id: "mistakes",
    h2: "Strategy mistakes we see most often",
    body: (
      <>
        <ul className="list-disc pl-5">
          <li><strong>No objective</strong> — activity measured against nothing.</li>
          <li><strong>Five platforms, one person</strong> — thin content everywhere, strong content nowhere.</li>
          <li><strong>English-only in a Sinhala-and-Tamil market</strong> — paying more for less reach.</li>
          <li><strong>Boosting posts instead of building campaigns</strong> — no structure, no retargeting, no learning.</li>
          <li><strong>Price never shown</strong> — enquiry volume rises, qualified enquiries do not.</li>
          <li><strong>Nobody answering WhatsApp after 5pm</strong> — media spend paid for leads that go cold overnight.</li>
          <li><strong>Changing direction monthly</strong> — no campaign ever gets long enough to prove itself.</li>
          <li><strong>Copying a competitor's content but not their offer</strong> — the offer is what was working.</li>
        </ul>
      </>
    ),
  },
];

const faqs = [
  {
    q: "How long does it take to build a social media strategy?",
    a: "Two to three weeks for most businesses. Discovery and the audit take the first week, audience and competitor work plus the content and paid plan take the second, and the review and adjustments take the third.",
  },
  {
    q: "Do we need a strategy if we already post regularly?",
    a: "If you can already state your objective, your primary number and your paid structure, you have one. If posting continues because it is a habit rather than because it is tied to an outcome, a strategy will change what you get from the same effort.",
  },
  {
    q: "Can you build the strategy and let our team run it?",
    a: "Yes. The document is written so an in-house marketer or coordinator can execute it, and we can stay available for monthly reviews without managing the day-to-day.",
  },
  {
    q: "How much of the budget should be content and how much should be ads?",
    a: "It depends on the objective, but for lead-driven SMEs a common starting shape is a management and content fee plus an ad budget of at least the same order. We quote fees and spend separately so you always know which is which.",
  },
  {
    q: "Should we post in Sinhala, Tamil or English?",
    a: "Usually a mix, weighted by who buys from you. Mass-market consumer offers generally perform better in Sinhala, premium and B2B in English, and Tamil is often the cheapest untapped reach in the North, East and hill country.",
  },
  {
    q: "How often should the strategy be revisited?",
    a: "Quarterly for the strategy itself, monthly for performance. Rewriting direction every month prevents anything from being tested properly.",
  },
  {
    q: "Do you guarantee results?",
    a: "No, and no honest agency does. We commit to the objective, the structure, the reporting and the optimisation work, and we show real numbers each month, including the ones that did not go our way.",
  },
  {
    q: "Is a strategy worth it for a small business?",
    a: "Especially for a small business, because the budget is limited. Deciding not to be on three platforms and not to run five vague campaigns is where most of the saving comes from.",
  },
  {
    q: "Can a strategy work without paid advertising?",
    a: "It can build an audience slowly, and reels and referrals do help. But if you need enquiries inside a quarter, paid distribution is what makes the content reach people who do not already follow you.",
  },
  {
    q: "What do you need from us to start?",
    a: "Access to your existing pages and ad account, your current prices and offers, whatever performance history exists, and one person who can make decisions and answer questions about the business.",
  },
];

const relatedLinks = [
  { label: "Social Media Marketing", path: "/social-media-management-sri-lanka", desc: "Our main social media marketing and management service." },
  { label: "Social Media Advertising", path: "/social-media-advertising-sri-lanka", desc: "Paid social across Facebook, Instagram, TikTok and LinkedIn." },
  { label: "Social Media Campaigns", path: "/social-media-campaigns-sri-lanka", desc: "Launches, seasonal pushes and lead generation campaigns." },
  { label: "Content Creation", path: "/social-media-content-creation-sri-lanka", desc: "Posts, reels, carousels, copy and monthly calendars." },
  { label: "Lead Generation", path: "/social-media-lead-generation-sri-lanka", desc: "Turning social activity into qualified enquiries." },
  { label: "Social Media Audit", path: "/social-media-audit-sri-lanka", desc: "A review of your pages, content, ads and response times." },
  { label: "Packages & Pricing", path: "/social-media-marketing-packages-sri-lanka", desc: "Real monthly rates with ad spend quoted separately." },
  { label: "Facebook Ads", path: "/facebook-ads-sri-lanka", desc: "Facebook advertising management and lead campaigns." },
];

const SocialMediaStrategy = () => (
  <SocialClusterLayout
    metaTitle="Social Media Strategy Sri Lanka | Strategy Agency & Planning | Cypher Digital"
    metaDescription="Social media strategy services in Sri Lanka — objectives, audience research, platform selection, content themes, paid media structure and measurement, written as a plan your team can execute."
    canonical="/social-media-strategy-sri-lanka"
    breadcrumbLabel="Social Media Strategy"
    eyebrow="Social Media Strategy Sri Lanka"
    h1="Social Media Strategy in Sri Lanka"
    heroLead="A written plan that decides your objective, audience, platforms, content, ad budget structure and the number you will judge it by — before anyone designs a post."
    heroPoints={[
      "Objectives tied to bookings, enquiries or sales",
      "Sinhala, Tamil and English audience planning",
      "Platform choice instead of being everywhere",
      "Content themes with a first-month calendar",
      "Paid budget split across cold, warm and conversion",
      "Reporting and review rhythm agreed upfront",
    ]}
    serviceName="Social Media Strategy Sri Lanka"
    serviceDescription="Social media strategy development for Sri Lankan businesses: objectives, audience research, competitor analysis, platform selection, content planning, paid media structure, lead handling and measurement."
    sections={sections}
    faqs={faqs}
    relatedLinks={relatedLinks}
    whatsappMessage="Hi Cypher Digital, I'd like to discuss a social media strategy for my business."
    finalCtaHeading="Ready to plan social media around business results?"
    finalCtaLead="Tell us your objective, your industry and your monthly budget. We will come back with a realistic strategy outline — platforms, content, ad structure and the numbers to watch — before you commit to anything."
    formService="Social Media Strategy"
  />
);

export default SocialMediaStrategy;
