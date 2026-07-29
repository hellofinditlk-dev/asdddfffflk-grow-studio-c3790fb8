const META_MAP: Record<string, { title: string; description: string; h1: string }> = {
  "/": {
    title: "Digital Marketing Agency Sri Lanka | Cypher Digital",
    description: "Sri Lanka's top digital marketing agency. Facebook Ads, Google Ads, SEO & social media in Colombo. 15,000+ leads. Free consultation today.",
    h1: "Digital Marketing Agency in Sri Lanka",
  },
  "/ai-visibility-sri-lanka": {
    title: "AI Visibility Check Sri Lanka | AI Visibility Checker Sri Lanka",
    description: "Get a free AI Visibility Check in Sri Lanka. See how visible your business is on ChatGPT, Gemini, Claude & Perplexity. Get your AI visibility score.",
    h1: "Is Your Business Visible on ChatGPT & Gemini?",
  },
  "/programmatic-advertising-sri-lanka": {
    title: "Programmatic Advertising Sri Lanka | Cypher Digital Private Marketplace",
    description: "Programmatic advertising Sri Lanka — Cypher Digital operates Sri Lanka's only Premium Private Marketplace (PMP) across FindIt.lk, Studyway.lk and YouJobs.lk. Guaranteed brand-safe inventory, zero ad fraud, 100% local reach. Packages from LKR 60,000.",
    h1: "Programmatic Advertising Sri Lanka — Finally Done Right",
  },
  "/blog/creative-agency-sri-lanka": {
    title: "Creative Agency Sri Lanka (2026) | #1 Creative & Design Agency | Cypher Digital",
    description: "Looking for a creative agency in Sri Lanka? Cypher Digital is Colombo's #1 creative agency offering logo design, brand identity, social media design, packaging, motion graphics & more. Free consultation today.",
    h1: "Creative Agency Sri Lanka — The Complete Guide to Hiring the Right Creative Partner",
  },
  "/linkedin-marketing-sri-lanka": {
    title: "LinkedIn Marketing Sri Lanka | B2B LinkedIn Ads & Lead Generation | Cypher Digital",
    description: "LinkedIn marketing Sri Lanka — B2B lead generation, LinkedIn Ads, company page management & executive branding. Reach decision-makers locally & internationally. Free consultation.",
    h1: "LinkedIn Marketing & Advertising in Sri Lanka",
  },
  "/instagram-marketing-sri-lanka": {
    title: "Instagram Marketing Sri Lanka — Instagram Ads & Management 2026 | Cypher Digital",
    description: "Instagram marketing Sri Lanka — Reels, Instagram Ads, community management & creator collaborations. Grow followers, leads & sales from LKR 30,000/month. Free strategy call.",
    h1: "Instagram Marketing & Advertising in Sri Lanka",
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
    description: "Expert Google Ads management in Sri Lanka. Search, Display, YouTube & Shopping Ads with proven 5x ROAS. Data-driven PPC campaigns from LKR 50,000/month. Free audit — results in 24 hrs.",
    h1: "Google Ads Sri Lanka – High-Performance PPC Advertising That Drives Results",
  },
  "/video-production-sri-lanka": {
    title: "Video Production Sri Lanka (2026) | Social Media Videos from LKR 15,000 | Cypher Digital",
    description: "Professional video production in Sri Lanka. Social media videos, Instagram Reels, ad creatives, brand stories & product demos from LKR 15,000. 48hr turnaround. Digital-first video by Cypher Digital.",
    h1: "Video Production Sri Lanka – Digital-First Video Content That Drives Results",
  },
  "/ai-video-production-sri-lanka": {
    title: "AI Video Production Sri Lanka (2026) | AI Avatars, Reels & Ads from LKR 15,000 | Cypher Digital",
    description: "AI-powered video production in Sri Lanka. AI avatars, product videos, Reels, TikToks & ad creatives in Sinhala, Tamil & English from LKR 15,000. 48hr turnaround by Cypher Digital.",
    h1: "AI Video Production Sri Lanka – AI Avatars, Reels & Ads That Convert",
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
  // Careers
  "/careers": {
    title: "Digital Marketing Jobs in Sri Lanka | Careers at Cypher Digital",
    description: "Join Cypher Digital — Sri Lanka's top digital marketing agency. View open vacancies for Graphic Designer, Digital Marketing Specialist, Video Editor and Marketing Intern in Colombo.",
    h1: "Digital Marketing Jobs in Sri Lanka — Join Cypher Digital",
  },
  "/careers/graphic-designer-jobs-sri-lanka": {
    title: "Graphic Designer Jobs in Sri Lanka 2026 | LKR 45K–150K | Cypher Digital",
    description: "Graphic designer jobs in Sri Lanka at Cypher Digital, Colombo. Work on 800+ brand campaigns. Salary LKR 45,000–150,000/month. Full-time & part-time. Apply via WhatsApp in 60 seconds.",
    h1: "Graphic Designer Jobs in Sri Lanka — Hiring Now at Cypher Digital",
  },
  "/careers/digital-marketing-jobs-sri-lanka": {
    title: "Digital Marketing Jobs in Sri Lanka | Cypher Digital Careers",
    description: "Hiring a Digital Marketing Specialist in Colombo. Run Facebook Ads, Google Ads and SEO campaigns for top Sri Lankan brands. Apply via WhatsApp today.",
    h1: "Digital Marketing Specialist Vacancy in Sri Lanka — Cypher Digital",
  },
  "/careers/digital-marketing-executive-jobs-sri-lanka": {
    title: "Digital Marketing Executive Jobs in Sri Lanka 2026 | LKR 45K–120K | Cypher Digital",
    description: "Digital marketing executive jobs in Sri Lanka at Cypher Digital, Colombo. Run Meta Ads, Google Ads & SEO campaigns for 800+ brands. Salary LKR 45K–120K/month. Apply in 60 seconds.",
    h1: "Digital Marketing Executive Jobs in Sri Lanka — Hiring Now at Cypher Digital",
  },
  "/careers/business-development-executive-jobs-sri-lanka": {
    title: "Business Development Executive Jobs in Sri Lanka 2026 | LKR 60K–150K | Cypher Digital",
    description: "Business Development Executive jobs in Sri Lanka at Cypher Digital, Colombo. Sell digital marketing services to SMEs. Salary LKR 60K–150K/month + commissions. Apply via WhatsApp in 60 seconds.",
    h1: "Business Development Executive Jobs in Sri Lanka — Hiring Now at Cypher Digital",
  },
  "/careers/video-editor-jobs-sri-lanka": {
    title: "Video Editor Jobs in Sri Lanka 2026 | LKR 45K–150K | Cypher Digital",
    description: "Video editor jobs in Sri Lanka at Cypher Digital, Colombo. Edit Reels, TikToks, YouTube ads & brand films for 800+ brands. Salary LKR 45K–150K/month. Full-time & freelance. Apply now.",
    h1: "Video Editor Jobs in Sri Lanka — Hiring Now at Cypher Digital",
  },
  "/careers/marketing-internship-sri-lanka": {
    title: "Marketing Internship in Sri Lanka 2026 | Paid LKR 20K–40K | Cypher Digital",
    description: "Paid marketing internship in Sri Lanka 2026. Cypher Digital is hiring digital marketing interns in Colombo — Meta Ads, Google Ads, social & design for 800+ brands. Stipend LKR 20K–40K. Apply via WhatsApp in 60 seconds.",
    h1: "Marketing Internship in Sri Lanka — Hiring Now at Cypher Digital",
  },
  "/careers/internship-programme-sri-lanka": {
    title: "Internship Programme in Sri Lanka 2026 | Cypher Digital",
    description: "The best all-round internship programme in Sri Lanka. Start as an intern at Cypher Digital in Colombo and learn the whole business — operations, sales and marketing — guided all the way to management trainee. No experience needed. Apply via WhatsApp.",
    h1: "Internship Programme in Sri Lanka — Learn the Whole Business, From Intern to Management Trainee",
  },
  "/careers/finance-internship-sri-lanka": {
    title: "Finance Internship in Sri Lanka 2026 | Accounting & Finance Intern Colombo",
    description: "Apply for a paid finance internship in Sri Lanka. Cypher Digital is hiring a finance & accounts intern in Colombo — invoicing, reporting, reconciliations & budgeting. Apply via WhatsApp.",
    h1: "Finance Internship in Sri Lanka — Apply Now at Cypher Digital",
  },
  "/careers/content-specialist-jobs-sri-lanka": {
    title: "Content Specialist Jobs in Sri Lanka 2026 | LKR 60K–130K | Cypher Digital",
    description: "Content Specialist jobs in Sri Lanka at Cypher Digital, Colombo. Write captions, blogs, ad copy & scripts for 800+ brands. Salary LKR 60,000–130,000/month. Apply via WhatsApp in 60 seconds.",
    h1: "Content Specialist Jobs in Sri Lanka — Hiring Now at Cypher Digital",
  },
  "/careers/sales-jobs-in-sri-lanka": {
    title: "Sales Executive Jobs in Sri Lanka 2026 | LKR 60K–150K | Cypher Digital",
    description: "Sales Executive jobs in Sri Lanka 2026 — Cypher Digital is hiring in Colombo. Sell Facebook Ads, Google Ads, SEO & social media. Base LKR 60,000, earn LKR 150,000+/month. Apply via WhatsApp in 60 seconds.",
    h1: "Sales Executive Jobs in Sri Lanka — Hiring Now at Cypher Digital",
  },
  "/blog/tv-advertising-companies-sri-lanka": {
    title: "TV Advertising Companies in Sri Lanka — Top Agencies Compared 2025 | Cypher Digital",
    description: "Looking for TV advertising companies in Sri Lanka? Compare the top agencies for TVC production, media buying and airtime booking on Hiru TV, Sirasa and Derana. Find the right partner for your campaign in 2025.",
    h1: "TV Advertising Companies in Sri Lanka — How to Choose the Right Agency (2025)",
  },
  "/blog/tv-advertising-rates-sri-lanka": {
    title: "TV Advertising Rates in Sri Lanka 2025 — Hiru, Sirasa, Derana & More | Cypher Digital",
    description: "Up-to-date 2025 TV advertising rates in Sri Lanka — Hiru TV, Sirasa, Derana, Swarnavahini, ITN and Shakthi TV. Prime time vs off-peak comparison, negotiation tips and TVC production costs.",
    h1: "TV Advertising Rates in Sri Lanka — Hiru TV, Sirasa, Derana & More (2025)",
  },
  "/blog/advertising-cost-sri-lanka-2026": {
    title: "How Much Does Advertising Cost in Sri Lanka in 2026? | Cypher Digital",
    description: "Full 2026 advertising cost breakdown in Sri Lanka — digital ads, TV, radio, billboard and agency budgets. Plan your marketing spend with Cypher Digital.",
    h1: "How Much Does Advertising Cost in Sri Lanka in 2026?",
  },
  "/blog/tv-vs-digital-advertising-sri-lanka": {
    title: "TV vs Digital Advertising in Sri Lanka — Which Gets More ROI? | Cypher Digital",
    description: "TV vs digital advertising in Sri Lanka compared head-to-head. CPM, ROI, measurability and the hybrid strategy that wins in 2026. Cypher Digital.",
    h1: "TV vs Digital Advertising in Sri Lanka: Which Gets More ROI?",
  },
  "/blog/complete-guide-running-ads-sri-lanka": {
    title: "A Complete Guide to Running Ads in Sri Lanka (All Channels) | Cypher Digital",
    description: "Step-by-step guide to running ads in Sri Lanka across Facebook, Google, TikTok, TV and radio. Budgets, targeting and campaign setup by Cypher Digital.",
    h1: "A Complete Guide to Running Ads in Sri Lanka (All Channels)",
  },
  "/blog/linkedin-vs-tiktok-marketing-sri-lanka": {
    title: "LinkedIn vs TikTok Marketing for Sri Lankan Businesses (2026) | Cypher Digital",
    description: "LinkedIn vs TikTok marketing in Sri Lanka — which platform fits B2B vs B2C, costs, formats and full-funnel strategy. Cypher Digital.",
    h1: "LinkedIn vs TikTok Marketing for Sri Lankan Businesses in 2026",
  },
  "/blog/b2b-leads-linkedin-sri-lanka": {
    title: "How to Get B2B Leads on LinkedIn in Sri Lanka | Cypher Digital",
    description: "Generate B2B leads on LinkedIn in Sri Lanka — profile setup, content, outreach and LinkedIn Ads playbook proven by Cypher Digital.",
    h1: "How to Get B2B Leads on LinkedIn in Sri Lanka",
  },
  "/blog/tiktok-ad-strategy-sri-lanka": {
    title: "TikTok Ad Strategy for Sri Lankan Brands — Step by Step | Cypher Digital",
    description: "A step-by-step TikTok ad strategy for Sri Lankan brands — creative, targeting, bidding and scaling. Built and tested by Cypher Digital.",
    h1: "TikTok Ad Strategy for Sri Lankan Brands: Step-by-Step",
  },
  "/blog/google-ads-vs-facebook-ads-sri-lanka": {
    title: "Google Ads vs Facebook Ads in Sri Lanka — Which Converts Better? | Cypher Digital",
    description: "Google Ads vs Facebook Ads in Sri Lanka — intent, cost per lead, conversion rates and the funnel mix that works best. Cypher Digital.",
    h1: "Google Ads vs Facebook Ads in Sri Lanka: Which Converts Better?",
  },
  "/blog/how-to-set-up-google-ads-sri-lanka": {
    title: "How to Set Up Google Ads for a Sri Lankan Business (2026 Guide) | Cypher Digital",
    description: "Step-by-step 2026 guide to setting up Google Ads in Sri Lanka — account, keywords, ad copy, conversion tracking and optimisation. Cypher Digital.",
    h1: "How to Set Up Google Ads for a Sri Lankan Business (2026 Guide)",
  },
  "/blog/social-media-marketing-trends-sri-lanka-2026": {
    title: "Social Media Marketing Trends in Sri Lanka for 2026 | Cypher Digital",
    description: "The biggest social media marketing trends in Sri Lanka for 2026 — short video, AI content, creators, social commerce and more. Cypher Digital.",
    h1: "Social Media Marketing Trends in Sri Lanka for 2026",
  },
  "/blog/outsource-social-media-management-sri-lanka": {
    title: "Why Sri Lankan SMEs Are Outsourcing Social Media Management | Cypher Digital",
    description: "Why Sri Lankan SMEs are outsourcing social media management in 2026 — cost, expertise, consistency and ROI compared to in-house. Cypher Digital.",
    h1: "Why Sri Lankan SMEs Are Outsourcing Social Media Management",
  },
  "/blog/social-media-packages-sri-lanka": {
    title: "Social Media Packages in Sri Lanka — What to Look For | Cypher Digital",
    description: "What to look for in social media packages in Sri Lanka — content volume, design, ads, reporting and pricing. Compare options with Cypher Digital.",
    h1: "Social Media Packages in Sri Lanka: What to Look For",
  },
  "/blog/case-study-instagram-growth-sri-lanka": {
    title: "Case Study — How We Grew a Sri Lankan Brand's Instagram to 10K | Cypher Digital",
    description: "Real Cypher Digital case study — strategy, content and ads that grew a Sri Lankan brand's Instagram to 10K followers and measurable leads.",
    h1: "Case Study: How Cypher Digital Grew a Sri Lankan Brand's Instagram to",
  },
  "/blog/how-to-choose-digital-agency-sri-lanka": {
    title: "How to Choose a Digital Agency in Sri Lanka (2026 Checklist) | Cypher Digital",
    description: "A practical checklist for choosing a digital agency in Sri Lanka — services, reporting, pricing, case studies and red flags. Cypher Digital.",
    h1: "How to Choose a Digital Agency in Sri Lanka (Checklist)",
  },
  "/blog/what-is-media-buying-sri-lanka": {
    title: "What is Media Buying and How It Works in Sri Lanka | Cypher Digital",
    description: "What media buying is and how it works in Sri Lanka — TV, radio, print, OOH and digital. Rates, negotiation and agency role explained by Cypher Digital.",
    h1: "What is Media Buying and How It Works in Sri Lanka",
  },
  "/blog/questions-to-ask-digital-agency-sri-lanka": {
    title: "Top Questions to Ask Before Hiring a Digital Agency in Sri Lanka | Cypher Digital",
    description: "The most important questions to ask before hiring a digital agency in Sri Lanka — strategy, reporting, pricing and accountability. Cypher Digital.",
    h1: "Top Questions to Ask Before Hiring a Digital Agency in Sri Lanka",
  },
  "/blog/advertising-mistakes-sri-lankan-businesses": {
    title: "Advertising Mistakes Sri Lankan Businesses Make — And How to Avoid Them (2026) | Cypher Digital",
    description: "The 10 most common advertising mistakes Sri Lankan businesses make — and exactly how to fix each one to stop wasting budget.",
    h1: "Advertising Mistakes Sri Lankan Businesses Make — And How to Avoid Them (2026)",
  },
  "/blog/affordable-social-media-marketing-services-sri-lanka": {
    title: "Affordable Social Media Marketing Services in Sri Lanka (2026 Pricing Guide) | Cypher Digital",
    description: "Real pricing for affordable social media marketing services in Sri Lanka — packages, what's included, and how to get professional results from LKR 60,000/month.",
    h1: "Affordable Social Media Marketing Services in Sri Lanka (2026 Pricing Guide)",
  },
  "/blog/best-advertising-agencies-sri-lanka": {
    title: "Best Advertising Agencies in Sri Lanka — How to Choose the Right One (2026) | Cypher Digital",
    description: "Compare top advertising agencies in Sri Lanka by service, pricing, reporting, red flags and questions to ask before hiring.",
    h1: "Best Advertising Agencies in Sri Lanka — How to Choose the Right One (2026)",
  },
  "/blog/best-social-media-agencies-sri-lanka-small-businesses": {
    title: "Best Social Media Agencies in Sri Lanka for Small Businesses (2026 Guide) | Cypher Digital",
    description: "Discover the best social media agencies in Sri Lanka for small businesses — what to look for, pricing, and how Cypher Digital delivers real results.",
    h1: "Best Social Media Agencies in Sri Lanka for Small Businesses (2026 Guide)",
  },
  "/blog/best-social-media-platform-sri-lanka-business": {
    title: "Facebook vs Instagram vs TikTok: Which Platform is Best for Your Sri Lankan Business? | Cypher Digital",
    description: "Compare Facebook, Instagram, and TikTok for Sri Lankan businesses in 2025. Data-backed guide to choosing the right platform for your industry.",
    h1: "Facebook vs Instagram vs TikTok: Which Platform is Best for Your Sri Lankan Business?",
  },
  "/blog/best-time-to-post-social-media-sri-lanka": {
    title: "Best Time to Post on Facebook and Instagram in Sri Lanka (Data-Backed 2025 Guide) | Cypher Digital",
    description: "Data-backed guide to the best times and days to post on Facebook and Instagram in Sri Lanka 2025 — by industry and platform.",
    h1: "Best Time to Post on Facebook and Instagram in Sri Lanka (Data-Backed 2025 Guide)",
  },
  "/blog/colombo-restaurant-social-media-case-study": {
    title: "Case Study: How a Colombo Restaurant Grew Social Media Leads by 300% in 3 Months | Cypher Digital",
    description: "Real case study — how Cypher Digital grew a Colombo restaurant's social media leads by 300% in 3 months through strategic management.",
    h1: "Case Study: How a Colombo Restaurant Grew Social Media Leads by 300% in 3 Months",
  },
  "/blog/digital-marketing-courses-sri-lanka": {
    title: "Digital Marketing Courses in Sri Lanka — Free and Paid Options (2026) | Cypher Digital",
    description: "The best digital marketing courses and certifications in Sri Lanka 2026 — free Meta Blueprint, Google Ads, paid Coursera and Udemy. Ranked by employer value.",
    h1: "Digital Marketing Courses in Sri Lanka — Free and Paid Options (2026)",
  },
  "/blog/digital-marketing-portfolio-sri-lanka": {
    title: "How to Build a Digital Marketing Portfolio in Sri Lanka With No Experience | Cypher Digital",
    description: "A practical guide to building portfolio pieces for paid ads, design, video, and SEO roles — using free tools and no client budget required.",
    h1: "How to Build a Digital Marketing Portfolio in Sri Lanka With No Experience",
  },
  "/blog/digital-marketing-salary-sri-lanka-2026": {
    title: "Digital Marketing Salary in Sri Lanka 2026 — The Complete Guide | Cypher Digital",
    description: "Real digital marketing salaries in Sri Lanka 2026 — by role, experience and city. LKR 25,000 intern to 250,000+ senior. By Cypher Digital.",
    h1: "Digital Marketing Salary in Sri Lanka 2026 — The Complete Guide",
  },
  "/blog/digital-marketing-skills-sri-lanka": {
    title: "Top 10 Digital Marketing Skills Employers in Sri Lanka Look For (2026) | Cypher Digital",
    description: "The top 10 digital marketing skills Sri Lankan agencies hire for in 2026 — Meta Ads, Google Ads, TikTok, SEO, design, video, analytics. Salaries included.",
    h1: "Top 10 Digital Marketing Skills Employers in Sri Lanka Look For (2026)",
  },
  "/blog/get-business-on-chatgpt-sri-lanka": {
    title: "How Do I Get My Business to Show Up on ChatGPT Answers? | Cypher Digital",
    description: "How to get your Sri Lankan business cited by ChatGPT, Gemini and Perplexity — AEO, structured content and AI visibility check. Cypher Digital.",
    h1: "How Do I Get My Business to Show Up on ChatGPT Answers?",
  },
  "/blog/get-more-customers-facebook-ads-sri-lanka": {
    title: "How to Get More Customers Using Facebook Ads in Sri Lanka | Cypher Digital",
    description: "Get more customers with Facebook Ads in Sri Lanka — budgets, campaign types, targeting and how to avoid the boost-post trap. Cypher Digital.",
    h1: "How to Get More Customers Using Facebook Ads in Sri Lanka",
  },
  "/blog/google-ads-jobs-sri-lanka": {
    title: "Google Ads Jobs in Sri Lanka — What You Need to Get Hired in 2026 | Cypher Digital",
    description: "Salary ranges, which certifications matter, Search vs Display vs YouTube, and how to build real Google Ads expertise in Colombo.",
    h1: "Google Ads Jobs in Sri Lanka — What You Need to Get Hired in 2026",
  },
  "/blog/graphic-designer-jobs-sri-lanka-guide": {
    title: "Graphic Designer Jobs in Sri Lanka — What to Expect, What It Pays (2026) | Cypher Digital",
    description: "Salary ranges, required tools, portfolio advice, and how to land your first graphic design role at a digital marketing agency in Sri Lanka.",
    h1: "Graphic Designer Jobs in Sri Lanka — What to Expect, What It Pays (2026)",
  },
  "/blog/grow-business-instagram-sri-lanka": {
    title: "How to Grow Your Business Instagram Following in Sri Lanka | Cypher Digital",
    description: "Grow your business Instagram following in Sri Lanka — Reels, profile setup, content mix and the strategies that drive real results. Cypher Digital.",
    h1: "How to Grow Your Business Instagram Following in Sri Lanka",
  },
  "/blog/how-to-get-digital-marketing-job-sri-lanka": {
    title: "How to Get a Digital Marketing Job in Sri Lanka — 2026 Roadmap | Cypher Digital",
    description: "Step-by-step 2026 roadmap to getting hired for a digital marketing job in Sri Lanka — qualifications, certifications, portfolio building, and where to apply.",
    h1: "How to Get a Digital Marketing Job in Sri Lanka — 2026 Roadmap",
  },
  "/blog/how-to-run-social-media-campaign-sri-lanka": {
    title: "How to Run a Successful Social Media Campaign in Sri Lanka: Step-by-Step Guide | Cypher Digital",
    description: "Step-by-step guide to running successful social media campaigns in Sri Lanka — goals, audience, platform, content, budget, launch, and reporting.",
    h1: "How to Run a Successful Social Media Campaign in Sri Lanka: Step-by-Step Guide",
  },
  "/blog/linkedin-b2b-clients-sri-lanka": {
    title: "How to Use LinkedIn to Get B2B Clients for Your Business in Sri Lanka | Cypher Digital",
    description: "Use LinkedIn to get B2B clients in Sri Lanka — company page, content, outreach and LinkedIn Ads playbook for SMEs. Cypher Digital.",
    h1: "How to Use LinkedIn to Get B2B Clients for Your Business in Sri Lanka",
  },
  "/blog/make-business-look-professional-online-sri-lanka": {
    title: "How to Make My Business Look More Professional Online in Sri Lanka | Cypher Digital",
    description: "Make your business look more professional online in Sri Lanka — logo, profiles, website and content design tips that build trust. Cypher Digital.",
    h1: "How to Make My Business Look More Professional Online in Sri Lanka",
  },
  "/blog/manage-business-facebook-page-sri-lanka": {
    title: "Best Way to Manage Your Business Facebook Page in Sri Lanka | Cypher Digital",
    description: "How to manage your business Facebook page in Sri Lanka — posting schedule, content mix, response time and when to hire help. Cypher Digital.",
    h1: "Best Way to Manage Your Business Facebook Page in Sri Lanka",
  },
  "/blog/marketing-internship-sri-lanka-guide": {
    title: "Marketing Internships in Sri Lanka — The Honest 2026 Guide | Cypher Digital",
    description: "What a good internship actually involves, what you should be paid, questions to ask before saying yes, and how to turn it into a full-time job.",
    h1: "Marketing Internships in Sri Lanka — The Honest 2026 Guide",
  },
  "/blog/meta-ads-jobs-sri-lanka": {
    title: "Meta Ads Jobs in Sri Lanka — What Facebook Advertising Specialists Earn (2026) | Cypher Digital",
    description: "Salary ranges, daily responsibilities, Meta Blueprint advice, and what agencies in Colombo look for when hiring paid social specialists.",
    h1: "Meta Ads Jobs in Sri Lanka — What Facebook Advertising Specialists Earn (2026)",
  },
  "/blog/online-advertising-sri-lanka-platform-guide": {
    title: "Online Advertising in Sri Lanka — Complete Platform Guide for Businesses (2026) | Cypher Digital",
    description: "Every major online advertising platform in Sri Lanka — Facebook, Instagram, Google, YouTube, TikTok, Display and WhatsApp — costs, audiences and best fit.",
    h1: "Online Advertising in Sri Lanka — Complete Platform Guide for Businesses (2026)",
  },
  "/blog/rank-website-google-sri-lanka": {
    title: "How to Rank Your Business Website on Google in Sri Lanka | Cypher Digital",
    description: "How to rank your website on Google in Sri Lanka — on-page, technical, content and link building strategies that actually work. Cypher Digital.",
    h1: "How to Rank Your Business Website on Google in Sri Lanka",
  },
  "/blog/seo-jobs-sri-lanka": {
    title: "SEO Jobs in Sri Lanka — Career Guide for 2026 | Cypher Digital",
    description: "What SEO roles at digital marketing agencies involve, what they pay, which tools you need, and how to build an SEO career in Colombo.",
    h1: "SEO Jobs in Sri Lanka — Career Guide for 2026",
  },
  "/blog/should-business-be-on-tiktok-sri-lanka": {
    title: "Should My Business Be on TikTok in Sri Lanka? | Cypher Digital",
    description: "Should your business be on TikTok in Sri Lanka? Honest guide to who it works for, who it doesn't and how to start. Cypher Digital.",
    h1: "Should My Business Be on TikTok in Sri Lanka?",
  },
  "/blog/show-up-google-search-sri-lanka": {
    title: "How to Get Your Business to Show Up on Google Search in Sri Lanka | Cypher Digital",
    description: "How to show up on Google search in Sri Lanka with Google Ads and SEO — costs, timelines and which to choose first. Cypher Digital.",
    h1: "How to Get Your Business to Show Up on Google Search in Sri Lanka",
  },
  "/blog/signs-you-need-social-media-agency-sri-lanka": {
    title: "10 Signs You Need to Hire a Social Media Management Agency in Sri Lanka | Cypher Digital",
    description: "10 signs it's time to hire a social media management agency in Sri Lanka — what to look for and how to choose the right partner.",
    h1: "10 Signs You Need to Hire a Social Media Management Agency in Sri Lanka",
  },
  "/blog/sinhala-vs-english-social-media-sri-lanka": {
    title: "Sinhala vs English: Which Language Should You Use for Social Media in Sri Lanka? | Cypher Digital",
    description: "Sinhala vs English vs Tamil — choosing the right language strategy for social media in Sri Lanka, with bilingual tactics for maximum reach.",
    h1: "Sinhala vs English: Which Language Should You Use for Social Media in Sri Lanka?",
  },
  "/blog/social-media-campaign-ideas-sri-lanka": {
    title: "10 Social Media Campaign Ideas That Actually Work for Sri Lankan Businesses in 2025 | Cypher Digital",
    description: "10 proven social media campaign ideas for Sri Lankan businesses — from Avurudu campaigns to flash sales, BTS series, cricket tie-ins, and influencer collaborations.",
    h1: "10 Social Media Campaign Ideas That Actually Work for Sri Lankan Businesses in 2025",
  },
  "/blog/social-media-management-cost-sri-lanka": {
    title: "How Much Does Social Media Management Cost in Sri Lanka? (2025 Pricing Guide) | Cypher Digital",
    description: "How much does social media management cost in Sri Lanka? Detailed 2025 pricing guide — agency vs freelancer vs in-house, packages, and what's included.",
    h1: "How Much Does Social Media Management Cost in Sri Lanka? (2025 Pricing Guide)",
  },
  "/blog/social-media-management-small-business-sri-lanka": {
    title: "Social Media Management for Small Businesses in Sri Lanka: A Complete 2025 Guide | Cypher Digital",
    description: "Complete 2025 social media management guide for small businesses in Sri Lanka — mistakes to avoid, what's included, budgets, and real results.",
    h1: "Social Media Management for Small Businesses in Sri Lanka: A Complete 2025 Guide",
  },
  "/blog/social-media-marketing-agency-sri-lanka": {
    title: "How to Choose the Right Social Media Marketing Agency in Sri Lanka (2025) | Cypher Digital",
    description: "A practical framework for choosing a social media marketing agency in Sri Lanka — questions to ask, services to expect, and what 90 days should look like.",
    h1: "How to Choose the Right Social Media Marketing Agency in Sri Lanka (2025)",
  },
  "/blog/social-media-marketing-packages-sri-lanka": {
    title: "Social Media Marketing Packages in Sri Lanka: What's Included & How to Choose (2025 Guide) | Cypher Digital",
    description: "What's included in social media marketing packages in Sri Lanka, fair 2025 pricing, starter vs growth vs pro tiers, and red flags to avoid.",
    h1: "Social Media Marketing Packages in Sri Lanka: What's Included & How to Choose (2025 Guide)",
  },
  "/blog/social-media-marketing-sri-lanka-guide-2025": {
    title: "Social Media Marketing in Sri Lanka: The Complete 2025 Guide for Businesses | Cypher Digital",
    description: "The complete 2025 guide to social media marketing in Sri Lanka — platforms, content, organic vs paid, real costs and how to get started.",
    h1: "Social Media Marketing in Sri Lanka: The Complete 2025 Guide for Businesses",
  },
  "/blog/tiktok-marketing-jobs-sri-lanka": {
    title: "TikTok Marketing Jobs in Sri Lanka — The Newest and Fastest Growing Role (2026) | Cypher Digital",
    description: "Why TikTok specialist roles are in high demand, what the job involves, what it pays, and how to get hired in Colombo's fastest-growing digital discipline.",
    h1: "TikTok Marketing Jobs in Sri Lanka — The Newest and Fastest Growing Role (2026)",
  },
  "/blog/tiktok-marketing-sri-lanka-2025": {
    title: "TikTok Marketing in Sri Lanka: How to Go Viral and Get Customers in 2025 | Cypher Digital",
    description: "TikTok marketing in Sri Lanka 2025 — algorithm, viral content types, ads, and how to turn TikTok views into real customers.",
    h1: "TikTok Marketing in Sri Lanka: How to Go Viral and Get Customers in 2025",
  },
  "/blog/top-rated-social-media-management-companies-sri-lanka": {
    title: "Top-Rated Social Media Management Companies in Sri Lanka (2026) | Cypher Digital",
    description: "What separates top-rated social media management companies in Sri Lanka — evaluation criteria, monthly workflows, and why Cypher Digital leads the market.",
    h1: "Top-Rated Social Media Management Companies in Sri Lanka (2026)",
  },
  "/blog/traditional-vs-digital-advertising-sri-lanka": {
    title: "Traditional vs Digital Advertising in Sri Lanka — Which Delivers Better ROI? (2026) | Cypher Digital",
    description: "Compare TV, radio, newspaper and billboard against Facebook, Google, TikTok and SEO. Cost, reach, targeting and ROI — which wins in 2026?",
    h1: "Traditional vs Digital Advertising in Sri Lanka — Which Delivers Better ROI? (2026)",
  },
  "/blog/video-editor-jobs-sri-lanka": {
    title: "Video Editor Jobs in Sri Lanka — Freelance, Full-Time & What Pays Best (2026) | Cypher Digital",
    description: "Tools, salary ranges, showreel advice, and how to get your first video editing role at a digital marketing agency in Colombo.",
    h1: "Video Editor Jobs in Sri Lanka — Freelance, Full-Time & What Pays Best (2026)",
  },
  "/blog/what-does-a-social-media-marketing-agency-do": {
    title: "What Does a Social Media Marketing Agency Actually Do? (And Is It Worth It?) | Cypher Digital",
    description: "What a social media marketing agency actually does day-to-day, what it should not promise, real pricing in Sri Lanka and whether it's worth it.",
    h1: "What Does a Social Media Marketing Agency Actually Do? (And Is It Worth It?)",
  },
  "/blog/what-is-social-media-marketing": {
    title: "What Is Social Media Marketing? A Plain-English Guide for Business Owners | Cypher Digital",
    description: "A plain-English guide to what social media marketing is, how it differs from social media management, what it involves and what makes it effective.",
    h1: "What Is Social Media Marketing? A Plain-English Guide for Business Owners",
  },
  "/blog/what-video-to-promote-business-sri-lanka": {
    title: "What Kind of Video Should I Make to Promote My Business in Sri Lanka? | Cypher Digital",
    description: "The 5 types of business videos in Sri Lanka — brand, promo, testimonial, product and educational. What to make, when and what it costs. Cypher Digital.",
    h1: "What Kind of Video Should I Make to Promote My Business in Sri Lanka?",
  },
  "/blog/how-much-does-video-production-cost-sri-lanka": {
    title: "How Much Does Video Production Cost in Sri Lanka? (2025 Price Guide)",
    description: "Video production cost Sri Lanka — full 2025 price guide for reels, brand videos, AI video and agency packages from LKR 5,000–500,000. Cypher Digital.",
    h1: "How Much Does Video Production Cost in Sri Lanka? (2025 Price Guide)",
  },
  "/blog/best-ai-tools-video-production-2025": {
    title: "7 Best AI Tools for Video Production Used by Sri Lankan Agencies (2025)",
    description: "The 7 best AI tools for video production in 2025 — Runway, HeyGen, ElevenLabs, CapCut, Descript, Pika and Adobe Firefly. How Sri Lankan agencies use them.",
    h1: "The 7 Best AI Tools for Video Production Used by Agencies in Sri Lanka (2025)",
  },
  "/blog/social-media-video-content-strategy-sri-lanka": {
    title: "Social Media Video Strategy for Sri Lankan Businesses in 2025",
    description: "What actually works for social media video strategy in Sri Lanka — Reels, TikTok, Instagram, YouTube formats, posting frequency and AI scaling. Cypher Digital.",
    h1: "Social Media Video Strategy for Sri Lankan Businesses in 2025: What Actually Works",
  },
  "/blog/video-ads-facebook-google-sri-lanka": {
    title: "Video Ads on Facebook & Google in Sri Lanka: The Complete Guide",
    description: "How to use video ads on Facebook and Google in Sri Lanka — formats, hooks, budgets, CPMs and what makes a high-converting video ad. Cypher Digital.",
    h1: "How to Use Video Ads on Facebook and Google to Grow Your Business in Sri Lanka",
  },
  "/blog/ai-avatar-videos-businesses-sri-lanka": {
    title: "AI Avatar Videos for Sri Lankan Businesses: The 2025 Guide",
    description: "AI avatar video Sri Lanka — what they are, use cases for education, healthcare, finance, HR and e-commerce, costs and how to get started. Cypher Digital.",
    h1: "AI Avatar Videos: The Future of Business Communication in Sri Lanka",
  },
  "/blog/why-work-at-digital-marketing-agency-sri-lanka": {
    title: "Why Work at a Digital Marketing Agency in Sri Lanka? The Honest Take | Cypher Digital",
    description: "The real advantages, genuine downsides, and what a career at a Colombo digital marketing agency looks like day-to-day in 2026.",
    h1: "Why Work at a Digital Marketing Agency in Sri Lanka? The Honest Take",
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

// ---- Google for Jobs: server-side JobPosting JSON-LD ----
type JobPostingData = {
  title: string;
  description: string;
  employmentType: string | string[];
  datePosted: string;
  salaryMin: number;
  salaryMax: number;
};

const JOB_POSTINGS: Record<string, JobPostingData> = {
  "graphic-designer-jobs-sri-lanka": {
    title: "Graphic Designer",
    description: "Design social media creatives, brand identities and marketing collateral for 800+ Sri Lankan brands at Cypher Digital, Colombo. Responsibilities include social media designs, ad creatives, logos, brand identity and marketing collateral. Requirements: proficiency in Adobe Photoshop and Illustrator, strong portfolio in social media or branding work, and ability to handle multiple deadlines.",
    employmentType: ["FULL_TIME", "PART_TIME"],
    datePosted: "2026-05-25",
    salaryMin: 45000,
    salaryMax: 150000,
  },
  "digital-marketing-jobs-sri-lanka": {
    title: "Digital Marketing Specialist",
    description: "Plan and run Meta, Google and TikTok ad campaigns that generate real leads and measurable ROI for 800+ Sri Lankan brands at Cypher Digital, Colombo. Manage Facebook Ads, Instagram Ads, Google Ads, TikTok Ads and SEO campaigns; own lead, ROAS and CPL performance. Requirements: 2+ years digital marketing experience, hands-on Meta Ads and Google Ads, analytical mindset.",
    employmentType: "FULL_TIME",
    datePosted: "2026-05-25",
    salaryMin: 50000,
    salaryMax: 80000,
  },
  "digital-marketing-executive-jobs-sri-lanka": {
    title: "Digital Marketing Executive",
    description: "Execute Meta, Google and TikTok ad campaigns, manage social pages and report on lead-generation results for 800+ Sri Lankan brands at Cypher Digital, Colombo. Requirements: 1+ years agency or in-house experience, hands-on Meta/Google Ads, strong reporting skills.",
    employmentType: "FULL_TIME",
    datePosted: "2026-05-25",
    salaryMin: 45000,
    salaryMax: 120000,
  },
  "video-editor-jobs-sri-lanka": {
    title: "Video Editor",
    description: "Edit scroll-stopping Reels, TikToks, YouTube ads and brand films for 800+ Sri Lankan brands at Cypher Digital, Colombo. Requirements: proficiency in Premiere Pro / DaVinci Resolve / CapCut, strong portfolio of short-form social video, motion graphics a plus.",
    employmentType: ["FULL_TIME", "CONTRACTOR"],
    datePosted: "2026-05-25",
    salaryMin: 45000,
    salaryMax: 150000,
  },
  "marketing-internship-sri-lanka": {
    title: "Marketing Intern",
    description: "Hands-on, paid marketing internship in Colombo working alongside our team on live client campaigns for 800+ Sri Lankan brands. Learn social media, paid ads, content and design from senior marketers. Requirements: undergraduate or recent graduate, strong communication, eagerness to learn.",
    employmentType: "INTERN",
    datePosted: "2026-05-25",
    salaryMin: 20000,
    salaryMax: 40000,
  },
  "internship-programme-sri-lanka": {
    title: "Intern (Internship Programme)",
    description: "Cypher Digital's Internship Programme in Colombo takes people with no experience and grows them from intern to management trainee. Interns learn the whole business by rotating through three pillars — Operations, Sales and Marketing — on live client accounts, guided by a dedicated mentor. Ideal for anyone starting a career who wants to discover their strengths. Career path: Intern → Management Trainee → Executive → Manager. Requirements: students, fresh graduates and career-starters — especially anyone still figuring out their direction. No degree or prior experience required. Good English and Sinhala communication, coachable, and ready to take initiative.",
    employmentType: ["INTERN", "FULL_TIME"],
    datePosted: "2026-07-01",
    salaryMin: 20000,
    salaryMax: 40000,
  },
  "finance-internship-sri-lanka": {
    title: "Finance Intern",
    description: "Paid finance internship in Colombo supporting the accounts team with client invoicing, monthly reporting, bank reconciliations and budget tracking across 800+ Sri Lankan client accounts. Structured 3–6 month placement inside Cypher360 with a path to a full-time finance role. Requirements: undergraduate, fresh graduate or CIMA/ACCA/AAT/CA part-qualified student, comfortable with Excel, strong attention to detail.",
    employmentType: "INTERN",
    datePosted: "2026-08-01",
    salaryMin: 20000,
    salaryMax: 40000,
  },
  "content-specialist-jobs-sri-lanka": {
    title: "Content Specialist",
    description: "Content Specialist role (full-time or part-time) in Colombo, Sri Lanka. Plan content calendars, write captions, ad copy, SEO blog articles and short-form video scripts for 800+ Sri Lankan brands and optimise content for search and engagement. Requirements: 1–2+ years in content creation, copywriting or social media, excellent English writing, portfolio of published work.",
    employmentType: ["FULL_TIME", "PART_TIME"],
    datePosted: "2026-08-01",
    salaryMin: 60000,
    salaryMax: 130000,
  },
  "social-media-jobs-sri-lanka": {
    title: "Social Media Manager",
    description: "Plan content, run Facebook, Instagram and TikTok pages and grow engaged audiences for 800+ Sri Lankan brands at Cypher Digital, Colombo. Requirements: 2+ years social media management, strong copywriting, comfort with analytics, basic design sense.",
    employmentType: "FULL_TIME",
    datePosted: "2026-05-25",
    salaryMin: 45000,
    salaryMax: 180000,
  },
  "digital-marketing-manager-jobs-sri-lanka": {
    title: "Digital Marketing Manager",
    description: "Lead a team of performance marketers, strategists and creatives running Meta, Google and TikTok campaigns for 800+ Sri Lankan brands at Cypher Digital, Colombo. Requirements: 4+ years digital marketing with 1+ year managing a team, strong performance marketing background, agency experience preferred.",
    employmentType: "FULL_TIME",
    datePosted: "2026-05-25",
    salaryMin: 120000,
    salaryMax: 200000,
  },
  "sales-jobs-in-sri-lanka": {
    title: "Sales Executive",
    description: "Sell high-demand digital products (social media management, Facebook Ads, Google Ads, SEO, video production) to Sri Lankan businesses. Base LKR 60,000 with ability to earn LKR 150,000+/month with commissions. Requirements: 1+ years B2B sales, strong communication in English and Sinhala, target-driven mindset.",
    employmentType: "FULL_TIME",
    datePosted: "2026-07-01",
    salaryMin: 60000,
    salaryMax: 150000,
  },
  "sales-manager-jobs-sri-lanka": {
    title: "Sales Manager",
    description: "Lead a high-performing sales team selling in-demand digital products to Sri Lankan businesses. Base LKR 80,000/month guaranteed with strong additional earnings for top performers. Requirements: 4+ years B2B sales with 1+ year managing a team, strong leadership and pipeline management skills.",
    employmentType: "FULL_TIME",
    datePosted: "2026-06-12",
    salaryMin: 80000,
    salaryMax: 250000,
  },
  "business-development-executive-jobs-sri-lanka": {
    title: "Business Development Executive",
    description: "Sell high-demand digital products (Facebook Ads, Google Ads, SEO, social media management, video production) to Sri Lankan businesses and build a rewarding career at Cypher Digital, Colombo. Requirements: 1+ years B2B sales or business development, strong communication, target-driven mindset.",
    employmentType: "FULL_TIME",
    datePosted: "2026-06-23",
    salaryMin: 60000,
    salaryMax: 150000,
  },
};

const buildJobPostingSchema = (slug: string, job: JobPostingData) => {
  const canonical = `https://cypherdigital.lk/careers/${slug}`;
  const waUrl = `https://wa.me/94701772626?text=${encodeURIComponent(`Hi Cypher Digital, I'd like to apply for the ${job.title} role.`)}`;
  const isIntern = /intern/i.test(slug) || JSON.stringify(job.employmentType).includes("INTERN");
  const validThrough = (() => {
    const d = new Date();
    d.setDate(d.getDate() + 90);
    return d.toISOString().slice(0, 10);
  })();
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: job.datePosted,
    validThrough,
    identifier: { "@type": "PropertyValue", name: "Cypher Digital", value: slug },
    employmentType: job.employmentType,
    hiringOrganization: {
      "@type": "Organization",
      name: "Cypher Digital",
      sameAs: "https://cypherdigital.lk",
      logo: "https://cypherdigital.lk/assets/logo-DJLYsmc6.png",
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kotte",
        addressLocality: "Colombo",
        addressRegion: "Western Province",
        postalCode: "10100",
        addressCountry: "LK",
      },
    },
    applicantLocationRequirements: { "@type": "Country", name: "Sri Lanka" },
    educationRequirements: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: isIntern ? "high school" : "bachelor degree",
    },
    experienceRequirements: {
      "@type": "OccupationalExperienceRequirements",
      monthsOfExperience: isIntern ? 0 : 12,
    },
    experienceInPlaceOfEducation: true,
    industry: "Digital Marketing",
    occupationalCategory: job.title,
    skills: job.skills ?? job.description,
    qualifications: job.qualifications ?? job.description,
    responsibilities: job.responsibilities ?? job.description,
    jobBenefits: job.benefits ??
      "Work on live campaigns for 800+ Sri Lankan brands, mentorship from senior marketers, performance-based increments, and clear career progression at Cypher Digital.",
    applicationContact: {
      "@type": "ContactPoint",
      contactType: "Recruitment",
      telephone: "+94701772626",
      url: waUrl,
    },
    potentialAction: {
      "@type": "ApplyAction",
      name: `Apply for ${job.title} on WhatsApp`,
      target: { "@type": "EntryPoint", urlTemplate: waUrl },
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "LKR",
      value: {
        "@type": "QuantitativeValue",
        minValue: job.salaryMin,
        maxValue: job.salaryMax,
        unitText: "MONTH",
      },
    },
    directApply: false,
    url: canonical,
  };
};

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
  const safeDescription2 = escapeAttr(meta.description);
  const safeTitle2 = escapeAttr(meta.title.replace(/\s*\|\s*Cypher Digital.*$/i, ""));
  const seoBody = `<div class="seo-prerender" style="position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;overflow:hidden;">
    <h1>${safeH1}</h1>
    <p>${safeDescription2}</p>
    <p>${safeTitle2} — delivered by Cypher Digital, a leading digital marketing agency in Sri Lanka.</p>
  </div>`;
  modified = modified.replace(
    '<div id="root"></div>',
    `<div id="root">${seoBody}</div>`
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

  // Inject JobPosting JSON-LD for Google for Jobs (server-side, no JS required)
  const careersMatch = path.match(/^\/careers\/([a-z0-9-]+)$/);
  if (careersMatch) {
    const job = JOB_POSTINGS[careersMatch[1]];
    if (job) {
      const schema = buildJobPostingSchema(careersMatch[1], job);
      const block = `<script type="application/ld+json">${escapeJsonLd(JSON.stringify(schema))}</script>`;
      modified = modified.replace("</head>", `  ${block}\n  </head>`);
    }
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
