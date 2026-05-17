import { lazy, Suspense, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import BlogCTAInjector from "@/components/BlogCTAInjector";

// Eager load homepage for fastest FCP
import Index from "./pages/Index";

// Lazy load all other pages
const SocialMediaManagement = lazy(() => import("./pages/SocialMediaManagement"));
const FacebookAds = lazy(() => import("./pages/FacebookAds"));
const GoogleAds = lazy(() => import("./pages/GoogleAds"));
const VideoProduction = lazy(() => import("./pages/VideoProduction"));
const SEOServices = lazy(() => import("./pages/SEOServices"));
const GraphicDesign = lazy(() => import("./pages/GraphicDesign"));
const TikTokMarketing = lazy(() => import("./pages/TikTokMarketing"));
const InfluencerMarketing = lazy(() => import("./pages/InfluencerMarketing"));
const EventManagement = lazy(() => import("./pages/EventManagement"));
const CorporateEventManagement = lazy(() => import("./pages/CorporateEventManagement"));
const WeddingPlanning = lazy(() => import("./pages/WeddingPlanning"));
const EventMarketing = lazy(() => import("./pages/EventMarketing"));
const ProductLaunchEvents = lazy(() => import("./pages/ProductLaunchEvents"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost1 = lazy(() => import("./pages/BlogPost1"));
const BlogPost2 = lazy(() => import("./pages/BlogPost2"));
const BlogPost3 = lazy(() => import("./pages/BlogPost3"));
const BlogPost4 = lazy(() => import("./pages/BlogPost4"));
const BlogPost5 = lazy(() => import("./pages/BlogPost5"));
const BlogPost6 = lazy(() => import("./pages/BlogPost6"));
const BlogPost7 = lazy(() => import("./pages/BlogPost7"));
const BlogPost8 = lazy(() => import("./pages/BlogPost8"));
const BlogPost9 = lazy(() => import("./pages/BlogPost9"));
const BlogPost10 = lazy(() => import("./pages/BlogPost10"));
const BlogPost11 = lazy(() => import("./pages/BlogPost11"));
const BlogPost12 = lazy(() => import("./pages/BlogPost12"));
const BlogPost13 = lazy(() => import("./pages/BlogPost13"));
const BlogPost14 = lazy(() => import("./pages/BlogPost14"));
const BlogPost15 = lazy(() => import("./pages/BlogPost15"));
const BlogPost16 = lazy(() => import("./pages/BlogPost16"));
const BlogPost17 = lazy(() => import("./pages/BlogPost17"));
const BlogPost18 = lazy(() => import("./pages/BlogPost18"));
const BlogPost19 = lazy(() => import("./pages/BlogPost19"));
const BlogPost20 = lazy(() => import("./pages/BlogPost20"));
const BlogPost21 = lazy(() => import("./pages/BlogPost21"));
const BlogPost22 = lazy(() => import("./pages/BlogPost22"));
const BlogPost23 = lazy(() => import("./pages/BlogPost23"));
const BlogPost24 = lazy(() => import("./pages/BlogPost24"));
const BlogPost25 = lazy(() => import("./pages/BlogPost25"));
const BlogPost26 = lazy(() => import("./pages/BlogPost26"));
const BlogPost27 = lazy(() => import("./pages/BlogPost27"));
const BlogPost28 = lazy(() => import("./pages/BlogPost28"));
const BlogPost29 = lazy(() => import("./pages/BlogPost29"));
const BlogPost30 = lazy(() => import("./pages/BlogPost30"));
const BlogPost31 = lazy(() => import("./pages/BlogPost31"));
const BlogPost32 = lazy(() => import("./pages/BlogPost32"));
const BlogPost33 = lazy(() => import("./pages/BlogPost33"));
const BlogPost34 = lazy(() => import("./pages/BlogPost34"));
const BlogPost35 = lazy(() => import("./pages/BlogPost35"));
const BlogPost36 = lazy(() => import("./pages/BlogPost36"));
const BlogPost37 = lazy(() => import("./pages/BlogPost37"));
const BlogPost38 = lazy(() => import("./pages/BlogPost38"));
const BlogPost39 = lazy(() => import("./pages/BlogPost39"));
const BlogPost40 = lazy(() => import("./pages/BlogPost40"));
const BlogPost41 = lazy(() => import("./pages/BlogPost41"));
const BlogPost42 = lazy(() => import("./pages/BlogPost42"));
const BlogPost43 = lazy(() => import("./pages/BlogPost43"));
const BlogPost44 = lazy(() => import("./pages/BlogPost44"));
const BlogPost45 = lazy(() => import("./pages/BlogPost45"));
const BlogPost46 = lazy(() => import("./pages/BlogPost46"));
const BlogPost47 = lazy(() => import("./pages/BlogPost47"));
const BlogPost48 = lazy(() => import("./pages/BlogPost48"));
const BlogPost49 = lazy(() => import("./pages/BlogPost49"));
const BlogPost50 = lazy(() => import("./pages/BlogPost50"));
const BlogPost51 = lazy(() => import("./pages/BlogPost51"));
const BlogPost52 = lazy(() => import("./pages/BlogPost52"));
const BlogPost53 = lazy(() => import("./pages/BlogPost53"));
const BlogPost54 = lazy(() => import("./pages/BlogPost54"));
const BlogPost55 = lazy(() => import("./pages/BlogPost55"));
const BlogPost56 = lazy(() => import("./pages/BlogPost56"));
const BlogPost57 = lazy(() => import("./pages/BlogPost57"));
const BlogPost58 = lazy(() => import("./pages/BlogPost58"));
const BlogPost59 = lazy(() => import("./pages/BlogPost59"));
const BlogPost60 = lazy(() => import("./pages/BlogPost60"));
const BlogPost61 = lazy(() => import("./pages/BlogPost61"));
const BlogPost62 = lazy(() => import("./pages/BlogPost62"));
const BlogPost63 = lazy(() => import("./pages/BlogPost63"));
const BlogPost64 = lazy(() => import("./pages/BlogPost64"));
const BlogPost65 = lazy(() => import("./pages/BlogPost65"));
const BlogPost66 = lazy(() => import("./pages/BlogPost66"));
const BlogPost67 = lazy(() => import("./pages/BlogPost67"));
const BlogPost68 = lazy(() => import("./pages/BlogPost68"));
const BlogPost69 = lazy(() => import("./pages/BlogPost69"));
const BlogPost70 = lazy(() => import("./pages/BlogPost70"));
const BlogPost71 = lazy(() => import("./pages/BlogPost71"));
const BlogPost72 = lazy(() => import("./pages/BlogPost72"));
const BlogPost73 = lazy(() => import("./pages/BlogPost73"));
const BlogPost74 = lazy(() => import("./pages/BlogPost74"));
const BlogPost75 = lazy(() => import("./pages/BlogPost75"));
const BlogPost76 = lazy(() => import("./pages/BlogPost76"));
const BlogPost77 = lazy(() => import("./pages/BlogPost77"));
const BlogPost78 = lazy(() => import("./pages/BlogPost78"));
const BlogPost79 = lazy(() => import("./pages/BlogPost79"));
const BlogPost80 = lazy(() => import("./pages/BlogPost80"));
const BlogPost81 = lazy(() => import("./pages/BlogPost81"));
const BlogPost82 = lazy(() => import("./pages/BlogPost82"));
const BlogPost83 = lazy(() => import("./pages/BlogPost83"));
const BlogPost84 = lazy(() => import("./pages/BlogPost84"));
const BlogPost85 = lazy(() => import("./pages/BlogPost85"));
const BlogPost86 = lazy(() => import("./pages/BlogPost86"));
const BlogPost87 = lazy(() => import("./pages/BlogPost87"));
const AdvertisingInSriLanka = lazy(() => import("./pages/AdvertisingInSriLanka"));
const IndustryPage = lazy(() => import("./pages/IndustryPage"));
const DesignSubService = lazy(() => import("./pages/DesignSubService"));
const NotFound = lazy(() => import("./pages/NotFound"));


const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const TrailingSlashRedirect = () => {
  const { pathname, search, hash } = useLocation();
  if (pathname !== "/" && pathname.endsWith("/")) {
    return <Navigate to={pathname.slice(0, -1) + search + hash} replace />;
  }
  return null;
};

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <TrailingSlashRedirect />
        <Navbar />
        <main>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/social-media-management-sri-lanka" element={<SocialMediaManagement />} />
              <Route path="/facebook-ads-sri-lanka" element={<FacebookAds />} />
              <Route path="/google-ads-sri-lanka" element={<GoogleAds />} />
              <Route path="/video-production-sri-lanka" element={<VideoProduction />} />
              <Route path="/seo-services-sri-lanka" element={<SEOServices />} />
              <Route path="/graphic-design-sri-lanka" element={<GraphicDesign />} />
              <Route path="/tiktok-marketing-sri-lanka" element={<TikTokMarketing />} />
              <Route path="/influencer-marketing-sri-lanka" element={<InfluencerMarketing />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/why-social-media-management-important-businesses-sri-lanka" element={<BlogPost1 />} />
              <Route path="/blog/how-consistent-social-media-posting-builds-brand-trust" element={<BlogPost2 />} />
              <Route path="/blog/facebook-instagram-management-guide-sri-lankan-brands" element={<BlogPost3 />} />
              <Route path="/blog/complete-guide-facebook-ads-businesses-sri-lanka" element={<BlogPost4 />} />
              <Route path="/blog/why-video-production-essential-business-growth-sri-lanka" element={<BlogPost5 />} />
              <Route path="/blog/importance-professional-graphic-design-modern-brands" element={<BlogPost6 />} />
              <Route path="/blog/how-google-ads-helps-businesses-high-intent-customers" element={<BlogPost7 />} />
              <Route path="/blog/why-seo-important-long-term-business-growth" element={<BlogPost8 />} />
              <Route path="/blog/types-business-videos-increase-engagement-sales" element={<BlogPost9 />} />
              <Route path="/blog/how-strong-visual-branding-improves-marketing-performance" element={<BlogPost10 />} />
              <Route path="/blog/google-search-ads-vs-display-ads-difference" element={<BlogPost11 />} />
              <Route path="/blog/local-seo-strategies-sri-lankan-businesses" element={<BlogPost12 />} />
              <Route path="/blog/how-facebook-campaigns-help-businesses-grow-sri-lanka" element={<BlogPost13 />} />
              <Route path="/blog/facebook-campaign-strategy-guide-sri-lankan-brands" element={<BlogPost14 />} />
              <Route path="/blog/how-ad-videos-increase-conversions-businesses" element={<BlogPost15 />} />
              <Route path="/blog/social-media-design-best-practices-better-engagement" element={<BlogPost16 />} />
              <Route path="/blog/google-ads-vs-facebook-ads-which-better-business" element={<BlogPost17 />} />
              <Route path="/blog/how-to-rank-on-google-sri-lanka-practical-guide" element={<BlogPost18 />} />
              <Route path="/blog/benefits-corporate-video-production-brands" element={<BlogPost19 />} />
              <Route path="/blog/flyer-design-tips-improve-marketing-results" element={<BlogPost20 />} />
              <Route path="/blog/ppc-advertising-explained-sri-lankan-businesses" element={<BlogPost21 />} />
              <Route path="/blog/technical-seo-checklist-better-website-performance" element={<BlogPost22 />} />
              <Route path="/blog/video-marketing-strategy-guide-sri-lankan-businesses" element={<BlogPost23 />} />
              <Route path="/blog/graphic-design-mistakes-damage-brand" element={<BlogPost24 />} />
              <Route path="/blog/google-ads-optimization-tips-improve-campaign-performance" element={<BlogPost25 />} />
              <Route path="/blog/on-page-seo-guide-better-rankings" element={<BlogPost26 />} />
              <Route path="/blog/why-industry-specific-digital-marketing-important-businesses-sri-lanka" element={<BlogPost27 />} />
              <Route path="/blog/why-tiktok-marketing-essential-sri-lankan-businesses" element={<BlogPost28 />} />
              <Route path="/blog/how-create-viral-tiktok-content-business" element={<BlogPost29 />} />
              <Route path="/blog/tiktok-ads-vs-facebook-ads-sri-lankan-businesses" element={<BlogPost30 />} />
              <Route path="/blog/tiktok-influencer-marketing-guide-sri-lankan-brands" element={<BlogPost31 />} />
              <Route path="/blog/tiktok-marketing-hotels-tourism-sri-lanka" element={<BlogPost32 />} />
              <Route path="/blog/ultimate-guide-advertising-sri-lanka" element={<BlogPost33 />} />
              <Route path="/blog/why-digital-advertising-replacing-traditional-sri-lanka" element={<BlogPost34 />} />
              <Route path="/blog/cost-effective-advertising-strategies-sri-lankan-businesses" element={<BlogPost35 />} />
              <Route path="/blog/digital-marketing-cost-sri-lanka-pricing-guide" element={<BlogPost36 />} />
              <Route path="/blog/best-digital-marketing-agency-sri-lanka" element={<BlogPost37 />} />
              <Route path="/blog/instagram-marketing-strategy-sri-lankan-businesses" element={<BlogPost38 />} />
              <Route path="/blog/whatsapp-marketing-sri-lankan-businesses" element={<BlogPost39 />} />
              <Route path="/blog/google-my-business-optimization-guide-sri-lanka" element={<BlogPost40 />} />
              <Route path="/blog/digital-marketing-small-businesses-sri-lanka-starter-guide" element={<BlogPost41 />} />
              <Route path="/blog/content-marketing-blog-strategy-sri-lanka" element={<BlogPost42 />} />
              <Route path="/blog/youtube-ads-sri-lanka-complete-guide" element={<BlogPost43 />} />
              <Route path="/blog/digital-marketing-restaurants-sri-lanka" element={<BlogPost44 />} />
              <Route path="/blog/digital-marketing-schools-tuition-classes-sri-lanka" element={<BlogPost45 />} />
              <Route path="/blog/real-estate-digital-marketing-sri-lanka-lead-generation" element={<BlogPost46 />} />
              <Route path="/blog/how-to-run-instagram-ads-sri-lanka" element={<BlogPost47 />} />
              <Route path="/blog/influencer-marketing-guide-sri-lankan-brands" element={<BlogPost48 />} />
              <Route path="/blog/how-to-build-brand-identity-sri-lankan-business" element={<BlogPost49 />} />
              <Route path="/blog/event-marketing-sri-lanka-promote-event-online" element={<BlogPost50 />} />
              <Route path="/blog/remarketing-retargeting-ads-sri-lanka" element={<BlogPost51 />} />
              <Route path="/blog/social-media-strategy-hotels-tourism-sri-lanka" element={<BlogPost52 />} />
              <Route path="/blog/digital-marketing-roi-measure-results-sri-lanka" element={<BlogPost53 />} />
              <Route path="/blog/sinhala-social-media-content-sri-lankan-brands" element={<BlogPost54 />} />
              <Route path="/blog/organic-social-media-vs-paid-ads-sri-lanka" element={<BlogPost55 />} />
              <Route path="/blog/ui-ux-design-best-practices-sri-lankan-websites" element={<BlogPost56 />} />
              <Route path="/blog/packaging-design-sri-lanka-increase-sales" element={<BlogPost57 />} />
              <Route path="/blog/motion-graphics-vs-video-production-sri-lanka" element={<BlogPost58 />} />
              <Route path="/blog/landing-page-design-tips-convert-sri-lanka" element={<BlogPost59 />} />
              <Route path="/blog/company-profile-design-sri-lanka" element={<BlogPost60 />} />
              <Route path="/blog/ecommerce-digital-marketing-sri-lanka" element={<BlogPost61 />} />
              <Route path="/blog/corporate-event-management-sri-lanka-choose-agency" element={<BlogPost62 />} />
              <Route path="/blog/social-media-management-cost-sri-lanka" element={<BlogPost63 />} />
              <Route path="/blog/social-media-campaign-ideas-sri-lanka" element={<BlogPost64 />} />
              <Route path="/blog/best-social-media-platform-sri-lanka-business" element={<BlogPost65 />} />
              <Route path="/blog/how-to-run-social-media-campaign-sri-lanka" element={<BlogPost66 />} />
              <Route path="/blog/social-media-management-small-business-sri-lanka" element={<BlogPost67 />} />
              <Route path="/blog/best-time-to-post-social-media-sri-lanka" element={<BlogPost68 />} />
              <Route path="/blog/colombo-restaurant-social-media-case-study" element={<BlogPost69 />} />
              <Route path="/blog/sinhala-vs-english-social-media-sri-lanka" element={<BlogPost70 />} />
              <Route path="/blog/tiktok-marketing-sri-lanka-2025" element={<BlogPost71 />} />
              <Route path="/blog/signs-you-need-social-media-agency-sri-lanka" element={<BlogPost72 />} />
              <Route path="/blog/best-digital-marketing-agencies-sri-lanka" element={<BlogPost73 />} />
              <Route path="/blog/how-to-choose-digital-marketing-agency-sri-lanka" element={<BlogPost74 />} />
              <Route path="/blog/digital-marketing-cost-sri-lanka-pricing" element={<BlogPost75 />} />
              <Route path="/blog/what-does-digital-agency-do-sri-lanka" element={<BlogPost76 />} />
              <Route path="/blog/digital-marketing-small-businesses-sri-lanka" element={<BlogPost77 />} />
              <Route path="/blog/traditional-vs-digital-advertising-sri-lanka" element={<BlogPost78 />} />
              <Route path="/blog/best-advertising-agencies-sri-lanka" element={<BlogPost79 />} />
              <Route path="/blog/advertising-cost-sri-lanka-2026" element={<BlogPost80 />} />
              <Route path="/blog/online-advertising-sri-lanka-platform-guide" element={<BlogPost81 />} />
              <Route path="/blog/advertising-mistakes-sri-lankan-businesses" element={<BlogPost82 />} />
              <Route path="/blog/social-media-marketing-packages-sri-lanka" element={<BlogPost83 />} />
              <Route path="/blog/social-media-marketing-agency-sri-lanka" element={<BlogPost84 />} />
              <Route path="/blog/social-media-marketing-sri-lanka-guide-2025" element={<BlogPost85 />} />
              <Route path="/blog/what-is-social-media-marketing" element={<BlogPost86 />} />
              <Route path="/blog/what-does-a-social-media-marketing-agency-do" element={<BlogPost87 />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/advertising-in-sri-lanka" element={<AdvertisingInSriLanka />} />
              <Route path="/logo-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/brand-identity-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/company-profile-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/social-media-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/facebook-ad-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/instagram-post-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/banner-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/email-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/landing-page-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/ui-ux-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/website-ui-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/flyer-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/brochure-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/poster-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/packaging-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/motion-graphics-sri-lanka" element={<DesignSubService />} />
              <Route path="/video-ad-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/presentation-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/infographic-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/label-design-sri-lanka" element={<DesignSubService />} />
              <Route path="/event-management-sri-lanka" element={<EventManagement />} />
              <Route path="/corporate-event-management-sri-lanka" element={<CorporateEventManagement />} />
              <Route path="/wedding-planning-sri-lanka" element={<WeddingPlanning />} />
              <Route path="/event-marketing-sri-lanka" element={<EventMarketing />} />
              <Route path="/product-launch-events-sri-lanka" element={<ProductLaunchEvents />} />
              
              <Route path="/:slug" element={<IndustryPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppButton />
        <BlogCTAInjector />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
