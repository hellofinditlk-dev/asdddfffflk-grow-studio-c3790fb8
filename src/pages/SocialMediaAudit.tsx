import SocialClusterLayout, { ClusterSection } from "@/components/SocialClusterLayout";
import { Link } from "react-router-dom";

const L = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} className="text-primary hover:underline">
    {children}
  </Link>
);

const sections: ClusterSection[] = [
  {
    id: "what-is-an-audit",
    h2: "What a social media audit is — and what it is not",
    intro:
      "An audit is a structured review of what your social media presence is currently doing, what it is costing, and where enquiries are being lost. It ends with a written list of fixes in priority order, not a sales pitch.",
    body: (
      <>
        <p>
          Most businesses asking for an audit are not starting from zero. There is a Facebook page with a few thousand
          followers, an Instagram account that was active last year, some boosted posts, and a general sense that the money
          is not producing much. The audit's job is to replace that feeling with specifics.
        </p>
        <p>
          It is not a strategy document — that comes after, and is covered under{" "}
          <L to="/social-media-strategy-sri-lanka">social media strategy</L>. The audit tells you the current state and the
          fastest available improvements, including the ones you can make yourself without hiring anyone.
        </p>
      </>
    ),
  },
  {
    id: "profiles",
    h2: "Profile and page setup review",
    body: (
      <>
        <p>
          The dull items on this list quietly cost enquiries every week, and all of them are free to fix.
        </p>
        <ul className="list-disc pl-5">
          <li>Page name, username and category — wrong categories limit which features and calls to action are available.</li>
          <li>About and bio text: does it say what you sell, where you are, and how to contact you?</li>
          <li>Profile and cover images: readable at thumbnail size, current branding, no stretched logos.</li>
          <li>Contact details: working phone number, WhatsApp link, correct address and map pin, opening hours.</li>
          <li>Call-to-action button set to the route you actually want — message, call or book.</li>
          <li>Instagram link-in-bio pointing somewhere useful and mobile-friendly.</li>
          <li>Business Manager, ad account and pixel ownership — a surprising number of businesses do not own their own assets.</li>
          <li>Admin access: who has it, and whether any former staff or agency still holds it.</li>
        </ul>
      </>
    ),
  },
  {
    id: "content-review",
    h2: "Content review",
    body: (
      <>
        <p>
          We pull the last three to six months of posts and look at them as a set rather than individually.
        </p>
        <ul className="list-disc pl-5">
          <li><strong>Volume and consistency</strong> — is there a rhythm, or good weeks followed by silence?</li>
          <li><strong>Format mix</strong> — how much video, how much static, whether reels exist at all.</li>
          <li><strong>Theme balance</strong> — proof, education, offer, behind-the-scenes, seasonal. Most pages are all offer.</li>
          <li><strong>Top and bottom performers</strong> — what actually earned reach, saves and shares, and what never moved.</li>
          <li><strong>Mobile legibility</strong> — text size, contrast, crop, safe areas for stories and reels.</li>
          <li><strong>Language use</strong> — Sinhala, Tamil and English mix against who your buyers actually are.</li>
          <li><strong>Reel mechanics</strong> — hook in the first second, captions, vertical framing, watch-through.</li>
        </ul>
        <p>
          The output is a short list of what to make more of and what to stop making. Production changes that follow are
          covered under <L to="/social-media-content-creation-sri-lanka">social media content creation</L>.
        </p>
      </>
    ),
  },
  {
    id: "branding",
    h2: "Branding and design consistency",
    body: (
      <>
        <p>
          We check whether the page looks like one company. Colours drifting across posts, three different typefaces,
          logos in four positions and inconsistent price-card layouts all reduce perceived credibility, which for
          considered purchases directly reduces enquiries.
        </p>
        <p>
          Where the basics are missing, the audit recommends a minimal set of rules — two typefaces, a fixed palette, one
          logo placement, one price-card template — rather than a full rebrand. Design standards are covered under{" "}
          <L to="/social-media-design-sri-lanka">social media design</L>.
        </p>
      </>
    ),
  },
  {
    id: "engagement",
    h2: "Engagement and response review",
    body: (
      <>
        <p>
          This is where most audits find the largest recoverable loss. We read the last few months of comments and, where
          you give us access, the message inbox.
        </p>
        <ul className="list-disc pl-5">
          <li>Unanswered comments — especially the ones asking price, location or availability.</li>
          <li>Average first response time, and what happens to messages after 5pm and at weekends.</li>
          <li>Whether enquiries are answered in the language they were sent in.</li>
          <li>Whether any conversation ends without a next step being offered.</li>
          <li>Reviews and recommendations: volume, ratings, and whether negative ones were addressed.</li>
          <li>Filtered or hidden messages nobody has ever opened.</li>
        </ul>
        <p>
          Fixing response speed and unanswered comments usually produces more enquiries than increasing the ad budget, and
          costs nothing in media.
        </p>
      </>
    ),
  },
  {
    id: "advertising",
    h2: "Advertising account review",
    body: (
      <>
        <p>
          With access to your ad account we review the last six to twelve months of spend, honestly.
        </p>
        <ul className="list-disc pl-5">
          <li><strong>Boosted posts versus structured campaigns</strong> — how much of the spend had no objective behind it.</li>
          <li><strong>Objective selection</strong> — engagement objectives used where leads or messages were wanted.</li>
          <li><strong>Account structure</strong> — too many small ad sets splitting the budget and stalling learning.</li>
          <li><strong>Audiences</strong> — over-narrow targeting, missing custom audiences, no lookalikes.</li>
          <li><strong>Retargeting</strong> — usually absent entirely, which is the cheapest gap to close.</li>
          <li><strong>Creative fatigue</strong> — the same asset running for months at rising cost.</li>
          <li><strong>Pixel and event setup</strong> — whether conversions are actually being recorded.</li>
          <li><strong>Cost per result trend</strong> — direction over time, not a single good month.</li>
        </ul>
        <p>
          Recommended restructuring is set out with reference to{" "}
          <L to="/social-media-advertising-sri-lanka">social media advertising</L> and{" "}
          <L to="/facebook-ads-sri-lanka">Facebook Ads</L>.
        </p>
      </>
    ),
  },
  {
    id: "competitors",
    h2: "Competitor comparison",
    body: (
      <>
        <p>
          We review three to five competitors in your category and district: publishing frequency, format mix, engagement,
          offers, and the ads they currently have live in Meta's public Ad Library.
        </p>
        <p>
          The useful output is not a scoreboard. It is the list of things the category has left undone — an unused format,
          an unanswered customer question, a language nobody is advertising in, a season everyone ignores. Those gaps are
          usually where the cheapest results are available.
        </p>
      </>
    ),
  },
  {
    id: "lead-path",
    h2: "Lead path and conversion review",
    body: (
      <>
        <p>
          We follow the path a real customer takes, on a phone, from ad to enquiry, and note every point where a person
          would reasonably give up.
        </p>
        <ul className="list-disc pl-5">
          <li>Is there a clear instruction on each post, or does the caption end without an ask?</li>
          <li>Does the WhatsApp link work, open with a useful pre-filled message, and reach a monitored number?</li>
          <li>Do landing pages load quickly on mobile data and show the offer without scrolling?</li>
          <li>Are forms short enough, with one qualifying question rather than six optional fields?</li>
          <li>Are enquiries recorded anywhere, or only in one person's phone?</li>
          <li>Is there any follow-up on day two and day seven?</li>
        </ul>
        <p>
          Recommendations here connect to{" "}
          <L to="/social-media-lead-generation-sri-lanka">social media lead generation</L>.
        </p>
      </>
    ),
  },
  {
    id: "deliverable",
    h2: "What you receive",
    body: (
      <>
        <ul className="list-disc pl-5">
          <li>A written review covering profiles, content, branding, engagement, advertising, competitors and the lead path.</li>
          <li>Screenshots and examples from your own accounts, so nothing is abstract.</li>
          <li>A prioritised fix list split into three groups: free fixes this week, changes needing production, and changes needing budget.</li>
          <li>An honest view of where current spend is being wasted.</li>
          <li>A recommended platform and content direction for the next quarter.</li>
          <li>A walkthrough call to go through the findings and answer questions.</li>
        </ul>
        <p>
          There is no obligation to work with us afterwards. Several clients have taken the fix list, applied it in-house,
          and come back months later for production or campaign management once the basics were in place.
        </p>
      </>
    ),
  },
  {
    id: "process",
    h2: "How the audit runs",
    body: (
      <>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Request</strong> — send us your page links on WhatsApp or through the form below.</li>
          <li><strong>Access</strong> — read access to insights and the ad account where you are comfortable sharing it; a page-only audit is still useful, just less precise on spend.</li>
          <li><strong>Review</strong> — several working days, depending on how much ad history exists.</li>
          <li><strong>Walkthrough</strong> — a call or meeting going through findings and priorities.</li>
          <li><strong>Your decision</strong> — fix it in-house, or ask us for a proposal. No pressure either way.</li>
        </ol>
      </>
    ),
  },
  {
    id: "who-needs-one",
    h2: "Signs your business needs an audit",
    body: (
      <>
        <ul className="list-disc pl-5">
          <li>You are spending on ads monthly but cannot say what it produced.</li>
          <li>Enquiries arrive but rarely convert, and nobody knows where they drop off.</li>
          <li>An agency or freelancer left and you are not sure what was set up or who owns the accounts.</li>
          <li>Reach and engagement have declined steadily over six months.</li>
          <li>Posting is consistent but the phone is not ringing.</li>
          <li>You are about to increase budget significantly and want to know the money will not be wasted.</li>
          <li>You are considering hiring an agency and want an independent view first.</li>
        </ul>
        <p>
          What we will not do is promise guaranteed rankings, guaranteed leads or a fixed percentage improvement. The audit
          tells you what is true now and what is worth fixing first.
        </p>
      </>
    ),
  },
];

