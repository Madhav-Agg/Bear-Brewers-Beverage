import logoIcon from "@/assets/logo-icon.png";

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-border pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2">
              <img src={logoIcon} alt="Bear Brewers" loading="lazy" className="h-12 w-12 object-contain drop-shadow-[0_0_12px_oklch(0.82_0.16_80/0.5)]" />
              <span className="font-display text-2xl tracking-wider">BEAR BREWERS</span>
            </div>
            <p className="mt-4 max-w-sm text-muted-foreground">
              Premium craft beer brewed wild in the arctic spirit. Drink bold,
              live louder.
            </p>
          </div>
          <div>
            <h4 className="font-display tracking-wider mb-4">Brewery</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>The Den · Reykjavík</li>
              <li>Outpost · Brooklyn</li>
              <li>Cabin · Berlin</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display tracking-wider mb-4">Follow</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Instagram</a></li>
              <li><a href="#" className="hover:text-foreground">TikTok</a></li>
              <li><a href="#" className="hover:text-foreground">Untappd</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Bear Brewers. Drink responsibly.</div>
          <div>Made cold. Served wild.</div>
        </div>
      </div>
    </footer>
  );
}
