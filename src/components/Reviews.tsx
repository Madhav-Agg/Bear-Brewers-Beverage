import { motion } from "framer-motion";

const reviews = [
  { name: "Maya R.", role: "Beer nerd", text: "Polar Punch hits like a freight train wrapped in velvet. Best IPA of the year." },
  { name: "Jonas K.", role: "Bartender", text: "Customers ask for it by name. The branding alone sells the first round." },
  { name: "Lila P.", role: "Festival booker", text: "Berry Frost disappeared in 90 minutes. Bear Brewers is on the rider now." },
];

export function Reviews() {
  return (
    <section id="flavors" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
            Word from the Pack
          </span>
          <h2 className="mt-3 font-display text-5xl sm:text-6xl">
            Loud reviews. <span className="text-gradient-gold">Louder beers.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl glass-strong p-8 relative overflow-hidden"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="font-display text-6xl text-[var(--gold)]/30 leading-none">"</div>
              <p className="text-lg leading-relaxed -mt-4">{r.text}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[var(--gold)] to-[var(--amber)] grid place-items-center font-bold text-background">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
