// Supporting event blog articles. Paragraph text may contain internal or HTTPS Markdown links.
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
        id: "after-the-event",
        title: "What Should You Do With the Budget After the Event?",
        paragraphs: [
          "Close the budget properly once the event is over. Collect every final invoice, check it against the agreed quote and query anything unexpected before paying the balance. Record the actual cost of each line next to the estimate and the quote, so you can see where spending was higher or lower than planned.",
          "Write a short note on what you would change next time: suppliers you would use again, items that were worth the cost and items guests barely noticed. This turns one event's budget into a reliable starting point for the next one and makes future approvals much easier."
        ],
      },
      {
        id: "approvals",
        title: "How Do You Get the Budget Approved Internally?",
        paragraphs: [
          "For company events, present the budget as a short summary: the purpose of the event, the expected guest count, the total cost, the cost per guest and the main categories. Show which costs are fixed and which change with numbers, and explain what the contingency covers. Decision-makers approve faster when they can see the logic behind the figures and how the event supports business goals."
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
        id: "cost-thinking",
        title: "How Should You Think About Cost?",
        paragraphs: [
          "Compare the cost of hiring help with the real cost of doing the work yourself. Coordinating suppliers takes many hours of calls, messages, site visits and follow-ups. For a busy team, that time has a value, and mistakes on the day can cost more than professional support.",
          "Ask each provider to quote for the same scope so you can compare fairly. A planning-only fee will look lower than a full management proposal, but it leaves more work and more risk with your team. Choose the option that matches the importance of the event and the time your team can realistically give."
        ],
      },
      {
        id: "signs-you-need-help",
        title: "What Are the Signs You Need Professional Help?",
        paragraphs: [
          "You probably need an event team if the guest list includes senior leaders, media or government officials, if the event has more than a few suppliers, if your team has never organised an event of this size, or if the date is close and nothing is booked yet. Another sign is when planning starts to take over people's normal work. Bringing in support early is almost always cheaper than fixing problems late."
        ],
      },
      {
        id: "our-approach",
        title: "How Cypher Digital Works",
        paragraphs: [
          "Our team combines event management with digital marketing. We have coordinated academic ceremonies for the University of Kelaniya, the FoodCycler Eco 5 product launch and the Study in Moldova information session at Taj Samudra, and we can also promote events before they happen and share content afterwards. You can hand us the full event or only the parts you need.",
          "Share your brief and we will send a written proposal within 24–48 hours, showing what is included so you can compare it fairly.",
          "You can also explore Cypher Events for [event management Sri Lanka](https://cypherevents.lk/event-management-sri-lanka), or read its [event planning Sri Lanka](https://cypherevents.lk/event-planning-sri-lanka) page when preparing your brief and deciding which tasks to hand over.",
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
  {
    slug: "product-launch-event-ideas-sri-lanka",
    title: "Product Launch Event Ideas for Sri Lankan Brands",
    description: "Product launch event ideas for Sri Lankan brands: launch formats, venue staging, the reveal moment, media and influencer invitations, promotion and follow-up.",
    h1: "Product Launch Event Ideas for Sri Lankan Brands",
    intro: "A strong product launch in Sri Lanka combines a clear message, a memorable reveal moment, the right audience in the room and a plan to share the launch online before, during and after the event. The format can be a press conference, a hotel launch evening, a retail activation or a hybrid event streamed to a wider audience. This guide sets out practical launch ideas, how to stage them and how to turn one event into lasting visibility for your product.",
    date: "2026-11-26",
    photoIndexes: [1, 2, 11],
    sections: [
      {
        id: "start-with-message",
        title: "What Should a Product Launch Achieve?",
        paragraphs: [
          "Before choosing a format, decide what the launch must achieve. Some launches aim for media coverage, others for dealer and distributor confidence, direct sales, social media reach or early customer sign-ups. Each goal leads to a different guest list, programme and budget. A launch for retail partners needs product demos and pricing discussions, while a consumer launch needs photo moments and shareable content.",
          "Write one sentence that explains why the product matters to the customer. Every part of the event, from the backdrop to the speeches and social posts, should support that sentence. A launch with a clear message is easier for journalists to report and for guests to repeat to others.",
        ],
      },
      {
        id: "launch-formats",
        title: "Which Product Launch Formats Work Well in Sri Lanka?",
        paragraphs: ["Choose the format that matches your goal, audience and product."],
        list: [
          "Press launch: a short, focused programme for journalists and content creators, with a presentation, product demonstration, Q&A and interview time.",
          "Hotel launch evening: a formal programme for partners, corporate clients and VIPs, with a stage reveal, networking and dinner or cocktails.",
          "Dealer and distributor launch: product training, demos, sales targets and incentives, often combined with a celebration.",
          "Retail or mall activation: the product in front of shoppers, with trials, demonstrations, giveaways and live social content.",
          "Experiential pop-up: a themed space where guests can try the product, suited to food, beauty, lifestyle and technology brands.",
          "Hybrid or streamed launch: an in-person event streamed to customers and partners across the island or overseas.",
          "Campus or community launch: useful for education, youth and lifestyle products that need word of mouth among a specific group.",
        ],
      },
      {
        id: "reveal-moment",
        title: "How Do You Create a Memorable Reveal Moment?",
        paragraphs: [
          "The reveal is the moment guests photograph and share. Plan it carefully. Common ideas include a curtain or cloth drop, a lighting change with music, a countdown on an LED screen, a short teaser video followed by the live product, or the product arriving with the speaker on stage. Keep it short and well rehearsed, and make sure photographers and videographers know exactly when and where it will happen.",
          "Think about what happens after the reveal. Guests should be able to see and touch the product, ask questions and take photos with it. Demonstration tables, trained staff and a branded photo area help the excitement continue beyond a few seconds on stage.",
        ],
      },
      {
        id: "venue-staging",
        title: "How Should You Stage the Venue?",
        paragraphs: [
          "Choose a venue that suits the product. Technology and automotive launches often need large stages, LED walls and space for vehicles or equipment. Food and lifestyle products may suit restaurants, rooftop spaces or smaller hotel rooms with a warmer atmosphere. Check ceiling height, loading access, power and lighting control before you book. Our guide to [event venues in Colombo](/blog/event-venues-colombo-guide) covers what to check on a site visit.",
          "Use one strong stage backdrop with the product name and key message, good lighting on the speaker and product, and clear sound. Add branding at the entrance, registration desk and photo area so that every photo shows the brand. Keep the stage simple enough that the product, not the decor, is the hero.",
        ],
      },
      {
        id: "guest-list",
        title: "Who Should You Invite?",
        paragraphs: [
          "Build the guest list around the launch goal. A media-focused launch needs journalists, editors and content creators relevant to your category. A trade launch needs distributors, dealers, retail buyers and key accounts. A consumer launch may invite loyal customers, community leaders and people who will share the experience online.",
          "Send invitations early, follow up with reminders and confirm attendance a few days before. Prepare press kits with the product information, key facts approved by your team, high-quality photos and contact details. Make it easy for guests to report and post about the product accurately.",
        ],
      },
      {
        id: "programme",
        title: "What Does a Good Launch Programme Look Like?",
        paragraphs: [
          "Most launches work best when the formal part is short. A typical programme might include guest arrival and registration, a welcome by the host, a brief speech from a senior leader, a teaser video, the reveal, a product presentation or demonstration, a short Q&A, photos and networking. Long speeches lose attention, so keep each one focused.",
          "Prepare a minute-by-minute run sheet with cues for lighting, sound, video and speakers. Hold a technical rehearsal before guests arrive, test every video file and microphone and agree who gives each cue. A clear run sheet keeps the launch on time and makes the event feel professional.",
        ],
      },
      {
        id: "promotion",
        title: "How Do You Promote the Launch Before, During and After?",
        paragraphs: [
          "Before the event, build interest with teaser posts, countdowns, short videos and invitations to selected guests. During the event, share live stories, short clips and photos, and encourage guests to tag the brand with an event hashtag. After the event, publish a highlights video, a photo album, press coverage and follow-up posts that link to where customers can buy or enquire.",
          "Paid social media can extend reach to the exact audience you want, such as people in particular cities or interest groups. Our [event marketing Sri Lanka](/event-marketing-sri-lanka) service connects the launch with promotion so that the event reaches far more people than those in the room.",
        ],
      },
      {
        id: "content-capture",
        title: "How Should You Capture Content at the Launch?",
        paragraphs: [
          "Brief the photographer and videographer with a shot list: the product hero shots, the reveal, the speakers, guest reactions, demonstrations, the branded areas and group photos. Ask for a fast edit of a few photos and a short clip for same-day posting, followed by the full set later.",
          "Plan vertical video for social media as well as horizontal video for presentations and websites. Short interviews with guests or speakers can become testimonials, but only use quotes that the person has agreed to share.",
        ],
      },
      {
        id: "local-factors",
        title: "Which Local Factors Should You Plan Around?",
        paragraphs: [
          "Check the calendar for Poya days, public holidays and major festivals, which affect guest availability and alcohol service. April and December are busy months for venues and suppliers. Evening launches in Colombo should allow for traffic, and outdoor elements need a rain plan, especially during the monsoon months.",
          "Some activations in public spaces or malls need approval from the property management or local authorities. Ask early, as approvals can take time. For launches outside Colombo, plan travel and setup time for equipment and staff.",
        ],
      },
      {
        id: "real-example",
        title: "Real Example: The FoodCycler Eco 5 Launch",
        paragraphs: [
          "At the FoodCycler Eco 5 product launch, the programme centred on a clear product presentation from the lectern, with the product visible on stage and photographs captured throughout. The focus on a simple message, good staging and strong photography gave the brand material to use after the event as well as on the day.",
          "Every launch is different, but the same principles apply: one clear message, one strong reveal, a well-briefed team and a plan to keep sharing the launch afterwards. See our [product launch events Sri Lanka](/product-launch-events-sri-lanka) page for how we help brands plan and run launches.",
        ],
      },
      {
        id: "measure-success",
        title: "How Do You Measure Whether the Launch Worked?",
        paragraphs: [
          "Decide how you will measure success before the event, so that you collect the right information on the day. Useful measures include the number of guests who attended compared with those invited, media articles and posts published, social media reach and engagement, website visits, enquiries and leads, dealer orders and product trials.",
          "Use a simple registration form or QR code to capture guest details with their consent, and set up tracking links for posts and ads so you can see which channels brought the most interest. Collect enquiries in one place, follow up quickly and record which ones become customers. A short review meeting a week after the launch helps the team learn what to repeat and what to change for the next product.",
        ],
      },
      {
        id: "budget-priorities",
        title: "Where Should a Launch Budget Go First?",
        paragraphs: [
          "Spend first on what guests and cameras see: the stage, lighting, sound, the reveal and photography. These shape every photo, video and article that comes out of the event. Next, fund the guest experience, including registration, refreshments and comfortable seating. Decor across the wider room, gifts and extras can be scaled to fit what remains.",
          "Keep a reserve for promotion after the event. A well-shot launch with no follow-up campaign loses most of its value within days, while a modest paid campaign using the launch content can keep the product in front of customers for weeks.",
        ],
      },
      {
        id: "checklist",
        title: "Product Launch Checklist",
        paragraphs: ["Use this short checklist to keep the launch on track."],
        list: [
          "Launch goal and one-sentence product message agreed",
          "Format, date and venue confirmed",
          "Guest list, invitations and reminders sent",
          "Press kit with approved facts and photos ready",
          "Stage, backdrop, lighting and sound booked",
          "Reveal moment planned and rehearsed",
          "Run sheet with cues shared with all suppliers",
          "Photographer and videographer briefed with a shot list",
          "Social media plan for before, during and after",
          "Follow-up plan for leads, partners and media",
        ],
      },
      {
        id: "common-mistakes",
        title: "What Are Common Product Launch Mistakes?",
        paragraphs: [
          "The most common mistakes are a message that is not clear, speeches that run too long, a reveal that has not been rehearsed and photographers who miss the key moment. Others include inviting the wrong audience, forgetting to prepare a press kit and having no plan to follow up with guests after the event.",
          "Avoid these by agreeing the message early, timing every speech, rehearsing with the AV team and briefing the content crew with a shot list. Plan the follow-up campaign before the launch day so that content can be shared while interest is still high."
        ],
      },
      {
        id: "launch-by-category",
        title: "Which Launch Ideas Suit Different Product Categories?",
        paragraphs: [
          "Technology and electronics launches work well with live demonstrations, hands-on stations and screens showing features in action. Food and beverage launches benefit from tastings, live cooking and chef interactions. Fashion and beauty brands often choose runway moments, styled sets and creator-led content. Home appliances and sustainability products, like the FoodCycler, can show the product solving a real problem in front of guests. Match the idea to how customers will actually use the product."
        ],
      },
      {
        id: "post-launch",
        title: "What Happens in the Weeks After the Launch?",
        paragraphs: [
          "Keep the momentum going after the event. Share customer reactions, behind-the-scenes clips and product demonstrations over the following weeks, and retarget people who engaged with launch content. Follow up personally with media, partners and VIP guests, and send them updated information or samples where useful."
        ],
      },
      {
        id: "get-help",
        title: "When Should You Bring in an Event Team?",
        paragraphs: [
          "A launch has many moving parts and only one chance to make a first impression. If you are working with several suppliers, inviting media or VIPs, or combining the event with a promotion campaign, an experienced team can coordinate the details so you can focus on the product and your guests. Speak to an [event management company in Sri Lanka](/event-management-sri-lanka) with a clear brief and ask for a written proposal.",
          "If you are still shaping the plan, our [event planning Sri Lanka guide](/event-planning-sri-lanka) and [event budget planning guide](/blog/event-budget-planning-sri-lanka) will help you prepare.",
        ],
      },
    ],
    faqs: [
      { q: "How early should we start planning a product launch?", a: "Start as early as possible, ideally several weeks or months before the date, so that the venue, suppliers, invitations and promotion all have enough time." },
      { q: "Where should we hold a product launch in Colombo?", a: "Choose a venue that suits the product and audience, such as a hotel ballroom for formal launches, a restaurant or rooftop for lifestyle brands, or a mall for consumer activations." },
      { q: "Should we invite influencers to our launch?", a: "If your audience follows content creators, inviting relevant creators can extend reach. Choose people whose followers match your customers and give them accurate product information." },
      { q: "How long should a launch programme be?", a: "Keep the formal part short and focused, with brief speeches, a clear reveal and time for guests to see the product and network." },
      { q: "Can Cypher Digital manage and promote our launch?", a: "Yes. We can manage the launch event and promote it on social media. Share your brief on WhatsApp for a written proposal within 24–48 hours." },
    ],
  },
  {
    slug: "award-ceremony-planning-sri-lanka",
    title: "How to Plan an Award Ceremony in Sri Lanka",
    description: "Plan an award ceremony in Sri Lanka: categories and judging, running order, stage and lighting, seating, trophies, media, photography and a timeline.",
    h1: "How to Plan an Award Ceremony in Sri Lanka",
    intro: "Planning an award ceremony in Sri Lanka means getting five things right: fair categories and judging, a tight running order, a stage that makes winners look good on camera, seating that respects protocol and a plan to share the results afterwards. Whether you are recognising staff, partners, students or an entire industry, the same structure applies. This guide takes you through each stage, from the first decision to the follow-up after the final award is presented.",
    date: "2026-11-26",
    photoIndexes: [5, 6, 0],
    sections: [
      {
        id: "purpose",
        title: "What Is the Purpose of Your Award Ceremony?",
        paragraphs: [
          "Award ceremonies serve different goals. An internal staff awards night builds motivation and loyalty. A dealer or partner awards evening strengthens business relationships and rewards performance. An industry or community award raises the profile of the organiser and celebrates achievement across a sector. Academic awards and prize-givings honour students and their families.",
          "The purpose shapes the guest list, the tone, the budget and how much effort goes into judging and publicity. Write it down in one or two sentences before you plan anything else, and share it with everyone involved. Our [event planning Sri Lanka guide](/event-planning-sri-lanka) explains how to turn that purpose into a full plan and timeline.",
        ],
      },
      {
        id: "categories-judging",
        title: "How Do You Choose Categories and Judging Criteria?",
        paragraphs: [
          "Keep the number of categories manageable. Too many awards make the evening long and reduce the value of each one. For a staff ceremony, categories might include performance, teamwork, innovation, customer service and long service. For partner awards, they might reflect sales, growth, customer satisfaction or new markets.",
          "Write clear criteria for each category and decide how winners will be selected: by data, by a judging panel, by nominations or by a combination. Publish the criteria in advance where appropriate, keep records of scores and decisions and make sure judges declare any conflicts of interest. Fair judging protects the reputation of the awards and the organisation behind them.",
        ],
      },
      {
        id: "timeline",
        title: "What Timeline Should You Follow?",
        paragraphs: ["Large ceremonies need several months. Smaller internal events can work on a shorter timeline, but the order of tasks is similar."],
        list: [
          "Set the purpose, date, budget and guest count.",
          "Agree categories, criteria and the judging process.",
          "Book the venue, AV, stage and key suppliers.",
          "Open nominations or collect performance data.",
          "Complete judging and confirm winners, keeping results confidential.",
          "Order trophies, certificates and engraving with correct names.",
          "Send invitations and manage RSVPs and seating.",
          "Prepare scripts, slides, videos and the run sheet.",
          "Hold a full technical rehearsal.",
          "Run the ceremony, then share photos, results and thank-you messages.",
        ],
      },
      {
        id: "venue",
        title: "How Do You Choose the Right Venue?",
        paragraphs: [
          "Most formal award ceremonies in Sri Lanka are held in hotel ballrooms, which offer banquet seating, catering, stages and AV support. Smaller internal events may suit a function room or a restaurant. Check that the room can fit your guest count at round tables with a clear view of the stage, and that there is space for a red carpet or photo wall near the entrance.",
          "Look at ceiling height for lighting rigs and LED screens, backstage space for winners to wait, and access routes from tables to the stage. Our guide to [event venues in Colombo](/blog/event-venues-colombo-guide) lists the questions to ask on a site visit.",
        ],
      },
      {
        id: "running-order",
        title: "What Does a Good Running Order Look Like?",
        paragraphs: [
          "A typical ceremony runs in this order: guest arrival and red carpet photos, seating, welcome by the host, opening remarks from a senior leader or chief guest, the first set of awards, dinner or a break, entertainment, the second set of awards, the main award of the evening, closing remarks and networking. Placing the most important award near the end keeps the room engaged.",
          "Group awards into blocks of four to six, with a short break or performance between blocks. Allow about two to three minutes per award for the announcement, walk to the stage, presentation and photo. Write the script with exact names and pronunciations, and give the host and every presenter a printed copy.",
        ],
      },
      {
        id: "stage-lighting",
        title: "How Should You Design the Stage and Lighting?",
        paragraphs: [
          "The stage is where every photo is taken, so design it for the camera. A clean backdrop with the event name and organiser logo, an LED screen for category titles and nominee videos, and a podium for the host work well. Make sure the stage has safe steps on both sides so winners can enter and exit smoothly.",
          "Lighting should make faces bright and even, without harsh shadows. Use a separate spot or colour change to mark each winner's announcement, and coordinate music cues with the lighting operator. Test every cue during rehearsal, including the walk-up music for each award.",
        ],
      },
      {
        id: "seating-protocol",
        title: "How Do You Handle Seating and Protocol?",
        paragraphs: [
          "Seat the chief guest, senior leaders and special guests near the stage, with easy access. Place nominees close to the aisles so they can reach the stage quickly. Use table numbers and a seating plan at the entrance, and assign ushers to guide guests.",
          "For ceremonies with government, academic or religious dignitaries, confirm the order of speakers, forms of address, lamp lighting, national anthem and any religious observances in advance. Protocol mistakes are noticed and remembered, so check details with the guests' offices where needed.",
        ],
      },
      {
        id: "trophies",
        title: "What Should You Know About Trophies and Certificates?",
        paragraphs: [
          "Order trophies and certificates early, as engraving and printing take time. Double-check every name, title and category against official records. Prepare a few blank spares for last-minute corrections.",
          "On the night, arrange trophies backstage in award order, with a label on each one. Assign one person to hand each trophy to the presenter at the right moment. This small step prevents the most common award-night mistake: presenting the wrong trophy.",
        ],
      },
      {
        id: "media-photography",
        title: "How Do You Plan Media and Photography?",
        paragraphs: [
          "Brief the photographer on the shots you need: each winner receiving the award, winners with presenters, group photos of all winners, table photos and candid moments. Mark a spot on stage where winners should stand for the official photo, and give the photographer a printed run sheet.",
          "If the ceremony is public or industry-wide, prepare a press release with the list of winners, approved quotes and photos. Share highlights on social media during and after the event. Our [event marketing Sri Lanka](/event-marketing-sri-lanka) service can plan this promotion.",
        ],
      },
      {
        id: "entertainment",
        title: "What Entertainment Works Between Awards?",
        paragraphs: [
          "Short performances keep energy high between award blocks. Options include a live band, traditional dance, a singer, a comedy host or a short video. Keep each segment brief so the ceremony does not run late.",
          "Choose entertainment that suits the audience. A corporate audience may prefer a polished band and a professional MC, while a staff celebration might include a dance performance by employees. Confirm technical needs for each performer, such as microphones, music files and space on stage.",
        ],
      },
      {
        id: "rehearsal",
        title: "Why Is the Rehearsal So Important?",
        paragraphs: [
          "Hold a full rehearsal on the day, with the host, AV team, lighting operator, photographer and stage manager. Run through the opening, at least one complete award, the transitions between blocks and the closing. Test every video, slide and music cue.",
          "Agree hand signals and a radio channel for the stage manager and AV desk. Decide what happens if a winner is absent: who accepts on their behalf, or whether the award is announced and presented later. A rehearsal turns a script into a smooth show.",
        ],
      },
      {
        id: "follow-up",
        title: "What Should Happen After the Ceremony?",
        paragraphs: [
          "Send thank-you messages to guests, winners, judges and sponsors within a few days. Share a photo album and a highlights video, and post the winners list on your website and social channels. Provide each winner with their photos so they can share them too, which extends the reach of the event.",
          "Review the evening with your team: timings, guest feedback, technical issues and costs. Record what worked and what to improve. The next ceremony will be easier and better as a result.",
        ],
      },
      {
        id: "sponsors",
        title: "How Do You Work With Sponsors?",
        paragraphs: [
          "Many industry and community awards are supported by sponsors. Agree what each sponsor receives, such as logo placement on the backdrop, a presenting role for a category, mentions by the host, social media posts or a table at the event. Put these benefits in writing and track them on the night so every promise is delivered.",
          "Prepare a short report after the event with photos showing the sponsor's branding, the number of guests and social media highlights. A clear report makes it far easier to keep sponsors for the following year."
        ],
      },
      {
        id: "budget",
        title: "How Should You Budget for an Award Ceremony?",
        paragraphs: [
          "The main costs are usually the venue and catering, followed by stage, AV and lighting, trophies and certificates, entertainment, photography and video, decor and printing. Judging, if handled externally, and promotion before and after the event can add further lines. Keep a contingency for last-minute changes.",
          "Request itemised written quotes from each supplier using the same brief, and confirm what is included. Our [event budget planning guide](/blog/event-budget-planning-sri-lanka) explains how to build a budget sheet and compare quotes fairly."
        ],
      },
      {
        id: "common-mistakes",
        title: "What Are the Most Common Award Night Mistakes?",
        paragraphs: [
          "Typical problems include too many categories, long speeches, wrong names on trophies, winners who cannot find their way to the stage and photographs that miss the presentation moment. Technical issues, such as a nominee video that will not play, can also stall the programme.",
          "Most of these are prevented by a tight script, checked spellings, a rehearsal, a stage manager and clear cues between the host, AV desk and photographer. Build a little spare time into the running order so that a small delay does not push the whole evening late."
        ],
      },
      {
        id: "nominees",
        title: "How Do You Look After Nominees and Winners?",
        paragraphs: [
          "Tell nominees in advance where they are seated, how winners will be called and how to reach the stage. Assign ushers to guide winners up and back, and have a staff member backstage to direct them to the official photo spot. After their award, many winners appreciate a quiet moment for photos with their team or family.",
          "Prepare a short note for winners on how to share their news on social media, with the official hashtag and approved photos. This spreads the event's message and gives the winners proper recognition beyond the room."
        ],
      },
      {
        id: "hybrid",
        title: "Can an Award Ceremony Be Hybrid?",
        paragraphs: [
          "Yes. Streaming the ceremony lets staff at branches, partners overseas and families follow the awards live. Plan camera positions that capture the stage and winners clearly, add on-screen titles for each category and test the stream in rehearsal. Remote winners can accept by a short prerecorded video, which keeps the programme moving and still gives them recognition in front of the audience."
        ],
      },
      {
        id: "get-help",
        title: "When Should You Hire an Event Team?",
        paragraphs: [
          "Award ceremonies combine stage production, protocol, catering, photography and publicity in a single evening. If you are hosting a large or public ceremony, an experienced [event management company in Sri Lanka](/event-management-sri-lanka) can coordinate the venue, AV, stage, run sheet and suppliers while you focus on guests and winners.",
          "For company and partner events, see our [corporate event management](/corporate-event-management-sri-lanka) services. For decoration ideas, read our guide to [event decoration ideas in Sri Lanka](/blog/event-decoration-ideas-sri-lanka).",
          "To get started, send us a short brief on WhatsApp with your event type, preferred date, expected guest count and location. We will reply with questions where needed and a written proposal within 24–48 hours, listing what is included so you can compare it with other options and decide with confidence. There is no obligation to proceed, and you can choose to hand over the full event or only selected parts.",
        ],
      },
    ],
    faqs: [
      { q: "How long should an award ceremony last?", a: "Many ceremonies run for about three to four hours including arrival, dinner and entertainment. Keep the formal award segments short by limiting categories and grouping awards into blocks." },
      { q: "How many award categories should we have?", a: "Choose enough to recognise real achievement without making the evening too long. Fewer, well-defined categories usually make each award feel more valuable." },
      { q: "Where are award ceremonies usually held in Colombo?", a: "Hotel ballrooms are the most common choice for formal ceremonies, with function rooms and restaurants used for smaller internal events." },
      { q: "How do we keep winners confidential?", a: "Limit who knows the results, keep scripts and trophy labels secure, and brief the host and AV team only as much as needed for the show." },
      { q: "Can Cypher Digital manage our award ceremony?", a: "Yes. We can coordinate the venue, stage, AV, run sheet, photography and promotion. Share your brief on WhatsApp for a written proposal within 24–48 hours." },
    ],
  },
  {
    slug: "annual-get-together-ideas-sri-lanka",
    title: "Annual Get-Together Ideas for Sri Lankan Companies",
    description: "Annual get-together ideas for Sri Lankan companies: themes, venues, activities, family days, timing around Avurudu and December, budgeting and planning tips.",
    h1: "Annual Get-Together Ideas for Sri Lankan Companies",
    intro: "A successful company get-together in Sri Lanka brings the team together, thanks them for the year's work and gives everyone something to remember. The best events start with a clear purpose, a theme that suits the team, a venue that fits the activities and a date that avoids clashes with holidays and busy seasons. This guide shares practical ideas for themes, venues, activities and family days, plus a simple planning approach that keeps the event enjoyable for organisers as well as guests.",
    date: "2026-11-26",
    photoIndexes: [4, 11, 3],
    sections: [
      {
        id: "purpose",
        title: "What Should an Annual Get-Together Achieve?",
        paragraphs: [
          "Most companies hold an annual get-together to thank staff, build team spirit and mark the end of a busy year. Some also use it to recognise top performers, welcome new team members or share plans for the year ahead. Decide which of these matter most, because they shape the programme. An event focused on fun needs games and entertainment; an event that includes awards needs a stage and a structured running order.",
          "Ask a few staff from different teams what they would enjoy. Their ideas help you choose a format that suits the whole company rather than only the organisers. For a structured approach to the whole process, see our [event planning Sri Lanka guide](/event-planning-sri-lanka).",
        ],
      },
      {
        id: "timing",
        title: "When Is the Best Time to Hold It?",
        paragraphs: [
          "Many Sri Lankan companies hold get-togethers in December, around the end of the financial year, or after Sinhala and Tamil New Year in April. These months are popular, so venues and suppliers book quickly. If you prefer more choice and flexibility, consider January, February or the months after the main monsoon.",
          "Check the calendar for Poya days, public holidays and school holidays. Poya days restrict the sale of alcohol, and school holidays may affect family attendance. Friday evenings and Saturdays usually suit most staff, but ask your team, since shift workers and field staff may have different needs.",
        ],
      },
      {
        id: "themes",
        title: "Which Themes Work Well?",
        paragraphs: ["A theme gives the event a personality and makes decor, dress code and activities easier to plan."],
        list: [
          "Retro or decade night, with music and dress from a chosen era.",
          "Avurudu-style celebration with traditional games, sweets and music.",
          "Beach or tropical night, suited to coastal venues.",
          "Casino or game night with play money and prizes.",
          "Hollywood or red carpet evening, combined with staff awards.",
          "White or colour-themed dress code for a simple, elegant look.",
          "Cultural night celebrating the diversity of the team.",
          "Sports day with teams, colours and a closing dinner.",
        ],
      },
      {
        id: "venues",
        title: "What Types of Venues Suit a Company Get-Together?",
        paragraphs: [
          "Hotel ballrooms suit formal evenings with dinner, entertainment and awards. Resorts and outstation hotels work well for overnight trips that combine activities with a celebration. Garden venues and outdoor spaces suit family days and sports activities. Restaurants and rooftops work for smaller teams who want a relaxed evening.",
          "Choose a venue that fits the activities, not only the guest count. A dance floor, a stage, open lawns or a pool may be essential depending on the plan. Our guide to [event venues in Colombo](/blog/event-venues-colombo-guide) explains what to check before you book.",
        ],
      },
      {
        id: "activities",
        title: "What Activities Can You Include?",
        paragraphs: ["Mix activities so that everyone can take part, whatever their age or interests."],
        list: [
          "Team games and friendly competitions between departments.",
          "Talent show or performances by staff.",
          "Live band, DJ or cultural dance performances.",
          "Photo booth with props and instant prints.",
          "Raffle draw or lucky draw with prizes.",
          "Quiz night about the company and the year's highlights.",
          "Cooking or food stalls with local favourites.",
          "Short awards segment recognising achievements.",
        ],
      },
      {
        id: "family-day",
        title: "Should You Include Families?",
        paragraphs: [
          "Family days are popular with Sri Lankan companies and help staff feel their families are valued. They usually take place during the day, at a garden venue or resort, with activities for children such as bouncy castles, face painting, magic shows and games. Food stalls, music and a lucky draw keep adults entertained.",
          "If families attend, plan for safety, shaded areas, clean toilets, baby-changing facilities, first aid and enough staff to supervise activities. Provide food options for children and elders, and avoid programmes that run too late.",
        ],
      },
      {
        id: "food",
        title: "How Do You Plan Food and Drinks?",
        paragraphs: [
          "Food is one of the things guests remember most. Choose a menu that suits the audience, with vegetarian, halal and other dietary options. Buffets suit large groups and relaxed events; set menus suit formal dinners. Live food stations, such as kottu, hoppers or barbecue, add atmosphere.",
          "If alcohol is served, plan responsibly. Avoid Poya days, offer plenty of non-alcoholic drinks, set clear limits and arrange safe transport home. Some companies provide shuttle buses or arrange taxi vouchers so that staff can enjoy the event safely.",
        ],
      },
      {
        id: "budget",
        title: "How Should You Budget for the Event?",
        paragraphs: [
          "Start with the total budget and the expected number of guests, then divide it into categories: venue, food and drinks, entertainment, decor, activities, prizes, transport and a contingency. The largest costs are usually venue and catering, which depend on the guest count.",
          "Collect written quotes from suppliers based on the same brief, and compare what each includes. Our [event budget planning guide](/blog/event-budget-planning-sri-lanka) explains how to build a budget sheet and compare quotes fairly.",
        ],
      },
      {
        id: "planning-team",
        title: "Who Should Organise the Event?",
        paragraphs: [
          "Form a small committee with members from different departments. Assign clear roles: venue and catering, entertainment, decor, transport, communications and budget. Set regular check-ins and a shared document for decisions, quotes and timelines.",
          "Organising a large get-together can take a lot of time away from normal work. Many companies hand the coordination to an event team so that staff, including the organisers, can enjoy the day.",
        ],
      },
      {
        id: "communication",
        title: "How Do You Build Excitement Before the Event?",
        paragraphs: [
          "Announce the date early so staff can plan. Share the theme, dress code and programme highlights a few weeks before, and send reminders closer to the day. Teaser posters, short videos and team challenges build anticipation.",
          "Collect RSVPs with dietary needs, family numbers and transport requirements. Clear communication reduces last-minute questions and helps suppliers prepare accurately.",
        ],
      },
      {
        id: "on-the-day",
        title: "How Do You Keep the Day Running Smoothly?",
        paragraphs: [
          "Prepare a run sheet with timings for arrival, welcome speeches, activities, meals, entertainment and closing. Share it with suppliers and the organising team. Assign one person as the main contact for each supplier.",
          "Have a registration point, clear signage and someone responsible for the sound system and microphones. Plan for weather if any part of the event is outdoors, and keep a first aid kit and emergency contacts on hand.",
        ],
      },
      {
        id: "after",
        title: "What Should You Do After the Event?",
        paragraphs: [
          "Share photos and a short highlights video with the team within a few days. Thank the organising committee, suppliers and everyone who took part. Ask for feedback through a short survey to learn what staff enjoyed and what they would change.",
          "Record the details: venue, suppliers, costs, attendance and feedback. These notes make next year's planning faster and help you improve the experience each time.",
        ],
      },
      {
        id: "outstation",
        title: "Should You Plan an Outstation Trip?",
        paragraphs: [
          "Many Sri Lankan companies combine the annual get-together with a trip outside Colombo, such as a hotel stay in the hill country, the south coast or the cultural triangle. An overnight trip gives more time for team activities, a relaxed dinner and informal conversations that rarely happen at the office.",
          "Outstation trips need extra planning: transport, room allocation, meals, travel times, safety on the road and activities for the following morning. Choose a destination that is comfortable to reach within a few hours, and avoid peak holiday weekends when hotels and roads are busiest. Share a clear itinerary with everyone before departure."
        ],
      },
      {
        id: "inclusion",
        title: "How Do You Make Everyone Feel Included?",
        paragraphs: [
          "Teams include people of different ages, religions, cultures and interests. Choose activities that everyone can join, not only those who enjoy dancing or sport. Offer food that respects dietary and religious needs, and make sure there are non-alcoholic drinks and quiet spaces for those who prefer them.",
          "Consider staff who work shifts or at branches outside Colombo. Holding the event at a time they can attend, arranging transport or running a smaller event at the branch shows that the whole team matters. Recognising contributions from every department, not only sales or management, also builds goodwill."
        ],
      },
      {
        id: "team-building",
        title: "Which Team-Building Activities Work Best?",
        paragraphs: [
          "Team-building works best when it is fun and does not feel like work. Popular options include treasure hunts, relay races, cooking challenges, quiz competitions, escape-room style puzzles and creative tasks such as making a team video or poster. Mix departments in each team so people meet colleagues they do not usually work with.",
          "Keep activities short, explain the rules clearly and reward participation as well as winning. Avoid activities that may embarrass people or exclude those with physical limitations. A good facilitator or host keeps the energy up and the timing on track."
        ],
      },
      {
        id: "mistakes",
        title: "What Mistakes Should You Avoid?",
        paragraphs: [
          "Common mistakes include booking a venue too late, choosing a theme that only suits part of the team, running speeches for too long, not planning transport home and forgetting a rain plan for outdoor activities. Leaving all the work to a few volunteers can also lead to burnout and missed details.",
          "Start early, share tasks across a committee or an event team, keep the formal part short and confirm every supplier in writing. A simple run sheet and a clear contact list for the day prevent most problems."
        ],
      },
      {
        id: "small-teams",
        title: "What If You Have a Small Team or Small Budget?",
        paragraphs: [
          "Smaller companies can still hold memorable get-togethers. A private dining room at a restaurant, a day at a nature spot, a team cooking class or a simple evening with games and good food can be just as effective as a large hotel event. The personal touches matter more than the scale: a thank-you speech from the founder, small awards chosen by colleagues and photos shared afterwards.",
          "Keep the plan simple and focus on one or two highlights. Splitting the budget between food and a single activity usually works better than trying to include everything."
        ],
      },
      {
        id: "ideas-by-size",
        title: "Get-Together Ideas by Team Size",
        paragraphs: [
          "Teams of up to 30 people suit private dining rooms, villa stays, cooking classes and day trips. Teams of 30 to 150 often choose hotel function rooms, garden venues or resorts with a mix of dinner, games and entertainment. Larger companies with several hundred staff usually need ballrooms, conference venues or large outdoor spaces, with a stage, professional sound, structured programme and careful transport planning. Matching the format to the size keeps the event comfortable and the budget realistic.",
          "Whatever the size, the same basics apply: a clear purpose, a date that suits the team, good food, a short formal segment and something fun that people will talk about afterwards."
        ],
      },
      {
        id: "get-help",
        title: "When Should You Bring in Corporate Event Organisers?",
        paragraphs: [
          "If your team is large, the programme is complex or you want the organising committee to relax and enjoy the event, consider working with [corporate event organisers in Sri Lanka](/event-management-sri-lanka). An experienced team can handle venue, entertainment, decor, AV and on-site coordination.",
          "See our [corporate event management](/corporate-event-management-sri-lanka) page for the services we coordinate, or read our guide on [event planner vs event management company](/blog/event-planner-vs-event-management-company-sri-lanka) to decide what level of help you need.",
          "To get started, send us a short brief on WhatsApp with your event type, preferred date, expected guest count and location. We will reply with questions where needed and a written proposal within 24–48 hours, listing what is included so you can compare it with other options and decide with confidence. There is no obligation to proceed, and you can choose to hand over the full event or only selected parts.",
        ],
      },
    ],
    faqs: [
      { q: "When do most Sri Lankan companies hold get-togethers?", a: "December and the period after Sinhala and Tamil New Year in April are popular, but other months can offer more venue choice and flexibility." },
      { q: "What is a good theme for a company get-together?", a: "Popular themes include retro nights, Avurudu-style celebrations, beach parties, casino nights and red carpet evenings. Choose one that suits your team's age range and interests." },
      { q: "Should we invite families?", a: "Family days are popular and help staff feel valued. Plan child-friendly activities, safety, shaded areas and suitable food." },
      { q: "How early should we start planning?", a: "For popular months and large groups, start several months ahead to secure venues and suppliers." },
      { q: "Can Cypher Digital organise our get-together?", a: "Yes. We can plan and coordinate the venue, entertainment, decor and on-site management. Share your brief on WhatsApp for a written proposal within 24–48 hours." },
    ],
  },
  {
    slug: "graduation-inauguration-ceremony-planning-sri-lanka",
    title: "Graduation and Inauguration Ceremony Planning Sri Lanka",
    description: "How to plan a graduation or inauguration ceremony in Sri Lanka: protocol, running order, chief guest, stage, flags, seating, photography and a checklist.",
    h1: "Planning a Graduation or Inauguration Ceremony in Sri Lanka",
    intro: "A graduation or inauguration ceremony in Sri Lanka is a formal occasion where protocol, timing and presentation matter as much as celebration. A well-planned ceremony has a clear running order, correct arrangements for the chief guest and dignitaries, a dignified stage with flags and lectern, organised seating for graduates and families, and official photographs that everyone will keep. This guide explains how to plan each part, drawing on our experience coordinating academic ceremonies for the University of Kelaniya.",
    date: "2026-11-26",
    photoIndexes: [3, 5, 6],
    sections: [
      {
        id: "types",
        title: "What Types of Academic Ceremonies Are There?",
        paragraphs: [
          "Academic institutions hold several kinds of formal events. Graduation or convocation ceremonies confer degrees and diplomas. Inauguration ceremonies open a new programme, intake or academic year, welcoming students and introducing staff. Introductory sessions orient new students. Prize-givings, award ceremonies and memorial lectures also follow formal protocol.",
          "Each type has its own expectations, but all share common elements: a chief guest, an order of proceedings, speeches, a stage arrangement and official photography. Understanding these elements early helps you plan with confidence. For general planning steps, see our [event planning Sri Lanka guide](/event-planning-sri-lanka).",
        ],
      },
      {
        id: "planning-committee",
        title: "Who Should Be on the Planning Committee?",
        paragraphs: [
          "Form a committee with representatives from the faculty or department, administration, student affairs and finance. Name one coordinator who has the authority to make decisions and communicate with the event team, venue and suppliers.",
          "Agree early on responsibilities: inviting the chief guest, preparing the list of graduates or students, arranging certificates, managing the venue, coordinating AV and photography, and handling guest invitations. A shared timeline with deadlines keeps everyone aligned.",
        ],
      },
      {
        id: "chief-guest",
        title: "How Do You Arrange the Chief Guest and Dignitaries?",
        paragraphs: [
          "Invite the chief guest and guest of honour well in advance, and confirm their availability in writing. Ask their office about any requirements: arrival time, security, parking, dietary needs and the length of their address. Share the order of proceedings so they know when they will speak.",
          "On the day, assign a senior member of staff to welcome the chief guest at the entrance and escort them throughout the ceremony. Prepare a reserved parking space, a waiting room and refreshments. Protocol details such as titles, forms of address and seating order must be checked carefully.",
        ],
      },
      {
        id: "order-of-proceedings",
        title: "What Is a Typical Order of Proceedings?",
        paragraphs: ["Ceremonies vary by institution, but a common order is:"],
        list: [
          "Arrival of guests, graduates or students and families.",
          "Procession of the academic staff and chief guest.",
          "National anthem.",
          "Lighting of the traditional oil lamp.",
          "Religious observances, where customary.",
          "Welcome address by the head of the institution or programme.",
          "Address by the chief guest.",
          "Presentation of degrees, certificates or awards.",
          "Speeches by guest of honour or student representative.",
          "Vote of thanks.",
          "Group photographs and refreshments.",
        ],
      },
      {
        id: "venue",
        title: "How Do You Choose and Prepare the Venue?",
        paragraphs: [
          "Many institutions use their own auditorium or hall. Others hire hotel ballrooms or conference halls for larger audiences. Check that the venue has enough seats for graduates, families, staff and guests, with clear access to the stage for graduates crossing to receive certificates.",
          "Confirm air conditioning, sound, lighting, power backup and parking. Plan the flow of people: where graduates assemble before the procession, how they enter and exit the stage, and where families wait. Our guide to [event venues in Colombo](/blog/event-venues-colombo-guide) covers what to check on a site visit.",
        ],
      },
      {
        id: "stage",
        title: "How Should You Set Up the Stage?",
        paragraphs: [
          "A formal stage usually includes a backdrop with the institution's name, crest and event title, a lectern for speakers, seating for dignitaries, the national flag and institutional flags, the traditional oil lamp and floral arrangements. Keep the design dignified and uncluttered.",
          "Position the lectern so speakers face the audience and photographers have a clear view. Mark the spot where graduates receive certificates and pose for photographs. Test microphones, screens and lighting before guests arrive. Good lighting on the stage makes every photograph better.",
        ],
      },
      {
        id: "seating",
        title: "How Do You Organise Seating?",
        paragraphs: [
          "Seat dignitaries on stage or in the front row, according to protocol. Seat graduates in the order they will be called, so they can move to the stage smoothly. Reserve seats for families behind the graduates, and seat staff and other guests in clearly marked sections.",
          "Use seating plans, row signs and ushers to guide people. Provide accessible seating for elderly guests and people with disabilities. A well-organised seating plan reduces confusion and keeps the ceremony on schedule.",
        ],
      },
      {
        id: "certificates",
        title: "How Do You Manage Certificates and Names?",
        paragraphs: [
          "Prepare the list of graduates or students well in advance and check every name for spelling and order. Print certificates early and arrange them in the order of presentation. Give the announcer a printed list with correct pronunciations.",
          "Assign a team member to pass each certificate to the presenter at the right moment. Prepare a plan for absent graduates, and a small number of spare certificate folders in case of last-minute changes.",
        ],
      },
      {
        id: "rehearsal",
        title: "Why Should You Rehearse?",
        paragraphs: [
          "Hold a rehearsal with graduates, staff, the announcer and the AV team. Practise the procession, the walk to the stage, the handover and the exit. Time the presentation segment so you can estimate the total length of the ceremony.",
          "A rehearsal helps nervous graduates feel confident and reduces delays on the day. It also lets the photographer and AV team understand where to stand and when to capture key moments.",
        ],
      },
      {
        id: "photography",
        title: "How Do You Plan Official Photography?",
        paragraphs: [
          "Official photography is one of the most valued parts of a graduation or inauguration. Brief the photographer on the shots needed: the procession, lamp lighting, speeches, each graduate receiving a certificate, dignitaries, the group photograph and candid moments with families.",
          "Plan the group photograph carefully. Choose a location with enough space and good light, arrange seating and standing rows, and allocate enough time. At the University of Kelaniya MHRM inauguration we coordinated, the group photograph with academics and students became one of the most shared images from the day.",
        ],
      },
      {
        id: "families",
        title: "How Do You Look After Families and Guests?",
        paragraphs: [
          "Send invitations with clear details: date, time, venue, dress code, parking, entry rules and the number of guests allowed per graduate. Share a map and arrival instructions.",
          "On the day, provide signage, ushers, drinking water and refreshments. Plan a photo area where families can take their own pictures after the ceremony. These small touches make the occasion more memorable.",
        ],
      },
      {
        id: "live-stream",
        title: "Should You Live Stream the Ceremony?",
        paragraphs: [
          "Live streaming lets relatives in other parts of Sri Lanka or overseas watch the ceremony. It needs a stable internet connection, cameras, an operator and a streaming platform. Test the stream during rehearsal.",
          "Recorded video can also be edited into a highlights clip for the institution's website and social media. This helps promote future programmes and intakes.",
        ],
      },
      {
        id: "checklist",
        title: "Ceremony Planning Checklist",
        paragraphs: ["Use this checklist to keep preparations on track."],
        list: [
          "Date, venue and chief guest confirmed",
          "Order of proceedings approved",
          "Graduate or student list checked",
          "Certificates printed and arranged",
          "Stage, flags, lectern, oil lamp and florals arranged",
          "Sound, lighting and screens tested",
          "Seating plan and signage ready",
          "Invitations sent and RSVPs collected",
          "Photographer and videographer briefed",
          "Rehearsal completed",
        ],
      },
      {
        id: "dress-code",
        title: "What Dress Code and Academic Dress Apply?",
        paragraphs: [
          "Graduation ceremonies often require academic gowns and caps, sometimes with hoods in faculty colours. Confirm the rules early and tell graduates where to collect and return gowns, and by what time. Staff and dignitaries may also wear academic dress during the procession.",
          "For inauguration ceremonies and introductory sessions, formal or smart office dress is common. Include the dress code in invitations so guests and students arrive appropriately dressed. Arrange a dressing area near the assembly point for graduates who need help with gowns."
        ],
      },
      {
        id: "timing",
        title: "How Do You Keep the Ceremony on Time?",
        paragraphs: [
          "Formal ceremonies often run late because of delayed arrivals, long speeches and slow certificate presentations. Ask speakers in advance to keep within an agreed time and share the full timetable with them. Start the procession on time, even if a few guests are still arriving.",
          "During the presentation of certificates, keep the line of graduates moving steadily, with ushers guiding each row. A stage manager who watches the clock and signals the announcer can recover small delays before they grow."
        ],
      },
      {
        id: "budget",
        title: "How Should You Budget for a Ceremony?",
        paragraphs: [
          "The main costs typically include the venue, sound and lighting, stage decoration, flags and florals, certificate printing and folders, photography and video, refreshments and printed programmes. Live streaming, transport for dignitaries and gifts for the chief guest may also be needed.",
          "Collect itemised quotes based on the same brief and confirm inclusions such as setup time and technicians on site. Our [event budget planning guide](/blog/event-budget-planning-sri-lanka) explains how to build a budget and compare quotes fairly. For general venue advice, read our guide to [event planning Sri Lanka](/event-planning-sri-lanka)."
        ],
      },
      {
        id: "common-mistakes",
        title: "What Are Common Ceremony Mistakes?",
        paragraphs: [
          "Typical problems include misspelled names, certificates out of order, microphones that fail, speakers who run over time and missing photographs of key moments. Poor signage can also leave families confused about where to sit or park.",
          "Prevent these with careful checks of names, a full rehearsal, tested equipment, a clear timetable and a briefed photographer. Assign one person to each critical task, such as certificates, the chief guest or AV, so nothing is left to chance."
        ],
      },
      {
        id: "communications",
        title: "How Do You Communicate With Graduates and Students?",
        paragraphs: [
          "Send graduates a clear information pack covering the date, assembly time, gown collection, seating, the order of the ceremony, guest numbers, dress code and parking. Share it by email and WhatsApp and repeat key points closer to the day. A short briefing before the procession reminds everyone where to sit and how to walk to the stage.",
          "After the ceremony, tell graduates where to find official photographs and video. Sharing these quickly extends the celebration and helps the institution promote future programmes."
        ],
      },
      {
        id: "security",
        title: "How Do You Manage Security and Safety?",
        paragraphs: [
          "Large ceremonies with dignitaries and many families need a basic safety plan. Arrange security staff at entrances, a clear route for the chief guest, first aid on site and marked emergency exits. Check that the venue's capacity is not exceeded and that walkways stay clear during the procession and certificate presentations."
        ],
      },
      {
        id: "after",
        title: "What Should Happen After the Ceremony?",
        paragraphs: [
          "Send thank-you letters to the chief guest, guest of honour and everyone who helped. Publish photographs and a short highlights video on the institution's website and social channels. Review the day with the committee, noting what went well and what to improve, and keep the run sheet, supplier list and timings as a template for the next ceremony. Over time, these notes make every ceremony easier to plan and more polished for graduates and their families."
        ],
      },
      {
        id: "get-help",
        title: "When Should You Bring in an Event Team?",
        paragraphs: [
          "Academic ceremonies combine protocol, stage production, photography and guest management. If your staff are busy with academic work, an experienced [event management company in Sri Lanka](/event-management-sri-lanka) can coordinate the stage, AV, seating, photography and run sheet while the institution focuses on its graduates and guests.",
          "See our [corporate event management](/corporate-event-management-sri-lanka) page for formal events, and our guide to [planning an award ceremony](/blog/award-ceremony-planning-sri-lanka) for prize-givings.",
          "To get started, send us a short brief on WhatsApp with your event type, preferred date, expected guest count and location. We will reply with questions where needed and a written proposal within 24–48 hours, listing what is included so you can compare it with other options and decide with confidence. There is no obligation to proceed, and you can choose to hand over the full event or only selected parts.",
        ],
      },
    ],
    faqs: [
      { q: "How long does a graduation ceremony usually take?", a: "It depends on the number of graduates and speeches. Rehearsing the presentation segment helps estimate the total length accurately." },
      { q: "What should be on the stage?", a: "A backdrop with the institution's name and crest, a lectern, seating for dignitaries, national and institutional flags, the traditional oil lamp and floral arrangements." },
      { q: "How do we invite a chief guest?", a: "Send a formal invitation well in advance, confirm in writing and share the order of proceedings, arrival time and any requirements with their office." },
      { q: "Should we live stream the ceremony?", a: "Live streaming helps families who cannot attend. It requires a stable internet connection, cameras and an operator, and should be tested during rehearsal." },
      { q: "Can Cypher Digital coordinate our ceremony?", a: "Yes. We have coordinated academic ceremonies for the University of Kelaniya. Share your brief on WhatsApp for a written proposal within 24–48 hours." },
    ],
  },
  {
    slug: "event-decoration-ideas-sri-lanka",
    title: "Event Decoration Ideas in Sri Lanka: Stage and Venue Styling",
    description: "Event decoration ideas in Sri Lanka: stage backdrops, branding, florals, lighting, entrances, photo areas and table styling for corporate, launch and private events.",
    h1: "Event Decoration Ideas in Sri Lanka: Stage, Backdrop and Venue Styling",
    intro: "Good event decoration in Sri Lanka does three jobs: it creates the right atmosphere, it makes the brand or occasion clear in every photo and it guides guests through the venue. The most effective decor focuses on a few key areas, such as the stage backdrop, the entrance, the photo area and the tables, rather than spreading the budget thinly across the whole room. This guide shares practical decoration ideas for corporate events, product launches and private celebrations, along with the rules and timings to plan around.",
    date: "2026-11-26",
    photoIndexes: [1, 11, 12],
    sections: [
      {
        id: "start-with-purpose",
        title: "Where Should Event Decoration Start?",
        paragraphs: [
          "Start with the purpose and the audience. A corporate conference needs a professional, clean look that supports the brand and keeps attention on speakers. A product launch needs drama and a strong focus on the product. A wedding or birthday needs warmth, personality and beautiful photo moments.",
          "Choose two or three colours that match the brand or theme, and use them consistently across the backdrop, florals, lighting and printed items. A clear colour palette makes a room feel designed, even with a modest budget. For overall planning, see our [event planning Sri Lanka guide](/event-planning-sri-lanka).",
        ],
      },
      {
        id: "stage-backdrop",
        title: "What Makes a Strong Stage Backdrop?",
        paragraphs: [
          "The stage backdrop appears in almost every photo and video, so it deserves the largest share of the decor budget. Popular options include printed fabric or flex backdrops, wooden or panel structures with cut-out logos, LED screens with changing visuals, and floral walls.",
          "Keep the design simple: the event name, logo and one key message, with enough space around the speaker area. Make sure the backdrop is wide and tall enough for the stage and the camera angle. Test how it looks under the stage lighting before the event.",
        ],
      },
      {
        id: "branding",
        title: "How Do You Use Branding Without Overdoing It?",
        paragraphs: [
          "For corporate events and launches, branding should appear where guests and cameras look: the entrance, registration desk, stage, photo wall and screens. Pull-up banners, branded lecterns, table cards and lanyards add consistency.",
          "Avoid covering every surface with logos. Clean spaces with a few strong branded moments look more premium than a crowded room. Reusable items such as pull-up banners and branded lecterns can be used again at future events.",
        ],
      },
      {
        id: "entrance",
        title: "How Should You Decorate the Entrance?",
        paragraphs: [
          "The entrance sets the first impression. Ideas include an arch with florals or fabric, a welcome sign with the event name, a red carpet for formal events, lighting that leads guests inside, or a traditional welcome with a lamp, flowers or a drum performance.",
          "Make sure the entrance is clear, safe and easy to navigate, with signage to registration, toilets and the main hall. For outdoor venues, plan covering in case of rain.",
        ],
      },
      {
        id: "photo-areas",
        title: "What Photo Area Ideas Work Well?",
        paragraphs: ["A photo area gives guests a reason to take and share pictures, extending the reach of the event."],
        list: [
          "Branded step-and-repeat wall with the logo pattern.",
          "Floral wall or arch in the event colours.",
          "Neon sign with a short message or hashtag.",
          "Themed props for staff parties and celebrations.",
          "Product display with lighting for launches.",
          "Traditional setting with brass lamps and flowers for cultural events.",
          "360-degree video booth for high-energy events.",
        ],
      },
      {
        id: "florals",
        title: "How Can You Use Florals in Sri Lanka?",
        paragraphs: [
          "Sri Lanka offers a range of local flowers and greenery, including orchids, anthuriums, lotus, jasmine and tropical leaves. Local flowers usually cost less and last better in the heat than imported varieties. Ask your florist what is in season.",
          "Use florals for the stage, the lectern, the entrance, table centrepieces and the oil lamp at formal ceremonies. For corporate events, simple arrangements in the brand colours look elegant. For weddings and private events, fuller arrangements and hanging installations create a dramatic effect.",
        ],
      },
      {
        id: "lighting",
        title: "Why Does Lighting Matter So Much?",
        paragraphs: [
          "Lighting changes the mood of a room more than any other decor element. Uplighting on walls adds colour, spotlights focus attention on the stage, fairy lights create warmth, and moving lights add energy to dance floors and launches.",
          "Plan lighting with the AV team so that stage lighting suits photography and video. Avoid coloured light on speakers' faces, and make sure the room is not too dark for guests to move safely.",
        ],
      },
      {
        id: "tables",
        title: "How Do You Style Tables?",
        paragraphs: [
          "Table styling matters most at dinners, award nights and weddings. Choose linen colours that match the theme, add centrepieces that do not block conversation, and use table numbers or names that match the seating plan.",
          "Small details such as printed menus, name cards and napkin folds make tables feel considered. For conferences, keep tables simple with water, notepads, pens and a small branded item.",
        ],
      },
      {
        id: "by-event-type",
        title: "Which Decoration Ideas Suit Each Type of Event?",
        paragraphs: [
          "Corporate conferences and seminars: a clean stage backdrop with the event title, LED screens for presentations, branded lectern, simple florals and clear signage.",
          "Product launches: a dramatic reveal area, lighting effects, the product as the visual centre, a branded photo wall and display tables for demonstrations. See our [product launch events Sri Lanka](/product-launch-events-sri-lanka) page.",
          "Academic ceremonies: institutional colours, the crest, national and institutional flags, a traditional oil lamp, floral arrangements on the stage and a dignified backdrop.",
          "Weddings and private celebrations: themed florals, draped fabric, warm lighting, personalised signage and styled tables. Our [wedding planning Sri Lanka](/wedding-planning-sri-lanka) page explains how we coordinate wedding suppliers.",
          "Staff parties and get-togethers: theme-based decor, a photo booth, colourful lighting and fun props. Read our [annual get-together ideas](/blog/annual-get-together-ideas-sri-lanka) for more inspiration.",
        ],
      },
      {
        id: "venue-rules",
        title: "What Venue Rules Should You Check?",
        paragraphs: [
          "Venues often limit what can be fixed to walls, ceilings or floors. Ask about nails, tape, hanging installations, open flames, candles, confetti, smoke or fog machines and glitter. Some hotels require their approved decorators or charge a fee for outside suppliers.",
          "Confirm setup and breakdown times, loading access and storage. Many decor items need several hours to install. A venue that allows setup the night before gives your team more time to get details right.",
        ],
      },
      {
        id: "budget",
        title: "How Do You Make the Decor Budget Go Further?",
        paragraphs: [
          "Focus spending on the stage and photo area, which appear in most photos. Use lighting to transform the room instead of filling it with decor. Rent rather than buy furniture, props and structures. Reuse branded items across events.",
          "Get itemised quotes from decorators based on the same brief and compare inclusions such as delivery, setup and removal. Our [event budget planning guide](/blog/event-budget-planning-sri-lanka) explains how to compare quotes fairly.",
        ],
      },
      {
        id: "sustainability",
        title: "Can Event Decor Be More Sustainable?",
        paragraphs: [
          "Choose reusable backdrops and structures, local flowers and greenery, and fabric instead of single-use plastic. Donate flowers to hospitals, temples or elders' homes after the event where appropriate. Digital signage and screens can replace some printed items.",
          "Sustainable choices often reduce costs too, and they show guests that the organiser cares about its impact.",
        ],
      },
      {
        id: "real-examples",
        title: "What We Have Learned From Our Events",
        paragraphs: [
          "At the FoodCycler Eco 5 product launch, the stage, branded lectern and product display were the main visual focus, which gave the photographs a clear message. On fashion shoot productions we have coordinated, styled sets and careful lighting made the difference between ordinary and professional images. The lesson is the same at every event: plan decor for how it will look on camera, not only how it looks in the room.",
        ],
      },
      {
        id: "weather",
        title: "How Do You Plan Decor for Sri Lankan Weather?",
        paragraphs: [
          "Heat, humidity and sudden rain affect decor in Sri Lanka. Flowers wilt quickly in direct sun, paper and fabric can sag in humidity, and outdoor structures need to withstand wind and rain. Choose hardy local flowers, keep arrangements in shade until guests arrive and use weather-resistant materials outdoors.",
          "For outdoor events, plan tents or covered areas with matching decor so the look stays consistent if the event moves under cover. Protect electrical items such as lighting and LED screens, and secure tall backdrops and banners against wind."
        ],
      },
      {
        id: "working-with-decorators",
        title: "How Do You Work Well With a Decorator?",
        paragraphs: [
          "Share a clear brief: the event type, venue, guest count, colours, theme, brand guidelines and examples of designs you like. Ask for a sketch or visual of the stage and key areas before you confirm. Agree the list of items, sizes, setup time and removal time in writing.",
          "Visit the venue with the decorator if possible, so they can measure the stage and check access, power and rules. On the day, have one person approve the final setup before guests arrive and check that every agreed item is in place."
        ],
      },
      {
        id: "cultural-elements",
        title: "How Can You Include Sri Lankan Cultural Elements?",
        paragraphs: [
          "Traditional elements add meaning and character to many events. Brass oil lamps, coconut flower arrangements, gok kola decorations, traditional drummers at the entrance and batik or handloom fabrics are all popular choices. Avurudu themes, with clay pots, oil lamps and traditional sweets, work well for April celebrations.",
          "Use cultural elements respectfully and in the right context. For formal ceremonies, the traditional oil lamp is often part of the programme itself. For corporate events, a few carefully chosen elements can give an international audience a sense of Sri Lanka without overwhelming the brand."
        ],
      },
      {
        id: "timeline",
        title: "What Is a Good Decoration Timeline?",
        paragraphs: [
          "Agree the theme and colours early, then request designs and quotes several weeks before the event. Confirm the design, sizes and materials, and approve printed items such as backdrops and banners in good time, since printing and fabrication take several days.",
          "In the final week, confirm setup times, delivery access and the person responsible on site. On the day, allow enough time for installation, lighting checks and photographs of the finished setup before guests arrive."
        ],
      },
      {
        id: "signage",
        title: "How Should You Plan Event Signage?",
        paragraphs: [
          "Signage is part of the decor and the guest experience. Use a consistent design for the welcome sign, directional signs, registration desk, seating plan, table numbers and session boards. Clear signs reduce questions to staff and help guests move through the venue easily.",
          "Print signs in readable fonts and sizes, and place them at eye level where people make decisions, such as entrances, corridors and lift lobbies. Digital screens can display schedules and messages that change during the day."
        ],
      },
      {
        id: "photo-ready",
        title: "How Do You Make Decor Look Good in Photos?",
        paragraphs: [
          "Ask the photographer to check the stage and photo areas during setup. Avoid shiny surfaces that reflect flash, busy patterns behind speakers and colours that clash with brand logos. Make sure there is enough light on the backdrop and that logos are not hidden behind lecterns or flowers."
        ],
      },
      {
        id: "trends",
        title: "Which Decoration Trends Are Popular Now?",
        paragraphs: [
          "Popular approaches include greenery walls, warm neutral palettes with one accent colour, large-format LED backdrops, neon signage, natural materials such as rattan and wood, and minimalist stages that put the focus on the speaker or product. Trends change quickly, so choose a look that fits your brand and audience rather than copying what is fashionable."
        ],
      },
      {
        id: "get-help",
        title: "When Should You Work With an Event Team?",
        paragraphs: [
          "If the event involves stage production, lighting, branding and florals together, an experienced team can coordinate the decorator, AV supplier and venue so the look is consistent. Speak to an [event management company in Sri Lanka](/event-management-sri-lanka) with your theme, colours, guest count and venue, and ask for a written proposal.",
          "To get started, send us a short brief on WhatsApp with your event type, preferred date, expected guest count and location. We will reply with questions where needed and a written proposal within 24–48 hours, listing what is included so you can compare it with other options and decide with confidence. There is no obligation to proceed, and you can choose to hand over the full event or only selected parts.",
        ],
      },
    ],
    faqs: [
      { q: "What is the most important decoration at an event?", a: "The stage backdrop, because it appears in almost every photo and video. Focus the budget there and on the photo area first." },
      { q: "Can we bring our own decorator to a hotel?", a: "Some hotels allow outside decorators, often with a fee or approval. Check the venue's rules before you book a decorator." },
      { q: "Which flowers are good for events in Sri Lanka?", a: "Local options such as orchids, anthuriums, lotus, jasmine and tropical greenery usually cost less and handle the heat well. Ask your florist what is in season." },
      { q: "How early should decor setup start?", a: "Many installations need several hours. Confirm setup times with the venue, and ask whether setup the night before is possible." },
      { q: "Can Cypher Digital handle our event decoration?", a: "Yes. We can coordinate stage design, branding, florals and lighting as part of event management. Share your brief on WhatsApp for a written proposal within 24–48 hours." },
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
