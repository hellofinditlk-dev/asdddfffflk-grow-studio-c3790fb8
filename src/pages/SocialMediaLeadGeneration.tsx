import SocialClusterLayout, { ClusterSection } from "@/components/SocialClusterLayout";
import { Link } from "react-router-dom";

const L = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} className="text-primary hover:underline">
    {children}
  </Link>
);

const sections: ClusterSection[] = [
  {
    id: "what-it-means",
    h2: "What social media lead generation means in practice",
    intro:
      "A lead is a named person with a contact number who has shown intent. Not a like, not a follower, not a reach figure. Lead generation is the work of producing those contacts at a cost the business can afford, and making sure someone follows up.",
    body: (
      <>
        <p>
          In Sri Lanka almost every lead route ends in the same place: a WhatsApp conversation. That single fact shapes
          how campaigns should be built. The ad's job is to start a message; the business's job is to answer it while the
          person is still interested.
        </p>
        <p>
          We build lead generation as a full path — offer, creative, enquiry route, qualification, response, follow-up and
          reporting. Any weak link in that chain wastes the media spend that came before it. The wider paid mechanics sit
          under <L to="/social-media-advertising-sri-lanka">social media advertising</L>, and the ongoing content that
          supports trust under <L to="/social-media-management-sri-lanka">social media marketing services</L>.
        </p>
      </>
    ),
  },
  {
    id: "offer",
    h2: "The offer decides the cost per lead",
    body: (
      <>
        <p>
          Targeting gets blamed for expensive leads far more often than it deserves. Usually the offer is the problem. "
          Contact us for more details" asks the customer to do the work. A specific, dated, priced offer does the work for
          them.
        </p>
        <h3>Offers that generate enquiries locally</h3>
        <ul className="list-disc pl-5">
          <li><strong>Education</strong> — intake deadline plus fee structure and a free counselling session.</li>
          <li><strong>Real estate</strong> — a price range, payment plan and a booked site visit slot.</li>
          <li><strong>Healthcare and dental</strong> — a named consultation or checkup at a stated price.</li>
          <li><strong>Hotels</strong> — a dated package with the rate and what is included, direct booking only.</li>
          <li><strong>Automotive</strong> — a service package price or a trade-in valuation appointment.</li>
          <li><strong>Home services</strong> — a free site measurement or quotation visit.</li>
          <li><strong>B2B</strong> — a specific assessment or audit rather than a general meeting.</li>
        </ul>
        <p>
          Showing price reduces total enquiries and increases qualified ones. For most businesses that trade is worth
          making, because the sales team's time is the scarcer resource.
        </p>
      </>
    ),
  },
  {
    id: "routes",
    h2: "Choosing the enquiry route",
    body: (
      <>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-lg">
            <thead className="bg-secondary/60">
              <tr>
                <th className="text-left p-3 font-semibold text-foreground">Route</th>
                <th className="text-left p-3 font-semibold text-foreground">Best for</th>
                <th className="text-left p-3 font-semibold text-foreground">Trade-off</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border">
                <td className="p-3">Click-to-WhatsApp</td>
                <td className="p-3">Most SME categories in Sri Lanka</td>
                <td className="p-3">Needs someone answering during working hours</td>
              </tr>
              <tr className="border-t border-border">
                <td className="p-3">Instant lead form</td>
                <td className="p-3">High volume, education, insurance, property</td>
                <td className="p-3">Cheap leads, lower intent; qualification questions essential</td>
              </tr>
              <tr className="border-t border-border">
                <td className="p-3">Messenger</td>
                <td className="p-3">Facebook-heavy audiences, retail and services</td>
                <td className="p-3">Conversations get missed if the inbox is unmanaged</td>
              </tr>
              <tr className="border-t border-border">
                <td className="p-3">Landing page form</td>
                <td className="p-3">Considered purchases, B2B, higher-value services</td>
                <td className="p-3">Fewer leads, better qualified; page speed matters</td>
              </tr>
              <tr className="border-t border-border">
                <td className="p-3">Call now</td>
                <td className="p-3">Urgent services, repairs, medical, towing</td>
                <td className="p-3">Missed calls are lost leads; needs call tracking</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          We often run two routes in parallel for the same offer and compare cost per qualified lead rather than cost per
          lead. A form lead at LKR 300 that never answers the phone is more expensive than a WhatsApp lead at LKR 900 that
          books.
        </p>
      </>
    ),
  },
  {
    id: "lead-ads",
    h2: "Facebook and Instagram lead ads done properly",
    body: (
      <>
        <p>
          Instant forms are the fastest way to volume and the fastest way to junk. Three things separate the two:
        </p>
        <ul className="list-disc pl-5">
          <li>
            <strong>Add a qualifying question.</strong> Budget range, preferred location, intake month, vehicle model.
            One friction question removes most accidental submissions.
          </li>
          <li>
            <strong>Use the higher-intent form setting.</strong> Requiring a review step before submission costs some
            volume and improves quality noticeably.
          </li>
          <li>
            <strong>Pre-fill less, verify more.</strong> Auto-filled phone numbers are often out of date. Asking the
            person to confirm the number they use on WhatsApp fixes a large share of unreachable leads.
          </li>
        </ul>
        <p>
          Campaign structure, targeting and creative testing for these are covered on our{" "}
          <L to="/facebook-ads-sri-lanka">Facebook Ads page</L>.
        </p>
      </>
    ),
  },
  {
    id: "landing-pages",
    h2: "When a landing page beats an in-platform form",
    body: (
      <>
        <p>
          Higher-value and longer-consideration purchases justify a landing page: apartments, degrees, medical procedures,
          machinery, corporate services. The page can carry proof that an ad cannot — floor plans, fee tables, credentials,
          photos, FAQs.
        </p>
        <h3>What a landing page needs to convert here</h3>
        <ul className="list-disc pl-5">
          <li>Loads fast on mobile data, because that is how it will be opened.</li>
          <li>The offer and price visible without scrolling.</li>
          <li>A WhatsApp button as well as a form — many visitors will not type an email.</li>
          <li>Short form: name, phone, and one qualifying field. Nothing optional.</li>
          <li>Proof directly beneath the form, not at the bottom of the page.</li>
        </ul>
      </>
    ),
  },
  {
    id: "qualification",
    h2: "Qualification: separating buyers from browsers",
    body: (
      <>
        <p>
          Qualification should happen in the first two messages, not after three days of conversation. A simple script
          keeps it fast and polite.
        </p>
        <ul className="list-disc pl-5">
          <li>Confirm what they are enquiring about, specifically.</li>
          <li>Confirm timeline — this month, next quarter, or just researching.</li>
          <li>Confirm budget or price range, stated as a range so it is easy to answer.</li>
          <li>Confirm location or branch relevance.</li>
          <li>Confirm the next step: appointment, site visit, quotation, booking.</li>
        </ul>
        <p>
          Leads that fail qualification are not wasted. They go into retargeting audiences and seasonal follow-up, which is
          where a meaningful share of later bookings comes from.
        </p>
      </>
    ),
  },
  {
    id: "response-speed",
    h2: "Response speed is the cheapest improvement available",
    body: (
      <>
        <p>
          Of all the things that change lead-to-sale conversion, response time is the one that costs no media money.
          Enquiries answered within minutes convert noticeably better than those answered the next morning, because the
          person is still on their phone and still comparing options.
        </p>
        <h3>What we set up with clients</h3>
        <ul className="list-disc pl-5">
          <li>A named person responsible for the inbox during working hours, with a backup.</li>
          <li>WhatsApp quick replies for the five questions that arrive most often.</li>
          <li>An after-hours auto-reply that sets a real expectation and asks the qualifying question anyway.</li>
          <li>Language routing so Sinhala and Tamil enquiries reach someone who can answer comfortably.</li>
          <li>A rule that no enquiry closes without a recorded outcome.</li>
        </ul>
      </>
    ),
  },
  {
    id: "crm",
    h2: "Recording and following up leads",
    body: (
      <>
        <p>
          Leads sitting in a phone inbox are leads that will be lost when the staff member changes. A basic record — even
          a shared sheet — beats no system, and it makes the campaign measurable beyond the ad platform.
        </p>
        <p>
          The minimum useful fields: date, name, number, source campaign, what they asked for, qualification outcome, next
          action date, and final result. With those, you can calculate cost per qualified lead and cost per customer
          instead of guessing.
        </p>
        <h3>The follow-up rhythm that recovers lost leads</h3>
        <ul className="list-disc pl-5">
          <li>Day 0 — respond and qualify.</li>
          <li>Day 2 — one follow-up with something new: a photo, a document, an availability update.</li>
          <li>Day 7 — final follow-up with the offer deadline.</li>
          <li>Later — add to retargeting and contact again at the next season or intake.</li>
        </ul>
      </>
    ),
  },
  {
    id: "retargeting",
    h2: "Retargeting the people who almost enquired",
    body: (
      <>
        <p>
          Most people who see a lead ad do not act the first time. Retargeting picks them up cheaply: video viewers past
          fifteen seconds, page engagers, form openers who did not submit, message starters who went quiet, and website
          visitors.
        </p>
        <p>
          Retargeting creative should not repeat the first ad. It should answer the reason for hesitation — price clarity,
          payment plans, location, warranty, proof of previous work, or a deadline. Roughly a third of a lead budget in
          warm audiences is a sensible starting point, adjusted by how much traffic the cold campaigns generate.
        </p>
      </>
    ),
  },
  {
    id: "cost-per-lead",
    h2: "What drives cost per lead in Sri Lanka",
    body: (
      <>
        <p>
          We do not publish fixed cost-per-lead figures, because anyone who does is either guessing or quoting one
          favourable month. What we can be precise about is what moves the number:
        </p>
        <ul className="list-disc pl-5">
          <li><strong>Category competition</strong> — property, education and insurance are contested; niche B2B is not.</li>
          <li><strong>Offer strength</strong> — a dated, priced offer beats a general enquiry request every time.</li>
          <li><strong>Creative fatigue</strong> — the same ad running eight weeks gets steadily more expensive.</li>
          <li><strong>Audience size</strong> — very narrow targeting in a small market raises frequency and cost.</li>
          <li><strong>Route chosen</strong> — instant forms are cheaper per lead, WhatsApp cheaper per customer.</li>
          <li><strong>Season</strong> — festival and intake periods raise auction prices across the board.</li>
          <li><strong>Response speed</strong> — does not change cost per lead, but changes cost per customer sharply.</li>
        </ul>
        <p>
          After the first four to six weeks of running, we can give you a real range for your category from your own data.
          Management fees and package inclusions are on the{" "}
          <L to="/social-media-marketing-packages-sri-lanka">packages page</L>.
        </p>
      </>
    ),
  },
  {
    id: "industries",
    h2: "How lead generation differs by industry",
    body: (
      <>
        <h3>Education</h3>
        <p>Intake-driven. Campaign windows before January and May, fee transparency, counselling appointments, and fast Sinhala and Tamil response.</p>
        <h3>Real estate</h3>
        <p>Fewer, better leads. Price range and payment plan in the ad, site visit as the conversion event, heavy retargeting on walk-through video viewers.</p>
        <h3>Healthcare and dental</h3>
        <p>Careful claims, named consultations, clear appointment instructions, and reassurance content rather than discount language.</p>
        <h3>Hotels and travel</h3>
        <p>Seasonal, direct-booking focused, dated packages, and retargeting of people who viewed rooms but did not enquire.</p>
        <h3>Automotive</h3>
        <p>Model-specific creative, service package pricing, trade-in valuations, and workshop appointment booking.</p>
        <h3>Home services and construction</h3>
        <p>Free measurement or quotation visits, completed project proof, district targeting, and quick site-visit scheduling.</p>
        <h3>B2B and professional services</h3>
        <p>LinkedIn alongside Facebook, a specific assessment offer, longer nurture, and lead scoring by company type. See <L to="/linkedin-marketing-sri-lanka">LinkedIn marketing</L>.</p>
      </>
    ),
  },
  {
    id: "reporting",
    h2: "Reporting we provide on lead campaigns",
    body: (
      <>
        <p>
          Monthly, in plain numbers: spend, leads, cost per lead, qualified leads, cost per qualified lead, outcomes where
          you record them, and the creative and audience breakdown behind those figures. Plus what we changed and what we
          will change next.
        </p>
        <p>
          Where sales outcomes are shared with us, we report cost per customer too — which is the only number that
          actually decides whether the campaign is profitable. Campaign-level planning is set out under{" "}
          <L to="/social-media-campaigns-sri-lanka">social media campaigns</L>.
        </p>
      </>
    ),
  },
];

