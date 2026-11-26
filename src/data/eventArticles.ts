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
