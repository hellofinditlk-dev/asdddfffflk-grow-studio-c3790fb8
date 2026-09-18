import SocialClusterLayout, { ClusterSection } from "@/components/SocialClusterLayout";
import { Link } from "react-router-dom";

const L = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} className="text-primary hover:underline">
    {children}
  </Link>
);

const sections: ClusterSection[] = [
  {
    id: "what-a-consultant-does",
    h2: "What a social media consultant actually does",
    intro:
      "A consultant advises, plans and trains. An agency executes. Consulting suits businesses that already have people who can do the work but need direction, standards and someone to check the numbers honestly.",
    body: (
      <>
        <p>
          The typical Sri Lankan business that benefits from consulting has one or two marketing staff, a designer or an
          intern producing content, and a manager approving posts. The work happens — it just is not aimed at anything
          measurable, and nobody in the room has run paid campaigns at scale before.
        </p>
        <p>
          Consulting fills that gap: decide the objective, set the plan, structure the ad account, define the standards,
          train the team, then review results monthly. Full execution stays available under{" "}
          <L to="/social-media-management-sri-lanka">social media marketing services</L> if you would rather hand it over.
        </p>
      </>
    ),
  },
  {
    id: "when-you-need-one",
    h2: "When a business needs a consultant instead of an agency",
    body: (
      <>
        <ul className="list-disc pl-5">
          <li>You have in-house staff whose time is already paid for, and outsourcing everything would duplicate cost.</li>
          <li>Your content must be produced internally for confidentiality, compliance or speed reasons.</li>
          <li>You have hired a marketing executive who is capable but new to paid campaigns.</li>
          <li>You have worked with two or three agencies and want to build the capability internally instead.</li>
          <li>You need someone independent to review an agency's work and reporting.</li>
          <li>You are about to increase ad spend significantly and want the structure right first.</li>
          <li>You need a plan and standards, not a monthly retainer to post on your behalf.</li>
        </ul>
      </>
    ),
  },
  {
    id: "consultant-vs-agency",
    h2: "Consultant versus agency: an honest comparison",
    body: (
      <>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-lg">
            <thead className="bg-secondary/60">
              <tr>
                <th className="text-left p-3 font-semibold text-foreground">Consideration</th>
                <th className="text-left p-3 font-semibold text-foreground">Consultant</th>
                <th className="text-left p-3 font-semibold text-foreground">Agency</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border">
                <td className="p-3">Who does the work</td>
                <td className="p-3">Your team, guided</td>
                <td className="p-3">The agency, end to end</td>
              </tr>
              <tr className="border-t border-border">
                <td className="p-3">Best when</td>
                <td className="p-3">Internal capacity exists</td>
                <td className="p-3">No internal capacity or time</td>
              </tr>
              <tr className="border-t border-border">
                <td className="p-3">Production capability</td>
                <td className="p-3">Limited to what your team can make</td>
                <td className="p-3">Shoots, design, editing included</td>
              </tr>
              <tr className="border-t border-border">
                <td className="p-3">Speed to launch</td>
                <td className="p-3">Depends on your team</td>
                <td className="p-3">Faster, resourced immediately</td>
              </tr>
              <tr className="border-t border-border">
                <td className="p-3">Knowledge left behind</td>
                <td className="p-3">Stays with your staff</td>
                <td className="p-3">Stays largely with the agency</td>
              </tr>
              <tr className="border-t border-border">
                <td className="p-3">Ongoing cost shape</td>
                <td className="p-3">Advisory time, usually lower</td>
                <td className="p-3">Retainer covering production and management</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Neither is universally better. A hotel with no in-house designer needs an agency. A group with three marketing
          staff and a video editor usually gets more from consulting. Package rates for full execution are on the{" "}
          <L to="/social-media-marketing-packages-sri-lanka">packages page</L> if you want to compare.
        </p>
      </>
    ),
  },
  {
    id: "audit-and-diagnosis",
    h2: "Starting point: audit and diagnosis",
    body: (
      <>
        <p>
          Every consulting engagement starts with a review of what exists — pages, content, ad account, response times and
          reporting. Advising without that is guesswork.
        </p>
        <p>
          The full scope of that review is described on our{" "}
          <L to="/social-media-audit-sri-lanka">social media audit page</L>. In a consulting engagement it becomes the
          first two weeks of work and produces the priority list everything else follows.
        </p>
      </>
    ),
  },
  {
    id: "strategy-planning",
    h2: "Strategy and campaign planning",
    body: (
      <>
        <p>
          Next comes the plan: objective, audience, platforms, content themes, offers, campaign calendar and budget split.
          Written so your team can execute it without needing to ask what was meant.
        </p>
        <p>
          Consulting output here is usually a short strategy document, a first-quarter campaign calendar, and a content
          calendar template your team can keep using. The method is the same one described under{" "}
          <L to="/social-media-strategy-sri-lanka">social media strategy</L>, delivered as advisory work rather than a
          managed service.
        </p>
      </>
    ),
  },
  {
    id: "platform-guidance",
    h2: "Platform selection and channel guidance",
    body: (
      <>
        <p>
          A common consulting decision is what to stop. Businesses arrive maintaining five accounts and get more from two
          done well. We assess where your buyers actually are — by age, district, language and category — and recommend a
          primary and secondary platform, with the rest paused or reduced to a holding presence.
        </p>
        <p>
          Platform-specific detail lives on our{" "}
          <L to="/facebook-ads-sri-lanka">Facebook</L>,{" "}
          <L to="/instagram-marketing-sri-lanka">Instagram</L>,{" "}
          <L to="/tiktok-marketing-sri-lanka">TikTok</L> and{" "}
          <L to="/linkedin-marketing-sri-lanka">LinkedIn</L> pages.
        </p>
      </>
    ),
  },
  {
    id: "content-standards",
    h2: "Content planning and production standards",
    body: (
      <>
        <p>
          Where your team produces the content, our job is to make it consistently good enough. That means standards, not
          opinions after the fact.
        </p>
        <ul className="list-disc pl-5">
          <li>Design rules: palette, two typefaces, logo placement, minimum text size for mobile.</li>
          <li>Caption structure: hook line, offer, location, one clear instruction.</li>
          <li>Reel rules: vertical, first-second hook, captions burned in, one idea per reel.</li>
          <li>A monthly calendar template with theme allocation.</li>
          <li>A shoot planning checklist so one day yields a month of assets.</li>
          <li>An approval workflow with one reviewer and one revision round.</li>
        </ul>
        <p>
          Where a specific asset is beyond your team's capability, we say so and quote it separately rather than letting
          quality slip. Production options are on our{" "}
          <L to="/social-media-content-creation-sri-lanka">content creation</L> and{" "}
          <L to="/reel-creation-sri-lanka">reel creation</L> pages.
        </p>
      </>
    ),
  },
  {
    id: "paid-advertising-guidance",
    h2: "Paid advertising guidance and account structure",
    body: (
      <>
        <p>
          This is where most in-house teams need the most help, because mistakes here are expensive and not obvious.
          Consulting covers:
        </p>
        <ul className="list-disc pl-5">
          <li>Business Manager, ad account, pixel and asset ownership set up in your name.</li>
          <li>Campaign structure by objective, with enough budget per ad set to learn.</li>
          <li>Audience build: interest, location, custom, lookalike and exclusion sets.</li>
          <li>Retargeting layers, which most accounts are missing entirely.</li>
          <li>Creative testing discipline: what to change, one variable at a time.</li>
          <li>Budget split across cold, warm and conversion campaigns.</li>
          <li>When to leave a campaign alone, which is more often than people expect.</li>
        </ul>
        <p>
          Managed paid campaigns are covered under{" "}
          <L to="/social-media-advertising-sri-lanka">social media advertising</L> if you would rather we run them.
        </p>
      </>
    ),
  },
  {
    id: "lead-process",
    h2: "Lead handling and sales process advice",
    body: (
      <>
        <p>
          A consultant who only looks at ads misses the biggest available gain. We review what happens after the enquiry:
          who answers, how fast, in which language, what they ask, where the lead is recorded and who follows up.
        </p>
        <p>
          Typical recommendations include WhatsApp quick replies for the five most common questions, a qualification script,
          a shared lead sheet with source tracking, and a day-two and day-seven follow-up rule. Detail on our{" "}
          <L to="/social-media-lead-generation-sri-lanka">lead generation page</L>.
        </p>
      </>
    ),
  },
  {
    id: "analytics",
    h2: "Analytics, reporting and review",
    body: (
      <>
        <p>
          We set up the report your management team will actually read: spend, enquiries, cost per enquiry, qualified leads,
          cost per qualified lead, and outcomes where they are recorded. One page, monthly, same format every time so the
          trend is visible.
        </p>
        <p>
          Then we sit in the review. The value of an outside voice in that meeting is candour — saying that a campaign is
          not working, that a creative has fatigued, or that the problem this month was response time rather than media.
        </p>
      </>
    ),
  },
  {
    id: "training",
    h2: "Team training and capability building",
    body: (
      <>
        <p>
          Where a business wants the capability to stay in-house, we run practical sessions rather than lectures — working
          in your own accounts, on your own campaigns.
        </p>
        <ul className="list-disc pl-5">
          <li>Ads Manager: building a campaign, reading results, deciding what to change.</li>
          <li>Content planning: filling a monthly calendar from a shot list.</li>
          <li>Reel production on a phone, to a repeatable standard.</li>
          <li>Community management: replying, qualifying and escalating.</li>
          <li>Reporting: producing the monthly one-pager without help.</li>
        </ul>
        <p>
          The measure of success is that the team no longer needs the sessions.
        </p>
      </>
    ),
  },
  {
    id: "engagement-models",
    h2: "How consulting engagements are structured",
    body: (
      <>
        <h3>One-off strategy and audit</h3>
        <p>
          A fixed-scope piece of work: review, strategy, calendar templates, ad account structure and a walkthrough. Your
          team executes from there.
        </p>
        <h3>Monthly advisory retainer</h3>
        <p>
          A set amount of time each month: campaign review, calendar sign-off, ad account checks, the monthly review
          meeting, and availability for questions in between.
        </p>
        <h3>Project consulting</h3>
        <p>
          Attached to something specific — a launch, a new branch, an intake season, an event, a market entry — running for
          the length of that project only.
        </p>
        <h3>Training programme</h3>
        <p>
          A defined series of practical sessions for an in-house team, with materials they keep.
        </p>
        <p>
          Tell us which shape fits and we will quote it. We will also tell you if full management would genuinely serve you
          better than consulting, because a plan nobody has time to execute is not worth paying for.
        </p>
      </>
    ),
  },
  {
    id: "what-we-dont-promise",
    h2: "What we do not promise",
    body: (
      <>
        <ul className="list-disc pl-5">
          <li>No guaranteed follower counts, lead volumes or sales figures.</li>
          <li>No claims about results we cannot show in your own account data.</li>
          <li>No borrowed case studies from businesses that are not ours.</li>
          <li>No advice to spend more before the free fixes have been made.</li>
          <li>No recommendation to be on a platform where your buyers are not.</li>
        </ul>
        <p>
          What we do commit to is a clear plan, honest reporting, and telling you when something is not working while there
          is still budget left to change it.
        </p>
      </>
    ),
  },
];

