import { creatives } from '@/data/work-samples';

// Visually reviewed English-only examples. Keep this selection separate from the public portfolio.
const selection = [
  { index: 1, category: 'Corporate' }, { index: 25, category: 'Corporate' },
  { index: 2, category: 'Travel' }, { index: 3, category: 'Travel' },
  { index: 4, category: 'Retail' }, { index: 6, category: 'Education' },
  { index: 8, category: 'Corporate' }, { index: 9, category: 'Corporate' },
  { index: 10, category: 'Education' }, { index: 11, category: 'Education' },
  { index: 12, category: 'Education' }, { index: 13, category: 'Travel' },
  { index: 15, category: 'Education' }, { index: 16, category: 'Education' },
  { index: 18, category: 'Corporate' }, { index: 20, category: 'Education' },
  { index: 26, category: 'Corporate' }, { index: 28, category: 'Travel' },
];

export const whiteLabelGallery = selection.flatMap(({ index, category }) => {
  const image = creatives[index];
  return image ? [{ ...image, category }] : [];
}).map(image => ({
  ...image,
  // Local Vite does not serve the hosting asset proxy; production keeps relative CDN pointers.
  src: import.meta.env.DEV ? `https://asdddfffflk-grow-studio.lovable.app${image.src}` : image.src,
}));
