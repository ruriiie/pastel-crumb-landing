import { useState } from "react";
import { Plus } from "lucide-react";
import macarons from "@/assets/macarons.jpg";
import croissants from "@/assets/croissants.jpg";
import cupcakes from "@/assets/cupcakes.jpg";
import latte from "@/assets/latte.jpg";

type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  img: string;
};

const products: Product[] = [
  { id: "1", name: "Lavender Honey Macarons", category: "Signature", price: "$14", img: macarons },
  { id: "2", name: "Cloud-Nine Croissants", category: "Daily Bakes", price: "$6", img: croissants },
  { id: "3", name: "Pink Velvet Cupcakes", category: "Daily Bakes", price: "$9", img: cupcakes },
  { id: "4", name: "Strawberry Matcha Latte", category: "Drinks", price: "$7", img: latte },
];

export function Menu({ onAdd }: { onAdd: (origin: { x: number; y: number }) => void }) {
  const [filter, setFilter] = useState<string>("All");
  const cats = ["All", "Signature", "Daily Bakes", "Drinks"];
  const filtered = filter === "All" ? products : products.filter((p) => p.category === filter);

  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    onAdd({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
  };

  return (
    <section id="menu" className="py-28 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">— Menu Highlights</span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl mt-6 leading-[1.05] max-w-xl">
              Today's little luxuries.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-5 py-2.5 rounded-full text-sm border transition-all ${
                  filter === c
                    ? "bg-foreground text-background border-foreground"
                    : "border-border hover:border-foreground/40 bg-card"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {filtered.map((p, i) => (
            <article
              key={p.id}
              className="group relative bg-card rounded-3xl overflow-hidden border border-border/60 hover:shadow-soft transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="aspect-square overflow-hidden bg-blush-soft">
                <img
                  src={p.img}
                  alt={p.name}
                  width={800}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  {p.category}
                </div>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-xl leading-tight">{p.name}</h3>
                  <div className="font-serif text-xl shrink-0">{p.price}</div>
                </div>
                <button
                  onClick={handleAdd}
                  className="mt-5 w-full flex items-center justify-center gap-2 py-3 rounded-full bg-blush-soft hover:bg-foreground hover:text-background text-sm transition-all"
                >
                  <Plus className="w-4 h-4" /> Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