const faqs = [
  { q: "What is the difference between hiring a consultant and an agency?", a: "A consultant plans, structures and trains while your team executes. An agency does the execution, including shoots, design and campaign management. Consulting suits businesses that already have marketing staff." },
  { q: "Do you work with in-house marketing teams?", a: "Yes, that is the most common consulting arrangement — a marketing executive or small team doing the day-to-day, with us setting direction and reviewing results monthly." },
  { q: "Can you review the work of our current agency?", a: "Yes. We look at the accounts and the reporting and tell you what they show, including where the work is sound. The aim is an accurate picture, not a reason to switch." },
  { q: "How long does a consulting engagement usually run?", a: "One-off strategy work takes a few weeks. Advisory retainers typically run three to six months, which is long enough for campaigns to produce meaningful data." },
  { q: "Do you train staff to run ads themselves?", a: "Yes, in your own ad account with your own campaigns. Practical sessions work far better than theory, and the team keeps the capability." },
  { q: "Will you also produce content if our team cannot?", a: "We can, quoted separately. If a particular asset is beyond your team's capability we will say so rather than let the standard drop." },
  { q: "Do you consult for businesses outside Colombo?", a: "Yes. Reviews and sessions run online, and we travel for planning meetings and shoots where a project needs it." },
  { q: "How much does consulting cost?", a: "It depends on scope and time. Tell us your team size, platforms and ad spend on WhatsApp and we will quote before any work begins." },
  { q: "Can consulting work alongside a freelancer we already use?", a: "Yes, and it often works well. The freelancer produces, we set standards and review performance, and you keep the lower production cost." },
  { q: "What if the audit shows we should hire an agency instead?", a: "We will say so. If your team genuinely does not have the time or the production capability, a plan they cannot execute is a waste of your money." },
];

