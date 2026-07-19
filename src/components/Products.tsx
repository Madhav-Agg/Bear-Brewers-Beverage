import { motion } from "framer-motion";
import arcticGold from "@/assets/can-arctic-gold.png";
import polarPunch from "@/assets/can-polar-punch.png";
import berryFrost from "@/assets/can-berry-frost.png";
import mangoMelt from "@/assets/can-mango-melt.png";

const beers = [
  {
    name: "Arctic Gold",
    abv: "4.5%",
    notes: "Smooth premium lager · honey · biscuit",
    img: arcticGold,
    tag: "Light",
    accent: "from-[var(--gold)] to-[var(--amber)]",
  },
  {
    name: "Polar Punch",
    abv: "8.0%",
    notes: "Imperial IPA · pine · grapefruit · heat",
    img: polarPunch,
    tag: "Strong",
    accent: "from-[var(--amber)] to-orange-600",
  },
  {
    name: "Berry Frost",
    abv: "5.2%",
    notes: "Sour ale · blackberry · raspberry · ice",
    img: berryFrost,
    tag: "Fruity",
    accent: "from-fuchsia-500 to-purple-600",
  },
  {
    name: "Mango Melt",
    abv: "5.5%",
    notes: "Tropical wheat · mango · passionfruit",
    img: mangoMelt,
    tag: "Limited",
    accent: "from-orange-400 to-yellow-500",
  },
];

export function Products() {
  return (
    <section id="beers" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
              The Lineup
            </span>
            <h2 className="mt-3 font-display text-5xl sm:text-6xl lg:text-7xl">
              Pick Your <span className="text-gradient-gold">Brew</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Four cans. Four moods. Whether you're chilling in the den or running
            with the pack — there's a Bear for that.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {beers.map((b, i) => (
            <motion.article
              key={b.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="group relative overflow-hidden rounded-3xl glass-strong p-6 hover:border-[var(--gold)]/50 transition-all duration-500"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div
                className={`absolute -top-20 -right-20 h-48 w-48 rounded-full bg-gradient-to-br ${b.accent} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity`}
              />
              <div className="flex items-center justify-between text-xs">
                <span className="rounded-full glass px-3 py-1 uppercase tracking-wider">
                  {b.tag}
                </span>
                <span className="font-display text-2xl text-[var(--gold)]">
                  {b.abv}
                </span>
              </div>

              <div className="relative h-56 my-6 grid place-items-center">
                <img
                  src={b.img}
                  alt={b.name}
                  loading="lazy"
                  className="h-full object-contain transition-transform duration-700 group-hover:-translate-y-3 group-hover:rotate-3 drop-shadow-[0_20px_30px_rgba(0,0,0,0.6)]"
                />
              </div>

              <h3 className="font-display text-3xl">{b.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground min-h-[3rem]">
                {b.notes}
              </p>

              <button className="mt-6 w-full rounded-full bg-foreground/5 hover:bg-gradient-to-r hover:from-[var(--gold)] hover:to-[var(--amber)] hover:text-background py-3 text-sm font-bold uppercase tracking-wider transition-all">
                Grab a Can
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
