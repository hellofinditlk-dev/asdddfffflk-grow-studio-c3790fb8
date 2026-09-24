import { ArticleShell, H2, H3, A, UL, Flow, Callout, DataTable, MidCTA, SERVICE_URL } from "@/components/lead-cluster/ArticleKit";

const faqs = [
  { q: "Why do leads stop responding after the first enquiry?", a: "Usually because the business took too long to reply, the first conversation did not address what the person actually needed, or nobody agreed a clear next step. Interest fades quickly when there is no timely, relevant contact." },
  { q: "Are poor-quality leads always the marketing team's fault?", a: "Not always. Some leads are genuinely poor, but many good enquiries go cold because they are not contacted, not qualified or not handed to sales with enough context. Check the follow-up process before judging lead quality." },
  { q: "How many times should we follow up a lead?", a: "There is no fixed number. A practical approach is several attempts across different days and times, using calls and WhatsApp, until you either reach the person or they clearly say they are not interested." },
  { q: "Can outsourcing the first call help conversions?", a: "It can help more leads get contacted and qualified, which gives your sales team better opportunities. It does not guarantee sales — the final result still depends on your offer, pricing and sales conversation." },
  { q: "What should we record after each lead conversation?", a: "The call outcome, the prospect's requirement, their level of interest, any questions or concerns, their preferred follow-up time and the recommended next action." },
];

