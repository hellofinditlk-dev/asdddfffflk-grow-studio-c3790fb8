const META_MAP: Record<string, { title: string; description: string; h1: string }> = {
  "/": {
    title: "Digital Marketing Agency in Sri Lanka | Cypher Digital",
    description: "#1 digital marketing agency in Sri Lanka & best social media agency Sri Lanka. Trusted digital marketing companies in Sri Lanka. Get free call today!",
    h1: "Digital Marketing Agency in Sri Lanka",
  },
  "/about": {
    title: "About Cypher Digital | Digital Marketing Agency in Sri Lanka",
    description: "Learn about Cypher Digital — a results-driven digital marketing agency in Colombo, Sri Lanka. 200+ brands, 15K+ leads, 340% average ROI. Meet the team behind the growth.",
    h1: "The Digital Marketing Agency Helping Sri Lankan Brands Win Online",
  },
  "/social-media-management-sri-lanka": {
    title: "Social Media Marketing Sri Lanka | Social Media Management",
    description: "#1 Social media management Sri Lanka & social media marketing Sri Lanka. Best social media marketing packages, trusted social media marketing company. Free call.",
    h1: "Social Media Marketing Sri Lanka – Grow Your Business with Expert Social Media Management",
  },
  "/facebook-ads-sri-lanka": {
    title: "Facebook Ads Sri Lanka (2026) | Facebook Marketing Sri Lanka | Cypher Digital",
    description: "Professional Facebook marketing services in Sri Lanka. Lead generation, retargeting & conversion campaigns. Data-driven Facebook Ads from LKR 25,000/month. Get results with Cypher Digital.",
    h1: "Facebook Marketing Sri Lanka – High-Performance Facebook Ads That Drive Results",
  },
  "/google-ads-sri-lanka": {
    title: "Google Ads Sri Lanka (2026) | PPC Advertising & Google Marketing | Cypher Digital",
    description: "Professional Google Ads management in Sri Lanka. Search Ads, Display Ads, YouTube Ads & Shopping Ads with 5x average ROAS. Data-driven PPC campaigns from LKR 50,000/month. Free account audit.",
    h1: "Google Ads Sri Lanka – High-Performance PPC Advertising That Drives Results",
  },
  "/video-production-sri-lanka": {
    title: "Video Production Sri Lanka (2026) | Social Media Videos from LKR 15,000 | Cypher Digital",
    description: "Professional video production in Sri Lanka. Social media videos, Instagram Reels, ad creatives, brand stories & product demos from LKR 15,000. 48hr turnaround. Digital-first video by Cypher Digital.",
    h1: "Video Production Sri Lanka – Digital-First Video Content That Drives Results",
  },
  "/seo-services-sri-lanka": {
    title: "SEO Sri Lanka (2026) | SEO Services Sri Lanka | On-Page & Off-Page SEO from LKR 25,000 | Cypher Digital",
    description: "Professional SEO services in Sri Lanka. On-page optimization, technical SEO, link building, content marketing & local SEO from LKR 25,000/month. Rank #1 on Google with Cypher Digital.",
    h1: "SEO Sri Lanka – Rank #1 on Google with Data-Driven SEO Services",
  },
  "/graphic-design-sri-lanka": {
    title: "Graphic Design Sri Lanka | Creative Design Services | Cypher Digital",
    description: "Professional graphic design services in Sri Lanka including logo design, social media creatives, print design & branding. Work with Cypher Digital.",
    h1: "Graphic Design Sri Lanka – Professional Design Services That Build Powerful Brands",
  },
  "/logo-design-sri-lanka": {
    title: "Logo Design Sri Lanka | Custom Logo Designers",
    description: "Creative logo design services in Sri Lanka to build strong brand identity.",
    h1: "Logo Design Sri Lanka – Custom Logo Design Services for Strong Brand Identity",
  },
  "/brand-identity-design-sri-lanka": {
    title: "Brand Identity Design Sri Lanka | Branding Experts",
    description: "Complete brand identity design services including logos, colors & brand systems.",
    h1: "Brand Identity Design Sri Lanka – Build a Powerful, Consistent Brand",
  },
  "/company-profile-design-sri-lanka": {
    title: "Company Profile Design Sri Lanka | Business Profiles",
    description: "Professional company profile designs for corporate branding and presentations.",
    h1: "Company Profile Design Sri Lanka – Professional Business Profiles That Impress",
  },
  "/social-media-design-sri-lanka": {
    title: "Social Media Design Sri Lanka | Creative Post Designs",
    description: "High-quality social media post and ad designs for Facebook, Instagram & more.",
    h1: "Social Media Design Sri Lanka – Scroll-Stopping Designs for Every Platform",
  },
  "/facebook-ad-design-sri-lanka": {
    title: "Facebook Ad Design Sri Lanka | High-Converting Ads",
    description: "Engaging Facebook ad creatives designed to increase clicks and conversions.",
    h1: "Facebook Ad Design Sri Lanka – High-Converting Ad Creatives That Drive Results",
  },
  "/instagram-post-design-sri-lanka": {
    title: "Instagram Post Design Sri Lanka | Creative Visuals",
    description: "Eye-catching Instagram posts and story designs to boost engagement.",
    h1: "Instagram Post Design Sri Lanka – Creative Visuals That Boost Engagement",
  },
  "/banner-design-sri-lanka": {
    title: "Banner Design Sri Lanka | Display & Web Banners",
    description: "Professional banner ad designs for websites, Google ads & campaigns.",
    h1: "Banner Design Sri Lanka – Professional Display & Web Banner Design Services",
  },
  "/email-design-sri-lanka": {
    title: "Email Newsletter Design Sri Lanka | EDM Design",
    description: "Creative email template and newsletter designs for marketing campaigns.",
    h1: "Email Newsletter Design Sri Lanka – Professional EDM & Email Template Design",
  },
  "/landing-page-design-sri-lanka": {
    title: "Landing Page Design Sri Lanka | Conversion Focused",
    description: "High-converting landing page design services to generate leads and sales.",
    h1: "Landing Page Design Sri Lanka – Conversion-Focused Designs That Generate Leads",
  },
  "/ui-ux-design-sri-lanka": {
    title: "UI UX Design Sri Lanka | Website & App Design",
    description: "User-friendly UI/UX design for websites, apps and digital platforms.",
    h1: "UI/UX Design Sri Lanka – User-Centered Design for Websites & Apps",
  },
  "/website-ui-design-sri-lanka": {
    title: "Website UI Design Sri Lanka | Modern Web Design",
    description: "Modern website UI designs that improve user experience and conversions.",
    h1: "Website UI Design Sri Lanka – Modern, Conversion-Focused Web Design",
  },
  "/flyer-design-sri-lanka": {
    title: "Flyer Design Sri Lanka | Brochure & Poster Design",
    description: "Professional flyer, brochure and poster design services in Sri Lanka.",
    h1: "Flyer Design Sri Lanka – Professional Flyer & Leaflet Design Services",
  },
  "/brochure-design-sri-lanka": {
    title: "Brochure Design Sri Lanka | Corporate Print Design",
    description: "Creative brochure designs for marketing, corporate and product promotions.",
    h1: "Brochure Design Sri Lanka – Professional Corporate & Marketing Brochure Design",
  },
  "/poster-design-sri-lanka": {
    title: "Poster Design Sri Lanka | Creative Advertising Posters",
    description: "Eye-catching poster designs for events, promotions and advertising.",
    h1: "Poster Design Sri Lanka – Creative Advertising & Event Poster Design",
  },
  "/packaging-design-sri-lanka": {
    title: "Packaging Design Sri Lanka | Product Packaging Experts",
    description: "Professional product packaging and label design services in Sri Lanka.",
    h1: "Packaging Design Sri Lanka – Professional Product Packaging & Label Design",
  },
  "/motion-graphics-sri-lanka": {
    title: "Motion Graphics Sri Lanka | Animated Video Design",
    description: "Creative motion graphics, animated ads and explainer videos.",
    h1: "Motion Graphics Sri Lanka – Animated Video & Motion Design Services",
  },
  "/video-ad-design-sri-lanka": {
    title: "Video Ad Design Sri Lanka | Creative Video Ads",
    description: "High-impact video ad creatives for social media and campaigns.",
    h1: "Video Ad Design Sri Lanka – High-Impact Video Ad Creatives",
  },
  "/presentation-design-sri-lanka": {
    title: "Presentation Design Sri Lanka | PowerPoint Experts",
    description: "Professional PowerPoint and pitch deck design services.",
    h1: "Presentation Design Sri Lanka – Professional PowerPoint & Pitch Deck Design",
  },
  "/infographic-design-sri-lanka": {
    title: "Infographic Design Sri Lanka | Visual Data Design",
    description: "Creative infographic designs to present data visually and clearly.",
    h1: "Infographic Design Sri Lanka – Visual Data & Information Design Services",
  },
  "/label-design-sri-lanka": {
    title: "Label Design Sri Lanka | Product Label Designers",
    description: "Professional product label design services in Sri Lanka for food, beverages, cosmetics & retail products.",
    h1: "Label Design Sri Lanka – Professional Product Label Design Services",
  },
  "/event-management-sri-lanka": {
    title: "Event Management Sri Lanka",
    description: "Looking for the best event management companies in Sri Lanka? Cypher Digital is a top-rated event management Sri Lanka company offering corporate events, product launches, brand activations & wedding planning. Free consultation — call 070 177 2626.",
    h1: "Event Management Sri Lanka",
  },
  "/corporate-event-management-sri-lanka": {
    title: "Corporate Event Management Sri Lanka | Conferences & Business Events | Cypher Digital",
    description: "Professional corporate event management in Sri Lanka. Conferences, seminars, product launches, exhibitions & team-building events. Get a free consultation today.",
    h1: "Corporate Event Management Sri Lanka",
  },
  "/wedding-planning-sri-lanka": {
    title: "Wedding Planning Sri Lanka | Professional Wedding Planners | Cypher Digital",
    description: "Expert wedding planning services in Sri Lanka. Full coordination, venue selection, decoration & vendor management. Create your dream wedding.",
    h1: "Wedding Planning Sri Lanka",
  },
  "/event-marketing-sri-lanka": {
    title: "Event Marketing Sri Lanka | Digital Promotion for Events | Cypher Digital",
    description: "Event marketing services in Sri Lanka. Social media promotion, digital advertising, content creation & lead generation for events. Maximize your event ROI.",
    h1: "Event Marketing Sri Lanka",
  },
  "/product-launch-events-sri-lanka": {
    title: "Product Launch Events Sri Lanka | Launch Event Planners | Cypher Digital",
    description: "Professional product launch event management in Sri Lanka. Planning, execution, media coordination & marketing. Make your product launch unforgettable.",
    h1: "Product Launch Events Sri Lanka",
  },
  "/tiktok-marketing-sri-lanka": {
    title: "TikTok Marketing Sri Lanka (2026) | TikTok Ads & Viral Campaigns | Cypher Digital",
    description: "Professional TikTok marketing services in Sri Lanka. Viral content creation, TikTok Ads management, influencer marketing & trend optimization. Cost-effective campaigns from LKR 30,000/month.",
    h1: "TikTok Marketing Sri Lanka – Grow Your Brand with Viral, Cost-Effective Campaigns",
  },
  "/influencer-marketing-sri-lanka": {
    title: "Influencer Marketing Sri Lanka (2026) | Influencer Agency Sri Lanka | Cypher Digital",
    description: "Professional influencer marketing services in Sri Lanka. Instagram, TikTok, YouTube & Facebook influencer campaigns. Data-driven influencer selection & end-to-end campaign management by Cypher Digital.",
    h1: "Influencer Marketing Sri Lanka – Drive Real Engagement with Trusted Influencers",
  },
  "/advertising-in-sri-lanka": {
    title: "Advertising Sri Lanka (2026) | Advertising in Sri Lanka Guide",
    description: "Advertising Sri Lanka guide covering Sri Lanka advertising, digital marketing, branding, SEO, social media marketing and online advertising services in Sri Lanka.",
    h1: "Advertising in Sri Lanka: The Complete Guide to Digital Advertising for Businesses",
  },
  "/tv-advertising-sri-lanka": {
    title: "TV Advertising Sri Lanka (2026) | TV Commercial Rates & Channels | Cypher Digital",
    description: "Complete guide to TV advertising in Sri Lanka. Compare rates for Hiru TV, Sirasa, Derana, ITN & Rupavahini. Production costs, prime-time slots & media buying support.",
    h1: "TV Advertising in Sri Lanka: Rates, Channels & Campaign Strategy Guide",
  },
  "/radio-advertising-sri-lanka": {
    title: "Radio Advertising Sri Lanka (2026) | FM Radio Rates & Stations | Cypher Digital",
    description: "Radio advertising in Sri Lanka with rates for Sirasa FM, Hiru FM, Y FM, Neth FM & TNL. Drive-time slots, jingle production and island-wide radio media buying.",
    h1: "Radio Advertising in Sri Lanka: FM Station Rates, Slots & Strategy",
  },
  "/newspaper-advertising-sri-lanka": {
    title: "Newspaper Advertising Sri Lanka (2026) | Print Ad Rates | Cypher Digital",
    description: "Newspaper advertising rates in Sri Lanka for Sunday Times, Daily Mirror, Lankadeepa, Divaina, Thinakaran & more. Classified, display & full-page ad planning.",
    h1: "Newspaper Advertising in Sri Lanka: Rates, Publications & Booking Guide",
  },
  "/media-buying-agencies-sri-lanka": {
    title: "Media Buying Agencies Sri Lanka (2026) | Best Media Buying Agency | Cypher Digital",
    description: "Top media buying agency in Sri Lanka. We negotiate TV, radio, newspaper, outdoor & digital ad placements at the best rates with full campaign reporting.",
    h1: "Media Buying Agencies in Sri Lanka: How to Choose & What to Expect",
  },
  "/contact": {
    title: "Contact Cypher Digital | Get a Free Consultation",
    description: "Contact Cypher Digital for a free digital marketing consultation. Call +94 70 177 2626 or visit us in Colombo, Sri Lanka. We're ready to grow your business.",
    h1: "Contact Us",
  },
  "/blog": {
    title: "Blog | Digital Marketing Insights Sri Lanka",
    description: "Expert digital marketing tips, strategies, and insights for businesses in Sri Lanka. Learn about social media, SEO, Google Ads, and more.",
    h1: "Digital Marketing Insights",
  },
  // Industry pages
  "/hotel-digital-marketing-sri-lanka": {
    title: "Hotel Digital Marketing Sri Lanka | Increase Direct Bookings | Cypher Digital",
    description: "Expert hotel digital marketing in Sri Lanka. SEO, social media, Google Ads & conversion optimization to increase direct bookings and reduce OTA dependency.",
    h1: "Hotel Digital Marketing in Sri Lanka: The Ultimate Strategy to Increase Direct Bookings",
  },
  "/travel-agency-digital-marketing-sri-lanka": {
    title: "Travel Agency Digital Marketing Sri Lanka | Get More Tour Bookings | Cypher Digital",
    description: "Expert travel agency digital marketing in Sri Lanka. SEO, social media, Google Ads & CRO strategies to increase tour bookings and reach international travelers.",
    h1: "Travel Agency Digital Marketing in Sri Lanka – The Ultimate Guide to Getting More Tour Bookings",
  },
  "/fashion-brand-digital-marketing-sri-lanka": {
    title: "Fashion Brand Digital Marketing Sri Lanka | Clothing Brand Marketing Agency",
    description: "Grow your clothing brand online with social media marketing, influencer campaigns, SEO, and Facebook ads in Sri Lanka. Fashion advertising agency.",
    h1: "Digital Marketing for Fashion & Clothing Brands in Sri Lanka",
  },
  "/restaurant-digital-marketing-sri-lanka": {
    title: "Restaurant Marketing Agency Sri Lanka | Social Media Marketing for Restaurants",
    description: "Increase restaurant customers with social media marketing, food photography, local SEO, and targeted advertising campaigns in Sri Lanka.",
    h1: "Digital Marketing for Restaurants in Sri Lanka",
  },
  "/real-estate-digital-marketing-sri-lanka": {
    title: "Real Estate Digital Marketing Sri Lanka | Property Marketing Agency",
    description: "Generate property buyers and investor leads with real estate digital marketing, SEO, video marketing, and paid advertising campaigns in Sri Lanka.",
    h1: "Digital Marketing for Real Estate Companies in Sri Lanka",
  },
  "/education-marketing-agency-sri-lanka": {
    title: "Education Marketing Agency Sri Lanka | Student Lead Generation",
    description: "Get more student enrollments with digital marketing for institutes, universities, and tuition classes in Sri Lanka. SEO, social media, and paid ads.",
    h1: "Digital Marketing for Education Institutes in Sri Lanka",
  },
  "/beauty-salon-digital-marketing-sri-lanka": {
    title: "Beauty Salon Digital Marketing Sri Lanka | Salon Marketing Agency",
    description: "Grow your beauty salon with social media marketing, Instagram growth strategies, local SEO, and targeted ads in Sri Lanka. Spa marketing agency.",
    h1: "Digital Marketing for Beauty Salons in Sri Lanka",
  },
  "/automotive-digital-marketing-sri-lanka": {
    title: "Automotive Digital Marketing Sri Lanka | Car Dealer Marketing Agency",
    description: "Generate car buyer leads with automotive digital marketing, video showcases, SEO, and targeted ads in Sri Lanka. Vehicle advertising agency.",
    h1: "Digital Marketing for Automotive Businesses in Sri Lanka",
  },
  "/small-business-digital-marketing-sri-lanka": {
    title: "Digital Marketing for Small Businesses in Sri Lanka | SME Marketing Agency",
    description: "Affordable digital marketing solutions for small businesses in Sri Lanka. Social media, SEO, ads, branding and lead generation for SMEs.",
    h1: "Digital Marketing for Small Businesses in Sri Lanka",
  },
  "/ecommerce-digital-marketing-sri-lanka": {
    title: "Ecommerce Digital Marketing Sri Lanka | Online Store Marketing Agency",
    description: "Increase online sales with ecommerce marketing strategies including SEO, Facebook ads, Google Shopping, product videos, and retargeting campaigns in Sri Lanka.",
    h1: "Ecommerce Digital Marketing Services in Sri Lanka",
  },
  // Blog posts
  "/blog/why-social-media-management-important-businesses-sri-lanka": {
    title: "Why Social Media Management is Important for Businesses in Sri Lanka",
    description: "Learn why a structured social media strategy is essential for Sri Lankan businesses to grow reach, engagement, and conversions.",
    h1: "Why Social Media Management is Important for Businesses in Sri Lanka",
  },
  "/blog/how-strong-visual-branding-improves-marketing-performance": {
    title: "How Strong Visual Branding Improves Marketing Performance",
    description: "Learn how consistent visual branding improves marketing performance, brand recognition, and conversions for Sri Lankan businesses.",
    h1: "How Strong Visual Branding Improves Marketing Performance",
  },
  "/blog/google-search-ads-vs-display-ads-difference": {
    title: "Google Search Ads vs Display Ads — Understanding the Difference",
    description: "Understand the difference between Google Search Ads and Display Ads, and how to use both for maximum ROI in Sri Lanka.",
    h1: "Google Search Ads vs Display Ads — Understanding the Difference",
  },
  "/blog/local-seo-strategies-sri-lankan-businesses": {
    title: "Local SEO Strategies for Sri Lankan Businesses",
    description: "Learn effective local SEO strategies for Sri Lankan businesses — Google Business Profile, local keywords, citations, and reviews.",
    h1: "Local SEO Strategies for Sri Lankan Businesses",
  },
  "/blog/how-facebook-campaigns-help-businesses-grow-sri-lanka": {
    title: "How Facebook Campaigns Help Businesses Grow in Sri Lanka",
    description: "Learn how structured Facebook campaigns help Sri Lankan businesses reach targeted audiences, generate leads, and drive scalable growth.",
    h1: "How Facebook Campaigns Help Businesses Grow in Sri Lanka",
  },
  "/blog/facebook-campaign-strategy-guide-sri-lankan-brands": {
    title: "Facebook Campaign Strategy Guide for Sri Lankan Brands",
    description: "A strategic guide to Facebook campaign funnels — awareness, consideration, conversion, and retargeting for Sri Lankan brands.",
    h1: "Facebook Campaign Strategy Guide for Sri Lankan Brands",
  },
  "/blog/how-ad-videos-increase-conversions-businesses": {
    title: "How Ad Videos Increase Conversions for Businesses",
    description: "Discover how ad videos drive conversions for Sri Lankan businesses — hooks, storytelling, platform optimization, and measurable results.",
    h1: "How Ad Videos Increase Conversions for Businesses",
  },
  "/blog/social-media-design-best-practices-better-engagement": {
    title: "Social Media Design Best Practices for Better Engagement",
    description: "Learn social media design best practices — visual hierarchy, consistency, platform adaptation, and how professional design improves engagement.",
    h1: "Social Media Design Best Practices for Better Engagement",
  },
  "/blog/google-ads-vs-facebook-ads-which-better-business": {
    title: "Google Ads vs Facebook Ads — Which is Better for Your Business?",
    description: "Compare Google Ads and Facebook Ads — understand intent vs discovery, when to use each, and how to combine both for maximum results.",
    h1: "Google Ads vs Facebook Ads — Which is Better for Your Business?",
  },
  "/blog/how-to-rank-on-google-sri-lanka-practical-guide": {
    title: "How to Rank on Google in Sri Lanka — Practical Guide",
    description: "A practical guide to ranking on Google in Sri Lanka — keyword research, on-page SEO, technical optimization, and authority building.",
    h1: "How to Rank on Google in Sri Lanka — Practical Guide",
  },
  "/blog/benefits-corporate-video-production-brands": {
    title: "Benefits of Corporate Video Production for Brands",
    description: "Discover how corporate videos strengthen brand credibility, communicate values, and support marketing for Sri Lankan businesses.",
    h1: "Benefits of Corporate Video Production for Brands",
  },
  "/blog/how-consistent-social-media-posting-builds-brand-trust": {
    title: "How Consistent Social Media Posting Builds Brand Trust",
    description: "Learn how consistent social media posting builds brand trust, improves reach, and drives growth for businesses in Sri Lanka.",
    h1: "How Consistent Social Media Posting Builds Brand Trust",
  },
  "/blog/flyer-design-tips-improve-marketing-results": {
    title: "Flyer Design Tips That Improve Marketing Results",
    description: "Learn flyer design tips — clarity, visual hierarchy, branding consistency, and how professional design improves marketing results.",
    h1: "Flyer Design Tips That Improve Marketing Results",
  },
  "/blog/ppc-advertising-explained-sri-lankan-businesses": {
    title: "PPC Advertising Explained for Sri Lankan Businesses",
    description: "Understand PPC advertising — how Google Ads works, keyword selection, ad optimization, and generating leads for Sri Lankan businesses.",
    h1: "PPC Advertising Explained for Sri Lankan Businesses",
  },
  "/blog/technical-seo-checklist-better-website-performance": {
    title: "Technical SEO Checklist for Better Website Performance",
    description: "A technical SEO checklist — site speed, mobile responsiveness, crawlability, sitemaps, and fixing common issues for better rankings.",
    h1: "Technical SEO Checklist for Better Website Performance",
  },
  "/blog/video-marketing-strategy-guide-sri-lankan-businesses": {
    title: "Video Marketing Strategy Guide for Sri Lankan Businesses",
    description: "Build an effective video marketing strategy — goals, formats, consistency, and distribution for Sri Lankan businesses.",
    h1: "Video Marketing Strategy Guide for Sri Lankan Businesses",
  },
  "/blog/graphic-design-mistakes-damage-brand": {
    title: "Graphic Design Mistakes That Can Damage Your Brand",
    description: "Avoid common graphic design mistakes — inconsistency, clutter, low quality, and poor mobile optimization that damage brand perception.",
    h1: "Graphic Design Mistakes That Can Damage Your Brand",
  },
  "/blog/google-ads-optimization-tips-improve-campaign-performance": {
    title: "Google Ads Optimization Tips to Improve Campaign Performance",
    description: "Google Ads optimization tips — keyword refinement, ad copy testing, landing pages, and performance analysis for better ROI.",
    h1: "Google Ads Optimization Tips to Improve Campaign Performance",
  },
  "/blog/on-page-seo-guide-better-rankings": {
    title: "On-Page SEO Guide for Better Rankings",
    description: "On-page SEO guide — titles, meta descriptions, headings, internal linking, content structure, and keyword intent for better rankings.",
    h1: "On-Page SEO Guide for Better Rankings",
  },
  "/blog/why-industry-specific-digital-marketing-important-businesses-sri-lanka": {
    title: "Why Industry-Specific Digital Marketing Is Important for Businesses in Sri Lanka",
    description: "Learn why industry-specific digital marketing strategies are essential for Sri Lankan businesses — hotels, travel, fashion, restaurants, real estate, education, and more.",
    h1: "Why Industry-Specific Digital Marketing Is Important for Businesses in Sri Lanka",
  },
  "/blog/why-tiktok-marketing-essential-sri-lankan-businesses": {
    title: "Why TikTok Marketing is Essential for Sri Lankan Businesses in 2026",
    description: "Discover why TikTok has become the most powerful marketing platform for businesses in Sri Lanka — massive reach, low costs, and viral potential.",
    h1: "Why TikTok Marketing is Essential for Sri Lankan Businesses in 2026",
  },
  "/blog/how-create-viral-tiktok-content-business": {
    title: "How to Create Viral TikTok Content for Your Business",
    description: "Learn the proven strategies for creating TikTok videos that go viral — hooks, storytelling, trends, and optimization tips for Sri Lankan brands.",
    h1: "How to Create Viral TikTok Content for Your Business",
  },
  "/blog/facebook-instagram-management-guide-sri-lankan-brands": {
    title: "Facebook & Instagram Management Guide for Sri Lankan Brands",
    description: "A complete guide to managing Facebook and Instagram for Sri Lankan brands — content strategy, visual branding, engagement, and analytics.",
    h1: "Facebook & Instagram Management Guide for Sri Lankan Brands",
  },
  "/blog/tiktok-ads-vs-facebook-ads-sri-lankan-businesses": {
    title: "TikTok Ads vs Facebook Ads — Which is Better for Sri Lankan Businesses?",
    description: "Compare TikTok Ads and Facebook Ads for Sri Lankan businesses — cost, reach, engagement, targeting, and which platform delivers better ROI.",
    h1: "TikTok Ads vs Facebook Ads — Which is Better for Sri Lankan Businesses?",
  },
  "/blog/tiktok-influencer-marketing-guide-sri-lankan-brands": {
    title: "TikTok Influencer Marketing Guide for Sri Lankan Brands",
    description: "Learn how to leverage TikTok influencer marketing in Sri Lanka — finding creators, collaboration strategies, and measuring ROI for your brand.",
    h1: "TikTok Influencer Marketing Guide for Sri Lankan Brands",
  },
  "/blog/tiktok-marketing-hotels-tourism-sri-lanka": {
    title: "TikTok Marketing for Hotels and Tourism Businesses in Sri Lanka",
    description: "Learn how hotels and tourism businesses in Sri Lanka can use TikTok marketing to attract guests, showcase experiences, and drive bookings.",
    h1: "TikTok Marketing for Hotels and Tourism Businesses in Sri Lanka",
  },
  "/blog/ultimate-guide-advertising-sri-lanka": {
    title: "The Ultimate Guide to Advertising in Sri Lanka (2026)",
    description: "Explore the complete evolution, types, and strategies for advertising in Sri Lanka — from traditional media to high-ROI digital platforms.",
    h1: "The Ultimate Guide to Advertising in Sri Lanka (2026)",
  },
  "/blog/why-digital-advertising-replacing-traditional-sri-lanka": {
    title: "Why Digital Advertising is Replacing Traditional Advertising in Sri Lanka",
    description: "Discover why Sri Lankan businesses are shifting from traditional advertising to digital — cost comparison, targeting, ROI, and the platforms driving growth.",
    h1: "Why Digital Advertising is Replacing Traditional Advertising in Sri Lanka",
  },
  "/blog/cost-effective-advertising-strategies-sri-lankan-businesses": {
    title: "Cost-Effective Advertising Strategies for Sri Lankan Businesses",
    description: "Discover the most cost-effective advertising strategies for Sri Lankan businesses — social media, Google Ads, SEO, content marketing, and email marketing.",
    h1: "Cost-Effective Advertising Strategies for Sri Lankan Businesses",
  },
  "/blog/complete-guide-facebook-ads-businesses-sri-lanka": {
    title: "Complete Guide to Facebook Ads for Businesses in Sri Lanka",
    description: "Learn how Facebook Ads can generate leads and drive sales for Sri Lankan businesses with advanced targeting, creative strategy, and campaign optimization.",
    h1: "Complete Guide to Facebook Ads for Businesses in Sri Lanka",
  },
  "/blog/why-video-production-essential-business-growth-sri-lanka": {
    title: "Why Video Production is Essential for Business Growth in Sri Lanka",
    description: "Discover how professional video production helps Sri Lankan businesses capture attention, improve branding, and increase conversions.",
    h1: "Why Video Production is Essential for Business Growth in Sri Lanka",
  },
  "/blog/importance-professional-graphic-design-modern-brands": {
    title: "Importance of Professional Graphic Design for Modern Brands",
    description: "Learn why professional graphic design is critical for brand identity, marketing performance, and credibility for Sri Lankan businesses.",
    h1: "Importance of Professional Graphic Design for Modern Brands",
  },
  "/blog/how-google-ads-helps-businesses-high-intent-customers": {
    title: "How Google Ads Helps Businesses Get High Intent Customers",
    description: "Learn how Google Ads targets high-intent customers through search, display, and YouTube ads to drive conversions for Sri Lankan businesses.",
    h1: "How Google Ads Helps Businesses Get High Intent Customers",
  },
  "/blog/why-seo-important-long-term-business-growth": {
    title: "Why SEO is Important for Long-Term Business Growth",
    description: "Learn why SEO is essential for sustainable organic growth, visibility, and lead generation for businesses in Sri Lanka.",
    h1: "Why SEO is Important for Long-Term Business Growth",
  },
  "/blog/types-business-videos-increase-engagement-sales": {
    title: "Types of Business Videos That Increase Engagement and Sales",
    description: "Explore the types of business videos that boost engagement and sales in Sri Lanka — promotional, explainer, testimonial, and social media reels.",
    h1: "Types of Business Videos That Increase Engagement and Sales",
  },
  "/blog/digital-marketing-cost-sri-lanka-pricing-guide": {
    title: "Digital Marketing Cost in Sri Lanka 2026 — Full Pricing Guide",
    description: "Wondering how much digital marketing costs in Sri Lanka? Get a full breakdown of Facebook Ads, Google Ads, SEO, social media management, and design prices for 2026.",
    h1: "How Much Does Digital Marketing Cost in Sri Lanka? (2026 Pricing Guide)",
  },
  "/blog/best-digital-marketing-agency-sri-lanka": {
    title: "Best Digital Marketing Agency in Sri Lanka 2026 — How to Choose",
    description: "Looking for the best digital marketing agency in Sri Lanka? Here's exactly what to look for, what questions to ask, and why Cypher Digital is a top choice for Sri Lankan businesses.",
    h1: "Best Digital Marketing Agency in Sri Lanka — How to Choose (2026)",
  },
  "/blog/instagram-marketing-strategy-sri-lankan-businesses": {
    title: "Instagram Marketing Sri Lanka 2026 — Complete Strategy Guide for Businesses",
    description: "Learn how to grow your business on Instagram in Sri Lanka. A complete guide covering content strategy, reels, ads, hashtags, and how to generate leads from Instagram in 2026.",
    h1: "Instagram Marketing Strategy for Sri Lankan Businesses (2026)",
  },
  "/blog/whatsapp-marketing-sri-lankan-businesses": {
    title: "WhatsApp Marketing Sri Lanka 2026 — Complete Business Guide",
    description: "WhatsApp is Sri Lanka's most-used messaging app. Learn how to use WhatsApp Business, broadcast lists, status marketing, and automation to grow your business in 2026.",
    h1: "WhatsApp Marketing for Sri Lankan Businesses — How to Use It Effectively (2026)",
  },
  "/blog/google-my-business-optimization-guide-sri-lanka": {
    title: "Google My Business Sri Lanka 2026 — Complete Optimization Guide",
    description: "Learn how to set up and fully optimize your Google Business Profile in Sri Lanka to rank higher on Google Maps, get more calls, and attract local customers in 2026.",
    h1: "Google My Business Optimization Guide for Sri Lankan Businesses (2026)",
  },
  "/blog/digital-marketing-small-businesses-sri-lanka-starter-guide": {
    title: "Digital Marketing for Small Businesses Sri Lanka 2026 — Complete Starter Guide",
    description: "A complete digital marketing starter guide for small businesses in Sri Lanka. Learn which channels to start with, how much to budget, and how to get your first leads online in 2026.",
    h1: "Digital Marketing for Small Businesses in Sri Lanka — Complete Starter Guide (2026)",
  },
  "/blog/content-marketing-blog-strategy-sri-lanka": {
    title: "Content Marketing Sri Lanka 2026 — Why Your Business Needs a Blog Strategy",
    description: "Learn how content marketing and a business blog strategy can help Sri Lankan businesses rank on Google, build authority, and generate consistent leads in 2026.",
    h1: "Content Marketing Sri Lanka — Why Your Business Needs a Blog Strategy (2026)",
  },
  "/blog/youtube-ads-sri-lanka-complete-guide": {
    title: "YouTube Ads Sri Lanka 2026 — Complete Guide to Video Advertising",
    description: "Learn how YouTube Ads work in Sri Lanka, how much they cost, which ad formats work best, and how to run profitable YouTube video advertising campaigns in 2026.",
    h1: "YouTube Ads Sri Lanka — Complete Guide to Video Advertising on Google (2026)",
  },
  "/blog/digital-marketing-restaurants-sri-lanka": {
    title: "Digital Marketing for Restaurants in Sri Lanka 2026 — What Actually Works",
    description: "A practical guide to digital marketing for restaurants in Sri Lanka. Learn which platforms, content types, and ad strategies actually bring in diners and delivery orders.",
    h1: "Digital Marketing for Restaurants in Sri Lanka — What Actually Works (2026)",
  },
  "/blog/digital-marketing-schools-tuition-classes-sri-lanka": {
    title: "Digital Marketing for Schools and Tuition Classes Sri Lanka 2026 — Complete Guide",
    description: "Learn how schools, tuition centres, and education institutes in Sri Lanka can use digital marketing to attract more students, increase enrolments, and build brand trust in 2026.",
    h1: "Digital Marketing for Schools and Tuition Classes in Sri Lanka (2026)",
  },
  "/blog/real-estate-digital-marketing-sri-lanka-lead-generation": {
    title: "Real Estate Digital Marketing Sri Lanka 2026 — Lead Generation Strategies",
    description: "Learn how real estate agents and property developers in Sri Lanka can use Facebook Ads, Google Ads, SEO, and social media to generate consistent property leads in 2026.",
    h1: "Real Estate Digital Marketing Sri Lanka — Lead Generation Strategies (2026)",
  },
  "/blog/how-to-run-instagram-ads-sri-lanka": {
    title: "How to Run Instagram Ads in Sri Lanka 2026 — Step-by-Step Guide",
    description: "A complete step-by-step guide to running Instagram Ads in Sri Lanka. Learn how to set up campaigns, target the right audience, create effective ads, and generate leads in 2026.",
    h1: "How to Run Instagram Ads in Sri Lanka — Step-by-Step Guide (2026)",
  },
  "/blog/influencer-marketing-guide-sri-lankan-brands": {
    title: "Influencer Marketing Sri Lanka 2026 — How to Find and Work with Creators",
    description: "Learn how to run influencer marketing campaigns in Sri Lanka. How to find the right creators, what to pay, how to brief them, and how to measure results in 2026.",
    h1: "Influencer Marketing in Sri Lanka — How to Find and Work with Creators (2026)",
  },
  "/blog/how-to-build-brand-identity-sri-lankan-business": {
    title: "How to Build a Brand Identity for Your Sri Lankan Business — Complete Guide 2026",
    description: "Learn how to build a strong brand identity for your Sri Lankan business. Covers logo design, colour strategy, typography, brand voice, and visual consistency across all platforms.",
    h1: "How to Build a Brand Identity for Your Sri Lankan Business (2026)",
  },
  "/blog/event-marketing-sri-lanka-promote-event-online": {
    title: "Event Marketing Sri Lanka 2026 — How to Promote Your Event Online",
    description: "Learn how to promote events in Sri Lanka using Facebook Ads, Instagram, TikTok, Google Ads, and influencer marketing. A complete digital event marketing strategy for 2026.",
    h1: "Event Marketing Sri Lanka — How to Promote Your Event Online (2026)",
  },
  "/blog/remarketing-retargeting-ads-sri-lanka": {
    title: "Remarketing Ads Sri Lanka 2026 — How to Retarget Customers Effectively",
    description: "Learn how remarketing and retargeting ads work in Sri Lanka. A complete guide to Facebook retargeting, Google remarketing, and how to convert warm leads into customers.",
    h1: "Remarketing Ads Sri Lanka — How to Retarget Customers Effectively (2026)",
  },
  "/blog/social-media-strategy-hotels-tourism-sri-lanka": {
    title: "Hotel and Tourism Social Media Marketing Sri Lanka 2026 — Complete Strategy",
    description: "A complete social media and digital marketing strategy for hotels, resorts, and tourism businesses in Sri Lanka. Covers Instagram, TikTok, Facebook Ads, influencers, and SEO.",
    h1: "Hotel and Tourism Social Media Marketing Sri Lanka — Complete Strategy (2026)",
  },
  "/blog/digital-marketing-roi-measure-results-sri-lanka": {
    title: "Digital Marketing ROI Sri Lanka 2026 — How to Measure Your Marketing Results",
    description: "Learn how to measure digital marketing ROI for your Sri Lankan business. Track Facebook Ads, Google Ads, SEO, and social media performance with the right metrics in 2026.",
    h1: "Digital Marketing ROI Sri Lanka — How to Measure Your Marketing Results (2026)",
  },
  "/blog/sinhala-social-media-content-sri-lankan-brands": {
    title: "Sinhala Social Media Content Sri Lanka 2026 — Should Your Brand Post in Sinhala?",
    description: "Should your Sri Lankan business post in Sinhala on Facebook and Instagram? We break down the data, audience differences, and best language strategy for Sri Lankan brands in 2026.",
    h1: "Sinhala Social Media Content — Should Your Brand Post in Sinhala? (2026)",
  },
  "/blog/organic-social-media-vs-paid-ads-sri-lanka": {
    title: "Organic Social Media vs Paid Ads Sri Lanka 2026 — Which Is Better for Your Business?",
    description: "Should your Sri Lankan business focus on organic social media or paid advertising? We break down the pros, cons, costs, and best strategy for businesses in 2026.",
    h1: "Organic Social Media vs Paid Ads — Which Is Better for Your Business? (2026)",
  },
  "/blog/ui-ux-design-best-practices-sri-lankan-websites": {
    title: "UI/UX Design Best Practices for Sri Lankan Business Websites 2026",
    description: "Learn the UI/UX design best practices that help Sri Lankan business websites convert visitors into leads. Covers layout, mobile design, speed, and user experience principles.",
    h1: "UI/UX Design Best Practices for Sri Lankan Business Websites (2026)",
  },
  "/blog/packaging-design-sri-lanka-increase-sales": {
    title: "Packaging Design Sri Lanka 2026 — How Good Design Increases Your Sales",
    description: "Learn how professional packaging design helps Sri Lankan product businesses stand out on shelves, build brand trust, and increase sales. Covers design principles, costs, and process.",
    h1: "Packaging Design Sri Lanka — How Good Design Increases Your Sales (2026)",
  },
  "/blog/motion-graphics-vs-video-production-sri-lanka": {
    title: "Motion Graphics vs Video Production Sri Lanka 2026 — Which Does Your Brand Need?",
    description: "Understanding the difference between motion graphics and video production for Sri Lankan businesses. When to use each, what they cost, and how to choose the right format for your campaign.",
    h1: "Motion Graphics vs Video Production — Which Does Your Brand Need? (2026)",
  },
  "/blog/landing-page-design-tips-convert-sri-lanka": {
    title: "Landing Page Design Tips That Convert — Sri Lanka Business Guide 2026",
    description: "Learn how to design high-converting landing pages for Sri Lankan businesses. Best practices for layout, CTA, trust signals, mobile design, and form optimisation in 2026.",
    h1: "Landing Page Design Tips That Convert — Sri Lanka Business Guide (2026)",
  },
  "/blog/company-profile-design-sri-lanka": {
    title: "Company Profile Design Sri Lanka 2026 — How to Create an Effective Business Profile",
    description: "Learn how to create a professional company profile for your Sri Lankan business. Covers structure, design, content, and how a strong profile wins clients and builds credibility.",
    h1: "Company Profile Design Sri Lanka — How to Create an Effective Business Profile (2026)",
  },
  "/blog/ecommerce-digital-marketing-sri-lanka": {
    title: "Ecommerce Digital Marketing Sri Lanka 2026 — Drive Sales with Paid Ads and SEO",
    description: "A complete digital marketing guide for ecommerce businesses in Sri Lanka. Learn how to drive online sales using Facebook Ads, Google Shopping, SEO, and email marketing in 2026.",
    h1: "Ecommerce Digital Marketing Sri Lanka — Drive Sales with Paid Ads and SEO (2026)",
  },
  "/blog/corporate-event-management-sri-lanka-choose-agency": {
    title: "Corporate Event Management Sri Lanka 2026 — How to Choose the Right Agency",
    description: "Learn what to look for when choosing a corporate event management agency in Sri Lanka. Covers venue selection, event marketing, AV, catering coordination, and what questions to ask.",
    h1: "Corporate Event Management Sri Lanka — How to Choose the Right Agency (2026)",
  },
  "/blog/best-digital-marketing-agencies-sri-lanka": {
    title: "Best Digital Marketing Agencies in Sri Lanka 2026 | Complete Guide",
    description: "Discover the best digital marketing agencies in Sri Lanka for 2026. Compare top digital agencies, services, pricing, and find the right partner to grow your business.",
    h1: "Best Digital Marketing Agencies in Sri Lanka (2026) — Complete Guide",
  },
  "/blog/how-to-choose-digital-marketing-agency-sri-lanka": {
    title: "How to Choose a Digital Marketing Agency in Sri Lanka 2026",
    description: "Not sure how to choose the right digital marketing agency in Sri Lanka? This complete guide covers what to look for, red flags to avoid, and the right questions to ask.",
    h1: "How to Choose a Digital Marketing Agency in Sri Lanka (2026)",
  },
  "/blog/digital-marketing-cost-sri-lanka-pricing": {
    title: "Digital Marketing Costs in Sri Lanka 2026 — Complete Pricing Guide",
    description: "How much does digital marketing cost in Sri Lanka? This complete 2026 pricing guide covers social media, Facebook Ads, Google Ads, SEO, and full-service agency packages.",
    h1: "Digital Marketing Costs in Sri Lanka — Complete Pricing Guide (2026)",
  },
  "/blog/what-does-digital-agency-do-sri-lanka": {
    title: "What Does a Digital Agency Actually Do? Sri Lanka Guide 2026",
    description: "What does a digital agency actually do for your business? This complete guide explains every service, how digital agencies work, and what to expect when you hire one in Sri Lanka.",
    h1: "What Does a Digital Agency Actually Do? — Sri Lanka Guide (2026)",
  },
  "/blog/digital-marketing-small-businesses-sri-lanka": {
    title: "Digital Marketing for Small Businesses in Sri Lanka 2026 — Complete Guide",
    description: "A complete beginner's guide to digital marketing for small businesses in Sri Lanka. Learn which channels to start with, how much to spend, and how to get real results fast.",
    h1: "Digital Marketing for Small Businesses in Sri Lanka — Complete Beginner's Guide (2026)",
  },
  "/blog/digital-marketing-agency-colombo": {
    title: "Digital Marketing Agency in Colombo — the Complete 2026 Guide",
    description: "How to choose a digital marketing agency in Colombo — services, pricing, evaluation criteria, and what to expect from a top Sri Lankan agency in 2026.",
    h1: "Digital marketing agency in Colombo — the complete 2026 guide",
  },
  "/blog/lead-generation-strategies-sri-lanka-2026": {
    title: "Lead Generation in Sri Lanka — 10 Proven Strategies for 2026",
    description: "The 10 most effective lead generation strategies for Sri Lankan businesses in 2026 — Facebook Ads, Google Ads, WhatsApp funnels, SEO, retargeting and more.",
    h1: "Lead generation in Sri Lanka — 10 proven strategies for 2026",
  },
  "/blog/social-media-agency-colombo": {
    title: "Social Media Agency in Colombo — What to Look For & How to Choose (2026)",
    description: "What a good social media agency in Colombo offers, the red flags to avoid, realistic pricing, and the questions to ask before signing a contract.",
    h1: "Social media agency in Colombo — what to look for and how to choose (2026)",
  },
  "/blog/email-marketing-sri-lanka-guide-2026": {
    title: "Email Marketing in Sri Lanka — the Beginner's Guide for Businesses (2026)",
    description: "A complete beginner's guide to email marketing in Sri Lanka — list building, the best tools, writing tips, compliance, and measurement.",
    h1: "Email marketing in Sri Lanka — the beginner's guide for businesses (2026)",
  },
  "/blog/ai-tools-digital-marketing-sri-lanka-2026": {
    title: "AI Tools for Digital Marketing in Sri Lanka — What Actually Works in 2026",
    description: "The AI tools genuinely useful for Sri Lankan digital marketers in 2026 — ChatGPT, Meta Advantage+, Performance Max, Canva AI, chatbots, Semrush and more.",
    h1: "AI tools for digital marketing in Sri Lanka — what actually works in 2026",
  },
  "/blog/freelancer-vs-digital-marketing-agency-sri-lanka": {
    title: "Freelancer vs Digital Marketing Agency in Sri Lanka — Which Should You Hire?",
    description: "An honest comparison of hiring a freelancer vs a digital marketing agency in Sri Lanka — costs, capabilities, reliability, and when each is the right choice.",
    h1: "Freelancer vs digital marketing agency in Sri Lanka — which should you hire?",
  },
  "/blog/linkedin-marketing-sri-lanka-2026": {
    title: "LinkedIn Marketing for Sri Lankan Businesses — the 2026 Guide",
    description: "How Sri Lankan businesses can use LinkedIn marketing in 2026 to generate B2B leads, build industry authority, and reach international corporate clients.",
    h1: "LinkedIn marketing for Sri Lankan businesses — the 2026 guide",
  },
  "/blog/digital-marketing-healthcare-sri-lanka": {
    title: "Digital Marketing for Healthcare Businesses in Sri Lanka (2026)",
    description: "The most effective digital marketing strategies for healthcare businesses in Sri Lanka — Google My Business, educational content, Facebook, Google Ads & WhatsApp.",
    h1: "Digital marketing for healthcare businesses in Sri Lanka (2026)",
  },
  "/blog/avurudu-marketing-ideas-sri-lanka": {
    title: "Avurudu Marketing Ideas for Sri Lankan Businesses — Seasonal Campaigns That Work",
    description: "10 proven Avurudu marketing ideas and a practical campaign framework that Sri Lankan businesses can apply for the Sinhala & Tamil New Year season.",
    h1: "Avurudu marketing ideas for Sri Lankan businesses — seasonal campaigns that work",
  },
  "/blog/digital-marketing-results-case-studies-sri-lanka": {
    title: "How Digital Marketing Grew 5 Sri Lankan Businesses — Real Results & Case Studies",
    description: "Five real Sri Lankan digital marketing case studies — restaurant, real estate, fashion, healthcare and B2B — with strategies, results, and key lessons.",
    h1: "How digital marketing grew 5 Sri Lankan businesses — real results and case studies",
  },
};

