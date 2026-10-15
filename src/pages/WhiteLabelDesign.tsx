import { Button } from '@/components/ui/button';
import WhiteLabelGallery from '@/components/WhiteLabelGallery';
import WhiteLabelHead from '@/components/WhiteLabelHead';
import WhiteLabelInquiryForm from '@/components/WhiteLabelInquiryForm';
import CtaClickTracker from '@/components/CtaClickTracker';
import { whiteLabelGallery } from '@/data/white-label-gallery';
import { trackCtaClick } from '@/lib/trackCtaClick';
import { MessageCircle, ArrowRight, Check } from 'lucide-react';
import { useState } from 'react';
import logo from '@/assets/logo.png';
import { partnerMoney, type PartnerCurrency } from '@/data/white-label-partners';
import { PartnerCurrencyPicker, PartnerGuarantee, PartnerProfitCalculator, PartnerTrustRow } from '@/components/WhiteLabelPartnerSections';
import '@/styles/white-label-design.css';

export default function WhiteLabelDesign() {
  const [inspiration, setInspiration] = useState('');
  const [currency, setCurrency] = useState<PartnerCurrency>('USD');
  const money = (price: number, decimals = 0) => partnerMoney(price, currency, decimals);
  const whatsapp = `https://wa.me/94701772626?text=${encodeURIComponent('Hi Cypher Partners, I run an agency and would like to discuss white-label design services and free samples.')}`;
  const enquire = (reference: string) => {
    setInspiration(reference);
    void trackCtaClick({ ctaType: 'quote', ctaLabel: `Enquire: ${reference}`, placement: 'White label · Portfolio', href: '#sample' });
    document.getElementById('sample')?.scrollIntoView({ behavior: 'smooth' });
  };
  return <><WhiteLabelHead /><CtaClickTracker />
<div className="white-label-page wl-93">
<header className=" wl-0">
<nav aria-label="Main" className=" wl-1">
<div className=" wl-2"><img src={logo} alt="Cypher Digital logo" className="wl-logo" /><span className=" wl-3">Partners</span></div>
<div className=" wl-4">
<a className=" wl-5" href="#single">Per creative</a>
<a className=" wl-5" href="#packages">Packages</a>
<a className=" wl-5" href="#how">How it works</a>
<a className=" wl-5" href="#work">Our work</a>
<a className=" wl-5" href="#faq">FAQ</a>
<Button asChild className="wl-button"><a className=" wl-6" href="#sample">Get free samples</a></Button>
</div>
</nav>
</header>
<section className=" wl-7">

<div className=" wl-8">
<div className=" wl-9">White-label design studio for agencies</div>
<h1 className=" wl-10">Your creative team,<br className="wl-h1-br" /><span>without the hiring.</span></h1>
<p className=" wl-11">Done-for-you social posts, ad creatives and reels, delivered unbranded in 48 hours. You resell them as your own.</p>
<div className=" wl-12">
<Button asChild className="wl-button"><a className=" wl-13" href="#sample">Get 3 free creatives</a></Button>
<Button asChild className="wl-button"><a className=" wl-14" href="#packages">See packages</a></Button>
<Button asChild className="wl-button wl-whatsapp"><a href={whatsapp} target="_blank" rel="noopener noreferrer" data-cta-placement="White label · Hero"><MessageCircle size={18} /> Talk on WhatsApp</a></Button>
</div>
<div className="wl-hero-promises"><span><Check size={16} /> NDA & unbranded delivery</span><span><Check size={16} /> USD wholesale pricing</span><span><Check size={16} /> Fluent English team</span><span><Check size={16} /> Dedicated account manager</span><span><Check size={16} /> Any country</span></div>
</div>
<div className="wl-feed-grid" aria-label="Studio portfolio in feed mockups">{whiteLabelGallery.slice(0, 9).map((item, index) => <div className="wl-feed-mockup" key={item.src}><div className="wl-feed-top"><span className="wl-feed-avatar" />Your client’s brand<span>···</span></div><img src={item.src} alt={item.alt || `Agency creative ${index + 1}`} /><div className="wl-feed-bottom">♡ &nbsp; ◇ &nbsp; ↗ <span>▱</span></div></div>)}</div>
</section>
<PartnerTrustRow />
<section className="wl-delivery-band">
<div className=" wl-15">
<div className=" wl-16">Every creative includes</div>
<div className=" wl-17">
<div className=" wl-18"><div className=" wl-19">48h</div><div className=" wl-20">Standard turnaround</div></div>
<div className=" wl-18"><div className=" wl-19">2</div><div className=" wl-20">Revision rounds</div></div>
<div className=" wl-18"><div className=" wl-19">100%</div><div className=" wl-20">Source files yours</div></div>
<div className=" wl-18"><div className=" wl-19">0</div><div className=" wl-20">Mentions of our name</div></div>
</div>
<div className=" wl-16">Delivered as PNG, JPG, MP4 plus editable PSD, AI, Figma or Canva files.</div>
</div>
</section>
<section aria-label="Track record" className=" wl-21">
<div className=" wl-22">
<div><div className=" wl-19">800+</div><div className=" wl-23">brands designed for</div></div>
<div><div className=" wl-19">2,000+</div><div className=" wl-23">campaigns designed and run</div></div>
<div><div className=" wl-19">10+</div><div className=" wl-23">in-house designers, editors and motion artists</div></div>
<div><div className=" wl-19">Any country</div><div className=" wl-23">remote delivery, working to your time zone</div></div>
</div>
</section>
<section className=" wl-24" id="single">
<div className="wl-pricing-top"><h2 className=" wl-25">Price per creative</h2><PartnerCurrencyPicker currency={currency} onChange={setCurrency} /></div><PartnerGuarantee />
<p className=" wl-26">Order one at a time, no contract. Wholesale prices in USD; most partners resell at 2–3x.</p>
<div className=" wl-27">
<table className=" wl-28">
<thead>
<tr className=" wl-29">
<th className=" wl-30" scope="col">Creative</th>
<th className=" wl-30" scope="col">What you get</th>
<th className=" wl-31" scope="col">Price</th>
</tr>
</thead>
<tbody>
<tr className=" wl-32"><td className=" wl-30">Social media post</td><td className=" wl-33">1 static design, 1:1 or 4:5, with caption</td><td className=" wl-34">{money(16)}</td></tr>
<tr className=" wl-32"><td className=" wl-30">Story or banner</td><td className=" wl-33">1 design, 9:16 or web banner size</td><td className=" wl-34">{money(20)}</td></tr>
<tr className=" wl-32"><td className=" wl-30">Carousel</td><td className=" wl-33">Up to 5 slides, one story across them</td><td className=" wl-34">{money(60)}</td></tr>
<tr className=" wl-32"><td className=" wl-30">Ad creative set</td><td className=" wl-33">1 concept in 1:1, 4:5 and 9:16 for Meta and Google</td><td className=" wl-34">{money(45)}</td></tr>
<tr className=" wl-32"><td className=" wl-30">Reel edit</td><td className=" wl-33">Up to 30 sec from your footage, captions, music</td><td className=" wl-34">{money(45)}</td></tr>
<tr className=" wl-32"><td className=" wl-30">Motion reel</td><td className=" wl-33">Up to 60 sec, motion graphics, stock footage</td><td className=" wl-34">{money(75)}</td></tr>
<tr className=" wl-32"><td className=" wl-30">AI video reel</td><td className=" wl-33">15–30 sec, AI character, voice-over and script</td><td className=" wl-34">{money(75)}</td></tr>
<tr className=" wl-32"><td className=" wl-30">AI video ad</td><td className=" wl-33">60 sec, AI character, voice-over and script</td><td className=" wl-34">{money(125)}</td></tr>
<tr className=" wl-32"><td className=" wl-30">Flyer or poster</td><td className=" wl-33">Print-ready A4/A3 or digital</td><td className=" wl-34">{money(40)}</td></tr>
<tr className=" wl-32"><td className=" wl-30">Logo design</td><td className=" wl-33">3 concepts, final files and colour variants</td><td className=" wl-34">{money(150)}</td></tr>
</tbody>
</table>
</div>
<p className=" wl-35">24-hour rush: +50%. Extra revision rounds: free when the brief changes nothing; otherwise quoted.</p>
</section>
<section className=" wl-36" id="packages">
<h2 className=" wl-25">Monthly packages</h2>
<p className=" wl-37">Per client, per month. The more you order, the less each creative costs. Unused creatives roll over one month.</p>
<h3 className=" wl-38">Social media post creation</h3>
<div className=" wl-39">
<div className=" wl-40">
<div className=" wl-41">Posts 12</div>
<div><span className=" wl-42">{money(179)}</span><span className=" wl-43"> /month</span></div>
<div className=" wl-23">{money(14.92, 2)} per post</div>
<ul className=" wl-44"><li>12 posts, incl. up to 2 carousels</li><li>Captions and hashtags</li><li>Monthly content calendar</li></ul>
</div>
<div className=" wl-45">
<div className=" wl-46"><span className=" wl-41">Posts 20</span><span className=" wl-47">Most resold</span></div>
<div><span className=" wl-42">{money(289)}</span><span className=" wl-43"> /month</span></div>
<div className=" wl-23">{money(14.45, 2)} per post</div>
<ul className=" wl-44"><li>20 posts, incl. up to 4 carousels</li><li>4 stories</li><li>Captions and content calendar</li></ul>
</div>
<div className=" wl-40">
<div className=" wl-41">Posts 30</div>
<div><span className=" wl-42">{money(419)}</span><span className=" wl-43"> /month</span></div>
<div className=" wl-23">{money(13.97, 2)} per post</div>
<ul className=" wl-44"><li>30 posts, incl. up to 6 carousels</li><li>8 stories</li><li>Captions and content calendar</li></ul>
</div>
</div>
<h3 className=" wl-38">Reel creation</h3>
<div className=" wl-39">
<div className=" wl-40">
<div className=" wl-41">Reels 4</div>
<div><span className=" wl-42">{money(159)}</span><span className=" wl-43"> /month</span></div>
<div className=" wl-23">{money(39.75, 2)} per reel</div>
<ul className=" wl-44"><li>4 reels up to 30 sec</li><li>Captions, music, hooks</li><li>Cover image for each</li></ul>
</div>
<div className=" wl-45">
<div className=" wl-46"><span className=" wl-41">Reels 8</span><span className=" wl-47">Best value</span></div>
<div><span className=" wl-42">{money(299)}</span><span className=" wl-43"> /month</span></div>
<div className=" wl-23">{money(37.38, 2)} per reel</div>
<ul className=" wl-44"><li>8 reels up to 30 sec</li><li>2 can be motion or AI reels</li><li>Captions, music, covers</li></ul>
</div>
<div className=" wl-40">
<div className=" wl-41">Reels 12</div>
<div><span className=" wl-42">{money(449)}</span><span className=" wl-43"> /month</span></div>
<div className=" wl-23">{money(37.42, 2)} per reel</div>
<ul className=" wl-44"><li>12 reels up to 60 sec</li><li>4 can be motion or AI reels</li><li>Captions, music, covers</li></ul>
</div>
</div>
<h3 className=" wl-38">Done-for-you ad creatives</h3>
<div className=" wl-39">
<div className=" wl-40">
<div className=" wl-41">Creatives 10</div>
<div><span className=" wl-42">{money(379)}</span><span className=" wl-43"> /month</span></div>
<div className=" wl-23">{money(37.90, 2)} per creative set</div>
<ul className=" wl-44"><li>10 ad concepts, 3 sizes each</li><li>Headline and copy variants</li><li>Ready for Meta and Google</li></ul>
</div>
<div className=" wl-45">
<div className=" wl-46"><span className=" wl-41">Creatives 25</span><span className=" wl-47">For ad testing</span></div>
<div><span className=" wl-42">{money(899)}</span><span className=" wl-43"> /month</span></div>
<div className=" wl-23">{money(35.96, 2)} per creative set</div>
<ul className=" wl-44"><li>25 ad concepts, 3 sizes each</li><li>Up to 5 can be video ads</li><li>Copy variants for A/B tests</li></ul>
</div>
<div className=" wl-40">
<div className=" wl-41">Creatives 50</div>
<div><span className=" wl-42">{money(1649)}</span><span className=" wl-43"> /month</span></div>
<div className=" wl-23">{money(32.98, 2)} per creative set</div>
<ul className=" wl-44"><li>50 ad concepts, 3 sizes each</li><li>Up to 10 can be video ads</li><li>Split across several of your clients</li></ul>
</div>
</div>
<div className=" wl-48">
<div className=" wl-49">
<div className=" wl-50">Unlimited design subscription</div>
<h3 className=" wl-51">A dedicated designer for all your clients</h3>
<p className=" wl-52">Unlimited requests across every client, one active request at a time, most delivered in 1–2 business days. Posts, ads, flyers, decks, banners.</p>
</div>
<div className=" wl-53">
<div><span className=" wl-54">{money(800)}</span><span className=" wl-55"> /month</span></div>
<div className=" wl-56">Two active requests: {money(1199)} /month</div>
<Button asChild className="wl-button"><a className=" wl-57" href="#sample">Start with a free sample</a></Button>
</div>
</div>
</section>
<PartnerProfitCalculator currency={currency} />
<section className=" wl-36" id="add-ons">
<h2 className=" wl-25">Also available on request</h2>
<p className=" wl-37">Alongside the creatives, our team can run your client's day-to-day channels under your agency's name. Ask for any of these when you send your brief and we'll quote per client based on scope.</p>
<div className=" wl-39">
<div className=" wl-40">
<div className=" wl-41">Social media management</div>
<ul className=" wl-44"><li>Content calendars, posting and scheduling</li><li>Comment and message handling</li><li>Monthly reporting for your client</li></ul>
</div>
<div className=" wl-40">
<div className=" wl-41">Google Ads management</div>
<ul className=" wl-44"><li>Search, display and YouTube campaigns</li><li>Budgets, keywords and ongoing optimisation</li><li>Performance reports in your name</li></ul>
</div>
<div className=" wl-40">
<div className=" wl-41">Facebook page management</div>
<ul className=" wl-44"><li>Page setup, upkeep and branding</li><li>Posts, replies and inbox handling</li><li>Insights summaries each month</li></ul>
</div>
</div>
<p className=" wl-35">Not sure what your client needs? <a href="#sample">Send the brief</a> and we'll suggest the right mix.</p>
</section>
<section className=" wl-58" id="how">
<h2 className=" wl-25">How it works</h2>
<p className=" wl-59">You keep the client relationship. We work in the background. Your client only ever sees your agency.</p>
<div className=" wl-60">
<div className=" wl-61"><div className=" wl-62">01</div><h3 className=" wl-63">Send a brief</h3><p className=" wl-64">Brand guide, logo, copy points or footage. One short form per request.</p></div>
<div className=" wl-61"><div className=" wl-62">02</div><h3 className=" wl-63">We design</h3><p className=" wl-64">First drafts within 48 hours, shared in your Slack, Teams or Trello.</p></div>
<div className=" wl-61"><div className=" wl-62">03</div><h3 className=" wl-63">You review</h3><p className=" wl-64">Two revision rounds included. Approve, and we send final and source files.</p></div>
<div className=" wl-61"><div className=" wl-62">04</div><h3 className=" wl-63">You deliver as yours</h3><p className=" wl-64">No watermark, no metadata, no Cypher name anywhere. Bill at your own rates.</p></div>
</div>
</section>
<section className=" wl-65">
<div className=" wl-66">
<h2 className=" wl-25">Why agencies can partner with us 100%</h2>
<p className=" wl-67">You put your name on our work, so reliability matters more than price. Here's what you can count on.</p>
<div className=" wl-68">
<div className=" wl-69"><h3 className=" wl-70">Proven at scale</h3><p className=" wl-52">800+ brands and 2,000+ campaigns across education, retail, travel, hospitality, logistics and more.</p></div>
<div className=" wl-69"><h3 className=" wl-70">Strict confidentiality</h3><p className=" wl-52">NDA before day one. We never name your clients, never show their work in our portfolio, never contact them.</p></div>
<div className=" wl-69"><h3 className=" wl-70">On-time, every time</h3><p className=" wl-52">48-hour drafts, a named account lead, and a backup designer on every account so work never stalls.</p></div>
<div className=" wl-69"><h3 className=" wl-70">Any country, any time zone</h3><p className=" wl-52">We work to your hours with async updates in your Slack, Teams or email, wherever your agency is.</p></div>
<div className=" wl-69"><h3 className=" wl-70">Fluent English, every time</h3><p className=" wl-52">Captions, ad copy, decks and client updates are written in clear, natural English — ready to send to your clients as they are.</p></div>
<div className=" wl-69"><h3 className=" wl-70">Your dedicated account manager</h3><p className=" wl-52">One named contact owns your briefs end to end, so you never repeat yourself or chase status updates.</p></div>
</div>
</div>
</section>
<section className=" wl-71" id="work">
<div className="wl-9">Your next creative partner</div>
<h2 className=" wl-25">Work from our studio</h2>
<p className=" wl-72">Explore English-language social posts and campaign creatives from our studio. Choose a design direction for your next client brief.</p>
<WhiteLabelGallery onEnquire={enquire} />
<div className="wl-portfolio-end"><p>Your client’s brand. Your agency’s name. Our creative team.</p><Button asChild className="wl-button wl-whatsapp"><a href={whatsapp} target="_blank" rel="noopener noreferrer" data-cta-placement="White label · Portfolio"><MessageCircle size={18} /> Discuss your client’s creatives</a></Button></div>
</section>
<section className=" wl-76" id="sample">
<div className=" wl-77">
<div className=" wl-78">
<h2 className=" wl-79">Try us free: 3 creatives for one of your clients.</h2>
<p className=" wl-80">Send a client's brand guide. We'll design 3 posts or ad creatives within 48 hours, unbranded and free. If you like them, order by the piece or pick a package.</p>
</div>
<div className=" wl-81">
<WhiteLabelInquiryForm inspiration={inspiration} />
<Button asChild className="wl-button wl-whatsapp"><a href={whatsapp} target="_blank" rel="noopener noreferrer" data-cta-placement="White label · Free samples"><MessageCircle size={18} /> Or talk on WhatsApp</a></Button>
</div>
</div>
</section>
<section className=" wl-84" id="faq">
<h2 className=" wl-85">Questions agencies ask</h2>
<div className=" wl-86">
<div className=" wl-87"><h3 className=" wl-88">Can one package cover several of my clients?</h3><p className=" wl-64">Ad creative packs and the design subscription can be split across clients. Post and reel packs are per client, so each brand gets a consistent look.</p></div>
<div className=" wl-87"><h3 className=" wl-88">Who owns the designs?</h3><p className=" wl-64">You and your client, once paid. We hand over the source files and keep nothing back.</p></div>
<div className=" wl-87"><h3 className=" wl-88">Will my client ever know?</h3><p className=" wl-64">Not from us. We sign an NDA and a non-solicitation agreement, never contact your clients, and never show their work in our portfolio.</p></div>
<div className=" wl-87"><h3 className=" wl-88">Which countries do you work with?</h3><p className=" wl-64">Any. We deliver remotely and adapt to your language, market and time zone.</p></div>
<div className=" wl-87"><h3 className=" wl-88">What about stock images, fonts and music?</h3><p className=" wl-64">We use licensed or royalty-free assets. Premium stock a client specifically asks for is billed at cost.</p></div>
<div className=" wl-89"><h3 className=" wl-88">How do we pay?</h3><p className=" wl-64">Single creatives are invoiced weekly; packages monthly in advance, in USD by card or bank transfer. No lock-in.</p></div>
</div>
</section>
<footer className=" wl-90">
<div className=" wl-91">
<div><strong className=" wl-92">Cypher Partners</strong> — the white-label division of <a href="https://cypherdigital.lk/">Cypher Digital</a>, Colombo, Sri Lanka</div>
<div><a href="mailto:hello.cypherdigital@gmail.com" data-cta-placement="White label · Footer">hello.cypherdigital@gmail.com</a> · +94 70 177 2626</div>
</div>
</footer>
<Button asChild className="wl-button wl-mobile-samples"><a className="wl-13" href="#sample" data-cta-placement="White label · Mobile samples">Get 3 free creatives<ArrowRight size={18} /></a></Button>
</div>
</>;
}
