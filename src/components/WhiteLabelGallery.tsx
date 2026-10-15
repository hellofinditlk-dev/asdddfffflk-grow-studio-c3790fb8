import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { whiteLabelGallery } from '@/data/white-label-gallery';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function WhiteLabelGallery({ onEnquire }: { onEnquire: (reference: string) => void }) {
  const [selected, setSelected] = useState<number | null>(null);
  const [category, setCategory] = useState('All work');
  const image = selected === null ? undefined : whiteLabelGallery[selected];
  return <>
    <div className="wl-gallery-filters" aria-label="Portfolio categories">
      {['All work', 'Corporate', 'Travel', 'Retail', 'Education'].map(value => <Button key={value} variant="ghost" className="wl-filter" aria-pressed={value === category} onClick={() => setCategory(value)}>{value}</Button>)}
    </div>
    <div className="wl-portfolio-grid">
      {whiteLabelGallery.map((item, index) => (category === 'All work' || item.category === category) && <article key={item.src} className="wl-work-card">
        <Button variant="ghost" className="wl-gallery-item h-auto w-full overflow-hidden rounded-lg p-0" aria-label={`View ${item.alt}`} onClick={() => setSelected(index)}>
          <img src={item.src} alt={item.alt} loading="lazy" className="aspect-square w-full object-contain" />
        </Button>
        <div className="wl-work-caption"><span>{item.category}</span><Button variant="ghost" className="wl-work-enquire" onClick={() => onEnquire(item.alt)} aria-label={`Enquire about ${item.alt}`}>Create something like this <ArrowRight size={16} /></Button></div>
      </article>)}
    </div>
    <Dialog open={image !== undefined} onOpenChange={open => { if (!open) setSelected(null); }}>
      <DialogContent className="wl-gallery-dialog max-w-3xl" aria-describedby={undefined}>
        <DialogTitle className="sr-only">{image?.alt ?? 'Studio work'}</DialogTitle>
        {image && <img src={image.src} alt={image.alt} className="max-h-[80vh] w-full object-contain" />}
        {image && <div className="flex items-center justify-between gap-2"><Button variant="ghost" aria-label="Previous design" onClick={() => setSelected(current => current === null ? 0 : (current - 1 + whiteLabelGallery.length) % whiteLabelGallery.length)}><ArrowLeft size={18} /></Button><Button onClick={() => { onEnquire(image.alt); setSelected(null); }}>Enquire about this design <ArrowRight size={16} /></Button><Button variant="ghost" aria-label="Next design" onClick={() => setSelected(current => current === null ? 0 : (current + 1) % whiteLabelGallery.length)}><ArrowRight size={18} /></Button></div>}
      </DialogContent>
    </Dialog>
  </>;
}
