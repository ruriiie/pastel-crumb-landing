import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Pastel Crumbs & Co. — Wholesome Treats for Sweet Moments" },
      {
        name: "description",
        content: "Artisan bakery in Bloom District. Hand-painted cookies, fresh croissants, and signature macarons made daily with organic ingredients.",
      },
      { property: "og:title", content: "Pastel Crumbs & Co." },
      { property: "og:description", content: "Wholesome treats for sweet moments — artisan bakes, baked daily." },
    ],
  }),
});

type Float = { id: number; x: number; y: number };

function Index() {
  const [cart, setCart] = useState(0);
  const [floats, setFloats] = useState<Float[]>([]);

  const addToCart = (origin: { x: number; y: number }) => {
    setCart((c) => c + 1);
    const id = Date.now() + Math.random();
    setFloats((f) => [...f, { id, x: origin.x, y: origin.y }]);
    setTimeout(() => setFloats((f) => f.filter((x) => x.id !== id)), 800);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <Navbar cartCount={cart} />
      <main>
        <Hero />
        <About />
        <Menu onAdd={addToCart} />
        <Testimonials />
      </main>
      <Footer />

      {floats.map((f) => (
        <div
          key={f.id}
          className="fixed pointer-events-none z-[60] w-8 h-8 rounded-full bg-blush flex items-center justify-center text-ink text-xs font-serif animate-float-up shadow-soft"
          style={{ left: f.x - 16, top: f.y - 16 }}
        >
          +1
        </div>
      ))}
    </div>
  );
}
