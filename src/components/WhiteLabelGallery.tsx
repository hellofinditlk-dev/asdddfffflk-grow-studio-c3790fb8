import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { whiteLabelGallery } from '@/data/white-label-gallery';

export default function WhiteLabelGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const image = selected === null ? undefined : whiteLabelGallery[selected];
  return <>
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {whiteLabelGallery.map((item, index) => <Button key={item.src} variant="ghost" className="wl-gallery-item h-auto w-full overflow-hidden rounded-[10px] p-0" aria-label={`View ${item.alt}`} onClick={() => setSelected(index)}>
        <img src={item.src} alt={item.alt} loading="lazy" className="aspect-[4/5] w-full object-contain" />
      </Button>)}
    </div>
    <Dialog open={image !== undefined} onOpenChange={open => { if (!open) setSelected(null); }}>
      <DialogContent className="wl-gallery-dialog max-w-3xl">
        <DialogTitle className="sr-only">{image?.alt ?? 'Studio work'}</DialogTitle>
        {image && <img src={image.src} alt={image.alt} className="max-h-[80vh] w-full object-contain" />}
      </DialogContent>
    </Dialog>
  </>;
}