const faqs = [
  { q: "How quickly can a lead campaign start producing enquiries?", a: "Usually within the first week of going live, provided the offer and creative are ready. The first two to four weeks are about learning which audience and creative combination is cheapest, so early numbers move a lot." },
  { q: "Which is better, WhatsApp or an instant lead form?", a: "Forms give more leads for the money; WhatsApp gives better conversations. For most Sri Lankan SMEs WhatsApp produces a lower cost per customer, and we often test both against the same offer." },
  { q: "Can you guarantee a number of leads per month?", a: "No. We can commit to the structure, the testing and the reporting, and after the first month we can give you a realistic range based on your own data rather than a promise made before we start." },
  { q: "Why are our leads low quality?", a: "Most often the offer is vague, the form has no qualifying question, or the targeting is too broad for a high-value product. Adding one qualifying question and stating a price range usually fixes it." },
  { q: "Do you handle the follow-up as well?", a: "We set up the response process, scripts, quick replies and recording, and we report on it. The conversations themselves are usually handled by your team, since they know your product and pricing best." },
  { q: "Do we need a landing page?", a: "For higher-value or considered purchases, yes — it carries proof an ad cannot. For quick services and offers, click-to-WhatsApp usually converts better and costs less to build." },
  { q: "How much ad budget do we need to start?", a: "Enough for the platform to learn — a small daily budget spread across several audiences learns nothing. We will tell you honestly if the budget is too thin for the objective instead of taking it anyway." },
  { q: "Can you track which ad produced a customer?", a: "Yes, with campaign-level enquiry recording and a simple field in your lead sheet. Without that step, everything after the click becomes guesswork." },
  { q: "Is lead generation possible without showing prices?", a: "It is, but expect more enquiries and fewer buyers. Showing a range is usually the better trade unless pricing is genuinely custom, in which case give a starting point." },
  { q: "What if we already run ads but the leads go nowhere?", a: "That is usually a response and follow-up problem, not a media one. An audit of the current setup will show where enquiries are being lost before we recommend spending more." },
];

