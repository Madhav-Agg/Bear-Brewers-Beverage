import { Bubbles } from "./Bubbles";

export function Newsletter() {
  return (
    <section id="merch" className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] glass-strong p-12 md:p-16 text-center grain"
             style={{ boxShadow: "var(--shadow-glow-gold)" }}>
          <Bubbles count={14} />
          <div className="absolute inset-0 [background:var(--gradient-radial-glow)] opacity-60" />
          <div className="relative z-10">
            <span className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
              Join the Bear Pack
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-6xl">
              Get exclusive brews,<br />
              <span className="text-gradient-gold">drops & bear-sized discounts.</span>
            </h2>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-10 mx-auto flex max-w-md gap-2 rounded-full glass p-1.5"
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent px-5 py-3 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button
                type="submit"
                className="rounded-full bg-gradient-to-r from-[var(--gold)] to-[var(--amber)] px-6 py-3 text-sm font-bold uppercase tracking-wider text-background hover:scale-105 transition-transform"
              >
                Join
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