const BlogPost161 = () => (
  <ArticleShell
    slug="why-marketing-leads-are-not-converting"
    metaTitle="Why Your Marketing Leads Are Not Converting | Cypher Digital"
    description="Discover why marketing leads are not converting and how better lead response, qualification and follow-up can help businesses improve their sales process."
    h1="Why Your Marketing Leads Are Not Converting: 10 Common Reasons"
    crumb="Why Leads Are Not Converting"
    category="Lead Conversion"
    readMins={10}
    faqs={faqs}
    ctaHeading="Need help following up your marketing leads?"
    related={[
      { to: "/blog/what-is-lead-follow-up", label: "What Is Lead Follow-Up? A Complete Guide for Businesses" },
      { to: "/blog/how-to-qualify-leads", label: "How to Qualify Leads Before Your Sales Team Calls" },
      { to: "/blog/how-to-follow-up-facebook-leads", label: "How to Follow Up With Facebook Leads" },
    ]}
    intro={<>
      <p>Your ads are running. Enquiries are arriving through Facebook forms, WhatsApp, your website and phone calls. Yet at the end of the month, sales have not moved the way the lead count suggested they would.</p>
      <p>This is one of the most common frustrations we hear from Sri Lankan business owners. The instinct is to blame the leads or the ad campaign. Sometimes that is fair. Far more often, the problem sits in the space between the enquiry and the sales conversation — the part nobody owns.</p>
    </>}
  >
    <H2>The short answer</H2>
    <p>Most marketing leads do not convert because they are contacted too late, not contacted at all, or contacted without anyone understanding what the person actually wants. A lead is an expression of interest, not a decision to buy. Converting it requires timely contact, a useful first conversation, basic qualification and a clear next step.</p>

    <Callout title="A lead is not a sale">
      Someone who fills a form has raised their hand. They might be comparing prices, researching for later, or ready to buy this week. Until someone talks to them, you do not know which — and treating every lead the same wastes both marketing budget and sales time.
    </Callout>

    <H2>10 common reasons your leads are not converting</H2>

    <H3>1. Leads are not contacted quickly</H3>
    <p>Interest is highest in the minutes and hours after someone enquires. They have your ad in mind, they remember why they clicked, and they may have enquired with competitors at the same time. Wait two days and the person may not remember your business at all.</p>
    <p><strong>Example:</strong> a Colombo tuition class receives 60 enquiries over a weekend promotion. The office reopens on Monday afternoon and starts calling. By then, several parents have already registered with another institute that replied on Saturday.</p>

    <H3>2. Leads are left without follow-up</H3>
    <p>Some leads are simply never called. They sit in a Facebook Leads Centre download, a spreadsheet or a WhatsApp chat that nobody scrolls back to. This happens more than most owners realise, especially when enquiries arrive across several channels.</p>
    <p>A quick way to check: take last month's leads and ask your team which ones were contacted, when, and what happened. If nobody can answer confidently, follow-up is the first problem to fix.</p>

    <H3>3. Sales teams do not have enough time</H3>
    <p>Your salespeople are usually busy with meetings, quotations, existing customers and deals that are close to closing. Calling fifty new, unknown leads is slow and often disappointing work — many do not answer, and some are not relevant. Understandably, it gets pushed down the list.</p>
    <p>The result is that the leads you paid for wait while your most expensive people work on everything else.</p>

    <H3>4. Leads are not properly qualified</H3>
    <p>When every lead is handed to sales as if it were ready to buy, salespeople spend time on people who were only curious. After a few bad calls, they start to distrust the whole lead source and stop calling new enquiries with any energy.</p>
    <p>Basic qualification — understanding interest, requirement and timing — separates the people who need a sales call today from those who need information or a later follow-up. We cover this in detail in our guide on <A to="/blog/how-to-qualify-leads">how to qualify leads before your sales team calls</A>.</p>

    <H3>5. The first conversation does not identify the actual requirement</H3>
    <p>A lead form usually captures a name and phone number, perhaps one or two answers. That tells you very little. If the first call jumps straight into a price or a pitch, you may be answering a question the person never asked.</p>
    <p><strong>Example:</strong> a real estate lead enquires about "apartments in Rajagiriya". The caller sends a price list for three-bedroom units. The prospect actually wanted a two-bedroom rental for next year. A single question — "What are you looking for?" — would have changed the whole conversation.</p>

    <H3>6. Sales teams receive large numbers of unorganised leads</H3>
    <p>A spreadsheet of 300 names and numbers with no notes is hard to act on. Salespeople do not know who to call first, who was already contacted, or who said "call me next month". Without structure, the easiest leads get called and the rest are forgotten.</p>

    <H3>7. Customer feedback is not recorded</H3>
    <p>Every conversation with a lead contains useful information: what they liked, what worried them, which competitor they are considering, why the price felt high. When nobody writes this down, the business loses the insight — and the next person who calls the lead starts from zero.</p>
    <p>Recorded feedback also helps marketing. If many leads say "I thought this was a free offer", the ad copy needs fixing, not the sales team.</p>

    <MidCTA text="Generating leads but struggling to contact them all?" />

    <H3>8. Marketing and sales teams are disconnected</H3>
    <p>Marketing reports on leads and cost per lead. Sales reports on closed deals. Nobody reports on what happened in between. So marketing thinks it delivered, sales thinks the leads were poor, and the business cannot see where opportunities were lost.</p>
    <p>A shared follow-up record — with the call outcome for every lead — closes that gap. It lets both teams see which campaigns produce real conversations, not just form submissions.</p>

    <H3>9. There is no clear next step after the first conversation</H3>
    <p>A pleasant first call that ends with "okay, we'll be in touch" rarely leads anywhere. Every conversation should end with an agreed action: send a quotation, book a site visit, arrange a salesperson call on Thursday, or follow up after payday.</p>
    <p>If the next step is not recorded with a date, it usually does not happen.</p>

    <H3>10. Businesses stop following up too early</H3>
    <p>Many leads do not answer the first call. They are at work, driving, or do not recognise the number. Teams often try once, mark the lead as "no answer" and move on. A few additional attempts at different times — plus a short WhatsApp message explaining who is calling — often reach people who were genuinely interested.</p>

    <DataTable
      head={["Reason", "What it looks like", "Practical fix"]}
      rows={[
        ["Slow response", "Leads called days later", "Contact new leads the same day"],
        ["No follow-up", "Leads sit in a download", "Track every lead to an outcome"],
        ["No sales time", "Leads pushed down the list", "Separate first calls from sales calls"],
        ["No qualification", "Every lead treated the same", "Ask a few standard questions"],
        ["Wrong requirement", "Pitching before listening", "Start with 'What are you looking for?'"],
        ["Unorganised lists", "Huge sheets, no notes", "Status and notes for every row"],
        ["No feedback", "Insights lost after the call", "Record concerns and objections"],
        ["Teams disconnected", "Marketing vs sales blame", "Share one follow-up report"],
        ["No next step", "'We'll be in touch'", "Agree an action and a date"],
        ["Giving up early", "One attempt, then dropped", "Several attempts, calls + WhatsApp"],
      ]}
    />

    <H2>What happens when a lead is not followed up?</H2>
    <p>An enquiry that receives no timely communication does not stay warm. The person's attention moves on. They speak to a competitor, decide to postpone, or simply forget. When someone does eventually call, the conversation starts with "Sorry, which company is this?" — a much harder place to begin.</p>
    <p>There is also a hidden cost. You paid for that lead through advertising. Every uncontacted lead is budget spent with no chance of a return. If a campaign brings 200 leads and only 80 are ever called, you are effectively paying for 200 to get 80 conversations.</p>
    <UL items={[
      "Interest fades and the lead becomes harder to re-engage.",
      "Competitors who replied faster win the conversation.",
      "Your cost per real opportunity quietly rises.",
      "Marketing decisions are made on incomplete information.",
    ]} />

    <H2>Lead generation is only the beginning</H2>
    <p>It helps to see lead conversion as a chain. If any link is weak, the whole result suffers — no matter how good your ads are.</p>
    <Flow label="From ad to sales conversation" steps={["Advertising", "Lead Generation", "Lead Follow-Up", "Qualification", "Sales Follow-Up"]} />
    <p>Most businesses invest heavily in the first two stages through <A to="/facebook-ads-sri-lanka">Facebook advertising</A>, <A to="/google-ads-sri-lanka">Google Ads campaigns</A> and broader <A to="/social-media-lead-generation-sri-lanka">social media lead generation</A>. The middle stages — the first call and qualification — are where many leads are lost.</p>
    <p>Businesses that generate more enquiries than their internal team can handle can use <A to={SERVICE_URL}>lead follow-up services</A> to make the initial contact, understand customer requirements and identify prospects that need further sales attention. Your salespeople then spend their time on conversations with context, rather than on cold, unanswered calls.</p>
    <p>If you want the basics of how this stage works, our guide <A to="/blog/what-is-lead-follow-up">What Is Lead Follow-Up?</A> explains the full process step by step.</p>

    <H2>Sri Lankan considerations</H2>
    <UL items={[
      <><strong>WhatsApp is often the preferred channel.</strong> Many people will not answer an unknown number but will reply to a short WhatsApp message first.</>,
      <><strong>Language matters.</strong> Being able to speak in Sinhala, Tamil or English makes the first conversation easier and more natural.</>,
      <><strong>Timing matters.</strong> Calls during working hours may go unanswered; early evenings and weekends can work better for consumer leads.</>,
      <><strong>Price-first enquiries are common.</strong> A prospect asking "how much?" still has a requirement behind the question — find it before sending a price.</>,
    ]} />

    <H2>A simple action plan for this month</H2>
    <UL items={[
      "Export last month's leads and mark which were contacted, when and with what outcome.",
      "Set a same-day contact rule for new enquiries.",
      "Write five standard qualification questions for your first call.",
      "Add a status and notes column to every lead list.",
      "Agree a next action and date at the end of every conversation.",
      "Review outcomes weekly with both marketing and sales in the room.",
    ]} />
    <p>None of these steps require new software. They require someone to own the space between the enquiry and the sale.</p>
  </ArticleShell>
);

export default BlogPost161;
