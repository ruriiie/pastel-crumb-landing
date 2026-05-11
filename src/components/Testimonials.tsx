import { useEffect, useRef, useState } from "react";
import { Star, ArrowLeft, ArrowRight } from "lucide-react";

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
  {
    name: "Priya N.",
    role: "Birthday cake order",
    text: "My daughter's pink velvet cake was a dream — soft, beautifully decorated, and tasted even better than it looked.",
  },
  {
    name: "Marcus L.",
    role: "Corporate gifting",
    text: "We've sent Pastel Crumbs boxes to clients for two holiday seasons. The presentation is unmatched. Always a hit.",
  },
];

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(1);
  const trackRef = useRef<HTMLDivElement>(null);
  const startX = useRef<number | null>(null);
  const deltaX = useRef(0);
  const [dragging, setDragging] = useState(false);

  useEffect(() => {
    const calc = () => setPerView(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const maxIndex = Math.max(0, reviews.length - perView);
  const safeIndex = Math.min(index, maxIndex);

  useEffect(() => {
    if (index > maxIndex) setIndex(maxIndex);
  }, [maxIndex, index]);

  const go = (dir: number) => {
    setIndex((i) => Math.min(maxIndex, Math.max(0, i + dir)));
  };

  const onPointerDown = (e: React.PointerEvent) => {
    startX.current = e.clientX;
    deltaX.current = 0;
    setDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (startX.current === null) return;
    deltaX.current = e.clientX - startX.current;
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(calc(${-safeIndex * (100 / perView)}% + ${deltaX.current}px))`;
    }
  };
  const onPointerUp = () => {
    if (startX.current === null) return;
    const threshold = 60;
    if (deltaX.current > threshold) go(-1);
    else if (deltaX.current < -threshold) go(1);
    if (trackRef.current) {
      trackRef.current.style.transform = "";
    }
    startX.current = null;
    deltaX.current = 0;
    setDragging(false);
  };

  return (
    <section className="py-28 lg:py-40 bg-foreground text-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-[0.3em] text-background/60">— Customer Love</span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-6 leading-[1.05]">
              Sweet words from sweeter people.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => go(-1)}
              disabled={safeIndex === 0}
              aria-label="Previous"
              className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center hover:bg-background hover:text-foreground transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-background"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => go(1)}
              disabled={safeIndex >= maxIndex}
              aria-label="Next"
              className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center hover:bg-background hover:text-foreground transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-background"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div
          className="relative -mx-6 lg:-mx-10 px-6 lg:px-10 select-none touch-pan-y"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
        >
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className={`flex ${dragging ? "" : "transition-transform duration-700 ease-out"}`}
              style={{ transform: `translateX(-${safeIndex * (100 / perView)}%)` }}
            >
              {reviews.map((r) => (
                <figure
                  key={r.name}
                  className="shrink-0 px-3 lg:px-4"
                  style={{ width: `${100 / perView}%` }}
                >
                  <div className="bg-background/5 backdrop-blur border border-background/10 rounded-3xl p-8 lg:p-10 h-full flex flex-col">
                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 fill-blush text-blush" />
                      ))}
                    </div>
                    <blockquote className="font-serif text-xl lg:text-2xl leading-snug text-background/90 flex-1">
                      "{r.text}"
                    </blockquote>
                    <figcaption className="mt-8 pt-6 border-t border-background/10">
                      <div className="text-sm">{r.name}</div>
                      <div className="text-xs text-background/60 mt-1">{r.role}</div>
                    </figcaption>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-10">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === safeIndex ? "w-8 bg-background" : "w-1.5 bg-background/30 hover:bg-background/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