const escapeAttr = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

const SMM_FAQS: { q: string; a: string }[] = [
  { q: "What is social media marketing?", a: "Social media marketing involves promoting businesses through platforms like Facebook, Instagram, TikTok, and LinkedIn to increase brand awareness, generate leads, and drive sales." },
  { q: "Why is social media marketing important in Sri Lanka?", a: "Because millions of Sri Lankans are active daily on social media platforms. It's the most cost-effective way for businesses to reach, engage, and convert their target audience." },
  { q: "Which social media platform is best for my business?", a: "It depends on your business type. B2C brands typically do best on Instagram and Facebook, while B2B companies benefit from LinkedIn. TikTok is ideal for reaching younger audiences with viral content." },
  { q: "How many posts do you create per month?", a: "Our standard packages include 12–20 posts per month depending on the plan. This includes a mix of graphics, carousels, stories, and reels to keep your audience engaged." },
  { q: "Do you handle customer messages and comments?", a: "Yes! Inbox and comment management is included. We respond to customer queries professionally and escalate important messages to you immediately." },
  { q: "Which platforms do you manage?", a: "We primarily manage Facebook and Instagram pages. We can also manage LinkedIn, TikTok, and Google Business Profile as add-on services." },
  { q: "Can I approve posts before they go live?", a: "Absolutely. We share a monthly content calendar for your approval before publishing. You'll always have final say on what gets posted." },
  { q: "Do you create video content too?", a: "Yes, our packages include Reels and Story content. For more advanced video production like promotional videos, check our Video Production service." },
  { q: "How long does it take to see results?", a: "Organic social media growth typically shows meaningful results within 2–3 months. Paid social media advertising delivers immediate traffic and conversions from day one." },
  { q: "Is social media management affordable for small businesses?", a: "Yes! Our packages are specifically designed for Sri Lankan small businesses and startups. Starting from LKR 60,000/month." },
  { q: "What does a Social Media Management Sri Lanka package include?", a: "Our Social Media Management Sri Lanka packages include content strategy, monthly content calendars, professional graphic and video creation, post scheduling, hashtag research, community engagement, inbox & comment management, monthly performance reports, and ongoing optimization across Facebook, Instagram, and TikTok." },
  { q: "How much does Social Media Management Sri Lanka cost?", a: "Social Media Management Sri Lanka pricing starts from LKR 60,000/month for our Starter package, LKR 120,000/month for Growth, and LKR 200,000+/month for Pro plans." },
  { q: "Why choose Cypher Digital for Social Media Management Sri Lanka?", a: "Cypher Digital is one of the highest-rated agencies for Social Media Management Sri Lanka — offering no long-term contracts, fast 48-hour content delivery, dedicated account managers, transparent monthly reporting, and proven results across 200+ Sri Lankan SMEs." },
  { q: "Do I need Social Media Management Sri Lanka if I already run Facebook Ads?", a: "Yes. Social Media Management Sri Lanka and Facebook Ads work best together. Pages with active, professional content typically see 30–50% better ad performance." },
  { q: "Can you handle Social Media Management Sri Lanka in Sinhala and Tamil?", a: "Absolutely. Our Social Media Management Sri Lanka team creates fully localized content in Sinhala, Tamil, and English to maximize reach and engagement across all demographics in Sri Lanka." },
];

