import { useState } from "react";
import { ArrowLeft, ArrowRight, ExternalLink, Maximize2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { eventWork, eventBehindTheScenesUrl } from "@/data/eventWork";

export default function EventWorkGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected === null ? undefined : eventWork[selected];
  const move = (delta: number) => setSelected((current) => current === null ? null : (current + delta + eventWork.length) % eventWork.length);

  return (
    <section id="event-work">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <p className="event-eyebrow text-primary mb-4">From our event work</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3">Real events. Real moments.</h2>
            <p className="text-muted-foreground max-w-2xl">A look at academic ceremonies, product launches and the moments that bring an event together.</p>
          </div>
          <Button asChild variant="outline" className="shrink-0 self-start"><a href={eventBehindTheScenesUrl} target="_blank" rel="noopener noreferrer"><Play className="w-4 h-4" /> Behind the scenes on Facebook <ExternalLink className="w-4 h-4" /></a></Button>
        </div>
        <div className="event-work-grid">
          {eventWork.map((photo, index) => (
            <figure key={photo.url} className="m-0 min-w-0">
              <Button variant="ghost" onClick={() => setSelected(index)} className="event-work-photo group" aria-label={`View photo: ${photo.caption}`}>
                <img src={photo.url} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" decoding="async" />
                <span className="event-work-expand"><Maximize2 className="w-4 h-4" /></span>
              </Button>
              <figcaption className="mt-3 text-sm text-muted-foreground">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-border pt-6">
          <p className="font-heading text-lg font-semibold">What are you planning next?</p>
          <Button asChild className="event-quote-button"><a href="#event-enquiry">Start Your Event Brief <ArrowRight className="w-4 h-4" /></a></Button>
        </div>
      </div>
      <Dialog open={active !== undefined} onOpenChange={(open) => { if (!open) setSelected(null); }}>
        <DialogContent className="event-work-dialog max-w-5xl w-[calc(100%-2rem)] p-4 pt-12" onKeyDown={(event) => { if (event.key === "ArrowLeft") move(-1); if (event.key === "ArrowRight") move(1); }}>
          <DialogTitle className="sr-only">Event work photograph</DialogTitle>
          <DialogDescription className="sr-only">{active?.alt}</DialogDescription>
          {active && <img src={active.url} alt={active.alt} width={active.width} height={active.height} className="w-full object-contain max-h-[65vh]" />}
          <div className="flex items-center justify-between gap-3">
            <Button variant="outline" size="icon" onClick={() => move(-1)} aria-label="Previous photo" title="Previous photo"><ArrowLeft /></Button>
            <p className="text-sm text-center text-muted-foreground">{active?.caption}<span className="block mt-1">{selected === null ? 0 : selected + 1} / {eventWork.length}</span></p>
            <Button variant="outline" size="icon" onClick={() => move(1)} aria-label="Next photo" title="Next photo"><ArrowRight /></Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}