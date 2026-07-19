import logoIcon from "@/assets/logo-icon.png";

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 rounded-full bg-[var(--gradient-radial-glow)] blur-xl opacity-70" />
      <img
        src={logoIcon}
        alt="Bear Brewers"
        className="relative h-full w-full object-contain drop-shadow-[0_0_12px_oklch(0.82_0.16_80/0.5)]"
      />
    </div>
  );
}