const relatedLinks = [
  { label: "Social Media Marketing", path: "/social-media-management-sri-lanka", desc: "Full management if you would rather hand it over." },
  { label: "Social Media Audit", path: "/social-media-audit-sri-lanka", desc: "The review that starts every engagement." },
  { label: "Social Media Strategy", path: "/social-media-strategy-sri-lanka", desc: "The written plan your team executes." },
  { label: "Social Media Advertising", path: "/social-media-advertising-sri-lanka", desc: "Managed paid campaigns across platforms." },
  { label: "Lead Generation", path: "/social-media-lead-generation-sri-lanka", desc: "Enquiry routes, qualification and follow-up." },
  { label: "Content Creation", path: "/social-media-content-creation-sri-lanka", desc: "Production support where your team cannot." },
  { label: "Facebook Ads", path: "/facebook-ads-sri-lanka", desc: "Facebook campaign structure and management." },
  { label: "Packages & Pricing", path: "/social-media-marketing-packages-sri-lanka", desc: "Compare consulting against full management rates." },
];

const SocialMediaConsultant = () => (
  <SocialClusterLayout
    metaTitle="Social Media Consultant Sri Lanka | Strategy, Ads & Team Training | Cypher Digital"
    metaDescription="Social media consultant in Sri Lanka — audits, strategy, ad account structure, content standards, lead process advice and in-house team training for businesses with their own marketing staff."
    canonical="/social-media-consultant-sri-lanka"
    breadcrumbLabel="Social Media Consultant"
    eyebrow="Social Media Consultant Sri Lanka"
    h1="Social Media Consultant in Sri Lanka"
    heroLead="For businesses with their own marketing people: direction, ad account structure, content standards, honest reviews and practical training — so the capability stays in-house."
    heroPoints={[
      "Audit and diagnosis before any advice",
      "Written strategy your team can execute",
      "Ad account structure and retargeting setup",
      "Content and design standards, not opinions",
      "Lead handling and follow-up process advice",
      "Practical training in your own accounts",
    ]}
    serviceName="Social Media Consultant Sri Lanka"
    serviceDescription="Social media consulting for Sri Lankan businesses: audits, strategy development, platform selection, content standards, paid advertising account structure, lead process design, reporting setup and in-house team training."
    sections={sections}
    faqs={faqs}
    relatedLinks={relatedLinks}
    whatsappMessage="Hi Cypher Digital, I'd like to discuss social media consulting for my business."
    finalCtaHeading="Want direction rather than a done-for-you retainer?"
    finalCtaLead="Tell us your team size, the platforms you run and your monthly ad spend. We will recommend a consulting shape that fits — and say honestly if full management would serve you better."
    formService="Social Media Consulting"
  />
);

export default SocialMediaConsultant;