const SCHEMA_MAP: Record<string, object[]> = {
  "/social-media-management-sri-lanka": [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://cypherdigital.lk/#localbusiness",
      name: "Cypher Digital — Social Media Management Sri Lanka",
      image: "https://cypherdigital.lk/og-image.jpg",
      url: "https://cypherdigital.lk/social-media-management-sri-lanka",
      telephone: "+94701772626",
      priceRange: "LKR 60,000 - LKR 200,000+",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Colombo",
        addressLocality: "Colombo",
        addressRegion: "Western Province",
        postalCode: "00100",
        addressCountry: "LK",
      },
      geo: { "@type": "GeoCoordinates", latitude: 6.9271, longitude: 79.8612 },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      openingHoursSpecification: [{
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        opens: "09:00", closes: "18:00",
      }],
      sameAs: [
        "https://www.facebook.com/cypherdigital.lk",
        "https://www.instagram.com/cypherdigital.lk",
      ],
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "127" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: SMM_FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Social Media Management Sri Lanka",
      provider: {
        "@type": "LocalBusiness",
        name: "Cypher Digital",
        url: "https://cypherdigital.lk",
        telephone: "+94701772626",
        address: { "@type": "PostalAddress", addressLocality: "Colombo", addressCountry: "LK" },
      },
      areaServed: { "@type": "Country", name: "Sri Lanka" },
      serviceType: "Social Media Management",
      description: "Expert Social Media Management Sri Lanka services — Facebook & Instagram page management, content creation, community engagement, and social media marketing for Sri Lankan businesses.",
      url: "https://cypherdigital.lk/social-media-management-sri-lanka",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://cypherdigital.lk" },
        { "@type": "ListItem", position: 2, name: "Social Media Management Sri Lanka", item: "https://cypherdigital.lk/social-media-management-sri-lanka" },
      ],
    },
  ],
};

