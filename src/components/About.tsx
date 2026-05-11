import aboutImg from "@/assets/about.jpg";

export function About() {
  return (
    <section id="about" className="py-28 lg:py-40 bg-blush-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-soft">
            <img src={aboutImg} alt="Hand-painting cookies" width={1200} height={1200} loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-background rounded-2xl p-6 shadow-card max-w-[200px] hidden sm:block">
            <div className="font-serif text-3xl text-ink">est.</div>
            <div className="font-serif text-3xl text-ink">2018</div>
            <div className="text-xs text-muted-foreground mt-2 uppercase tracking-wider">Sakura Lane</div>
          </div>
        </div>

        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">— Our Story</span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-6 leading-[1.05]">
            A little sprinkle of joy, every single day.
          </h2>
          <p className="mt-8 text-lg text-foreground/70 leading-relaxed">
            At Pastel Crumbs, we believe every day deserves a little sprinkle of joy.
            We bake artisan bread and hand-painted cookies using organic ingredients
            sourced from small farms and family mills.
          </p>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed">
            Each piece leaves our kitchen by hand — no shortcuts, no machinery,
            just slow craft and the kind of patience your grandmother would approve of.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">
            {[
              { t: "Organic", d: "Single-origin flour & cane sugar" },
              { t: "Hand-painted", d: "Each cookie, individually finished" },
              { t: "Small batch", d: "Baked twice daily, never in bulk" },
              { t: "Local", d: "From our Bloom District kitchen" },
            ].map((f) => (
              <div key={f.t} className="border-t border-border pt-4">
                <div className="font-serif text-xl">{f.t}</div>
                <div className="text-sm text-muted-foreground mt-1">{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
