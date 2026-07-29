import { Palette, BarChart3, Film, GraduationCap, Share2, Briefcase, Handshake, Calculator, PenLine, type LucideIcon } from "lucide-react";

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
  kwIntro?: string;
  internalLinks?: { label: string; href: string; desc?: string }[];
  salaryGuide?: {
    intro: string[];
    levels: { name: string; exp: string; salary: string }[];
    note?: string;
  };
  softwareSkills?: {
    intro: string;
    items: { icon: string; name: string; desc: string }[];
  };
  portfolioSteps?: { intro: string; steps: string[] };
  careerPath?: {
    steps: { title: string; salary: string; exp: string }[];
    note?: string;
  };
  dayInLife?: {
    intro?: string;
    items: { time: string; task: string }[];
  };
  /** Months of experience required (0 for interns). Used in JobPosting schema. */
  monthsExperience?: number;
  /** Google-friendly education level, e.g. "bachelor degree", "high school". */
  educationRequirement?: string;
  /** Explicit skills list for JobPosting schema. Falls back to software skills + requirements. */
  skills?: string[];
}

export const vacancies: Vacancy[] = [
  {
    slug: "graphic-designer-jobs-sri-lanka",
    title: "Graphic Designer",
    shortTitle: "Graphic Designer",
    h1: "Graphic Designer Jobs in Sri Lanka — Hiring Now at Cypher Digital",
    metaTitle: "Graphic Designer Jobs in Sri Lanka 2026 | LKR 45K–150K | Cypher Digital",
    metaDescription:
      "Graphic designer jobs in Sri Lanka at Cypher Digital, Colombo. Work on 800+ brand campaigns. Salary LKR 45,000–150,000/month. Full-time & part-time. Apply via WhatsApp in 60 seconds.",
    icon: Palette,
    type: "Full-time / Part-time",
    employmentType: ["FULL_TIME", "PART_TIME"],
    location: "Colombo, Sri Lanka",
    summary:
      "One of the most in-demand graphic designer jobs in Sri Lanka right now — design social media creatives, brand identities and marketing collateral for 800+ Sri Lankan brands at Cypher Digital, Colombo.",
    salaryRange: { min: 45000, max: 150000, currency: "LKR", unit: "MONTH" },
    kwIntro:
      "Looking for graphic designer jobs in Sri Lanka? Cypher Digital is actively hiring across graphic design vacancies in Sri Lanka — from junior graphic designer jobs in Colombo to senior creative roles working on 800+ brand campaigns. Whether you specialise in social media design, brand identity or digital advertising visuals, there's a graphic design job in Colombo here for you. Part-time, full-time and freelance creative jobs in Sri Lanka available.",
    seoIntro: [
      "Cypher Digital is hiring a Graphic Designer in Sri Lanka to join our Colombo creative studio. If you're searching for graphic designer jobs in Sri Lanka — or graphic design jobs in Sri Lanka in general — with real brands, real budgets and real creative freedom, this is one of the best graphic design vacancies in Colombo right now.",
      "As our in-house Graphic Designer in Sri Lanka, you'll design social media creatives, ad visuals, brand identities, packaging and marketing collateral for 800+ Sri Lankan brands across Colombo, Kandy, Galle, Negombo and beyond. Your work goes live on paid Meta and Google Ads campaigns — not stuck in a folder.",
      "This isn't a one-off freelance gig. It's a full-time (or part-time) graphic design career opportunity in Sri Lanka inside Cypher360 — the country's most integrated marketing group covering digital marketing, events and production.",
    ],
    salaryGuide: {
      intro: [
        "Graphic designer salaries in Sri Lanka vary widely by experience, portfolio quality, specialisation and employer type. Agency graphic designers in Colombo earn differently from in-house designers at corporates, and freelance designers working internationally via Upwork can earn multiple times the local agency rate.",
        "According to 2026 market data, the median graphic designer salary in Sri Lanka is approximately LKR 90,000 per month. Entry-level designers start at LKR 23,000–45,000. Senior designers with strong portfolios and 5+ years of experience earn LKR 150,000–330,000. At Cypher Digital, we pay at the upper end of the Colombo agency market — LKR 45,000 to LKR 150,000 — based on your portfolio and what you can demonstrate, not years of experience alone.",
      ],
      levels: [
        { name: "Intern", exp: "0–6 months", salary: "LKR 20K–40K/mo" },
        { name: "Junior Designer", exp: "0–2 years", salary: "LKR 30K–65K/mo" },
        { name: "Mid-Level Designer", exp: "2–4 years", salary: "LKR 65K–120K/mo" },
        { name: "Senior Designer", exp: "4–7 years", salary: "LKR 120K–200K/mo" },
        { name: "Art Director", exp: "7+ years", salary: "LKR 180K–330K/mo" },
      ],
      note: "Cypher Digital salaries: LKR 45,000–150,000/month based on portfolio quality and demonstrated output. Adobe Creative Suite certifications and a proven social media design portfolio add LKR 15,000–40,000 to starting salary.",
    },
    softwareSkills: {
      intro:
        "The Sri Lankan digital agency market in 2026 expects graphic designers to be proficient in at least two to three of the tools below. For graphic designer jobs at digital marketing agencies in Colombo, social media design tools and ad creative production are the highest priority.",
      items: [
        { icon: "🎨", name: "Adobe Photoshop", desc: "Photo editing, digital art, social media post design. Essential for most agency roles in Sri Lanka." },
        { icon: "✏️", name: "Adobe Illustrator", desc: "Logo design, vector graphics, brand identity. Required for any brand or identity design work." },
        { icon: "📐", name: "Adobe InDesign", desc: "Brochures, catalogues, print layouts. Important for clients requiring print-ready marketing materials." },
        { icon: "🖼️", name: "Figma", desc: "UI/UX design, collaborative design, web mockups. Growing fast in Sri Lankan agency workflows." },
        { icon: "⚡", name: "Canva Pro", desc: "Fast social media content, client self-service templates. Every Sri Lankan agency uses Canva alongside Adobe." },
        { icon: "🎬", name: "Adobe After Effects", desc: "Motion graphics, animated social posts, ad animations. A strong differentiator for senior roles." },
      ],
    },
    portfolioSteps: {
      intro:
        "The #1 question we get from applicants for graphic designer jobs in Sri Lanka is: 'I don't have work experience — how do I get a portfolio?' Here is the practical answer. These five steps build a strong portfolio fast, with or without paid client work.",
      steps: [
        "Design 5 mock brand projects from scratch — pick 5 imaginary Sri Lankan businesses (a restaurant, a clothing brand, a tech startup, a salon, a gym) and design a complete brand identity for each: logo, colour palette, business card and three social media posts.",
        "Offer free or discounted design work to 2–3 local small businesses — this gives you real briefs, real feedback and real results you can show.",
        "Upload everything to Behance or Dribbble — these are the platforms Sri Lankan employers and recruiters check. A Behance profile with 10 well-presented projects is more compelling than a PDF portfolio sent by email.",
        "Recreate and improve existing Sri Lankan brand designs — take a real Sri Lankan brand and redesign their logo, social profile or ad creative. Show the before-and-after.",
        "Apply for Cypher Digital's Marketing Intern or Junior Graphic Designer role — working on 800+ brand campaigns builds a real portfolio faster than any other route.",
      ],
    },
    careerPath: {
      steps: [
        { title: "Intern / Junior Designer", salary: "LKR 20K–65K/mo", exp: "0–2 years" },
        { title: "Mid-Level Designer", salary: "LKR 65K–120K/mo", exp: "2–4 years" },
        { title: "Senior Designer", salary: "LKR 120K–200K/mo", exp: "4–7 years" },
        { title: "Art Director", salary: "LKR 180K–330K/mo", exp: "7+ years" },
        { title: "Creative Director", salary: "LKR 280K–500K+/mo", exp: "10+ years" },
      ],
      note:
        "At Cypher Digital, designers regularly advance one full level within 12–18 months. Working on 800+ brand campaigns across restaurants, fashion, real estate, education and healthcare means you gain more diverse design experience in one year than most designers get in three years at a single-brand in-house role. Senior graphic designer jobs in Sri Lanka and art director roles are most commonly filled from agency backgrounds for this reason.",
    },
    dayInLife: {
      intro:
        "What the actual daily work looks like — no vague job descriptions, just the real experience of working on live campaigns for 800+ Sri Lankan brands.",
      items: [
        { time: "9:00 AM", task: "Daily standup with the creative team — review live campaign performance, discuss any design changes needed based on overnight ad results." },
        { time: "9:30 AM", task: "Design social media posts for the week's content calendar — 3–5 clients, each with different brand guidelines, messaging and content themes." },
        { time: "11:00 AM", task: "Create Meta Ads creatives for a product launch — multiple size variations (1:1, 4:5, 9:16 Story) and A/B test versions for the media buyer." },
        { time: "1:30 PM", task: "Brand identity project — logo design and visual identity for a new client onboarding. Present concepts via Figma to the account manager." },
        { time: "3:00 PM", task: "Revisions based on client feedback — iterate quickly, maintain brand consistency, deliver updated files." },
        { time: "4:00 PM", task: "Create animated social post in After Effects for a restaurant client's weekend promotion — ready for scheduling by 5 PM." },
        { time: "5:00 PM", task: "Brief review for tomorrow's work, file organisation and handoff to the video team for any motion graphics requirements." },
      ],
    },
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
        q: "What is the graphic designer salary in Sri Lanka?",
        a: "Graphic designer salaries in Sri Lanka range from LKR 23,000 at entry level to LKR 330,000+ for senior designers in 2026. The median is approximately LKR 90,000 per month. At Cypher Digital, graphic designers earn LKR 45,000–150,000 per month depending on portfolio quality and experience.",
      },
      {
        q: "What software do I need for graphic designer jobs in Sri Lanka?",
        a: "The most in-demand design software for graphic designer jobs in Sri Lanka are Adobe Photoshop (photo editing, social posts), Adobe Illustrator (logos, vectors), Adobe InDesign (print layouts), Figma (UI/UX, collaboration), Canva Pro (fast social content) and After Effects (motion graphics). Proficiency in at least Photoshop, Illustrator and Canva is expected for most graphic design jobs in Colombo agencies.",
      },
      {
        q: "Do I need a degree for graphic designer jobs in Sri Lanka?",
        a: "No degree is required for graphic designer jobs at Cypher Digital. We hire based on portfolio quality and demonstrated design skills. A strong portfolio showing social media design, logo work and brand identity projects is more valuable than a formal qualification. Diplomas from SLIDA, NIBM or university design courses are valued but not mandatory.",
      },
      {
        q: "What is a junior graphic designer salary in Sri Lanka?",
        a: "Junior graphic designer salaries in Sri Lanka typically range from LKR 30,000 to LKR 65,000 per month for 0–2 years experience. At digital marketing agencies in Colombo, junior designers with strong portfolios can start at LKR 45,000–60,000. Salaries increase rapidly with demonstrated performance and client campaign results.",
      },
      {
        q: "Are there freelance graphic design jobs in Sri Lanka?",
        a: "Yes — Cypher Digital offers part-time and freelance graphic design arrangements for the right candidates. Freelance graphic designers in Sri Lanka typically charge LKR 2,000–15,000 per design depending on complexity. Experienced freelancers working across 3–5 clients can earn LKR 150,000–400,000 per month. Platforms like Upwork, Fiverr and 99designs also connect Sri Lankan designers with international clients.",
      },
      {
        q: "What does a graphic designer do at a digital marketing agency in Sri Lanka?",
        a: "At a digital marketing agency in Sri Lanka like Cypher Digital, graphic designers create social media posts for Facebook and Instagram, ad creatives for Meta Ads and Google Display campaigns, brand identity packages including logos and style guides, marketing materials like flyers and brochures, email newsletter designs, and video thumbnails for YouTube and TikTok. The role combines brand design with performance marketing creative.",
      },
      {
        q: "How do I build a graphic design portfolio in Sri Lanka?",
        a: "Create 5–10 mock brand projects (logos, social designs, marketing materials), offer free or discounted work to local small businesses for real client results, upload to Behance or Dribbble (Sri Lankan employers check these), design for social causes or local events to show range, and apply for Cypher Digital's internship to get real campaign work fast. A portfolio with 10–15 strong pieces beats a degree with no portfolio every time.",
      },
      {
        q: "What is the career path for a graphic designer in Sri Lanka?",
        a: "The typical graphic designer career path in Sri Lanka: Junior Graphic Designer (LKR 30K–65K, 0–2 years) → Mid-level Graphic Designer (LKR 65K–120K, 2–4 years) → Senior Graphic Designer (LKR 120K–200K, 4–7 years) → Art Director (LKR 180K–300K, 7+ years) → Creative Director (LKR 250K–500K+). At Cypher Digital, designers regularly advance one level within 12–18 months due to the high volume and variety of brand campaigns.",
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
    salaryRange: { min: 50000, max: 80000, currency: "LKR", unit: "MONTH" },
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
        a: "Digital Marketing Specialist salaries in Sri Lanka typically range between LKR 50,000 and LKR 80,000 per month depending on experience, platform certifications (Meta Blueprint, Google Ads) and proven campaign ROI.",
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
    metaTitle: "Digital Marketing Executive Jobs in Sri Lanka 2026 | LKR 45K–120K | Cypher Digital",
    metaDescription:
      "Digital marketing executive jobs in Sri Lanka at Cypher Digital, Colombo. Run Meta Ads, Google Ads & SEO campaigns for 800+ brands. Salary LKR 45K–120K/month. Apply in 60 seconds.",
    icon: Briefcase,
    type: "Full-time",
    employmentType: "FULL_TIME",
    location: "Colombo, Sri Lanka",
    summary:
      "One of the most in-demand Digital Marketing Executive jobs in Sri Lanka right now — execute Meta, Google and TikTok ad campaigns, manage social pages and report on real lead-generation results for 800+ Sri Lankan brands at Cypher Digital, Colombo.",
    salaryRange: { min: 45000, max: 120000, currency: "LKR", unit: "MONTH" },
    kwIntro:
      "Looking for digital marketing executive jobs in Sri Lanka? Cypher Digital is actively hiring across digital marketing executive vacancies in Sri Lanka — from entry-level digital marketing executive jobs in Colombo to senior executive roles managing 800+ brand campaigns. Whether you specialise in Meta Ads, Google Ads, TikTok Ads or SEO, there's a digital marketing executive job in Colombo here for you. Full-time digital marketing executive jobs in Sri Lanka with clear progression to Specialist level.",
    seoIntro: [
      "Cypher Digital is hiring a Digital Marketing Executive in Sri Lanka to join our Colombo performance team. If you're searching for digital marketing executive jobs in Sri Lanka — or a serious digital marketing executive vacancy in Colombo with real campaigns, real budgets and real career growth — this is one of the best opportunities open right now.",
      "As our Digital Marketing Executive in Sri Lanka, you'll execute Facebook Ads, Instagram Ads, Google Ads, TikTok Ads and SEO campaigns for 800+ Sri Lankan brands across Colombo, Kandy, Galle and beyond. You'll manage day-to-day campaign delivery, social media scheduling, lead tracking and monthly client reporting — the core executive work that keeps performance marketing running.",
      "This is a full-time digital marketing executive career opportunity in Sri Lanka inside Cypher360 — the country's most integrated marketing group covering digital marketing, events and production. Clear growth path from Digital Marketing Executive → Senior Executive → Digital Marketing Specialist → Performance Lead.",
    ],
    salaryGuide: {
      intro: [
        "Digital marketing executive salaries in Sri Lanka vary by experience, platform certifications, employer type and the number of client accounts managed. Agency executives in Colombo typically earn differently from in-house executives at corporates, and certified executives (Meta Blueprint, Google Ads) command meaningful premiums over uncertified peers.",
        "According to 2026 Glassdoor and market data, digital marketing executive salaries in Sri Lanka range from LKR 45,000 at entry level to LKR 120,000 for experienced executives. Senior digital marketing executives earn LKR 52,500–106,667 per month. At Cypher Digital, we pay LKR 45,000 to LKR 120,000 based on demonstrated campaign experience and certified platform skills.",
      ],
      levels: [
        { name: "Intern", exp: "0–6 months", salary: "LKR 20K–40K/mo" },
        { name: "Junior Executive", exp: "0–1 year", salary: "LKR 45K–65K/mo" },
        { name: "Digital Marketing Executive", exp: "1–3 years", salary: "LKR 65K–95K/mo" },
        { name: "Senior Executive", exp: "3–5 years", salary: "LKR 95K–120K/mo" },
        { name: "Digital Marketing Specialist", exp: "4+ years", salary: "LKR 90K–200K/mo" },
      ],
      note: "Cypher Digital salaries: LKR 45,000–120,000/month based on experience and certifications. Meta Blueprint and Google Ads certifications each add LKR 10,000–25,000 to starting salary negotiation. Executives managing 10+ active client accounts move to the upper end of the band fastest.",
    },
    softwareSkills: {
      intro:
        "The Sri Lankan digital agency market in 2026 expects digital marketing executives to be proficient in at least three to four of the platforms below. For digital marketing executive jobs at agencies in Colombo, paid ads platforms and analytics tools are the highest priority — not just social media scheduling.",
      items: [
        { icon: "📘", name: "Meta Ads Manager", desc: "Facebook and Instagram advertising. The most-used paid platform in Sri Lanka. Required for almost every executive role in Colombo." },
        { icon: "🔍", name: "Google Ads", desc: "Search, Display, Shopping and YouTube ads. Essential for any lead-generation-focused executive role." },
        { icon: "🎵", name: "TikTok Ads Manager", desc: "Fastest-growing paid platform in Sri Lanka. Increasingly required for Gen-Z targeting and FMCG brands." },
        { icon: "📊", name: "Google Analytics 4 (GA4)", desc: "Campaign reporting, conversion tracking, attribution. Free certification via Google Skillshop." },
        { icon: "🗓️", name: "Meta Business Suite / Buffer", desc: "Content scheduling, page management, comment monitoring. Daily-use tool for every executive." },
        { icon: "🛠️", name: "Ahrefs / SEMrush", desc: "Keyword research, competitor analysis, basic SEO tasks. Strong differentiator for executive roles." },
      ],
    },
    portfolioSteps: {
      intro:
        "The most common question from applicants for digital marketing executive jobs in Sri Lanka: 'I have no agency experience — how do I get hired?' Here is the practical answer. These five steps build a strong application fast, even with zero professional history.",
      steps: [
        "Complete Meta Blueprint Foundation and Google Ads certifications — both are free online and instantly add LKR 10,000–25,000 each to your starting salary negotiation. These are the credentials Sri Lankan agencies check first.",
        "Run a small ad campaign yourself — spend LKR 2,000–5,000 on a Facebook Ads campaign for a personal project, family business or community page. Screenshots of Ads Manager with real spend and real results beat any classroom certificate.",
        "Manage social media for a friend's business, NGO or small Sri Lankan brand for free — content calendar, scheduling, reporting. Build a 3-month case study showing follower growth, engagement and reach.",
        "Build a personal brand on LinkedIn — post weekly about Sri Lankan digital marketing trends, campaign analysis or platform updates. Recruiters and agency owners in Colombo actively search LinkedIn for executive candidates.",
        "Apply for Cypher Digital's paid Marketing Internship (LKR 20,000–40,000/month) — interns work on live client campaigns from week one, and 60%+ are promoted to Digital Marketing Executive within 3–6 months.",
      ],
    },
    careerPath: {
      steps: [
        { title: "Marketing Intern", salary: "LKR 20K–40K/mo", exp: "0–6 months" },
        { title: "Digital Marketing Executive", salary: "LKR 45K–120K/mo", exp: "0–3 years" },
        { title: "Digital Marketing Specialist", salary: "LKR 90K–200K/mo", exp: "3–5 years" },
        { title: "Digital Marketing Manager", salary: "LKR 150K–280K/mo", exp: "5–8 years" },
        { title: "Head of Digital / Director", salary: "LKR 250K–500K+/mo", exp: "8+ years" },
      ],
      note:
        "At Cypher Digital, executives advance to Specialist within 12–18 months because they get exposure to 800+ brand campaigns — far more variety than an in-house role at a single brand. Executives who add Google Ads certification on top of Meta Blueprint progress 30–40% faster. Senior digital marketing roles in Sri Lanka are almost always filled from agency executive backgrounds for this reason.",
    },
    dayInLife: {
      intro:
        "Real tasks, real timelines — not a job description. This is what the actual day-to-day work looks like for a Digital Marketing Executive at Cypher Digital.",
      items: [
        { time: "9:00 AM", task: "Morning standup — review overnight campaign performance across assigned client accounts, flag any underperforming ad sets and align the day's optimisation priorities with the Specialist." },
        { time: "9:30 AM", task: "Pull yesterday's lead and spend numbers from Meta Ads Manager and Google Ads, update client reporting dashboards, send morning performance snapshots to 3–4 priority clients via WhatsApp." },
        { time: "11:00 AM", task: "Launch new Meta Ads campaign for a restaurant client — ad set structure, audience targeting, creative upload, conversion tracking validation. Coordinate with the design team on any final creative tweaks." },
        { time: "12:30 PM", task: "Schedule the week's social media content for 3 client pages on Meta Business Suite — Reels, carousel posts, story sequences, caption copywriting in English and Sinhala." },
        { time: "2:00 PM", task: "Google Ads search campaign optimisation — negative keyword review, bid adjustments, ad copy A/B test setup for a real estate client." },
        { time: "3:30 PM", task: "Client call — walk through monthly performance report with a fashion brand client. Explain CPL improvements, recommend next month's budget allocation." },
        { time: "5:00 PM", task: "Comment and DM management for assigned brand pages, escalate any complex queries to senior team, file briefs for tomorrow's creative requirements." },
      ],
    },
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
        q: "What is the digital marketing executive salary in Sri Lanka?",
        a: "Digital marketing executive salaries in Sri Lanka range from LKR 45,000 at entry level to LKR 120,000 for experienced executives in 2026. Glassdoor data shows senior digital marketing executives earning LKR 52,500–106,667 per month. At Cypher Digital, digital marketing executives earn LKR 45,000–120,000 per month based on experience and certified platform skills. Meta Blueprint and Google Ads certifications each add LKR 10,000–25,000 to starting salary.",
      },
      {
        q: "What does a digital marketing executive do in Sri Lanka?",
        a: "A digital marketing executive in Sri Lanka runs day-to-day online marketing operations: setting up and managing Meta Ads (Facebook and Instagram) and Google Ads campaigns, managing social media pages, scheduling content, monitoring campaign performance, pulling weekly and monthly reports, conducting keyword research for SEO and communicating with clients. At a digital agency in Colombo, executives manage multiple client accounts simultaneously — building broad experience faster than in-house roles.",
      },
      {
        q: "What skills do I need for digital marketing executive jobs in Sri Lanka?",
        a: "Key skills for digital marketing executive jobs in Sri Lanka: Meta Ads Manager (Facebook and Instagram advertising), Google Ads (Search, Display, YouTube), Google Analytics 4 (GA4) for campaign reporting, basic SEO (on-page optimisation, keyword research), social media content scheduling (Meta Business Suite, Buffer, Hootsuite), copywriting for ad captions and social posts, and Excel or Google Sheets for reporting. Meta Blueprint and Google Ads certifications are the most valued formal credentials.",
      },
      {
        q: "Do I need a degree for digital marketing executive jobs in Sri Lanka?",
        a: "No degree is required for digital marketing executive jobs at Cypher Digital. We hire based on demonstrated skills and campaign results. A Meta Blueprint certification, Google Ads certification, and evidence of running real campaigns (even for personal projects or small businesses) is more valuable than a marketing degree with no practical experience. Business, marketing or IT degrees from SLIIT, NSBM or universities are valued but not required.",
      },
      {
        q: "What is the difference between a digital marketing executive and a digital marketing specialist in Sri Lanka?",
        a: "A digital marketing executive executes campaigns under direction — setting up ads, scheduling content, pulling reports, and optimising based on established strategy. A digital marketing specialist independently develops campaign strategy, owns budget allocation decisions, leads client communication and is accountable for campaign ROI. The executive role is the entry point that builds into specialist through 1–2 years of hands-on campaign management experience.",
      },
      {
        q: "How do I get a digital marketing executive job in Sri Lanka with no experience?",
        a: "To get a digital marketing executive job in Sri Lanka with no experience: (1) Complete Meta Blueprint Foundation and Google Ads certifications — both free online. (2) Run a small ad campaign yourself — even LKR 2,000 on Facebook Ads for a personal project demonstrates real platform experience. (3) Build a personal brand or manage social media for a friend's business. (4) Apply for Cypher Digital's paid Marketing Internship (LKR 20,000–40,000/month) — interns work on live client campaigns from day one. (5) Transition from internship to executive role within 3–6 months of demonstrated performance.",
      },
      {
        q: "What certifications help get digital marketing executive jobs in Sri Lanka?",
        a: "The most valued certifications for digital marketing executive jobs in Sri Lanka are: Meta Blueprint (Facebook and Instagram advertising — free online), Google Ads certification (Search, Display, Shopping, YouTube — free via Google Skillshop), Google Analytics 4 certification (free via Google Skillshop), HubSpot Inbound Marketing certification (free) and TikTok Ads Academy certification (free). Each certification adds LKR 10,000–25,000 to starting salary negotiation at most Colombo digital agencies.",
      },
      {
        q: "What is the career path from digital marketing executive in Sri Lanka?",
        a: "The career path from digital marketing executive in Sri Lanka: Marketing Intern → Digital Marketing Executive (LKR 45K–120K) → Digital Marketing Specialist (LKR 90K–200K) → Digital Marketing Manager (LKR 150K–280K) → Head of Digital / Marketing Director (LKR 250K–500K+). At Cypher Digital, executives regularly advance to specialist level within 12–18 months due to the volume and variety of live campaign experience gained working across 800+ brand accounts.",
      },
      {
        q: "What platforms do digital marketing executives use in Sri Lanka?",
        a: "Digital marketing executives at Sri Lankan agencies work daily on: Meta Ads Manager (Facebook and Instagram), Google Ads, TikTok Ads Manager, Google Analytics 4, Google Search Console, Meta Business Suite, scheduling tools (Buffer, Later, Hootsuite), Canva for basic creative, and Excel or Google Sheets for reporting. At Cypher Digital, executives also use project management tools, client reporting dashboards and SEO tools including Ahrefs and SEMrush.",
      },
      {
        q: "Is digital marketing executive a good job in Sri Lanka?",
        a: "Yes — digital marketing executive is one of the best entry-to-mid career jobs in Sri Lanka in 2026. Digital ad spend in Sri Lanka is growing 20–25% annually. Demand for trained campaign managers consistently exceeds supply. The role offers fast career progression, measurable results that directly support salary negotiation and international remote earning potential for those who develop specialist skills. Starting at LKR 45,000–120,000 with clear progression to LKR 200,000+ as a specialist makes it one of the strongest career paths for Colombo-based graduates.",
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
    metaTitle: "Video Editor Jobs in Sri Lanka 2026 | LKR 45K–150K | Cypher Digital",
    metaDescription:
      "Video editor jobs in Sri Lanka at Cypher Digital, Colombo. Edit Reels, TikToks, YouTube ads & brand films for 800+ brands. Salary LKR 45K–150K/month. Full-time & freelance. Apply now.",
    icon: Film,
    type: "Full-time / Freelance",
    employmentType: ["FULL_TIME", "CONTRACTOR"],
    location: "Colombo, Sri Lanka",
    summary:
      "One of the most in-demand Video Editor jobs in Sri Lanka right now — edit scroll-stopping reels, TikToks, YouTube ads and brand films for 800+ Sri Lankan brands at Cypher Digital, Colombo.",
    salaryRange: { min: 45000, max: 150000, currency: "LKR", unit: "MONTH" },
    kwIntro:
      "Looking for video editor jobs in Sri Lanka? Cypher Digital is actively hiring across video editing vacancies in Sri Lanka — from junior video editor jobs in Colombo to senior editor roles working on 800+ brand campaigns. Whether you specialise in Reels & TikTok short-form, Meta Ads creatives, YouTube long-form or motion graphics, there's a video editing job in Colombo here for you. Full-time, part-time and freelance video editor jobs in Sri Lanka available.",
    seoIntro: [
      "Cypher Digital is hiring a Video Editor in Sri Lanka to join our Colombo creative studio. If you're searching for video editor jobs in Sri Lanka with real brands, real budgets, and creative freedom — this is one of the best video editing vacancies in Colombo right now.",
      "As our in-house Video Editor in Sri Lanka, you'll cut high-performing short-form video content for Facebook, Instagram Reels, TikTok, YouTube Shorts and YouTube Ads — the same creatives that drive paid campaigns for 800+ Sri Lankan brands across Colombo, Kandy, Galle and beyond.",
      "This isn't a freelance gig hidden behind a job board. It's a full-time (or freelance) video editor career opportunity in Sri Lanka inside Cypher360 — the country's most integrated marketing group covering digital marketing, events, and production.",
    ],
    salaryGuide: {
      intro: [
        "Video editor salaries in Sri Lanka vary widely by experience, showreel quality, software skills and employer type. Agency video editors in Colombo earn differently from in-house editors at corporates, and freelance editors working internationally via Upwork can earn multiple times the local agency rate.",
        "According to 2026 PayScale and market data, video editor salaries in Sri Lanka range from LKR 45,000 at junior level to LKR 322,500+ for experienced editors. Early-career video editors earn a median of LKR 150,000 per month. At Cypher Digital, we pay LKR 45,000 to LKR 150,000 based on showreel quality and demonstrated editing ability — not years of experience alone.",
      ],
      levels: [
        { name: "Intern", exp: "0–6 months", salary: "LKR 20K–45K/mo" },
        { name: "Junior Editor", exp: "0–2 years", salary: "LKR 45K–75K/mo" },
        { name: "Video Editor", exp: "2–4 years", salary: "LKR 75K–130K/mo" },
        { name: "Senior Editor", exp: "4–7 years", salary: "LKR 130K–220K/mo" },
        { name: "Production Manager", exp: "6+ years", salary: "LKR 180K–300K/mo" },
      ],
      note: "Cypher Digital salaries: LKR 45,000–150,000/month based on showreel quality. After Effects motion graphics skills add LKR 15,000–40,000 to starting salary. Editors who add colour grading and sound design earn 20–40% more than pure cutters.",
    },
    softwareSkills: {
      intro:
        "The Sri Lankan digital agency market in 2026 expects video editors to be proficient in at least two of the tools below. For video editor jobs at digital marketing agencies in Colombo, social-media-native editing tools and short-form content fluency are the highest priority — not film school software.",
      items: [
        { icon: "🎬", name: "Adobe Premiere Pro", desc: "Industry standard for social media, ad and brand film editing. Required for most agency video editor roles in Sri Lanka." },
        { icon: "🎨", name: "DaVinci Resolve", desc: "Professional colour grading and post-production. Growing fast in Sri Lankan agency workflows for premium brand content." },
        { icon: "✨", name: "Adobe After Effects", desc: "Motion graphics, animated titles and visual effects. A strong differentiator — editors with AE earn 20–40% more." },
        { icon: "📱", name: "CapCut", desc: "TikTok and Reels optimised editing. Fast, template-based, platform-native. Essential for high-volume social content." },
        { icon: "🍎", name: "Final Cut Pro", desc: "Mac-based production teams. Fast export and proxy workflows. Used by YouTube-first content teams in Sri Lanka." },
        { icon: "🔊", name: "Adobe Audition / Sound", desc: "Audio mixing, music selection, dialogue cleaning. Editors with sound design skills produce better-performing ads." },
      ],
    },
    portfolioSteps: {
      intro:
        "The most common question from applicants for video editor jobs in Sri Lanka: 'I don't have agency experience — how do I get a showreel that gets me hired?' Here is the practical answer from our hiring team. These five steps build a strong showreel fast, with or without paid client work.",
      steps: [
        "Edit 5 sample videos across different formats — a Reel-style social video, a talking-head interview with captions and lower thirds, a product showcase with music and motion graphics, a short TVC-style brand film, and a YouTube long-form edit. Variety demonstrates range.",
        "Offer free editing to local businesses, YouTubers or content creators in Sri Lanka — real footage, real briefs, real feedback. A properly edited video for a local restaurant or clothing brand is more compelling to an agency than a technically perfect personal project.",
        "Upload your best 3–5 pieces as a showreel to YouTube (unlisted or public) and link it clearly in your application. Vimeo is the professional standard. A Dropbox folder of raw files is not a showreel — edit it into a 60–90 second highlight reel.",
        "Recreate a trending Sri Lankan brand video in your own style — take a real local brand ad and re-edit it with different pace, music and cuts. Show the original alongside your version to demonstrate commercial understanding and creative initiative.",
        "Apply for Cypher Digital's paid internship to get real campaign footage fast — interns edit live campaign content within their first two weeks, and every piece that goes live becomes portfolio material with real performance data attached.",
      ],
    },
    careerPath: {
      steps: [
        { title: "Intern / Junior Editor", salary: "LKR 20K–75K/mo", exp: "0–2 years" },
        { title: "Video Editor", salary: "LKR 75K–130K/mo", exp: "2–4 years" },
        { title: "Senior Video Editor", salary: "LKR 130K–220K/mo", exp: "4–7 years" },
        { title: "Video Production Manager", salary: "LKR 180K–300K/mo", exp: "6+ years" },
        { title: "Head of Content", salary: "LKR 250K–500K+/mo", exp: "10+ years" },
      ],
      note:
        "At Cypher Digital, video editors advance quickly because of the sheer volume and variety of content produced. Working on 800+ brand campaigns means an editor here gets more varied editing experience in one year than most get in three years at a single-brand role. Senior video editor jobs in Sri Lanka are almost always filled from agency backgrounds. Editors who add After Effects motion graphics to their skill set advance 30–40% faster.",
    },
    dayInLife: {
      intro:
        "Real tasks, real timelines — not a job description. This is what the actual work looks like day to day at Cypher Digital.",
      items: [
        { time: "9:00 AM", task: "Daily creative standup — review overnight ad performance, identify which video formats are outperforming and brief the day's editing priorities accordingly." },
        { time: "9:30 AM", task: "Edit 3 Instagram Reels for a restaurant client — raw footage from yesterday's shoot, music selection, caption overlay, and colour grade. Delivered in 9:16 and 4:5 formats." },
        { time: "11:00 AM", task: "Cut 2 Meta Ads video creative variants for a fashion brand campaign — 15-second and 30-second versions, hook-first edit structure, subtitle burn-in for sound-off viewing." },
        { time: "12:30 PM", task: "After Effects work — animate logo reveal and kinetic title sequence for a brand film intro. Export as transparent background for compositing." },
        { time: "2:00 PM", task: "TikTok content edit for an FMCG client — trending audio, fast-cut rhythm, on-screen text, and product close-up sequence. Optimised for first-3-second retention." },
        { time: "3:30 PM", task: "Colour grade and audio mix for a corporate brand film — grade to cinematic LUT, balance dialogue audio, score with licensed music, export in 4K for broadcast and compressed for web." },
        { time: "5:00 PM", task: "File delivery, upload to client review links, feedback review, and brief check for tomorrow's content calendar shoots." },
      ],
    },
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
        q: "What is the video editor salary in Sri Lanka?",
        a: "Video editor salaries in Sri Lanka range from LKR 45,000 at junior level to LKR 322,500+ for experienced editors in 2026 according to PayScale data. Early-career video editors earn a median of LKR 150,000 per month. At Cypher Digital, video editors earn LKR 45,000–150,000 per month depending on showreel quality and experience level.",
      },
      {
        q: "What software do I need for video editor jobs in Sri Lanka?",
        a: "The most required software for video editor jobs at digital agencies in Sri Lanka: Adobe Premiere Pro (industry standard for social media and ad editing), DaVinci Resolve (colour grading and professional post-production), Adobe After Effects (motion graphics and animated titles), CapCut (short-form social media content, especially TikTok and Reels), and Final Cut Pro (Mac-based production teams). Proficiency in Premiere Pro and at least one short-form editing tool is expected for most agency video editor roles in Colombo.",
      },
      {
        q: "Do I need a degree for video editor jobs in Sri Lanka?",
        a: "No degree is required for video editor jobs at Cypher Digital. We hire based on showreel quality and demonstrated editing skills. A showreel of 5–10 edited video projects — Reels, TikToks, brand films or ad content — is far more important than any formal qualification. Media and communications degrees from SLIDA, ICBT or universities are valued but not required.",
      },
      {
        q: "Are there freelance video editing jobs in Sri Lanka?",
        a: "Yes — Cypher Digital offers freelance and part-time video editing arrangements for experienced editors. Freelance video editors in Sri Lanka typically charge LKR 3,000–25,000 per video depending on complexity and duration. Experienced freelancers working across multiple clients earn LKR 150,000–500,000 per month. International remote video editing work is also available through platforms including Upwork, Fiverr and Freelancer.",
      },
      {
        q: "What does a video editor do at a digital marketing agency in Sri Lanka?",
        a: "At Cypher Digital, video editors produce: short-form social media content for Instagram Reels and TikTok (15–90 seconds), Meta Ads video creatives in multiple formats and aspect ratios, YouTube ad content (6-second bumpers, 15-second skippable, and long-form), brand films and corporate video productions, motion graphics and animated titles in After Effects, and video thumbnails for YouTube and social platforms. All content is performance-tested in live ad campaigns.",
      },
      {
        q: "How do I build a video editing portfolio in Sri Lanka?",
        a: "To build a video editing showreel in Sri Lanka: (1) Edit 5–10 sample videos across different formats — a brand TVC, a Reel, a YouTube ad, and a talking-head interview edit. (2) Offer free editing to local businesses, YouTubers or content creators for real-world footage. (3) Upload your best work to YouTube as a showreel compilation or to Vimeo as a professional portfolio. (4) Edit trending content in CapCut or Premiere Pro to show social media format fluency. (5) Apply for Cypher Digital's internship to get live campaign footage and real performance data.",
      },
      {
        q: "What is the career path for a video editor in Sri Lanka?",
        a: "The video editor career path in Sri Lanka: Junior Video Editor (LKR 30K–65K, 0–2 years) → Video Editor (LKR 65K–120K, 2–4 years) → Senior Video Editor (LKR 120K–200K, 4–7 years) → Video Production Manager (LKR 180K–300K, 6+ years) → Head of Content / Creative Director (LKR 250K–500K+). At Cypher Digital, editors working on 800+ brand campaigns regularly advance within 12–18 months due to the volume and variety of content produced.",
      },
      {
        q: "Is video editing a good career in Sri Lanka?",
        a: "Yes — video editing is one of the fastest-growing careers in Sri Lanka in 2026. Demand for short-form video content for TikTok, Instagram Reels and YouTube has increased dramatically. Every business with a social media presence needs video content regularly. Skilled video editors who understand social media platform optimisation are in short supply across Colombo's growing digital agency market. Experienced editors can also earn significantly more through international remote work on Upwork.",
      },
      {
        q: "What is the difference between a video editor and a videographer in Sri Lanka?",
        a: "A videographer captures raw footage — operating cameras, setting up lighting, and recording content on location. A video editor takes raw footage and transforms it into a finished video — cutting, colour grading, adding music, motion graphics, subtitles and sound design in post-production. Some professionals do both (shooter-editors), but in agency environments in Sri Lanka these roles are typically separate. Cypher Digital hires dedicated video editors focused on post-production for social media and digital advertising.",
      },
      {
        q: "Can I work as a remote video editor in Sri Lanka?",
        a: "Yes — video editing is one of the most remote-friendly careers in Sri Lanka. Cypher Digital offers remote flexibility for freelance and part-time editors. International remote video editing work for UAE, UK, Australian and US clients is accessible through Upwork and Fiverr. Sri Lankan video editors working internationally typically earn USD 5–25 per hour, significantly above local agency rates.",
      },
      {
        q: "How do I apply for this Video Editor vacancy in Sri Lanka?",
        a: "Send your name, showreel link (YouTube, Vimeo or Drive) and a short intro to +94 70 177 2626 on WhatsApp. We respond within 24 hours — no lengthy forms.",
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
    h1: "Marketing Internship in Sri Lanka — Hiring Now at Cypher Digital",
    metaTitle: "Marketing Internship in Sri Lanka 2026 | Paid LKR 20K–40K | Cypher Digital",
    metaDescription:
      "Paid marketing internship in Sri Lanka 2026. Cypher Digital is hiring digital marketing interns in Colombo — Meta Ads, Google Ads, social & design for 800+ brands. Stipend LKR 20K–40K. Apply via WhatsApp in 60 seconds.",
    icon: GraduationCap,
    type: "Internship (3–6 months)",
    employmentType: "INTERN",
    location: "Colombo, Sri Lanka",
    summary:
      "One of the best marketing internships in Sri Lanka — a hands-on, paid internship in Colombo where you work alongside our team on live client campaigns for 800+ Sri Lankan brands.",
    salaryRange: { min: 20000, max: 40000, currency: "LKR", unit: "MONTH" },
    kwIntro:
      "Looking for a marketing internship in Sri Lanka? Cypher Digital is hiring a paid Marketing Intern in Colombo — hands-on Meta Ads, Google Ads, social media and design work across 800+ Sri Lankan brands. Open to undergraduates, fresh graduates, SLIM/CIM students and gap-year applicants. Stipend LKR 20,000–40,000/month, 3–6 months, flexible 3-days/week schedule, with a clear path to a full-time digital marketing job.",
    seoIntro: [
      "Cypher Digital is offering a Marketing Internship in Sri Lanka for students and fresh graduates who want to break into digital marketing the right way. If you're searching for a marketing internship in Colombo, a digital marketing internship in Sri Lanka, or a social media internship near you — this is one of the most hands-on internship opportunities in the country right now.",
      "As a Marketing Intern at Cypher Digital, you'll work on real Facebook, Instagram, TikTok and Google Ads campaigns for 800+ Sri Lankan brands across restaurants, fashion, education, real estate and healthcare. You'll learn how professional marketers plan, launch, optimise and report on paid campaigns — not just theory from a textbook.",
      "This isn't a coffee-fetching, photocopy-printing internship. It's a structured 3–6 month digital marketing internship in Sri Lanka inside Cypher360 — the country's most integrated marketing group — with a clear path to convert into a full-time role.",
    ],
    salaryGuide: {
      intro: [
        "Marketing internship stipends in Sri Lanka in 2026 typically range from unpaid to LKR 45,000/month depending on the agency, the intern's skills, and the number of days committed. At Cypher Digital, every marketing internship is paid, with the stipend scaling based on experience and hours.",
        "Below is a realistic guide to what marketing interns and junior marketers earn in Sri Lanka right now.",
      ],
      levels: [
        { name: "Part-time Intern", exp: "3 days/week", salary: "LKR 20K–25K" },
        { name: "Full-time Intern", exp: "5 days/week", salary: "LKR 30K–40K" },
        { name: "Junior Marketer", exp: "Post-internship", salary: "LKR 50K–70K" },
        { name: "Marketing Executive", exp: "1–2 years", salary: "LKR 70K–110K" },
        { name: "Senior Marketer", exp: "3+ years", salary: "LKR 120K–200K+" },
      ],
      note: "Top-performing Cypher Digital interns are offered a full-time Digital Marketing Executive role at LKR 50K–80K/month immediately after the internship — no gap year, no second round.",
    },
    softwareSkills: {
      intro: "You don't need to master these before applying — we train interns on the tools used daily inside Sri Lanka's top digital marketing agencies. Familiarity with any of them is a strong plus.",
      items: [
        { icon: "📘", name: "Meta Ads Manager", desc: "Launch and monitor Facebook and Instagram ads for real Sri Lankan brands." },
        { icon: "🔍", name: "Google Ads", desc: "Learn Search, Display and YouTube campaigns hands-on with live budgets." },
        { icon: "🎨", name: "Canva & Photoshop", desc: "Design ad creatives, stories and reels for client social pages." },
        { icon: "🎬", name: "CapCut & Premiere", desc: "Edit short-form Reels and TikToks for restaurants, fashion and education brands." },
        { icon: "📊", name: "Google Analytics 4", desc: "Track website visitors, leads and conversions for e-commerce clients." },
        { icon: "📅", name: "Meta Business Suite", desc: "Schedule content, manage inboxes and pull page insights for client accounts." },
      ],
    },
    portfolioSteps: {
      intro: "You don't need a fancy CV to land a marketing internship in Sri Lanka — you need proof you can execute. Here's how to build a portfolio that gets you shortlisted at Cypher Digital.",
      steps: [
        "Pick 2–3 Sri Lankan brands you use daily (a café, a boutique, a tuition class) and rewrite their Instagram bio + last 3 captions.",
        "Design 3 Instagram carousels or Reels covers in Canva for those brands — export them as JPGs into one PDF.",
        "Launch one LKR 500 boost on your own or a friend's Facebook page and screenshot the reach and engagement report.",
        "Write a 300-word LinkedIn post explaining what you learnt from that LKR 500 boost — this becomes proof you understand ads.",
        "Put the PDF, screenshots and LinkedIn link into a Google Drive folder and share the link on WhatsApp when you apply.",
      ],
    },
    careerPath: {
      steps: [
        { title: "Marketing Intern", salary: "LKR 20K–40K", exp: "0–6 months" },
        { title: "Junior Executive", salary: "LKR 50K–70K", exp: "6–12 months" },
        { title: "Marketing Executive", salary: "LKR 70K–110K", exp: "1–2 years" },
        { title: "Senior Executive", salary: "LKR 120K–160K", exp: "3–4 years" },
        { title: "Marketing Manager", salary: "LKR 180K–300K+", exp: "5+ years" },
      ],
      note: "A marketing internship in Sri Lanka is the fastest, most predictable route into a full digital marketing career. Interns who convert at Cypher Digital typically hit LKR 100K/month within 18–24 months of joining.",
    },
    dayInLife: {
      intro: "Every day is different, but here's what a typical Wednesday looks like for a marketing intern at our Colombo studio.",
      items: [
        { time: "9:00 AM", task: "Daily stand-up with your team lead. Review yesterday's ad performance and what's shipping today." },
        { time: "9:30 AM", task: "Pull ad reports from Meta Ads Manager and Google Ads for 3 client accounts — a restaurant, a boutique and a school." },
        { time: "11:00 AM", task: "Design 4 Instagram story slides in Canva for a client campaign, using their brand kit." },
        { time: "12:30 PM", task: "Lunch with the team — mostly interns and junior execs debating which Reel format actually converts." },
        { time: "1:30 PM", task: "Sit in on a client call with your mentor and take notes on what the client wants next month." },
        { time: "3:00 PM", task: "Help edit a 15-second TikTok for a food brand in CapCut and get feedback from the senior editor." },
        { time: "5:00 PM", task: "Write your daily log — what you shipped, what you learnt, what you'd try differently tomorrow." },
      ],
    },
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
      {
        q: "What is the average stipend for a marketing internship in Sri Lanka?",
        a: "Marketing internship stipends in Sri Lanka range from unpaid up to around LKR 45,000/month in 2026. At Cypher Digital, part-time interns earn LKR 20,000–25,000 (3 days/week) and full-time interns earn LKR 30,000–40,000 (5 days/week). Every internship here is paid.",
      },
      {
        q: "Do I need experience to apply for a digital marketing internship?",
        a: "No. This is an entry-level internship — you don't need prior agency experience. What we look for is a basic understanding of Instagram, TikTok and Facebook, comfort with Canva or any editing tool, and a willingness to learn Meta Ads and Google Ads on the job.",
      },
      {
        q: "Can SLIM, CIM or IPM students apply for this marketing internship?",
        a: "Yes. Students studying SLIM (Sri Lanka Institute of Marketing), CIM (Chartered Institute of Marketing), IPM, or any university marketing/business degree are strongly encouraged to apply. The internship counts toward your practical/industry training requirements.",
      },
      {
        q: "Is this remote, hybrid or on-site?",
        a: "The marketing internship is primarily on-site at our Colombo studio because you learn fastest by sitting next to senior marketers. We offer some hybrid flexibility once you've completed the first month of onboarding.",
      },
      {
        q: "Can I convert this internship into a full-time digital marketing job?",
        a: "Yes — and most of our top interns do. Around 70% of Cypher Digital marketing interns are offered a full-time Digital Marketing Executive role at LKR 50,000–80,000/month after the placement, based on performance during the 3–6 month programme.",
      },
      {
        q: "What skills will I actually learn during the internship?",
        a: "You'll learn Meta Ads Manager, Google Ads, Google Analytics 4, Canva/Photoshop, CapCut/Premiere, content planning, brief writing, campaign reporting and client communication — the exact stack used at every top digital marketing agency in Sri Lanka.",
      },
      {
        q: "How competitive is it to get a marketing internship in Sri Lanka?",
        a: "Reasonably competitive — the best paid internships in Colombo get 30–80 applicants per opening. The candidates who get shortlisted usually share a simple portfolio (a Canva PDF, a boosted post screenshot, or a LinkedIn write-up) instead of just a CV. See the portfolio-building steps above.",
      },
    ],
    internalLinks: [
      { label: "Digital Marketing Specialist", href: "/careers/digital-marketing-jobs-sri-lanka", desc: "The full-time role most of our top interns convert into after 3–6 months." },
      { label: "Content Specialist", href: "/careers/content-specialist-jobs-sri-lanka", desc: "For interns who fall in love with captions, blogs and ad copy." },
      { label: "Graphic Designer", href: "/careers/graphic-designer-jobs-sri-lanka", desc: "For design-leaning interns who want a full-time creative career." },
      { label: "Finance Internship", href: "/careers/finance-internship-sri-lanka", desc: "Our other paid internship — accounts, invoicing and reporting." },
    ],
    whatsappMessage: "Hi, I'm applying for the Marketing Internship at Cypher Digital.",
    whatsappCta: "Apply for Internship",
    datePosted: "2026-05-25",
  },
  {
    slug: "internship-programme-sri-lanka",
    title: "Intern (Internship Programme)",
    shortTitle: "Internship Programme",
    h1: "Internship Programme in Sri Lanka — Learn the Whole Business, From Intern to Management Trainee",
    metaTitle: "Internship Programme in Sri Lanka 2026 | Cypher Digital",
    metaDescription:
      "The best all-round internship programme in Sri Lanka. Start as an intern at Cypher Digital in Colombo and learn the whole business — operations, sales and marketing — guided all the way to management trainee. No experience needed. Apply via WhatsApp.",
    icon: GraduationCap,
    type: "Paid Internship · Intern → Management Trainee",
    employmentType: ["INTERN", "FULL_TIME"],
    location: "Colombo, Sri Lanka",
    summary:
      "The best internship programme in Sri Lanka isn't one that traps you in a single task. Start as an intern at Cypher Digital and learn the whole business — operations, sales and marketing — rotating through every real section of the company, guided step by step all the way to management trainee. If you're just starting out and haven't figured out your direction yet, this is the place to try everything and find it.",
    salaryRange: { min: 20000, max: 40000, currency: "LKR", unit: "MONTH" },
    kwIntro:
      "Searching for an internship in Sri Lanka, a business internship in Colombo, or a way to start your career and figure out what you're good at? Cypher Digital's Internship Programme is a whole-business pathway — you rotate through operations, sales and marketing, guided by a dedicated mentor, and grow from intern to management trainee. No experience needed — perfect for anyone who hasn't decided their direction yet.",
    seoIntro: [
      "If you're searching for an internship in Sri Lanka, a business internship in Colombo, or simply a way to start your career and figure out what you're good at — this is built for you.",
      "Most internships in Sri Lanka put you in one corner doing one repetitive task. Ours does the opposite. This is a structured, whole-business internship programme: you rotate through operations, sales and marketing, guided by a real mentor, and designed to grow you from intern to management trainee. You leave understanding how an actual company works end to end — not just one narrow skill.",
      "That's the real value for someone just starting out. You don't have to know your direction on day one. You try operations, you try sales, you try marketing — and you figure out where you fit while building genuine experience. You don't need a degree or prior experience. You need drive and the willingness to learn. We handle the rest.",
    ],
    softwareSkills: {
      intro: "This is what makes it the best all-round internship in Sri Lanka: you don't do one thing for six months. You rotate through the three real pillars of the business — operations, sales and marketing — and learn how each one works on live client accounts.",
      items: [
        { icon: "📱", name: "Marketing & Creative", desc: "Social media content, Meta & Google Ads support, copy, design, video and SEO basics." },
        { icon: "🤝", name: "Sales & Client Growth", desc: "How the agency wins new clients — pitching, proposals, client servicing, account management and upselling." },
        { icon: "⚙️", name: "Operations", desc: "How the company runs day to day — project coordination, timelines, quality control, reporting and workflows." },
        { icon: "💼", name: "Business Development", desc: "Lead follow-up, understanding what clients actually pay for and why, and turning conversations into contracts." },
        { icon: "📊", name: "Reporting & Systems", desc: "The tools, dashboards and processes that keep teams, clients and deadlines in sync." },
        { icon: "🎯", name: "Client Delivery", desc: "How real campaigns and projects get shipped end to end — from brief to launch to report." },
      ],
    },
    portfolioSteps: {
      intro: "You are never left to figure it out alone. Every stage of the internship programme has structure and a mentor.",
      steps: [
        "Stage 1 — Intern. Learn the fundamentals by doing, across operations, sales and marketing. A team lead mentors you and reviews your work every week. You shadow, then you do.",
        "Stage 2 — Management Trainee. Once you've proven you can be trusted with real work, you step up. You take ownership end to end, start managing pieces of accounts and projects, and keep rotating so you master the full picture.",
        "Stage 3 — Executive. Own accounts and outcomes, lead campaigns and projects, and start mentoring the next batch of interns.",
        "Stage 4 — Manager. Lead a squad of executives, own client P&L and shape the direction of your department.",
        "Several of our current team started exactly where you are now — this pathway is real, promoted from within.",
      ],
    },
    careerPath: {
      steps: [
        { title: "Intern", salary: "LKR 20K–40K", exp: "0–6 months" },
        { title: "Management Trainee", salary: "LKR 45K–65K", exp: "6–12 months" },
        { title: "Executive", salary: "LKR 70K–110K", exp: "1–2 years" },
        { title: "Senior Executive", salary: "LKR 120K–160K", exp: "3–4 years" },
        { title: "Manager", salary: "LKR 180K–300K+", exp: "5+ years" },
      ],
      note: "The Internship Programme is a pathway, not a placement. Top performers convert to full-time roles and get promoted from within — several of our current managers started as interns.",
    },
    dayInLife: {
      intro: "A schedule built around university timetables, a learning path that flexes to your strengths once you find your direction, and hybrid flexibility on some projects. Here's what a typical day inside the whole-business programme looks like.",
      items: [
        { time: "9:00 AM", task: "Daily stand-up with your rotation team. Review yesterday's work and what's shipping today across operations, sales and marketing." },
        { time: "9:30 AM", task: "Operations rotation — help coordinate a client project, update the delivery tracker or pull a status report." },
        { time: "11:00 AM", task: "Sit in on a live sales pitch or client call with your mentor and take structured notes on how deals are actually won." },
        { time: "12:30 PM", task: "Lunch with the team — interns, trainees and execs debating what's converting for clients this week." },
        { time: "1:30 PM", task: "Marketing rotation — schedule social content, draft ad copy, or support a live Meta / Google Ads campaign." },
        { time: "3:30 PM", task: "Weekly mentor review. Your team lead walks through your work across all three pillars and the next skill to unlock." },
        { time: "5:00 PM", task: "Log what you shipped, what you learnt, and what you'd try differently tomorrow." },
      ],
    },
    duties: [
      "Start on real work in your first weeks — no coffee runs",
      "Rotate through operations, sales and marketing to learn the whole company",
      "Support live campaigns, client pitches and day-to-day delivery",
      "Take on more ownership as you move from intern to management trainee",
      "Work with a mentor who reviews your progress and coaches you weekly",
    ],
    requirements: [
      "Students, fresh graduates and career-starters in or around Colombo",
      "Especially anyone still figuring out which career path suits them",
      "No degree or prior experience required — we hire on attitude and drive",
      "Eager to learn, coachable, and ready to take initiative",
      "Good communication in English and Sinhala (Tamil a plus)",
    ],
    perks: [
      "A whole-business education — operations, sales and marketing in one programme",
      "The intern-to-management-trainee pathway — a real career, not a dead-end internship",
      "The chance to figure out your strengths before you commit to a direction",
      "One-on-one mentorship from experienced professionals",
      "A recognised place to start when no one else gives you a first chance",
      "Certificate of completion and a LinkedIn recommendation",
      "Exposure to Cypher360 — Sri Lanka's most integrated marketing group",
      "A genuine route to a full-time role, promoted from within",
    ],
    whyJoin: [
      { title: "You learn the whole business", body: "Operations, sales and marketing — not one narrow task. It's the broadest, most valuable start you can get." },
      { title: "Perfect if you haven't decided your path", body: "Try everything, discover what you're good at, and choose your direction with real experience behind you." },
      { title: "You're guided the whole way", body: "A dedicated mentor and weekly reviews at every stage. You're never left to sink or swim." },
      { title: "Built to grow you, not use you", body: "A clear intern → management trainee → manager pathway. You start with nothing and leave with a career." },
    ],
    faqs: [
      { q: "What makes this the best internship programme in Sri Lanka?", a: "You learn the whole business — operations, sales and marketing — instead of one repetitive task. You rotate through every section with a dedicated mentor, and follow a clear pathway from intern to management trainee. It's the broadest, most challenging start to a career you can get in Sri Lanka." },
      { q: "Will I learn sales and operations too, or just marketing?", a: "All three. The programme is built around operations, sales and marketing, so you understand how a real company runs end to end. That whole-business exposure is exactly what prepares you for management trainee level." },
      { q: "I don't know what career I want yet — is this right for me?", a: "Yes — that's who it's for. By trying operations, sales and marketing hands-on, you discover your strengths and figure out your direction while building real experience, instead of guessing from the outside." },
      { q: "Do I need experience to apply for the internship?", a: "No. The programme is designed for people starting out with no experience. We train you from scratch through real, on-the-job work. Attitude and willingness to learn matter most." },
      { q: "Is the internship flexible for university students?", a: "Yes. The schedule is built around university timetables, and the learning path flexes to your strengths, with hybrid flexibility on some projects." },
      { q: "Is it a paid internship?", a: "Yes, this is a paid internship with a monthly stipend that grows as you move from intern to management trainee." },
      { q: "Can the internship lead to a full-time job?", a: "Yes. The programme is a pathway: intern → management trainee → executive → manager. Top performers convert to full-time roles, promoted from within." },
      { q: "How do I apply for the internship in Sri Lanka?", a: "Send your name and a short intro to +94 70 177 2626 on WhatsApp. We reply within 24 hours — no lengthy forms, no experience needed." },
    ],
    internalLinks: [
      { label: "Marketing Internship", href: "/careers/marketing-internship-sri-lanka", desc: "Our focused digital marketing internship — social, ads and design." },
      { label: "Finance Internship", href: "/careers/finance-internship-sri-lanka", desc: "Our paid finance & accounts internship for CIMA/ACCA/AAT students." },
      { label: "Digital Marketing Specialist", href: "/careers/digital-marketing-jobs-sri-lanka", desc: "The full-time role many management trainees convert into." },
      { label: "Graphic Designer", href: "/careers/graphic-designer-jobs-sri-lanka", desc: "For design-leaning trainees who want a full-time creative career." },
    ],
    whatsappMessage: "Hi, I'm applying for the Internship Programme at Cypher Digital.",
    whatsappCta: "Apply for Internship Programme",
    datePosted: "2026-07-01",
  },
  {
    slug: "finance-internship-sri-lanka",
    title: "Finance Intern",
    shortTitle: "Finance Internship",
    h1: "Finance Internship in Sri Lanka — Apply Now at Cypher Digital",
    metaTitle: "Finance Internship in Sri Lanka 2026 | Accounting & Finance Intern Colombo",
    metaDescription:
      "Apply for a paid finance internship in Sri Lanka. Cypher Digital is hiring a finance & accounts intern in Colombo — invoicing, reporting, reconciliations & budgeting. Apply via WhatsApp.",
    icon: Calculator,
    type: "Internship (3–6 months)",
    employmentType: "INTERN",
    location: "Colombo, Sri Lanka",
    summary:
      "One of the best finance internships in Sri Lanka — a hands-on, paid internship in Colombo where you work alongside our accounts and operations team on real invoicing, reporting and reconciliation work for 800+ Sri Lankan client accounts.",
    salaryRange: { min: 20000, max: 40000, currency: "LKR", unit: "MONTH" },
    kwIntro:
      "Looking for a finance internship in Sri Lanka? Cypher Digital is hiring a Finance Intern in Colombo — a paid accounting internship for undergraduates, fresh graduates and CIMA/ACCA/AAT part-qualified students. Hands-on invoicing, reconciliations, and monthly reporting across 800+ Sri Lankan client accounts.",
    seoIntro: [
      "Cypher Digital is offering a Finance Internship in Sri Lanka for students and fresh graduates who want to build a real career in finance and accounting — not just push paper. If you're searching for a finance internship in Colombo, an accounting internship in Sri Lanka, or a CIMA/ACCA-friendly internship near you, this is one of the most hands-on placements in the country right now.",
      "As a Finance Intern at Cypher Digital, you'll support the accounts team with live client billing, budget tracking and monthly reporting across a portfolio of 800+ Sri Lankan brands in restaurants, fashion, education, real estate and healthcare. You'll see how a fast-moving agency actually manages cash flow, reconciles ad spend and closes its books — the kind of practical experience a textbook can't give you.",
      "This isn't a filing-and-photocopying internship. It's a structured 3–6 month finance internship in Sri Lanka inside Cypher360 — the country's most integrated marketing group — with a clear path to convert into a full-time finance role.",
    ],
    duties: [
      "Assist with client invoicing, billing and payment follow-ups",
      "Help maintain accounts payable and accounts receivable records",
      "Support monthly financial reporting and bank reconciliations",
      "Enter and organise data in accounting software (QuickBooks, Xero, or similar)",
      "Reconcile advertising spend and client budgets against invoices",
      "Assist with petty cash, expense tracking and payroll support",
      "Learn how a real finance function plans, records and reports",
    ],
    requirements: [
      "Currently studying finance, accounting, business or a related field (university degree, AAT, CIMA, ACCA or CA part-qualified all welcome)",
      "Comfortable with Microsoft Excel or Google Sheets",
      "Strong attention to detail and good numerical accuracy",
      "Eager to learn and not afraid to take initiative",
      "Familiarity with any accounting software is a plus",
      "Good communication skills in English and Sinhala",
      "Able to commit at least 3 days per week",
    ],
    perks: [
      "Real work experience on live client accounts and reporting",
      "Mentorship from experienced finance and operations professionals",
      "Certificate of internship completion",
      "Potential to convert to a full-time role based on performance",
      "Exposure to Sri Lanka's most integrated marketing group — Cypher360",
      "Monthly stipend — a paid finance internship in Sri Lanka, not unpaid",
      "Flexible 3 days/week schedule designed around university timetables",
    ],
    whyJoin: [
      { title: "Sri Lanka's most hands-on finance internship", body: "You'll work with real invoices, reconciliations and reports from week one — not just observe someone else's spreadsheet." },
      { title: "Mentorship from experienced finance professionals", body: "Learn directly from the team that manages billing and cash flow across 800+ Sri Lankan client accounts." },
      { title: "Convert to a full-time finance job", body: "Top-performing interns are offered full-time roles such as Accounts Executive or Finance Associate at Cypher Digital." },
    ],
    faqs: [
      {
        q: "Are you offering finance internships in Sri Lanka right now?",
        a: "Yes. Cypher Digital is actively hiring a Finance Intern in Colombo, Sri Lanka for a 3–6 month placement. Apply via WhatsApp at +94 70 177 2626 with your CV or LinkedIn profile.",
      },
      {
        q: "Is this a paid finance internship in Sri Lanka?",
        a: "Yes — this is a paid internship. Stipends range between LKR 20,000 and LKR 40,000 per month based on hours committed and skills demonstrated.",
      },
      {
        q: "Can university and CIMA/ACCA students apply for this finance internship?",
        a: "Absolutely. The internship is designed for undergraduates, fresh graduates and part-qualified students studying finance, accounting or business (including AAT, CIMA, ACCA and CA). The 3-day-per-week schedule fits around university and class timetables.",
      },
      {
        q: "Do I need accounting software experience to apply?",
        a: "No. Familiarity with Excel, QuickBooks or Xero is a plus, but not required. We'll train you on the tools we use — attention to detail and a willingness to learn matter most.",
      },
      {
        q: "Where is the finance internship located?",
        a: "The internship is based at our Colombo studio in Sri Lanka, with some flexibility for hybrid work depending on the task.",
      },
      {
        q: "How long is the finance internship?",
        a: "Internships run between 3 and 6 months. Top performers are offered full-time finance jobs at Cypher Digital after the placement.",
      },
      {
        q: "Do I get a certificate after completing the internship?",
        a: "Yes. Every intern who completes the programme receives a Certificate of Internship Completion from Cypher Digital, plus a LinkedIn recommendation from your team lead.",
      },
      {
        q: "How do I apply for the finance internship in Sri Lanka?",
        a: "Send your name, university or professional body, CV (or LinkedIn) and a short intro to +94 70 177 2626 on WhatsApp. We respond within 24 hours — no lengthy forms.",
      },
    ],
    internalLinks: [
      { label: "Marketing Internship", href: "/careers/marketing-internship-sri-lanka", desc: "Our other paid internship — social, ads and design across 800+ brands." },
    ],
    whatsappMessage: "Hi, I'm applying for the Finance Internship at Cypher Digital.",
    whatsappCta: "Apply for Internship",
    datePosted: "2026-08-01",
  },
  {
    slug: "content-specialist-jobs-sri-lanka",
    title: "Content Specialist",
    shortTitle: "Content Specialist",
    h1: "Content Specialist Jobs in Sri Lanka — Hiring Now at Cypher Digital",
    metaTitle: "Content Specialist Jobs in Sri Lanka 2026 | LKR 60K–130K | Cypher Digital",
    metaDescription:
      "Content Specialist jobs in Sri Lanka at Cypher Digital, Colombo. Write captions, blogs, ad copy & scripts for 800+ brands. Salary LKR 60,000–130,000/month. Apply via WhatsApp in 60 seconds.",
    icon: PenLine,
    type: "Full-time / Part-time",
    employmentType: ["FULL_TIME", "PART_TIME"],
    location: "Colombo, Sri Lanka",
    summary:
      "One of the most in-demand content jobs in Sri Lanka right now — write and produce the captions, blogs, ad copy and short-form video scripts that power social media, ads and SEO for 800+ Sri Lankan brands at Cypher Digital, Colombo.",
    salaryRange: { min: 60000, max: 130000, currency: "LKR", unit: "MONTH" },
    kwIntro:
      "Looking for content specialist jobs in Sri Lanka? Cypher Digital is actively hiring across content vacancies in Sri Lanka — from junior content writer jobs in Colombo to senior content strategist roles working on 800+ brand campaigns. Whether you specialise in social media captions, SEO blog writing, ad copy or short-form video scripts, there's a content job in Colombo here for you. Part-time, full-time and freelance content jobs in Sri Lanka available.",
    seoIntro: [
      "Cypher Digital is hiring a Content Specialist in Sri Lanka to join our Colombo studio and own the content that our clients' audiences actually stop and read. If you're searching for content specialist jobs in Sri Lanka — or content writer and content creator jobs in general — with real brands, real budgets and real creative ownership, this is one of the best content vacancies in Colombo right now.",
      "As our Content Specialist, you'll turn campaign strategy into scroll-stopping captions, SEO blog articles, ad copy and short-form video scripts for 800+ Sri Lankan brands across restaurants, fashion, education, real estate and healthcare. Your words go live on paid Meta and Google Ads campaigns and client social pages — not stuck in a drafts folder.",
      "This isn't a one-off freelance gig. It's a full-time (or part-time) content career opportunity in Sri Lanka inside Cypher360 — the country's most integrated marketing group covering digital marketing, events and production.",
    ],
    salaryGuide: {
      intro: [
        "Content specialist salaries in Sri Lanka vary by experience, writing quality, SEO ability and employer type. Agency content writers in Colombo earn differently from in-house corporate writers, and freelance writers working internationally via Upwork can earn several times the local agency rate. The figures below are approximate 2026 market estimates.",
        "At Cypher Digital, we pay at the upper end of the Colombo agency market — LKR 60,000 to LKR 130,000 per month — based on your portfolio and demonstrated output, not years of experience alone. Strong SEO writing skills and a published content portfolio add LKR 15,000–40,000 to a starting offer.",
      ],
      levels: [
        { name: "Intern", exp: "0–6 months", salary: "LKR 20K–40K/mo" },
        { name: "Junior Content Writer", exp: "0–2 years", salary: "LKR 40K–70K/mo" },
        { name: "Content Specialist (Mid)", exp: "2–4 years", salary: "LKR 70K–120K/mo" },
        { name: "Senior Content Specialist", exp: "4–7 years", salary: "LKR 120K–180K/mo" },
        { name: "Content Strategist / Lead", exp: "7+ years", salary: "LKR 180K–300K+/mo" },
      ],
      note: "Cypher Digital pays LKR 60,000–130,000/month based on portfolio quality and demonstrated output. Strong SEO writing skills and a published content portfolio add LKR 15,000–40,000 to a starting offer.",
    },
    softwareSkills: {
      intro:
        "The Sri Lankan agency market in 2026 expects content specialists to be comfortable with most of the tools below. For content jobs at digital marketing agencies in Colombo, writing quality and SEO awareness are the highest priority.",
      items: [
        { icon: "✍️", name: "Copywriting & Captions", desc: "Social posts, ad copy and brand voice — the core skill for every content job in Sri Lanka." },
        { icon: "🔎", name: "SEO Writing", desc: "Blog articles, keywords, structure and readability. Essential for ranking client content on Google." },
        { icon: "🎨", name: "Canva", desc: "Quick visual content and post layouts to accompany your captions and blog articles." },
        { icon: "📅", name: "Meta Business Suite / Schedulers", desc: "Planning and publishing content calendars across Facebook, Instagram and LinkedIn." },
        { icon: "🤖", name: "AI Writing Tools (ChatGPT, Claude)", desc: "Drafting, ideation and research — used responsibly alongside your own writing voice." },
        { icon: "🎬", name: "Short-Form Video Scripting", desc: "Hooks and scripts for Reels and TikTok using CapCut and standard video briefs." },
        { icon: "📊", name: "Basic Analytics (Meta Insights, GA4)", desc: "Measuring which content performs so you can double down on what works." },
      ],
    },
    portfolioSteps: {
      intro:
        "The most common question from applicants for content jobs in Sri Lanka is: 'I don't have published work — how do I get a portfolio?' Here's the practical answer. These five steps build a strong portfolio fast, with or without paid client work.",
      steps: [
        "Write five sample pieces across formats — a set of social captions, one SEO blog article, an ad-copy set, a short-form video script, and an email newsletter. Show range, not just one skill.",
        "Publish consistently on your own channels — a LinkedIn, Medium or personal blog with 10+ posts proves you can write and ship, not just talk about it.",
        "Offer free or discounted content to 2–3 local small businesses — real briefs, real feedback and real published results you can point to.",
        "Rewrite and improve existing Sri Lankan brand content — take a real brand's captions or blog and show a before-and-after with your reasoning.",
        "Apply for Cypher Digital's Marketing Internship or a junior content role — working on 800+ brand campaigns builds a real portfolio faster than any other route.",
      ],
    },
    careerPath: {
      steps: [
        { title: "Junior Content Writer", salary: "LKR 40K–70K/mo", exp: "0–2 years" },
        { title: "Content Specialist (Mid)", salary: "LKR 70K–120K/mo", exp: "2–4 years" },
        { title: "Senior Content Specialist", salary: "LKR 120K–180K/mo", exp: "4–7 years" },
        { title: "Content Strategist / Lead", salary: "LKR 180K–300K/mo", exp: "7+ years" },
        { title: "Head of Content / Content Director", salary: "LKR 280K–500K+/mo", exp: "10+ years" },
      ],
      note:
        "At Cypher Digital, content specialists regularly advance one full level within 12–18 months. Writing for 800+ brands across restaurants, fashion, real estate, education and healthcare means you gain more diverse content experience in one year than most writers get in three years at a single-brand in-house role.",
    },
    dayInLife: {
      intro:
        "What the actual daily work looks like — no vague job descriptions, just the real experience of writing for 800+ Sri Lankan brands.",
      items: [
        { time: "9:00 AM", task: "Daily standup with the creative team: review live campaign performance and note any content changes based on overnight results." },
        { time: "9:30 AM", task: "Write the week's social captions across 3–5 client brands, each with its own voice, audience and content themes." },
        { time: "11:00 AM", task: "Draft ad copy variations for a Meta Ads campaign — multiple hooks and angles for the media buyer to A/B test." },
        { time: "1:30 PM", task: "Write an SEO blog article for a client, researching keywords and structuring it for search and readability." },
        { time: "3:00 PM", task: "Script a short-form video for a restaurant client's weekend promo and brief the video editor and designer." },
        { time: "4:00 PM", task: "Revisions from client feedback: tighten messaging, keep brand consistency, hand off final copy." },
        { time: "5:00 PM", task: "Plan tomorrow's content calendar and review performance data to refine next week's angles." },
      ],
    },
    duties: [
      "Plan and manage content calendars across multiple client brands",
      "Write captions, ad copy, blog articles and short-form video scripts",
      "Adapt tone and messaging to each brand and platform (Facebook, Instagram, TikTok, LinkedIn)",
      "Collaborate with designers and video editors on creative briefs",
      "Optimise written content for SEO and engagement",
      "Track content performance and refine based on results",
      "Research trends, competitors and content angles for client industries",
    ],
    requirements: [
      "1–2+ years of experience in content creation, copywriting or social media",
      "Excellent writing skills in English; strong Sinhala writing is a major plus",
      "A solid grasp of social media platforms and what performs on each",
      "Basic SEO knowledge (keywords, structure, readability)",
      "Comfortable using Canva and content scheduling tools",
      "Organised, deadline-driven and able to manage multiple brands at once",
      "A portfolio or samples of published content",
    ],
    perks: [
      "Ownership of content for real, recognisable Sri Lankan brands — not sample copy that never ships",
      "Collaboration with a full creative team — designers, editors, strategists",
      "Exposure to Sri Lanka's most integrated marketing group — Cypher360",
      "Clear progression toward Senior Content Specialist or Content Strategist",
      "Competitive salary benchmarked against top content jobs in Colombo",
      "A supportive studio culture with flexible hours for part-timers",
    ],
    whyJoin: [
      { title: "Real brands, real reach", body: "Your words go live for 800+ Sri Lankan brands across every major industry — your portfolio grows fast." },
      { title: "Content that's measured, not just written", body: "Your copy runs on Meta and Google Ads campaigns where performance is tracked. You'll learn how words affect real marketing ROI." },
      { title: "Career growth inside Cypher360", body: "Move between social, SEO, scripting and strategy across our digital marketing, events and production arms." },
    ],
    faqs: [
      {
        q: "What is the content specialist salary in Sri Lanka?",
        a: "Content specialist salaries in Sri Lanka range from about LKR 40,000 at junior level to LKR 300,000+ for content strategists and leads in 2026. Mid-level content specialists earn roughly LKR 70,000–120,000 per month. At Cypher Digital, content specialists earn LKR 60,000–130,000 per month depending on portfolio quality and demonstrated output.",
      },
      {
        q: "What does a content specialist do at an agency in Sri Lanka?",
        a: "At a digital marketing agency in Sri Lanka like Cypher Digital, a content specialist plans content calendars, writes social media captions, ad copy for Meta and Google campaigns, SEO blog articles, email newsletters, and short-form video scripts, then tracks how each piece performs and refines based on the results. The role combines writing with performance marketing.",
      },
      {
        q: "What skills and tools do I need for content jobs in Sri Lanka?",
        a: "The most in-demand skills for content jobs in Sri Lanka are strong copywriting, SEO writing (keywords, structure, readability), Canva for quick visuals, content scheduling tools like Meta Business Suite, responsible use of AI writing tools, and basic short-form video scripting. Writing quality and SEO awareness matter most.",
      },
      {
        q: "Do I need a degree for content specialist jobs in Sri Lanka?",
        a: "No degree is required for content jobs at Cypher Digital. We hire based on writing quality and a published portfolio. A strong body of published work — captions, blogs, scripts — is more valuable than a formal qualification, though journalism, marketing or communications qualifications are valued.",
      },
      {
        q: "What is a junior content writer salary in Sri Lanka?",
        a: "Junior content writer salaries in Sri Lanka typically range from LKR 40,000 to LKR 70,000 per month for 0–2 years experience. At Colombo agencies, juniors with a strong portfolio and SEO ability can start at the upper end, and salaries rise quickly with demonstrated performance.",
      },
      {
        q: "Are there freelance content writing jobs in Sri Lanka?",
        a: "Yes — Cypher Digital offers part-time and freelance content arrangements for the right candidates. Freelance writers in Sri Lanka charge per article, caption set or project, and experienced writers working across several clients or international platforms like Upwork can earn significantly more than local agency rates.",
      },
      {
        q: "Do I need to write in both English and Sinhala?",
        a: "Excellent English writing is essential. Strong Sinhala writing is a significant advantage, since many of our client brands publish in both languages.",
      },
      {
        q: "How do I build a content portfolio in Sri Lanka?",
        a: "Write 5–10 sample pieces across formats (captions, a blog, ad copy, a video script, an email), publish consistently on LinkedIn, Medium or a personal blog, offer free work to a few local businesses for real published results, and rewrite existing brand content to show before-and-after. A portfolio of 10+ strong pieces beats a degree with no portfolio every time.",
      },
      {
        q: "How do I apply for this Content Specialist vacancy in Sri Lanka?",
        a: "Send your name, portfolio link or writing samples, and a short intro to +94 70 177 2626 on WhatsApp. We respond within 24 hours — no lengthy forms.",
      },
    ],
    whatsappMessage: "Hi, I'm applying for the Content Specialist role at Cypher Digital.",
    whatsappCta: "Apply on WhatsApp",
    datePosted: "2026-08-01",
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
  {
    slug: "sales-jobs-in-sri-lanka",
    title: "Sales Executive",
    shortTitle: "Sales Executive",
    h1: "Sales Executive Jobs in Sri Lanka — Hiring Now at Cypher Digital",
    metaTitle: "Sales Executive Jobs in Sri Lanka 2026 | LKR 60K–150K | Cypher Digital",
    metaDescription:
      "Sales Executive jobs in Sri Lanka 2026 — Cypher Digital is hiring in Colombo. Sell Facebook Ads, Google Ads, SEO & social media. Base LKR 60,000, earn LKR 150,000+/month. Apply on WhatsApp in 60 seconds.",
    icon: Briefcase,
    type: "Full-time",
    employmentType: "FULL_TIME",
    location: "Colombo, Sri Lanka",
    summary:
      "One of the best sales jobs in Sri Lanka right now — sell high-demand digital products (social media management, Facebook Ads, Google Ads, SEO, video production) to Sri Lankan businesses. Base LKR 60,000 with ability to earn LKR 150,000+/month.",
    salaryRange: { min: 60000, max: 150000, currency: "LKR", unit: "MONTH" },
    kwIntro:
      "Quick facts — Role: Sales Executive · Location: Colombo · Base: LKR 60,000 · Earning potential: LKR 150,000+/month · Apply: WhatsApp +94 70 177 2626. Searching for sales executive jobs in Sri Lanka, sales executive vacancies in Sri Lanka, or sales jobs in Colombo? Cypher Digital is hiring Sales Executives in 2026 to sell digital products — social media management, Facebook Ads, Google Ads, SEO and video production — to Sri Lankan businesses ready to grow.",
    seoIntro: [
      "Searching for the best sales jobs in Sri Lanka in 2026? Cypher Digital is hiring Sales Executives in Colombo to sell high-demand digital products — social media management, Facebook Ads, Google Ads, SEO, and video production — to Sri Lankan businesses that are ready to grow.",
      "Sales jobs in Sri Lanka are shifting fast — and the biggest opportunity right now is in digital. At Cypher Digital, you'll be selling products every Sri Lankan business genuinely needs: Facebook advertising, Google Ads, SEO, social media management and video production. This is not cold-pitch selling — you're backed by 800+ client results across restaurants, real estate, fashion, education and FMCG.",
      "As part of Sri Lanka's most integrated marketing group — Cypher360 — we give our sales team the strongest product in the room. If you're looking for sales executive vacancies in Sri Lanka where your income genuinely reflects your effort, this is it.",
    ],
    salaryGuide: {
      intro: [
        "Sales executive salaries in Sri Lanka vary widely by industry, product, and commission structure. Digital product sales roles in Colombo consistently pay above the market average because clients see fast ROI and deal sizes are meaningful.",
        "At Cypher Digital, the Sales Executive base salary is LKR 60,000 per month — guaranteed. With strong performance, total monthly earnings regularly reach LKR 150,000 and above. Your income is directly tied to what you close, not how long you've been in the industry.",
      ],
      levels: [
        { name: "Sales Executive", exp: "0–2 years", salary: "LKR 60K–150K/mo" },
        { name: "Senior Sales Executive", exp: "2–4 years", salary: "LKR 100K–200K/mo" },
        { name: "Sales Team Lead", exp: "3–5 years", salary: "LKR 150K–250K/mo" },
        { name: "Sales Manager", exp: "5+ years", salary: "LKR 250K–400K/mo" },
      ],
      note: "Cypher Digital Sales Executive package: LKR 60,000 base + attractive performance earnings. Top performers regularly earn LKR 150,000+/month within their first year.",
    },
    softwareSkills: {
      intro:
        "The best sales executives in Sri Lanka pair strong communication with a few lightweight digital tools. You don't need to be technical — just comfortable using these to run pipeline, follow up, and close.",
      items: [
        { icon: "💬", name: "WhatsApp Business", desc: "Primary channel for pitching and following up with Sri Lankan business owners — fast, personal, high response." },
        { icon: "💼", name: "LinkedIn", desc: "Prospect decision-makers at Colombo companies, multi-location brands, and B2B accounts." },
        { icon: "📊", name: "Google Sheets / Excel", desc: "Track leads, pipeline stages, and weekly revenue against target." },
        { icon: "🗂️", name: "CRM (HubSpot / Pipedrive)", desc: "Log every deal, activity, and follow-up so nothing slips." },
        { icon: "📈", name: "Meta Ads & Google Ads basics", desc: "Enough understanding to explain ROI, campaign types, and why the client should invest." },
        { icon: "📄", name: "Canva / Google Slides", desc: "Build clean pitch decks and one-page proposals that close." },
      ],
    },
    portfolioSteps: {
      intro:
        "No sales portfolio yet? Here's how to build one fast for sales executive jobs in Sri Lanka — even if you've never sold digital products before.",
      steps: [
        "Pick one industry — restaurants, salons, real estate, clinics — and list 30 Sri Lankan businesses with weak digital presence.",
        "Build a simple 1-page proposal showing how Facebook Ads or Google Ads would grow one specific business.",
        "Record a 90-second WhatsApp pitch in Sinhala and English explaining the offer.",
        "Practice objection handling: price, timing, 'I already have someone doing it'.",
        "Apply to Cypher Digital and use your pitch during the WhatsApp interview.",
      ],
    },
    careerPath: {
      steps: [
        { title: "Sales Executive", salary: "LKR 60K–150K/mo", exp: "0–2 years" },
        { title: "Senior Sales Executive", salary: "LKR 100K–200K/mo", exp: "2–4 years" },
        { title: "Sales Team Lead", salary: "LKR 150K–250K/mo", exp: "3–5 years" },
        { title: "Sales Manager", salary: "LKR 250K–400K/mo", exp: "5+ years" },
        { title: "Head of Sales", salary: "LKR 400K–600K+/mo", exp: "8+ years" },
      ],
      note:
        "At Cypher Digital, sales executives regularly promote to Senior within 12 months based on revenue delivered — not tenure. The digital product suite and 800+ client proof points make it faster to close bigger deals than in traditional Sri Lankan sales roles.",
    },
    dayInLife: {
      intro:
        "What a real day looks like for a Sales Executive at Cypher Digital — the actual work of selling digital products in Sri Lanka, not a vague JD.",
      items: [
        { time: "8:30 AM", task: "Review WhatsApp replies from yesterday's proposals — prioritise warm leads first." },
        { time: "9:30 AM", task: "Team standup — go over pipeline movement and today's revenue target." },
        { time: "10:30 AM", task: "Discovery call with a Colombo salon owner about social media management and Meta Ads." },
        { time: "12:30 PM", task: "Follow up on open proposals via WhatsApp and lock decision-maker meetings for tomorrow." },
        { time: "2:30 PM", task: "Prospect 20 new SMEs on LinkedIn and Google Maps, then send personalised outreach." },
        { time: "4:00 PM", task: "Build a 1-page proposal in Canva for a multi-outlet restaurant interested in Google Ads." },
        { time: "5:00 PM", task: "Update CRM, send the manager a pipeline summary, plan tomorrow's top 5 follow-ups." },
      ],
    },
    duties: [
      "Prospect and pitch digital marketing packages to SMEs, startups, and corporates across Sri Lanka",
      "Sell digital products including social media management, paid ads, SEO, and video production",
      "Build a strong pipeline through cold outreach, referrals, and in-person networking",
      "Conduct discovery calls and present customised digital marketing proposals",
      "Consistently achieve and exceed monthly revenue targets",
      "Maintain strong client relationships and identify upsell opportunities",
      "Collaborate with the creative and delivery team to ensure client satisfaction",
      "Track activity using CRM and report weekly to the sales manager",
    ],
    requirements: [
      "Proven background in sales, business development, or client acquisition in Sri Lanka",
      "Interest in or knowledge of digital products — social media, ads, SEO, or web services",
      "Confident communicator in Sinhala and English (Tamil is a plus)",
      "Self-motivated with a hunter mindset — you generate your own momentum",
      "Ability to explain complex digital services in simple, benefit-led language",
      "Experience using WhatsApp, email, and LinkedIn for outreach and follow-up",
      "No formal degree required — we hire on results, attitude, and drive",
    ],
    perks: [
      "Transparent salary from day one — base LKR 60,000 guaranteed",
      "Ability to earn LKR 150,000+ per month with strong performance",
      "Sell digital products every Sri Lankan business needs in 2026",
      "800+ client case studies back every pitch",
      "Fast career growth into Sales Manager, Account Director or Business Development roles",
      "Part of Cypher360 — Sri Lanka's most integrated marketing group",
    ],
    whyJoin: [
      { title: "A rising digital market", body: "Digital ad spend in Sri Lanka is growing 40%+ year-on-year — you're selling into a market that's expanding, not shrinking." },
      { title: "Proven product, proven results", body: "800+ client case studies back every pitch. You walk into every meeting with results, not promises." },
      { title: "Genuine earning potential", body: "Base of LKR 60,000 with the ability to earn LKR 150,000+ per month. Your income directly reflects your effort." },
    ],
    faqs: [
      {
        q: "Are there sales executive vacancies in Sri Lanka available right now?",
        a: "Yes — Cypher Digital is actively hiring Sales Executives at our Colombo office in 2026. Applications are reviewed within 24 hours. Apply directly via WhatsApp at +94 70 177 2626.",
      },
      {
        q: "What digital products will I be selling?",
        a: "You will sell Cypher Digital's full suite: Facebook and Instagram advertising, Google Ads, SEO services, social media management, TikTok marketing, graphic design retainers, and video production — all in high demand from Sri Lankan businesses in 2026.",
      },
      {
        q: "What is the salary for sales jobs at Cypher Digital Sri Lanka?",
        a: "The base salary is LKR 60,000 per month — guaranteed. With strong performance, total monthly earnings can reach LKR 150,000 and above. Your earning potential grows directly with your results.",
      },
      {
        q: "Do I need a degree or digital marketing experience?",
        a: "No degree is required. We hire based on attitude, communication skills, and a track record of results. Basic familiarity with social media and digital advertising is helpful — full product training is provided.",
      },
      {
        q: "How do I apply for sales jobs in Sri Lanka at Cypher Digital?",
        a: "Send your name and a brief note about your sales background to +94 70 177 2626 on WhatsApp. We respond within 24 hours — no lengthy forms, no long wait.",
      },
      {
        q: "What is the average salary for a sales executive in Sri Lanka in 2026?",
        a: "The average sales executive salary in Sri Lanka in 2026 ranges from LKR 40,000 to LKR 90,000 per month depending on industry, with digital and B2B roles paying the most. At Cypher Digital, the total package (base LKR 60,000 + performance earnings) regularly puts Sales Executives at LKR 150,000+/month within their first year.",
      },
      {
        q: "Which industry pays the highest for sales executives in Sri Lanka?",
        a: "Digital marketing, IT/SaaS, and financial services currently pay the highest for sales executives in Sri Lanka. Digital product sales — like Cypher Digital's role — pay above market because deal sizes are meaningful and clients see fast ROI, so commissions scale quickly.",
      },
      {
        q: "What is the difference between a Sales Executive and a Business Development Executive?",
        a: "A Sales Executive focuses on higher-volume, faster-cycle deals — closing more clients each month. A Business Development Executive works larger, more consultative accounts with longer cycles and higher deal values. At Cypher Digital, both roles sell the same digital products and earn from the same attractive structure.",
      },
      {
        q: "Is a sales executive job a good career in Sri Lanka?",
        a: "Yes — especially in digital. Digital ad spend in Sri Lanka is growing 40%+ year-on-year, so sales executives selling digital products are entering a rising market. The role builds transferable skills (prospecting, negotiation, pipeline management) and has a clear promotion path into Senior Sales Executive, Sales Manager, and Head of Sales.",
      },
    ],
    internalLinks: [
      { label: "Business Development Executive jobs in Sri Lanka", href: "/careers/business-development-executive-jobs-sri-lanka", desc: "Prefer larger, consultative accounts? See the BDE role at Cypher Digital." },
      { label: "Sales Manager jobs in Sri Lanka", href: "/careers/sales-manager-jobs-sri-lanka", desc: "Already leading a team? Explore the Sales Manager vacancy in Colombo." },
      { label: "All digital marketing jobs in Sri Lanka", href: "/careers", desc: "Browse every open role at Cypher Digital — design, video, paid ads, SEO, and more." },
      { label: "Digital marketing services", href: "/", desc: "See the full range of digital products you'll be selling to Sri Lankan businesses." },
    ],
    whatsappMessage: "Hi, I'm applying for the Sales Executive position at Cypher Digital.",
    whatsappCta: "Apply for Sales Executive",
    datePosted: "2026-07-01",
  },
  {
    slug: "sales-manager-jobs-sri-lanka",
    title: "Sales Manager",
    shortTitle: "Sales Manager",
    h1: "Sales Manager Jobs in Sri Lanka — Join Cypher Digital",
    metaTitle: "Sales Manager Jobs in Sri Lanka 2026 | Cypher Digital",
    metaDescription:
      "Looking for sales manager jobs in Sri Lanka? Cypher Digital is hiring a Sales Manager in Colombo to lead digital product sales. Base LKR 80,000 + attractive earnings. Apply via WhatsApp.",
    icon: Briefcase,
    type: "Full-time",
    employmentType: "FULL_TIME",
    location: "Colombo, Sri Lanka",
    summary:
      "Lead a high-performing sales team selling in-demand digital products to Sri Lankan businesses. Base LKR 80,000/month guaranteed, with strong additional earnings for top performers.",
    salaryRange: { min: 80000, max: 250000, currency: "LKR", unit: "MONTH" },
    kwIntro:
      "Searching for sales manager jobs in Sri Lanka, area sales manager jobs in Sri Lanka, or sales management jobs in Colombo? Cypher Digital is hiring a Sales Manager in 2026 to lead a team selling digital products — Facebook Ads, Google Ads, SEO, social media management and video production — to Sri Lankan businesses across every major industry.",
    seoIntro: [
      "Searching for the best sales manager jobs in Sri Lanka in 2026? Cypher Digital is hiring a Sales Manager in Colombo to lead a high-performing sales team, drive revenue growth, and sell in-demand digital products to Sri Lankan businesses across every major industry.",
      "Sales manager jobs in Sri Lanka are rare when they come with real products, a real team, and real earning potential. At Cypher Digital, you will lead a team of Sales Executives selling high-demand digital marketing services — Facebook advertising, Google Ads, SEO, social media management, and video production — to Sri Lankan businesses that are actively looking to grow online.",
      "As part of Cypher360 — Sri Lanka's most integrated marketing group — you will have 800+ client success stories behind every pitch your team makes. Your job is to build the pipeline, coach the team, close the big deals, and drive consistent revenue growth month on month.",
    ],
    duties: [
      "Lead, coach, and manage a team of Sales Executives selling digital products across Sri Lanka",
      "Set monthly revenue targets and hold the team accountable to consistent performance",
      "Own the full sales pipeline — prospecting, pitching, closing, and retention",
      "Develop and refine sales scripts, pitch decks, and proposal templates for digital services",
      "Build and maintain relationships with key accounts and high-value clients",
      "Work closely with the digital delivery team to ensure client expectations are met",
      "Report weekly to senior leadership on pipeline health, revenue, and team performance",
      "Identify new market opportunities and verticals for digital product sales in Sri Lanka",
    ],
    requirements: [
      "3+ years of sales experience in Sri Lanka, with at least 1 year in a team lead or management role",
      "Proven track record of hitting and exceeding sales targets consistently",
      "Experience selling digital products, SaaS, media, or marketing services is a strong advantage",
      "Strong leadership skills — you can motivate, coach, and develop junior sales staff",
      "Excellent communication in Sinhala and English (Tamil a plus)",
      "Data-driven mindset — you use numbers to make decisions, not just instinct",
      "Existing network of business contacts across Sri Lankan industries is highly valued",
      "No specific degree required — we hire on results, leadership ability, and commercial drive",
    ],
    perks: [
      "Base salary LKR 80,000/month guaranteed, with strong additional earnings for top performers",
      "Lead a team selling digital products that every Sri Lankan business needs in 2026",
      "Digital ad spend in Sri Lanka growing 40%+ year-on-year — sell into a rising market",
      "800+ client case studies give your team the strongest pitch in the room",
      "Direct pathway to Head of Sales or Business Development Director roles",
      "Part of Cypher360 — Sri Lanka's most integrated marketing group",
    ],
    whyJoin: [
      { title: "Lead in a rising market", body: "Digital ad spend in Sri Lanka is growing 40%+ year-on-year — your team is selling into a market that's expanding, not shrinking." },
      { title: "Strongest pitch in the room", body: "800+ client case studies back every meeting your team walks into — results, not promises." },
      { title: "Real path up", body: "Direct pathway from Sales Manager into Head of Sales or Business Development Director roles inside Cypher360." },
    ],
    faqs: [
      {
        q: "Are there sales manager vacancies in Sri Lanka right now?",
        a: "Yes — Cypher Digital is actively hiring a Sales Manager at our Colombo office in 2026. Apply via WhatsApp at +94 70 177 2626 and we will respond within 24 hours.",
      },
      {
        q: "What is the salary for sales manager jobs in Sri Lanka?",
        a: "At Cypher Digital, the Sales Manager base salary is LKR 80,000/month, guaranteed. Total earnings grow significantly above base for managers who build and lead consistently high-performing teams.",
      },
      {
        q: "What is an area sales manager in Sri Lanka?",
        a: "An Area Sales Manager oversees sales activity within a specific region of Sri Lanka such as Colombo, Kandy, or Galle. While Cypher Digital is currently only hiring for the Sales Manager role, candidates with area sales management backgrounds are very welcome to apply as this experience is highly relevant.",
      },
      {
        q: "Do I need experience in digital marketing to apply?",
        a: "Not deeply — but an interest in digital products helps. We provide full product training. What matters most is a proven record of leading sales teams and hitting targets. If you can manage people and close deals, we want to talk.",
      },
      {
        q: "How do I apply for sales manager jobs in Sri Lanka at Cypher Digital?",
        a: "Send your name, a brief note about your sales management background, and your CV to +94 70 177 2626 on WhatsApp. We respond within 24 hours — no lengthy forms.",
      },
    ],
    whatsappMessage: "Hi, I'm applying for the Sales Manager position at Cypher Digital.",
    whatsappCta: "Apply for Sales Manager",
    datePosted: "2026-06-12",
  },
  {
    slug: "business-development-executive-jobs-sri-lanka",
    title: "Business Development Executive",
    shortTitle: "Business Development Executive",
    h1: "Business Development Executive Jobs in Sri Lanka — Join Cypher Digital",
    metaTitle: "Business Development Executive Jobs in Sri Lanka 2026 | Cypher Digital",
    metaDescription:
      "Looking for business development executive jobs in Sri Lanka? Cypher Digital is hiring a BDE in Colombo to sell digital products — Facebook Ads, Google Ads, SEO & social media. Base LKR 60,000 + attractive earnings. Apply via WhatsApp.",
    icon: Handshake,
    type: "Full-time",
    employmentType: "FULL_TIME",
    location: "Colombo, Sri Lanka",
    summary:
      "One of the best business development executive jobs in Sri Lanka right now — sell high-demand digital products (Facebook Ads, Google Ads, SEO, social media management, video production) to Sri Lankan businesses and build a rewarding career at Cypher Digital, Colombo.",
    salaryRange: { min: 60000, max: 150000, currency: "LKR", unit: "MONTH" },
    kwIntro:
      "Looking for business development executive jobs in Sri Lanka? Cypher Digital is hiring a Business Development Executive (BDE) in Colombo for digital product sales. This is one of the top business development vacancies in Sri Lanka with a guaranteed base salary and strong earning potential.",
    seoIntro: [
      "Searching for the best business development executive jobs in Sri Lanka in 2026? Cypher Digital is hiring a Business Development Executive (BDE) in Colombo to sell high-demand digital products — Facebook Ads, Google Ads, SEO, social media management, and video production — to Sri Lankan businesses that are ready to grow online.",
      "Business development executive jobs in Sri Lanka are growing fast — and digital products are the biggest opportunity right now. At Cypher Digital, a BDE is not a cold-caller. You are a digital consultant who helps Sri Lankan restaurants, real estate agencies, fashion brands, schools, clinics, and retailers understand how Facebook Ads, Google Ads, and SEO will directly grow their business.",
      "You will be backed by 800+ client results across every major industry in Sri Lanka, and supported by one of the country's most integrated marketing groups — Cypher360. That means every conversation you have is backed by proof, not promises. Business development in digital is consultative, relationship-led, and genuinely high-earning for the right person.",
    ],
    salaryGuide: {
      intro: [
        "Business development executive salaries in Sri Lanka vary widely by industry, experience, and commission structure. B2B digital product sales roles in Colombo typically offer a base salary plus performance incentives, making this one of the most attractive business development jobs in Sri Lanka for motivated professionals.",
        "At Cypher Digital, the BDE base salary is LKR 60,000 per month — guaranteed. With strong performance, total monthly earnings can reach LKR 150,000 and above. Your earning potential is directly tied to the revenue you bring in, not just years of experience.",
      ],
      levels: [
        { name: "BDE", exp: "1–3 years", salary: "LKR 60K–150K/mo" },
        { name: "Senior BDE", exp: "2–4 years", salary: "LKR 100K–200K/mo" },
        { name: "BD Manager", exp: "4–6 years", salary: "LKR 180K–300K/mo" },
        { name: "Sales Manager", exp: "6+ years", salary: "LKR 250K–400K/mo" },
      ],
      note: "Cypher Digital BDE package: LKR 60,000 base + attractive performance earnings. Top performers regularly earn LKR 150,000+/month.",
    },
    softwareSkills: {
      intro:
        "The best business development executives in Sri Lanka combine relationship skills with lightweight digital tools. You do not need to be a tech expert, but comfort with these platforms will help you build pipeline, track leads, and close faster.",
      items: [
        { icon: "💬", name: "WhatsApp Business", desc: "Primary outreach and follow-up channel for Sri Lankan clients — fast, personal, and high-response." },
        { icon: "💼", name: "LinkedIn Sales Navigator", desc: "Prospect corporate clients, decision-makers, and multi-location brands in Sri Lanka." },
        { icon: "📊", name: "Google Sheets / Excel", desc: "Track leads, pipeline stages, revenue forecasts, and weekly activity reports." },
        { icon: "🗂️", name: "CRM (HubSpot / Pipedrive)", desc: "Manage contacts, deals, and follow-ups so no opportunity slips through the cracks." },
        { icon: "📈", name: "Meta Ads & Google Ads basics", desc: "Enough understanding to explain ROI, campaign types, and why clients should invest." },
        { icon: "📄", name: "Google Slides / Canva", desc: "Build simple, clear client proposals and pitch decks that win deals." },
      ],
    },
    portfolioSteps: {
      intro:
        "No sales portfolio yet? Here is how to build one fast for business development executive jobs in Sri Lanka — even if you have never sold digital products before.",
      steps: [
        "List 50 target Sri Lankan businesses in one industry (restaurants, real estate, salons, clinics) and research their current digital presence.",
        "Create a short pitch deck showing how one digital product — e.g. Facebook Ads — would help a specific business get more leads.",
        "Record a 2-minute Loom or WhatsApp video pitch explaining the proposal in Sinhala and English.",
        "Practice objection handling with a friend: price, timing, and 'I already have someone'.",
        "Apply to Cypher Digital's BDE role and use your practice pitch during the WhatsApp interview.",
      ],
    },
    careerPath: {
      steps: [
        { title: "BDE", salary: "LKR 60K–150K/mo", exp: "1–3 years" },
        { title: "Senior BDE", salary: "LKR 100K–200K/mo", exp: "2–4 years" },
        { title: "BD Manager", salary: "LKR 180K–300K/mo", exp: "4–6 years" },
        { title: "Sales Manager", salary: "LKR 250K–400K/mo", exp: "6+ years" },
        { title: "Head of Sales", salary: "LKR 400K–600K+/mo", exp: "8+ years" },
      ],
      note:
        "At Cypher Digital, business development executives regularly advance to Senior BDE within 12 months based on revenue performance. The digital product suite and 800+ client proof points give you the credibility to close bigger deals faster than traditional sales roles in Sri Lanka.",
    },
    dayInLife: {
      intro:
        "What a real day looks like for a Business Development Executive at Cypher Digital — no vague job descriptions, just the actual work of selling digital products in Sri Lanka.",
      items: [
        { time: "8:30 AM", task: "Review overnight WhatsApp replies and LinkedIn connection requests — prioritise warm leads first." },
        { time: "9:30 AM", task: "Team standup with the Sales Manager — review yesterday's pipeline movement and today's revenue targets." },
        { time: "10:30 AM", task: "Discovery call with a Colombo restaurant owner about Facebook Ads and social media management." },
        { time: "12:30 PM", task: "Follow up on yesterday's proposals via WhatsApp — answer questions and book decision-maker meetings." },
        { time: "2:30 PM", task: "Research new prospects in real estate and education, then send personalised LinkedIn and WhatsApp outreach." },
        { time: "4:00 PM", task: "Build a custom proposal in Google Slides for a multi-location retail brand interested in Google Ads and SEO." },
        { time: "5:00 PM", task: "Update CRM pipeline, send the Sales Manager a summary, and plan tomorrow's highest-value follow-ups." },
      ],
    },
    duties: [
      "Identify and approach new business leads across Sri Lankan industries — restaurants, real estate, education, healthcare, fashion, FMCG, and more",
      "Pitch and sell Cypher Digital's digital product suite: Facebook Ads, Google Ads, SEO, social media management, TikTok marketing, and video production",
      "Build and manage a pipeline of warm and cold leads using WhatsApp, email, LinkedIn, and in-person networking",
      "Conduct discovery meetings and present customised digital marketing proposals tailored to each client's business goals",
      "Follow up persistently and professionally to convert proposals into signed clients",
      "Maintain and grow relationships with existing clients to drive upsells and renewals",
      "Collaborate with the digital delivery team to ensure a smooth handover after each sale",
      "Track all activity in CRM and submit weekly pipeline reports to the Sales Manager",
      "Consistently hit and exceed monthly revenue targets",
    ],
    requirements: [
      "1–3 years of experience in business development, sales, or client acquisition in Sri Lanka",
      "Strong understanding of or genuine curiosity about digital marketing products",
      "Confident, persuasive communicator in Sinhala and English (Tamil is a plus)",
      "Self-starter — you do not wait for leads to come to you, you go and find them",
      "Ability to simplify complex digital services into clear, benefit-led language that business owners understand",
      "Experience using WhatsApp, email, and LinkedIn for outreach and follow-up",
      "A track record of meeting targets, even in a previous non-digital sales role",
      "No formal degree required — we hire on results, communication, and commercial drive",
    ],
    perks: [
      "Base salary LKR 60,000/month guaranteed — with ability to earn LKR 150,000+/month through performance",
      "Sell digital products with proven ROI — 800+ Sri Lankan client results back every pitch you make",
      "Clear career path from BDE to Senior BDE to Business Development Manager to Sales Manager",
      "Fast, WhatsApp-led sales process — no 6-month procurement cycles or complicated sign-offs",
      "Work inside Cypher360 — Sri Lanka's most integrated marketing group — for instant credibility in every meeting",
      "Full product training and ongoing mentorship from senior sales and digital delivery leaders",
    ],
    whyJoin: [
      { title: "Sell what Sri Lankan businesses actually want", body: "Digital ad spend in Sri Lanka is growing 40%+ year-on-year. You are entering the market at the right time with products that solve real business problems." },
      { title: "Income in your own hands", body: "Unlike fixed-salary roles, your earnings grow with your closes. Top BDEs at Cypher Digital regularly take home LKR 150,000+ per month within their first year." },
      { title: "Career velocity inside Cypher360", body: "Move from BDE to Senior BDE to BD Manager to Sales Manager — with training, mentorship, and a product suite that makes every promotion possible." },
    ],
    faqs: [
      {
        q: "Are there business development executive vacancies in Sri Lanka right now?",
        a: "Yes — Cypher Digital is actively hiring a Business Development Executive at our Colombo office in 2026. We review all applications within 24 hours via WhatsApp at +94 70 177 2626.",
      },
      {
        q: "What is the salary for business development executive jobs in Sri Lanka?",
        a: "At Cypher Digital, the BDE base salary is LKR 60,000 per month — guaranteed. With strong performance, total monthly earnings can reach LKR 150,000 and above. Your earning potential is directly tied to the revenue you bring in.",
      },
      {
        q: "What digital products does a BDE sell at Cypher Digital?",
        a: "You will sell Facebook and Instagram advertising, Google Ads, SEO services, social media management packages, TikTok marketing, video production, and graphic design retainers — all products in high demand from Sri Lankan businesses in 2026.",
      },
      {
        q: "Do I need experience in digital marketing to apply for business development jobs at Cypher Digital?",
        a: "Not deeply — but genuine interest in digital helps. Full product training is provided. What matters most is your ability to build relationships, communicate clearly, and close deals. If you have sold any B2B product or service in Sri Lanka, your skills transfer directly.",
      },
      {
        q: "What is the difference between a Business Development Executive and a Sales Executive in Sri Lanka?",
        a: "A BDE focuses on building relationships with new, often larger accounts — consultative selling with slightly longer sales cycles and higher deal values. A Sales Executive focuses on volume — a higher number of smaller accounts closed quickly. At Cypher Digital, both roles sell the same digital products and earn from the same attractive structure.",
      },
      {
        q: "How do I apply for business development executive jobs in Sri Lanka at Cypher Digital?",
        a: "Send your name and a brief note about your sales or business development background to +94 70 177 2626 on WhatsApp. We respond within 24 hours — no lengthy forms, no long wait.",
      },
    ],
    internalLinks: [
      { label: "Sales Executive jobs in Sri Lanka", href: "/careers/sales-jobs-in-sri-lanka", desc: "Explore our Sales Executive vacancy for volume-focused digital product sales in Colombo." },
      { label: "Sales Manager jobs in Sri Lanka", href: "/careers/sales-manager-jobs-sri-lanka", desc: "See the Sales Manager role if you already have team-leading and target-hitting experience." },
      { label: "All digital marketing jobs in Sri Lanka", href: "/careers", desc: "Browse every open role at Cypher Digital — design, video, paid ads, SEO, and more." },
      { label: "Digital marketing services", href: "/", desc: "See the full range of digital products you will be selling to Sri Lankan businesses." },
    ],
    whatsappMessage: "Hi, I'm applying for the Business Development Executive position at Cypher Digital.",
    whatsappCta: "Apply for Business Development Executive",
    datePosted: "2026-06-23",
  },
];

export const getVacancyBySlug = (slug?: string) =>
  vacancies.find((v) => v.slug === slug);