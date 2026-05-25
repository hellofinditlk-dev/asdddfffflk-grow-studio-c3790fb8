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
}

export const vacancies: Vacancy[] = [
  {
    slug: "graphic-designer-jobs-sri-lanka",
    title: "Graphic Designer",
    shortTitle: "Graphic Designer",
    h1: "Graphic Designer Vacancy in Sri Lanka — Cypher Digital",
    metaTitle: "Graphic Designer Jobs in Sri Lanka | Cypher Digital Careers",
    metaDescription:
      "We're hiring a Graphic Designer in Colombo, Sri Lanka. Work on 800+ brand campaigns at Cypher Digital. Apply now via WhatsApp — no lengthy forms.",
    icon: Palette,
    type: "Full-time / Part-time",
    employmentType: ["FULL_TIME", "PART_TIME"],
    location: "Colombo, Sri Lanka",
    summary:
      "Design social media creatives, brand identities, and marketing collateral for 800+ Sri Lankan brands.",
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
    h1: "Video Editor Vacancy in Sri Lanka — Cypher Digital",
    metaTitle: "Video Editor Jobs in Sri Lanka | Cypher Digital Careers",
    metaDescription:
      "We're hiring a Video Editor in Colombo, Sri Lanka. Edit reels, TikToks & brand videos for 800+ clients. Apply now via WhatsApp at Cypher Digital.",
    icon: Film,
    type: "Full-time / Freelance",
    employmentType: ["FULL_TIME", "CONTRACTOR"],
    location: "Colombo, Sri Lanka",
    summary:
      "Edit scroll-stopping reels, TikToks, YouTube ads, and brand videos for Sri Lanka's fastest-growing brands.",
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
    whatsappMessage: "Hi, I'm applying for the Video Editor position at Cypher Digital.",
    whatsappCta: "Apply for Video Editor",
    datePosted: "2026-05-25",
  },
  {
    slug: "marketing-internship-sri-lanka",
    title: "Marketing Intern",
    shortTitle: "Marketing Internship",
    h1: "Marketing Internship in Sri Lanka — Cypher Digital",
    metaTitle: "Marketing Internship in Sri Lanka | Cypher Digital Careers",
    metaDescription:
      "Apply for a digital marketing internship in Colombo, Sri Lanka. Gain real experience in social media, ads & design at Cypher Digital. Apply via WhatsApp.",
    icon: GraduationCap,
    type: "Internship (3–6 months)",
    employmentType: "INTERN",
    location: "Colombo, Sri Lanka",
    summary:
      "A hands-on internship — not a coffee-fetching one. Work alongside our team on live client campaigns across Sri Lanka's top brands.",
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
    ],
    whatsappMessage: "Hi, I'm applying for the Marketing Internship at Cypher Digital.",
    whatsappCta: "Apply for Internship",
    datePosted: "2026-05-25",
  },
];

export const getVacancyBySlug = (slug?: string) =>
  vacancies.find((v) => v.slug === slug);