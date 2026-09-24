import { ArticleShell, H2, H3, A, UL, Flow, Callout, DataTable, MidCTA, SERVICE_URL } from "@/components/lead-cluster/ArticleKit";

const faqs = [
  { q: "What is a qualified lead?", a: "A lead you have spoken to, whose requirement, interest and timing you understand well enough to decide the right next step. It does not necessarily mean they are ready to buy." },
  { q: "How many questions should a qualification call include?", a: "Usually five to eight, asked conversationally. You do not need every question every time — stop when you have enough to decide the next step." },
  { q: "Should I ask about budget?", a: "It can help for higher-value services, but asking too early can feel pushy. Many businesses ask about requirement and timing first, then ask whether a quotation would be helpful." },
  { q: "What if a lead is not ready to buy?", a: "Record 'follow up later' with a date and the reason. Many sales come from leads who were not ready at the first call but were contacted again at the right time." },
  { q: "Can lead qualification be outsourced?", a: "Yes. An outsourced team can make the first calls using your questions, record outcomes and pass relevant prospects to your sales team." },
];

const BlogPost165 = () => (
  <ArticleShell
    slug="how-to-qualify-leads"
    metaTitle="How to Qualify Leads Before Your Sales Team Calls | Cypher Digital"
    description="Learn how to qualify leads using practical questions about customer requirements, interest, timing and next steps before sales follow-up."
    h1="How to Qualify Leads Before Your Sales Team Calls"
    crumb="How to Qualify Leads"
    category="Lead Qualification"
    readMins={10}
    faqs={faqs}
    ctaHeading="Get Help With Lead Qualification and Follow-Up"
    related={[
      { to: "/blog/what-is-lead-follow-up", label: "What Is Lead Follow-Up? A Complete Guide for Businesses" },
      { to: "/blog/lead-generation-vs-lead-qualification-vs-lead-follow-up", label: "Lead Generation vs Lead Qualification vs Lead Follow-Up" },
      { to: "/blog/why-marketing-leads-are-not-converting", label: "Why Your Marketing Leads Are Not Converting" },
    ]}
    intro={<>
      <p>Your salespeople's time is one of the most valuable resources in your business. Yet many sales teams spend a large part of their day calling leads who were only browsing, enquired by mistake or will not be ready for months.</p>
      <p>Lead qualification fixes that. It gives you a clear picture of each prospect before a salesperson invests serious time. Here is how to do it simply and practically.</p>
    </>}
  >
    <H2>The short answer</H2>
    <p>To qualify leads, contact each one, ask a small set of questions about their requirement, interest, timing and next step, record the outcome, and pass only the relevant prospects — with notes — to your sales team.</p>

    <H2>What is lead qualification?</H2>
    <p>Lead qualification is the process of understanding a lead well enough to decide what should happen next. It usually takes place during the first follow-up conversation, by phone or WhatsApp.</p>
    <p>It is not an interrogation and it is not a sales pitch. It is a short, helpful conversation that answers: what does this person need, how interested are they, and what is the right next step? If you are new to the process, start with <A to="/blog/what-is-lead-follow-up">What Is Lead Follow-Up?</A>, which explains where qualification fits.</p>

    <H2>Why qualify leads?</H2>
    <UL items={[
      <><strong>Sales time goes further.</strong> Salespeople focus on people with a real requirement.</>,
      <><strong>Better first sales calls.</strong> The salesperson already knows the context.</>,
      <><strong>Nobody is forgotten.</strong> Leads who are not ready yet get a scheduled follow-up instead of being dropped.</>,
      <><strong>Smarter marketing.</strong> Outcome data shows which campaigns bring relevant people, not just more forms.</>,
      <><strong>Better customer experience.</strong> Prospects get the information they actually asked for.</>,
    ]} />

    <Flow label="Where qualification sits" steps={["Lead received", "First call", "Qualification questions", "Outcome recorded", "Sales handover"]} />

    <H2>10 questions you can ask a lead</H2>
    <p>You do not need to ask all ten every time. Pick the ones that suit your business and ask them naturally, in the flow of conversation.</p>

    <H3>1. What are you looking for?</H3>
    <p>The most important question. It opens the conversation and often reveals a need different from what the form suggested.</p>
    <H3>2. Which product or service are you interested in?</H3>
    <p>Useful when you offer several options. It helps route the lead to the right person.</p>
    <H3>3. What made you enquire?</H3>
    <p>Tells you what caught their attention — an offer, a problem, a recommendation — and helps marketing understand what works.</p>
    <H3>4. What is your current requirement?</H3>
    <p>Gets specific: quantity, size, location, number of people, current situation.</p>
    <H3>5. When are you planning to make a decision?</H3>
    <p>Separates "this week" from "sometime next year". Timing is often the biggest factor in the next step.</p>
    <H3>6. Do you need more information?</H3>
    <p>Many leads are not ready for a salesperson — they just need a brochure, a schedule or a price list first.</p>
    <H3>7. Do you have any questions?</H3>
    <p>Brings out concerns early: price, delivery, trust, location. These are valuable notes for the sales team.</p>
    <H3>8. Would you like a quotation?</H3>
    <p>A simple, low-pressure way to test seriousness.</p>
    <H3>9. Would you like a salesperson to contact you?</H3>
    <p>Asking permission makes the sales call welcome rather than intrusive.</p>
    <H3>10. When would be the best time to follow up?</H3>
    <p>Gets you a specific time and date, which makes the next contact far more likely to succeed.</p>

    <MidCTA text="Want these questions asked for every lead you receive?" />

    <H2>Qualification does not mean ready to buy</H2>
    <p>This is the most common misunderstanding. A "qualified" lead is one you understand — not necessarily one who will purchase. Every lead should end the conversation with one clear outcome:</p>
    <DataTable
      head={["Outcome", "What it means", "Typical next step"]}
      rows={[
        ["Interested", "Clear requirement and interest now", "Hand to sales promptly"],
        ["Potential customer", "Relevant, but still deciding", "Send details, sales call soon"],
        ["Needs more information", "Wants brochure, schedule or prices", "Send information, follow up"],
        ["Follow up later", "Relevant, but not ready yet", "Schedule a call on an agreed date"],
        ["Not interested", "No current need", "Close politely, note the reason"],
        ["No answer", "Could not be reached", "Retry at different times + WhatsApp"],
        ["Invalid contact", "Wrong or unreachable number", "Remove and flag the source"],
      ]}
    />
    <Callout title="Record the reason, not just the status">
      "Not interested — already bought elsewhere" and "Not interested — price too high" tell you very different things. A short note turns a status into useful feedback.
    </Callout>

    <H2>What should happen after qualification?</H2>
    <p>Qualification is only useful if the information reaches the right person. Relevant prospects should be handed to the sales team with context: what they need, how interested they are, their questions and the agreed next step.</p>
    <p>That way, the salesperson's first call sounds like: "Hi, I understand you're looking for a three-month digital marketing package for your restaurant and you'd like pricing for Colombo 7 — is now a good time?" That is a far stronger start than a cold call.</p>
    <p>Leads marked "follow up later" should go into a dated list, not a pile. Leads marked "invalid" or "not interested" should feed back to marketing so campaigns can improve.</p>
    <p>If your business receives a large number of enquiries and needs help making the initial calls, <A to={SERVICE_URL}>Lead Follow-Up Services</A> can help your team understand and organise prospects before sales follow-up — using your questions and returning a structured sheet with an outcome for every lead.</p>

    <H2>A simple qualification sheet</H2>
    <p>You can start with a spreadsheet. Useful columns include:</p>
    <UL items={[
      "Lead name and phone number",
      "Lead source and date received",
      "Date and time of call",
      "Requirement (in their words)",
      "Interest level and timing",
      "Questions or concerns",
      "Outcome status",
      "Next action and date",
    ]} />

    <H2>Common qualification mistakes</H2>
    <UL items={[
      "Reading questions like a survey instead of having a conversation.",
      "Asking about budget in the first few seconds.",
      "Treating 'not ready now' as 'not interested'.",
      "Not recording answers, so sales has to ask again.",
      "Passing every lead to sales regardless of outcome.",
    ]} />

    <H2>Sri Lankan considerations</H2>
    <UL items={[
      <><strong>Politeness matters.</strong> A warm introduction and respectful tone go a long way, especially with older customers.</>,
      <><strong>Language flexibility.</strong> Offer Sinhala, Tamil or English.</>,
      <><strong>Family decisions.</strong> For education, property and vehicles, ask who else is involved in the decision.</>,
      <><strong>WhatsApp follow-through.</strong> Sending a short summary on WhatsApp after the call helps the prospect remember you.</>,
    ]} />
    <p>Qualification pairs naturally with good lead sources. If you are building those, see our <A to="/social-media-lead-generation-sri-lanka">social media lead generation</A> service and our comparison of <A to="/blog/lead-generation-vs-lead-qualification-vs-lead-follow-up">lead generation vs lead qualification</A>.</p>
  </ArticleShell>
);

export default BlogPost165;
