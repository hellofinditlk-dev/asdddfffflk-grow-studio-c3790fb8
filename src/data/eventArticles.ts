// Supporting event blog articles. Paragraph text may contain [anchor](/path) internal links.
export interface EventArticleSection { id: string; title: string; paragraphs: string[]; list?: string[] }
export interface EventArticle {
  slug: string; title: string; description: string; h1: string; intro: string; date: string;
  photoIndexes: number[]; sections: EventArticleSection[]; faqs: { q: string; a: string }[];
}

export const eventArticles: EventArticle[] = [
  {
    slug: "event-venues-colombo-guide",
    title: "Event Venues in Colombo: How to Choose the Right Venue",
    description: "How to choose an event venue in Colombo: venue types, capacity, parking, AV, monsoon backup and the questions to ask before you book. Practical checklist.",
    h1: "Event Venues in Colombo: How to Choose the Right Venue for Your Event",
    intro: "The venue decides more about your event than almost any other choice. It sets the date you can use, the number of guests you can invite, the look of your photos, the catering options and much of the budget. Colombo offers a wide mix of event venues, from five-star hotel ballrooms to university auditoriums, rooftop spaces and garden settings. This guide explains how to compare them, what to check on a site visit and which questions to ask before you sign, so the venue supports your event instead of limiting it.",
    date: "2026-11-26",
    photoIndexes: [7, 8, 3],
    sections: [
      {
        id: "start-with-the-brief",
        title: "Start With the Event Brief, Not the Venue",
        paragraphs: [
          "Many organisers start by visiting a venue they already like. A better first step is to write down what the event must achieve. A product launch needs a stage, strong lighting and space for media. A seminar needs good acoustics, a projector and comfortable seating for long sessions. A staff celebration needs a dance floor, catering space and easy transport home. When the purpose is clear, you can rule out unsuitable venues quickly and compare the rest on the points that matter.",
          "Your brief should include the purpose, the likely guest count, the preferred dates with one or two alternatives, the format (seated, standing, theatre, classroom or banquet), the programme length and any must-haves such as live streaming or exhibition stalls. If you are still building that brief, our [event planning Sri Lanka guide](/event-planning-sri-lanka) walks through each step, from timeline to budget.",
        ],
      },
      {
        id: "venue-types",
        title: "The Main Types of Event Venues in Colombo",
        paragraphs: [
          "Colombo venues fall into a few broad groups. Each one suits different events, and each one brings its own strengths and trade-offs.",
        ],
        list: [
          "Hotel ballrooms and function rooms: in-house catering, AV support, parking and a polished setting. Suits conferences, award nights, launches and weddings. Usually includes a minimum food and beverage spend.",
          "Hotel meeting rooms and boardrooms: smaller spaces for workshops, training, press briefings and board meetings. Easy to book for half or full days.",
          "Conference and exhibition centres: large halls for trade shows, expos and conventions with stall layouts and loading access. Catering and AV may be supplied by separate vendors.",
          "University and institutional auditoriums: fixed theatre seating, stages and a formal atmosphere for academic ceremonies, inaugurations and public lectures. Booking rules and approvals vary by institution.",
          "Rooftop, restaurant and lounge spaces: a relaxed feel for networking evenings, brand activations and small launches. Capacity and noise limits are often stricter.",
          "Garden and outdoor venues: open space for get-togethers, family days and festive events. They need a clear plan for rain, power, toilets and shade.",
        ],
      },
      {
        id: "capacity-and-layout",
        title: "Capacity and Layout: Check the Real Numbers",
        paragraphs: [
          "A venue's advertised capacity is usually the maximum for one specific layout, often standing or theatre style. The same room may seat far fewer guests at banquet tables, and fewer again once you add a stage, a buffet line, a photo booth and an AV desk. Ask the venue for capacity figures by layout and request a floor plan you can mark up.",
          "Plan for the guest count you expect plus a margin for walk-ins and staff. Leave space for registration, waiting areas, wheelchair access and clear walkways. A room that is slightly too large can be divided with drapes and lighting. A room that is too small cannot be fixed on the day.",
        ],
      },
      {
        id: "location-access-parking",
        title: "Location, Access and Parking",
        paragraphs: [
          "Colombo traffic can turn a 20-minute drive into an hour, especially on weekday evenings. Think about where most guests will travel from and when they will arrive. Venues near main roads such as Galle Road, Duplication Road or Baseline Road are easier to reach, but can be slow at peak times. Set the start time with traffic in mind and share clear directions and a map pin with every invitation.",
          "Ask how many parking spaces are available, whether valet service is offered and where drivers can wait. For VIP guests, check drop-off points and a separate entrance. For outstation guests, a venue with nearby accommodation saves stress.",
        ],
      },
      {
        id: "weather-and-season",
        title: "Weather, Monsoons and Backup Plans",
        paragraphs: [
          "Colombo sits on the west coast, which receives heavy rain during the south-west monsoon, roughly from May to September, with inter-monsoon showers around October and November. Afternoon downpours can arrive with little warning at almost any time of year. Any outdoor element, from a welcome drink on the lawn to a full garden event, needs a covered alternative that is confirmed in writing.",
          "Ask the venue what happens if it rains: is there an indoor room held for you, at what cost, and by what time must you decide? Check drainage, covered walkways between car parks and entrances, and where generators and sound equipment will sit if they need protection.",
        ],
      },
      {
        id: "av-power-technical",
        title: "Audio-Visual, Power and Technical Needs",
        paragraphs: [
          "Sound and screens make or break most corporate events. Check the in-house AV list: microphones, speakers, projectors or LED walls, lighting and stage size. Ask whether you may bring an outside AV supplier and whether a fee applies. Confirm the power supply, the generator backup and the internet speed if you plan to live stream or run online registration.",
          "Visit at the same time of day as your event. Natural light that looks beautiful at 10am may wash out a projector screen. Noise from a neighbouring function room or a busy road may make a quiet seminar difficult.",
        ],
      },
      {
        id: "catering-and-suppliers",
        title: "Catering, Decor and Outside Suppliers",
        paragraphs: [
          "Hotels usually require you to use their own catering and may charge per head with a minimum guarantee. Independent venues may let you bring a caterer of your choice. Ask about menu tasting, dietary options, service staff and timing for meals between sessions.",
          "Ask what decor is allowed, including fixing to walls, open flames, confetti and fog machines, and what time suppliers can enter to set up. A venue that allows setup the night before gives you far more breathing room than one that opens two hours before guests arrive.",
        ],
      },
      {
        id: "approvals-and-rules",
        title: "Rules, Approvals and Contracts",
        paragraphs: [
          "Read the contract carefully before you pay a deposit. Check the cancellation policy, the date change policy, overtime charges, noise and music limits, service charge and taxes, and what is included in the quoted rate. For public events, music, outdoor activity or road access, you may need permissions from local authorities or the police, so ask the venue which approvals other organisers usually obtain.",
          "Get every promise in writing: room hold times, rain backup, AV items, parking and setup access. A short written schedule agreed with the venue team prevents misunderstandings on the day.",
        ],
      },
      {
        id: "compare-quotes",
        title: "How to Compare Venue Quotes Fairly",
        paragraphs: [
          "Two venue quotes can look very different even when the final cost is similar. One hotel may quote a higher per-head rate that includes the sound system, a stage, welcome drinks and parking. Another may quote less per head but charge separately for each of those items. Before you compare, list every item you need and ask each venue to price the same list. Add service charge and taxes to every quote, because some quotes show them and some do not.",
          "Check the minimum guarantee. If the venue requires payment for a fixed number of guests, a lower turnout will not reduce the bill. Ask when the final number must be confirmed and how much flexibility you have after that date. Also ask what the deposit secures, when the balance is due and whether the rate is fixed if the event moves to another month.",
          "Finally, weigh the hidden value. A venue with a helpful events coordinator, reliable generators and a clear rain plan may be worth more than a slightly cheaper option with uncertain support. Speak to the person who will actually be present on your event day, not only the sales team.",
        ],
      },
      {
        id: "guest-experience",
        title: "Think About the Guest Experience From Arrival to Exit",
        paragraphs: [
          "Walk through the event as a guest would. Where do they park, and how far do they walk? Is the entrance clearly signposted? Where do they register, and how long might the queue be? Are toilets close to the main room and enough for your guest count? Is there a quiet space for VIPs, speakers or nursing mothers? Is the exit easy at the end of the night, when everyone leaves at once?",
          "For corporate events, also think about the people working at the event. Speakers need a green room close to the stage, the AV team needs a clear view of the screen, and registration staff need power points for laptops and printers. Photographers and videographers need space to move without blocking guests. Planning these working areas early keeps the event running smoothly and makes the final photos and videos look far more professional.",
          "Small details shape how guests remember an event: air conditioning that keeps a full room comfortable, a photo spot with good light, clear sightlines to the stage and seating that works for elderly guests. Note these on your site visit and compare venues on them, not only on price and size.",
        ],
      },
      {
        id: "site-visit-checklist",
        title: "Site Visit Checklist",
        paragraphs: ["Take this list with you on every venue visit and compare answers side by side."],
        list: [
          "Capacity for your exact layout, with a floor plan",
          "Available dates and how long a provisional hold lasts",
          "What the rate includes: room, catering, AV, service charge and taxes",
          "Parking spaces, valet, drop-off points and accessibility",
          "Rain backup space and the deadline to decide",
          "In-house AV list and rules for outside suppliers",
          "Power, generator backup and internet speed",
          "Setup and breakdown times, and overtime charges",
          "Decor rules and noise limits",
          "Cancellation and date change terms",
          "A named contact person for the event day",
        ],
      },
      {
        id: "real-examples",
        title: "What We Learned From Real Events",
        paragraphs: [
          "Our team has coordinated sessions in hotel settings, such as the Study in Moldova information session at Taj Samudra, and formal academic ceremonies for the University of Kelaniya. Hotel settings made catering, seating and guest arrival simple, while the academic ceremonies relied on careful stage layout, flags, lecterns and photography positions. In both cases, the work done before the day, including floor plans, run sheets and supplier timings, mattered more than the venue name.",
        ],
      },
      {
        id: "when-to-get-help",
        title: "When to Get Help Choosing a Venue",
        paragraphs: [
          "If you are planning a large conference, a product launch with media, or an event with several suppliers, a coordinator can shortlist venues, negotiate inclusions, run the site visits and manage the schedule. That saves time and reduces the risk of surprises. Speak to an [event management company in Sri Lanka](/event-management-sri-lanka) once you know your purpose, date range and guest count, and ask for a written proposal before you commit.",
          "If you plan to do it yourself, use the checklist above, compare at least three venues, and keep every confirmation in one shared document. For corporate audiences, our [corporate event management](/corporate-event-management-sri-lanka) page explains how we handle conferences and seminars.",
        ],
      },
    ],
    faqs: [
      { q: "How early should I book an event venue in Colombo?", a: "For large events, peak seasons and popular weekend dates, start looking several months ahead. Smaller meetings and weekday events can often be booked with less notice. Ask how long a venue will hold a date provisionally before a deposit is needed." },
      { q: "What is usually included in a hotel venue rate?", a: "It varies by hotel. Many quote per guest and include the room, set menu, basic sound system and standard furniture. Service charge, taxes, extra AV, decor and overtime are often separate. Always ask for an itemised written quote." },
      { q: "Do I need a rain plan for an outdoor event in Colombo?", a: "Yes. Rain can arrive at almost any time of year, especially during the south-west monsoon from about May to September. Confirm a covered backup space in writing, with the cost and the time by which you must decide." },
      { q: "Can I bring my own caterer or AV supplier?", a: "Some venues allow it, often with a fee, while most hotels require in-house catering. Ask before you shortlist a venue so the rules do not limit your plans later." },
      { q: "Can Cypher Digital help me choose a venue?", a: "Yes. Share your purpose, dates and guest count on WhatsApp and we will prepare a written proposal, including venue options and coordination, within 24–48 hours." },
    ],
  },
  {
    slug: "event-budget-planning-sri-lanka",
    title: "Event Budget Planning in Sri Lanka: What to Include",
    description: "Plan an event budget in Sri Lanka: the cost categories to include, how to request and compare quotes, contingency, payment schedules and a budget template.",
    h1: "Event Budget Planning in Sri Lanka: What to Include and Where Costs Go",
    intro: "An event budget in Sri Lanka should cover seven main areas: venue, food and drink, production and AV, decor, people, promotion and a contingency reserve. The exact cost of each depends on your date, guest count, location and suppliers, so the most reliable figures come from written quotes, not price lists. This guide shows you how to build the budget line by line, how to compare quotes fairly and how to keep spending under control from the first brief to the final invoice.",
    date: "2026-11-26",
    photoIndexes: [1, 3, 9],
    sections: [
      {
        id: "why-budget-first",
        title: "Why Should You Set the Budget Before Booking Anything?",
        paragraphs: [
          "The budget shapes every other decision: the venue you can shortlist, the number of guests you can invite, the quality of the stage and sound, and how much promotion you can run. When the budget comes last, organisers often book a venue they love, then discover there is little left for catering, AV or photography. Setting a total figure, even a rough one, before you book means every supplier conversation starts from the same limit.",
          "Begin with the outcome you need. A product launch that must attract media and social coverage will spend more on staging, lighting and content. An internal training day will spend more on the venue, meals and materials. Our [event planning Sri Lanka guide](/event-planning-sri-lanka) explains how to write the purpose and brief that sit behind the budget.",
        ],
      },
      {
        id: "cost-categories",
        title: "What Cost Categories Belong in an Event Budget?",
        paragraphs: [
          "Use these categories as the rows of your budget sheet. Not every event needs every line, but checking each one prevents surprises later.",
        ],
        list: [
          "Venue: hire charge or minimum spend, setup and breakdown time, overtime, security deposit and service charge.",
          "Food and beverages: per-head menus, welcome drinks, tea breaks, special diets, staff meals and corkage if you bring your own drinks.",
          "Production and AV: sound system, microphones, LED wall or projector, lighting, stage, live streaming and the technical crew.",
          "Decor and branding: backdrops, banners, signage, florals, table styling, photo areas and printed materials.",
          "People: host or MC, speakers, performers, ushers, registration staff, event coordinators and security.",
          "Content and promotion: photography, videography, invitations, social media posts, paid ads and printing.",
          "Logistics: transport, accommodation for speakers or outstation guests, permits, insurance and equipment delivery.",
          "Gifts and extras: guest packs, awards, souvenirs and thank-you items.",
          "Contingency: a reserve, often around 10 percent of the total, for changes and items you did not expect.",
        ],
      },
      {
        id: "fixed-vs-variable",
        title: "Which Costs Are Fixed and Which Change With Guest Numbers?",
        paragraphs: [
          "Splitting costs into fixed and variable lines makes the budget easier to manage. Fixed costs stay the same whether 80 or 120 guests arrive: the stage, the sound system, the backdrop, the MC and the photographer. Variable costs rise with every extra guest: meals, drinks, chairs, gift packs, printed name tags and sometimes transport.",
          "When the budget is tight, look first at variable costs, because a small saving per head multiplies quickly. When guest numbers are uncertain, confirm the venue's minimum guarantee and the date by which the final number must be given. That one date has a large effect on the final bill.",
        ],
      },
      {
        id: "getting-quotes",
        title: "How Do You Get Accurate Quotes From Suppliers in Sri Lanka?",
        paragraphs: [
          "Suppliers can only quote accurately when they receive the same clear brief. Send each one the date, start and end times, venue, guest count, layout and a short description of what you need. Ask for an itemised quote that shows quantities, unit rates, taxes, service charges, transport and setup fees.",
          "Request at least two or three quotes for the larger categories, such as venue, catering and AV. Ask what is excluded, how long the quote is valid and what deposit is needed to hold the date. If a quote is much lower than the others, check whether it leaves out items the others include, such as a backup generator or a technician on site.",
        ],
      },
      {
        id: "compare-quotes",
        title: "How Should You Compare Quotes Fairly?",
        paragraphs: [
          "Place every quote in the same spreadsheet, line by line. Add missing items to the cheaper quote at a realistic cost so you are comparing like with like. Include service charge and taxes in every total, since some suppliers show them separately.",
          "Look beyond price. Reliability, experience with similar events, response time and on-site support all matter. A supplier who answers questions quickly and visits the venue before the day can save far more than a small price difference. Ask for examples of similar work and speak to the person who will manage your event on the day.",
        ],
      },
      {
        id: "payment-schedule",
        title: "How Do Deposits and Payment Schedules Work?",
        paragraphs: [
          "Most venues and suppliers ask for a deposit to confirm a booking, with the balance due before or shortly after the event. Record every deposit, due date and cancellation term in your budget sheet. Missing a payment date can mean losing a date or a supplier during a busy season.",
          "Spread payments where possible, and avoid paying the full amount long before the event unless the terms are clear. Keep receipts and written confirmations together in one shared folder so that anyone on the team can check what has been paid.",
        ],
      },
      {
        id: "seasonal-factors",
        title: "Which Sri Lankan Seasons and Dates Affect Event Costs?",
        paragraphs: [
          "Demand for venues and suppliers rises during the wedding season, around Sinhala and Tamil New Year in April, and in November and December when many companies hold year-end parties. Popular weekend dates book early, and some suppliers may charge more or have limited availability. Poya days bring restrictions, including on the sale of alcohol, so check the calendar before you fix a date.",
          "Weather affects the budget too. Outdoor events during the monsoon months need tents, flooring, extra power protection and covered walkways, which add cost. Building a rain plan into the budget from the start is cheaper than arranging it at the last minute.",
        ],
      },
      {
        id: "saving-money",
        title: "How Can You Reduce Costs Without Lowering Quality?",
        paragraphs: [
          "Small changes often save more than cutting a whole category. Consider these options before reducing the guest experience.",
        ],
        list: [
          "Choose a weekday or a less busy month when venues may be more flexible.",
          "Use one strong stage backdrop and good lighting instead of decor spread across the whole room.",
          "Combine suppliers, such as AV and lighting, to reduce transport and setup fees.",
          "Shorten the programme so that one meal service covers the event.",
          "Send digital invitations and use social media for promotion instead of printed mailers.",
          "Reuse branded items such as banners and pull-up stands at future events.",
          "Lock in guest numbers early to avoid paying for empty seats.",
        ],
      },
      {
        id: "tracking-spend",
        title: "How Do You Keep the Budget Under Control During Planning?",
        paragraphs: [
          "Keep three columns for each line: estimated, quoted and actual. Update the sheet whenever a quote arrives or a change is agreed. Ask suppliers to confirm any extra cost in writing before the work is done, especially overtime, additional equipment or extra meals on the day.",
          "Name one person who approves spending. When several people agree changes with suppliers, costs grow without anyone noticing. A weekly budget check in the final month keeps everyone aware of where the money is going.",
        ],
      },
      {
        id: "budget-by-event-type",
        title: "How Do Budgets Differ by Type of Event?",
        paragraphs: [
          "Different events put their money in different places. A corporate conference usually spends most on the venue, meals across the day, sound, screens and speaker arrangements. Registration, name badges and printed or digital programmes add smaller but important lines. If the conference runs over two days, accommodation and transport for speakers can become a large item.",
          "A product launch puts more weight on the stage, lighting, the reveal moment, branding, photography and video. Media and influencer invitations, guest packs and paid social promotion often follow. Because the launch content keeps working online after the event, many brands treat photography and video as an investment rather than an extra.",
          "Academic ceremonies and inaugurations focus on protocol, stage dressing, flags and lecterns, seating for dignitaries, refreshments and the official photographs. Staff parties and annual get-togethers spend more on food, entertainment, activities and transport. Private celebrations such as weddings and milestone birthdays tend to spend most on venue, catering, decor and photography.",
          "Knowing where your type of event usually spends helps you set realistic limits for each category and spot a quote that looks out of balance.",
        ],
      },
      {
        id: "common-mistakes",
        title: "What Are the Most Common Event Budget Mistakes?",
        paragraphs: [
          "The first mistake is starting without a total limit, which leads to small additions that add up to a large overspend. The second is forgetting service charge and taxes until the final invoice. The third is booking the venue before checking catering rules, minimum guarantees and AV inclusions, which can force expensive changes later.",
          "Other common problems include leaving no contingency, agreeing extra items verbally on the day, paying full amounts too early and not planning for weather. Each of these can be avoided with a clear budget sheet, written confirmations and one person responsible for approving changes.",
        ],
      },
      {
        id: "budget-template",
        title: "A Simple Event Budget Template",
        paragraphs: ["Copy these columns into a spreadsheet and add one row for each item in your categories."],
        list: [
          "Category (venue, catering, AV, decor, people, promotion, logistics, extras, contingency)",
          "Item and description",
          "Supplier name and contact",
          "Quantity and unit rate",
          "Estimated cost",
          "Quoted cost",
          "Actual cost",
          "Deposit paid and date",
          "Balance due and date",
          "Notes on inclusions, exclusions and cancellation terms",
        ],
      },
      {
        id: "real-example",
        title: "What Real Events Teach Us About Budgets",
        paragraphs: [
          "At events such as the FoodCycler Eco 5 product launch and the University of Kelaniya MHRM inauguration, the costs that mattered most were the ones guests saw directly: the stage, the sound, the programme flow and the photographs. Planning those first, then fitting the remaining items around them, gave a clear structure for decisions. The same approach works for any size of event.",
          "If you are choosing a location, our guide to [event venues in Colombo](/blog/event-venues-colombo-guide) explains how to compare venue quotes and what to check on a site visit.",
        ],
      },
      {
        id: "get-help",
        title: "When Should You Ask for a Managed Event Quote?",
        paragraphs: [
          "If your event has several suppliers, a tight timeline or important guests, one coordinated quote can be easier to manage than a dozen separate ones. Ask an [event management company in Sri Lanka](/event-management-sri-lanka) for a written proposal that lists each item, what is included and what is not. Compare it with your own budget sheet before you decide.",
          "For business events such as conferences and seminars, see our [corporate event management](/corporate-event-management-sri-lanka) page for the services we coordinate.",
        ],
      },
    ],
    faqs: [
      { q: "How much does an event cost in Sri Lanka?", a: "It depends on the date, guest count, venue, menu, production and suppliers. The reliable way to know is to send the same brief to each supplier and compare itemised written quotes." },
      { q: "How much contingency should I keep?", a: "Many planners keep around 10 percent of the total budget as a reserve for changes, extra guests and items that were not in the original plan." },
      { q: "What costs do people usually forget?", a: "Service charge and taxes, overtime, staff meals, transport and setup fees, backup power, rain cover and the final photo and video editing are commonly missed." },
      { q: "Should I pay the full amount in advance?", a: "Usually a deposit holds the booking and the balance follows closer to the event. Check the payment schedule and cancellation terms in writing before paying." },
      { q: "Can Cypher Digital prepare an event quote?", a: "Yes. Share your purpose, date, guest count and location on WhatsApp and we will send a written proposal within 24–48 hours." },
    ],
  },
  {
    slug: "event-planner-vs-event-management-company-sri-lanka",
    title: "Event Planner vs Event Management Company in Sri Lanka",
    description: "Event planner or event management company in Sri Lanka? Compare roles, when to hire each, questions to ask, red flags and how to brief them well.",
    h1: "Event Planner vs Event Management Company in Sri Lanka: Which Do You Need?",
    intro: "An event planner in Sri Lanka usually helps you shape the idea, timeline and supplier choices, while an event management company takes responsibility for coordinating suppliers, production and the event day itself. Many providers offer both, so the real question is how much of the work you want to hand over. This guide explains the difference, when each option makes sense, what to ask before you hire and the warning signs to watch for.",
    date: "2026-11-26",
    photoIndexes: [2, 4, 10],
    sections: [
      {
        id: "what-planner-does",
        title: "What Does an Event Planner Do?",
        paragraphs: [
          "An event planner focuses on the early and creative stages. They help you turn an idea into a workable plan: the purpose of the event, the audience, the format, the date, a budget outline and a timeline. Many planners recommend venues and suppliers, prepare mood boards and draft the programme. Some stay involved until the day, while others hand over a finished plan for your own team to run.",
          "Planners are especially common for weddings, birthdays and private celebrations, where taste, style and family decisions take time. For smaller corporate events with a capable in-house team, a planner can provide structure without taking over every task.",
        ],
      },
      {
        id: "what-company-does",
        title: "What Does an Event Management Company Do?",
        paragraphs: [
          "An event management company takes on delivery. It coordinates the venue, AV and lighting, stage, decor, catering liaison, staffing, registration, run sheets and on-site supervision. It manages supplier timings, solves problems on the day and makes sure the programme runs to time. Many companies also handle promotion, photography and video so that the event is supported before and after it happens.",
          "This option suits conferences, seminars, product launches, academic ceremonies, brand activations and any event with several suppliers or senior guests. If you want one point of contact and one team accountable for the result, an [event management company in Sri Lanka](/event-management-sri-lanka) is usually the better fit.",
        ],
      },
      {
        id: "key-differences",
        title: "What Are the Key Differences?",
        paragraphs: ["The two roles often overlap, but these differences help you decide which one you need."],
        list: [
          "Scope: a planner shapes the plan; a management company delivers it end to end.",
          "Responsibility: with a planner, your team often runs the day; with a management company, its team runs the day.",
          "Supplier contracts: planners may recommend suppliers you book directly; management companies often coordinate or contract them for you.",
          "On-site team: planners may attend alone; management companies usually bring coordinators, technical leads and floor staff.",
          "Best for: planners suit private and smaller events; management companies suit corporate, public and multi-supplier events.",
        ],
      },
      {
        id: "when-planner",
        title: "When Is an Event Planner Enough?",
        paragraphs: [
          "Choose a planner when your event is small or medium sized, your team has time to coordinate suppliers, and you mainly need ideas, structure and recommendations. A planner is also useful when you are still exploring options and do not yet know your date, venue or budget.",
          "If you want to try planning on your own first, our [event planning Sri Lanka guide](/event-planning-sri-lanka) covers each step, and our [event budget planning guide](/blog/event-budget-planning-sri-lanka) helps you set realistic cost categories.",
        ],
      },
      {
        id: "when-company",
        title: "When Should You Hire an Event Management Company?",
        paragraphs: [
          "Hire an event management company when the event involves several suppliers, a fixed date that cannot move, important guests such as dignitaries or media, technical needs such as LED walls or live streaming, or a large guest count. It also makes sense when your team is busy with its own work and cannot spend weeks managing quotes, calls and confirmations.",
          "Corporate events benefit most, because the result reflects directly on the brand. Our [corporate event management](/corporate-event-management-sri-lanka) and [product launch events](/product-launch-events-sri-lanka) pages describe what this looks like in practice.",
        ],
      },
      {
        id: "hybrid-options",
        title: "Can You Combine Both Approaches?",
        paragraphs: [
          "Yes. Many organisers use a mixed model. Your team keeps the decisions it cares about most, such as the guest list, speakers and menu, while the event company handles production, AV, staging and on-site coordination. Others hire a company only for the event day, after planning most details themselves.",
          "Be clear about who does what. Write a short responsibility list that shows each task, who owns it and the deadline. This prevents gaps, such as nobody booking the photographer, and overlaps, such as two people giving the venue different instructions.",
        ],
      },
      {
        id: "questions-to-ask",
        title: "What Should You Ask Before You Hire?",
        paragraphs: ["Use these questions with any planner or event company you are considering."],
        list: [
          "Have you managed events of a similar type and size? Can you show photos or examples?",
          "Who will be my main contact, and who will be on site on the day?",
          "What exactly is included in your proposal, and what is excluded?",
          "Do you book suppliers on my behalf, or recommend them for me to book?",
          "How do you handle changes, extra costs and approvals?",
          "What is your plan for rain, power failure or a late supplier?",
          "What is the payment schedule and cancellation policy?",
          "How soon will I receive a written proposal?",
        ],
      },
      {
        id: "red-flags",
        title: "What Red Flags Should You Watch For?",
        paragraphs: [
          "Be careful with providers who will not put the scope in writing, give a single total with no breakdown, cannot name who will be on site, or push for full payment long before the event. Vague answers about backup plans and supplier arrangements are another warning sign.",
          "Ask to see real photos from past events, not only stock images. A reliable team will be open about what it has done and what it has not, and will explain how it would handle your specific requirements.",
        ],
      },
      {
        id: "how-to-brief",
        title: "How Do You Brief an Event Planner or Company Well?",
        paragraphs: [
          "A clear brief gets you faster and more accurate proposals. Include the purpose of the event, the audience, the preferred date and alternatives, the expected guest count, the location or venue if known, the format, the programme length, any must-have elements and a budget range. Mention any brand guidelines, approvals or VIP protocol that apply.",
          "Share examples of events you liked and explain why. Say which decisions you want to keep and which you want to hand over. With this information, a provider can recommend the right level of support instead of guessing.",
        ],
      },
      {
        id: "by-event-type",
        title: "Which Option Suits Each Type of Event?",
        paragraphs: [
          "Weddings and family celebrations often begin with a planner, because the early decisions are personal: theme, colours, guest list, rituals and the order of ceremonies. As the date approaches, many couples add a coordination team for the day so that relatives can enjoy the occasion instead of managing suppliers. Our [wedding planning Sri Lanka](/wedding-planning-sri-lanka) page explains how that support works.",
          "Conferences, seminars and training days usually need full management. There are speakers to schedule, slides to test, microphones to manage, registration desks to staff and meals to time between sessions. A single missed detail, such as a projector that will not connect, affects every guest in the room.",
          "Product launches and brand activations sit between creative planning and technical production. The idea and the reveal moment matter, but so do lighting, sound, media arrivals, content capture and the social media plan. A company that offers both event management and [event marketing](/event-marketing-sri-lanka) can connect the launch to the promotion around it.",
          "Academic ceremonies and inaugurations depend on protocol: the order of speakers, seating for dignitaries, flags, lecterns and official photography. Experience with formal programmes is more important here than decorative ideas.",
        ],
      },
      {
        id: "proposal-contents",
        title: "What Should a Good Proposal Include?",
        paragraphs: [
          "Whether you hire a planner or a full event company, the proposal should make the scope easy to understand. Look for a summary of your brief, a list of services, a timeline of key dates, the team that will work on your event, the items included and excluded, the payment schedule and the terms for changes or cancellation.",
          "For managed events, ask for a draft run sheet or programme outline. It shows that the team has thought through the flow of the day, from setup and rehearsals to guest arrival, the main programme and breakdown. Compare proposals side by side and ask questions about anything that is unclear before you sign.",
        ],
      },
      {
        id: "working-together",
        title: "How Do You Work Well With Your Event Team?",
        paragraphs: [
          "Agree on one decision-maker on your side and one main contact on theirs. Set a regular check-in, weekly in the early stages and more often in the final fortnight. Keep all confirmations, designs and schedules in one shared folder so that everyone works from the latest version.",
          "Give feedback early. Changing a backdrop design two weeks before the event is simple; changing it the night before is expensive and stressful. After the event, ask for a short review of what worked and what to improve, so the next event starts from a stronger base.",
        ],
      },
      {
        id: "sri-lanka-factors",
        title: "Which Local Factors Matter When Choosing in Sri Lanka?",
        paragraphs: [
          "Local experience counts. A good provider knows how Colombo traffic affects arrival times, which seasons bring heavy rain, how Poya days affect alcohol service, and how busy venues become around April and December. They should also understand protocol for academic and government guests, and the approvals some public events need.",
          "If your event is outside Colombo, ask how the team handles travel, accommodation and suppliers in that area. Transporting equipment to Kandy, Galle or the east coast adds time and cost that should appear in the proposal.",
        ],
      },
      {
        id: "our-approach",
        title: "How Cypher Digital Works",
        paragraphs: [
          "Our team combines event management with digital marketing. We have coordinated academic ceremonies for the University of Kelaniya, the FoodCycler Eco 5 product launch and the Study in Moldova information session at Taj Samudra, and we can also promote events before they happen and share content afterwards. You can hand us the full event or only the parts you need.",
          "Share your brief and we will send a written proposal within 24–48 hours, showing what is included so you can compare it fairly.",
          "Because promotion and delivery sit with the same team, the message in your invitations, social posts and paid ads matches what guests experience on the day. Photos and video captured at the event can then be used for follow-up posts, thank-you messages and future campaigns, which helps one event keep working long after the guests have gone home. If you only need advice at the start, we can also review your plan and point out gaps before you book suppliers.",
        ],
      },
    ],
    faqs: [
      { q: "Is an event planner the same as an event manager?", a: "Not always. A planner mainly shapes the plan, while an event manager or management company coordinates suppliers and runs the event day. Many providers offer both." },
      { q: "Which is cheaper, a planner or an event company?", a: "It depends on the scope. A planner may cost less for advice and planning only, but you take on more coordination work. Compare written proposals for the same brief." },
      { q: "Do I need an event company for a small event?", a: "Not necessarily. A small event with a capable team may only need a planner or a good checklist. Larger or more technical events benefit from full management." },
      { q: "How early should I contact an event company?", a: "As early as possible, especially for large events, popular venues or busy months such as April and December. Earlier contact gives more choice of dates and suppliers." },
      { q: "Can Cypher Digital manage only part of my event?", a: "Yes. We can manage the full event or selected parts such as production, AV, staging, promotion or on-site coordination." },
    ],
  },
];

export const getEventArticle = (slug: string) => eventArticles.find(a => a.slug === slug);

export function eventArticleSchema(a: EventArticle) {
  const url = `https://cypherdigital.lk/blog/${a.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Article", headline: a.h1, description: a.description, datePublished: a.date, mainEntityOfPage: url, author: { "@type": "Organization", name: "Cypher Digital" }, publisher: { "@type": "Organization", name: "Cypher Digital", url: "https://cypherdigital.lk/" } },
      { "@type": "FAQPage", mainEntity: a.faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://cypherdigital.lk/" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://cypherdigital.lk/blog" },
        { "@type": "ListItem", position: 3, name: a.h1, item: url },
      ] },
    ],
  };
}
