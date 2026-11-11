import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const sections = [
  {
    title: "Start with an event brief, not a venue booking",
    paragraphs: [
      "A useful event brief explains why the event is happening, who should attend and what should happen afterwards. A conference may aim to educate existing customers, while a product launch may introduce a new offer to distributors. A staff event has a different audience and success measure. These differences affect the agenda, venue, invitation process, content and follow-up. Define the purpose before committing to a ballroom or stage design.",
      "Include your preferred date, alternative dates, expected guest count, event location, decision-maker and available budget. Identify essential requirements separately from optional ideas. For example, accessible entrances and reliable sound may be essential, while a particular backdrop finish may be optional. Share brand guidelines, presentation needs, dietary requirements and any internal approval procedures. A clear brief makes it easier to compare proposals that cover the same work.",
    ],
  },
  {
    title: "Choose a Sri Lankan venue around practical requirements",
    paragraphs: [
      "For an event in Colombo, consider arrival traffic, parking, public transport access and the time guests will leave. For a regional event, review accommodation and transport for speakers or visiting teams. A venue that looks attractive in photographs may still be difficult for guests to reach. Ask how many people fit comfortably in your chosen seating layout, not just the venue's maximum capacity.",
      "Check the venue's loading access, setup window, sound restrictions, power supply, accessible toilets, emergency exits and rules for external suppliers. Find out whether furniture, lighting, screens, catering or technical staff are included. Outdoor events need an agreed wet-weather alternative and a clear decision point for changing plans. Confirm venue conditions in writing before paying, and make sure the production team can inspect the space before finalising the setup.",
    ],
  },
  {
    title: "Separate the organiser's fee from the total event budget",
    paragraphs: [
      "An event management fee and the full event cost are not the same thing. The organiser's work may cover planning, coordination and on-site supervision, while the venue, meals, production equipment and entertainment have separate costs. Some proposals combine these items. Others list supplier charges individually. Ask which format is being offered and who is responsible for paying each supplier so that a low headline fee does not hide a larger overall commitment.",
      "Request separate lines for venue hire, food and beverages, audiovisual equipment, staging, decoration, staffing, transport, accommodation, photography, video and promotion. Identify applicable taxes, service charges, overtime, additional guests and changes after approval. Payment dates, cancellation conditions and refund terms should be confirmed in the written proposal; they should not be inferred from a general website guide. Cypher Digital's event prices require a brief and a custom quotation rather than an unverified fixed rate.",
      "Keep a contingency amount that suits the event's risks rather than copying a universal percentage. An outdoor activation, a hotel conference and a small indoor workshop have different uncertainties. Decide who can approve extra expenditure and how approval will be recorded. Where the budget is limited, protect the elements that affect safety, guest comfort and the core programme before spending on optional production details.",
    ],
  },
  {
    title: "Build a run sheet with named responsibilities",
    paragraphs: [
      "The run sheet is the working schedule used by the event team. It should cover supplier arrival, setup, technical checks, registration, programme segments, breaks and pack-down. Each step needs an owner, a start time and a dependency. For example, a presentation cannot begin until the speaker's file is checked, the microphone is working and the stage manager knows the cue. Share the latest version with everyone who needs it.",
      "Assign clear responsibilities for guest registration, speaker support, venue coordination, catering, sound, lighting and emergency communication. Agree who can change the programme on the day. A rehearsal helps identify problems with presentation formats, video playback, transitions and microphone handovers. Keep contact information and backup arrangements accessible to the team, while avoiding unnecessary distribution of guests' personal information.",
    ],
  },
  {
    title: "Plan invitations, registration and event promotion together",
    paragraphs: [
      "Invitations should make the next step obvious: register, confirm attendance, request an invitation or contact the organiser. State the location, date, arrival time and any attendance conditions clearly. A public promotional event needs a different campaign from a private customer meeting. Do not assume that a large social media audience will translate into the right attendees; focus on the people the programme is designed to serve.",
      "Connect the promotion plan to registration capacity and the event budget. Decide who will answer questions, confirm bookings and communicate changes. Registration forms should collect only the information needed to manage attendance and explain any intended marketing follow-up. If promotional content is planned in Sinhala, Tamil or English, arrange appropriate copy review rather than relying on literal translations. Advertising spend, creative work and campaign management should be identified separately in the proposal.",
    ],
  },
  {
    title: "Capture useful content without disrupting the experience",
    paragraphs: [
      "Photography and video should follow a brief, not simply document everything. Identify the moments needed for your website, social channels, stakeholder report or future campaigns. A launch may need product demonstrations and spokesperson footage, while a conference may need speaker highlights and approved presentation material. Confirm filming permissions, venue restrictions, music rights and whether any sessions or attendees must not be recorded.",
      "Agree the deliverables before the event: edited photographs, a highlight video, interviews or short social clips. Clarify formats, review steps, delivery dates and ownership or usage permissions in writing. Let attendees know when filming is taking place and offer a practical way to raise privacy concerns. Content quality depends on planning access, sound and lighting as well as the camera equipment, so coordinate the recording team with the programme team early.",
    ],
  },
  {
    title: "Measure the outcome that matches the event's purpose",
    paragraphs: [
      "Choose measures before promotion starts. For a customer workshop, useful measures may include registrations, attendance, participation and requested follow-up meetings. For a product launch, you may track qualified enquiries and distributor conversations. For an internal event, feedback and participation may be more relevant than sales. None of these measures guarantees revenue, and a well-attended event does not automatically prove commercial success.",
      "Separate actual attendance from registrations, and separate relevant enquiries from general interactions. Record the source of registrations where possible so the team can understand which promotional channels contributed. When reporting advertising performance, distinguish impressions and clicks from confirmed attendees or qualified leads. Compare results with the original objectives and document limitations such as incomplete tracking or attendees who registered through offline channels.",
      "Post-event follow-up should reflect what attendees agreed to receive. Send relevant materials, answer outstanding questions and assign a person to handle genuine business enquiries. Avoid treating every guest as a sales lead. A closing report can summarise delivery, spend, attendance, feedback and next steps without inventing a return-on-investment figure. Revenue attribution needs reliable sales records and an agreed method, not a headline claim.",
    ],
  },
  {
    title: "Compare event proposals on scope, evidence and conditions",
    paragraphs: [
      "Ask each organiser to explain exactly what is included and what remains your responsibility. Compare the number of planning meetings, on-site staffing, supplier coordination, technical checks and reporting deliverables. Ask for relevant work examples and permission to contact references where available. A proposal for a small workshop should not be assessed only against the visual production of a large gala; look for evidence that matches your event's requirements.",
      "Confirm the decision process for substitutions, delays, extra guests and additional costs. Discuss insurance, required permissions and safety responsibilities with the appropriate venue or supplier rather than assuming every organiser includes them. Before signing, review the scope, payment schedule, cancellation terms and change process. For Cypher Digital, ask for the specific arrangements available for your date and location; this page is a planning guide, not a guarantee of availability or a substitute for a written agreement.",
    ],
  },
];

export default function EventPlanningGuide() {
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
          <Button asChild size="lg"><a href="https://wa.me/94701772626?text=Hi%2C%20I%20would%20like%20to%20discuss%20an%20event%20brief" target="_blank" rel="noopener noreferrer">Discuss Your Event Brief <ArrowRight className="w-4 h-4 ml-2" /></a></Button>
        </div>
      </div>
    </section>
  );
}