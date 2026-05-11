import heroImg from "@/assets/hero.jpg";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={heroImg} alt="Pink macarons and croissants on marble" width={1920} height={1280} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full grid lg:grid-cols-2 gap-12 py-20">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">
            <span className="w-8 h-px bg-foreground/40" /> Artisan Bakery · Est. 2018
          </span>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-ink">
            Wholesome treats for{" "}
            <span className="italic text-blush" style={{ color: "oklch(0.7 0.12 5)" }}>
              sweet
            </span>{" "}
            moments.
          </h1>
          <p className="mt-8 text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed">
            Hand-crafted bakes, painted by hand, baked with heart. A daily collection
            of small luxuries from our kitchen to your table.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#menu"
              className="group inline-flex items-center gap-2 bg-foreground text-background px-7 py-4 rounded-full text-sm tracking-wide hover:bg-foreground/90 transition-all shadow-soft"
            >
              Shop Now
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-sm tracking-wide border border-border hover:bg-blush-soft transition-colors"
            >
              Our Story
            </a>
          </div>

          <div className="mt-16 flex items-center gap-8 text-sm">
            <div>
              <div className="font-serif text-3xl text-ink">12k+</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Happy Bites</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <div className="font-serif text-3xl text-ink">100%</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Organic</div>
            </div>
            <div className="w-px h-10 bg-border" />
            <div>
              <div className="font-serif text-3xl text-ink">Daily</div>
              <div className="text-xs text-muted-foreground uppercase tracking-wider">Fresh Bakes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
