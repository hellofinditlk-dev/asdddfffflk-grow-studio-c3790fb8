import { Button } from "@/components/ui/button";
import post6 from "@/assets/work/6-post.jpg.asset.json";
import post4 from "@/assets/work/4-post.jpg.asset.json";
import cima from "@/assets/work/future-with-cima.jpg.asset.json";
import meedhood from "@/assets/work/meedhood-copy.jpg.asset.json";
import south from "@/assets/work/the-south-has-arrived.jpg.asset.json";
import revision from "@/assets/work/revision-copy.jpg.asset.json";
import artboard from "@/assets/work/artboard-1.jpg.asset.json";
import kensley from "@/assets/work/kensley-copyuy.jpg.asset.json";
import hotel from "@/assets/work/hotel-art-work-copy.jpg.asset.json";
import nisaco from "@/assets/work/5-postt.jpg.asset.json";
import mba from "@/assets/work/mba-com-1000x1000-copy.jpg.asset.json";
import careerReady from "@/assets/work/get-career-ready-while-studying.jpg.asset.json";
import langCn from "@/assets/work/china-japan-post-02.jpg.asset.json";
import safety from "@/assets/work/post-02.jpg.asset.json";
import barista from "@/assets/work/barista-04.jpg.asset.json";
import nibm from "@/assets/work/post-01-02.jpg.asset.json";
import hospitality from "@/assets/work/hotel.jpg.asset.json";
import logistics from "@/assets/work/post-01.jpg.asset.json";
import langEs from "@/assets/work/spanish-korean-post.jpg.asset.json";

const videos = [
  { id: "K5iZaX8-QaE", title: "AI video production sample for a Sri Lankan brand" },
  { id: "qKmgqf9IpUw", title: "Social media reel produced by Cypher Digital" },
  { id: "n2nJ6gJqOtU", title: "Product promo video for a Sri Lankan business" },
  { id: "2RHQ06uIEuA", title: "Short-form ad creative sample" },
  { id: "vXoPdG-WYDs", title: "Brand storytelling video sample" },
  { id: "LrBEZw9PPBo", title: "Campaign video sample by Cypher Digital" },
];

const creatives = [
  { src: post4.url, alt: "Retail mall weekend shopping social media creative" },
  { src: post6.url, alt: "Furniture and home decor promotional creative" },
  { src: cima.url, alt: "CIMA course registration campaign creative" },
  { src: meedhood.url, alt: "Kitchen accessories delivery platform campaign creative" },
  { src: south.url, alt: "University campus launch campaign creative" },
  { src: revision.url, alt: "CIMA revision class lecturer panel creative" },
  { src: artboard.url, alt: "UK honours degree pathway campaign creative" },
  { src: kensley.url, alt: "Postgraduate diploma admissions creative" },
  { src: hotel.url, alt: "Boutique hotel room rates promotional creative" },
  { src: nisaco.url, alt: "Shopping mall credit card offers campaign creative" },
  { src: mba.url, alt: "London MBA admissions campaign creative" },
  { src: careerReady.url, alt: "CIMA alongside degree student campaign creative" },
  { src: langCn.url, alt: "Chinese and Japanese language course creative in Sinhala" },
  { src: safety.url, alt: "Corporate workplace safety awareness creative" },
  { src: barista.url, alt: "Barista skills course paid internship creative" },
  { src: nibm.url, alt: "UK honours degree in Galle campus campaign creative" },
  { src: hospitality.url, alt: "Hospitality and tourism diploma course creative" },
  { src: logistics.url, alt: "Logistics and transportation sector brand creative" },
  { src: langEs.url, alt: "Spanish and Korean language course creative" },
];

interface OurWorkSectionProps {
  service?: string;
}

const OurWorkSection = ({ service = "digital marketing" }: OurWorkSectionProps) => {
  const wa = `https://wa.me/94701772626?text=${encodeURIComponent(
    `Hi, I saw your work samples and I need ${service} for my business`,
  )}`;

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary text-center mb-3">Our Work</p>
        <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-center mb-3">Real Work We've Delivered for Sri Lankan Brands</h2>
        <p className="text-sm text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          Videos, reels and campaign creatives produced by our team. See the quality before you decide.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
          {videos.map((v) => (
            <div key={v.id} className="rounded-xl overflow-hidden border border-border bg-card">
              <div className="relative w-full" style={{ paddingBottom: "177.78%" }}>
                <iframe
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        <h3 className="font-heading text-lg font-bold text-center mb-6">Campaign Creatives &amp; Designs</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {creatives.map((c) => (
            <img
              key={c.src}
              src={c.src}
              alt={c.alt}
              loading="lazy"
              decoding="async"
              className="w-full h-auto rounded-xl border border-border bg-card object-cover"
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <Button asChild size="lg" className="bg-[hsl(25,95%,53%)] !text-white hover:bg-[hsl(25,95%,45%)] rounded-xl h-12 px-7 font-semibold border-none">
            <a href={wa} target="_blank" rel="noopener noreferrer">Get Work Like This on WhatsApp</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection;