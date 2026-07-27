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
    slug: "digital-content-specialist-jobs-sri-lanka",
    title: "Digital Content Specialist",
    shortTitle: "Digital Content Specialist",
    h1: "Digital Content Specialist Jobs in Sri Lanka — Apply Now at Cypher Digital",
    metaTitle: "Digital Content Specialist Jobs in Sri Lanka 2026 | Content Specialist Colombo | Cypher Digital",
    metaDescription:
      "Digital Content Specialist job in Sri Lanka at Cypher Digital, Colombo. Create content, captions, blogs & scripts for 800+ brands. Full-time role. Apply via WhatsApp.",
    icon: PenLine,
    type: "Full-time",
    employmentType: "FULL_TIME",
    location: "Colombo, Sri Lanka",
    summary:
      "One of the best content jobs in Sri Lanka — a full-time Digital Content Specialist role in Colombo where you plan, write and produce the content that powers social media, ads and SEO for 800+ Sri Lankan brands.",
    salaryRange: { min: 80000, max: 150000, currency: "LKR", unit: "MONTH" },
    kwIntro:
      "Searching for digital content specialist jobs in Sri Lanka? Cypher Digital is hiring a full-time Content Specialist in Colombo — write captions, ad copy, blog articles and short-form scripts for 800+ Sri Lankan brands. Content creator jobs, content writer jobs and social media content roles in one seat.",
    seoIntro: [
      "Cypher Digital is hiring a Digital Content Specialist in Sri Lanka to own the content that our clients' audiences actually stop and read. If you're searching for a content specialist job in Colombo, a content creator role in Sri Lanka, or a social media content job near you, this is a chance to write and produce at scale inside a working agency.",
      "As a Digital Content Specialist at Cypher Digital, you'll turn campaign strategy into scroll-stopping captions, blog articles, ad copy and short-form video scripts for brands across restaurants, fashion, education, real estate and healthcare. You'll work alongside designers, editors and paid-media specialists to make sure every piece of content is on-brand, on-strategy and built to perform.",
      "This is a full-time role inside Cypher360 — the country's most integrated marketing group — with real ownership of content calendars from day one and room to grow into a senior content or strategy position.",
    ],
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
      "Ownership of content for real, recognisable Sri Lankan brands",
      "Collaboration with a full creative team — designers, editors, strategists",
      "Exposure to Sri Lanka's most integrated marketing group — Cypher360",
      "Clear progression toward Senior Content Specialist or Content Strategist",
      "A competitive full-time salary and a supportive studio culture",
      "Continuous learning across social, SEO, paid media and video",
    ],
    whyJoin: [
      { title: "Real brands, real reach", body: "Your words go live for 800+ Sri Lankan brands across every major industry — not sample copy that never ships." },
      { title: "A full creative team behind you", body: "Work shoulder-to-shoulder with designers, video editors and paid-media specialists so your content is produced properly, not left as text on a page." },
      { title: "A clear path to senior content roles", body: "Strong performers grow into Senior Content Specialist and Content Strategist positions at Cypher Digital." },
    ],
    faqs: [
      {
        q: "Are you hiring a Digital Content Specialist in Sri Lanka right now?",
        a: "Yes. Cypher Digital is actively hiring a full-time Digital Content Specialist in Colombo, Sri Lanka. Apply via WhatsApp at +94 70 177 2626 with your CV and portfolio.",
      },
      {
        q: "Is this a full-time role?",
        a: "Yes, this is a full-time, on-site role based at our Colombo studio, with some flexibility for hybrid work depending on the project.",
      },
      {
        q: "What experience do I need to apply?",
        a: "We're looking for 1–2 or more years of experience in content creation, copywriting or social media, plus a portfolio or samples of published work.",
      },
      {
        q: "Do I need to write in both English and Sinhala?",
        a: "Excellent English writing is essential. Strong Sinhala writing is a significant advantage, since many of our client brands publish in both languages.",
      },
      {
        q: "What tools will I use?",
        a: "You'll work with content scheduling tools, Canva and standard SEO and analytics tools. We'll support you with anything you haven't used before.",
      },
      {
        q: "Where is the job located?",
        a: "The role is based at our Colombo studio in Sri Lanka, with some flexibility for hybrid work.",
      },
      {
        q: "Is there room to grow into a senior role?",
        a: "Yes. Strong performers progress into Senior Content Specialist and Content Strategist positions within the Cypher360 group.",
      },
      {
        q: "How do I apply for the Digital Content Specialist job?",
        a: "Send your name, CV, portfolio or writing samples and a short intro to +94 70 177 2626 on WhatsApp. We respond within 24 hours — no lengthy forms.",
      },
    ],
    whatsappMessage: "Hi, I'm applying for the Digital Content Specialist role at Cypher Digital.",
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
    h1: "Sales Jobs in Sri Lanka — Join Cypher Digital",
    metaTitle: "Sales Jobs in Sri Lanka 2026 | Cypher Digital Careers",
    metaDescription:
      "Looking for sales jobs in Sri Lanka? Cypher Digital is hiring Sales Executives in Colombo to sell digital products. Base salary LKR 60,000 — ability to earn LKR 150,000/month. Apply via WhatsApp.",
    icon: Briefcase,
    type: "Full-time",
    employmentType: "FULL_TIME",
    location: "Colombo, Sri Lanka",
    summary:
      "One of the best sales jobs in Sri Lanka right now — sell high-demand digital products (social media management, Facebook Ads, Google Ads, SEO, video production) to Sri Lankan businesses. Base LKR 60,000 with ability to earn LKR 150,000+/month.",
    salaryRange: { min: 60000, max: 150000, currency: "LKR", unit: "MONTH" },
    kwIntro:
      "Searching for sales jobs in Sri Lanka, sales executive vacancies in Sri Lanka, or sales jobs in Colombo? Cypher Digital is hiring Sales Executives in 2026 to sell digital products — social media management, Facebook Ads, Google Ads, SEO and video production — to Sri Lankan businesses ready to grow.",
    seoIntro: [
      "Searching for the best sales jobs in Sri Lanka in 2026? Cypher Digital is hiring Sales Executives in Colombo to sell high-demand digital products — social media management, Facebook Ads, Google Ads, SEO, and video production — to Sri Lankan businesses that are ready to grow.",
      "Sales jobs in Sri Lanka are shifting fast — and the biggest opportunity right now is in digital. At Cypher Digital, you'll be selling products every Sri Lankan business genuinely needs: Facebook advertising, Google Ads, SEO, social media management and video production. This is not cold-pitch selling — you're backed by 800+ client results across restaurants, real estate, fashion, education and FMCG.",
      "As part of Sri Lanka's most integrated marketing group — Cypher360 — we give our sales team the strongest product in the room. If you're looking for sales executive vacancies in Sri Lanka where your income genuinely reflects your effort, this is it.",
    ],
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
    ],
    whatsappMessage: "Hi, I'm applying for the Sales Executive position at Cypher Digital.",
    whatsappCta: "Apply for Sales Executive",
    datePosted: "2026-05-25",
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