import { Palette, BarChart3, Film, GraduationCap, type LucideIcon } from "lucide-react";

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
    salaryRange: { min: 50000, max: 140000, currency: "LKR", unit: "MONTH" },
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
        a: "Graphic designer salaries in Sri Lanka typically range between LKR 50,000 and LKR 140,000 per month depending on experience, software skills (Photoshop, Illustrator, InDesign) and portfolio strength. Cypher Digital pays at the top end of the market.",
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
    h1: "Digital Marketing Specialist Vacancy in Sri Lanka — Cypher Digital",
    metaTitle: "Digital Marketing Jobs in Sri Lanka | Cypher Digital Careers",
    metaDescription:
      "Hiring a Digital Marketing Specialist in Colombo. Run Facebook Ads, Google Ads & SEO campaigns for top Sri Lankan brands. Apply via WhatsApp today.",
    icon: BarChart3,
    type: "Full-time",
    employmentType: "FULL_TIME",
    location: "Colombo, Sri Lanka",
    summary:
      "Plan and run Meta, Google, and TikTok ad campaigns that generate real leads and measurable ROI.",
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
    salaryRange: { min: 60000, max: 150000, currency: "LKR", unit: "MONTH" },
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
        a: "Video Editor salaries in Sri Lanka typically range between LKR 60,000 and LKR 150,000 per month depending on experience, software skills (Premiere Pro, After Effects, DaVinci Resolve) and portfolio strength. Cypher Digital pays competitively at the top end of the market.",
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
    salaryRange: { min: 15000, max: 35000, currency: "LKR", unit: "MONTH" },
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
        a: "Yes — this is a paid internship. Stipends typically range between LKR 15,000 and LKR 35,000 per month based on hours committed and skills demonstrated.",
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
];

export const getVacancyBySlug = (slug?: string) =>
  vacancies.find((v) => v.slug === slug);