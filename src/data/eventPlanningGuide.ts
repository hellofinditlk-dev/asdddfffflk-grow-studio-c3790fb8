export interface GuideSection { id: string; title: string; paragraphs: string[]; list?: string[] }

export const PLANNING_PATH = "/event-planning-sri-lanka";
export const PLANNING_CANONICAL = `https://cypherdigital.lk${PLANNING_PATH}`;
export const PLANNING_TITLE = "Event Planning Sri Lanka: Step-by-Step Guide & Checklist";
export const PLANNING_DESCRIPTION = "How to plan an event in Sri Lanka: timeline, budget, venues, monsoon timing, approvals, suppliers and a free checklist. Real examples from our events.";
export const PLANNING_H1 = "Event Planning in Sri Lanka: A Complete Step-by-Step Guide";
export const PLANNING_INTRO = "Event planning in Sri Lanka starts with a clear purpose, a realistic date and a budget that covers the venue, production, people and promotion. This guide walks you through each stage, from the first brief to the follow-up after guests leave, with practical notes on local seasons, venues, approvals and suppliers. Use it to plan the event yourself, or to prepare a strong brief before you speak to an event management company.";

export const planningSections: GuideSection[] = [
  { id: "plan-purpose", title: "Step 1: Define the Purpose, Audience and Success Measure", paragraphs: [
    "Every good event plan begins with one sentence: why this event exists. A product launch may exist to create awareness and enquiries, a graduation ceremony to honour students and families, and a staff conference to align a team on the year ahead. When the purpose is written down, decisions about venue, programme, décor and spending become much easier, because each option can be tested against that sentence.",
    "Next, describe the audience. Note the expected number of guests, who they are, which language they prefer, how they will travel and what they need to feel comfortable. A seminar for school leavers and parents needs different timings, seating and communication than a dinner for corporate clients. In Sri Lanka, many events serve mixed audiences, so plan Sinhala, Tamil and English communication where it matters.",
    "Finally, decide how you will judge success. It could be attendance against registrations, the number of enquiries collected, media or social coverage, guest feedback, or simply a programme delivered on time without problems. A measurable goal keeps the planning team focused and gives you a fair way to review the event afterwards."
  ], list: ["Purpose in one sentence", "Audience profile and expected guest count", "Preferred date range and city", "Total budget range and who approves spending", "How success will be measured"] },
  { id: "plan-timeline", title: "Step 2: Build a Realistic Planning Timeline", paragraphs: [
    "Lead time is one of the biggest factors in event quality and cost. Popular hotel ballrooms and conference halls in Colombo can be booked well ahead, especially in busy seasons, and good photographers, sound suppliers and décor teams also fill their calendars. Starting early gives you more choice and more time to compare quotations.",
    "The timeline below suits a mid-sized corporate or academic event. Small meetings can move faster, while large public events, international speakers or events needing approvals may need more time. Adjust it to your own approvals process, because internal sign-off is often the slowest step."
  ], list: [
    "8–12 weeks before: confirm purpose, budget range, date options and guest count; shortlist venues; request event management proposals",
    "6–8 weeks before: book the venue; confirm key suppliers such as sound, lighting, screens, décor, catering and photography; draft the programme",
    "4–6 weeks before: send invitations or open registration; start promotion; confirm speakers, hosts and performers",
    "2–3 weeks before: finalise the run sheet, seating, signage, printed material and staff roles; check any approvals",
    "1 week before: reconfirm every supplier in writing; share contact lists; prepare a weather and power backup plan",
    "Event day: arrive early for setup, run a technical rehearsal, brief staff and keep one person responsible for timing",
    "Within 1 week after: share photos and thank-you messages, follow up enquiries, settle invoices and review results"
  ] },
  { id: "plan-budget", title: "Step 3: Plan Your Budget by Category", paragraphs: [
    "Event costs in Sri Lanka vary widely with the city, venue, date, guest count and level of production, so there is no single price that fits every event. Instead of starting with a number, list every cost category and request itemised quotations for each one. This makes it easier to see where money goes and where you can save.",
    "Keep a contingency of part of the total budget for late changes, extra guests or price differences. Ask every supplier what is included, what is excluded, whether taxes and service charges are added, and what the payment and cancellation terms are. Written quotations protect both you and the supplier."
  ], list: ["Venue hire, food and beverage minimums, service charges and taxes", "Stage, sound, lighting, LED screens and power backup", "Décor, branding, backdrops, signage and printed material", "Photography, videography and live streaming", "Hosts, speakers, performers and their travel", "Event staff, ushers, registration desk and security", "Transport, accommodation and parking", "Invitations, promotion and digital advertising spend", "Event management or coordination fees", "Contingency for changes"] },
  { id: "plan-venue", title: "Step 4: Choose the Right Venue and Season", paragraphs: [
    "Shortlist venues that match your guest count, budget and style. Colombo offers hotel ballrooms, conference centres, university halls and outdoor spaces, while Kandy, Galle, Negombo and other cities suit regional audiences and destination events. Visit the venue at the same time of day as your event to check traffic, parking, noise, lighting and access for elderly or disabled guests.",
    "Weather matters in Sri Lanka. The southwest monsoon usually brings heavy rain to the western and southern coasts, including Colombo, from around May to September, while the northeast monsoon affects the north and east from around December to February. Inter-monsoon periods can also bring sudden afternoon showers. For any outdoor element, book a covered backup space or tent and agree the decision time for moving indoors.",
    "Also check the calendar. Public holidays, Poya days, school examinations and major festivals such as the Sinhala and Tamil New Year can affect guest availability, traffic and services. Alcohol is not sold on Poya days, which matters for dinners and launches that plan to serve it."
  ], list: ["Capacity for your seating layout, not only standing guests", "Stage, screen and power provision", "Parking, drop-off points and public transport access", "Load-in times for suppliers and setup hours", "Indoor backup for outdoor plans", "Food and beverage rules and outside supplier policies"] },
  { id: "plan-approvals", title: "Step 5: Check Approvals, Safety and Sound Rules", paragraphs: [
    "Requirements depend on the venue, the location and the type of event, so always confirm them early rather than assuming. Hotels and conference centres usually handle much of this for events held inside their premises, but public events, outdoor gatherings, roadside activations and events using loudspeakers late in the evening may need permission from local authorities or the police.",
    "Ask the venue which approvals they already hold and what the organiser must arrange. Plan crowd flow, emergency exits, first aid and security for the expected numbers. If you are using drones, pyrotechnics or temporary structures, confirm the rules and the supplier's experience before you commit. Keep copies of any permission letters on site on the event day."
  ] },
  { id: "plan-suppliers", title: "Step 6: Book and Coordinate Suppliers", paragraphs: [
    "Most events depend on several suppliers working together: sound and lighting, screens, stage and décor, catering, photography and video, printing, transport and staffing. Request quotations from more than one supplier where possible and compare what is included, not only the total amount.",
    "Coordination is where many events go wrong. Share one run sheet with every supplier, confirm arrival and setup times, and name one contact person for each supplier on the day. Schedule a technical rehearsal for presentations, microphones and videos before guests arrive. A short written confirmation a week before the event avoids most last-minute surprises."
  ] },
  { id: "plan-programme", title: "Step 7: Write the Programme and Run Sheet", paragraphs: [
    "The guest-facing programme shows the main moments: arrival, welcome, speeches, presentations, entertainment, meals and closing. The run sheet is the internal version, minute by minute, listing who does what, which microphone is used, which slide or video plays and when lights change.",
    "Keep speeches short and plan buffer time, because events in Sri Lanka often start a little after the advertised time while guests arrive. Assign a stage manager or host who can adjust timing politely. Traditional elements such as the lighting of the oil lamp, national anthem or religious observances should be planned and timed with the same care as presentations."
  ] },
  { id: "plan-promotion", title: "Step 8: Promote the Event and Manage Registrations", paragraphs: [
    "If your event needs an audience, promotion is part of the plan, not an afterthought. Use the channels your audience already uses: WhatsApp invitations, Facebook and Instagram posts, email to existing customers, LinkedIn for business audiences and, where suitable, paid social advertising. Start early enough to build reminders into the schedule.",
    "Use a simple registration form so you know expected numbers and can send reminders. Collect only the details you need and ask permission before using contact details for future marketing. Plan content capture too, so photos and short videos can be shared during and after the event."
  ] },
  { id: "plan-day", title: "Step 9: Manage the Event Day", paragraphs: [
    "On the day, the event lead should focus on timing and problem solving rather than doing every task personally. Arrive early, walk the venue, test sound and screens, check signage and seating, and brief staff on their roles, guest questions and emergency procedures.",
    "Keep a printed copy of the run sheet and supplier contacts, a charged phone and power bank, basic stationery, spare extension cables and a first-aid kit. Have a small registration team ready for walk-in guests, and agree in advance who decides on changes if a speaker is late or the weather turns."
  ] },
  { id: "plan-after", title: "Step 10: Follow Up and Review", paragraphs: [
    "The event is not finished when guests leave. Send thank-you messages, share selected photos and highlights, and follow up every enquiry quickly while interest is high. For business events, this follow-up is often where the real return comes from.",
    "Hold a short review with your team and suppliers. Compare attendance, enquiries and feedback with the success measure you set in Step 1, settle invoices, and note what to repeat or change next time. These notes make your next event easier to plan."
  ] },
];

