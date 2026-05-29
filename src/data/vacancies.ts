import { Palette, BarChart3, Film, GraduationCap, Share2, Briefcase, type LucideIcon } from "lucide-react";

export interface Vacancy {
  slug: string;
  title: string;
  shortTitle: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  icon: LucideIcon;
  type: string;
  employmentType: string | string[];
  location: string;
  summary: string;
  duties: string[];
  requirements: string[];
  perks?: string[];
  whatsappMessage: string;
  whatsappCta: string;
  datePosted: string;
  salaryRange?: { min: number; max: number; currency: string; unit: "MONTH" | "YEAR" | "HOUR" };
  seoIntro?: string[];
  whyJoin?: { title: string; body: string }[];
  faqs?: { q: string; a: string }[];
}

export const vacancies: Vacancy[] = [
  {
    slug: "graphic-designer-jobs-sri-lanka",
    title: "Graphic Designer",
    shortTitle: "Graphic Designer",
    h1: "Graphic Designer Jobs in Sri Lanka — Hiring Now at Cypher Digital",
    metaTitle: "Graphic Designer Jobs in Sri Lanka 2026 | Graphic Design Jobs in Colombo",
    metaDescription:
      "Looking for graphic designer jobs in Sri Lanka? Cypher Digital is hiring graphic design talent in Colombo to work on 800+ Sri Lankan brands. Apply via WhatsApp today.",
    icon: Palette,
    type: "Full-time / Part-time",
    employmentType: ["FULL_TIME", "PART_TIME"],
    location: "Colombo, Sri Lanka",
    summary:
      "One of the most in-demand graphic designer jobs in Sri Lanka right now — design social media creatives, brand identities and marketing collateral for 800+ Sri Lankan brands at Cypher Digital, Colombo.",
    salaryRange: { min: 45000, max: 150000, currency: "LKR", unit: "MONTH" },
    seoIntro: [
      "Cypher Digital is hiring a Graphic Designer in Sri Lanka to join our Colombo creative studio. If you're searching for graphic designer jobs in Sri Lanka — or graphic design jobs in Sri Lanka in general — with real brands, real budgets and real creative freedom, this is one of the best graphic design vacancies in Colombo right now.",
      "As our in-house Graphic Designer in Sri Lanka, you'll design social media creatives, ad visuals, brand identities, packaging and marketing collateral for 800+ Sri Lankan brands across Colombo, Kandy, Galle, Negombo and beyond. Your work goes live on paid Meta and Google Ads campaigns — not stuck in a folder.",
      "This isn't a one-off freelance gig. It's a full-time (or part-time) graphic design career opportunity in Sri Lanka inside Cypher360 — the country's most integrated marketing group covering digital marketing, events and production.",
    ],
    duties: [
      "Design social media creatives, banners, stories, and reels for 800+ brands",
      "Create logos, brand identities, flyers, brochures, and packaging",
      "Work closely with the marketing team to bring campaigns to life",
      "Maintain brand consistency across all design deliverables",
    ],
    requirements: [
      "Proficiency in Adobe Photoshop, Illustrator, or similar tools",
      "A strong portfolio showing social media or branding work",
      "Creative eye with attention to detail",
      "Ability to work under deadlines and handle multiple projects",
      "Knowledge of Canva is a plus",
    ],
    perks: [
      "Competitive salary benchmarked against top graphic design jobs in Colombo",
      "Work on real brand campaigns for 800+ Sri Lankan clients — not stock projects",
      "Modern design setup, latest Adobe Creative Cloud licences and asset libraries",
      "Mentorship from senior designers, art directors and brand strategists",
      "Clear growth path to Senior Graphic Designer / Art Director roles",
      "Friendly Colombo studio culture with flexible hours for part-timers",
    ],
    whyJoin: [
      { title: "Sri Lanka's most active brand pipeline", body: "We design hundreds of creatives every month for restaurants, fashion, real estate, education, healthcare and FMCG brands across Sri Lanka — your portfolio grows fast." },
      { title: "Design that's measured, not just admired", body: "Our creatives run on Meta and Google Ads campaigns where performance is tracked. You'll learn how design choices affect real marketing ROI." },
      { title: "Career growth inside Cypher360", body: "Move between brand design, social design, motion and packaging across our digital marketing, events and production arms." },
    ],
    faqs: [
      {
        q: "Are you hiring graphic designers in Sri Lanka right now?",
        a: "Yes. Cypher Digital is actively hiring a Graphic Designer in Colombo, Sri Lanka on a full-time or part-time basis. Apply directly via WhatsApp at +94 70 177 2626 with your portfolio.",
      },
      {
        q: "What is the average salary for a Graphic Designer in Sri Lanka?",
        a: "Graphic designer salaries in Sri Lanka typically range between LKR 45,000 and LKR 150,000 per month depending on experience, software skills (Photoshop, Illustrator, InDesign) and portfolio strength.",
      },
      {
        q: "Where is the graphic design job located?",
        a: "The role is based at our Colombo studio in Sri Lanka. Part-time and freelance graphic designers elsewhere in Sri Lanka — Kandy, Galle, Negombo, Jaffna — can also apply for remote project-based work.",
      },
      {
        q: "What software do I need to know to apply?",
        a: "Adobe Photoshop and Illustrator are essential. InDesign, Figma, Canva and basic After Effects are strong advantages for this graphic design job in Sri Lanka.",
      },
      {
        q: "Do I need a design degree to apply for graphic designer jobs in Sri Lanka at Cypher Digital?",
        a: "No degree required. A strong portfolio showing social media creatives, branding work or ad design matters far more than qualifications.",
      },
      {
        q: "How do I apply for this Graphic Designer vacancy in Sri Lanka?",
        a: "Send your name, portfolio link (Behance, Dribbble, Drive or Instagram) and a short intro to +94 70 177 2626 on WhatsApp. We respond within 24 hours — no lengthy forms.",
      },
    ],
    whatsappMessage: "Hi, I'm applying for the Graphic Designer position at Cypher Digital.",
    whatsappCta: "Apply for Graphic Designer",
    datePosted: "2026-05-25",
  },
  {
    slug: "digital-marketing-jobs-sri-lanka",
    title: "Digital Marketing Specialist",
    shortTitle: "Digital Marketing Specialist",
    h1: "Digital Marketing Specialist Jobs in Sri Lanka — Hiring Now at Cypher Digital",
    metaTitle: "Digital Marketing Specialist Jobs in Sri Lanka 2026 | Vacancy in Colombo",
    metaDescription:
      "Looking for Digital Marketing Specialist jobs in Sri Lanka? Cypher Digital has an open Digital Marketing Specialist vacancy in Colombo — Meta Ads, Google Ads, SEO. Apply via WhatsApp.",
    icon: BarChart3,
    type: "Full-time",
    employmentType: "FULL_TIME",
    location: "Colombo, Sri Lanka",
    summary:
      "One of the most in-demand Digital Marketing Specialist jobs in Sri Lanka right now — plan and run Meta, Google and TikTok ad campaigns that generate real leads and measurable ROI for 800+ Sri Lankan brands at Cypher Digital, Colombo.",
    salaryRange: { min: 50000, max: 200000, currency: "LKR", unit: "MONTH" },
    seoIntro: [
      "Cypher Digital is hiring a Digital Marketing Specialist in Sri Lanka to join our Colombo performance team. If you're searching for digital marketing specialist jobs in Sri Lanka — or a serious digital marketing specialist vacancy in Sri Lanka with real budgets and real accountability — this is one of the best opportunities in Colombo right now.",
      "As our Digital Marketing Specialist in Sri Lanka, you'll plan, launch and optimise Facebook Ads, Instagram Ads, Google Ads, TikTok Ads and SEO campaigns for 800+ Sri Lankan brands across Colombo, Kandy, Galle and beyond. You'll own performance — leads, ROAS, CPL — not just post-and-pray social media.",
      "This is a full-time digital marketing career opportunity in Sri Lanka inside Cypher360 — the country's most integrated marketing group covering digital marketing, events and production.",
    ],
    perks: [
      "Competitive salary benchmarked against top digital marketing jobs in Colombo",
      "Manage real ad budgets across Meta Ads, Google Ads and TikTok Ads",
      "Direct access to Meta Blueprint and Google Ads certified mentors",
      "Clear growth path to Performance Lead / Head of Digital roles",
      "Work on 800+ Sri Lankan brand campaigns across multiple industries",
      "Friendly Colombo studio culture with hybrid flexibility",
    ],
    whyJoin: [
      { title: "Sri Lanka's most diverse campaign portfolio", body: "Restaurants, fashion, real estate, education, healthcare and FMCG — you'll run campaigns across every major industry, not just one vertical." },
      { title: "Real ad budgets, real accountability", body: "You'll own monthly Meta and Google Ads budgets ranging from LKR 50K to LKR 5M+, measured on leads, ROAS and CPL — not vanity metrics." },
      { title: "Fast career growth inside Cypher360", body: "Top performers move into Performance Lead, Account Director or Head of Digital roles inside Sri Lanka's most integrated marketing group." },
    ],
    faqs: [
      {
        q: "Are you hiring Digital Marketing Specialists in Sri Lanka right now?",
        a: "Yes. Cypher Digital has an open Digital Marketing Specialist vacancy in Colombo, Sri Lanka on a full-time basis. Apply directly via WhatsApp at +94 70 177 2626 with your CV and campaign results.",
      },
      {
        q: "What is the average salary for a Digital Marketing Specialist in Sri Lanka?",
        a: "Digital Marketing Specialist salaries in Sri Lanka typically range between LKR 50,000 and LKR 200,000 per month depending on experience, platform certifications (Meta Blueprint, Google Ads) and proven campaign ROI.",
      },
      {
        q: "What does a Digital Marketing Specialist at Cypher Digital actually do?",
        a: "You'll plan and manage Facebook Ads, Instagram Ads, Google Ads, TikTok Ads and SEO campaigns, generate leads, track performance in Meta Ads Manager and Google Ads, manage client social pages and report on monthly performance.",
      },
      {
        q: "Where is the Digital Marketing Specialist job located?",
        a: "The role is based at our Colombo studio in Sri Lanka with hybrid flexibility. Most digital marketing specialists are expected on-site at least 3 days per week.",
      },
      {
        q: "What experience do I need to apply?",
        a: "1–4 years of hands-on experience running paid ad campaigns (Meta Ads and/or Google Ads), an understanding of SEO and lead generation, and the ability to read campaign data. Meta Blueprint or Google Ads certification is a strong plus.",
      },
      {
        q: "Do I need a marketing degree to apply for this digital marketing job in Sri Lanka?",
        a: "No degree required. We hire based on real campaign results — your ad accounts, your case studies, your ROI numbers matter far more than qualifications.",
      },
      {
        q: "How do I apply for this Digital Marketing Specialist vacancy in Sri Lanka?",
        a: "Send your name, CV or LinkedIn link and a short summary of campaigns you've run to +94 70 177 2626 on WhatsApp. We respond within 24 hours — no lengthy forms.",
      },
    ],
    duties: [
      "Plan and manage Facebook, Instagram, Google, and TikTok ad campaigns",
      "Generate leads and track performance using Meta Ads Manager and Google Ads",
      "Manage social media pages including content scheduling and inbox management",
      "Analyse campaign data and prepare monthly performance reports",
      "Collaborate with the design team on creatives and copy",
    ],
    requirements: [
      "Experience running paid ad campaigns (Meta Ads or Google Ads)",
      "Understanding of SEO, lead generation, and social media strategy",
      "Strong communication skills in English and Sinhala",
      "Analytical mindset — you love data and results",
      "Google Ads or Meta Blueprint certification is a plus",
    ],
    whatsappMessage: "Hi, I'm applying for the Digital Marketing Specialist position at Cypher Digital.",
    whatsappCta: "Apply for Digital Marketing Specialist",
    datePosted: "2026-05-25",
  },
  {
    slug: "digital-marketing-executive-jobs-sri-lanka",
    title: "Digital Marketing Executive",
    shortTitle: "Digital Marketing Executive",
    h1: "Digital Marketing Executive Jobs in Sri Lanka — Hiring Now at Cypher Digital",
    metaTitle: "Digital Marketing Executive Jobs in Sri Lanka 2026 | Vacancy in Colombo",
    metaDescription:
      "Looking for Digital Marketing Executive jobs in Sri Lanka? Cypher Digital is hiring a Digital Marketing Executive in Colombo — Meta Ads, Google Ads, SEO, content. Apply via WhatsApp.",
    icon: Briefcase,
    type: "Full-time",
    employmentType: "FULL_TIME",
    location: "Colombo, Sri Lanka",
    summary:
      "One of the most in-demand Digital Marketing Executive jobs in Sri Lanka right now — execute Meta, Google and TikTok ad campaigns, manage social pages and report on real lead-generation results for 800+ Sri Lankan brands at Cypher Digital, Colombo.",
    salaryRange: { min: 45000, max: 120000, currency: "LKR", unit: "MONTH" },
    seoIntro: [
      "Cypher Digital is hiring a Digital Marketing Executive in Sri Lanka to join our Colombo performance team. If you're searching for digital marketing executive jobs in Sri Lanka — or a serious digital marketing executive vacancy in Colombo with real campaigns, real budgets and real career growth — this is one of the best opportunities open right now.",
      "As our Digital Marketing Executive in Sri Lanka, you'll execute Facebook Ads, Instagram Ads, Google Ads, TikTok Ads and SEO campaigns for 800+ Sri Lankan brands across Colombo, Kandy, Galle and beyond. You'll manage day-to-day campaign delivery, social media scheduling, lead tracking and monthly client reporting — the core executive work that keeps performance marketing running.",
      "This is a full-time digital marketing executive career opportunity in Sri Lanka inside Cypher360 — the country's most integrated marketing group covering digital marketing, events and production. Clear growth path from Digital Marketing Executive → Senior Executive → Digital Marketing Specialist → Performance Lead.",
    ],
    duties: [
      "Execute Facebook, Instagram, Google and TikTok ad campaigns under the Specialist's plan",
      "Schedule and publish daily content on client social media pages",
      "Track leads, ad spend and key metrics in Meta Ads Manager and Google Ads",
      "Prepare weekly and monthly client performance reports",
      "Manage client WhatsApp inboxes, comments and DMs for assigned brands",
      "Coordinate with designers and video editors on campaign creatives",
    ],
    requirements: [
      "0–2 years of hands-on digital marketing experience (internship counts)",
      "Working knowledge of Meta Ads Manager and/or Google Ads",
      "Understanding of social media scheduling tools (Meta Business Suite, Buffer, etc.)",
      "Strong communication skills in English and Sinhala (Tamil a plus)",
      "Organised, deadline-driven and comfortable juggling multiple client accounts",
      "Meta Blueprint or Google Ads certification is a strong plus",
    ],
    perks: [
      "Competitive salary benchmarked against top digital marketing executive jobs in Colombo",
      "Hands-on training on Meta Ads, Google Ads, SEO and analytics",
      "Direct mentorship from Meta Blueprint and Google Ads certified specialists",
      "Clear promotion path to Digital Marketing Specialist within 12–18 months",
      "Work across 800+ Sri Lankan brand campaigns in multiple industries",
      "Friendly Colombo studio culture with hybrid flexibility",
    ],
    whyJoin: [
      { title: "Best executive-level training in Sri Lanka", body: "You'll execute real campaigns from day one — Meta Ads, Google Ads, TikTok Ads, SEO and content — under the mentorship of certified specialists. Most executives are running their own client accounts within 3 months." },
      { title: "Real brands, real budgets, real results", body: "You'll work on live ad accounts for 800+ Sri Lankan brands across restaurants, fashion, real estate, education, healthcare and FMCG — not dummy projects." },
      { title: "Fastest promotion path in the industry", body: "Top Digital Marketing Executives at Cypher Digital are promoted to Specialist within 12–18 months, with a clear track to Performance Lead and Account Director inside Cypher360." },
    ],
    faqs: [
      {
        q: "Are you hiring Digital Marketing Executives in Sri Lanka right now?",
        a: "Yes. Cypher Digital has an open Digital Marketing Executive vacancy in Colombo, Sri Lanka on a full-time basis. Apply directly via WhatsApp at +94 70 177 2626 with your CV.",
      },
      {
        q: "What is the average salary for a Digital Marketing Executive in Sri Lanka?",
        a: "Digital Marketing Executive salaries in Sri Lanka typically range between LKR 45,000 and LKR 120,000 per month depending on experience, platform certifications (Meta Blueprint, Google Ads) and the number of client accounts handled.",
      },
      {
        q: "What's the difference between a Digital Marketing Executive and a Digital Marketing Specialist?",
        a: "A Digital Marketing Executive focuses on day-to-day execution — running campaigns, scheduling content, pulling reports — under a Specialist's strategy. A Specialist owns campaign strategy, budget allocation and ROI accountability. Most Executives at Cypher Digital are promoted to Specialist within 12–18 months.",
      },
      {
        q: "Do I need experience to apply for this Digital Marketing Executive job in Sri Lanka?",
        a: "0–2 years of hands-on digital marketing experience is preferred — an internship in social media management or paid ads counts. Strong English/Sinhala communication and a willingness to learn matter more than years on a CV.",
      },
      {
        q: "Where is the Digital Marketing Executive job located?",
        a: "The role is based at our Colombo studio in Sri Lanka with hybrid flexibility. Executives are expected on-site at least 3 days per week so they can learn directly from senior specialists.",
      },
      {
        q: "Do I need a marketing degree to apply?",
        a: "No degree required. We hire based on attitude, communication and willingness to learn. Meta Blueprint, Google Ads or any digital marketing certification is a strong plus.",
      },
      {
        q: "How do I apply for this Digital Marketing Executive vacancy in Sri Lanka?",
        a: "Send your name, CV or LinkedIn link and a short intro to +94 70 177 2626 on WhatsApp. We respond within 24 hours — no lengthy forms.",
      },
    ],
    whatsappMessage: "Hi, I'm applying for the Digital Marketing Executive position at Cypher Digital.",
    whatsappCta: "Apply for Digital Marketing Executive",
    datePosted: "2026-05-25",
  },
  {
    slug: "video-editor-jobs-sri-lanka",
    title: "Video Editor",
    shortTitle: "Video Editor",
    h1: "Video Editor Jobs in Sri Lanka — Hiring Now at Cypher Digital",
    metaTitle: "Video Editor Jobs in Sri Lanka 2026 | Apply Today — Cypher Digital",
    metaDescription:
      "Looking for Video Editor jobs in Sri Lanka? Cypher Digital is hiring video editors in Colombo to edit reels, TikToks, YouTube ads & brand films for 800+ clients. Apply via WhatsApp.",
    icon: Film,
    type: "Full-time / Freelance",
    employmentType: ["FULL_TIME", "CONTRACTOR"],
    location: "Colombo, Sri Lanka",
    summary:
      "One of the most in-demand Video Editor jobs in Sri Lanka right now — edit scroll-stopping reels, TikToks, YouTube ads and brand films for 800+ Sri Lankan brands at Cypher Digital, Colombo.",
    salaryRange: { min: 45000, max: 150000, currency: "LKR", unit: "MONTH" },
    seoIntro: [
      "Cypher Digital is hiring a Video Editor in Sri Lanka to join our Colombo creative studio. If you're searching for video editor jobs in Sri Lanka with real brands, real budgets, and creative freedom — this is one of the best video editing vacancies in Colombo right now.",
      "As our in-house Video Editor in Sri Lanka, you'll cut high-performing short-form video content for Facebook, Instagram Reels, TikTok, YouTube Shorts and YouTube Ads — the same creatives that drive paid campaigns for 800+ Sri Lankan brands across Colombo, Kandy, Galle and beyond.",
      "This isn't a freelance gig hidden behind a job board. It's a full-time (or freelance) video editor career opportunity in Sri Lanka inside Cypher360 — the country's most integrated marketing group covering digital marketing, events, and production.",
    ],
    duties: [
      "Edit promotional videos, reels, TikToks, and YouTube ads for client brands",
      "Add motion graphics, transitions, subtitles, and sound design",
      "Work with the creative team to produce scroll-stopping ad creatives",
      "Edit raw footage into polished brand videos and product videos",
      "Deliver content optimised for Facebook, Instagram, TikTok, and YouTube formats",
    ],
    requirements: [
      "Proficiency in Adobe Premiere Pro, CapCut, or DaVinci Resolve",
      "Experience editing short-form content (reels, TikToks, YouTube Shorts)",
      "Good sense of pacing, colour grading, and storytelling through video",
      "Ability to handle multiple projects and meet deadlines",
      "Knowledge of After Effects or motion graphics is a strong plus",
      "A portfolio or showreel of previous work is required",
    ],
    perks: [
      "Competitive salary benchmarked against top video editor jobs in Colombo",
      "Work on real campaigns for 800+ Sri Lankan brands — not stock projects",
      "Modern editing setup, fast machines and access to stock libraries",
      "Mentorship from senior editors, marketers and motion designers",
      "Clear growth path to Senior Video Editor / Creative Lead roles",
      "Friendly Colombo studio culture — flexible hours for freelancers",
    ],
    whyJoin: [
      { title: "Sri Lanka's most active brand pipeline", body: "We produce hundreds of videos every month for restaurants, fashion brands, real estate, education, healthcare and FMCG clients across Sri Lanka — so your editing reel grows fast." },
      { title: "Performance-led editing, not just aesthetics", body: "Our videos are measured by views, watch-time and lead conversions on Meta and Google Ads. You'll learn how editing choices affect real marketing ROI." },
      { title: "Career growth inside Cypher360", body: "Move between video editing, motion design, and content direction across our digital marketing, events and production arms." },
    ],
    faqs: [
      {
        q: "Are you hiring video editors in Sri Lanka right now?",
        a: "Yes. Cypher Digital is actively hiring a Video Editor in Colombo, Sri Lanka on a full-time or freelance basis. Apply directly via WhatsApp at +94 70 177 2626 with your showreel.",
      },
      {
        q: "What is the average salary for a Video Editor in Sri Lanka?",
        a: "Video Editor salaries in Sri Lanka typically range between LKR 45,000 and LKR 150,000 per month depending on experience, software skills (Premiere Pro, After Effects, DaVinci Resolve) and portfolio strength.",
      },
      {
        q: "Where is the video editor job located?",
        a: "The role is based at our Colombo studio in Sri Lanka. Freelance video editors elsewhere in Sri Lanka (Kandy, Galle, Negombo, Jaffna) can also apply for remote project-based work.",
      },
      {
        q: "What software do I need to know to apply?",
        a: "Adobe Premiere Pro is essential. CapCut, DaVinci Resolve and After Effects (motion graphics) are strong advantages for this video editing job in Sri Lanka.",
      },
      {
        q: "Do I need a degree to apply for video editor jobs in Sri Lanka at Cypher Digital?",
        a: "No degree required. A strong showreel showing reels, TikToks, YouTube ads or brand videos matters far more than qualifications.",
      },
      {
        q: "How do I apply for this Video Editor vacancy in Sri Lanka?",
        a: "Send your name, showreel link and a short intro to +94 70 177 2626 on WhatsApp. We respond within 24 hours — no lengthy forms.",
      },
    ],
    whatsappMessage: "Hi, I'm applying for the Video Editor position at Cypher Digital.",
    whatsappCta: "Apply for Video Editor",
    datePosted: "2026-05-25",
  },
  {
    slug: "marketing-internship-sri-lanka",
    title: "Marketing Intern",
    shortTitle: "Marketing Internship",
    h1: "Marketing Internship in Sri Lanka — Apply Now at Cypher Digital",
    metaTitle: "Marketing Internship in Sri Lanka 2026 | Digital Marketing Intern Colombo",
    metaDescription:
      "Apply for the best marketing internship in Sri Lanka. Cypher Digital is hiring digital marketing interns in Colombo — social media, Meta Ads, Google Ads, SEO & design. Apply via WhatsApp.",
    icon: GraduationCap,
    type: "Internship (3–6 months)",
    employmentType: "INTERN",
    location: "Colombo, Sri Lanka",
    summary:
      "One of the best marketing internships in Sri Lanka — a hands-on, paid internship in Colombo where you work alongside our team on live client campaigns for 800+ Sri Lankan brands.",
    salaryRange: { min: 20000, max: 40000, currency: "LKR", unit: "MONTH" },
    seoIntro: [
      "Cypher Digital is offering a Marketing Internship in Sri Lanka for students and fresh graduates who want to break into digital marketing the right way. If you're searching for a marketing internship in Colombo, a digital marketing internship in Sri Lanka, or a social media internship near you — this is one of the most hands-on internship opportunities in the country right now.",
      "As a Marketing Intern at Cypher Digital, you'll work on real Facebook, Instagram, TikTok and Google Ads campaigns for 800+ Sri Lankan brands across restaurants, fashion, education, real estate and healthcare. You'll learn how professional marketers plan, launch, optimise and report on paid campaigns — not just theory from a textbook.",
      "This isn't a coffee-fetching, photocopy-printing internship. It's a structured 3–6 month digital marketing internship in Sri Lanka inside Cypher360 — the country's most integrated marketing group — with a clear path to convert into a full-time role.",
    ],
    duties: [
      "Assist with social media content scheduling and page management",
      "Support the team with graphic design tasks using Canva or Photoshop",
      "Help monitor and report on Facebook, Instagram, and Google ad campaigns",
      "Research trends, competitors, and content ideas for client brands",
      "Assist with video editing, caption writing, and creative briefs",
      "Learn how real campaigns are planned, launched, and optimised",
    ],
    requirements: [
      "Currently studying marketing, business, design, IT, or a related field",
      "Eager to learn and not afraid to take initiative",
      "Basic knowledge of social media platforms (Facebook, Instagram, TikTok)",
      "Familiarity with Canva, Photoshop, or any editing tool is a plus",
      "Good communication skills in English and Sinhala",
      "Able to commit at least 3 days per week",
    ],
    perks: [
      "Real work experience on live client campaigns",
      "Mentorship from experienced digital marketers and designers",
      "Certificate of internship completion",
      "Potential to convert to a full-time role based on performance",
      "Exposure to Sri Lanka's most integrated marketing group — Cypher360",
      "Monthly stipend — paid marketing internship in Sri Lanka, not unpaid",
      "Flexible 3 days/week schedule designed around university timetables",
    ],
    whyJoin: [
      { title: "Sri Lanka's most hands-on marketing internship", body: "You'll touch real Meta Ads accounts, Google Ads campaigns and client social pages from week one — not just shadow someone else's screen." },
      { title: "Mentorship from senior marketers", body: "Learn directly from Meta Blueprint and Google Ads certified specialists working on Sri Lanka's biggest brand campaigns." },
      { title: "Convert to a full-time digital marketing job", body: "Top-performing interns are offered full-time roles as Digital Marketing Executives, Social Media Managers or Designers at Cypher Digital." },
    ],
    faqs: [
      {
        q: "Are you offering marketing internships in Sri Lanka right now?",
        a: "Yes. Cypher Digital is actively hiring a Marketing Intern in Colombo, Sri Lanka for a 3–6 month placement. Apply via WhatsApp at +94 70 177 2626 with your CV or LinkedIn profile.",
      },
      {
        q: "Is this a paid marketing internship in Sri Lanka?",
        a: "Yes — this is a paid internship. Stipends range between LKR 20,000 and LKR 40,000 per month based on hours committed and skills demonstrated.",
      },
      {
        q: "Can university students apply for this digital marketing internship?",
        a: "Absolutely. The internship is designed for undergraduates and fresh graduates studying marketing, business, design, IT or related fields. The 3-day-per-week schedule fits around university timetables.",
      },
      {
        q: "Where is the marketing internship located?",
        a: "The internship is based at our Colombo studio in Sri Lanka, with some flexibility for hybrid work depending on the project.",
      },
      {
        q: "How long is the marketing internship?",
        a: "Internships run between 3 and 6 months. Top performers are offered full-time digital marketing jobs at Cypher Digital after the placement.",
      },
      {
        q: "Do I get a certificate after completing the internship?",
        a: "Yes. Every intern who completes the programme receives a Certificate of Internship Completion from Cypher Digital, plus a LinkedIn recommendation from your team lead.",
      },
      {
        q: "How do I apply for the marketing internship in Sri Lanka?",
        a: "Send your name, university, CV (or LinkedIn) and a short intro to +94 70 177 2626 on WhatsApp. We respond within 24 hours — no lengthy forms.",
      },
    ],
    whatsappMessage: "Hi, I'm applying for the Marketing Internship at Cypher Digital.",
    whatsappCta: "Apply for Internship",
    datePosted: "2026-05-25",
  },
  {
    slug: "social-media-jobs-sri-lanka",
    title: "Social Media Manager",
    shortTitle: "Social Media Manager",
    h1: "Social Media Manager Jobs in Sri Lanka — Hiring Now at Cypher Digital",
    metaTitle: "Social Media Manager Jobs in Sri Lanka 2026 | Social Media Jobs Colombo",
    metaDescription:
      "Looking for social media jobs in Sri Lanka? Cypher Digital is hiring a Social Media Manager in Colombo to run Facebook, Instagram & TikTok for 800+ brands. Apply via WhatsApp.",
    icon: Share2,
    type: "Full-time",
    employmentType: "FULL_TIME",
    location: "Colombo, Sri Lanka",
    summary:
      "One of the most in-demand social media manager jobs in Sri Lanka right now — plan content, run Facebook, Instagram and TikTok pages and grow engaged audiences for 800+ Sri Lankan brands at Cypher Digital, Colombo.",
    salaryRange: { min: 45000, max: 180000, currency: "LKR", unit: "MONTH" },
    seoIntro: [
      "Cypher Digital is hiring a Social Media Manager in Sri Lanka to join our Colombo team. If you're searching for social media jobs in Sri Lanka — or a serious social media manager vacancy in Colombo with real brands, real budgets and real creative freedom — this is one of the best opportunities in the country right now.",
      "As our Social Media Manager in Sri Lanka, you'll plan monthly content calendars, manage Facebook, Instagram, TikTok and LinkedIn pages, brief creatives, schedule posts, run organic growth and support paid social campaigns for 800+ Sri Lankan brands across Colombo, Kandy, Galle, Negombo and beyond.",
      "This is a full-time social media career opportunity in Sri Lanka inside Cypher360 — the country's most integrated marketing group covering digital marketing, events and production.",
    ],
    duties: [
      "Plan monthly social media content calendars for client brands",
      "Manage Facebook, Instagram, TikTok and LinkedIn pages day-to-day",
      "Brief graphic designers and video editors on creative assets",
      "Schedule posts, reels, stories and TikToks across multiple accounts",
      "Engage with followers, manage inboxes and respond to comments",
      "Track engagement, reach and follower growth and report monthly",
      "Support the performance team with boosted posts and paid social",
    ],
    requirements: [
      "1–3 years of hands-on social media management experience",
      "Strong understanding of Facebook, Instagram, TikTok and LinkedIn",
      "Experience writing captions in English and Sinhala",
      "Comfort briefing designers and editors on creative direction",
      "Familiarity with Meta Business Suite, Later, Buffer or similar tools",
      "Basic understanding of paid social and boosted post performance",
    ],
    perks: [
      "Competitive salary benchmarked against top social media jobs in Colombo",
      "Work on 800+ Sri Lankan brand pages across multiple industries",
      "Direct mentorship from Meta Blueprint certified specialists",
      "Clear growth path to Senior Social Media Manager / Content Lead roles",
      "Modern Colombo studio, latest scheduling and analytics tools",
      "Friendly studio culture with hybrid flexibility",
    ],
    whyJoin: [
      { title: "Sri Lanka's most diverse social media portfolio", body: "Restaurants, fashion, real estate, education, healthcare and FMCG — you'll manage pages across every major industry, not just one vertical." },
      { title: "Content that's measured, not just posted", body: "Our social content is tracked on reach, engagement and lead conversions — you'll learn how content choices affect real marketing ROI." },
      { title: "Fast career growth inside Cypher360", body: "Top performers move into Senior Social Media Manager, Content Lead or Account Director roles inside Sri Lanka's most integrated marketing group." },
    ],
    faqs: [
      {
        q: "Are you hiring Social Media Managers in Sri Lanka right now?",
        a: "Yes. Cypher Digital has an open Social Media Manager vacancy in Colombo, Sri Lanka on a full-time basis. Apply directly via WhatsApp at +94 70 177 2626 with your CV and sample pages you've managed.",
      },
      {
        q: "What is the average salary for a Social Media Manager in Sri Lanka?",
        a: "Social Media Manager salaries in Sri Lanka typically range between LKR 45,000 and LKR 180,000 per month depending on experience, the number of brand pages managed and proven engagement and growth results.",
      },
      {
        q: "What does a Social Media Manager at Cypher Digital actually do?",
        a: "You'll plan content calendars, manage Facebook, Instagram, TikTok and LinkedIn pages, brief designers and editors, schedule posts, engage with followers, manage inboxes and report monthly on reach, engagement and growth.",
      },
      {
        q: "Where is the Social Media Manager job located?",
        a: "The role is based at our Colombo studio in Sri Lanka with hybrid flexibility. Most social media managers are expected on-site at least 3 days per week.",
      },
      {
        q: "What experience do I need to apply for this social media job in Sri Lanka?",
        a: "1–3 years of hands-on social media management experience, comfort writing captions in English and Sinhala, and familiarity with Meta Business Suite or similar scheduling tools. Paid social experience is a strong plus.",
      },
      {
        q: "Do I need a marketing degree to apply?",
        a: "No degree required. We hire based on real results — the brand pages you've managed, the growth and engagement you've driven and the content samples in your portfolio matter far more than qualifications.",
      },
      {
        q: "How do I apply for this Social Media Manager vacancy in Sri Lanka?",
        a: "Send your name, CV or LinkedIn link and links to brand pages you've managed to +94 70 177 2626 on WhatsApp. We respond within 24 hours — no lengthy forms.",
      },
    ],
    whatsappMessage: "Hi, I'm applying for the Social Media Manager position at Cypher Digital.",
    whatsappCta: "Apply for Social Media Manager",
    datePosted: "2026-05-25",
  },
  {
    slug: "digital-marketing-manager-jobs-sri-lanka",
    title: "Digital Marketing Manager",
    shortTitle: "Digital Marketing Manager",
    h1: "Digital Marketing Manager Jobs in Sri Lanka — Hiring Now at Cypher Digital",
    metaTitle: "Digital Marketing Manager Jobs in Sri Lanka 2026 | Vacancy in Colombo",
    metaDescription:
      "Looking for Digital Marketing Manager jobs in Sri Lanka? Cypher Digital is hiring a Digital Marketing Manager in Colombo to lead Meta, Google & TikTok campaigns for 800+ brands. Apply via WhatsApp.",
    icon: Briefcase,
    type: "Full-time",
    employmentType: "FULL_TIME",
    location: "Colombo, Sri Lanka",
    summary:
      "One of the most senior digital marketing manager jobs in Sri Lanka right now — lead a team of performance marketers, strategists and creatives running Meta, Google and TikTok campaigns for 800+ Sri Lankan brands at Cypher Digital, Colombo.",
    salaryRange: { min: 120000, max: 200000, currency: "LKR", unit: "MONTH" },
    seoIntro: [
      "Cypher Digital is hiring a Digital Marketing Manager in Sri Lanka to lead our Colombo performance team. If you're searching for digital marketing manager jobs in Sri Lanka — or a serious digital marketing manager vacancy in Colombo with real budgets, real teams and real accountability — this is one of the best leadership opportunities in the country right now.",
      "As our Digital Marketing Manager in Sri Lanka, you'll lead a team of specialists, executives and interns running Facebook Ads, Instagram Ads, Google Ads, TikTok Ads and SEO campaigns for 800+ Sri Lankan brands across Colombo, Kandy, Galle and beyond. You'll own strategy, budgets, ROAS, client relationships and team growth — not just execute someone else's plan.",
      "This is a full-time digital marketing leadership opportunity in Sri Lanka inside Cypher360 — the country's most integrated marketing group covering digital marketing, events and production.",
    ],
    duties: [
      "Lead the digital marketing team — specialists, executives and interns",
      "Plan integrated Meta Ads, Google Ads, TikTok Ads and SEO strategies",
      "Own monthly performance — leads, ROAS, CPL — across 800+ brand accounts",
      "Manage client relationships, strategy calls and quarterly reviews",
      "Allocate and optimise monthly ad budgets from LKR 50K to LKR 5M+",
      "Mentor specialists and executives toward Meta Blueprint and Google Ads certifications",
      "Report weekly to senior leadership on team and campaign performance",
    ],
    requirements: [
      "4–8 years of hands-on digital marketing experience",
      "Proven track record managing Meta Ads and Google Ads budgets at scale",
      "Experience leading or mentoring a small marketing team",
      "Strong understanding of SEO, lead generation and full-funnel strategy",
      "Confident in client-facing strategy calls and quarterly business reviews",
      "Meta Blueprint and/or Google Ads certification strongly preferred",
      "Analytical mindset — comfort with GA4, Looker Studio and attribution",
    ],
    perks: [
      "Senior salary benchmarked against top digital marketing manager jobs in Colombo",
      "Lead real ad budgets across Meta Ads, Google Ads and TikTok Ads",
      "Direct seat at the leadership table inside Cypher360",
      "Clear growth path to Head of Digital / Performance Director roles",
      "Work on 800+ Sri Lankan brand campaigns across every major industry",
      "Friendly Colombo studio culture with hybrid flexibility",
    ],
    whyJoin: [
      { title: "Sri Lanka's most diverse campaign portfolio", body: "Restaurants, fashion, real estate, education, healthcare and FMCG — you'll lead strategy across every major industry, not just one vertical." },
      { title: "Real budgets, real teams, real accountability", body: "You'll own monthly Meta and Google Ads budgets ranging from LKR 50K to LKR 5M+, plus a team of specialists and executives — measured on leads, ROAS and CPL." },
      { title: "Leadership growth inside Cypher360", body: "Top managers move into Head of Digital, Performance Director or Account Director roles inside Sri Lanka's most integrated marketing group." },
    ],
    faqs: [
      {
        q: "Are you hiring Digital Marketing Managers in Sri Lanka right now?",
        a: "Yes. Cypher Digital has an open Digital Marketing Manager vacancy in Colombo, Sri Lanka on a full-time basis. Apply directly via WhatsApp at +94 70 177 2626 with your CV and team/campaign results.",
      },
      {
        q: "What is the average salary for a Digital Marketing Manager in Sri Lanka?",
        a: "Digital Marketing Manager salaries in Sri Lanka typically range between LKR 120,000 and LKR 200,000 per month depending on years of experience, team size managed, certifications and proven campaign ROI.",
      },
      {
        q: "What does a Digital Marketing Manager at Cypher Digital actually do?",
        a: "You'll lead the performance team, plan integrated Meta, Google, TikTok and SEO strategies, own monthly performance across 800+ brand accounts, manage client relationships and mentor specialists and executives toward certifications.",
      },
      {
        q: "Where is the Digital Marketing Manager job located?",
        a: "The role is based at our Colombo studio in Sri Lanka with hybrid flexibility. Managers are expected on-site at least 3 days per week for team and client reviews.",
      },
      {
        q: "What experience do I need to apply for this digital marketing manager job in Sri Lanka?",
        a: "4–8 years of hands-on digital marketing experience with a proven track record managing Meta Ads and Google Ads budgets at scale, plus experience leading or mentoring a small team. Meta Blueprint or Google Ads certification is strongly preferred.",
      },
      {
        q: "Do I need a marketing degree to apply?",
        a: "No degree required. We hire based on real results — the campaigns you've led, the budgets you've managed, the ROAS you've delivered and the teams you've grown matter far more than qualifications.",
      },
      {
        q: "How do I apply for this Digital Marketing Manager vacancy in Sri Lanka?",
        a: "Send your name, CV or LinkedIn link and a short summary of campaigns and teams you've led to +94 70 177 2626 on WhatsApp. We respond within 24 hours — no lengthy forms.",
      },
    ],
    whatsappMessage: "Hi, I'm applying for the Digital Marketing Manager position at Cypher Digital.",
    whatsappCta: "Apply for Digital Marketing Manager",
    datePosted: "2026-05-25",
  },
];

export const getVacancyBySlug = (slug?: string) =>
  vacancies.find((v) => v.slug === slug);