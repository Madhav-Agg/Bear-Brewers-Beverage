import { motion } from "framer-motion";
import aboutBear from "@/assets/about-bear.png";

const steps = [
  { n: "01", t: "Source", d: "Glacier-pure water and hand-picked hops from the wild north." },
  { n: "02", t: "Brew", d: "Slow-crafted in copper kettles by bears who care." },
  { n: "03", t: "Chill", d: "Sub-zero conditioning locks in flavor and bite." },
  { n: "04", t: "Crack", d: "Open. Pour. Roar." },
];

export function Story() {
  return (
    <section id="story" className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute inset-0 [background:radial-gradient(ellipse_at_center,oklch(0.88_0.07_230/0.25),transparent_60%)] blur-2xl" />
          <img
            src={aboutBear}
            alt="Polar bear brewing premium beer"
            loading="lazy"
            className="relative z-10 w-full max-w-lg mx-auto animate-float"
          />
        </motion.div>

        <div>
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--ice)]">
            Our Story
          </span>
          <h2 className="mt-3 font-display text-5xl sm:text-6xl">
            Born in the <span className="text-gradient-gold">cold</span>,<br />
            built for the wild.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-lg">
            Bear Brewers started as a dare between friends in a frozen warehouse.
            Today it's a movement of beer drinkers who refuse to play it safe.
            Every can is brewed with bear-sized ambition and zero compromises.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl glass p-5 hover:border-[var(--gold)]/40 transition-colors"
              >
                <div className="font-display text-3xl text-gradient-gold">{s.n}</div>
                <div className="mt-1 font-semibold">{s.t}</div>
                <div className="text-sm text-muted-foreground mt-1">{s.d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