export const eventTypeGuides: { title: string; text: string }[] = [
  { title: "Corporate events and conferences", text: "Focus on a clear agenda, reliable sound and presentation equipment, registration and comfortable seating. Plan breaks and networking time, and confirm who introduces each speaker." },
  { title: "Product launches", text: "Build the event around one strong reveal moment, with branding, lighting, media or influencer invitations and a way to capture enquiries. Coordinate social content before, during and after the launch." },
  { title: "Seminars, education and academic ceremonies", text: "Plan for students, parents and dignitaries, including protocol, seating order, certificate handling and clear announcements. Allow extra time for photographs." },
  { title: "Private celebrations", text: "Birthdays, anniversaries and family events need a comfortable venue, food that suits guests, décor that reflects the host and a relaxed programme. Agree the budget early, because small additions add up quickly." },
];

export const planningChecklist: string[] = [
  "Purpose, audience and success measure written down",
  "Budget range approved, with contingency",
  "Date checked against holidays, Poya days and the weather season",
  "Venue booked with written terms",
  "Approvals and safety needs confirmed",
  "Suppliers confirmed in writing with arrival times",
  "Programme and minute-by-minute run sheet shared",
  "Invitations, promotion and registration running",
  "Event-day kit, staff briefing and backup plans ready",
  "Follow-up messages, invoices and review scheduled",
];

