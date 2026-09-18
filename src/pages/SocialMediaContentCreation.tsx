import SocialClusterLayout, { ClusterSection } from "@/components/SocialClusterLayout";
import { Link } from "react-router-dom";

const L = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} className="text-primary hover:underline">
    {children}
  </Link>
);

const sections: ClusterSection[] = [
  {
    id: "what-we-produce",
    h2: "What social media content creation covers",
    intro:
      "Content creation is everything between a plan and a published post: the shoot, the design, the edit, the copy, the approval and the schedule. Done properly it is a production process, not a burst of inspiration.",
    body: (
      <>
        <p>
          Most Sri Lankan businesses do not run out of ideas. They run out of finished assets. The photo was taken but
          never edited, the reel was shot but never captioned, the offer changed but the design did not. Content creation
          as a service exists to make sure something good is ready on the day it is needed.
        </p>
        <p>
          We produce graphic posts, carousels, reels and short-form video, stories, cover and profile artwork, ad
          creatives, and the captions that go with all of them — in Sinhala, Tamil and English. Everything is planned in
          a monthly calendar so approvals happen once, not twenty-four times.
        </p>
        <p>
          Publishing, community management and reporting sit under{" "}
          <L to="/social-media-management-sri-lanka">social media marketing services</L>. This page is about how the work
          gets made.
        </p>
      </>
    ),
  },
  {
    id: "formats",
    h2: "Formats and what each one is for",
    body: (
      <>
        <h3>Graphic posts</h3>
        <p>
          Still the workhorse for prices, offers, announcements, menus, intake dates and unit availability. They work
          when one message is readable in a second on a phone. Design standards for these are covered under{" "}
          <L to="/social-media-design-sri-lanka">social media design</L>.
        </p>
        <h3>Carousels</h3>
        <p>
          For anything that needs steps or comparison: room types, package tiers, before-and-after, course structures,
          project stages. They earn more time on screen than a single image and give you several slides of proof.
        </p>
        <h3>Reels and short-form video</h3>
        <p>
          The strongest reach format on Facebook, Instagram and TikTok. Vertical, sound-optional, hook in the first
          second, one idea per reel. Production detail sits on our{" "}
          <L to="/reel-creation-sri-lanka">reel creation page</L>.
        </p>
        <h3>Stories</h3>
        <p>
          Daily-use format for availability, quick offers, polls, questions and reposting customer content. Low
          production cost, high trust value, and the place where enquiry conversations usually start.
        </p>
        <h3>Ad creatives</h3>
        <p>
          Built differently to organic posts: shorter copy, clearer single offer, several variants for testing, and
          formats sized for feed, story and reels placements. Distribution is handled under{" "}
          <L to="/social-media-advertising-sri-lanka">social media advertising</L>.
        </p>
        <h3>AI-assisted video</h3>
        <p>
          Useful where a shoot is not practical — explainer scripts, presenter-style pieces, product animation. We use it
          where it genuinely saves cost without looking synthetic, and we say when it is the wrong choice. See{" "}
          <L to="/ai-video-production-sri-lanka">AI video production</L>.
        </p>
      </>
    ),
  },
  {
    id: "shoots",
    h2: "Photography and video shoots on location",
    body: (
      <>
        <p>
          Stock imagery does not sell a Sri Lankan business. Customers want to see the actual property, the actual plate
          of food, the actual showroom, the actual classroom. One shoot day, planned properly, can carry a month of
          content.
        </p>
        <h3>How we plan a shoot day</h3>
        <ul className="list-disc pl-5">
          <li>A shot list built from the content calendar, not improvised on the day.</li>
          <li>Locations and access confirmed, including whoever needs to unlock a room or move a vehicle.</li>
          <li>Staff or presenters briefed in advance, with the lines they need to say.</li>
          <li>Products, food, rooms or units prepared before the crew arrives.</li>
          <li>Vertical framing captured deliberately for reels, not cropped later from horizontal footage.</li>
        </ul>
        <p>
          For hotels and restaurants we shoot around real service hours. For construction and property we shoot at stages
          that will never look the same again. For education we shoot during actual class and campus activity, with
          permission.
        </p>
      </>
    ),
  },
  {
    id: "copywriting",
    h2: "Copywriting in Sinhala, Tamil and English",
    body: (
      <>
        <p>
          Captions do specific work: they carry the offer, the location, the price where appropriate, and the instruction
          to message. Translation is not the same as writing — a Sinhala caption that reads like a translated English
          sentence loses the tone that makes people respond.
        </p>
        <h3>What we standardise</h3>
        <ul className="list-disc pl-5">
          <li>A first line that works as the hook on its own, before the "more" cut-off.</li>
          <li>One clear instruction per post — message, call, book, visit.</li>
          <li>Location named where the business serves a specific area.</li>
          <li>Price or price range shown where it filters out unqualified enquiries.</li>
          <li>No hashtag walls; a handful of relevant ones instead.</li>
        </ul>
      </>
    ),
  },
  {
    id: "calendar",
    h2: "Content calendars and how a month is built",
    body: (
      <>
        <p>
          A month starts as a calendar, not a pile of posts. The calendar assigns each slot a theme, a format and an
          objective, then production fills it.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-border rounded-lg">
            <thead className="bg-secondary/60">
              <tr>
                <th className="text-left p-3 font-semibold text-foreground">Week</th>
                <th className="text-left p-3 font-semibold text-foreground">Focus</th>
                <th className="text-left p-3 font-semibold text-foreground">Typical output</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border">
                <td className="p-3">Week 1</td>
                <td className="p-3">Proof and credibility</td>
                <td className="p-3">Completed work, real premises, one reel, one carousel</td>
              </tr>
              <tr className="border-t border-border">
                <td className="p-3">Week 2</td>
                <td className="p-3">Education and objections</td>
                <td className="p-3">Answers to common questions, process explainer, one reel</td>
              </tr>
              <tr className="border-t border-border">
                <td className="p-3">Week 3</td>
                <td className="p-3">Offer</td>
                <td className="p-3">Price or package post, comparison carousel, ad creatives</td>
              </tr>
              <tr className="border-t border-border">
                <td className="p-3">Week 4</td>
                <td className="p-3">People and season</td>
                <td className="p-3">Team or behind-the-scenes, seasonal or cultural post, recap reel</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Seasonal blocks are planned four to six weeks early: Avurudu, Vesak, Ramadan, Christmas, school intakes, and the
          December–March and July–August tourism peaks. Campaign-specific content is planned alongside{" "}
          <L to="/social-media-campaigns-sri-lanka">social media campaigns</L>.
        </p>
      </>
    ),
  },
  {
    id: "brand-consistency",
    h2: "Brand consistency across every asset",
    body: (
      <>
        <p>
          Consistency is what makes a page look like a company rather than a collection of one-off designs. Before
          production starts we lock a small set of rules: colours, two typefaces, logo placement and safe margins, a
          caption structure, and a reel intro and end-card treatment.
        </p>
        <p>
          The practical benefit is speed. Once the rules exist, a week of content can be produced and approved without
          re-litigating every design decision, and ad variants can be built quickly during a live campaign.
        </p>
      </>
    ),
  },
  {
    id: "approval-workflow",
    h2: "The approval workflow that keeps a month on schedule",
    body: (
      <>
        <ol className="list-decimal pl-5 space-y-2">
          <li><strong>Calendar approval</strong> — themes, formats and dates signed off in one review.</li>
          <li><strong>Production</strong> — shoot, design, edit and copy against the approved calendar.</li>
          <li><strong>One consolidated review</strong> — the full batch shared together, with a deadline.</li>
          <li><strong>One revision round</strong> — collected feedback applied in a single pass.</li>
          <li><strong>Scheduling</strong> — approved content queued, ad creatives handed to the campaign.</li>
          <li><strong>Reporting</strong> — what performed, what to make more of next month.</li>
        </ol>
        <p>
          The single biggest cause of late posting is not production. It is approvals arriving one comment at a time from
          three different people. One reviewer with authority, one deadline, one revision round is what keeps a month on
          time.
        </p>
      </>
    ),
  },
  {
    id: "industry-content",
    h2: "What content actually works by industry",
    body: (
      <>
        <h3>Hotels and villas</h3>
        <p>Room walk-through reels, breakfast and pool footage, sunset timing, guest experiences with permission, seasonal packages with real rates.</p>
        <h3>Restaurants and cafés</h3>
        <p>Close-up food video with sound, preparation shots, new item launches, delivery and reservation prompts, weekday offers.</p>
        <h3>Real estate and construction</h3>
        <p>Walk-through video, drone where permitted, progress stages, finish details, location advantages, price ranges and payment plans.</p>
        <h3>Education</h3>
        <p>Campus and classroom footage, lecturer introductions, graduate outcomes described honestly, intake dates, fee structures, qualification pathways.</p>
        <h3>Healthcare and clinics</h3>
        <p>Doctor introductions, procedure explanations in plain language, facility tours, appointment instructions — careful, compliant claims only.</p>
        <h3>Retail, fashion and beauty</h3>
        <p>New arrivals, styling and application reels, before-and-after with consent, price-point clarity, stock and size availability.</p>
        <h3>Automotive</h3>
        <p>Walk-around video, interior detail, service explanations, arrival announcements, finance and trade-in information.</p>
        <h3>B2B and professional services</h3>
        <p>Case explanations without confidential detail, process breakdowns, team credentials, event presence, and LinkedIn-first formats.</p>
      </>
    ),
  },
  {
    id: "volume",
    h2: "How much content a business actually needs",
    body: (
      <>
        <p>
          More is not the answer; sustainable is. A realistic monthly baseline for an SME running two platforms:
        </p>
        <ul className="list-disc pl-5">
          <li><strong>12–20 designed posts or carousels</strong>, mixed across the five themes.</li>
          <li><strong>3–8 reels</strong>, ideally from one or two shoot days rather than scattered filming.</li>
          <li><strong>Stories most days</strong>, mostly light and unpolished.</li>
          <li><strong>2–4 ad creative sets</strong> per active campaign, built for testing.</li>
        </ul>
        <p>
          Exact volumes per package, including shoot hours and reel counts, are on the{" "}
          <L to="/social-media-marketing-packages-sri-lanka">packages page</L> with real monthly rates.
        </p>
      </>
    ),
  },
  {
    id: "reporting",
    h2: "Reporting: which content earned its cost",
    body: (
      <>
        <p>
          Every month we look at content by outcome, not by likes. Which reels held attention past three seconds, which
          posts produced saves and shares, which creatives generated the cheapest enquiries, and which formats never
          moved anything.
        </p>
        <p>
          That report changes next month's calendar. If room walk-throughs outperform food posts three months running, the
          split shifts. Content strategy is not fixed; it is corrected by evidence. How we measure enquiries and cost per
          lead is set out under <L to="/social-media-lead-generation-sri-lanka">social media lead generation</L>.
        </p>
      </>
    ),
  },
  {
    id: "mistakes",
    h2: "Content mistakes that cost Sri Lankan businesses reach",
    body: (
      <>
        <ul className="list-disc pl-5">
          <li><strong>Horizontal video cropped to vertical</strong> — heads cut off, text lost, viewers gone.</li>
          <li><strong>Text too small to read on a phone</strong> — designed on a laptop, viewed on a 6-inch screen.</li>
          <li><strong>Stock photos of foreign interiors</strong> — instantly recognisable and instantly distrusted.</li>
          <li><strong>Every post an offer</strong> — audiences stop looking when nothing else is ever published.</li>
          <li><strong>No price anywhere</strong> — enquiries become "how much?" a hundred times a week.</li>
          <li><strong>Posting a festival greeting with no brand relevance</strong> — polite, but it does no work.</li>
          <li><strong>Reels with no hook</strong> — the first second decides whether the rest matters.</li>
          <li><strong>Content produced without a calendar</strong> — good weeks and silent weeks in the same month.</li>
        </ul>
      </>
    ),
  },
];

