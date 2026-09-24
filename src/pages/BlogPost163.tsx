import { ArticleShell, H2, H3, A, UL, Flow, Callout, DataTable, MidCTA, SERVICE_URL } from "@/components/lead-cluster/ArticleKit";

const faqs = [
  { q: "How quickly should I contact a Facebook lead?", a: "The same day if possible. Facebook lead forms are quick to submit, so people may forget they enquired if you wait too long." },
  { q: "Why do Facebook leads often not answer calls?", a: "They may not recognise your number, may be at work, or may have submitted the form casually. A short WhatsApp message introducing your business, followed by calls at different times, usually helps." },
  { q: "Should I use higher-intent lead forms?", a: "Adding a question or a review step can reduce accidental submissions. It may lower lead volume, so test and compare the quality of conversations, not just the number of leads." },
  { q: "Where do I find my Facebook leads?", a: "In Meta Business Suite's Leads Centre, or through a download from Ads Manager. Many businesses also connect lead forms to a spreadsheet or CRM so new leads appear automatically." },
  { q: "Can someone else follow up my Facebook leads?", a: "Yes. An outsourced team can make the first call, understand requirements and return a structured list so your sales team only focuses on relevant prospects." },
];

const BlogPost163 = () => (
  <ArticleShell
    slug="how-to-follow-up-facebook-leads"
    metaTitle="How to Follow Up With Facebook Leads | Cypher Digital"
    description="Learn how to follow up Facebook leads, understand prospect requirements, qualify enquiries and prepare relevant opportunities for your sales team."
    h1="How to Follow Up With Facebook Leads"
    crumb="Facebook Lead Follow-Up"
    category="Facebook Leads"
    readMins={10}
    faqs={faqs}
    ctaHeading="Need help following up your Facebook leads?"
    related={[
      { to: "/blog/what-is-lead-follow-up", label: "What Is Lead Follow-Up? A Complete Guide for Businesses" },
      { to: "/blog/how-to-qualify-leads", label: "How to Qualify Leads Before Your Sales Team Calls" },
      { to: "/blog/why-marketing-leads-are-not-converting", label: "Why Your Marketing Leads Are Not Converting" },
    ]}
    intro={<>
      <p>Facebook and Instagram lead forms are one of the fastest ways for Sri Lankan businesses to collect enquiries. A person taps your ad, their name and number are pre-filled, and they submit in seconds.</p>
      <p>That convenience is also the challenge. Because submitting is so easy, the real work starts after the form arrives. This guide explains exactly what should happen next — and how to turn Facebook enquiries into genuine sales opportunities.</p>
    </>}
  >
    <H2>The short answer</H2>
    <p>Contact every Facebook lead quickly, confirm what they enquired about, understand their requirement, ask a few qualification questions, record their feedback, agree a next action and pass relevant prospects to your sales team with notes attached.</p>

    <Flow label="The Facebook lead journey" steps={["Facebook Ad", "Lead Form", "Lead Received", "First Contact", "Requirement Understanding", "Qualification", "Sales Follow-Up"]} />

    <H2>Why Facebook leads need follow-up</H2>
    <p>A Facebook lead is usually less "warm" than a person who searched for you on Google or walked into your shop. They were scrolling, saw your ad, and were interested enough to tap. That is valuable, but it is an early signal.</p>
    <UL items={[
      <><strong>Pre-filled forms make submission effortless</strong>, so some people enquire casually or by mistake.</>,
      <><strong>People forget quickly.</strong> They may have seen dozens of ads since yours.</>,
      <><strong>Many are comparing options.</strong> Several businesses may be calling the same person.</>,
      <><strong>The form tells you little.</strong> Name and phone number do not reveal the requirement.</>,
    ]} />
    <p>Without follow-up, a Facebook lead is just a number in a spreadsheet. With good follow-up, it becomes a conversation.</p>

    <H2>What should you do when a Facebook lead arrives?</H2>

    <H3>Step 1: Contact the lead</H3>
    <p>Call as soon as practically possible, ideally the same day. If they do not answer, send a short WhatsApp message: introduce your business, mention the ad or offer they responded to, and ask when is a good time to talk.</p>
    <p>Try again at a different time of day. Many consumer leads answer more easily in the early evening.</p>

    <H3>Step 2: Confirm what they enquired about</H3>
    <p>Open by reminding them: "You recently enquired about our weekend spa package on Facebook." This helps them place you and filters out accidental submissions straight away.</p>

    <H3>Step 3: Understand their requirement</H3>
    <p>Ask what they are looking for before explaining your offer. A person who enquired about a "home loan" ad may actually want advice on eligibility. A parent who enquired about a course may be looking for their child, not themselves.</p>

    <H3>Step 4: Ask qualification questions</H3>
    <p>Keep it short and natural. Useful questions include:</p>
    <UL items={[
      "Which product or service are you interested in?",
      "When are you hoping to decide or start?",
      "Do you have any questions before moving forward?",
      "Would a quotation or more details be helpful?",
      "Would you like a member of our team to contact you?",
    ]} />
    <p>For a full list of questions, see <A to="/blog/how-to-qualify-leads">how to qualify leads before your sales team calls</A>.</p>

    <H3>Step 5: Record the customer feedback</H3>
    <p>Write down what the person said — their requirement, concerns, questions and interest level. Feedback like "the price in the ad looked too low to be real" or "I only wanted Kandy branches" is gold for improving both your ads and your offer.</p>

    <H3>Step 6: Identify the next action</H3>
    <p>End each conversation with a clear step: send a price list on WhatsApp, book a visit, call back after the 25th, or arrange a salesperson call. Record the date.</p>

    <H3>Step 7: Pass relevant information to the sales team</H3>
    <p>Give your sales team only the prospects who need a commercial conversation, with the notes attached. They can open with "I understand you're looking for a two-bedroom unit near Nugegoda" instead of starting from scratch.</p>

    <MidCTA text="Too many Facebook leads for your team to call?" />

    <H2>Sample Facebook lead follow-up sheet</H2>
    <p>A simple, shared sheet is often enough. Here is an example layout (sample data only):</p>
    <DataTable
      head={["Lead", "Enquired about", "Outcome", "Next step"]}
      rows={[
        ["Lead A", "Family holiday package", "Interested", "Send quotation by WhatsApp today"],
        ["Lead B", "Evening English course", "Needs more information", "Send schedule, call Friday"],
        ["Lead C", "Solar installation", "Follow up later", "Call after 1st of next month"],
        ["Lead D", "Car lease offer", "Not interested", "Close — enquired by mistake"],
        ["Lead E", "Salon bridal package", "No answer", "WhatsApp sent, retry evening"],
      ]}
    />

    <H2>What if your team has too many Facebook leads?</H2>
    <p>A well-run campaign can bring in more enquiries than your internal team can personally contact — especially during launches, seasonal promotions or when ads perform better than expected. When this happens, leads wait, interest fades and the campaign appears to "fail" even though the ads did their job.</p>
    <p>Options include adding a dedicated follow-up person, slowing the ad budget to match your calling capacity, or outsourcing the initial follow-up. An outsourced first-call process means every lead is contacted and qualified, while your own sales team keeps control of pricing and closing.</p>
    <p>If your business receives more Facebook enquiries than your sales team can personally contact, you can use a structured service to <A to={SERVICE_URL}>follow up your Facebook leads</A>, understand their requirements and identify prospects that need further sales attention.</p>

    <Callout title="Match lead volume to follow-up capacity">
      Before increasing your Facebook ad budget, ask: can we contact every extra lead within a day? If not, fix follow-up first — otherwise you are paying for leads nobody calls.
    </Callout>

    <H2>Improving the leads before they arrive</H2>
    <p>Follow-up works best when the form is set up well. Good <A to="/social-media-lead-generation-sri-lanka">social media lead generation</A> reduces low-quality submissions by making the offer clear and asking one or two meaningful questions. Well-designed <A to="/facebook-ads-sri-lanka">Facebook ad campaigns</A> also help by targeting people likely to be relevant, and clear <A to="/facebook-ad-design-sri-lanka">Facebook ad creatives</A> set honest expectations so the follow-up call does not start with confusion.</p>

    <H2>Mistakes to avoid</H2>
    <UL items={[
      "Downloading leads once a week instead of daily.",
      "Calling from an unknown number with no WhatsApp introduction.",
      "Sending a price list without asking about the requirement.",
      "Marking a lead 'not interested' after one missed call.",
      "Not sharing call feedback with the person running the ads.",
    ]} />

    <H2>Sri Lankan considerations</H2>
    <UL items={[
      <><strong>Language choice.</strong> Offer to continue in Sinhala, Tamil or English — whichever the person is comfortable with.</>,
      <><strong>WhatsApp-first contact.</strong> Many people prefer a message before a call from an unknown number.</>,
      <><strong>Location matters.</strong> Confirm the city or area early — a Jaffna lead for a Colombo-only service needs a different response.</>,
      <><strong>Payday timing.</strong> Consumer purchase decisions often shift around salary dates; note preferred follow-up timing.</>,
    ]} />
  </ArticleShell>
);

export default BlogPost163;
