import { useEffect, useState } from "react";
import logoIcon from "@/assets/logo-icon.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["Beers", "Flavors", "Story", "Merch", "Contact"];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-6 transition-all duration-500 ${
          scrolled ? "" : ""
        }`}
      >
        <nav
          className={`flex items-center justify-between rounded-full px-6 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong glow-gold/20" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2">
            <img src={logoIcon} alt="Bear Brewers" className="h-10 w-10 object-contain drop-shadow-[0_0_10px_oklch(0.82_0.16_80/0.5)]" />
            <span className="font-display text-xl tracking-wider">BEAR BREWERS</span>
          </a>
          <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="hover:text-foreground transition-colors"
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#beers"
            className="rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--amber)] px-5 py-2 text-sm font-semibold text-background hover:scale-105 transition-transform"
          >
            Order
          </a>
        </nav>
      </div>
    </header>
  );
}