const faqs = [
  { q: "Do you shoot the photos and videos yourselves?", a: "Yes. Location shoots are part of our monthly packages, with shoot hours varying by package. We plan a shot list from the content calendar so one day produces several weeks of assets." },
  { q: "Can you write content in Sinhala and Tamil?", a: "Yes, and we write rather than translate. A caption written directly in Sinhala or Tamil reads naturally and generally performs better than a translated English line." },
  { q: "How many posts and reels do we get each month?", a: "It depends on the package — typically 12 to 20 designed posts and 3 to 8 reels, with exact counts and shoot hours listed on our packages page along with the monthly rates." },
  { q: "Who approves the content before it goes out?", a: "You do. We share the full month together for one consolidated review, apply feedback in a single revision round, then schedule. One decision-maker and one deadline keeps the month on time." },
  { q: "Do you use AI to make content?", a: "Where it genuinely helps — presenter-style explainers, animation, script support. Real shoots still carry proof, and we tell you when AI is the wrong choice rather than the cheaper one." },
  { q: "Can you work with content we already have?", a: "Yes. Existing photos, brochures, drone footage and previous shoots are often underused. We audit what exists before proposing new production." },
  { q: "Do you handle ad creatives too?", a: "Yes. Ad creatives are built separately from organic posts, in several variants for testing, and sized for feed, story and reels placements." },
  { q: "What happens if our offer changes mid-month?", a: "We adjust. Offer posts are the most likely to change, so they are produced closer to the date, and we keep design files ready for quick updates." },
  { q: "How far ahead do you plan seasonal content?", a: "Four to six weeks for Avurudu, Christmas, Ramadan, Vesak, school intakes and tourism peaks, because shoots and approvals need booking before the season starts." },
  { q: "Can you only do content, without managing the pages?", a: "Yes. Content production can run as a standalone engagement, with your team publishing and replying. Many clients start that way and add management later." },
];

