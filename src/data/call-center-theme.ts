// Light site-theme overrides + subtle call-center accents for the call center page.
export const callCenterThemeCss = `
.ccx{
  --bg:hsl(var(--background));--bg-soft:hsl(var(--accent));
  --surface:hsl(var(--card));--surface-2:hsl(var(--accent));
  --border:hsl(var(--border));--border-2:hsl(var(--border));
  --text:hsl(var(--foreground));--muted:hsl(var(--muted-foreground));
  --violet:hsl(var(--primary));--violet-2:hsl(var(--primary));--blue:hsl(var(--primary));--lime:hsl(var(--cta));
  --grad:linear-gradient(120deg,hsl(var(--primary)),hsl(var(--primary) / .75));
  --grad-2:linear-gradient(120deg,hsl(var(--primary)),hsl(var(--cta)));
  color-scheme:light;font-family:var(--font-body);
}
.ccx h1,.ccx h2,.ccx h3,.ccx .btn,.ccx .eyebrow{font-family:var(--font-heading)}
.ccx .aurora{display:none}
.ccx .hero::before{background-image:linear-gradient(hsl(var(--primary) / .07) 1px,transparent 1px),linear-gradient(90deg,hsl(var(--primary) / .07) 1px,transparent 1px)}
.ccx .btn-primary{background:hsl(var(--cta));color:hsl(var(--cta-foreground));border:none;box-shadow:0 12px 30px -12px hsl(var(--cta) / .6)}
.ccx .btn-grad{color:hsl(var(--primary-foreground));border:none}
.ccx .btn-glass{background:hsl(var(--card));border-color:hsl(var(--border));color:hsl(var(--foreground))}
.ccx .btn-glass:hover{background:hsl(var(--accent));border-color:hsl(var(--primary) / .4)}
.ccx .card,.ccx .panel,.ccx .pkg,.ccx .step,.ccx .qcard,.ccx .form,.ccx .faq details,.ccx .chip,.ccx .team,.ccx .who-row{background:hsl(var(--card));border:1px solid hsl(var(--border));box-shadow:0 10px 30px -18px hsl(var(--foreground) / .18);color:hsl(var(--foreground))}
.ccx .card.dark,.ccx .cta-box{background:hsl(var(--primary));color:hsl(var(--primary-foreground));border:none}
.ccx .card.dark *,.ccx .cta-box h2,.ccx .cta-box p{color:hsl(var(--primary-foreground))}
.ccx .pkg.pop{border:2px solid hsl(var(--primary))}
.ccx input,.ccx textarea{background:hsl(var(--background));color:hsl(var(--foreground));border:1px solid hsl(var(--border))}
.ccx .marquee{background:hsl(var(--primary));color:hsl(var(--primary-foreground))}
.ccx .marquee i{color:hsl(var(--cta))}
.ccx .hl{color:hsl(var(--primary))}

/* Call-center accents */
.ccx .eyebrow{background:hsl(var(--primary) / .08);border-color:hsl(var(--primary) / .25);color:hsl(var(--primary))}
.ccx .eyebrow::before{content:"";width:15px;height:15px;background:currentColor;
  -webkit-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 14v-3a9 9 0 0 1 18 0v3'/%3E%3Cpath d='M21 16a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2zM3 16a2 2 0 0 0 2 2h1v-6H5a2 2 0 0 0-2 2z'/%3E%3C/svg%3E") center/contain no-repeat;
  mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 14v-3a9 9 0 0 1 18 0v3'/%3E%3Cpath d='M21 16a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2zM3 16a2 2 0 0 0 2 2h1v-6H5a2 2 0 0 0-2 2z'/%3E%3C/svg%3E") center/contain no-repeat}
.ccx .eyebrow .gdot{background:hsl(142 70% 45%);box-shadow:0 0 0 0 hsl(142 70% 45% / .6);animation:ccxPulse 1.6s infinite}
.ccx .chip .k{color:hsl(var(--primary));display:flex;align-items:center;gap:7px}
.ccx .chip .k::before{content:"";width:8px;height:8px;border-radius:50%;background:hsl(142 70% 45%);animation:ccxPulse 1.6s infinite}
.ccx .chip .l{color:hsl(var(--muted-foreground))}
.ccx .collage{position:relative}
.ccx .collage::before{content:"";position:absolute;left:50%;top:50%;width:120px;height:120px;margin:-60px 0 0 -60px;border-radius:50%;
  background:hsl(var(--primary)) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 14v-3a9 9 0 0 1 18 0v3'/%3E%3Cpath d='M21 16a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2zM3 16a2 2 0 0 0 2 2h1v-6H5a2 2 0 0 0-2 2z'/%3E%3C/svg%3E") center/52px no-repeat;
  box-shadow:0 0 0 14px hsl(var(--primary) / .12),0 0 0 30px hsl(var(--primary) / .06);animation:ccxRing 2.4s ease-in-out infinite;z-index:0}
.ccx .collage .chip{z-index:1}
@keyframes ccxPulse{0%{box-shadow:0 0 0 0 hsl(142 70% 45% / .55)}70%{box-shadow:0 0 0 8px hsl(142 70% 45% / 0)}100%{box-shadow:0 0 0 0 hsl(142 70% 45% / 0)}}
@keyframes ccxRing{0%,100%{box-shadow:0 0 0 14px hsl(var(--primary) / .12),0 0 0 30px hsl(var(--primary) / .06)}50%{box-shadow:0 0 0 20px hsl(var(--primary) / .08),0 0 0 42px hsl(var(--primary) / .03)}}
@media (prefers-reduced-motion:reduce){.ccx .collage::before,.ccx .gdot,.ccx .chip .k::before{animation:none}}
`;
export const callCenterThemeFix = `
.ccx *{font-family:var(--font-body)!important}
.ccx h1,.ccx h2,.ccx h3,.ccx h3 *,.ccx .btn,.ccx .k,.ccx .no,.ccx .fstage b,.ccx .th{font-family:var(--font-heading)!important}
.ccx .fstage.leak,.ccx .fstage.leak *{color:hsl(var(--cta))!important}
.ccx .ic{background:hsl(var(--primary) / .1)!important;color:hsl(var(--primary))!important}
.ccx .card.dark .ic,.ccx .feat .ic{background:hsl(var(--primary-foreground) / .2)!important;color:hsl(var(--primary-foreground))!important}
.ccx h1,.ccx h2,.ccx h3,.ccx .btn,.ccx .eyebrow,.ccx .k,.ccx .tag,.ccx .title,.ccx .amt{font-family:var(--font-heading)}
.ccx .hero{padding-top:110px}
.ccx .marquee span{color:hsl(var(--primary-foreground));opacity:.95}
.ccx .pl,.ccx .tag,.ccx .tags span{background:hsl(var(--card));border:1px solid hsl(var(--border));border-radius:100px}
.ccx .tag{color:hsl(var(--primary));background:hsl(var(--primary) / .08);border-color:hsl(var(--primary) / .2);padding:6px 14px}
`;
