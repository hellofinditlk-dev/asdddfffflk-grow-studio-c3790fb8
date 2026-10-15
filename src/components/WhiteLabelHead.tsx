import { useEffect } from 'react';
import shareAsset from '@/assets/white-label-partners-share.jpg.asset.json';

export const WHITE_LABEL_TITLE = 'White Label Design Services for Agencies | Done-for-You Creatives';
export const WHITE_LABEL_DESCRIPTION = 'Done-for-you social posts, carousels, ad creatives and reels for agencies, delivered unbranded so you can resell them under your own brand. 48-hour drafts. Any country.';

export default function WhiteLabelHead() {
  useEffect(() => {
    const oldTitle = document.title;
    const restored: Array<() => void> = [];
    document.title = WHITE_LABEL_TITLE;
    const values = [
      ['name', 'description', WHITE_LABEL_DESCRIPTION],
      ['name', 'robots', 'noindex, nofollow'],
      ['property', 'og:title', WHITE_LABEL_TITLE],
      ['property', 'og:description', WHITE_LABEL_DESCRIPTION],
      ['property', 'og:type', 'website'],
      ['property', 'og:url', 'https://cypherdigital.lk/white-label-design'],
      ['property', 'og:image', `https://asdddfffflk-grow-studio.lovable.app${shareAsset.url}`],
      ['property', 'og:image:width', '1200'],
      ['property', 'og:image:height', '630'],
      ['property', 'og:image:alt', 'Cypher Partners white-label creative portfolio'],
      ['name', 'twitter:title', WHITE_LABEL_TITLE],
      ['name', 'twitter:description', WHITE_LABEL_DESCRIPTION],
      ['name', 'twitter:card', 'summary_large_image'],
      ['name', 'twitter:image', `https://asdddfffflk-grow-studio.lovable.app${shareAsset.url}`],
    ];
    for (const [attribute, key, value] of values) {
      const existing = document.head.querySelector(`meta[${attribute}="${key}"]`);
      const meta = existing ?? document.createElement('meta');
      const original = meta.getAttribute('content');
      if (!existing) { meta.setAttribute(attribute, key); document.head.appendChild(meta); }
      meta.setAttribute('content', value);
      restored.push(() => {
        if (!existing) meta.remove();
        else if (original === null) meta.removeAttribute('content');
        else meta.setAttribute('content', original);
      });
    }
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap';
    document.head.appendChild(fontLink);
    return () => { document.title = oldTitle; restored.forEach(restore => restore()); fontLink.remove(); };
  }, []);
  return null;
}