const relatedLinks = [
  { label: "Social Media Marketing", path: "/social-media-management-sri-lanka", desc: "Our main social media marketing and management service." },
  { label: "Social Media Strategy", path: "/social-media-strategy-sri-lanka", desc: "The plan that decides what content gets made." },
  { label: "Reel Creation", path: "/reel-creation-sri-lanka", desc: "Short-form vertical video production and editing." },
  { label: "Social Media Design", path: "/social-media-design-sri-lanka", desc: "Post, carousel and ad design standards." },
  { label: "AI Video Production", path: "/ai-video-production-sri-lanka", desc: "AI presenters, explainers and animated product video." },
  { label: "Social Media Advertising", path: "/social-media-advertising-sri-lanka", desc: "Getting the content in front of the right audience." },
  { label: "Packages & Pricing", path: "/social-media-marketing-packages-sri-lanka", desc: "Post counts, reel counts, shoot hours and real rates." },
  { label: "Social Media Campaigns", path: "/social-media-campaigns-sri-lanka", desc: "Campaign-specific content and phasing." },
];

const SocialMediaContentCreation = () => (
  <SocialClusterLayout
    metaTitle="Social Media Content Creation Sri Lanka | Posts, Reels & Copy | Cypher Digital"
    metaDescription="Social media content creation in Sri Lanka — location shoots, graphic posts, carousels, reels, stories, ad creatives and Sinhala, Tamil and English copywriting, planned in a monthly calendar."
    canonical="/social-media-content-creation-sri-lanka"
    breadcrumbLabel="Content Creation"
    eyebrow="Social Media Content Creation Sri Lanka"
    h1="Social Media Content Creation in Sri Lanka"
    heroLead="Shoots, designs, reels and captions produced on a monthly calendar — so there is always something good ready on the day you need it."
    heroPoints={[
      "Location photo and video shoots across Sri Lanka",
      "Graphic posts, carousels, stories and ad creatives",
      "Reels and short-form vertical video",
      "Copywriting in Sinhala, Tamil and English",
      "Monthly calendar with one approval round",
      "Monthly report on what content earned its cost",
    ]}
    serviceName="Social Media Content Creation Sri Lanka"
    serviceDescription="Social media content production for Sri Lankan businesses: location shoots, graphic design, carousels, reels, stories, ad creatives, multilingual copywriting, content calendars and monthly performance reporting."
    sections={sections}
    faqs={faqs}
    relatedLinks={relatedLinks}
    whatsappMessage="Hi Cypher Digital, I'd like to discuss social media content creation for my business."
    finalCtaHeading="Want a month of content ready before the month starts?"
    finalCtaLead="Tell us your business, the platforms you use and your monthly budget. We will come back with a realistic content plan — formats, volumes, shoot needs and rates — with nothing invented and nothing padded."
    formService="Social Media Content Creation"
  />
);

export default SocialMediaContentCreation;