const faqs = [
  { q: "How long does a social media audit take?", a: "Usually a few working days after we have access. Accounts with long advertising histories take longer because the spend review is the most detailed part." },
  { q: "What access do you need?", a: "Read access to page insights, and to the ad account if you want the spend reviewed. If you prefer not to share access, we can still audit everything publicly visible plus whatever screenshots you provide." },
  { q: "Do we have to hire you after the audit?", a: "No. The fix list is written so your own team can act on it. If you want us to implement, we will quote separately, and the quote is not part of the audit." },
  { q: "Will you tell us if our current agency is doing a good job?", a: "We will tell you what the accounts show, including where the work is sound. The point is an accurate picture, not a reason to switch providers." },
  { q: "Is an audit useful if we have never advertised?", a: "Yes. In that case it focuses on setup, content, branding, engagement and the lead path, and it tells you what to fix before spending anything on ads." },
  { q: "Do you audit TikTok and LinkedIn too?", a: "Yes, alongside Facebook and Instagram, where those accounts exist and matter to your audience." },
  { q: "Can you audit a competitor for us?", a: "We include a competitor comparison using publicly available information and Meta's Ad Library. We cannot access anyone's private account data, and we would not want an agency that could." },
  { q: "What is the most common problem you find?", a: "Unanswered messages and comments, followed closely by ad spend going into boosted posts with no objective or retargeting behind them." },
  { q: "Do you charge for the audit?", a: "Tell us the size of your accounts and ad history on WhatsApp and we will confirm scope and cost before starting. We do not begin work without you knowing what it costs." },
  { q: "What happens if the audit says our social media is fine?", a: "Then it says that, and points at the one or two areas with remaining upside. That is a legitimate outcome and a useful one." },
];

