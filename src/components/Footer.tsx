import { Instagram, Facebook, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-blush-soft pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-9 h-9 rounded-full bg-blush flex items-center justify-center font-serif text-ink text-lg">P</span>
              <span className="font-serif text-xl">Pastel Crumbs &amp; Co.</span>
            </div>
            <p className="font-serif text-2xl lg:text-3xl leading-snug max-w-md">
              Made with butter, sugar, and an absurd amount of love.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Visit</div>
            <address className="not-italic text-sm leading-relaxed text-foreground/80">
              122 Sakura Lane<br />
              Bloom District<br />
              Open Tue – Sun<br />
              7:30am – 6:00pm
            </address>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Follow</div>
            <a href="#" className="text-sm block mb-3 hover:text-foreground/60 transition-colors">@PastelCrumbs_Official</a>
            <div className="flex gap-3 mt-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Pastel Crumbs &amp; Co. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
