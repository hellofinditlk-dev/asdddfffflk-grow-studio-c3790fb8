import { eventPlanningGuideSections as sections } from "@/data/eventManagementContent";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWhatsappNumber } from "@/lib/whatsapp";



export default function EventPlanningGuide() {
  const whatsappNumber = useWhatsappNumber();
  return (
    <section className="py-16 lg:py-20" id="event-planning-guide">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-2xl md:text-3xl font-extrabold mb-6">A Practical Event Planning Guide for Sri Lankan Businesses</h2>
        <p className="text-sm text-muted-foreground leading-relaxed mb-8">Use the guidance below to prepare a brief, compare quotations and connect your event to a realistic promotion and follow-up plan.</p>
        <h3 className="font-heading text-xl font-bold mb-4">Which Event Planning Scope Fits Your Brief?</h3>
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm text-left">
            <caption className="text-left text-muted-foreground mb-3">Planning options to discuss, not pre-priced packages or confirmed inclusions.</caption>
            <thead><tr className="border-b border-border"><th scope="col" className="p-3">Requirement</th><th scope="col" className="p-3">Scope to discuss</th><th scope="col" className="p-3">Confirm before booking</th></tr></thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-border"><th scope="row" className="p-3 font-medium">Venue and suppliers already booked</th><td className="p-3">Programme coordination and on-site responsibilities</td><td className="p-3">Handover, staffing and supplier contacts</td></tr>
              <tr className="border-b border-border"><th scope="row" className="p-3 font-medium">A new event from the first brief</th><td className="p-3">Planning, venue review, production and supplier coordination</td><td className="p-3">Separate fees, approval stages and payment terms</td></tr>
              <tr className="border-b border-border"><th scope="row" className="p-3 font-medium">An event that needs an audience</th><td className="p-3">Promotion, registration communications and campaign reporting</td><td className="p-3">Ad spend, target audience and consent requirements</td></tr>
              <tr><th scope="row" className="p-3 font-medium">Content for use after the event</th><td className="p-3">Photography, interviews, highlight footage or social clips</td><td className="p-3">Permissions, editing, delivery dates and usage rights</td></tr>
            </tbody>
          </table>
        </div>
        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-heading text-xl font-bold mb-4">{section.title}</h3>
              <div className="space-y-4">
                {section.paragraphs.map((paragraph) => <p key={paragraph} className="text-sm text-muted-foreground leading-relaxed">{paragraph}</p>)}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-border pt-8">
          <h3 className="font-heading text-xl font-bold mb-4">Connect Your Event to Relevant Marketing Services</h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">For conferences and business programmes, explore <Link className="text-primary hover:underline" to="/corporate-event-management-sri-lanka">corporate event management</Link>. New product introductions can use a separate <Link className="text-primary hover:underline" to="/product-launch-events-sri-lanka">product launch event brief</Link>, while invitations and awareness campaigns belong in your <Link className="text-primary hover:underline" to="/event-marketing-sri-lanka">event marketing plan</Link>.</p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">Plan ongoing promotion with <Link className="text-primary hover:underline" to="/social-media-management-sri-lanka">social media management in Sri Lanka</Link> and review <Link className="text-primary hover:underline" to="/social-media-marketing-packages-sri-lanka">social media packages</Link> separately from event production costs. For paid reach, discuss <Link className="text-primary hover:underline" to="/facebook-ads-sri-lanka">Facebook advertising</Link>; for approved event footage, explore <Link className="text-primary hover:underline" to="/video-production-sri-lanka">video production</Link>.</p>
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">Where attendees request a business conversation, a planned <Link className="text-primary hover:underline" to="/lead-follow-up-services-sri-lanka">lead follow-up service</Link> can support the next step. You can also read our guide to <Link className="text-primary hover:underline" to="/blog/corporate-event-management-sri-lanka-choose-agency">choosing a corporate event agency</Link> before comparing proposals. These are related services, not automatic inclusions in every event quotation.</p>
          <h3 className="font-heading text-xl font-bold mb-4">What to Send When Requesting an Event Quotation</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground mb-6">
            <li>Event purpose, preferred date and alternative dates.</li>
            <li>City, venue shortlist and expected number of guests.</li>
            <li>Required planning, production, catering and promotion scope.</li>
            <li>Available budget, approval contact and any procurement requirements.</li>
            <li>Accessibility, language, dietary and recording requirements.</li>
          </ul>
          <Button asChild size="lg"><a href={`https://wa.me/${whatsappNumber}?text=Hi%2C%20I%20would%20like%20to%20discuss%20an%20event%20brief`} target="_blank" rel="noopener noreferrer">Discuss Your Event Brief <ArrowRight className="w-4 h-4 ml-2" /></a></Button>
        </div>
      </div>
    </section>
  );
}