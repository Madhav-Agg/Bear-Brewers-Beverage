import { motion } from "framer-motion";
import { Bubbles } from "./Bubbles";
import heroBear from "@/assets/hero-bear.png";

export function Hero() {
  return (
    <section
      id="top"
      className="relative grain min-h-screen overflow-hidden pt-32 pb-20"
    >
      <Bubbles count={26} />
      <div className="absolute inset-0 -z-10 [background:var(--gradient-radial-glow)]" />

      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
            Premium Craft Beer
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-6 font-display text-6xl sm:text-7xl lg:text-8xl leading-[0.9]"
          >
            Brewed Wild.
            <br />
            <span className="text-gradient-gold">Served Cold.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 max-w-md text-lg text-muted-foreground"
          >
            Premium craft beer with bold flavors and icy attitude. Made for those
            who run with the bear pack.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#beers"
              className="group relative rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--amber)] px-8 py-4 text-sm font-bold uppercase tracking-wider text-background animate-pulse-glow"
            >
              Crack One Open
            </a>
            <a
              href="#story"
              className="rounded-full glass px-8 py-4 text-sm font-bold uppercase tracking-wider hover:bg-white/10 transition-colors"
            >
              Taste the Wild
            </a>
          </motion.div>

          <div className="mt-12 flex items-center gap-8 text-xs text-muted-foreground">
            <div>
              <div className="font-display text-2xl text-foreground">12+</div>
              Brews crafted
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <div className="font-display text-2xl text-foreground">100%</div>
              Arctic chilled
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <div className="font-display text-2xl text-foreground">∞</div>
              Bear energy
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 [background:var(--gradient-radial-glow)] blur-2xl" />
          <img
            src={heroBear}
            alt="Bear Brewers polar bear mascot opening a beer can"
            width={1024}
            height={1024}
            className="relative z-10 w-full max-w-xl mx-auto animate-float drop-shadow-[0_30px_60px_rgba(255,138,0,0.25)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