const relatedLinks = [
  { label: "Social Media Marketing", path: "/social-media-management-sri-lanka", desc: "Our main social media marketing and management service." },
  { label: "Social Media Advertising", path: "/social-media-advertising-sri-lanka", desc: "The paid campaigns behind lead generation." },
  { label: "Facebook Ads", path: "/facebook-ads-sri-lanka", desc: "Facebook lead ads, targeting and retargeting." },
  { label: "Social Media Campaigns", path: "/social-media-campaigns-sri-lanka", desc: "Campaign objectives, phasing and offers." },
  { label: "Social Media Strategy", path: "/social-media-strategy-sri-lanka", desc: "The plan that decides objectives and budget split." },
  { label: "Social Media Audit", path: "/social-media-audit-sri-lanka", desc: "Find where enquiries are being lost today." },
  { label: "LinkedIn Marketing", path: "/linkedin-marketing-sri-lanka", desc: "B2B lead generation and professional audiences." },
  { label: "Packages & Pricing", path: "/social-media-marketing-packages-sri-lanka", desc: "Monthly rates with ad spend quoted separately." },
];

const SocialMediaLeadGeneration = () => (
  <SocialClusterLayout
    metaTitle="Social Media Lead Generation Sri Lanka | Facebook & WhatsApp Leads | Cypher Digital"
    metaDescription="Social media lead generation in Sri Lanka — Facebook and Instagram lead ads, click-to-WhatsApp campaigns, landing pages, qualification, follow-up and cost per qualified lead reporting."
    canonical="/social-media-lead-generation-sri-lanka"
    breadcrumbLabel="Lead Generation"
    eyebrow="Social Media Lead Generation Sri Lanka"
    h1="Social Media Lead Generation in Sri Lanka"
    heroLead="Campaigns built to produce named enquiries with phone numbers — plus the offer, qualification and follow-up process that turns them into customers."
    heroPoints={[
      "Facebook and Instagram lead ads with qualifying questions",
      "Click-to-WhatsApp campaigns built for Sri Lankan buyers",
      "Landing pages for higher-value purchases",
      "Qualification scripts and response-time setup",
      "Retargeting for people who almost enquired",
      "Cost per qualified lead reported monthly",
    ]}
    serviceName="Social Media Lead Generation Sri Lanka"
    serviceDescription="Lead generation through social media for Sri Lankan businesses: Facebook and Instagram lead ads, click-to-WhatsApp campaigns, landing pages, lead qualification, follow-up processes, retargeting and cost per lead reporting."
    sections={sections}
    faqs={faqs}
    relatedLinks={relatedLinks}
    whatsappMessage="Hi Cypher Digital, I'd like to discuss social media lead generation for my business."
    finalCtaHeading="Want enquiries you can actually follow up?"
    finalCtaLead="Tell us what you sell, which areas you serve and your monthly budget. We will come back with a realistic lead generation plan — offer, route, targeting and reporting — with no guaranteed-lead promises."
    formService="Social Media Lead Generation"
  />
);

export default SocialMediaLeadGeneration;