const relatedLinks = [
  { label: "Social Media Marketing", path: "/social-media-management-sri-lanka", desc: "Our main social media marketing and management service." },
  { label: "Social Media Strategy", path: "/social-media-strategy-sri-lanka", desc: "The plan built after the audit findings." },
  { label: "Social Media Consultant", path: "/social-media-consultant-sri-lanka", desc: "Advisory support without full management." },
  { label: "Social Media Advertising", path: "/social-media-advertising-sri-lanka", desc: "Restructuring paid campaigns properly." },
  { label: "Lead Generation", path: "/social-media-lead-generation-sri-lanka", desc: "Fixing the path from ad to enquiry." },
  { label: "Content Creation", path: "/social-media-content-creation-sri-lanka", desc: "Production that fills the gaps found." },
  { label: "Facebook Ads", path: "/facebook-ads-sri-lanka", desc: "Facebook campaign structure and retargeting." },
  { label: "Packages & Pricing", path: "/social-media-marketing-packages-sri-lanka", desc: "Monthly rates if you want us to implement." },
];

const SocialMediaAudit = () => (
  <SocialClusterLayout
    metaTitle="Social Media Audit Sri Lanka | Page, Content & Ad Account Review | Cypher Digital"
    metaDescription="Request a social media audit in Sri Lanka — a structured review of your Facebook, Instagram, TikTok and LinkedIn setup, content, branding, engagement, ad spend and lead path, with a prioritised fix list."
    canonical="/social-media-audit-sri-lanka"
    breadcrumbLabel="Social Media Audit"
    eyebrow="Social Media Audit Sri Lanka"
    h1="Social Media Audit in Sri Lanka"
    heroLead="A structured review of your pages, content, ad spend and enquiry path — ending with a prioritised fix list, including the free fixes you can make this week."
    heroPoints={[
      "Facebook, Instagram, TikTok and LinkedIn setup review",
      "Six months of content assessed against outcomes",
      "Ad account spend, structure and retargeting review",
      "Response times and unanswered enquiries checked",
      "Competitor comparison using public ad libraries",
      "Prioritised fix list, no obligation to hire us",
    ]}
    serviceName="Social Media Audit Sri Lanka"
    serviceDescription="Social media audit service for Sri Lankan businesses: profile and page setup review, content assessment, branding consistency, engagement and response review, advertising account analysis, competitor comparison and lead path review."
    sections={sections}
    faqs={faqs}
    relatedLinks={relatedLinks}
    whatsappMessage="Hi Cypher Digital, I'd like to request a social media audit for my business."
    finalCtaHeading="Request a Social Media Audit"
    finalCtaLead="Send us your page links and we will confirm the scope and cost before we start. You will get an honest picture of what is working, what is wasting money, and what to fix first — with no obligation to work with us."
    formService="Social Media Audit"
  />
);

export default SocialMediaAudit;
