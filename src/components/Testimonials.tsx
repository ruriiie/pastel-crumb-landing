import { Star } from "lucide-react";

const reviews = [
  {
    name: "Amelia R.",
    role: "Regular since 2020",
    text: "The lavender macarons are unreal. I drive across town just for them — and the boxes are almost too pretty to open.",
  },
  {
    name: "Jordan K.",
    role: "Wedding client",
    text: "They hand-painted 200 cookies for our wedding favors. Every guest still talks about them two years later.",
  },
  {
    name: "Sora M.",
    role: "Saturday morning regular",
    text: "Cloud-Nine croissants live up to the name. Crisp, buttery, and the matcha latte is the perfect companion.",
  },
];

export function Testimonials() {
  return (
    <section className="py-28 lg:py-40 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-background/60">— Customer Love</span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-6 leading-[1.05]">
            Sweet words from sweeter people.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((r, i) => (
            <figure
              key={r.name}
              className="bg-background/5 backdrop-blur border border-background/10 rounded-3xl p-8 lg:p-10 hover:bg-background/10 transition-colors animate-fade-in-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-blush text-blush" />
                ))}
              </div>
              <blockquote className="font-serif text-xl lg:text-2xl leading-snug text-background/90">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-background/10">
                <div className="text-sm">{r.name}</div>
                <div className="text-xs text-background/60 mt-1">{r.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
