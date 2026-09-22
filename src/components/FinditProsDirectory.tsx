import { ExternalLink } from "lucide-react";

const tradeLinks = [
  { label: "Plumbers in Sri Lanka", url: "https://hub.findit.lk/pros/plumbers" },
  { label: "Electricians in Sri Lanka", url: "https://hub.findit.lk/pros/electricians" },
  { label: "AC repair & servicing in Sri Lanka", url: "https://hub.findit.lk/pros/ac-repair" },
  { label: "Carpenters in Sri Lanka", url: "https://hub.findit.lk/pros/carpenters" },
  { label: "House painters in Sri Lanka", url: "https://hub.findit.lk/pros/painters" },
  { label: "Masonry & construction workers", url: "https://hub.findit.lk/pros/masonry" },
  { label: "CCTV & security installers", url: "https://hub.findit.lk/pros/cctv" },
  { label: "Appliance repair services", url: "https://hub.findit.lk/pros/appliance-repair" },
  { label: "Pest control services in Sri Lanka", url: "https://hub.findit.lk/pros/pest-control" },
  { label: "House cleaning services", url: "https://hub.findit.lk/pros/house-cleaning" },
  { label: "Movers & lorry hire in Sri Lanka", url: "https://hub.findit.lk/pros/movers" },
];

/** Findit Pros directory placement section for the home services & construction page. */
const FinditProsDirectory = () => (
  <section className="py-20 lg:py-28 bg-secondary">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="text-center mb-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-4">
          Cypher Exclusive · Directory Placement
        </p>
        <h2 className="font-heading text-2xl md:text-3xl font-extrabold">
          Get Listed &amp; Ranked on Sri Lanka's Leading Home-Services Directory
        </h2>
      </div>

      <div className="space-y-5 text-sm text-muted-foreground leading-relaxed">
        <p>
          Paid ads generate leads while they run — but a strong directory presence keeps working for you every single day.
          As part of our targeted home services &amp; construction campaigns, Cypher Digital lists and promotes your
          business on{" "}
          <a
            href="https://hub.findit.lk/pros"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-primary underline decoration-primary/40 underline-offset-2 hover:text-primary/80"
          >
            Findit Pros
          </a>
          , Sri Lanka's verified home-services directory, on the exact trade category page where high-intent customers are
          already searching.
        </p>
        <p>
          Because these category pages rank on Google and are organised down to the town level, a homeowner searching for
          your service in Colombo, Kandy or Negombo is matched straight to your profile — no wasted enquiries, no
          per-click cost. We place your trade on the pages that matter:
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 my-8">
        {tradeLinks.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-2 p-4 rounded-lg bg-card border border-border text-sm font-medium hover:border-primary/60 hover:text-primary transition-colors"
          >
            <span className="flex-1">{link.label}</span>
            <ExternalLink className="w-3.5 h-3.5 mt-0.5 shrink-0 text-muted-foreground group-hover:text-primary" />
          </a>
        ))}
      </div>

      <p className="text-sm text-muted-foreground leading-relaxed">
        Serve a trade that isn't listed above? We cover{" "}
        <a
          href="https://hub.findit.lk/pros/services"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-primary underline decoration-primary/40 underline-offset-2 hover:text-primary/80"
        >
          every home-service category on Findit Pros
        </a>{" "}
        — from solar installers to roller-gate and shutter repair. We handle the full setup: a verified, NIC-checked
        profile with your services, service areas and photos, so your listing builds trust the moment a customer lands on
        it.
      </p>
    </div>
  </section>
);

export default FinditProsDirectory;
