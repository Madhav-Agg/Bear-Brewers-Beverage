import { motion } from "framer-motion";
import logoMain from "@/assets/logo-main.png";
import logoIcon from "@/assets/logo-icon.png";
import logoBadge from "@/assets/logo-badge.png";
import logoNeon from "@/assets/logo-neon.png";
import logoGold from "@/assets/logo-gold.png";

const variants = [
  { src: logoMain, label: "Primary Mascot", note: "Hero lockup", bg: "bg-[oklch(0.1_0.005_240)]" },
  { src: logoIcon, label: "Icon Mark", note: "App / favicon", bg: "bg-gradient-to-br from-[var(--gold)]/20 to-transparent" },
  { src: logoBadge, label: "Brewery Badge", note: "Cans & coasters", bg: "bg-[oklch(0.08_0.005_240)]" },
  { src: logoNeon, label: "Neon Sign", note: "Bars & events", bg: "bg-black" },
  { src: logoGold, label: "Gold Embossed", note: "Luxury packaging", bg: "bg-[oklch(0.05_0_0)]" },
];

export function LogoShowcase() {
  return (
    <section id="brand" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.72_0.18_50/0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-[var(--gold)]">Identity System</span>
          <h2 className="mt-4 font-display text-5xl md:text-7xl">
            One <span className="text-gradient-gold">Bear</span>. Infinite Forms.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            A premium mascot system built for cans, neon, hoodies, and the front of every bar worth drinking in.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {variants.map((v, i) => (
            <motion.div
              key={v.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group relative aspect-square rounded-3xl overflow-hidden border border-border ${v.bg}`}
            >
              <div className="absolute inset-0 grid place-items-center p-8">
                <img
                  src={v.src}
                  alt={v.label}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-background/90 to-transparent">
                <div className="font-display text-xl tracking-wider">{v.label}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-widest">{v.note}</div>
              </div>
            </motion.div>
          ))}

          {/* Animation showcase tile */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative aspect-square rounded-3xl overflow-hidden glass-strong"
          >
            <div className="absolute inset-0 grid place-items-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-[var(--gradient-radial-glow)] blur-2xl animate-pulse-glow" />
                <img
                  src={logoIcon}
                  alt="Animated mark"
                  loading="lazy"
                  className="relative h-48 w-48 object-contain animate-float drop-shadow-[0_0_30px_oklch(0.82_0.16_80/0.7)]"
                />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="font-display text-xl tracking-wider">Loading Animation</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest">Glow · float · pulse</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
