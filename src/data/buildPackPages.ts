export interface BuildPackField { key: string; label: string; type: "text" | "date" | "number" | "url" | "select" | "multi"; options?: string[]; }
export interface BuildPackPage { id: string; path: string; component: string; title: string; description: string; breadcrumb: string; service: string; hero: { title: string; body: string }; cta: string; sections: { title: string; body: string }[]; faqs: { question: string; answer: string }[]; formTitle: string; submit: string; companyLabel: string; fields: BuildPackField[]; pendingLinks: { text: string; path: string }[]; }
export const buildPackPages: BuildPackPage[] = [
  {
    "id": "02",
    "path": "/advertising-agency-sri-lanka",
    "component": "AdvertisingAgencySriLanka",
    "title": "Advertising Agency in Sri Lanka | Digital & Traditional Ads",
    "description": "Full-service advertising agency in Sri Lanka. TV, radio, newspaper, outdoor and digital ads, planned, produced and bought by one team. Get a media plan.",
    "breadcrumb": "Advertising Agency",
    "service": "Advertising agency services",
    "hero": {
      "title": "Full-Service Advertising Agency in Sri Lanka",
      "body": "**One agency for your TV, radio, press, outdoor and digital advertising: planned together, bought together, measured together.**\n\nCypher Digital is an advertising agency in Sri Lanka for brands that want every rupee of their media budget working in the same direction. We plan the campaign, create the ads, book the media and run the digital side, so your TV spot, your newspaper ad and your Facebook campaign tell one story and drive one result."
    },
    "cta": "Request a media plan",
    "sections": [
      {
        "title": "What our advertising agency does",
        "body": "**Campaign strategy and media planning**\nWe start with your goal, audience and budget, then choose the mix of channels that will reach your customers at the lowest cost.\n\n**Creative and production**\nTV commercials, radio spots, press ads, billboards and social ads, written, designed and produced by our in-house team. See our [video production](/video-production-sri-lanka) work.\n\n**Traditional media buying**\nWe plan and book [TV advertising](/tv-advertising-sri-lanka), [radio advertising](/radio-advertising-sri-lanka), [newspaper advertising](/newspaper-advertising-sri-lanka) and [outdoor and billboard advertising](/outdoor-advertising-sri-lanka) across Sri Lanka, handled through our [media buying](/media-buying-agencies-sri-lanka) team.\n\n**Digital advertising**\n[Facebook ads](/facebook-ads-sri-lanka), [Google Ads](/google-ads-sri-lanka), [YouTube ads](/youtube-ads-sri-lanka), [TikTok ads](/tiktok-ads-sri-lanka) and [programmatic advertising](/programmatic-advertising-sri-lanka), set up, optimised and reported on.\n\n**Integrated campaigns**\nOne launch across TV, press, outdoor and digital, with retargeting that follows people who saw your TV or press ad online."
      },
      {
        "title": "Why choose an integrated advertising agency",
        "body": "- **One message everywhere.** The same idea and look across every channel.\n- **Smarter budget split.** We move spend to the channels that are working.\n- **Faster production.** Strategy, creative, video and design are under one roof.\n- **Clear results.** Digital tracking alongside your traditional media reach."
      },
      {
        "title": "Who we work with",
        "body": "Retail and FMCG brands, banks and finance companies, real estate developers, hotels and tourism, education institutes, healthcare providers and fast-growing local businesses."
      },
      {
        "title": "How a campaign works",
        "body": "1. **Brief.** Your goal, audience, timeline and budget.\n2. **Media plan.** The recommended channels, schedule and creative ideas.\n3. **Create.** Scripts, designs and production.\n4. **Book and launch.** Media bookings and digital campaigns go live.\n5. **Report.** Reach, response and sales results, with what we'll improve next."
      },
      {
        "title": "Advertising in Sri Lanka: guides",
        "body": "Planning your budget? Read our [guide to advertising in Sri Lanka](/advertising-in-sri-lanka), [TV advertising rates](/blog/tv-advertising-rates-sri-lanka) and [advertising costs in Sri Lanka](/blog/advertising-cost-sri-lanka-2026)."
      }
    ],
    "faqs": [
      {
        "question": "What does a full-service advertising agency do?",
        "answer": "It handles strategy, creative, production, media buying and reporting for both traditional and digital channels, so you don't need several suppliers."
      },
      {
        "question": "Can you handle just one channel?",
        "answer": "Yes. Many clients start with one channel, such as TV or Facebook ads, and add more later."
      },
      {
        "question": "How much budget do I need?",
        "answer": "It depends on your channels and goals. Send your brief and we'll recommend a plan that fits."
      }
    ],
    "formTitle": "Request a media plan",
    "submit": "Get my media plan",
    "companyLabel": "Company",
    "fields": [
      {
        "key": "channels",
        "label": "Channels interested in",
        "type": "multi",
        "options": [
          "TV",
          "Radio",
          "Newspaper",
          "Outdoor",
          "Digital ads",
          "Not sure"
        ]
      },
      {
        "key": "startDate",
        "label": "Campaign start date",
        "type": "date"
      }
    ],
    "pendingLinks": []
  },
  {
    "id": "03",
    "path": "/digital-marketing-consultant-sri-lanka",
    "component": "DigitalMarketingConsultantSriLanka",
    "title": "Digital Marketing Consultant Sri Lanka | Strategy & Audits",
    "description": "Work with a digital marketing consultant in Sri Lanka. Strategy, audits, sales funnels and a clear 90-day plan for your business. Book a consultation.",
    "breadcrumb": "Marketing Consultant",
    "service": "Digital marketing consultancy",
    "hero": {
      "title": "Digital Marketing Consultant in Sri Lanka",
      "body": "**A clear plan for where to spend your marketing budget, and why.**\n\nMany Sri Lankan businesses spend on boosts, ads and agencies without a plan that ties it all to sales. As your digital marketing consultant, Cypher Digital audits what you're doing now, finds what's working and what's wasting money, and gives you a practical plan you can run yourself or with us."
    },
    "cta": "Book a consultation",
    "sections": [
      {
        "title": "What our digital marketing consultancy covers",
        "body": "**Marketing audit**\nA review of your website, social media, ads, SEO and reporting, with clear findings. We also offer focused [social media audits](/social-media-audit-sri-lanka) and [Google Ads audits](/google-ads-audit-sri-lanka).\n\n**Digital marketing strategy**\nYour goals, target customers, key messages, channels and budget split, with a 90-day action plan.\n\n**Sales funnel consulting**\nWe map how a stranger becomes a customer: ads, landing pages, WhatsApp and calls, follow-up and closing. Then we fix the steps where leads drop out. Many businesses lose leads after the enquiry, which is why we also offer [lead follow-up](/lead-follow-up-services-sri-lanka).\n\n**Channel and budget planning**\nWhich mix of social media, Google, SEO, email and traditional media fits your budget, and what results to expect from each."
      },
      {
        "title": "Who this is for",
        "body": "- Business owners who want a second opinion before hiring an agency\n- Companies spending on ads without clear results\n- Marketing teams that need an outside strategy and a plan\n- New businesses planning their launch"
      },
      {
        "title": "How it works",
        "body": "1. **Discovery call.** Your goals, current marketing and budget.\n2. **Audit.** We review your channels and data.\n3. **Strategy session.** We present the findings and the plan.\n4. **Your plan.** A written 90-day roadmap with priorities and KPIs.\n5. **Optional support.** Run it yourself, or let our team handle it through our [digital marketing services](/digital-marketing-services-sri-lanka)."
      },
      {
        "title": "What you get",
        "body": "- A written audit with prioritised fixes\n- A channel and budget recommendation\n- A sales funnel map with the drop-off points marked\n- A 90-day action plan with KPIs"
      }
    ],
    "faqs": [
      {
        "question": "What does a digital marketing consultant do?",
        "answer": "They review your marketing, find what's holding results back, and give you a strategy and plan. An agency then runs the work day to day."
      },
      {
        "question": "Do I have to hire your agency afterwards?",
        "answer": "No. The plan is yours to run however you choose."
      },
      {
        "question": "Can you help with a sales funnel, not just marketing?",
        "answer": "Yes. We look at the whole path from ad to sale, including landing pages, WhatsApp, calls and follow-up."
      }
    ],
    "formTitle": "Book a consultation",
    "submit": "Book my consultation",
    "companyLabel": "Company",
    "fields": [
      {
        "key": "goal",
        "label": "Main goal",
        "type": "select",
        "options": [
          "More leads",
          "More sales",
          "Brand awareness",
          "Fix ads",
          "Other"
        ]
      }
    ],
    "pendingLinks": []
  },
  {
    "id": "04",
    "path": "/photoshoot-sri-lanka",
    "component": "PhotoshootSriLanka",
    "title": "Photoshoot Sri Lanka | Brand Photo & Video Shoots",
    "description": "Brand photoshoots and videography in Sri Lanka. Product, food, fashion, hotel and corporate shoots, edited for Instagram, TikTok and ads. Get a quote.",
    "breadcrumb": "Photoshoots",
    "service": "Brand photography and videography",
    "hero": {
      "title": "Brand Photoshoots and Video Shoots in Sri Lanka",
      "body": "**Photos and videos made for social media, ads and your website, shot in one day by one team.**\n\nCypher Digital plans and shoots brand photoshoots in Sri Lanka for businesses that need content that sells, not just looks nice. We shoot products, food, fashion, hotels, teams and events on location: at your shop, office, factory, restaurant or hotel, or at a location we find for you anywhere on the island. Every shoot is planned around where the content will run: Instagram and TikTok, Facebook and Google ads, your website and your catalogue.\n\nBecause we also run social media and ads, we know which shots get clicks, and you get photos and videos that are sized, edited and ready to post."
    },
    "cta": "Get a shoot quote",
    "sections": [
      {
        "title": "What we shoot",
        "body": "**Product photography**\nClean white-background shots for online stores, plus styled lifestyle shots for social media. See our [product photography](/product-photography-sri-lanka) service.\n\n**Food and restaurant shoots**\nMenu photos, dish close-ups, kitchen reels and ambience videos for restaurants, cafés and cloud kitchens.\n\n**Fashion and lookbook shoots**\nModel shoots, flat lays and reels for new collections and seasonal campaigns.\n\n**Hotel, resort and travel shoots**\nRooms, villas, pools, dining and experiences, for booking sites, Instagram and travel ads.\n\n**Corporate and team photography**\nHeadshots, team photos and office shoots. See [corporate photography in Colombo](/corporate-photography-colombo).\n\n**Event photography and videography**\nLaunches, award nights and corporate events, with same-day highlight reels."
      },
      {
        "title": "Videography in Sri Lanka, made for social media",
        "body": "- Instagram Reels and TikTok videos (9:16)\n- 15–30 second video ads for Facebook, Instagram and YouTube\n- Product demos and unboxing videos\n- Behind-the-scenes and \"meet the team\" clips\n- Customer testimonial videos\n\nNeed a full brand film or TV commercial? See our [video production](/video-production-sri-lanka) and [reel creation](/reel-creation-sri-lanka) services."
      },
      {
        "title": "We come to you",
        "body": "We don't make you travel to a studio. Our crew brings the cameras, lighting, backdrops and props to your location, whether that's your shop, office, warehouse, restaurant or hotel. Need a location? We'll find one that fits your brand."
      },
      {
        "title": "How a shoot works",
        "body": "1. **Brief.** Your product, audience and where the content will run.\n2. **Shoot plan.** Shot list, mood board, location, props and models.\n3. **Shoot day.** Photographer, videographer and stylist, with photos and video in one session.\n4. **Edit.** Colour, retouching, captions and cuts for each platform."
      },
      {
        "title": "Packages",
        "body": "- **Starter shoot.** A half-day shoot for small businesses and new products.\n- **Brand content shoot.** A full day of photos and reels for a month of social media.\n- **Shoot + Social.** A monthly shoot plus our [social media management](/social-media-management-sri-lanka): we shoot, plan, post and report.\n- **Campaign shoot.** Multi-location shoots with models, stylist and video ads for a [social media campaign](/social-media-campaigns-sri-lanka).\n\nEvery package is quoted to your brief. [Button: Get a custom quote]"
      },
      {
        "title": "After the shoot: put your content to work",
        "body": "Most brands we shoot for don't stop at files. Our team can plan a month of posts with your new photos and reels, manage your pages, and run Facebook, Instagram and TikTok ads that use them. See our [social media marketing packages](/social-media-marketing-packages-sri-lanka)."
      },
      {
        "title": "Why brands choose Cypher Digital",
        "body": "- **Shot for performance.** We run ads every day, so we shoot the hooks, angles and formats that work.\n- **Photo and video in one booking.** One team, one day, a month of content.\n- **Every format delivered.** 1:1, 4:5, 9:16 and 16:9.\n- **Sinhala, Tamil and English.** Captions and on-screen text in your customers' language."
      }
    ],
    "faqs": [
      {
        "question": "How much does a photoshoot cost in Sri Lanka?",
        "answer": "It depends on the shoot length, the number of final photos and videos, the location, and whether you need models or a stylist. Send us your brief and we'll quote it."
      },
      {
        "question": "Do you have a studio?",
        "answer": "No. We shoot on location at your premises or a location we arrange, and bring all the lighting and equipment."
      },
      {
        "question": "Do you do photography and videography in the same shoot?",
        "answer": "Yes. Most of our brand shoots cover both."
      },
      {
        "question": "Do you shoot outside Colombo?",
        "answer": "Yes, across Sri Lanka. Travel is included in your quote."
      }
    ],
    "formTitle": "Book your brand photoshoot",
    "submit": "Get my quote",
    "companyLabel": "Business name",
    "fields": [
      {
        "key": "shootType",
        "label": "Type of shoot",
        "type": "select",
        "options": [
          "Product",
          "Food",
          "Fashion",
          "Hotel/Travel",
          "Corporate",
          "Event",
          "Other"
        ]
      },
      {
        "key": "date",
        "label": "Preferred date",
        "type": "date"
      },
      {
        "key": "social",
        "label": "Interested in social media management too?",
        "type": "select",
        "options": [
          "Yes",
          "No",
          "Maybe"
        ]
      }
    ],
    "pendingLinks": []
  },
  {
    "id": "06",
    "path": "/corporate-photography-colombo",
    "component": "CorporatePhotographyColombo",
    "title": "Corporate Photographer Colombo | On-Location Brand Shoots",
    "description": "Corporate photographer in Colombo. Headshots, team, office, event and product shoots at your premises, edited for LinkedIn, company profiles and ads.",
    "breadcrumb": "Corporate Photography",
    "service": "Corporate photography",
    "hero": {
      "title": "Corporate and Brand Photographer in Colombo",
      "body": "**Professional photos of your leaders, your team and your brand, shot at your office so no one has to leave work.**\n\nCypher Digital is a corporate photographer in Colombo for companies and brands. We bring a full mobile setup (lighting, backdrops and editing station) to your office, factory, hotel or event venue, and shoot executive headshots, team photos, workplace images, products and corporate events. Every image is edited for where it will be used: LinkedIn, your website, your company profile, annual reports, press releases and ads.\n\nWe're also a digital marketing agency, so your photos don't sit in a folder. Our team can use them in your [company profile](/company-profile-design-sri-lanka), your [LinkedIn marketing](/linkedin-marketing-sri-lanka) and your campaigns."
    },
    "cta": "Get a corporate shoot quote",
    "sections": [
      {
        "title": "Corporate photography services",
        "body": "**Executive headshots and leadership portraits**\nConsistent headshots for directors, managers and staff, with the same lighting and background for everyone.\n\n**Team and office photography**\nGroup photos, departments at work and workplace shots for your About page, careers page and employer branding.\n\n**Company profile and annual report photography**\nYour people, premises, operations and products, planned around your layout.\n\n**Corporate event photography and videography**\nConferences, launches, AGMs, award nights and staff events, with same-day highlights. Pairs with our [corporate event management](/corporate-event-management-sri-lanka).\n\n**Product and brand photography**\nProduct shots for your website and catalogue. See [product photography](/product-photography-sri-lanka) and [brand photoshoots](/photoshoot-sri-lanka).\n\n**Corporate video**\nCEO messages, company introductions and LinkedIn videos, shot the same day. Longer films are handled by our [video production](/video-production-sri-lanka) team."
      },
      {
        "title": "Who we work with",
        "body": "Banks and finance companies, B2B and tech firms, hospitals and clinics, hotels, schools and universities, real estate developers, and FMCG and retail brands."
      },
      {
        "title": "How a corporate shoot works",
        "body": "1. **Brief.** Number of people, products or locations, and where the photos will be used.\n2. **Plan.** Shot list, a schedule per department and dress guidelines for staff.\n3. **Shoot.** At your premises, with a photographer, an assistant and, if needed, a videographer.\n4. **Edit.** Consistent colour, retouching and background clean-up."
      },
      {
        "title": "Why companies choose Cypher Digital",
        "body": "- **One consistent look,** whether we shoot 5 people or 500\n- **Minimal disruption,** with timed slots per team\n- **Made for marketing:** cropped for LinkedIn, websites, profiles and ads\n- **Photo and video in one booking**\n- **A team that uses the content.** Our [B2B marketing](/b2b-digital-marketing-sri-lanka) and [social media management](/social-media-management-sri-lanka) teams can turn the shoot into campaigns"
      },
      {
        "title": "After the shoot: put your photos to work",
        "body": "Most companies use new photos to refresh their website, LinkedIn pages and company profile. We can do all three: design your company profile, update your LinkedIn presence, and run LinkedIn or social media campaigns with your new content."
      }
    ],
    "faqs": [
      {
        "question": "Do you have a photo studio?",
        "answer": "No. We bring a full mobile studio to your office or venue, which is usually easier for busy teams."
      },
      {
        "question": "Can you shoot outside Colombo?",
        "answer": "Yes. We cover events and offices across Sri Lanka, with travel included in your quote."
      }
    ],
    "formTitle": "Book a corporate shoot in Colombo",
    "submit": "Get my quote",
    "companyLabel": "Company",
    "fields": [
      {
        "key": "shootType",
        "label": "Shoot type",
        "type": "select",
        "options": [
          "Headshots",
          "Team & office",
          "Product",
          "Event",
          "Video",
          "Other"
        ]
      },
      {
        "key": "count",
        "label": "Number of people or products",
        "type": "number"
      },
      {
        "key": "date",
        "label": "Preferred date",
        "type": "date"
      }
    ],
    "pendingLinks": []
  },
  {
    "id": "07",
    "path": "/web-development-sri-lanka",
    "component": "WebDevelopmentSriLanka",
    "title": "Web Development Sri Lanka | Custom Websites & Web Apps",
    "description": "Web development in Sri Lanka: custom websites, web apps, CMS and integrations, built fast, secure and ready for SEO and ads. Get a quote.",
    "breadcrumb": "Web Development",
    "service": "Web development",
    "hero": {
      "title": "Web Development in Sri Lanka",
      "body": "**Fast, secure websites and web apps, built to bring in customers, not just look good.**\n\nCypher Digital offers web development in Sri Lanka for businesses that need more than a template: custom websites, booking and enquiry systems, CMS builds, integrations and fast landing pages. Because we're also a marketing agency, every site we build is ready for SEO, Google Ads, Meta ads and tracking from day one."
    },
    "cta": "Get a website quote",
    "sections": [
      {
        "title": "Web development services",
        "body": "**Custom website development**\nBusiness websites built around your content and goals, mobile-first and fast-loading. Need the design side too? See our [web design](/web-design-sri-lanka) service.\n\n**Ecommerce development**\nOnline stores with local payment gateways and delivery options. See [ecommerce website development](/ecommerce-website-sri-lanka).\n\n**Integrations**\nWhatsApp, CRM, payment gateways, Google Analytics, Meta Pixel and email tools, connected so every lead is tracked.\n\n**Landing pages**\nHigh-converting pages for ad campaigns. See [landing page design](/landing-page-design-sri-lanka)."
      },
      {
        "title": "Built for marketing from day one",
        "body": "- Clean page structure, fast loading and schema markup for [SEO](/seo-services-sri-lanka)\n- Conversion tracking ready for [Google Ads](/google-ads-sri-lanka) and Meta ads\n- WhatsApp and enquiry buttons on every page\n- Easy to add new service and landing pages as you grow"
      },
      {
        "title": "Our development process",
        "body": "1. **Discovery.** Goals, features, pages and integrations.\n2. **Plan and design.** Sitemap, wireframes and design, with our [UI/UX design](/ui-ux-design-sri-lanka) team.\n3. **Build.** Development, content setup and integrations.\n4. **Test.** Mobile, speed, forms, tracking and security.\n5. **Launch.** Go live, submit to Google and set up analytics.\n6. **Grow.** Optional SEO, ads and ongoing updates."
      },
      {
        "title": "Why Cypher Digital for web development",
        "body": "- **Marketing-first builds,** so your site is designed to generate enquiries\n- **One team** for website, SEO, ads and content\n- **Local support** in Sri Lanka after launch"
      },
      {
        "title": "After launch: get traffic to your new site",
        "body": "A new website needs visitors. Most of our web clients add [SEO services](/seo-services-sri-lanka), [Google Ads](/google-ads-sri-lanka) or [social media marketing](/social-media-management-sri-lanka) so the site starts bringing in customers straight away."
      }
    ],
    "faqs": [
      {
        "question": "What's the difference between web design and web development?",
        "answer": "Design is how the site looks and feels. Development is how it's built and works: code, features, speed and integrations. We do both."
      },
      {
        "question": "Can you connect my website to WhatsApp and my CRM?",
        "answer": "Yes. We integrate WhatsApp, CRMs, payment gateways and analytics tools."
      },
      {
        "question": "Can you redesign or rebuild my current website?",
        "answer": "Yes. We can rebuild it while keeping your existing URLs and SEO rankings safe."
      }
    ],
    "formTitle": "Get a website quote",
    "submit": "Get my quote",
    "companyLabel": "Company",
    "fields": [
      {
        "key": "projectType",
        "label": "Project type",
        "type": "select",
        "options": [
          "New website",
          "Redesign",
          "Ecommerce",
          "Web app/booking system",
          "Landing pages",
          "Other"
        ]
      },
      {
        "key": "website",
        "label": "Current website URL (optional)",
        "type": "url"
      }
    ],
    "pendingLinks": []
  },
  {
    "id": "08",
    "path": "/ecommerce-website-sri-lanka",
    "component": "EcommerceWebsiteSriLanka",
    "title": "Ecommerce Website Sri Lanka | Online Store Development",
    "description": "Ecommerce website development in Sri Lanka. Online stores with local payments, delivery options and product pages built to sell, plus marketing.",
    "breadcrumb": "Ecommerce Websites",
    "service": "Ecommerce website development",
    "hero": {
      "title": "Ecommerce Website Development in Sri Lanka",
      "body": "**Online stores that take orders, accept local payments and are ready to sell from day one.**\n\nCypher Digital builds ecommerce websites in Sri Lanka for brands moving from Facebook and WhatsApp orders to a real online store. We set up your products, payments, delivery and tracking, then help you bring in customers with product photos, ads and email marketing, all from one team."
    },
    "cta": "Get a store quote",
    "sections": [
      {
        "title": "What's included in your online store",
        "body": "**Delivery and order management**\nDelivery zones and charges across Sri Lanka, order notifications, and stock and order tracking.\n\n**WhatsApp ordering and notifications**\nWhatsApp chat buttons and order updates. See [WhatsApp marketing](/whatsapp-marketing-sri-lanka).\n\n**Product upload and setup**\nWe load your products, categories and descriptions, and can shoot them too with [product photography](/product-photography-sri-lanka).\n\n**SEO and tracking ready**\nProduct schema, fast pages, Google Analytics, Meta Pixel and Google Merchant Center setup for [Google Shopping ads](/google-shopping-ads-sri-lanka)."
      },
      {
        "title": "Launch packages",
        "body": "- **Growth store.** More products, WhatsApp ordering, email capture and tracking.\n- **Store + Marketing.** Your store plus product photography, Meta and Google Shopping ads, and [email marketing](/email-marketing-sri-lanka) for launch.\n\nEvery package is quoted to your product range and features."
      },
      {
        "title": "How we build your store",
        "body": "1. **Plan.** Products, payments, delivery and features.\n2. **Design.** Homepage, product and checkout design.\n3. **Build and set up.** Store, payments, delivery and product upload.\n4. **Test.** Orders, payments, mobile and speed.\n5. **Launch.** Go live, connect analytics and submit to Google.\n6. **Sell.** Optional photos, ads, email and social media to drive orders."
      },
      {
        "title": "After launch: get your first orders",
        "body": "A new store needs traffic. Most of our ecommerce clients add [ecommerce digital marketing](/ecommerce-digital-marketing-sri-lanka): product photos, [Instagram ads](/instagram-ads-sri-lanka), [Facebook ads](/facebook-ads-sri-lanka), Google Shopping and email, so the orders start coming in."
      }
    ],
    "faqs": [
      {
        "question": "Can my online store accept local card payments?",
        "answer": "Yes. We integrate local payment gateways, plus cash on delivery and bank transfer."
      },
      {
        "question": "Can I manage products and orders myself?",
        "answer": "Yes. You get an easy admin panel and a short training session."
      },
      {
        "question": "Can you move my Facebook or Instagram shop to a website?",
        "answer": "Yes. We set up your products on the new store and connect your social pages."
      }
    ],
    "formTitle": "Get a store quote",
    "submit": "Get my quote",
    "companyLabel": "Brand / company",
    "fields": [
      {
        "key": "count",
        "label": "Number of products",
        "type": "select",
        "options": [
          "Under 50",
          "50–200",
          "200+"
        ]
      },
      {
        "key": "selling",
        "label": "Selling now on",
        "type": "multi",
        "options": [
          "Facebook",
          "Instagram",
          "WhatsApp",
          "Daraz",
          "Existing website",
          "Not selling yet"
        ]
      },
      {
        "key": "marketing",
        "label": "Need marketing too?",
        "type": "select",
        "options": [
          "Yes",
          "No",
          "Maybe"
        ]
      }
    ],
    "pendingLinks": []
  },
  {
    "id": "09",
    "path": "/outdoor-advertising-sri-lanka",
    "component": "OutdoorAdvertisingSriLanka",
    "title": "Outdoor Advertising Sri Lanka | Billboards & OOH Media",
    "description": "Outdoor advertising in Sri Lanka: billboards, LED screens, transit and street media, planned and booked for you, with design and digital support.",
    "breadcrumb": "Outdoor Advertising",
    "service": "Outdoor advertising",
    "hero": {
      "title": "Outdoor Advertising in Sri Lanka",
      "body": "**Billboards, LED screens and street media that put your brand in front of thousands of people every day.**\n\nCypher Digital plans and books outdoor advertising in Sri Lanka for brands that want big, visible reach. We find the right sites for your audience, design artwork that works at a glance, manage printing and installation, and connect your outdoor campaign to digital ads so people who see your billboard see you again online."
    },
    "cta": "Request an outdoor media plan",
    "sections": [
      {
        "title": "Outdoor advertising options",
        "body": "**Billboards and hoardings**\nLarge-format sites on main roads and junctions in Colombo and across the island.\n\n**LED and digital screens**\nDigital billboards and screens in high-traffic areas, with the option to rotate several ads.\n\n**Street and point-of-sale media**\nLamp post banners, shop signage and in-store displays near where people buy.\n\n**Mall and venue advertising**\nScreens and displays in shopping malls, airports and event venues."
      },
      {
        "title": "What we handle for you",
        "body": "1. **Site planning.** We match locations to your audience, routes and budget.\n2. **Design.** Outdoor artwork that reads in three seconds, made by our [graphic design](/graphic-design-sri-lanka) team.\n3. **Booking and production.** Media booking, printing and installation through our [media buying](/media-buying-agencies-sri-lanka) team.\n4. **Proof of display.** Photos of your live sites.\n5. **Digital follow-up.** Location-based [Facebook ads](/facebook-ads-sri-lanka) and [programmatic ads](/programmatic-advertising-sri-lanka) around your billboard areas."
      },
      {
        "title": "Outdoor works best with other channels",
        "body": "Combine billboards with [TV advertising](/tv-advertising-sri-lanka), [radio advertising](/radio-advertising-sri-lanka) and [newspaper advertising](/newspaper-advertising-sri-lanka) for a full launch, planned together by our [advertising agency](/advertising-agency-sri-lanka) team."
      },
      {
        "title": "Who uses outdoor advertising",
        "body": "Property developers, retail and FMCG brands, banks, telecoms, education institutes, hotels and event organisers. Any brand that needs wide local reach fast."
      }
    ],
    "faqs": [
      {
        "question": "How much does billboard advertising cost in Sri Lanka?",
        "answer": "It depends on the location, size, format (static or LED) and how long the campaign runs. Tell us your target areas and dates and we'll send a plan with options."
      },
      {
        "question": "Can you design the artwork?",
        "answer": "Yes. Our team designs outdoor artwork and handles printing."
      },
      {
        "question": "Can I track results from outdoor ads?",
        "answer": "Yes. We use QR codes, unique offers and matched digital ads in the same areas to measure response."
      }
    ],
    "formTitle": "Request an outdoor media plan",
    "submit": "Get my plan",
    "companyLabel": "Company",
    "fields": [
      {
        "key": "formats",
        "label": "Formats",
        "type": "multi",
        "options": [
          "Billboards",
          "LED screens",
          "Transit",
          "Street/point-of-sale",
          "Malls",
          "Not sure"
        ]
      },
      {
        "key": "areas",
        "label": "Target areas",
        "type": "text"
      },
      {
        "key": "dates",
        "label": "Campaign dates",
        "type": "text"
      }
    ],
    "pendingLinks": []
  },
  {
    "id": "10",
    "path": "/email-marketing-sri-lanka",
    "component": "EmailMarketingSriLanka",
    "title": "Email Marketing Sri Lanka | Campaigns, Automation & Design",
    "description": "Email marketing services in Sri Lanka: newsletters, automated flows, design, list growth and reporting, so your emails get opened and drive sales.",
    "breadcrumb": "Email Marketing",
    "service": "Email marketing",
    "hero": {
      "title": "Email Marketing Services in Sri Lanka",
      "body": "**Emails your customers actually open: newsletters, offers and automated follow-ups that turn subscribers into sales.**\n\nCypher Digital runs email marketing in Sri Lanka for businesses that want a channel they own, without paying for every click. We build your list, design your emails, write the copy, set up automated flows and report on what sells, so email becomes a steady source of repeat customers."
    },
    "cta": "Get an email marketing plan",
    "sections": [
      {
        "title": "Email marketing services",
        "body": "**Strategy and calendar**\nWhat to send, to whom and how often, planned around your sales, launches and seasons (Avurudu, Christmas, back to school).\n\n**Email design and copywriting**\nMobile-friendly, on-brand templates and copy that gets clicks. See our [email design](/email-design-sri-lanka) work.\n\n**Automated email flows**\nWelcome series, abandoned cart, post-purchase, re-engagement and lead nurture emails that run on their own.\n\n**List growth**\nSign-up forms, pop-ups, lead magnets and ad campaigns that grow your subscriber list legally and with consent.\n\n**Reporting and testing**\nOpen, click and revenue reports, plus A/B tests on subject lines and offers."
      },
      {
        "title": "Email + WhatsApp + follow-up",
        "body": "Email works best alongside [WhatsApp marketing](/whatsapp-marketing-sri-lanka) and fast [lead follow-up](/lead-follow-up-services-sri-lanka). We plan all three so every lead hears from you at the right time, on the right channel."
      },
      {
        "title": "Who it's for",
        "body": "- [Ecommerce stores](/ecommerce-website-sri-lanka) that want repeat orders\n- Hotels and travel companies sending offers to past guests\n- Education institutes nurturing student leads\n- B2B companies following up long sales cycles\n- Any business with customer emails it isn't using"
      },
      {
        "title": "How we start",
        "body": "1. **Audit.** Your list, platform and past emails.\n2. **Plan.** Flows, a campaign calendar and list growth.\n3. **Build.** Templates, automations and forms.\n4. **Send and test.** Campaigns go out, with A/B tests.\n5. **Report.** Monthly results and improvements."
      }
    ],
    "faqs": [
      {
        "question": "Does email marketing still work in Sri Lanka?",
        "answer": "Yes, especially for ecommerce, hotels, education and B2B, where customers buy more than once or take time to decide."
      },
      {
        "question": "Do I need a big list to start?",
        "answer": "No. We set up flows and list growth from day one, even with a small list."
      },
      {
        "question": "Can you write the emails in Sinhala or Tamil?",
        "answer": "Yes. We write in Sinhala, Tamil and English."
      },
      {
        "question": "Will my emails go to spam?",
        "answer": "We set up domain authentication (SPF, DKIM and DMARC) and follow sending best practice to keep you out of spam folders."
      }
    ],
    "formTitle": "Get an email marketing plan",
    "submit": "Get my plan",
    "companyLabel": "Company",
    "fields": [
      {
        "key": "listSize",
        "label": "Current list size",
        "type": "select",
        "options": [
          "None yet",
          "Under 1,000",
          "1,000–10,000",
          "10,000+"
        ]
      },
      {
        "key": "platform",
        "label": "Platform used (optional)",
        "type": "text"
      }
    ],
    "pendingLinks": []
  }
];
export const buildPackLinkedRoutes: string[] = [
  "*",
  "/",
  "/:slug",
  "/about",
  "/admin",
  "/admin/applications",
  "/admin/call-clicks",
  "/admin/inquiries",
  "/admin/leads",
  "/admin/login",
  "/advertising-agency-sri-lanka",
  "/advertising-in-sri-lanka",
  "/ai-video-production-sri-lanka",
  "/ai-visibility-sri-lanka",
  "/automotive-digital-marketing-sri-lanka",
  "/b2b-digital-marketing-sri-lanka",
  "/banner-design-sri-lanka",
  "/beauty-salon-digital-marketing-sri-lanka",
  "/blog",
  "/blog/ads-support-sri-lanka",
  "/blog/advertising-cost-sri-lanka-2026",
  "/blog/advertising-mistakes-sri-lankan-businesses",
  "/blog/affordable-social-media-marketing-services-sri-lanka",
  "/blog/ai-avatar-videos-businesses-sri-lanka",
  "/blog/ai-avatar-videos-sri-lanka",
  "/blog/ai-tools-digital-marketing-sri-lanka-2026",
  "/blog/annual-get-together-ideas-sri-lanka",
  "/blog/avurudu-marketing-ideas-sri-lanka",
  "/blog/award-ceremony-planning-sri-lanka",
  "/blog/b2b-leads-linkedin-sri-lanka",
  "/blog/benefits-corporate-video-production-brands",
  "/blog/best-advertising-agencies-sri-lanka",
  "/blog/best-ai-tools-video-production-2025",
  "/blog/best-digital-marketing-agencies-sri-lanka",
  "/blog/best-digital-marketing-agency-sri-lanka",
  "/blog/best-social-media-agencies-sri-lanka-small-businesses",
  "/blog/best-social-media-platform-sri-lanka-business",
  "/blog/best-time-to-post-social-media-sri-lanka",
  "/blog/case-study-instagram-growth-sri-lanka",
  "/blog/colombo-restaurant-social-media-case-study",
  "/blog/company-profile-design-sri-lanka",
  "/blog/complete-guide-facebook-ads-businesses-sri-lanka",
  "/blog/complete-guide-running-ads-sri-lanka",
  "/blog/content-marketing-blog-strategy-sri-lanka",
  "/blog/corporate-event-management-sri-lanka-choose-agency",
  "/blog/cost-effective-advertising-strategies-sri-lankan-businesses",
  "/blog/creative-agency-sri-lanka",
  "/blog/digital-marketing-agency-colombo",
  "/blog/digital-marketing-car-dealerships-sri-lanka",
  "/blog/digital-marketing-colombo",
  "/blog/digital-marketing-cost-sri-lanka-pricing",
  "/blog/digital-marketing-cost-sri-lanka-pricing-guide",
  "/blog/digital-marketing-courses-sri-lanka",
  "/blog/digital-marketing-healthcare-sri-lanka",
  "/blog/digital-marketing-kandy",
  "/blog/digital-marketing-portfolio-sri-lanka",
  "/blog/digital-marketing-restaurants-sri-lanka",
  "/blog/digital-marketing-results-case-studies-sri-lanka",
  "/blog/digital-marketing-roi-measure-results-sri-lanka",
  "/blog/digital-marketing-salary-sri-lanka-2026",
  "/blog/digital-marketing-schools-tuition-classes-sri-lanka",
  "/blog/digital-marketing-skills-sri-lanka",
  "/blog/digital-marketing-small-businesses-sri-lanka",
  "/blog/digital-marketing-small-businesses-sri-lanka-starter-guide",
  "/blog/ecommerce-development-sri-lanka",
  "/blog/ecommerce-digital-marketing-sri-lanka",
  "/blog/email-marketing-sri-lanka-guide-2026",
  "/blog/event-budget-planning-sri-lanka",
  "/blog/event-decoration-ideas-sri-lanka",
  "/blog/event-marketing-sri-lanka-promote-event-online",
  "/blog/event-planner-vs-event-management-company-sri-lanka",
  "/blog/event-venues-colombo-guide",
  "/blog/facebook-boost-price-sri-lanka",
  "/blog/facebook-campaign-strategy-guide-sri-lankan-brands",
  "/blog/facebook-instagram-management-guide-sri-lankan-brands",
  "/blog/flyer-design-tips-improve-marketing-results",
  "/blog/freelancer-vs-digital-marketing-agency-sri-lanka",
  "/blog/gen-z-marketing-agency-sri-lanka",
  "/blog/get-business-on-chatgpt-sri-lanka",
  "/blog/get-more-customers-facebook-ads-sri-lanka",
  "/blog/google-ads-jobs-sri-lanka",
  "/blog/google-ads-optimization-tips-improve-campaign-performance",
  "/blog/google-ads-vs-facebook-ads-sri-lanka",
  "/blog/google-ads-vs-facebook-ads-which-better-business",
  "/blog/google-ads-vs-google-adsense-sri-lanka",
  "/blog/google-my-business-optimization-guide-sri-lanka",
  "/blog/google-search-ads-vs-display-ads-difference",
  "/blog/graduation-inauguration-ceremony-planning-sri-lanka",
  "/blog/graphic-design-mistakes-damage-brand",
  "/blog/graphic-design-portfolio-tips-sri-lanka",
  "/blog/graphic-designer-day-in-life-sri-lanka",
  "/blog/graphic-designer-jobs-sri-lanka-guide",
  "/blog/grow-business-instagram-sri-lanka",
  "/blog/hire-social-media-manager-sri-lanka",
  "/blog/how-ad-videos-increase-conversions-businesses",
  "/blog/how-consistent-social-media-posting-builds-brand-trust",
  "/blog/how-create-viral-tiktok-content-business",
  "/blog/how-facebook-campaigns-help-businesses-grow-sri-lanka",
  "/blog/how-fashion-brands-grow-digital-marketing-sri-lanka",
  "/blog/how-google-ads-helps-businesses-high-intent-customers",
  "/blog/how-much-does-video-production-cost-sri-lanka",
  "/blog/how-salons-spas-attract-clients-online-sri-lanka",
  "/blog/how-strong-visual-branding-improves-marketing-performance",
  "/blog/how-to-build-brand-identity-sri-lankan-business",
  "/blog/how-to-choose-digital-agency-sri-lanka",
  "/blog/how-to-choose-digital-marketing-agency-sri-lanka",
  "/blog/how-to-follow-up-facebook-leads",
  "/blog/how-to-get-digital-marketing-job-sri-lanka",
  "/blog/how-to-qualify-leads",
  "/blog/how-to-rank-on-google-sri-lanka-practical-guide",
  "/blog/how-to-run-instagram-ads-sri-lanka",
  "/blog/how-to-run-social-media-campaign-sri-lanka",
  "/blog/how-to-set-up-google-ads-sri-lanka",
  "/blog/importance-professional-graphic-design-modern-brands",
  "/blog/influencer-marketing-guide-sri-lankan-brands",
  "/blog/instagram-marketing-sri-lanka",
  "/blog/instagram-marketing-strategy-sri-lankan-businesses",
  "/blog/landing-page-design-tips-convert-sri-lanka",
  "/blog/lead-generation-strategies-sri-lanka-2026",
  "/blog/lead-generation-vs-lead-qualification-vs-lead-follow-up",
  "/blog/linkedin-b2b-clients-sri-lanka",
  "/blog/linkedin-marketing-sri-lanka-2026",
  "/blog/linkedin-vs-tiktok-marketing-sri-lanka",
  "/blog/local-seo-strategies-sri-lankan-businesses",
  "/blog/make-business-look-professional-online-sri-lanka",
  "/blog/manage-business-facebook-page-sri-lanka",
  "/blog/marketing-internship-sri-lanka-guide",
  "/blog/meta-ads-jobs-sri-lanka",
  "/blog/meta-ads-payment-sri-lanka",
  "/blog/motion-graphics-vs-video-production-sri-lanka",
  "/blog/newspaper-advertising-rates-sri-lanka",
  "/blog/on-page-seo-guide-better-rankings",
  "/blog/online-advertising-sri-lanka-platform-guide",
  "/blog/organic-social-media-vs-paid-ads-sri-lanka",
  "/blog/outsource-social-media-management-sri-lanka",
  "/blog/packaging-design-sri-lanka-increase-sales",
  "/blog/ppc-advertising-explained-sri-lankan-businesses",
  "/blog/product-launch-event-ideas-sri-lanka",
  "/blog/questions-to-ask-digital-agency-sri-lanka",
  "/blog/rank-website-google-sri-lanka",
  "/blog/real-estate-digital-marketing-sri-lanka-lead-generation",
  "/blog/remarketing-retargeting-ads-sri-lanka",
  "/blog/seo-jobs-sri-lanka",
  "/blog/seo-packages-sri-lanka",
  "/blog/should-business-be-on-tiktok-sri-lanka",
  "/blog/show-up-google-search-sri-lanka",
  "/blog/signs-you-need-social-media-agency-sri-lanka",
  "/blog/sinhala-social-media-content-sri-lankan-brands",
  "/blog/sinhala-vs-english-social-media-sri-lanka",
  "/blog/social-media-agency-colombo",
  "/blog/social-media-campaign-ideas-sri-lanka",
  "/blog/social-media-design-best-practices-better-engagement",
  "/blog/social-media-management-cost-sri-lanka",
  "/blog/social-media-management-small-business-sri-lanka",
  "/blog/social-media-marketing-agency-sri-lanka",
  "/blog/social-media-marketing-packages",
  "/blog/social-media-marketing-packages-sri-lanka",
  "/blog/social-media-marketing-sri-lanka-guide-2025",
  "/blog/social-media-marketing-trends-sri-lanka-2026",
  "/blog/social-media-packages-sri-lanka",
  "/blog/social-media-reels-sri-lanka",
  "/blog/social-media-statistics-sri-lanka-2026",
  "/blog/social-media-strategy-hotels-tourism-sri-lanka",
  "/blog/social-media-video-content-strategy-sri-lanka",
  "/blog/sri-lanka-tv-channels-advertising-guide",
  "/blog/student-lead-generation-sri-lanka",
  "/blog/technical-seo-checklist-better-website-performance",
  "/blog/tiktok-ad-strategy-sri-lanka",
  "/blog/tiktok-ads-vs-facebook-ads-sri-lankan-businesses",
  "/blog/tiktok-influencer-marketing-guide-sri-lankan-brands",
  "/blog/tiktok-marketing-hotels-tourism-sri-lanka",
  "/blog/tiktok-marketing-jobs-sri-lanka",
  "/blog/tiktok-marketing-sri-lanka-2025",
  "/blog/top-rated-social-media-management-companies-sri-lanka",
  "/blog/traditional-vs-digital-advertising-sri-lanka",
  "/blog/tv-advertising-companies-sri-lanka",
  "/blog/tv-advertising-rates-sri-lanka",
  "/blog/tv-vs-digital-advertising-sri-lanka",
  "/blog/types-business-videos-increase-engagement-sales",
  "/blog/ui-ux-design-best-practices-sri-lankan-websites",
  "/blog/ultimate-guide-advertising-sri-lanka",
  "/blog/video-ads-facebook-google-sri-lanka",
  "/blog/video-editor-jobs-sri-lanka",
  "/blog/video-marketing-strategy-guide-sri-lankan-businesses",
  "/blog/video-production-cost-sri-lanka",
  "/blog/web-design-price-sri-lanka",
  "/blog/web-design-sri-lanka",
  "/blog/what-does-a-social-media-marketing-agency-do",
  "/blog/what-does-digital-agency-do-sri-lanka",
  "/blog/what-is-lead-follow-up",
  "/blog/what-is-media-buying-sri-lanka",
  "/blog/what-is-programmatic-advertising-sri-lanka",
  "/blog/what-is-social-media-marketing",
  "/blog/what-video-to-promote-business-sri-lanka",
  "/blog/whatsapp-marketing-sri-lankan-businesses",
  "/blog/why-digital-advertising-replacing-traditional-sri-lanka",
  "/blog/why-industry-specific-digital-marketing-important-businesses-sri-lanka",
  "/blog/why-marketing-leads-are-not-converting",
  "/blog/why-seo-important-long-term-business-growth",
  "/blog/why-social-media-management-important-businesses-sri-lanka",
  "/blog/why-strong-logo-foundation-brand",
  "/blog/why-tiktok-marketing-essential-sri-lankan-businesses",
  "/blog/why-video-production-essential-business-growth-sri-lanka",
  "/blog/why-work-at-digital-marketing-agency-sri-lanka",
  "/blog/youtube-ads-sri-lanka-complete-guide",
  "/blog/youtube-seo-sri-lanka",
  "/brand-identity-design-sri-lanka",
  "/brochure-design-sri-lanka",
  "/call-center-outsourcing-sri-lanka",
  "/careers",
  "/careers/:slug",
  "/company-profile-design-sri-lanka",
  "/contact",
  "/corporate-event-management-sri-lanka",
  "/corporate-photography-colombo",
  "/digital-marketing-consultant-sri-lanka",
  "/digital-marketing-faq-sri-lanka",
  "/digital-marketing-services-sri-lanka",
  "/ecommerce-digital-marketing-sri-lanka",
  "/ecommerce-website-sri-lanka",
  "/education-marketing-agency-sri-lanka",
  "/email-design-sri-lanka",
  "/email-marketing-sri-lanka",
  "/event-management-sri-lanka",
  "/event-marketing-sri-lanka",
  "/event-planning-sri-lanka",
  "/facebook-ad-design-sri-lanka",
  "/facebook-ads-cost-sri-lanka",
  "/facebook-ads-sri-lanka",
  "/facebook-page-management-sri-lanka",
  "/facebook-retargeting-sri-lanka",
  "/fashion-brand-digital-marketing-sri-lanka",
  "/finance-digital-marketing-sri-lanka",
  "/flyer-design-sri-lanka",
  "/google-ads-audit-sri-lanka",
  "/google-ads-cost-sri-lanka",
  "/google-ads-specialist-sri-lanka",
  "/google-ads-sri-lanka",
  "/google-remarketing-sri-lanka",
  "/google-shopping-ads-sri-lanka",
  "/graphic-design-sri-lanka",
  "/healthcare-digital-marketing-sri-lanka",
  "/home-services-construction-digital-marketing-sri-lanka",
  "/hotel-digital-marketing-sri-lanka",
  "/influencer-marketing-sri-lanka",
  "/infographic-design-sri-lanka",
  "/instagram-ads-sri-lanka",
  "/instagram-marketing-sri-lanka",
  "/instagram-post-design-sri-lanka",
  "/label-design-sri-lanka",
  "/landing-page-design-sri-lanka",
  "/lead-follow-up-services-sri-lanka",
  "/lead-generation-campaigns-sri-lanka",
  "/linkedin-marketing-sri-lanka",
  "/logo-design-sri-lanka",
  "/media-buying-agencies-sri-lanka",
  "/motion-graphics-sri-lanka",
  "/newspaper-advertising-sri-lanka",
  "/our-work",
  "/outdoor-advertising-sri-lanka",
  "/packaging-design-sri-lanka",
  "/photoshoot-sri-lanka",
  "/poster-design-sri-lanka",
  "/presentation-design-sri-lanka",
  "/product-launch-events-sri-lanka",
  "/product-photography-sri-lanka",
  "/programmatic-advertising-sri-lanka",
  "/radio-advertising-sri-lanka",
  "/real-estate-digital-marketing-sri-lanka",
  "/reel-creation-sri-lanka",
  "/restaurant-digital-marketing-sri-lanka",
  "/seo-services-sri-lanka",
  "/small-business-digital-marketing-sri-lanka",
  "/social-media-ads-support-sri-lanka",
  "/social-media-advertising-sri-lanka",
  "/social-media-audit-sri-lanka",
  "/social-media-boosting-service-sri-lanka",
  "/social-media-campaigns-sri-lanka",
  "/social-media-consultant-sri-lanka",
  "/social-media-content-creation-sri-lanka",
  "/social-media-cost-calculator",
  "/social-media-design-sri-lanka",
  "/social-media-lead-generation-sri-lanka",
  "/social-media-management-sri-lanka",
  "/social-media-marketing-colombo",
  "/social-media-marketing-packages-sri-lanka",
  "/social-media-marketing-small-business-sri-lanka",
  "/social-media-strategy-sri-lanka",
  "/tiktok-ads-sri-lanka",
  "/tiktok-marketing-sri-lanka",
  "/travel-agency-digital-marketing-sri-lanka",
  "/tv-advertising-sri-lanka",
  "/ui-ux-design-sri-lanka",
  "/video-ad-design-sri-lanka",
  "/video-production-sri-lanka",
  "/web-design-sri-lanka",
  "/web-development-sri-lanka",
  "/website-ui-design-sri-lanka",
  "/wedding-planning-sri-lanka",
  "/whatsapp-marketing-sri-lanka",
  "/youtube-ads-sri-lanka"
];
export const buildPackOmissions = [
  {
    "page": "/advertising-agency-sri-lanka",
    "detail": "[Add 4–6 real client logos with permission.]"
  },
  {
    "page": "/advertising-agency-sri-lanka",
    "detail": "Do you book TV, radio and newspaper media directly? — We plan and book media across Sri Lankan TV channels, radio stations, newspapers and outdoor sites for you. [Note: edit to match how you book media.]"
  },
  {
    "page": "/digital-marketing-consultant-sri-lanka",
    "detail": "**Team coaching**\nWorkshops for your in-house marketing team on content, ads and reporting. [Note: remove if you don't offer this.]"
  },
  {
    "page": "/digital-marketing-consultant-sri-lanka",
    "detail": "- A follow-up review call [Note: adjust to your offer]"
  },
  {
    "page": "/digital-marketing-consultant-sri-lanka",
    "detail": "How long does a consultation take? — Usually [X days] from the discovery call to the final plan, depending on how many channels we review."
  },
  {
    "page": "/photoshoot-sri-lanka",
    "detail": "Optional drone footage omitted pending confirmation"
  },
  {
    "page": "/photoshoot-sri-lanka",
    "detail": "- Drone shots for hotels, real estate and events [Note: remove if you don't offer drone]"
  },
  {
    "page": "/photoshoot-sri-lanka",
    "detail": "5. **Delivery.** High-resolution files plus ready-to-post versions in [X working days]."
  },
  {
    "page": "/photoshoot-sri-lanka",
    "detail": "[Gallery: 9–12 real shoot images and 3 reels, grouped by industry, linking to [our work](/our-work)]"
  },
  {
    "page": "/photoshoot-sri-lanka",
    "detail": "Who owns the photos and videos? — [State your usage-rights policy.]"
  },
  {
    "page": "/corporate-photography-colombo",
    "detail": "We set up a mobile studio in a meeting room in [30–45 minutes]. Staff come in by scheduled time slot, get photographed and go back to work. We cover Colombo and the suburbs, and travel island-wide for larger shoots."
  },
  {
    "page": "/corporate-photography-colombo",
    "detail": "[Add 4–6 real client logos with permission.]"
  },
  {
    "page": "/corporate-photography-colombo",
    "detail": "5. **Delivery.** High-resolution files plus web and LinkedIn sizes in [X working days]."
  },
  {
    "page": "/corporate-photography-colombo",
    "detail": "[Gallery: 6–9 real images (headshots, team, product, event), linking to [our work](/our-work)]"
  },
  {
    "page": "/corporate-photography-colombo",
    "detail": "How many headshots can you shoot in a day? — Usually [40–80] people, depending on outfit changes and poses."
  },
  {
    "page": "/corporate-photography-colombo",
    "detail": "How long does delivery take? — [X working days] for most shoots, with rush delivery for events."
  },
  {
    "page": "/corporate-photography-colombo",
    "detail": "Who owns the photos? — [State your usage-rights policy.]"
  },
  {
    "page": "/web-development-sri-lanka",
    "detail": "**CMS websites**\nSites you can update yourself, built on [the CMS you use, e.g. WordPress or a headless CMS]."
  },
  {
    "page": "/web-development-sri-lanka",
    "detail": "**Web apps and booking systems**\nBooking, quotation, membership and enquiry systems tailored to how your business works. [Note: keep only what you build.]"
  },
  {
    "page": "/web-development-sri-lanka",
    "detail": "**Speed, security and maintenance**\nPerformance tuning, SSL, backups and updates after launch. [Note: edit to match your maintenance offer.]"
  },
  {
    "page": "/web-development-sri-lanka",
    "detail": "- **You own your site,** with domain, hosting and code in your name [Note: confirm]"
  },
  {
    "page": "/web-development-sri-lanka",
    "detail": "[Gallery: 3–6 real website screenshots with one-line results, linking to [our work](/our-work)]"
  },
  {
    "page": "/web-development-sri-lanka",
    "detail": "How long does a website take to build? — Usually [X–Y weeks], depending on the number of pages and features."
  },
  {
    "page": "/ecommerce-website-sri-lanka",
    "detail": "**Store design and build**\nMobile-first product, category, cart and checkout pages designed to convert, built on [platform you use, e.g. Shopify, WooCommerce or custom]."
  },
  {
    "page": "/ecommerce-website-sri-lanka",
    "detail": "**Local payments**\nCard payments and local gateways [e.g. PayHere – list the ones you integrate], plus cash on delivery and bank transfer options."
  },
  {
    "page": "/ecommerce-website-sri-lanka",
    "detail": "- **Starter store.** Up to [X] products, essential pages and local payments."
  },
  {
    "page": "/ecommerce-website-sri-lanka",
    "detail": "[Gallery: 3–4 real store screenshots with one-line results, linking to [our work](/our-work)]"
  },
  {
    "page": "/ecommerce-website-sri-lanka",
    "detail": "How long does an ecommerce website take? — Usually [X–Y weeks], depending on the number of products and features."
  },
  {
    "page": "/outdoor-advertising-sri-lanka",
    "detail": "**Transit advertising**\nBus, three-wheeler and vehicle branding that moves through your target areas. [Note: keep only the formats you book.]"
  },
  {
    "page": "/outdoor-advertising-sri-lanka",
    "detail": "How long does it take to get a billboard up? — Usually [X–Y days] after booking and artwork approval, depending on site availability."
  },
  {
    "page": "/email-marketing-sri-lanka",
    "detail": "**Platform setup**\nSetup and management on [platforms you use, e.g. Mailchimp, Brevo or Klaviyo], with your website and store connected."
  }
];

export const buildPackCanonical = (page: BuildPackPage) => `https://cypherdigital.lk${page.path}`;
export function buildPackSchema(page: BuildPackPage) {
 const plain = (text: string) => text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");
 return { "@context": "https://schema.org", "@graph": [
 { "@type": "Service", name: page.service, provider: { "@type": "Organization", name: "Cypher Digital", url: "https://cypherdigital.lk" }, areaServed: { "@type": "Country", name: "Sri Lanka" }, url: buildPackCanonical(page), description: page.description },
 { "@type": "FAQPage", mainEntity: page.faqs.map(faq => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: plain(faq.answer) } })) },
 { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://cypherdigital.lk/" }, { "@type": "ListItem", position: 2, name: "Services", item: "https://cypherdigital.lk/#services" }, { "@type": "ListItem", position: 3, name: page.breadcrumb, item: buildPackCanonical(page) }] },
 ] };
}