const escapeJsonLd = (json: string) => json.replaceAll("</", "<\\/");

export default async function handler(request: Request, context: any) {
  try {
  const url = new URL(request.url);
  const path = url.pathname.replace(/\/$/, "") || "/";
  const meta = META_MAP[path];

  if (!meta) {
    return context.next();
  }

  const response = await context.next();
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) {
    return response;
  }

  const safeTitle = escapeAttr(meta.title);
  const safeDescription = escapeAttr(meta.description);
  const canonical = `https://cypherdigital.lk${path}`;

  let modified = (await response.text())
    .replace(/<title>[^<]*<\/title>/, `<title>${safeTitle}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="description" content="${safeDescription}" />`
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:title" content="${safeTitle}" />`
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:description" content="${safeDescription}" />`
    )
    .replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/,
      `<meta property="og:url" content="${canonical}" />`
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:title" content="${safeTitle}" />`
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/?>/,
      `<meta name="twitter:description" content="${safeDescription}" />`
    );

  // Inject H1 into body for crawlers that don't execute JS
  const safeH1 = escapeAttr(meta.h1);
  modified = modified.replace(
    '<div id="root"></div>',
    `<div id="root"><h1>${safeH1}</h1></div>`
  );

  // Canonical tag
  if (modified.match(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/)) {
    modified = modified.replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/,
      `<link rel="canonical" href="${canonical}" />`
    );
  } else {
    modified = modified.replace(
      "</head>",
      `  <link rel="canonical" href="${canonical}" />\n  </head>`
    );
  }

  // Inject JSON-LD structured data for crawlers (server-side, no JS required)
  const schemas = SCHEMA_MAP[path];
  if (schemas && schemas.length) {
    const blocks = schemas
      .map((s) => `<script type="application/ld+json">${escapeJsonLd(JSON.stringify(s))}</script>`)
      .join("\n  ");
    modified = modified.replace("</head>", `  ${blocks}\n  </head>`);
  }

  const headers = new Headers(response.headers);
  headers.delete("content-length");
  headers.delete("etag");

  return new Response(modified, {
    status: response.status,
    headers,
  });
  } catch (error) {
    console.error("inject-meta edge function failed", error);
    return context.next();
  }
}

export const config = { path: "/*" };
