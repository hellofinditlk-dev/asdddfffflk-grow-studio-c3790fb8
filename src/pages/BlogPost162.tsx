import { ArticleShell, H2, H3, A, UL, Flow, Callout, DataTable, MidCTA, SERVICE_URL } from "@/components/lead-cluster/ArticleKit";

const faqs = [
  { q: "What is lead follow-up in simple terms?", a: "Lead follow-up means contacting someone who has already shown interest in your business to understand what they need and decide the right next step." },
  { q: "Is lead follow-up the same as selling?", a: "No. The first follow-up is about understanding the prospect. The sales follow-up that comes later is where pricing, negotiation and closing happen." },
  { q: "How soon should a lead be followed up?", a: "As soon as practically possible — ideally the same day. The longer a lead waits, the more likely it is that interest fades or a competitor replies first." },
  { q: "What is the difference between lead follow-up and lead qualification?", a: "Follow-up is making contact. Qualification is what you learn during that contact — interest, requirement, timing and next action. In practice they usually happen in the same conversation." },
  { q: "Can a business outsource lead follow-up?", a: "Yes. Some businesses outsource the first call so that every lead is contacted and qualified, then hand the relevant prospects to their own sales team for the commercial conversation." },
];

const BlogPost162 = () => (
  <ArticleShell
    slug="what-is-lead-follow-up"
    metaTitle="What Is Lead Follow-Up? Complete Guide | Cypher Digital"
    description="Learn what lead follow-up is, how the process works, why it matters and how businesses can use lead qualification and prospect follow-up to support sales."
    h1="What Is Lead Follow-Up? A Complete Guide for Businesses"
    crumb="What Is Lead Follow-Up?"
    category="Lead Follow-Up"
    readMins={10}
    faqs={faqs}
    ctaHeading="Need help following up your existing leads?"
    related={[
      { to: "/blog/lead-generation-vs-lead-qualification-vs-lead-follow-up", label: "Lead Generation vs Lead Qualification vs Lead Follow-Up" },
      { to: "/blog/why-marketing-leads-are-not-converting", label: "Why Your Marketing Leads Are Not Converting: 10 Common Reasons" },
      { to: "/blog/how-to-qualify-leads", label: "How to Qualify Leads Before Your Sales Team Calls" },
    ]}
    intro={<>
      <p>Businesses spend a lot of time and money getting enquiries. Far less attention goes to what happens next. Lead follow-up is that next step — and for many companies it is the difference between a busy inbox and a busy sales pipeline.</p>
      <p>This guide explains the key terms in plain language, shows how the follow-up process works, and helps you decide how to handle it in your own business.</p>
    </>}
  >
    <H2>The short answer</H2>
    <p>Lead follow-up is the process of contacting an existing lead or prospect to understand their requirement and determine the appropriate next step. It sits between generating an enquiry and having a sales conversation.</p>

    <H2>What is a lead?</H2>
    <p>A lead is a person or business that has shown some interest in what you sell and has shared a way to contact them. That could be a phone number in a Facebook form, a WhatsApp message asking about prices, an email through your website, or a business card collected at an event.</p>
    <p>A lead is not yet a customer. It is an opportunity to start a conversation. Some leads are ready to buy; many are simply exploring. You only find out which by talking to them.</p>
    <Callout title="Lead vs prospect">
      People often use the words interchangeably. A useful distinction: a <strong>lead</strong> is anyone who enquired; a <strong>prospect</strong> is a lead you have spoken to and who seems relevant and potentially interested.
    </Callout>

    <H2>What is lead generation?</H2>
    <p>Lead generation is the process of attracting or identifying potential customers and getting their contact details. It is mostly a marketing activity. Common sources in Sri Lanka include:</p>
    <UL items={[
      <><A to="/facebook-ads-sri-lanka">Facebook Ads</A> and Instagram lead forms</>,
      <><A to="/google-ads-sri-lanka">Google Ads</A> search campaigns</>,
      "Website enquiry forms and landing pages",
      "WhatsApp messages and click-to-chat ads",
      "Email enquiries",
      "Events, exhibitions and education fairs",
      "Promotions, contests and seasonal offers",
    ]} />
    <p>Lead generation answers one question: how do we get more people to raise their hand? It does not answer what to do once they have.</p>

    <H2>What is lead follow-up?</H2>
    <p>Lead follow-up means contacting an existing lead or prospect to understand their requirement and determine the appropriate next step. Usually this is a phone call, sometimes supported by WhatsApp messages.</p>
    <p>A good follow-up call is not a sales pitch. It is a short, friendly conversation that confirms who the person is, what they enquired about and what they actually need. The goal is clarity, not a closed deal.</p>
    <p><strong>Example:</strong> a hotel in Galle runs an Instagram campaign for a weekend package. A follow-up call confirms the enquirer wants a family room for four people in December, has a budget in mind and would like a quotation by WhatsApp. That is a clear, useful outcome — even though nothing has been sold yet.</p>

    <H2>What is lead qualification?</H2>
    <p>Lead qualification is the part of the conversation where you learn whether the lead is relevant and how interested they are. It helps you understand:</p>
    <DataTable
      head={["Area", "What you want to learn"]}
      rows={[
        ["Interest", "How keen are they? Just browsing or actively looking?"],
        ["Requirement", "What exactly do they need — product, service, size, location?"],
        ["Timing", "When do they plan to decide or buy?"],
        ["Questions", "What do they want to know before moving forward?"],
        ["Concerns", "Price, trust, delivery, timing — what might hold them back?"],
        ["Next action", "Quotation, visit, salesperson call, or follow up later?"],
      ]}
    />
    <p>Qualification does not mean judging whether someone is "good enough". It means sorting leads so each one gets the right next step. Our guide on <A to="/blog/how-to-qualify-leads">how to qualify leads</A> lists practical questions you can use.</p>

    <H2>What is sales follow-up?</H2>
    <p>Sales follow-up is the later conversation handled by your salesperson. It covers pricing, proposals, negotiation, objections and closing. It works best when the salesperson already knows the prospect's requirement and interest from the earlier follow-up.</p>
    <p>The difference is focus. The initial follow-up gathers understanding. The sales follow-up uses that understanding to move towards a decision.</p>

    <DataTable
      head={["Stage", "Purpose"]}
      rows={[
        ["Lead Generation", "Generate potential customer enquiries"],
        ["Lead Follow-Up", "Contact and understand the prospect"],
        ["Lead Qualification", "Identify interest and relevance"],
        ["Sales Follow-Up", "Continue the commercial conversation"],
      ]}
    />
    <p>For a deeper comparison of these stages and how they connect, read <A to="/blog/lead-generation-vs-lead-qualification-vs-lead-follow-up">Lead Generation vs Lead Qualification vs Lead Follow-Up</A>.</p>

    <MidCTA text="Have leads waiting for a first call?" />

    <H2>The lead follow-up process</H2>
    <Flow label="Seven-step follow-up process" steps={["Receive lead", "Contact prospect", "Understand requirement", "Ask qualification questions", "Record outcome", "Identify next action", "Hand over to sales"]} />

    <H3>1. Receive the lead</H3>
    <p>Collect leads from every source into one list — Facebook, website, WhatsApp, events. Note the source and date for each.</p>
    <H3>2. Contact the prospect</H3>
    <p>Call as soon as possible. Introduce your business clearly and mention what they enquired about so they recognise you.</p>
    <H3>3. Understand the requirement</H3>
    <p>Ask open questions before offering anything. "What are you looking for?" usually reveals more than a scripted pitch.</p>
    <H3>4. Ask qualification questions</H3>
    <p>Cover interest, timing, questions and concerns. Keep it conversational — this is a chat, not a form.</p>
    <H3>5. Record the outcome</H3>
    <p>Note the result: interested, needs more information, follow up later, not interested, no answer or invalid number. Add short notes on what they said.</p>
    <H3>6. Identify the next action</H3>
    <p>Agree a specific step and time — send a quotation, arrange a visit, or call again next week.</p>
    <H3>7. Hand over relevant information to sales</H3>
    <p>Give your sales team the prospects who need a commercial conversation, with the notes attached, so they can continue rather than restart.</p>

    <p>When a business receives more enquiries than its team can call, this process is often the first thing to break. That is where <A to={SERVICE_URL}>Lead Follow-Up Services in Sri Lanka</A> can help: an external team makes the first call, understands each prospect's requirement, records their feedback and returns a structured list to your sales team with a recommended next step for every lead.</p>

    <H2>Why lead follow-up matters</H2>
    <UL items={[
      <><strong>It protects your ad spend.</strong> Leads you paid for actually get contacted.</>,
      <><strong>It saves sales time.</strong> Salespeople focus on prospects with a real requirement.</>,
      <><strong>It improves marketing decisions.</strong> Call outcomes show which campaigns bring relevant people.</>,
      <><strong>It improves the customer experience.</strong> A prompt, helpful call builds trust before any sales talk begins.</>,
    ]} />

    <H2>Common lead follow-up mistakes</H2>
    <UL items={[
      "Waiting days before the first call.",
      "Pitching a price before understanding the need.",
      "Trying once and giving up when there is no answer.",
      "Not writing down what the prospect said.",
      "Ending calls without an agreed next step.",
      "Handing sales a list with names only and no context.",
    ]} />

    <H2>In-house or outsourced?</H2>
    <p>If you receive a manageable number of leads and have a person with time to call them properly, in-house follow-up works well. If enquiries spike during campaigns, or your sales team is already stretched, outsourcing the first call can make sure no lead is ignored — while your own team keeps ownership of the sales conversation.</p>
    <p>Whichever you choose, the principle is the same: every lead should reach a recorded outcome.</p>
  </ArticleShell>
);

export default BlogPost162;
