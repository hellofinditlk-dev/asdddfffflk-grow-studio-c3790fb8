export const PRODUCT_PHOTOGRAPHY_PATH = "/product-photography-sri-lanka";
export const PRODUCT_PHOTOGRAPHY_CANONICAL = `https://cypherdigital.lk${PRODUCT_PHOTOGRAPHY_PATH}`;
export const PRODUCT_PHOTOGRAPHY_TITLE = "Product Photography Sri Lanka | Photos & Videos That Sell";
export const PRODUCT_PHOTOGRAPHY_DESCRIPTION = "Product photography in Sri Lanka for e-commerce, Daraz, Instagram and ads. White-background, lifestyle and video shoots, plus social media packages.";

export const productPhotographyServices = [
  {
    title: "White-background e-commerce photos",
    text: "Clean, consistent shots on pure white for your website, Daraz, Shopify, Google Shopping and catalogues. Several angles per product, with colour-accurate retouching.",
  },
  {
    title: "Lifestyle product photography",
    text: "Your product in real settings, being used, worn or served, so customers can picture it in their own lives.",
  },
  {
    title: "Flat lays and social media content",
    text: "Styled flat lays, carousel sets and seasonal themes (Avurudu, Christmas, Vesak, sale campaigns) sized for Instagram and Facebook.",
  },
  {
    title: "Food and beverage photography",
    text: "Packaged foods, drinks, restaurant dishes and menu photos, styled so they look fresh and appetising.",
  },
  {
    title: "Product videos and reels",
    text: "Short product reels, unboxing videos, 360° spins and 15-second video ads, shot on the same day as your photos. See also [reel creation](/reel-creation-sri-lanka).",
  },
];

export const productPhotographyAdPoints = [
  "Square and vertical crops for [Instagram ads](/instagram-ads-sri-lanka) and [Facebook ads](/facebook-ads-sri-lanka)",
  "White-background images that meet [Google Shopping ads](/google-shopping-ads-sri-lanka) and marketplace rules",
  "Space left for text, so our designers can turn shots into [ad creatives](/facebook-ad-design-sri-lanka)",
  "Several variations of each hero shot, so ads can be A/B tested",
];

export const productPhotographyPackages = [
  {
    name: "Product Starter",
    bestFor: "New products, small online stores",
    includes: "White-background images of each product from several angles, retouched and sized for your website and Daraz",
  },
  {
    name: "Product + Social",
    bestFor: "Brands posting every week",
    includes: "White-background, lifestyle and flat lay images plus short reels, sized for Instagram and Facebook",
  },
  {
    name: "Shoot + Social Media Management",
    bestFor: "Brands that want it all done for them",
    includes: "A monthly product shoot, plus a content calendar, captions, posting and page management by our social media management team",
  },
  {
    name: "Launch Campaign",
    bestFor: "New product launches",
    includes: "Shoot, reels and ad creatives, plus a managed social media campaign on Facebook, Instagram and TikTok",
  },
];

export const productPhotographySteps = [
  { title: "Brief.", text: "Send your product list, your brand style and where the photos will be used." },
  { title: "Shot list.", text: "We send a shot list and mood board for your approval." },
  { title: "Shoot.", text: "You send or hand over the products, and we shoot photos and video." },
  { title: "Retouch.", text: "Colour correction, background clean-up and cropping for each platform." },
  { title: "Delivery.", text: "High-resolution files plus web, marketplace and social sizes in 5 working days." },
  { title: "Put them to work (optional).", text: "We plan your posts and ads with the new content." },
];

export const productPhotographyFaqs = [
  {
    question: "How much does product photography cost in Sri Lanka?",
    answer: "It depends on the number of products, the styles you need (white background, lifestyle, flat lay), video, and retouching. Send us your product list and we'll reply with a shot list and a quote.",
  },
  {
    question: "Do you need a studio to shoot my products?",
    answer: "No. We can bring a portable lighting and backdrop setup to your office or warehouse, or arrange a hired studio space in Colombo when the shoot needs it.",
  },
  {
    question: "Can you shoot images for Daraz and Google Shopping?",
    answer: "Yes. We deliver white-background images sized to marketplace and Google Shopping rules.",
  },
  {
    question: "Do you also make product videos?",
    answer: "Yes. Reels, unboxing videos, 360° spins and short video ads, shot on the same day.",
  },
  {
    question: "Can you post the photos and run ads for us?",
    answer: "Yes. That's what our Shoot + Social Media Management bundle is for. We shoot, post and advertise, so you deal with one team.",
  },
  {
    question: "How long does delivery take?",
    answer: "Usually 5 working days, depending on the number of products.",
  },
];

export const productPhotographyCopy = {
  h1: "Product Photography in Sri Lanka",
  heroLead: "Product photos and videos made to sell: on your website, Daraz, Instagram and in your ads.",
  heroParagraphs: [
    "Cypher Digital shoots product photography in Sri Lanka for e-commerce stores, FMCG brands, skincare and beauty, food and beverage, fashion and electronics. We plan every shot around where it will be used. Clean images for your online store, scroll-stopping images for social media, and ad creatives that get clicks.",
    "We're also a social media and ads agency. That means we know which product shots perform, and we can run the campaigns that use them.",
  ],
  shootSetup: "We bring a portable product setup to your office or warehouse, or shoot in a hired studio space in Colombo.",
  adsIntro: "A product shoot only pays off when the photos sell. We shoot with your campaigns in mind:",
  packagesOutro: "Want one team to shoot, post and advertise? Choose a bundle, or see our [social media marketing packages](/social-media-marketing-packages-sri-lanka) for more.",
  audience: "[E-commerce](/ecommerce-digital-marketing-sri-lanka) and Daraz sellers, skincare and beauty brands, food and beverage companies, [fashion brands](/fashion-brand-digital-marketing-sri-lanka), electronics and homeware retailers, and FMCG manufacturers. Launching new packaging? We also handle [packaging design](/packaging-design-sri-lanka).",
  afterShoot: "Most product brands need new content every month, not once a year. With our [social media management](/social-media-management-sri-lanka), we shoot your products monthly, plan the calendar, write captions in Sinhala, Tamil or English, and post for you. Want more sales? We plan and run [social media campaigns](/social-media-campaigns-sri-lanka) and [lead generation campaigns](/lead-generation-campaigns-sri-lanka) using your new photos and reels.",
  formIntro: "Tell us what you sell and where you want to sell it, and we'll send a shot list and a quote.",
};

export function productPhotographySchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${PRODUCT_PHOTOGRAPHY_CANONICAL}#service`,
        name: "Product Photography in Sri Lanka",
        serviceType: "Product photography",
        description: PRODUCT_PHOTOGRAPHY_DESCRIPTION,
        areaServed: { "@type": "Country", name: "Sri Lanka" },
        provider: { "@type": "Organization", name: "Cypher Digital", url: "https://cypherdigital.lk/" },
        url: PRODUCT_PHOTOGRAPHY_CANONICAL,
      },
      {
        "@type": "FAQPage",
        "@id": `${PRODUCT_PHOTOGRAPHY_CANONICAL}#faq`,
        mainEntity: productPhotographyFaqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${PRODUCT_PHOTOGRAPHY_CANONICAL}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://cypherdigital.lk/" },
          { "@type": "ListItem", position: 2, name: "Services", item: "https://cypherdigital.lk/#services" },
          { "@type": "ListItem", position: 3, name: "Product Photography", item: PRODUCT_PHOTOGRAPHY_CANONICAL },
        ],
      },
    ],
  };
}
