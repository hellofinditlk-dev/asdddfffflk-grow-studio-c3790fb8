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
.ccx .marquee span,.ccx .marquee .track *{color:hsl(var(--primary-foreground))!important;-webkit-text-fill-color:hsl(var(--primary-foreground));opacity:1}.ccx .marquee i{color:hsl(var(--cta))!important;-webkit-text-fill-color:hsl(var(--cta))}
.ccx .pl,.ccx .tag,.ccx .tags span{background:hsl(var(--card));border:1px solid hsl(var(--border));border-radius:100px}
.ccx .tag{color:hsl(var(--primary));background:hsl(var(--primary) / .08);border-color:hsl(var(--primary) / .2);padding:6px 14px}
`;
export const callCenterPosCss = `
.ccx .ccx-flow{display:grid;grid-template-columns:repeat(6,1fr);gap:12px;margin-top:28px;counter-reset:s}
.ccx .ccx-fstep{position:relative;background:hsl(var(--card));border:1px solid hsl(var(--border));border-radius:16px;padding:18px 16px;box-shadow:0 10px 30px -20px hsl(var(--foreground) / .2)}
.ccx .ccx-fstep span{display:inline-grid;place-items:center;width:32px;height:32px;border-radius:10px;background:hsl(var(--primary));color:hsl(var(--primary-foreground));font-weight:700;font-size:13px;margin-bottom:10px}
.ccx .ccx-fstep b{display:block;font-size:15px;line-height:1.3;color:hsl(var(--foreground))}
.ccx .ccx-fstep:not(:last-child)::after{content:"→";position:absolute;right:-11px;top:50%;transform:translateY(-50%);color:hsl(var(--cta));font-weight:700;z-index:1}
.ccx .ccx-svc{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:24px}
.ccx .ccx-sv{background:hsl(var(--card));border:1px solid hsl(var(--border));border-radius:16px;padding:20px}
.ccx .ccx-sv h3{font-size:17px;margin-bottom:8px;color:hsl(var(--foreground))}
.ccx .ccx-sv p{font-size:14.5px;color:hsl(var(--muted-foreground))}
.ccx .ccx-pos a u{color:hsl(var(--primary))}
@media (max-width:900px){.ccx .ccx-flow{grid-template-columns:repeat(2,1fr)}.ccx .ccx-svc{grid-template-columns:1fr 1fr}.ccx .ccx-fstep::after{display:none}}
@media (max-width:560px){.ccx .ccx-svc{grid-template-columns:1fr}}
`;
export const callCenterVisCss = `
.ccx .ccx-fit-grid,.ccx .ccx-decision-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;margin-top:30px}
.ccx .ccx-fit,.ccx .ccx-decision-grid>article{background:hsl(var(--card));border:1px solid hsl(var(--border));border-radius:18px;padding:26px;box-shadow:0 16px 40px -30px hsl(var(--foreground) / .28)}
.ccx .ccx-fit.is-fit{border-top:4px solid hsl(var(--primary))}.ccx .ccx-fit.is-context{border-top:4px solid hsl(var(--muted-foreground) / .5)}
.ccx .ccx-fit-label{display:inline-block;margin-bottom:12px;color:hsl(var(--primary));font-size:12px;font-weight:800;text-transform:uppercase}
.ccx .ccx-fit h3,.ccx .ccx-decision-grid h2{margin:0 0 12px;color:hsl(var(--foreground));font-size:clamp(21px,2.3vw,30px)}
.ccx .ccx-fit ul{display:grid;gap:10px;padding:0;margin:18px 0 0;list-style:none}.ccx .ccx-fit li{position:relative;padding-left:24px;color:hsl(var(--foreground))}.ccx .ccx-fit li::before{content:"✓";position:absolute;left:0;color:hsl(var(--primary));font-weight:800}
.ccx .ccx-scope-note{margin-top:20px;padding:14px 16px;background:hsl(var(--accent));border-left:3px solid hsl(var(--cta));border-radius:8px;color:hsl(var(--foreground))}
.ccx .ccx-table-wrap{margin-top:28px;overflow-x:auto;border:1px solid hsl(var(--border));border-radius:18px;background:hsl(var(--card));box-shadow:0 18px 44px -34px hsl(var(--foreground) / .3)}
.ccx .ccx-compare-table{width:100%;min-width:690px;border-collapse:collapse}.ccx .ccx-compare-table th,.ccx .ccx-compare-table td{padding:15px 18px;text-align:left;border-bottom:1px solid hsl(var(--border));vertical-align:top}.ccx .ccx-compare-table th{background:hsl(var(--accent));color:hsl(var(--foreground))}.ccx .ccx-compare-table td:first-child{font-weight:700;color:hsl(var(--foreground))}
.ccx .ccx-yes,.ccx .ccx-no{display:inline-block;padding:5px 9px;border-radius:100px;font-size:12px;font-weight:700}.ccx .ccx-yes{background:hsl(142 60% 92%);color:hsl(142 60% 28%)}.ccx .ccx-no{background:hsl(var(--accent));color:hsl(var(--muted-foreground))}
.ccx .ccx-decision-grid>article p{color:hsl(var(--muted-foreground))}.ccx .ccx-mini-table{display:grid;margin:18px 0;border-top:1px solid hsl(var(--border))}.ccx .ccx-mini-table>div{display:grid;grid-template-columns:.8fr 1fr 1fr;gap:10px;padding:11px 0;border-bottom:1px solid hsl(var(--border));font-size:13px}.ccx .ccx-mini-table b{color:hsl(var(--foreground))}.ccx .ccx-mini-table span{color:hsl(var(--muted-foreground))}.ccx .ccx-fine{font-size:13px}
.ccx .ccx-factor-grid,.ccx .ccx-ind-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin-top:26px}.ccx .ccx-factor-grid>div,.ccx .ccx-ind-grid>article{padding:20px;background:hsl(var(--card));border:1px solid hsl(var(--border));border-radius:14px}.ccx .ccx-factor-grid b,.ccx .ccx-factor-grid span{display:block}.ccx .ccx-factor-grid b,.ccx .ccx-ind-grid h3{margin:0 0 7px;color:hsl(var(--foreground));font-size:16px}.ccx .ccx-factor-grid span,.ccx .ccx-ind-grid p{color:hsl(var(--muted-foreground));font-size:14px;margin:0}
.ccx .ccx-ba{display:grid;grid-template-columns:1fr auto 1fr;gap:16px;align-items:stretch;margin-top:40px}
.ccx .ccx-bcol{border-radius:18px;padding:22px 24px;border:1px solid hsl(var(--border));background:hsl(var(--card))}
.ccx .ccx-bcol.bad{background:hsl(0 80% 97%);border-color:hsl(0 70% 88%)}
.ccx .ccx-bcol.good{background:hsl(var(--primary) / .06);border-color:hsl(var(--primary) / .3)}
.ccx .ccx-bh{font-family:var(--font-heading)!important;font-weight:700;font-size:16px;margin-bottom:12px;color:hsl(var(--foreground))}
.ccx .ccx-bcol ul{margin:0;padding:0;list-style:none;display:grid;gap:9px}
.ccx .ccx-bcol li{font-size:15px;color:hsl(var(--foreground));padding-left:26px;position:relative}
.ccx .ccx-bcol.bad li::before{content:"✕";position:absolute;left:0;color:hsl(0 70% 55%);font-weight:700}
.ccx .ccx-bcol.good li::before{content:"✓";position:absolute;left:0;color:hsl(142 65% 38%);font-weight:700}
.ccx .ccx-arrow{display:grid;place-items:center}
.ccx .ccx-arrow span{background:hsl(var(--cta));color:hsl(var(--cta-foreground));font-weight:700;font-size:13px;padding:10px 16px;border-radius:100px;white-space:nowrap;box-shadow:0 10px 24px -10px hsl(var(--cta) / .7)}
.ccx .ccx-arrow span::after{content:" →"}
.ccx .ccx-sheet{margin-top:28px;border:1px solid hsl(var(--border));border-radius:18px;overflow:hidden;background:hsl(var(--card));box-shadow:0 20px 50px -30px hsl(var(--foreground) / .3)}
.ccx .ccx-sbar{display:flex;align-items:center;gap:10px;padding:12px 16px;background:hsl(142 55% 32%);color:hsl(0 0% 100%)}
.ccx .ccx-sbar .xls{display:grid;place-items:center;width:24px;height:24px;border-radius:6px;background:hsl(0 0% 100%);color:hsl(142 55% 32%);font-weight:800;font-size:13px}
.ccx .ccx-sbar b{font-size:14px;color:hsl(0 0% 100%)}.ccx .ccx-sbar small{margin-left:auto;font-size:12px;opacity:.85;color:hsl(0 0% 100%)}
.ccx .ccx-stable{overflow-x:auto}
.ccx .ccx-sheet table{width:100%;min-width:720px;border-collapse:collapse;font-size:14px}
.ccx .ccx-sheet th{text-align:left;background:hsl(var(--accent));color:hsl(var(--muted-foreground));font-weight:600;padding:10px 14px;border-bottom:1px solid hsl(var(--border))}
.ccx .ccx-sheet td{padding:10px 14px;border-bottom:1px solid hsl(var(--border));color:hsl(var(--foreground))}
.ccx .ccx-sheet em{font-style:normal;font-weight:600;font-size:12.5px;padding:3px 10px;border-radius:100px}
.ccx .st-answered{background:hsl(142 60% 92%);color:hsl(142 60% 28%)}.ccx .st-no,.ccx .st-wrong{background:hsl(var(--accent));color:hsl(var(--muted-foreground))}
.ccx .tg-hot{background:hsl(var(--cta) / .15);color:hsl(var(--cta))}.ccx .tg-warm{background:hsl(45 90% 90%);color:hsl(35 80% 35%)}.ccx .tg-cold{background:hsl(210 80% 93%);color:hsl(210 70% 40%)}.ccx .tg-na{color:hsl(var(--muted-foreground))}
@media (max-width:900px){.ccx .ccx-fit-grid,.ccx .ccx-decision-grid{grid-template-columns:1fr}.ccx .ccx-factor-grid,.ccx .ccx-ind-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.ccx .ccx-ba{grid-template-columns:1fr}.ccx .ccx-arrow span::after{content:" ↓"}}
@media (max-width:560px){.ccx .ccx-factor-grid,.ccx .ccx-ind-grid{grid-template-columns:1fr}.ccx .ccx-mini-table>div{grid-template-columns:1fr}.ccx .ccx-fit,.ccx .ccx-decision-grid>article{padding:20px}.ccx .ccx-table-wrap{margin-inline:-4px}}
`;
