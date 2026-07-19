export function Bubbles({ count = 18 }: { count?: number }) {
  const bubbles = Array.from({ length: count });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {bubbles.map((_, i) => {
        const size = 6 + Math.random() * 28;
        const left = Math.random() * 100;
        const dur = 8 + Math.random() * 14;
        const delay = Math.random() * 10;
        return (
          <span
            key={i}
            className="bubble"
            style={{
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDuration: `${dur}s`,
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}
    </div>
  );
}