export const hireAdvice: string[] = [
  "Hiring an event management company makes sense when you have a large guest list, several suppliers, a tight deadline or no internal team with time to coordinate. A good planner turns your brief into a proposal, manages suppliers and runs the day so you can focus on your guests.",
  "When comparing companies, ask for an itemised proposal, the scope of work, who will be your contact, what happens if plans change and examples of similar events they have handled. Cypher Digital prepares written proposals within 24–48 hours of receiving a brief and can combine event planning with event promotion and content.",
];

export const planningFaqs: { q: string; a: string }[] = [
  { q: "How far in advance should I start event planning in Sri Lanka?", a: "For a mid-sized corporate or academic event, start around 8–12 weeks before the date. Popular venues and suppliers book early, and internal approvals often take longer than expected. Smaller meetings can be planned faster." },
  { q: "What is the best time of year to hold an outdoor event in Sri Lanka?", a: "It depends on the location. Colombo and the south-west coast usually see heavy rain during the southwest monsoon from around May to September, while the north and east are affected from around December to February. Always keep an indoor or covered backup for outdoor plans." },
  { q: "How do I estimate an event budget?", a: "List every cost category, such as venue, food, sound and lighting, décor, photography, staff, transport and promotion, and request itemised quotations for each. Add a contingency for changes. Costs vary with date, city, guest count and production level." },
  { q: "Do I need permission to hold an event?", a: "Events inside hotels and conference venues are often covered by the venue's arrangements, but public, outdoor or roadside events and late-night amplified sound may need permission from local authorities or the police. Confirm requirements with your venue early." },
  { q: "What should be in an event run sheet?", a: "A minute-by-minute timeline with each activity, the responsible person, required equipment, slides or videos, microphone use and contact details for every supplier." },
  { q: "Can I plan the event myself and get help only on the day?", a: "Yes. Some organisers book the venue and suppliers themselves and use an event team only for coordination on the day. Agree the handover details, contacts and responsibilities in writing." },
  { q: "When should I hire an event management company instead?", a: "Consider it when the event is large, involves many suppliers, has a short deadline or your team lacks time. A planner can manage the brief, suppliers, programme and event-day coordination." },
];

export function eventPlanningSchema() {
  const org = { "@type": "Organization", "@id": "https://cypherdigital.lk/#organization", name: "Cypher Digital", url: "https://cypherdigital.lk/" };
  return { "@context": "https://schema.org", "@graph": [
    { "@type": "Article", "@id": `${PLANNING_CANONICAL}#article`, headline: PLANNING_H1, description: PLANNING_DESCRIPTION, url: PLANNING_CANONICAL, mainEntityOfPage: PLANNING_CANONICAL, inLanguage: "en-LK", author: org, publisher: org, about: ["Event planning", "Sri Lanka"] },
    { "@type": "FAQPage", "@id": `${PLANNING_CANONICAL}#faq`, mainEntity: planningFaqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://cypherdigital.lk/" },
      { "@type": "ListItem", position: 2, name: "Event Management Sri Lanka", item: "https://cypherdigital.lk/event-management-sri-lanka" },
      { "@type": "ListItem", position: 3, name: "Event Planning Guide", item: PLANNING_CANONICAL },
    ] },
  ] };
}
