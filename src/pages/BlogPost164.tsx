import { ArticleShell, H2, H3, A, UL, Flow, Callout, DataTable, MidCTA, SERVICE_URL } from "@/components/lead-cluster/ArticleKit";

const faqs = [
  { q: "Is lead qualification part of lead generation?", a: "They are separate stages. Lead generation brings in enquiries; qualification assesses whether each enquiry is relevant and interested. Some forms add pre-qualification questions, but a real conversation usually tells you far more." },
  { q: "Which comes first, follow-up or qualification?", a: "Follow-up is making contact, and qualification happens during that contact. In practice they are often the same call — you cannot qualify someone you have not spoken to." },
  { q: "Who should handle each stage?", a: "Marketing usually owns lead generation. Follow-up and qualification can be handled by an in-house coordinator or an outsourced team. Sales follow-up is best handled by your own salespeople." },
  { q: "Can one person do all four stages?", a: "In a small business, yes. As enquiry volume grows, splitting the first call and qualification from the sales conversation usually saves time for your salespeople." },
  { q: "How do I measure each stage?", a: "Lead generation: number and cost of leads. Follow-up: percentage of leads contacted. Qualification: share of leads with a clear outcome. Sales follow-up: quotations, meetings and closed deals." },
];

const BlogPost164 = () => (
  <ArticleShell
    slug="lead-generation-vs-lead-qualification-vs-lead-follow-up"
    metaTitle="Lead Generation vs Lead Qualification vs Lead Follow-Up"
    description="Understand the difference between lead generation, lead qualification and lead follow-up and see how each stage fits into the sales process."
    h1="Lead Generation vs Lead Qualification vs Lead Follow-Up"
    crumb="Lead Generation vs Qualification vs Follow-Up"
    category="Sales Process"
    readMins={9}
    faqs={faqs}
    ctaHeading="Explore Lead Follow-Up Services in Sri Lanka"
    related={[
      { to: "/blog/how-to-qualify-leads", label: "How to Qualify Leads Before Your Sales Team Calls" },
      { to: "/blog/what-is-lead-follow-up", label: "What Is Lead Follow-Up? A Complete Guide for Businesses" },
      { to: "/blog/how-to-follow-up-facebook-leads", label: "How to Follow Up With Facebook Leads" },
    ]}
    intro={<>
      <p>"Lead generation", "lead qualification" and "lead follow-up" are often used as if they mean the same thing. They do not. Each is a different stage with a different question, a different owner and a different way of measuring success.</p>
      <p>Mixing them up is one reason businesses spend heavily on ads but struggle to see sales. This article separates the stages clearly and shows how they work together.</p>
    </>}
  >
    <H2>The short answer</H2>
    <p>Lead generation attracts potential customers. Lead follow-up makes contact with them. Lead qualification works out whether they are relevant and interested. Sales follow-up continues the commercial conversation with those who are. Each stage depends on the one before it.</p>

    <H2>Lead generation</H2>
    <Callout title="The question it answers">"How do we attract potential customers?"</Callout>
    <p>Lead generation is about getting people to show interest and share their contact details. It is mostly a marketing responsibility and is measured by lead volume and cost per lead. Common channels include:</p>
    <UL items={[
      <><A to="/facebook-ads-sri-lanka">Facebook Ads</A> and Instagram lead forms</>,
      <><A to="/google-ads-sri-lanka">Google Ads</A></>,
      <><A to="/seo-sri-lanka">SEO</A> and website enquiries</>,
      <><A to="/social-media-management-sri-lanka">Social media marketing</A></>,
      "Email marketing",
      "SMS marketing",
      "WhatsApp marketing",
      "Events and exhibitions",
    ]} />
    <p>Good lead generation brings in people who could plausibly buy. But it stops at the enquiry. It does not tell you who is ready, who is curious and who enquired by mistake. For channel ideas, see our broader guide on <A to="/social-media-lead-generation-sri-lanka">social media lead generation in Sri Lanka</A>.</p>

    <H2>Lead follow-up</H2>
    <Callout title="The question it answers">"Have we contacted the prospect?"</Callout>
    <p>Lead follow-up is the initial conversation. Someone calls or messages the lead, introduces the business, reminds them what they enquired about and opens a conversation.</p>
    <p>It sounds simple, but it is where many leads are lost. Leads wait days, get one missed call and are forgotten, or sit in a list that nobody owns. The measure here is straightforward: what percentage of leads were actually contacted, and how quickly?</p>

    <H2>Lead qualification</H2>
    <Callout title="The question it answers">"Is this prospect relevant and potentially interested?"</Callout>
    <p>Qualification happens during the follow-up conversation. It is about understanding the person well enough to decide the right next step. Typically you want to learn their:</p>
    <UL items={[
      <><strong>Requirement</strong> — what exactly do they need?</>,
      <><strong>Interest</strong> — how keen are they right now?</>,
      <><strong>Timing</strong> — when are they planning to decide?</>,
      <><strong>Questions</strong> — what do they need to know?</>,
      <><strong>Next action</strong> — quotation, visit, salesperson call or later follow-up?</>,
    ]} />
    <p>Qualification does not mean rejecting people. It means sorting them. A lead who wants to buy in three months is still valuable — they just need a different next step from someone ready this week. See <A to="/blog/how-to-qualify-leads">how to qualify leads</A> for practical questions.</p>

    <H2>Sales follow-up</H2>
    <Callout title="The question it answers">"What should the salesperson do next?"</Callout>
    <p>Sales follow-up is where your salesperson continues the conversation with qualified prospects: detailed pricing, proposals, visits, negotiation and closing. It is most effective when the salesperson receives context from the earlier stages instead of calling cold.</p>

    <MidCTA text="Want every lead contacted and qualified before sales calls?" />

    <H2>Comparison table</H2>
    <DataTable
      head={["Stage", "Key question", "Typical owner", "Main output", "How to measure"]}
      rows={[
        ["Lead Generation", "How do we attract potential customers?", "Marketing", "Enquiries and contact details", "Lead volume, cost per lead"],
        ["Lead Follow-Up", "Have we contacted the prospect?", "Coordinator or follow-up team", "A first conversation", "% of leads contacted, speed"],
        ["Lead Qualification", "Is this prospect relevant and interested?", "Coordinator or follow-up team", "Outcome, requirement, next step", "% of leads with a clear outcome"],
        ["Sales Follow-Up", "What should the salesperson do next?", "Sales team", "Quotations, meetings, deals", "Proposals sent, deals closed"],
      ]}
    />

    <H2>How the four stages work together</H2>
    <Flow label="The customer acquisition chain" steps={["Advertising", "Lead Generation", "Lead Follow-Up", "Lead Qualification", "Sales Follow-Up"]} />
    <p>Think of it as a relay. Marketing runs the first leg and hands over enquiries. The follow-up stage makes contact and learns about each person. Qualification sorts them into clear outcomes. Sales takes the relevant prospects to the finish line.</p>
    <p>If any handover is dropped, the whole race slows down. A great campaign cannot make up for leads that are never called. A strong salesperson cannot close a lead who was contacted too late.</p>

    <H3>A practical example</H3>
    <p>A private school in Kandy runs a Facebook campaign before the new term and receives 150 enquiries.</p>
    <UL items={[
      <><strong>Lead generation:</strong> 150 parents submit the form.</>,
      <><strong>Lead follow-up:</strong> all 150 are called within two days; 110 are reached.</>,
      <><strong>Lead qualification:</strong> 40 want a school visit, 30 need fee details, 20 are for next year, the rest are not relevant or not interested.</>,
      <><strong>Sales follow-up:</strong> the admissions team focuses on the 40 visit requests first, with notes on each child's grade and requirement.</>,
    ]} />
    <p>The admissions team now spends its time where it matters, and the marketing team learns which ad messages brought the most relevant parents. (Numbers are illustrative only.)</p>

    <H2>Where businesses usually get stuck</H2>
    <p>Most businesses are reasonably good at lead generation and have capable salespeople. The weak point is usually the middle: making first contact with every lead and qualifying them before sales. It is repetitive, time-consuming work that rarely has a clear owner.</p>
    <p>If your business generates enough enquiries but needs help with the first conversation and qualification stage, <A to={SERVICE_URL}>lead qualification and follow-up services</A> can help organise prospects before they reach your sales team. You keep control of the sales conversation; the first-call work is handled consistently.</p>

    <H2>Checklist: is each stage working?</H2>
    <UL items={[
      "Do we know how many leads we received last month, by source?",
      "Do we know how many of those were contacted — and how fast?",
      "Does every contacted lead have a recorded outcome?",
      "Do salespeople receive notes before calling a prospect?",
      "Does marketing see call outcomes for each campaign?",
    ]} />
    <p>If you answered "no" to any of these, that is the stage to strengthen first.</p>
  </ArticleShell>
);

export default BlogPost164;
